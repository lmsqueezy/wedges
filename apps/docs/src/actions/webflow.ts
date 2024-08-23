"use server";

import {
  type WebflowCollectionBlogResponse,
  type WebflowCollectionCaseStudyResponse,
  type WebflowData,
} from "@/types/webflow";
import { webflowConfig } from "@/config/siteConfig";

/**
 * Retrieves data from the Webflow API.
 * @returns A promise that resolves to an object containing the blog and case study data.
 */
export async function getWebflowData() {
  const WEBFLOW_API_KEY = process.env.WEBFLOW_API_KEY;
  const { endpoint, blogId, caseStudiesId } = webflowConfig;

  const blogUrl = `${endpoint}/${blogId}/items?limit=10`;
  const caseStudiesUrl = `${endpoint}/${caseStudiesId}/items?limit=10`;

  if (!WEBFLOW_API_KEY) return null;

  const fetchHeaders = {
    Authorization: `Bearer ${WEBFLOW_API_KEY}`,
  };

  try {
    const [blogResponse, caseStudiesResponse] = await Promise.all([
      fetch(blogUrl, {
        next: { revalidate: 60 * 60 * 24, tags: ["nav"] },
        headers: fetchHeaders,
      }),

      fetch(caseStudiesUrl, {
        next: { revalidate: 60 * 60 * 24, tags: ["nav"] },
        headers: fetchHeaders,
      }),
    ]);

    if (!blogResponse.ok || !caseStudiesResponse.ok) {
      throw new Error("Failed to fetch Webflow data");
    }

    const [blogData, caseStudiesData] = await Promise.all([
      blogResponse.json() as Promise<WebflowCollectionBlogResponse>,
      caseStudiesResponse.json() as Promise<WebflowCollectionCaseStudyResponse>,
    ]);

    const publishedBlogPosts = blogData.items.filter((item) => !item.isDraft && !item.isArchived);

    const publishedCaseStudies = caseStudiesData.items.filter(
      (item) => !item.isDraft && !item.isArchived
    );

    // Sort published blog posts by lastPublished date in descending order
    const sortedPublishedBlogPosts = publishedBlogPosts.sort(
      (a, b) => new Date(b.lastPublished).getTime() - new Date(a.lastPublished).getTime()
    );

    // Sort published case studies by lastPublished date in descending order
    const sortedPublishedCaseStudies = publishedCaseStudies.sort(
      (a, b) => new Date(b.lastPublished).getTime() - new Date(a.lastPublished).getTime()
    );

    // Assuming there's at least one published item, get the first featured
    const blogPostData =
      sortedPublishedBlogPosts.length > 0
        ? (sortedPublishedBlogPosts.find((item) => item.fieldData.featured) ??
          sortedPublishedBlogPosts[0])
        : null;

    // Assuming there's at least one published item, get the first featured
    const caseStudyData =
      sortedPublishedCaseStudies.length > 0
        ? (sortedPublishedCaseStudies.find((item) => item.fieldData.featured) ??
          sortedPublishedCaseStudies[0])
        : null;

    return {
      blog: {
        id: blogPostData?.id ?? "",
        isArchived: blogPostData?.isArchived ?? true,
        isDraft: blogPostData?.isDraft ?? true,
        title: blogPostData?.fieldData.name ?? "",
        image: blogPostData?.fieldData["main-image"].url ?? "",

        url: `https://www.lemonsqueezy.com/blog/${blogPostData?.fieldData.slug ?? ""}`,
      },
      caseStudy: {
        id: caseStudyData?.id ?? "",
        isArchived: caseStudyData?.isArchived ?? true,
        isDraft: caseStudyData?.isDraft ?? true,
        title: caseStudyData?.fieldData.name ?? "",
        image: caseStudyData?.fieldData["case-study-image"].url ?? "",
        url: `https://www.lemonsqueezy.com/case-study/${caseStudyData?.fieldData.slug ?? ""}`,
      },
    } satisfies WebflowData;
  } catch (error) {
    // eslint-disable-next-line no-console -- Logging error
    console.error({ error });
  }
}
