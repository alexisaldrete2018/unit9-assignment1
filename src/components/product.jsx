import { useState } from 'react';
import './product.css';
import QuantityPicker from './quantityPicker';

const Product = (props) => {
    let [quantity, setQuantity] = useState(1);

    const onQuantityChange = (value) => {
        setQuantity(value);
    }

    const getTotal = () => {
        return ((props.data.price * quantity).toFixed(2));
    }

    return (
        <div className='product'>
            <img className='productImage' src={'/images/'+props.data.image}></img>
            <h2>{props.data.title}</h2>
            <br/>
            <label>Price: ${(props.data.price).toFixed(2)}</label>
            <label>Total: {getTotal()}</label>
            <QuantityPicker onChange = {onQuantityChange}></QuantityPicker>
            <button className='addButton'>Add</button>
        </div>
    );
}

export default Product;