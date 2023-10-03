import PageTitle from "@/components/PageTitle";

export default function ExamplePage() {
  return (
    <main>
      <PageTitle>Example</PageTitle>

      <div className="mt-24 flex flex-col gap-24">
        <section>
          <h2 className="mb-8 text-xl">Wedges Palette</h2>
          <div className="grid grid-cols-10 gap-2 text-white">
            <ColorItem className="bg-wg-white text-black">White</ColorItem>
            <ColorItem className="bg-wg-black">Black</ColorItem>
            <ColorItem className="bg-wg-blue">Blue</ColorItem>
            <ColorItem className="bg-wg-gray">Gray</ColorItem>
            <ColorItem className="bg-wg-green">Green</ColorItem>
            <ColorItem className="bg-wg-orange">Orange</ColorItem>
            <ColorItem className="bg-wg-pink">Pink</ColorItem>
            <ColorItem className="bg-wg-purple">Purple</ColorItem>
            <ColorItem className="bg-wg-red">Red</ColorItem>
            <ColorItem className="bg-wg-yellow">Yellow</ColorItem>
          </div>
        </section>
      </div>
    </main>
  );
}
type ColorItemProps = {
  className?: string;
  children?: React.ReactNode;
};

const ColorItem = ({ className, children }: ColorItemProps) => {
  return (
    <div className={`${className} flex aspect-square items-center justify-center rounded text-sm`}>
      {children}
    </div>
  );
};
