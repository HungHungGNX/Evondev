const str = "Frontend Developer";
console.log(str.split(" ")); // ["Frontend","Developer"]
console.log(str.split("")); // ["F","r","o"]
console.log(str.split("/")); // ["Frontend Developer"]
console.log(str.toLocaleUpperCase()); //   "FRONTEND DEVELOPER"
console.log(str.toLocaleLowerCase()); // "frontend developer"
console.log(str.startsWith("frontend")); // false
console.log(str.endsWith("Developer")); // true
console.log(str.includes("end")); // true
console.log(str.indexOf("D")); // 9
console.log(str.lastIndexOf("D")); // 19
console.log(str.replace("Developer", "Designer"));
console.log(str.repeat(5));
console.log(str.slice(0, 8));
console.log(str.slice(0)); // Frontend Developer
console.log(str.slice(999)); //("");
console.log(str.trim()); // remove space left and right
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.charAt(1)); //
