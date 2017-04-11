/**
 * Created by Chiefman on 08/04/2017.
 */
import React from 'react';

class Search extends React.Component {
    inputChange = (data) => {

        this.props.updateFilter(data.target.value, 'name');
    };

    render() {
        return (
            <div className="row text-center">
                <div className="search">
                    <input type="text" className="col-md-offset-4 col-md-4 input-lg" onChange={this.inputChange} />
                </div>
            </div>

        );
    }
}

export default Search;