const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("brower","program")

console.log("The content is")
console.log(text);

console.log("creating a new file")
fs.writeFileSync("rohan.txt", text)