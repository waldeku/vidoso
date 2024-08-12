import { cva } from "class-variance-authority";

export const itemStyles = cva([
  "flex",
  "items-center",
  "gap-4",
  "py-2",
  "border-b",
  "border-gray-200",

  "last:border-b-0",
]);
