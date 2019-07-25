import React, { Component } from "react";
import FilterTag from "./FilterTag";
import { Tag } from "antd";
import "antd/";
import "antd/dist/antd.css";

class Group {
  constructor(id, title, tags) {
    this.id = id;
    this.title = title;
    this.tags = tags;
  }

  checkAll() {
    this.tags.forEach(tag => tag.check());
  }
}

class FilterGroup extends Component {
  static defaultProps = {
    title: "Filter"
  };

  handleToggle = text => {
    this.props.toggle(this.props.data.id, text);
  };

  selectAll = () => this.props.selectAll(this.props.data.id);

  render() {
    let { title, tags } = this.props.data;
    const titleStyle = {
      fontSize: "18px",
      fontColor: "blue",
      marginRight: "20px"
    };
    return (
      <div
        style={{
          display: "inline-block",
          float: "left",
          marginLeft: "10px",
          height: "35px"
        }}
      >
        <span style={titleStyle}>{title}:</span>
        {tags.map(ele => (
          <FilterTag
            key={ele.text}
            text={ele.text}
            checked={ele.checked}
            toggle={this.handleToggle}
          />
        ))}

        <Tag color="orange" onClick={this.selectAll}>
          选择全部
        </Tag>
      </div>
    );
  }
}

export default FilterGroup;
export { Group };
