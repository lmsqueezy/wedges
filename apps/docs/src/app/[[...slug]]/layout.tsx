import { type PageProps } from "@/types/page";
import { PreloadResources } from "@/components/PreloadResources";

export default async function Layout(props: PageProps) {
  const { children } = props;

  return (
    <>
      <PreloadResources />
      <div className="w-full xl:grid xl:grid-cols-[1fr_240px] xl:gap-16">{children}</div>
    </>
  );
}
