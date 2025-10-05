declare const sum: (a: number, b: number) => number;
declare const average: (nums: number[]) => number;
declare const clamp: (num: number, min: number, max: number) => number;

declare const capitalize: (str: string) => string;
declare const truncate: (str: string, length: number) => string;
declare const slugify: (str: string) => string;

declare const deepClone: <T>(obj: T) => T;
declare const deepMerge: <T, U>(target: T, source: U) => T & U;

declare function fetchWrapper<T>(url: string, options?: RequestInit): Promise<T>;

export { average, capitalize, clamp, deepClone, deepMerge, fetchWrapper, slugify, sum, truncate };
