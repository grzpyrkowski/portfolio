import React from "react";
import shoesData from "../../data/shop/shoes";

export default function ListProducts() {
    const products = shoesData.data.shoes
    const [filteredProducts, setFilteredProducts] = React.useState(products);

    const handleFilter = (event) => {
        const value = event.target.value;
        const filtered = products.filter(product => product.type.includes(value));
        setFilteredProducts(filtered);
    }

        return (
            <>
                <div className="searching">
                    <label htmlFor="searchTerm">Searching by type:
                        <br/>
                        <input type="text" id="searchTerm" className="input-text" placeholder="e.g. sneakers" onChange={handleFilter}></input>
                    </label>
                </div>
                <ul className="listed-products flex">
                    { filteredProducts.map((product) => {
                        return (
                            <li key={product.id} className="product full-center">
                                <img alt={product.name} src={require(`../../data/shop/${product.picture}`)} />
                                <h1 className="product-name">{product.name}</h1>
                                <p className="product-type">{product.type}</p>
                                <p className="product-price">${product.price}</p>
                            </li>
                        );
                    })}
                </ul>
            </>
        )
}