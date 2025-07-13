import { cn } from "@/lib/utils";
import React from "react";

export default function GridBackgroundDemo() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.1)_1px,transparent_1px)]",
        )}
      />
      {/* Subtle center fade effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>
    </div>
  );
} 