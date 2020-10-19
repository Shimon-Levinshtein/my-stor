import React, { Component } from 'react';
import "./ProductDitail.css";
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { changeProductDitail } from '../../actions/productDitail';
import { actionfocusDivProduct } from '../../actions/focusDivProduct';
import { addProductToTheList, editProductToTheList } from '../../actions/addProductToTheList';



class ProductDitail extends Component {

    handleSudmit = () => {
        if (this.props.changeProductDitailData.button == 'Edit project') {
            this.props.editProductToTheList(this.props.changeProductDitailData);
        } else {
            this.props.changeProductDitailData.UniqueId = this.uniqueID();
            this.props.changeProductDitailData.data = new Date();
            this.props.addProductToTheList(this.props.changeProductDitailData);
        };
        this.props.actionfocusDivProduct({
            UniqueId: this.props.changeProductDitailData.UniqueId,
        });
        this.props.changeProductDitail({
            name: '',
            url: '',
            description: '',
            price: '',
            button: 'Add project',
        });
    };

    uniqueID() {
        const date = new Date().toLocaleDateString();
        const sortByDate = new Date().getTime();
        const randomNum = Math.floor(Math.random() * 10000);
        return date + '-' + sortByDate + '-' + randomNum;
    }

    nameChange = (e) => {
        this.props.changeProductDitail({ ...this.props.changeProductDitailData, name: e.currentTarget.value });
    }
    urlChange = (e) => {
        this.props.changeProductDitail({ ...this.props.changeProductDitailData, url: e.currentTarget.value });
    }
    descriptionChange = (e) => {
        this.props.changeProductDitail({ ...this.props.changeProductDitailData, description: e.currentTarget.value });
    }
    priceChange = (e) => {
        this.props.changeProductDitail({ ...this.props.changeProductDitailData, price: e.currentTarget.value });
    }

    render() {
        return (
            <Formik
                initialValues={{ name: '', subject: '', price: '' }}
                onSubmit={this.handleSudmit}
            >
                <div className="div-product-details">

                    <Form action="/action_page.php">
                        <div className="product-img">
                            <img src={this.props.changeProductDitailData.url} ></img>
                        </div>
                        <label htmlFor="imgUrl">Image Url</label>
                        <Field type="text" id="imgUrl" name="imgUrl" onChange={this.urlChange} placeholder="Enter the image URL" value={this.props.changeProductDitailData.url} required />
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name" onChange={this.nameChange} placeholder="Enter the name product" value={this.props.changeProductDitailData.name} required />
                        <label htmlFor="subject">Description</label>
                        <Field as="textarea" className="product-details-textarea" id="subject" name="subject" onChange={this.descriptionChange} placeholder="Enter the description product" value={this.props.changeProductDitailData.description} required />
                        <label htmlFor="price">Price</label>
                        <Field type="number" id="price" name="price" onChange={this.priceChange} placeholder="Enter the price of product" value={this.props.changeProductDitailData.price} required />
                        <button type="submit">{this.props.changeProductDitailData.button}</button>
                        {/* Add project || Edit project */}
                    </Form>

                </div>
            </Formik>
        );
    }
}

const mapStateToProps = state => {
    return { changeProductDitailData: state.productDitail }
}
export default connect(
    mapStateToProps,
    { changeProductDitail, addProductToTheList, editProductToTheList, actionfocusDivProduct }
)(ProductDitail);
