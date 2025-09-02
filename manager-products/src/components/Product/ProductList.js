import { useState, useEffect } from "react";
import "./Products.scss";

import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

import { getProductList } from "../../services/productsServices";

function ProductList(props) {
    const { reload } = props;
    const [data, setData] = useState([]);
    const [editReload, setEditReload] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const result = await getProductList()
            setData(result.reverse());
        }
        fetchData();

    }, [reload,editReload])
    const handleReload = () => {
        setEditReload(!editReload);
    };
    return (
        <>
            <div className="product__list">
                {data.map(item => (
                    <div className="product__item" key={item.id}>
                        <div className="product__image">
                            <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <h4 className="product__title">
                            {item.title}
                        </h4>
                        <p className="product__price">
                            {item.price}$
                        </p>
                        <p className="product__discountPercentage">
                            {item.discountPercentage}%
                        </p>
                        <EditProduct item={item} onReload={handleReload} />
                        <DeleteProduct item={item} onReload={handleReload}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProductList;