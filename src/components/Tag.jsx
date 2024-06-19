import React from "react";

function Tag({ text }) {
  return (
    <span className="inline-block rounded-[4px] bg-yellow px-3 py-1 text-[clamp(0.75rem,0.706rem+0.1878vi,0.875rem)] font-bold">
      {text}
    </span>
  );
}

export default Tag;
