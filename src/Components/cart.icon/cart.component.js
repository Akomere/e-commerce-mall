import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.action';
import './cart.styles.scss'

const CartIcon = ({toggleCartAction}) => (
    <div className='cart-icon' onClick={toggleCartAction}>
        <ShoppingIcon className='shoping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch=>({
    toggleCartAction: ()=> dispatch(toggleCart())

})

export default connect(null, mapDispatchToProps)(CartIcon)