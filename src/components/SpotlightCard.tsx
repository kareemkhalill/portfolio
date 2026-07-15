"use client";

import type { HTMLAttributes, MouseEvent } from "react";

/* Card wrapper whose radial highlight follows the cursor (see .spotlight in globals.css). */
export default function SpotlightCard({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div onMouseMove={onMouseMove} className={`spotlight card-lift ${className}`} {...rest}>
      {children}
    </div>
  );
}
