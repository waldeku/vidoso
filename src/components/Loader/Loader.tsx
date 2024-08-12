import { FaSpinner } from "react-icons/fa";
import { IconBaseProps } from "react-icons";
import { twMerge } from "tailwind-merge";

import { loaderStyles } from "./Loader.styles";

const Loader = ({ className, ...props }: IconBaseProps) => {
  return (
    <FaSpinner {...props} className={twMerge(loaderStyles(), className)} />
  );
};

export { Loader };
