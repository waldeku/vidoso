import { FaExclamationCircle } from "react-icons/fa";
import { IconBaseProps } from "react-icons";
import { twMerge } from "tailwind-merge";

import { iconStyles, wrapperStyles } from "./Error.styles";

interface ErrorProps extends IconBaseProps {
  message?: string;
}

const Error = ({ className, message, ...props }: ErrorProps) => {
  return (
    <div className={twMerge(wrapperStyles(), className)}>
      <FaExclamationCircle {...props} className={iconStyles()} />
      {message ? <span>{message}</span> : null}
    </div>
  );
};

export { Error };
