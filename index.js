const { execSync } = require('child_process');
const fs = require("fs")

exports.publish = async function publish(args) {
  if (args == "-v") return console.log(require("./package.json").version);
  let incrIndex = args == "-major" ? 0 : args == "-minor" ? 1 : 2
  let jsonPath = process.cwd() + "/package.json"
  let pjson = require(jsonPath)
  let numbers = pjson.version.split(".").map(Number)
  let oldVersion = pjson.version.split(".").map(Number).join(".")
  numbers[incrIndex] += 1
  pjson.version = numbers.join(".")
  console.log("Publishing to npm.")
  console.log(`Version changed ${oldVersion} -> ${pjson.version}.`)
  fs.writeFileSync(jsonPath, JSON.stringify(pjson))
  execSync("npm publish")
}


