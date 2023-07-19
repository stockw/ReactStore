import { useState } from "react";
import Product from "./Product";

function Store(){

// add a productList, and a function to add products using state
    const [productList, setProductList] = useState([
        {name: "Gucci", price: 10, id: 1},
        {name: "Jordan 25", price: 120, id: 2},
        {name: "Lysol", price: 6, id: 3}
    ]);
    // function to add new products using the Add Product Button
    // const addProduct = (newProduct) => {
    //     setProductList([...productList, newProduct]);
    // }

    // Add products to product list using handleInputChange, and handleAddProduct button
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: ""
    });

    //handleChange
    const handleInputChange = (event) =>{
        setNewProduct({
            ...newProduct, [event.target.name]: event.target.value
        });
    };

        //handleAddProduct
        const handleAddProduct = () => {
            if (newProduct.name && newProduct.price) {
                setProductList([...productList, {...newProduct}
                ]);
                setNewProduct({name: "", price: ""});
            }
        };

    return (
        <div>
            <h1>My Random Store</h1>
            {/* <button onClick={() =>
                addProduct({name: "New Product", price: 0})
            }>
                Add New Product
            </button> */}

            <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleInputChange}/>

            <input
            type="text"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleInputChange}
            />
            <button onClick={handleAddProduct}>Add New Product</button>
            {productList.map((product)=> (
               <Product
               name={product.name}
               price={product.price}
               key={product.id}
               />
            ))}
        </div>
    );
};
export default Store;