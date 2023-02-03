"use client";

import { FilterContextType } from "../@types/filter";
import { createContext, PropsWithChildren, useContext, useState } from "react";

export const StatusFilterContext = createContext<FilterContextType>(undefined!);

export function StatusFilterProvider({ children }: PropsWithChildren) {
  const [ filters, setFilters ] = useState({
    filter: new Set(["draft", "pending", "paid"]),
  })

  return (
    <StatusFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </StatusFilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(StatusFilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterContextProvider");
  }
  return context;
}