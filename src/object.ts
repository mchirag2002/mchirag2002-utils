export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

export const deepMerge = <T, U>(target: T, source: U): T & U => {
	const result: any = { ...target };
	for (const key in source) {
		if (
			typeof source[key] === "object" &&
			!Array.isArray(source[key]) &&
			source[key] !== null
		) {
			result[key] = deepMerge(result[key] || {}, source[key]);
		} else {
			result[key] = source[key];
		}
	}
	return result;
};
