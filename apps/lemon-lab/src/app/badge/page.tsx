import { Badge } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";
import {
  CheckIcon,
  CloseIcon,
  FlagIcon,
  PinTackIcon,
  PlayIcon,
  SpinnerIcon,
  StarIcon,
} from "@iconicicons/react";

export default function BadgePage() {
  const colors = ["green", "orange", "red", "pink", "purple", "blue", "yellow", "default"] as const;

  return (
    <main>
      <PageTitle>Badge</PageTitle>

      <div className="mt-24 flex flex-col gap-24">
        <section className="space-y-6">
          <h2 className="mb-8 text-xl">Without Stroke</h2>

          <section>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <Badge
                  after={<StarIcon width={16} height={16} />}
                  before={<CloseIcon width={16} height={16} />}
                  color={color}
                  key={color}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <Badge
                  after={<StarIcon width={16} height={16} />}
                  before={<CloseIcon width={16} height={16} />}
                  color={color}
                  key={`pill-${color}`}
                  variant="pill"
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
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <Badge
                  after={<StarIcon width={16} height={16} />}
                  before={<CloseIcon width={16} height={16} />}
                  color={color}
                  key={color}
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
                  after={<StarIcon width={16} height={16} />}
                  before={<CloseIcon width={16} height={16} />}
                  color={color}
                  key={color}
                  stroke={true}
                  variant="pill"
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
            <div className="flex flex-wrap gap-2">
              <Badge variant="pill" before={<CheckIcon width={16} height={16} />} color="green">
                Paid
              </Badge>

              <Badge stroke={true} before={<CheckIcon width={16} height={16} />} color="green">
                Active
              </Badge>

              <Badge before={<CheckIcon width={16} height={16} />} color="green">
                Subscribed
              </Badge>

              <Badge
                variant="pill"
                stroke={true}
                before={<CheckIcon width={16} height={16} />}
                color="green"
              >
                200
              </Badge>

              <Badge variant="pill" before={<CloseIcon width={16} height={16} />} color="red">
                Rejected
              </Badge>

              <Badge stroke={true} before={<CloseIcon width={16} height={16} />} color="red">
                Chargeback
              </Badge>

              <Badge
                variant="pill"
                stroke={true}
                before={<CloseIcon width={16} height={16} />}
                color="red"
              >
                Chargeback
              </Badge>

              <Badge before={<CloseIcon width={16} height={16} />}>Void</Badge>
              <Badge before={<CloseIcon width={16} height={16} />}>Expired</Badge>
              <Badge before={<CloseIcon width={16} height={16} />}>Draft</Badge>

              <Badge
                before={
                  <span className="before:bg-wg-green flex h-4 w-4 items-center justify-center rounded-full before:flex before:aspect-square before:w-2 before:rounded-full before:content-['']" />
                }
              >
                Online
              </Badge>

              <Badge color="blue" variant="pill" before={<SpinnerIcon width={16} height={16} />}>
                Processing
              </Badge>

              <Badge color="blue" stroke={true} before={<FlagIcon width={16} height={16} />}>
                Flagged
              </Badge>

              <Badge color="blue" stroke={true} variant="pill">
                Washington D.C.
              </Badge>

              <Badge color="red" variant="pill">
                4
              </Badge>

              <Badge before={<PinTackIcon width={16} height={16} />} color="yellow" stroke={true}>
                Pinned
              </Badge>

              <Badge before={<PlayIcon width={16} height={16} />} color="pink" variant="pill">
                1m 30s
              </Badge>

              <Badge
                before={<CloseIcon width={16} height={16} />}
                color="pink"
                stroke={true}
                variant="pill"
              />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
