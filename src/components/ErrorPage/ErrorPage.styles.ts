import { cva } from "class-variance-authority";

export const wrapperStyles = cva([
  "flex",
  "flex-col",
  "items-center",
  "justify-center",
  "h-full",
  "w-full",
]);

export const iconStyles = cva(["w-16", "h-16"]);

export const messageStyles = cva(["text-xl"]);
