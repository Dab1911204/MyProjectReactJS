import { useEffect, useState } from "react";
import './Products.scss';

function UseReducer() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchApi = () => {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => {
                    setLoading(false)
                    setData(data.products)
                })

        }
        setTimeout(() => {
            fetchApi()
        }, 3000)
    }, [])

    console.log(data)
    return (
        <>
            {loading ? (
                <>Đang tải dữ liệu ...</>
            ) : (
                <div className="product__list">
                    {data.map(item => (
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