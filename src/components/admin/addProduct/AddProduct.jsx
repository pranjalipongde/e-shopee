import { useState } from "react";
import styles from "./AddProduct.module.scss";
import Card from "../../card/Card";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase/config";

const categories = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Phone" },
];

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    imageURL: "",
    price: 0,
    category: "",
    brand: "",
    desc: "",
  });

  //to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // handle image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // console.log(file);

    // contact firebase and save the image in storage
    const storageRef = ref(storage, `eshopee/${Date.now()}${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);
  };

  const addProduct = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.product}>
      <h1>Add New Product</h1>

      <Card className={styles.card}>
        <form onSubmit={addProduct}>
          <label>Product Name:</label>
          <input
            type="text"
            placeholder="Product name"
            required
            name="name"
            value={product.name}
            onChange={(e) => handleInputChange(e)}
          />

          <label>Product Image:</label>
          <Card cardClass={styles.group}>
            <div className={styles.progress}>
              <div className={styles["progress-bar"]} style={{ width: "50%" }}>
                Uploading 50%
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              placeholder="Product Image"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            <input
              type="text"
              // required
              placeholder="imageURL"
              name="imageURL"
              value={product.imageURL}
              disabled
            />
          </Card>

          <label>Product Price:</label>
          <input
            type="text"
            placeholder="Product price"
            required
            name="price"
            value={product.price}
            onChange={(e) => handleInputChange(e)}
          />

          <label>Product Category:</label>

          <select
            required
            name="category"
            value={product.category}
            onChange={(e) => handleInputChange(e)}
          >
            <option value="" disabled>
              -- Choose Product Category --
            </option>

            {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              );
            })}
          </select>

          <label>Product Company/Brand:</label>
          <input
            type="text"
            placeholder="Product brand"
            required
            name="brand"
            value={product.brand}
            onChange={(e) => handleInputChange(e)}
          />

          <label>Description:</label>
          <textarea
            name="desc"
            value={product.desc}
            required
            cols="30"
            rows="10"
            onChange={(e) => handleInputChange(e)}
          ></textarea>

          <button className="--btn --btn-primary">Save Product</button>
        </form>
      </Card>
    </div>
  );
};

export default AddProduct;
