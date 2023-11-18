import {
  CheckIcon,
  CloseIcon,
  FlagIcon,
  PinTackIcon,
  PlayIcon,
  SpinnerIcon,
  StarIcon,
} from "@iconicicons/react";
import { Badge } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function BadgePage() {
  const colors = [
    "primary",
    "green",
    "orange",
    "red",
    "pink",
    "purple",
    "blue",
    "yellow",
    "gray",
  ] as const;

  return (
    <main>
      <PageTitle>Badge</PageTitle>

      <div className="mt-24 flex flex-col gap-24">
        <section className="space-y-6">
          <h2 className="mb-8 text-xl">Without Stroke</h2>

          <section>
            <div className="flex flex-wrap items-start gap-2">
              {colors.map((color, index) => (
                <Badge
                  key={`${color}-${index}`}
                  after={<StarIcon />}
                  before={<CloseIcon />}
                  color={color}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <div className="flex flex-wrap items-start gap-2">
              {colors.map((color) => (
                <Badge
                  key={`pill-${color}`}
                  after={<StarIcon />}
                  before={<CloseIcon />}
                  color={color}
                  shape="pill"
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Badge>
              ))}
            </div>
          </section>
        </section>

        <section className="space-y-6">
          <h2 className="mb-8 text-xl">With Stroke</h2>

          <section>
            <div className="flex flex-wrap items-start gap-2">
              {colors.map((color) => (
                <Badge
                  key={color}
                  after={<StarIcon />}
                  before={<CloseIcon />}
                  color={color}
                  stroke={true}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <div className="flex flex-wrap gap-2">
              {colors.map((color, i) => (
                <Badge
                  key={color + i}
                  after={<StarIcon />}
                  before={<CloseIcon />}
                  color={color}
                  shape="pill"
                  stroke={true}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Badge>
              ))}
            </div>
          </section>
        </section>

        <section className="space-y-6">
          <h2 className="mb-8 text-xl">Playground</h2>

          <section>
            <div className="flex flex-wrap items-start gap-2">
              <Badge before={<CheckIcon />} color="green" shape="pill">
                Paid
              </Badge>

              <Badge before={<CheckIcon />} color="green" stroke={true}>
                Active
              </Badge>

              <Badge before={<CheckIcon />} color="green">
                Subscribed
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

              <Badge before={<CloseIcon />}>Void</Badge>
              <Badge before={<CloseIcon />}>Expired</Badge>
              <Badge before={<CloseIcon />}>Draft</Badge>

              <Badge
                before={
                  <span className="before:bg-wg-green flex h-4 w-4 items-center justify-center rounded-full before:flex before:aspect-square before:w-[6px] before:rounded-full before:content-['']" />
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

              <Badge before={<CloseIcon />} color="pink" shape="pill" stroke={true} />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
