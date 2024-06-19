import React from "react";

function Image({ src, alt }) {
  return <img src={src} alt={alt} className="rounded-[10px]" />;
}

export default Image;
