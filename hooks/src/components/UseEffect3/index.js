import { useEffect, useState } from "react";
import './Products.scss';

function UseEffect3() {
    const limit = 20
    const [data, setData] = useState([])
    const [pageActive, setPageActive] = useState(0)
    const [quantityPage,setQuantityPage] = useState(0)

    useEffect(() => {
        fetch(`https://dummyjson.com/products?skip=${pageActive * limit}&limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setData(data.products)
                setQuantityPage(Math.ceil(data.total / limit))
            })
    }, [pageActive])
    const handleClick = (index) => {
        setPageActive(index)
    }

    console.log(data)
    return (
        <>
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
            <ul className="pagination">
                {[...Array(quantityPage)].map((_,index)=>(
                    <li className="pagination__item" key={index} onClick={()=>{handleClick(index)}}>{index+1}</li>
                ))}
            </ul>
        </>
    )

}

export default UseEffect3;