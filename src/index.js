import React from "react";
import ReactDOM from "react-dom";
import Filter from "./components/Filter";

const Hobby = {
  title: "爱好",
  data: ["运动", "阅读", "电子游戏", "编程", "音乐", "电影"]
};

const AgeRange = {
  title: "年龄",
  data: ["12岁以下", "12~18", "18~60", "60岁以上"]
};

ReactDOM.render(
  <Filter initialData={[Hobby, AgeRange]} />,
  document.getElementById("root")
);
