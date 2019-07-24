import React, { Component } from 'react';
import { Modal, Select } from 'antd'
import 'antd/dist/antd.css'

class TagSelector extends Component {
    selectedValue = []

    handleCancel = () => {
        this.props.cancel()
    }

    handleOk = () => {
        this.props.ok(this.selectedValue)
    }

    handleChange = (value) => {
        this.selectedValue = value
    }

    render() { 
        console.log('rendering tag selector')
        let { tags } = this.props
        return ( 
            <Modal
            title="请选择过滤项"
            visible={true}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            >
                <Select mode="multiple" style={{width: "90%", margin: "10px auto"}}
                onChange={this.handleChange}
                > 
                    {
                        tags.map(tag => 
                            <Select.Option key={tag.id} value={tag.text}>{tag.text}</Select.Option>
                        )
                    }
                </Select>
            </Modal>
         );
    }
}
 
export default TagSelector;