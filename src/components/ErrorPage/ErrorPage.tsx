import { HTMLAttributes } from "react";
import { TbError404 } from "react-icons/tb";

import { iconStyles, messageStyles, wrapperStyles } from "./ErrorPage.styles";
import { twMerge } from "tailwind-merge";

const ErrorPage = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={twMerge(wrapperStyles(), className)}>
      <TbError404 className={iconStyles()} />
      <p className={messageStyles()}>Page not found</p>
    </div>
  );
};

export { ErrorPage };
