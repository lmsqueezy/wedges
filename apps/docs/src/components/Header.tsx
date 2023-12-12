import LemonSqueezyHeader from "./LemonSqueezyHeader";
import WedgesHeader from "./WedgesHeader";

async function getWebflowData(): Promise<{ caseStudy: WebflowData; blog: WebflowData }> {
  const webflowAPIUrl = "https://api.webflow.com/v2/collections";
  const blogId = process.env.WEBFLOW_BLOG_ID;
  const caseStudiesId = process.env.WEBFLOW_CASE_STUDIES_ID;
  const fetchHeaders = {
    Authorization: `Bearer ${process.env.WEBFLOW_API_KEY}`,
  };

  // Default objects with isArchived set to true
  const defaultCaseStudy: WebflowData = {
    isArchived: true,
    isDraft: true,
    id: "",
    image: "",
    title: "",
    url: "",
  };

  const defaultBlog = {
    isArchived: true,
    isDraft: true,
    id: "",
    image: "",
    title: "",
    url: "",
  };

  try {
    if (!blogId || !caseStudiesId) {
      throw new Error("Missing Webflow env data");
    }

    const blogUrl = `${webflowAPIUrl}/${blogId}/items?limit=1`;
    const caseStudiesUrl = `${webflowAPIUrl}/${caseStudiesId}/items?limit=1`;

    const [blogResponse, caseStudiesResponse] = await Promise.all([
      fetch(blogUrl, {
        next: {
          revalidate: 60 * 60 * 24, // Once in 24 hours
        },
        headers: fetchHeaders,
      }),

      fetch(caseStudiesUrl, {
        next: {
          revalidate: 60 * 60 * 24, // Once in 24 hours
        },
        headers: fetchHeaders,
      }),
    ]);

    if (!blogResponse.ok || !caseStudiesResponse.ok) {
      throw new Error("Failed to fetch Webflow data");
    }

    const [blogData, caseStudiesData] = await Promise.all([
      blogResponse.json(),
      caseStudiesResponse.json(),
    ]);

    const caseStudyPost = caseStudiesData.items[0];
    const caseStudy: WebflowData = {
      id: caseStudyPost.id,
      isArchived: caseStudyPost.isArchived,
      isDraft: caseStudyPost.isDraft,
      title: caseStudyPost.fieldData?.name,
      image: caseStudyPost.fieldData["case-study-image"]?.url,
      url: `https://www.lemonsqueezy.com/case-study/${caseStudyPost.fieldData?.slug}`,
    } as const;

    const blogPost = blogData.items[0];
    const blog: WebflowData = {
      id: blogPost.id,
      isArchived: blogPost.isArchived,
      isDraft: blogPost.isDraft,
      title: blogPost.fieldData?.name,
      image: blogPost.fieldData["main-image"]?.url,
      url: `https://www.lemonsqueezy.com/blog/${blogPost.fieldData?.slug}`,
    } as const;

    return { caseStudy, blog };
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.error(error.message);

      // Return default objects in case of error
      return { caseStudy: defaultCaseStudy, blog: defaultBlog };
    }
  }

  return { caseStudy: defaultCaseStudy, blog: defaultBlog };
}

export default async function Header() {
  const { caseStudy, blog } = await getWebflowData();

  return (
    <>
      <LemonSqueezyHeader caseStudy={caseStudy} blog={blog} />
      <WedgesHeader />
    </>
  );
}

export type WebflowData = {
  id: string;
  isArchived: boolean;
  isDraft: boolean;
  title: string;
  image: string;
  url: string;
};
