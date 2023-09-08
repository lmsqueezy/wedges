type PageTitleProps = {
  children: React.ReactNode;
};

const PageTitle = ({ children }: PageTitleProps) => {
  return <h1 className="mb-10 text-5xl font-medium">{children}</h1>;
};

export default PageTitle;
