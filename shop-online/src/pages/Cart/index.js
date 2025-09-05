import { useDispatch,useSelector } from "react-redux";
import CartList from "./CartList";
import './Cart.scss'
import { deleteAll } from "../../actions/cart";

function Cart() {
    const cart = useSelector(state => state.cartReducer);
    const dispath = useDispatch();
    const total = cart.reduce((total, item) => {
        const priceNew = (item.info.price * (100 - item.info.discountPercentage)) / 100
        return total + priceNew * item.quantity
    }, 0)
    const handleDeleteAll = () => {
        dispath(deleteAll())
    }
    return (
        <>
            <h2>Cart</h2>
            <button onClick={handleDeleteAll}>Xóa tất cả</button>
            <div>
                {cart.length > 0 ? (
                    <>
                        <CartList />
                        <div className="cart__total">
                            Tổng tiền: <span>{total.toFixed(0)}$</span>
                        </div>
                    </>
                ) : (
                    <>
                        Giỏ hàng trống
                    </>
                )}
            </div>
        </>
    )
}

export default Cart;