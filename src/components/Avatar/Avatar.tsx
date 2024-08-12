import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { User } from "src/types";

import { avatarStyles } from "./Avatar.styles";

type AvatarProps = HTMLAttributes<HTMLSpanElement> & Pick<User, "username">;

const Avatar = ({ username, className, ...props }: AvatarProps) => {
  return (
    <span {...props} className={twMerge(avatarStyles(), className)}>
      {username.charAt(0).toUpperCase()}
    </span>
  );
};

export { Avatar };
