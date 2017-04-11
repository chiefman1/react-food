/**
 * Created by Chiefman on 08/04/2017.
 */

import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };
    }

    StateActive = () => {
        this.setState({active: !this.state.active});
    };

    render() {
        return (
            <div className={this.state.active ? 'row active ' : 'row not-active'}>
                <div className="col-md-4">
                    <div  onClick={this.StateActive}>
                        <div className="title">{this.props.title}</div>
                    </div>
                </div>
                <div className="col-md-8 details">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="item-image" src={this.props.image} alt=""/>
                        </div>
                        <div className="col-md-8">
                            <p className="description">{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;