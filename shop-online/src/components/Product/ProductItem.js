import {useDispatch, useSelector} from 'react-redux';
import { updateQuantity,addToCart } from '../../actions/cart';

function ProductItem(props) {
    const { item } = props;
    const dispath = useDispatch();
    const cart = useSelector(state => state.cartReducer);
    const handleAddToCart = () => {
        if(cart.some(itemCart => itemCart.id === item.id)){
            dispath(updateQuantity(item.id))
        }else{
            dispath(addToCart(item.id,item))
        }
    }
    return (
        <>
            <div className="product__item">
                <div className="product__image">
                    <img src={item.thumbnail} alt={item.title} />
                </div>
                <h4 className="product__title">
                    {item.title}
                </h4>
                <p className="product__price-new">
                    {(item.price * (100 - item.discountPercentage) / 100).toFixed(0)}$
                </p>
                <p className="product__price-old">
                    {item.price}$
                </p>
                <p className="product__percent">
                    {item.discountPercentage}%
                </p>
                <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
            </div>
        </>
    )
}

export default ProductItem;