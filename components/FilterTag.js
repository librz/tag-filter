import React, { Component } from 'react';
import { Tag } from 'antd';

export class FilterTagObj {
    constructor(id, text, checked) {
        this.id = id
        this.text = text
        this.checked = arguments.length > 2 ? checked : false
    }

    toggle() {
        this.checked = !this.checked
    }
}

export default class FilterTag extends Component {

    handleChange = (checked) => {
        this.props.toggle(this.props.value.id);
    }

    tagStyle = {
        border: "1px solid blue",
        borderRadius: "10px"
    }

    render() {
        const { value } = this.props;
        return <Tag.CheckableTag checked={value.checked} onChange={this.handleChange} style={this.tagStyle}>
            {value.text}
            </Tag.CheckableTag> 
    }
}