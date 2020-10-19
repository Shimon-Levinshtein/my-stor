import React, { Component } from 'react';
import Product from './Product/Product';
import './Products.css';
import { firstStoreList } from '../../actions/index';
import { changeTargetPagination } from '../../actions/pagination';
import { connect } from 'react-redux';



class Products extends Component {

    componentWillMount() {
        this.props.firstStoreList();
    }
    renderList(search, stor) {
        let newListStore = [...this.props.listStore];
        newListStore = this.storArray(newListStore, stor);
        if (search !== '') {
            newListStore = newListStore.filter(post => {
                if (post.name.toLowerCase().includes(search.toLowerCase())) {
                    return post;
                };
            });
        }
        if (this.props.numChangePagination.lastPage !== Math.ceil(newListStore.length / 4)) {
            this.props.changeTargetPagination({ lastPage: Math.ceil(newListStore.length / 4) });
        }
        let focusPage = null;
        newListStore.map((post, index) => {
            if (post.UniqueId == this.props.focusDivProduct.UniqueId) {
                focusPage = Math.ceil((index + 1) / 4);
                // if (focusPage !== this.props.numChangePagination.targetPage) {
                //     this.props.changeTargetPagination({ targetPage: focusPage });
                // }
            }
        });
        newListStore = newListStore.slice(this.props.numChangePagination.targetPage * 4 - 4, this.props.numChangePagination.targetPage * 4);
        return newListStore.map((post, index) => {
            if (post.UniqueId == this.props.focusDivProduct.UniqueId) {
                post.classNameDiv = "div-product focus-div-product"
            } else {
                post.classNameDiv = "div-product"
            };

            return (
                <div key={index}>
                    <Product
                        url={post.url}
                        description={post.description}
                        price={post.price}
                        name={post.name}
                        UniqueId={post.UniqueId}
                        data={post.data}
                        classNameDiv={post.classNameDiv}
                    />

                </div>
            )
        })
    }

    storArray(arr, stor) {
        let cunter = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                cunter++;
                let holder = {};
                if (arr[j][stor.toLowerCase()] > arr[j + 1][stor.toLowerCase()]) {
                    holder = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = holder;
                } else {

                }
            }
        }
        return arr;
    }

    render() {
        return (
            <div className="div-products">
                {this.renderList(this.props.searchAndSortData.search, this.props.searchAndSortData.stor)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listStore: state.listStore,
        searchAndSortData: state.searchAndSort,
        numChangePagination: state.changePagination,
        focusDivProduct: state.focusDivProduct,
    }
}
export default connect(mapStateToProps, { firstStoreList, changeTargetPagination })(Products);
