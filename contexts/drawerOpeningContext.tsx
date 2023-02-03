"use client";

import { createContext, useContext, useState } from "react";
import { DrawerContextType } from "../@types/drawer"; 

export const DrawerContext = createContext<DrawerContextType>(undefined!);

export function DrawerProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <DrawerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawer must be used within a DrawerContextProvider");
  }
  return context;
}