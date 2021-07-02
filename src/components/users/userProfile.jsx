import React from "react";
import Avatar from "@material-ui/core/Avatar";

export function UserProfile({ username, size }) {
  return (
    <Avatar>
      <img
        alt="profile"
        src={`https://robohash.org/${username}`}
        width={60}
        height={60}
      />
    </Avatar>
  );
}
