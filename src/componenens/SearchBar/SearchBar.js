import React, { Component } from 'react';
import './SearchBar.css';
import { changeProductDitail } from '../../actions/productDitail';
import { connect } from 'react-redux';
import { searchAndSortList } from '../../actions/searchAndSort';



class SearchBar extends Component {
    clikToChangeProductDitail() {
        this.props.changeProductDitail({
            name: '',
            url: '',
            description: '',
            price: '',
            button: 'Add project',
        });
    }
    onChangeSearchProducts = (e) => {
        this.props.searchAndSortList({...this.props.searchAndSortData, search: e.currentTarget.value})
    }

    onChangeSorthProducts = (e) => {
        this.props.searchAndSortList({...this.props.searchAndSortData, stor: e.currentTarget.value})
    }
    render() {
        return (
            <div className='searchBar-div'>
                <div className='searchBar-child-a'>
                    <button className="myButton" onClick={() => this.clikToChangeProductDitail()}>+ add</button>
                </div>
                <div className='searchBar-child-b'>
                    <form className="example"  > {/* style="margin:auto;max-width:300px" */}
                        <input type="text" onChange={this.onChangeSearchProducts} placeholder="Search product" value={this.props.searchAndSortData.search} />
                        <button type="button">🍳</button>
                    </form>
                </div>
                <div className='searchBar-child-c'>
                    <label>Stor by</label>
                    <select onChange={this.onChangeSorthProducts}>
                        <option>Name</option>
                        <option>Price</option>
                        <option >Description</option>
                        <option>Data</option>
                    </select>
                </div>


            </div>
        );
    }
}

// export default SearchBar;
const mapStateToProps = state => {
    return {searchAndSortData: state.searchAndSort}
}
export default connect(mapStateToProps, { changeProductDitail, searchAndSortList })(SearchBar);
