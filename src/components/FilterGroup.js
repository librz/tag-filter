import React, { Component } from 'react';
import FilterTag from './FilterTag'

class FilterGroup extends Component {
    static defaultProps = {
        title: "Filter"
    }

    handleToggle = (id) => {
        this.props.toggle(id)
    }

    render() {
        const titleStyle = {
            fontSize: "18px",
            fontColor: "blue",
            marginRight: "20px"
        }
        return (
            <div style={{
                display: "inline-block",
                float: "left",
                marginLeft: "10px",
                height: "35px"
            }}>
                <span style={titleStyle}>{this.props.title}:</span>
                {
                    this.props.tags.map(ele => 
                        <FilterTag key={ele.id} value={ele} toggle={this.handleToggle} />
                    )
                }
            </div>
        );
    }
}

export default FilterGroup