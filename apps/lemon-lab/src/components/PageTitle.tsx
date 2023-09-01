type PageTitleProps = {
  children: React.ReactNode;
};

const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <h1 className="text-wg-6xl text-wg-dark-1 mb-10 font-semibold dark:text-white">{children}</h1>
  );
};

export default PageTitle;
