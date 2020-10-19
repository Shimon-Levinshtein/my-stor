import React, { Component } from 'react';
import { changeProductDitail } from '../../../actions/productDitail';
import { deleteProductToTheList } from '../../../actions/addProductToTheList';
import { connect } from 'react-redux';
import './Product.css';
import { actionfocusDivProduct } from '../../../actions/focusDivProduct';

class Product extends Component {
    clikToChangeProductDitail(ditail) {
        this.props.changeProductDitail({...ditail, button: 'Edit project'});
        this.props.actionfocusDivProduct({
            UniqueId: ditail.UniqueId,
        });
    }
    
    deleteProduct(ditail) {
        this.props.deleteProductToTheList(ditail);

    }
    render() {
        return (
            <div className={this.props.classNameDiv}>
                <div onClick={() => this.clikToChangeProductDitail(this.props)} className="product-img pointer-div">
                    <img src={this.props.url} ></img>
                </div>
                <div onClick={() => this.clikToChangeProductDitail(this.props)} className="product-text-box pointer-div">
                    <h4>{this.props.name}</h4>
                    <p>{this.props.description}</p>
                </div>
                <div onClick={() => this.clikToChangeProductDitail(this.props)} className="product-prise-box pointer-div">
                    <h4>Prise: {this.props.price} $</h4>
                    <h4>Data</h4>
                    <h6>{this.props.data.toLocaleDateString()}</h6>
                    <h4>Time</h4>
                    <h6>{('0' + this.props.data.getHours()).slice(-2)}:{('0' + this.props.data.getMinutes()).slice(-2)}:{('0' + this.props.data.getSeconds()).slice(-2)}</h6>
                </div>
                <div className="product-button-delete">

                    <button onClick={() => this.deleteProduct(this.props)}  className="pointer-div">Delete</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, { changeProductDitail, deleteProductToTheList, actionfocusDivProduct })(Product);
