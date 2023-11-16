import React, { useState, useEffect } from "react";
import "../styles/StyleManager.scss";
import axios from "axios";

export default function HomeManager() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [product, setProduct] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        const response = await axios.put(
          `http://localhost:5000/product/${selectedProduct._id}`,
          { id, name, quantity, price }
        );
        if (response.status === 200) {
          getList();
          setIsEditing(false);
          setId(0);
          setName("");
          setQuantity(0);
          setPrice(0);
        }
      } else {
        const response = await axios.post("http://localhost:5000/product", {
          id,
          name,
          quantity,
          price,
        });
        if (response.status === 200) {
          getList();
          setId(0);
          setName("");
          setQuantity(0);
          setPrice(0);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };
  const editProduct = (id) => {
    const editedProduct = product.find((p) => p._id === id);
    setSelectedProduct(editedProduct);
    setIsEditing(true);
    setId(editedProduct.id);
    setName(editedProduct.name);
    setQuantity(editedProduct.quantity);
    setPrice(editedProduct.price);
  };

  const getList = () => {
    try {
      axios
        .get("http://localhost:5000/product")
        .then((response) => setProduct(response.data))
        .catch((err) => console.error(err));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteList = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/product/${id}`);
      if (response.status === 200) {
        setProduct(product.filter((products) => products._id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <>
        <header>
        <div className="img_profile_manager">
          <img
            src={require("../img/Exclude.png")}
            alt="error"
            className="exclude"
          />
        </div>
        <div className="list_order">
          <div className="block_list">
            {product.length > 0 ? (
              product.map((product) => (
                <div className="list_content" key={product._id}>
                  <ul>
                    <li>
                      Номер товару: <span>{product.id}</span>
                    </li>
                    <li>
                      Назва товару: <span>{product.name}</span>
                    </li>
                    <li>
                      Кількість: <span>{product.quantity}</span>
                    </li>
                    <li>
                      Ціна <span>{product.price}</span> грн
                    </li>
                  </ul>
                  <button onClick={() => editProduct(product._id)} className="btn_edit">
                    Редагувати
                  </button>
                  <button onClick={() => deleteList(product._id)} className="btn_remove">
                    Видалити
                  </button>
                </div>
              ))
            ) : (
              <p>Поки що нічого нема</p>
            )}
          </div>
        </div>
      </header>
      <main>
        <div className="block_form">
          <div className="flex_content">
            <div className="flex_form">
              <form onSubmit={handleSubmit}>
                <label>
                  <input
                    type="text"
                    placeholder="номер"
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                    required
                  />
                </label>
                <label>
                  <input 
                    type="text" 
                    placeholder="назва товару"
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    required
                    />
                </label>
                <label>
                  <input 
                    type="number"
                    placeholder="кількість"
                    onChange={(e)=>setQuantity(e.target.value)}
                    value={quantity}
                    required 
                  />
                </label>
                <label>
                  <input 
                    type="number" 
                    placeholder="ціна"
                    onChange={(e)=>setPrice(e.target.value)}
                    value={price}
                    required
                    />
                </label>
                <div className="buttons">
                  <div className="btn">
                    <button>{isEditing ? "Зберегти зміни" : "Відправити"}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
