import { getWebflowData } from "@/actions/webflow";

import WedgesHeader from "../WedgesHeader";
import { Logo } from "./logo";
import { HeaderActions } from "./navigation/header-actions";
import { MainNav } from "./navigation/main-nav";

export async function Header() {
  const webflowData = await getWebflowData();

  return (
    <>
      <header className="relative flex flex-col border-b border-white/20 bg-primary text-white/60">
        <div className="relative z-[10] lg:z-[999]">
          <div className="container grid min-h-[88px] grid-cols-2 items-center justify-start gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <Logo />
            <MainNav webflowData={webflowData} />
            <HeaderActions />
          </div>
        </div>
      </header>

      <WedgesHeader />
    </>
  );
}
