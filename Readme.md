# @mchirag2002/utils

A lightweight collection of reusable TypeScript utility functions for everyday web development — including helpers for math, strings, objects, and API fetch wrappers.

Link - https://www.npmjs.com/package/@mchirag2002/utils

---

## 🚀 Installation

```bash
npm install @mchirag2002/utils
````

or with yarn:

```bash
yarn add @mchirag2002/utils
```

---

## 📦 Usage

### Import the utilities

```ts
import { sum, capitalize, deepClone, fetchJSON } from "@mchirag2002/utils";
```

### ✨ Examples

#### 🧮 Math Utils

```ts
sum(10, 20); // 30
average([10, 20, 30]); // 20
randomInt(1, 10); // e.g. 7
```

#### 🔤 String Utils

```ts
capitalize("hello world"); // "Hello world"
slugify("Hello World from Chirag!"); // "hello-world-from-chirag"
```

#### 🧠 Object Utils

```ts
const obj = { a: 1, b: { c: 2 } };
const clone = deepClone(obj);
clone.b.c = 10;

console.log(obj.b.c); // 2 (original object not affected)
```

#### 🌐 Fetch Utils

```ts
const data = await fetchJSON("https://jsonplaceholder.typicode.com/todos/1");
console.log(data);
```

---

## 🧱 Utilities Included

| Category   | Function                   | Description                   |
| ---------- | -------------------------- | ----------------------------- |
| **Math**   | `sum(a, b)`                | Adds two numbers              |
|            | `average(numbers[])`       | Calculates average            |
|            | `randomInt(min, max)`      | Returns random integer        |
| **String** | `capitalize(str)`          | Capitalizes first letter      |
|            | `slugify(str)`             | Converts to URL-friendly slug |
| **Object** | `deepClone(obj)`           | Creates deep copy             |
|            | `mergeObjects(obj1, obj2)` | Deep merges two objects       |
| **Fetch**  | `fetchJSON(url, options?)` | Fetch wrapper returning JSON  |

---

## 🛠️ Development

Clone the repo and build locally:

```bash
git clone https://github.com/mchirag2002/utils.git
cd utils
npm install
npm run build
```

---

## 🧩 Project Structure

```
src/
 ┣ math.ts
 ┣ string.ts
 ┣ object.ts
 ┣ fetch.ts
 ┗ index.ts
```

---

## 📄 License

MIT © [Chirag Mathur](https://github.com/mchirag2002)
