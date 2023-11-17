"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type SidebarProps = {
  isSidebarOpen: boolean;
  isSearchOpen: boolean;
  toggleSidebar: () => void;
  toggleSearch: () => void;
};

const SidebarContext = createContext<SidebarProps>({
  isSidebarOpen: false,
  isSearchOpen: false,
  toggleSidebar: () => {},
  toggleSearch: () => {},
});

export const useSidebar = () => useContext(SidebarContext);

export function Providers({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  // Toggle off on ESC key press
  useEffect(() => {
    if (!isSidebarOpen) {
      return;
    }

    const handleEsc = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isSidebarOpen]);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const toggleSearch = useCallback(() => {
    setSearchOpen((prev) => !prev);
  }, []);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, isSearchOpen, toggleSearch }}>
      {children}
    </SidebarContext.Provider>
  );
}
