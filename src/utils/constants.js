import { version } from "../../package.json";

//当前 package.json 的版本号
export const VERSION = version;

// 用户的根目录
const HOME = process.env[process.platform === "win32" ? "USERPROFILE" : "HOME"];

// 配置文件目录
export const RC = `${HOME}/.avengersrc`;

// RC 配置下载模板的地方，给 github 的 api 使用
// https://api.github.com/users/ytxbnahn/repos
// https://api.github.com/${type}/${registry}/repos
// 模板下载地址可配置
export const DEFAULTS = {
  registry: "ytxbnahn",
  type: "users"
};

export const TEMPLATES = 
[
  {
    key: "1",
    name: "集成TypeScrpt MobX React-Router",
    value: "avengers-template-base"
  },
  {
    key: "2",
    name: "集成TypeScrpt MobX React-Router 添加部分业务组件",
    value: "avengers-template-gm-business"
  },
  {
    key: "3",
    name: "用于普通公众号开发",
    value: "avengers-tempage-h5"
  },
]