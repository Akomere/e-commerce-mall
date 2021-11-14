import React from "react";
import SHOP_DATA from "./shopData";
import PreviewCollection from "../../Components/preview-collection/preview-collection.component";

class ShopPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            collection: SHOP_DATA
        }
    }
    render() {
        const { collection } = this.state;
        return (
            <div className='shop-page'>
                {
                    collection.map(({id, ...otheritems }) =>(<PreviewCollection key={id} {...otheritems} />))
                }
            </div>
        )
    }
}

export default ShopPage