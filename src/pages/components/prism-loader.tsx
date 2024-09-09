"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-typescript";

/* 
    Add this component on any page where you use the following component:
*/
export default function PrismLoader() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <div className="hidden"></div>;
}

export function Code({ children }: { children: string }) {
  return (
    <pre className="language-js">
      <code className="language-js">{children}</code>
    </pre>
  );
}
