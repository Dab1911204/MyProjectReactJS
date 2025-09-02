import { useEffect, useReducer } from "react";
import './Products.scss';

const init = {
    products:[],
    loading:true
}

const reducer = (state, action) => {
    if (action.type === 'success') {
        return {
            products:action.products,
            loading:false
        }
    }else{
        return state
    }
}

function UseReducer() {
    const [data, dispatch] = useReducer(reducer, init)

    useEffect(() => {
        const fetchApi = () => {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => {
                    dispatch({
                        type:'success',
                        products:data.products
                    })
                    // setLoading(false)
                    // setData(data.products)
                })

        }
        setTimeout(() => {
            fetchApi()
        }, 3000)
    }, [])

    console.log(data)
    return (
        <>
            {data.loading ? (
                <>Đang tải dữ liệu ...</>
            ) : (
                <div className="product__list">
                    {data.products.map(item => (
                        <div className="product__item" key={item.id}>
                            <div className="product__image">
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                            <div className="product__title">
                                {item.title}
                            </div>
                            <div className="product__price">
                                {item.price}$
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )

}

export default UseReducer;