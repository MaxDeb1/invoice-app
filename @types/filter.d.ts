export type FilterContextType = {
    filters: { filter: Set<string>; }
    setFilters: Dispatch<SetStateAction<{ filter: Set<string>; }>>
};