import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.action';
import './cart.styles.scss'

const CartIcon = ({toggleCartAction, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartAction}>
        <ShoppingIcon className='shoping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch=>({
    toggleCartAction: ()=> dispatch(toggleCart())

})
const mapStateToProps = ({cart: {cartItems}})=>({
    itemCount: cartItems.reduce((cartQuantity, cartItem)=>(cartQuantity + cartItem.quantity),0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)