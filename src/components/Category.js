/**
 * Created by Chiefman on 08/04/2017.
 */

import React from 'react';

class Category extends React.Component {
    handleFilterSet = () => {
        this.props.updateFilter(this.props.id, 'category');
        this.props.setActive(this.props.id);
    };

    render() {
        return (
            <a className={this.props.active} onClick={this.handleFilterSet}>{this.props.title}</a>
        );
    }
}

export default Category;