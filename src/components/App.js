/**
 * Created by Chiefman on 08/04/2017.
 */
import React from 'react';
import axios from 'axios';
import CategoriesList from '../components/CategoriesList.js';
import Search from '../components/Search.js';
import ItemsList from '../components/ItemsList.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            categories: [],
            products: [],
            nameFilter: '',
            categoryFilter: ''
        };
    }

    componentDidMount() {
        var component = this,
            apis = [
                {
                    name: "categories",
                    url: "https://api.gousto.co.uk/products/v2.0/categories"
                },
                {
                    name: "products",
                    url: "https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120"
                }
            ];


        for (var i = 0; i < apis.length; i++) {

            (function(api) {

                var stateData = {};

                axios({
                    method: 'get',
                    url: api.url,
                    responseType: 'json'}).then(function(response) {

                        stateData[api.name] = response.data.data || [];

                        if(stateData[api.name].title !== undefined) {
                            stateData[api.name].titleLower = stateData[api.name].title.toLowerCase();
                        }

                        component.setState(stateData);

                    }).catch(function(xhr, status, err) {

                    console.error(api.url, status, err);

                });
            }(apis[i]));
        }

    };

    updateFilterProp = (filterValue, filterType) => {
        var filterUpdate = {};
        filterUpdate[filterType + 'Filter'] = filterValue;
        this.setState(filterUpdate);
    };

    render() {
        var displayedItems = this.state.products;
        if(this.state.categoryFilter) {
            displayedItems = displayedItems.filter(function(product) {
                var categoryNameMatch = false;

                for(var i = 0; i < product.categories.length; i++) {
                    if(product.categories[i].id === this.state.categoryFilter) {
                        categoryNameMatch = true;
                    }
                    break;
                }

                return categoryNameMatch;
            }.bind(this));
        }

        var nameFilter = this.state.nameFilter.toLowerCase();

        displayedItems = displayedItems.filter(function(product) {
            var productName = product.titleLower || product.title.toLowerCase();
            return productName.indexOf(nameFilter) !== -1;
        });

        if(this.state.fullList) {
            displayedItems = this.state.products;
        }

        return (
            <div className="App">
                <CategoriesList categories={this.state.categories} updateFilter={this.updateFilterProp} />
                <Search updateFilter={this.updateFilterProp} />
                <ItemsList products={displayedItems}/>
            </div>
        );
    }
}

export default App;