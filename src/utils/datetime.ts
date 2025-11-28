import axios from "axios";
import { toJalaali } from "jalaali-js";
import { convertEnDigitsToFa } from "./";
import type { TDate, TDateRange } from "../types";


const FA_MONTHS = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند",];

const API_PRIMARY = (key: string) => `https://api.timezonedb.com/v2.1/get-time-zone?key=${key}&format=json&by=zone&zone=UTC`;
const API_SECOND = "https://timeapi.io/api/Time/current/zone?timeZone=UTC";
const API_THIRD = "https://aisenseapi.com/services/v1/datetime";


export const getAccurateNow = async (): Promise<Date> => {
  try {
    const res = await axios.get(API_PRIMARY("RV8CEOJVU2T6"), { timeout: 5000 });

    if (res.data?.formatted) {
      const { formatted } = res.data;
      const date = new Date(formatted);

      localStorage.setItem("lastValidDate", date.toISOString());
      return date;
    }
  } catch (_) { }

  try {
    const res = await axios.get(API_SECOND, { timeout: 3000 });

    if (res.data?.dateTime) {
      const { dateTime } = res.data;
      const date = new Date(dateTime);

      localStorage.setItem("lastValidDate", date.toISOString());
      return date;
    }
  } catch (_) { }

  try {
    const res = await axios.get(API_THIRD, { timeout: 3000 });

    if (res.data?.datetime) {
      const { datetime } = res.data;
      const date = new Date(datetime);

      localStorage.setItem("lastValidDate", date.toISOString());
      return date;
    }
  } catch (_) { }

  const cached = localStorage.getItem("lastValidDate");
  if (cached)
    return new Date(cached);

  return new Date();
}


export const diffDate = (start: Date, end: Date) => {
  const totalMonths =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    (end.getUTCMonth() - start.getUTCMonth()) +
    1;

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  };
}


export const formatDate = (date: TDate, format: "en" | "fa"): string => {
  const newDate = new Date(Date.UTC(date.y, date.m - 1, date.d || 1));

  if (format === "en") {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(newDate);
  } else {
    const { jy, jm } = toJalaali(newDate);
    return `${FA_MONTHS[jm - 1]} ${convertEnDigitsToFa(jy.toString())}`
  }
}


export const mergeDateIntervals = (ranges: TDateRange[]): TDateRange[] => {
  if (ranges.length === 0)
    return [];

  const sorted = [...ranges].sort((a, b) =>
    a.start.getTime() - b.start.getTime());

  const merged: TDateRange[] = [];
  let current = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const next = sorted[i];

    if (next.start.getTime() <= current.end.getTime()) {
      current.end = new Date(Math.max(current.end.getTime(), next.end.getTime()));
    } else {
      merged.push(current);
      current = next;
    }
  }

  merged.push(current);
  return merged;
}


export const calcDateRange = (ranges: TDateRange[]) => {
  let totalMonths = 0;

  ranges.forEach(r => {
    const { years, months } = diffDate(r.start, r.end);

    totalMonths += years * 12 + months;
  });

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  };
}
