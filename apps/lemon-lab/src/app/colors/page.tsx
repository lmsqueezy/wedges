import PageTitle from "@/components/PageTitle";

export default function ExamplePage() {
  return (
    <main>
      <PageTitle>Example</PageTitle>

      <div className="mt-24 flex flex-col gap-24">
        <section>
          <h2 className="mb-8 text-xl">Themeable Colors</h2>

          <div className="flex items-center gap-6">
            <div className="bg-primary border-primary-borders flex h-80 w-80 rounded-2xl p-4">
              <div className="flex grow flex-col items-center justify-center gap-2">
                <p className="text-primary-foreground-contrast">Contrast</p>
                <p className="text-primary-foreground-contrast-softer">Contrast Softer</p>
              </div>
            </div>

            <div className="bg-primary-subtle border-primary-borders flex h-80 w-80 rounded-2xl border p-4">
              <div className="flex grow flex-col items-center justify-center gap-2">
                <p className="text-primary-foreground">Foreground</p>
                <p className="text-primary-foreground-softer">Foreground Softer</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-6">
            <div className="bg-secondary hover:bg-secondary-softer border-secondary-borders flex h-80 w-80 rounded-2xl p-4">
              <div className="flex grow flex-col items-center justify-center gap-2">
                <p className="text-secondary-foreground-contrast">Contrast</p>
                <p className="text-secondary-foreground-contrast-softer">Contrast Softer</p>
              </div>
            </div>

            <div className="bg-secondary-subtle border-secondary-borders flex h-80 w-80 rounded-2xl border p-4">
              <div className="flex grow flex-col items-center justify-center gap-2">
                <p className="text-secondary-foreground">Foreground</p>
                <p className="text-secondary-foreground-softer">Foreground Softer</p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-4 gap-4">
            <ColorItem className="bg-primary text-primary-foreground">Primary</ColorItem>
            <ColorItem className="bg-secondary text-secondary-foreground">Secondary</ColorItem>
            <ColorItem className="bg-destructive text-destructive-foreground">
              Destructive
            </ColorItem>

            <ColorItem className="bg-background text-background-foreground border-background-borders border">
              Background
            </ColorItem>

            <ColorItem className="bg-surface text-surface-foreground border-surface-borders flex flex-col border">
              <div>Surface</div>
              <div className="text-surface-3-foreground-muted">Muted</div>
            </ColorItem>

            <ColorItem className="bg-surface-2 text-surface-2-foreground border-surface-2-borders flex flex-col border">
              <div>Surface 2</div>
              <div className="text-surface-3-foreground-muted">Muted</div>
            </ColorItem>

            <ColorItem className="bg-surface-3 text-surface-3-foreground border-surface-3-borders flex flex-col border">
              <div>Surface 3</div>
              <div className="text-surface-3-foreground-muted">Muted</div>
            </ColorItem>
          </div>
        </section>

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
