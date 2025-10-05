"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  average: () => average,
  capitalize: () => capitalize,
  clamp: () => clamp,
  deepClone: () => deepClone,
  deepMerge: () => deepMerge,
  fetchWrapper: () => fetchWrapper,
  slugify: () => slugify,
  sum: () => sum,
  truncate: () => truncate
});
module.exports = __toCommonJS(index_exports);

// src/math.ts
var sum = (a, b) => a + b;
var average = (nums) => nums.reduce((a, b) => a + b, 0) / nums.length;
var clamp = (num, min, max) => Math.min(Math.max(num, min), max);

// src/string.ts
var capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
var truncate = (str, length) => str.length > length ? str.slice(0, length) + "..." : str;
var slugify = (str) => str.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

// src/object.ts
var deepClone = (obj) => JSON.parse(JSON.stringify(obj));
var deepMerge = (target, source) => {
  const result = { ...target };
  for (const key in source) {
    if (typeof source[key] === "object" && !Array.isArray(source[key]) && source[key] !== null) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
};

// src/fetch.ts
async function fetchWrapper(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  average,
  capitalize,
  clamp,
  deepClone,
  deepMerge,
  fetchWrapper,
  slugify,
  sum,
  truncate
});
