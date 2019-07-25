import React, { Component } from "react";
import { Modal, Select } from "antd";
import "antd/dist/antd.css";

class SelectItem extends Component {
  handleChange(groupId, value) {
    this.props.change(groupId, value);
  }

  render() {
    const { group } = this.props;
    return (
      <div style={{ width: "90%", margin: "20px auto" }} key={group.id}>
        <p>{group.title}</p>
        <Select
          mode="multiple"
          onChange={this.handleChange.bind(this, group.id)}
          style={{ width: "100%" }}
        >
          {group.tags.map(tag => (
            <Select.Option key={tag.text} value={tag.text}>
              {tag.text}
            </Select.Option>
          ))}
        </Select>
      </div>
    );
  }
}

class TagSelector extends Component {
  constructor(props) {
    super(props);
    this.newGroups = this.props.groups;
  }
  newGroups = [];

  handleCancel = () => {
    this.props.cancel();
  };

  handleOk = () => {
    this.props.ok(this.newGroups);
  };

  handleChange = (groupId, value) => {
    const findGroupWithID = groups => groups.find(ele => ele.id === groupId);
    let targetGroup = findGroupWithID(this.newGroups);
    if (!targetGroup) {
      targetGroup = findGroupWithID(this.props.groups);
      this.newGroups.push(targetGroup);
    }
    for (let tag of targetGroup.tags) {
      if (value.includes(tag.text)) tag.check();
      else tag.uncheck();
    }
  };

  render() {
    let { groups } = this.props;
    return (
      <Modal
        title="请选择过滤项"
        visible={true}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        {groups.map(group => (
          <SelectItem key={group.id} group={group} change={this.handleChange} />
        ))}
      </Modal>
    );
  }
}

export default TagSelector;
