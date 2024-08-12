import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { wrapperStyles } from "./MainView.styles";

interface MainViewProps extends HTMLAttributes<HTMLDivElement> {}

const MainView = ({ children, className, ...props }: MainViewProps) => (
  <main {...props} className={twMerge(wrapperStyles(), className)}>
    {children}
  </main>
);
export { MainView, type MainViewProps };
