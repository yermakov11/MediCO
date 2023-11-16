import React, { useState, useEffect } from "react";
import "../styles/StylePacker.scss";
import axios from "axios";
export default function AccountPacher() {
  const [products, setProducts] = useState([]);
  const[status,setStatus]=useState(true);
  const[buttonClick,setButtonClick]=useState(false)
  const getProduct=()=>{
    try {
       axios
      .get("http://localhost:5000/product")
      .then((response) => setProducts(response.data))
      .catch((err) => console.error(err));
    } catch (err) {
      console.error(err);
    }
  }
  const sendProduct = (productId) => {
    try {
      axios.post("http://localhost:5000/send_product", {
        productId: productId,
        status: status, 
      })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          setButtonClick((prevClicks) => ({
            ...prevClicks,
            [productId]: true,
          }));
        }
      })
      .catch((err) => console.error(err));
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
   getProduct();
  },[]);
  
  return (
    <>
      <header>
        <div className="flex_header_packer">
          <div className="search">
            <input type="text" placeholder="пошук товара" />
          </div>
          <div className="img_profile_packer">
            <img
              src={require("../img/Exclude.png")}
              alt="error"
              className="exclude"
            />
          </div>
        </div>
      </header>
      <main>
          <div className="block_packer">
            {products.length > 0 ? (
              products.map((product) => (
                <div className="list_products" key={product.id}>
                  <ul>
                    <li>Номер товару: <span>{product.id}</span></li>
                    <li>Назва товару: <span>{product.name}</span></li>
                    <li>Кількість: <span>{product.quantity}</span></li>
                    <li>Ціна <span>{product.price}</span> грн</li>
                  </ul>
                  {buttonClick[product.id]&& <p>Підтверженно</p>}
                  <button onClick={()=>sendProduct(product.id)} className="btnGetOrder">прийняти</button>
                </div>
              ))
            ) : (
              <p>Поки що нічого нема</p>
            )}
          </div>
      </main>
    </>
  );
}
