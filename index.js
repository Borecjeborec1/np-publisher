const { execSync } = require('child_process');
const fs = require("fs")




exports.publish = async function publish(args) {
  if (args == "-v") return console.log(require("./package.json").version);
  let jsonPath = __dirname + "/package.json"
  let pjson = require(jsonPath)
  let numbers = pjson.version.split(".").map(Number)
  numbers[2] += 1
  pjson.version = numbers.join(".")
  console.log(pjson)
  fs.writeFileSync(jsonPath, JSON.stringify(pjson))
  execSync("npm publish")
}


