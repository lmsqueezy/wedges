'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const DirectionContext = createContext({ dir: 'ltr', setDir: (_dir: 'ltr' | 'rtl') => { /* no-op */ } });

export const useDirection = () => useContext(DirectionContext);

export const DirectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <DirectionContext.Provider value={{ dir, setDir }}>
      {children}
    </DirectionContext.Provider>
  );
};