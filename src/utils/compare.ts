import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export const classCombiner = (...inputs: ClassValue[]) =>
  twMerge(clsx(inputs));


export const convertFaDigitsToEn = (str: string): string =>
  str.replace(/[۰-۹]/g, (digit) =>
    String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
  );

export const convertEnDigitsToFa = (str: string): string =>
  str.replace(/[0-9]/g, (digit) =>
    String("۰۱۲۳۴۵۶۷۸۹"[parseInt(digit)])
  );

