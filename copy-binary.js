const { copyFileSync, mkdirSync } = require("fs");

const achsMap = {
  arm: "rpi",
  arm64: "aarch64",
};

const arch = achsMap[process.arch] || process.arch;
const version = require("./package.json").dependencies["better-sqlite3"];
console.log("Current architecture:", arch);
console.log("Current better-sqlite3 version:", version);

const inFile =
  __dirname + "/node_modules/better-sqlite3/build/Release/better_sqlite3.node";
const outFolder = `${__dirname}/bin/${version}/${arch}`;
const outFile = `${outFolder}/better_sqlite3.node`;

mkdirSync(outFolder, { recursive: true });
console.log("Created output folder");
copyFileSync(inFile, outFile);
console.log("Copied binary file");
