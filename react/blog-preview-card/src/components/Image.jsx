import React from "react";

function Image({ src, alt }) {
  return <img src={src} alt={alt} className="rounded-xl border" />;
}

export default Image;
