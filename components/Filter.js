import React, { Component } from 'react';
import {FilterTagObj} from './FilterTag'
import FilterGroup from './FilterGroup'
import { Card, Icon } from 'antd';
import 'antd/dist/antd.css'
import TagSelector from './TagSelector'


const initialTags = [
    new FilterTagObj(1, "ACC", true),
    new FilterTagObj(2, "DCG", true),
    new FilterTagObj(3, "Logistic", true),
    new FilterTagObj(4, "MBG", true),
    new FilterTagObj(5, "PCG", true),
    new FilterTagObj(6, "全部选择", false)
]

class Filter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tags: initialTags,
            showTagSelctor: false
        }
    }


    handleToggle = (id) => {
        const targetTag = this.state.tags.find(tag => tag.id === id);
        if (!targetTag)
            return
        else {
            targetTag.toggle()
            this.forceUpdate()
        }
    }

    getRefreshedTags = (selectedTagId) => {
       this.state.tags.forEach(ele => 
            ele.checked = selectedTagId.includes(ele.id) ? true : false
       )
       return this.state.tags 
    }

    // handleSelect = (selectedTagId) => {
    //     this.setState({
    //         tags: this.getRefreshedTags(selectedTagId),
    //         showTagSelctor: false
    //     })
    // }
    handleOK = (selectedValue) => {
        this.state.tags.forEach(ele => 
            ele.checked = selectedValue.includes(ele.text) ? true : false 
        )

        this.setState((state, props) => 
            ({
                showTagSelctor: false,
                tags: this.state.tags
            })
        )

    }

    render() { 

        const { tags, showTagSelctor } = this.state
        return ( <div>
            <Card style={{position: "relative"}}>
                <FilterGroup
                title="Business Unit"
                tags = {tags} 
                toggle = {this.handleToggle}
                />

                <FilterGroup
                title="Sth Else"
                tags={tags}
                toogle = {this.handleToggle}
                />

                <Icon type="filter" style={{
                    fontSize: "20px",
                    color: "green",
                    display: "inline-block",
                    position: "absolute",
                    top: "10px",
                    right: "10px"
                }} 
                onClick={() => this.setState({showTagSelctor: true})}
                />

                {
                    showTagSelctor ?
                    <TagSelector tags={tags}
                    cancel={() => { this.setState({showTagSelctor: false}) }}
                    ok={this.handleOK}
                    />
                    : null
               }
            </Card>
        </div> );
    }
}

export default Filter;
