import React from "react";

export function SectionSeparator() {
  return (
    <div className="relative ">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t-2 border-green-500/30"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-gradient-to-r from-transparent via-green-500/50 to-transparent h-0.5 w-40"></div>
      </div>
    </div>
  );
} 