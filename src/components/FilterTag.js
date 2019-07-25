import React, { Component } from "react";
import { Tag } from "antd";
import "antd/dist/antd.css";

export class FilterTagObj {
  constructor(text, checked) {
    this.text = text;
    this.checked = arguments.length > 1 ? checked : true;
  }

  isChecked() {
    return this.checked;
  }

  check() {
    this.checked = true;
  }

  uncheck() {
    this.checked = false;
  }

  toggle() {
    this.checked = !this.checked;
  }
}

export default class FilterTag extends Component {
  handleToggle = checked => this.props.toggle(this.props.text);

  tagStyle = {
    border: "1px solid blue",
    borderRadius: "10px"
  };

  render() {
    const { text, checked } = this.props;
    return (
      <Tag.CheckableTag
        checked={checked}
        onChange={this.handleToggle}
        style={this.tagStyle}
      >
        {text}
      </Tag.CheckableTag>
    );
  }
}
