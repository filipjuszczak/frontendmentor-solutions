import React from "react";
import Avatar from "./Avatar";

function Author({ name, avatarUrl }) {
  return (
    <div className="flex items-center gap-2">
      <Avatar imageUrl={avatarUrl} />
      <p className="text-xs font-bold">{name}</p>
    </div>
  );
}

export default Author;
