import { cva } from "class-variance-authority";

export const wrapperStyles = cva(["w-full", "p-3", "bg-sky-500"]);

export const inputWrapperStyles = cva([
  "w-full",
  "flex",
  "items-center",
  "gap-4",
  "rounded-full",
  "py-2",
  "px-4",
  "bg-white",
]);

export const iconStyles = cva(["text-gray-400"]);

export const inputStyles = cva([
  "flex-1",
  "text-black",
  "outline-none",
  "text-gray-800",
]);
