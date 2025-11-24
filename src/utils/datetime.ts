import axios from "axios";
import type { TDate, TDateRange } from "../types";


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
  let years = end.getUTCFullYear() - start.getUTCFullYear();
  let months = end.getUTCMonth() - start.getUTCMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
}


export const formatDate = (date: TDate, format: "en" | "fa"): string => {
  const d = new Date(Date.UTC(date.y, date.m - 1, date.d));


  if (format === "en") {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(d);
  } else {
    const formatYear = new Intl.DateTimeFormat("fa-IR", { year: "numeric" }).format(d);
    const formatMonth = new Intl.DateTimeFormat("fa-IR", { month: "long" }).format(d);

    return `${formatMonth} ${formatYear}`;
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
    const years = r.end.getFullYear() - r.start.getFullYear();
    let months = r.end.getMonth() - r.start.getMonth();

    totalMonths += years * 12 + months;
  });

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  };
}
