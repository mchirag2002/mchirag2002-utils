export const sum = (a: number, b: number): number => a + b;
export const average = (nums: number[]): number => 
  nums.reduce((a, b) => a + b, 0) / nums.length;
export const clamp = (num: number, min: number, max: number): number => 
  Math.min(Math.max(num, min), max);
