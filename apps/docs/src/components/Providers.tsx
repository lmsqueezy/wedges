"use client";

import { createContext, useContext, useState } from "react";

type SidebarProps = { isOpen: boolean; toggle: () => void };

const SidebarContext = createContext<SidebarProps>({ isOpen: false, toggle: () => {} });

export const useSidebar = () => useContext(SidebarContext);

export function Providers({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return <SidebarContext.Provider value={{ isOpen, toggle }}>{children}</SidebarContext.Provider>;
}
