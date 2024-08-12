import { cva } from "class-variance-authority";

export const rootStyles = cva(["flex", "flex-col"]);

export const triggerStyles = cva([
  "bg-sky-400",
  "flex",
  "flex-1",
  "items-center",
  "justify-center",
  "cursor-pointer",
  "text-white",
  "py-2",
  "data-[state=active]:bg-sky-600",
]);
