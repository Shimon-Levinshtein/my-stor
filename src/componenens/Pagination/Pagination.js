import React, { Component } from 'react';
import './Pagination.css';
import { connect } from 'react-redux';
import { changePagination } from '../../actions/pagination';


class Pagination extends Component {

    renderPagination(obj) {
        const pageNumbers = [];
        for (let index = 0; index < obj.lastPage; index++) {
            pageNumbers.push(index + 1)
        }
        return (
            <div className="div-pagination">
                <div className="pagination">
                    <a href="#1" key={obj.lastPage - 1} onClick={() => this.changeActivePage(obj.firstPage)} className="active-pagination beginning-and-end-pagination">&laquo; {obj.firstPage}</a>
                    <a href="#" key="&laquo;" onClick={() => this.changeActivePage(obj.targetPage - 1)}>&laquo;</a>
                    {pageNumbers.map(num => (
                        <a href={'#' + num} key={num} onClick={() => this.changeActivePage(num)} className={num == obj.targetPage ? "active-pagination" : 'not-active'}>{num}</a>
                    ))}
                    <a href="#" key="&raquo;" onClick={() => this.changeActivePage(obj.targetPage + 1)} >&raquo;</a>
                    <a href={'#' + obj.lastPage} key={obj.lastPage + 1} onClick={() => this.changeActivePage(obj.lastPage)} className="active-pagination beginning-and-end-pagination">{obj.lastPage} &raquo;</a>
                </div>
            </div>
        );
    }

    changeActivePage(num) {
        if (num < 1 || num == this.props.numChangePagination.targetPage || num > this.props.numChangePagination.lastPage) {
            return
        }
        this.props.changePagination({
            firstPage: 1,
            targetPage: num,
            lastPage: this.props.numChangePagination.lastPage,
        })
    }

    render() {
        return this.renderPagination(this.props.numChangePagination);
    }
}

const mapStateToProps = state => {
    return {
        numChangePagination: state.changePagination,
    }
}
export default connect(mapStateToProps, {changePagination})(Pagination);
