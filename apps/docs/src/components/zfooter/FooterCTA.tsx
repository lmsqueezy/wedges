import Image from "next/image";

import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/Button";

export function FooterCTA() {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <div className="container">
        <div className="mb-[120px] flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[492px]">
            <p className="mb-8 text-sm font-medium uppercase leading-6 tracking-[2px] text-wg-yellow-500">
              Elevate your business
            </p>

            <h2 className="font-display text-4xl font-normal text-white lg:text-6xl">
              Take your business to the next level with Lemon Squeezy
            </h2>
          </div>

          <Button hoverEffect href={siteConfig.getStartedURL} size="lg" variant="tertiary">
            Get started for free
          </Button>
        </div>

        <Image
          src={`${siteConfig.basePath}/images/footer-graphic.png`}
          className="relative left-1/2 ml-10 min-w-[640px] -translate-x-1/2 lg:min-w-0"
          width={1360}
          height={756}
          alt="Get started with Lemon Squeezy"
        />
      </div>
    </div>
  );
}
