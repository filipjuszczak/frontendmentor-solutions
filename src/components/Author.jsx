import React from "react";
import Avatar from "./Avatar";

function Author({ name, avatarUrl }) {
  return (
    <div className="mt-6 flex items-center gap-3">
      <Avatar imageUrl={avatarUrl} />
      <p className="text-[0.875rem] font-extrabold">{name}</p>
    </div>
  );
}

export default Author;
