import { createSelector } from 'reselect'

const cartSelector = state => state.cart;

export const selectCartItem = createSelector(
    [cartSelector],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItem], cartItems => cartItems.reduce(
        (cartQuantity, cartItem) => (
            cartQuantity + cartItem.quantity
        ),
        0
    )
)