import React from "react";

function Tag({ text }) {
  return (
    <span className="tag bg-yellow mb-2 inline-block rounded-md px-[10px] py-1 text-xs font-bold">
      {text}
    </span>
  );
}

export default Tag;
