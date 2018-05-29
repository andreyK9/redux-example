import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as cartActions from '../actions/cart';

import Shelf from './shelf';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    unique = (arr) => {
        var obj = {};
        
        for (var i = 0; i < arr.length; i++) {
            var str = arr[i];
            obj[str] = true; // запомнить строку в виде свойства объекта
        }
        
        return Object.keys(obj); // или собрать ключи перебором для IE8-
    };

    render() {
        const cartList = this.props.cart.map((element, idx) => {
            return element
        });

        return (
            <div className="Cart">
                <Shelf addItem={this.props.actions.addToCart} />
                <div className={cartList != 0 ? 'customBlock ' + this.unique(cartList).join(' ') :"customBlock" }>{~cartList.indexOf('content') ? 'Введите ваше имя:' : ''}</div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(cartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);