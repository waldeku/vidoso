import { LiHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { itemStyles } from "./ListItem.styles";

type ListItemProps = LiHTMLAttributes<HTMLLIElement>;

const ListItem = ({ className, children, ...props }: ListItemProps) => {
  return (
    <li {...props} className={twMerge(itemStyles(), className)}>
      {children}
    </li>
  );
};

export { ListItem, type ListItemProps };
