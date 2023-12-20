import { ArrowUpRightIcon, CheckIcon, EmojiSadIcon } from "@iconicicons/react";
import { Alert, Button } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="flex flex-col gap-6">
      {/* Example 1 */}
      <Alert color="success" title="Successfully uploaded!" before={<CheckIcon />} closable />

      {/* Example 2 */}
      <Alert
        title="You have no credits left!"
        color="warning"
        after={
          <Button
            variant="link"
            className="text-inherit hover:text-surface-900 dark:text-wg-yellow-500 dark:hover:text-yellow-300"
          >
            Upgrade
          </Button>
        }
      >
        Upgrade to continue.
      </Alert>

      {/* Example 3 */}
      <Alert
        before={<EmojiSadIcon />}
        color="error"
        title="There was a problem with your submission"
        variant="expanded"
      >
        <div>
          <p>Must include at least 1 number</p>
          <p>Must include at least 2 uppercase letters</p>
        </div>
      </Alert>

      {/* Example 4 */}
      <Alert
        title="A new software update is available. See what's new."
        closable
        color="info"
        variant="expanded"
        after={
          <Button
            variant="outline"
            className="light:bg-white"
            size="sm"
            after={<ArrowUpRightIcon />}
          >
            View the changelog
          </Button>
        }
      />
    </div>
  );
}
