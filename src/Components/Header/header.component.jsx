import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from "../../firbase/firebase.utils";
import { connect } from "react-redux";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart.icon/cart.component";
import './header.styles.scss'

const Header = ({currentUser,hidden}) => {
    console.log(currentUser)
    const currentUse = null
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>

            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>

                {
                    currentUser ?
                    (<div className = 'option' 
                    onClick= {()=>auth.signOut()}>
                    SIGN OUT
                    </div>) : (<Link className='option' to='/signin'>SIGN IN</Link>)
                    
                }
                <CartIcon/>
            </div>
            {hidden ? null : <CartDropdown/>}
        </div>
    )

}

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) =>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)