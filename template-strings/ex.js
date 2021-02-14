function upper(strings, ...values) {
  return strings.reduce((acc, cur, idx) => {
    if (idx > 0) {
      acc += `${values[idx - 1]}`.toUpperCase();
    }
    acc += cur;
    return acc;
  }, "");
}

var name = "kyle",
  twitter = "getify",
  topic = "JS Recent Parts";

console.log(
  upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
    "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);

console.log("Hello".padStart(8, "."));
console.log("Hello".padStart(8, "*."));
console.log("Hi".padEnd(5, "&."));
