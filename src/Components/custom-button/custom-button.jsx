import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSign, inverted, ...otherProps }) => {
    return (
        <button className={`${inverted ?'inverted':''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton

