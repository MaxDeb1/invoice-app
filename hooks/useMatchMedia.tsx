"use client";

import { useState, useEffect } from "react";

function useMatchMedia() {
  const [match, updateMatch] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = "(max-width: 960px)";
    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleChange = (event: MediaQueryListEvent) => {
      updateMatch(event.matches);
    };

    mediaQueryList.addEventListener("change", handleChange);

    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, []);

    return match;
}

export default useMatchMedia;