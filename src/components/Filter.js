import React, { Component } from "react";
import { Card, Icon } from "antd";
import "antd/dist/antd.css";

import { FilterTagObj } from "./FilterTag";
import FilterGroup, { Group } from "./FilterGroup";
import TagSelector from "./TagSelector";

class Filter extends Component {
  constructor(props) {
    super(props);

    const prepareGroups = () => {
      let result = [];
      const { initialData } = this.props;
      for (let i = 1; i <= initialData.length; i++) {
        const tags = [];
        let curGroup = initialData[i - 1];
        curGroup.data.forEach(item => tags.push(new FilterTagObj(item, true)));
        result.push(new Group(i, curGroup.title, tags));
      }
      return result;
    };

    this.state = {
      groups: prepareGroups(),
      showTagSelctor: false
    };
  }

  handleToggle = (id, text) => {
    const targetGroup = this.state.groups.find(g => g.id === id);
    const targetTag = targetGroup.tags.find(tag => tag.text === text);
    if (!targetTag) {
      throw Error(`sth's wrong, go fix it`);
    } else {
      targetTag.toggle();
      this.forceUpdate();
    }
  };

  handleOK = newGroups => {
    this.setState((state, props) => ({
      showTagSelctor: false,
      groups: newGroups
    }));
  };

  handleSelectAll = groupId => {
    let group = this.state.groups.find(ele => ele.id === groupId);
    group.checkAll();
    this.forceUpdate();
  };

  render() {
    const { groups, showTagSelctor } = this.state;

    groups.forEach(group => {
      console.log(group.title + ": ");
      console.log(
        group.tags.filter(tag => tag.isChecked()).map(tag => tag.text)
      );
    });

    return (
      <div style={{ maxWidth: "700px", margin: "20px" }}>
        <Card style={{ position: "relative", boxShadow: "0 0 3px silver" }}>
          {groups.map(group => (
            <FilterGroup
              key={group.id}
              data={group}
              toggle={this.handleToggle}
              selectAll={this.handleSelectAll}
            />
          ))}

          <Icon
            type="filter"
            style={{
              fontSize: "20px",
              color: "green",
              display: "inline-block",
              position: "absolute",
              top: "10px",
              right: "10px"
            }}
            onClick={() => this.setState({ showTagSelctor: true })}
          />

          {showTagSelctor ? (
            <TagSelector
              groups={groups}
              cancel={() => {
                this.setState({ showTagSelctor: false });
              }}
              ok={this.handleOK}
            />
          ) : null}
        </Card>
      </div>
    );
  }
}

export default Filter;
