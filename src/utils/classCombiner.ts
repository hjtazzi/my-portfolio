import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export const classCombiner = (...inputs: ClassValue[]) =>
  twMerge(clsx(inputs));
