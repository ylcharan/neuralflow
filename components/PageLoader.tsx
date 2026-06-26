"use client";

import { useEffect } from "react";

export default function PageLoader() {
  useEffect(() => {
    const hideLoader = () => {
      const loader = document.getElementById("page-loader");
      if (loader) {
        loader.classList.add("is-hidden");
      }
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(hideLoader);
    } else {
      setTimeout(hideLoader, 1000);
    }
  }, []);

  return (
    <div id="page-loader" className="page-loader" aria-hidden="true">
      <span className="page-loader__dot" />
      <span className="page-loader__dot" />
      <span className="page-loader__dot" />
    </div>
  );
}
