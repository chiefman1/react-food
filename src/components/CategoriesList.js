/**
 * Created by Chiefman on 08/04/2017.
 */
import React from 'react';
import Category from '../components/Category.js';

class CategoriesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: null
        };
    }

    setActive = (id) => {
        this.setState({active: id});
    };

    render() {
        var categories = this.props.categories.map(function(category) {
            var active = this.state.active === category.id ? 'active' : '';
            
            return (
                <li key={category.id}>
                    <Category title={category.title} id={category.id} updateFilter={this.props.updateFilter} setActive={this.setActive} active={active}
                    />
                </li>
            );
        }.bind(this));

        return (
            <nav className="navbar navbar-default">
                <div className="categoryList container-fluid">
                    <ul className="nav navbar-nav">
                            {categories}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default CategoriesList;