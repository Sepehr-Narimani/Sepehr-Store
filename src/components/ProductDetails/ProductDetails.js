import React, {useContext} from 'react';
import { Link, useParams } from 'react-router-dom';

// Context
import { ProductsContext } from '../../context/ProductsContextProvider';

// Style
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {

    const params = useParams();
    const id = params.id;
    const data = useContext(ProductsContext);
    const product = data[id - 1];
    const {image, title, description, price, category} = product;

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product" />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category:</span> {category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;



// Solving the problem of giving an error when refreshing in this version

// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// // API
// import { getProduct } from '../../services/api';

// // Style
// import styles from "./ProductDetails.module.css";

// const ProductDetails = () => {

//     const [product, setProduct] = useState([]);

//     const params = useParams();
//     const id = params.id;    

//     useEffect(() => {
//         const fetchProduct = async () => {
//             setProduct(await getProduct(id));
//         }

//         fetchProduct();
//     })

//     const { image, title, description, price, category } = product;
    

//     return (
//         <div className={styles.container}>
//             <img className={styles.image} src={image} alt="product" />
//             <div className={styles.textContainer}>
//                 <h3>{title}</h3>
//                 <p className={styles.description}>{description}</p>
//                 <p className={styles.category}><span>Category:</span> {category}</p>
//                 <div className={styles.buttonContainer}>
//                     <span className={styles.price}>{price} $</span>
//                     <Link to="/products">Back to Shop</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;