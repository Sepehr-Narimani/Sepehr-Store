import React, { useContext } from 'react';

// Components
import Product from '../shared/Product/Product';

// Context
import { ProductsContext } from '../../context/ProductsContextProvider';

// Style
import styles from "./Store.module.css";

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div className={styles.container} >
            {
                products.map(product => <Product 
                        key={product.id} 
                        productData = {product}
                    />)
            }
        </div>
    );
};

export default Store;