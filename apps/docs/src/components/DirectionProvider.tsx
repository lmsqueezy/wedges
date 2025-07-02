'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const DirectionContext = createContext({ dir: 'ltr', setDir: (dir: 'ltr' | 'rtl') => {} });

export const useDirection = () => useContext(DirectionContext);

export const DirectionProvider = ({ children }) => {
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