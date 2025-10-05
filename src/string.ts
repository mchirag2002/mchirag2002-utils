export const capitalize = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  
export const truncate = (str: string, length: number): string =>
    str.length > length ? str.slice(0, length) + "..." : str;
  
export const slugify = (str: string): string =>
    str.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
  