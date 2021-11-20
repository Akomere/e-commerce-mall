import React from 'react'
import CustomButton from '../custom-button/custom-button'
import { connect } from 'react-redux'
import CartItem from '../cart-items/cart-item.component'
import { selectCartItem } from '../../redux/cart/cart.selector'
import './cart-dropdown.styles.scss'



const CartDropdown = ({cartItems})=>{
    console.log("cartItems")
    return(
    <div className='cart-dropdown'>
    <div className='cart-items'>
        {
            cartItems.map(cartItem=>(<CartItem key={cartItem.id} item={cartItem}/>))
        }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>

    )}

const mapStateToProps = (state)=>({
    cartItems: selectCartItem(state)
})

export default connect(mapStateToProps)(CartDropdown)