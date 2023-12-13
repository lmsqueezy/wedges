import {
  CheckIcon,
  CloseIcon,
  FlagIcon,
  PinTackIcon,
  PlayIcon,
  SpinnerIcon,
} from "@iconicicons/react";
import { Badge } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <>
      <div className="flex flex-wrap items-start justify-center gap-2">
        <Badge before={<CheckIcon />} color="green" shape="pill">
          Paid
        </Badge>

        <Badge before={<CheckIcon />} color="green" stroke={true}>
          Active
        </Badge>

        <Badge before={<CheckIcon />} color="green" shape="pill" stroke={true}>
          200
        </Badge>

        <Badge before={<CloseIcon />} color="red" shape="pill">
          Rejected
        </Badge>

        <Badge before={<CloseIcon />} color="primary" stroke={true}>
          Chargeback
        </Badge>

        <Badge before={<CloseIcon />} color="red" shape="pill" stroke={true}>
          Chargeback
        </Badge>

        <Badge before={<CloseIcon />}>Expired</Badge>

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

        <Badge before={<FlagIcon />} color="blue" stroke={true}>
          Flagged
        </Badge>

        <Badge color="blue" shape="pill" stroke={true}>
          Washington D.C.
        </Badge>

        <Badge color="red" shape="pill">
          4
        </Badge>

        <Badge before={<PinTackIcon />} color="yellow" stroke={true}>
          Pinned
        </Badge>

        <Badge before={<PlayIcon />} color="pink" shape="pill">
          1m 30s
        </Badge>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
        <Badge color="green" size="sm" shape="pill" stroke={true}>
          New York City
        </Badge>

        <Badge color="orange" size="sm" shape="pill">
          1
        </Badge>

        <Badge before={<PinTackIcon />} size="sm" color="yellow" stroke={true}>
          Pinned
        </Badge>

        <Badge before={<PlayIcon />} size="sm" color="pink" shape="pill">
          1m 30s
        </Badge>
      </div>
    </>
  );
}
