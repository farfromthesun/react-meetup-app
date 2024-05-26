import { useEffect, useState } from "react";

export function useMountedAnimation() {
  const [sectionMounted, setSectionMounted] = useState(false);

  useEffect(() => {
    setSectionMounted(true);
  }, []);

  return sectionMounted;
}
