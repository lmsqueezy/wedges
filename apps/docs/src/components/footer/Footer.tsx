import { CopyrightLine } from "./CopyrightLine";
import { FooterCTA } from "./FooterCTA";
import { FooterNav } from "./FooterNav";

export function Footer() {
  return (
    <footer className="[&_a:not(.hover-effect)]:duration-180 mt-24 bg-purple-600 py-20 text-white/60 lg:py-40 [&_a:not(.hover-effect)]:transition-colors">
      <FooterCTA />
      <FooterNav />
      <CopyrightLine />
    </footer>
  );
}
