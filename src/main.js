import program from "commander";
import { VERSION } from "./utils/constants";
import apply from "./index";
import chalk from "chalk";

/**
 * avengers commands
 *    - config
 *    - init
 */

let actionMap = {
  init: {
    description: "generate a new project from a template",
    usages: ["avengers init templateName projectName"]
  },
  config: {
    alias: "cfg",
    description: "config .avengersrc",
    usages: [
      "avengers config set <k> <v>",
      "avengers config get <k>",
      "avengers config remove <k>"
    ]
  }
  //other commands
};

// 添加 init / config 命令
Object.keys(actionMap).forEach(action => {
  program
    .command(action)
    .description(actionMap[action].description)
    .action(() => {
      switch (action) {
        case "config":
          //配置
          apply(action, ...process.argv.slice(3));
          break;
        case "init":
          apply(action, ...process.argv.slice(3));
          break;
        default:
          break;
      }
    });
});

function help() {
  console.log("\r\nUsage:");
  Object.keys(actionMap).forEach(action => {
    actionMap[action].usages.forEach(usage => {
      console.log("  - " + usage);
    });
  });
  console.log("\r");
}
program.usage("<command> [options]");
// avengers -h
program.on("-h", help);
program.on("--help", help);
// avengers -V   VERSION 为 package.json 中的版本号
program.version(VERSION, "-V --version").parse(process.argv);

// avengers 不带参数时
if (!process.argv.slice(2).length) {
  program.outputHelp(make_green);
}
function make_green(txt) {
  return chalk.green(txt);
}
