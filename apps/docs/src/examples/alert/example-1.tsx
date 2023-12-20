import { Alert, Button } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <Alert
      closable
      color="primary"
      onClose={() => alert("onClose callback")}
      title="The data export you requested is ready!"
      variant="expanded"
      after={
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="light:bg-white">
            View the data
          </Button>

          <Button variant="link" size="sm" className="text-surface-500 hover:text-surface-900">
            Maybe later
          </Button>
        </div>
      }
    />
  );
}
