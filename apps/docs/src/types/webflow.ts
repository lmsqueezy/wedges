export type WebflowData = {
  blog: WebflowResource;
  caseStudy: WebflowResource;
} | null;

export type WebflowResource = {
  id: string;
  isArchived: boolean;
  isDraft: boolean;
  title: string;
  image: string;
  url: string;
};

export type WebflowCollectionCaseStudyResponse = {
  items: {
    id: string;
    isArchived: boolean;
    isDraft: boolean;
    lastPublished: string;
    fieldData: {
      featured?: boolean;
      name: string;
      slug: string;
      "case-study-image": {
        url: string;
      };
    };
  }[];
};

export type WebflowCollectionBlogResponse = {
  items: {
    lastPublished: string;
    id: string;
    isArchived: boolean;
    isDraft: boolean;
    fieldData: {
      featured?: boolean;
      name: string;
      slug: string;
      "main-image": {
        url: string;
      };
    };
  }[];
};
