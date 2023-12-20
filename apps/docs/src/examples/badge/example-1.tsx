import * as React from "react";
import {
  BookmarkIcon,
  CheckIcon,
  CloseIcon,
  EmojiHappyIcon,
  FlagIcon,
  HashtagIcon,
  HeartIcon,
  LockIcon,
  MinusIcon,
  PinIcon,
  PinTackIcon,
  PlayIcon,
  ShieldTickIcon,
  SpinnerIcon,
  UndoIcon,
  WifiIcon,
} from "@iconicicons/react";
import { Avatar, Badge } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="mx-auto flex max-w-fit flex-col items-start gap-4">
      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<CheckIcon />} color="green" shape="pill">
          Paid
        </Badge>

        <Badge before={<CheckIcon />} color="green" stroke>
          Active
        </Badge>

        <Badge before={<CheckIcon />} color="green" shape="pill">
          Paid
        </Badge>

        <Badge before={<CheckIcon />} color="green" stroke shape="pill">
          200
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<CloseIcon />} color="red" shape="pill">
          Rejected
        </Badge>

        <Badge before={<CloseIcon />} color="red" stroke>
          Chargeback
        </Badge>

        <Badge before={<MinusIcon />} color="red" shape="pill" stroke>
          Disconnected
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<CloseIcon />} shape="pill">
          Void
        </Badge>

        <Badge before={<CloseIcon />} stroke>
          Expired
        </Badge>

        <Badge before={<CloseIcon />}>Draft</Badge>

        <Badge before={<DotIcon className="text-wg-green" />} shape="pill" stroke>
          Online
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<SpinnerIcon />} color="blue" shape="pill">
          Processing
        </Badge>

        <Badge before={<FlagIcon />} color="blue" stroke>
          Flagged
        </Badge>

        <Badge color="blue" shape="pill" stroke>
          Washington D.C.
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge color="pink" shape="pill">
          Special
        </Badge>

        <Badge color="pink" stroke>
          Trial
        </Badge>

        <Badge before={<BookmarkIcon />} color="pink">
          Bookmarked
        </Badge>

        <Badge before={<HashtagIcon />} color="pink" shape="pill" stroke>
          Live
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<UndoIcon />} color="yellow" shape="pill">
          Moved
        </Badge>

        <Badge color="yellow" stroke>
          New
        </Badge>

        <Badge before={<ShieldTickIcon />} color="yellow">
          Secure
        </Badge>

        <Badge before={<LockIcon />} color="yellow" shape="pill" stroke>
          Locked
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge color="orange" shape="pill">
          Beta
        </Badge>

        <Badge before={<EmojiHappyIcon />} color="orange" stroke>
          Hello!
        </Badge>

        <Badge before={<PlayIcon />} color="orange">
          1m 30s
        </Badge>

        <Badge before={<PinIcon />} color="orange" shape="pill" stroke>
          Pinned
        </Badge>

        <Badge color="orange" shape="pill" stroke>
          4
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<HeartIcon />} color="primary" shape="pill">
          Design Systems
        </Badge>

        <Badge
          before={<Avatar size="xxs" src="https://github.com/ormanclark.png" />}
          color="primary"
          shape="pill"
        >
          @ormanclark
        </Badge>

        <Badge before={<WifiIcon />} color="primary" shape="pill">
          Free Wi-Fi
        </Badge>
      </div>
    </div>
  );
}

export function Example2() {
  return (
    <div className="mx-auto flex max-w-fit flex-col items-start gap-4">
      <Badge
        before={
          <span className="flex h-4 w-4 items-center justify-center rounded-full before:flex before:aspect-square before:w-[6px] before:rounded-full before:bg-wg-green before:content-['']" />
        }
      >
        Online
      </Badge>

      <Badge before={<SpinnerIcon />} color="blue" shape="pill">
        Processing
      </Badge>

      <Badge before={<FlagIcon />} color="blue" stroke>
        Flagged
      </Badge>

      <Badge color="blue" shape="pill" stroke>
        Washington D.C.
      </Badge>

      <Badge color="red" shape="pill">
        4
      </Badge>

      <Badge before={<PinTackIcon />} color="yellow" stroke>
        Pinned
      </Badge>

      <Badge before={<PlayIcon />} color="pink" shape="pill">
        1m 30s
      </Badge>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
        <Badge color="green" size="sm" shape="pill" stroke>
          New York City
        </Badge>

        <Badge color="orange" size="sm" shape="pill">
          1
        </Badge>

        <Badge before={<PinTackIcon />} size="sm" color="yellow" stroke>
          Pinned
        </Badge>

        <Badge before={<PlayIcon />} size="sm" color="pink" shape="pill">
          1m 30s
        </Badge>
      </div>
    </div>
  );
}

/* ---------------------------------- Icons --------------------------------- */
const DotIcon = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  (props, ref) => (
    <svg {...props} fill="none" height="24" ref={ref} viewBox="0 0 24 24" width="24">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  )
);
