import "./Filter.css";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const Filter = () => {
  // db -----
  const item = [
    {
      _id: uuid(),
      category: "phone",
      product: "iphone 13",
      price: "45000",
      rating: "4/5"
    },
    {
      _id: uuid(),
      category: "phone",
      product: "pixel 8",
      price: "25000",
      rating: "2/5"
    },
    {
      _id: uuid(),
      category: "shoes",
      product: "Nike sports",
      price: "9000",
      rating: "3/5"
    },
    {
      _id: uuid(),
      category: "shoes",
      product: "Roadster",
      price: "990",
      rating: "4/5"
    }
  ];
  //End of db -----
  const [data, setData] = useState("");
  // phone btn click handler function -----
  const clickHandlerForPhone = () => {
    return setData(
      item
        .filter((y) => y.category == "phone")
        .map(
          (x) =>
            "Product " + x.product + "Price: " + x.price + "Rating: " + x.rating
        )
    );
  };

  // End of phone btn click handler function -----

  // shoes btn click handler function -----
  const clickHandlerForShoes = () => {
    return setData(
      item
        .filter((y) => y.category == "shoes")
        .map(
          (x) =>
            "Product " + x.product + "Price: " + x.price + "Rating: " + x.rating
        )
    );
  };

  // End of shoes btn click handler function -----

  return (
    <>
      <h2>Filter by category</h2>

      <button onClick={clickHandlerForPhone}>Phone</button>
      <button onClick={clickHandlerForShoes}>Shoes</button>
      <hr />

      <div className="display-data">
        <div>{data}</div>
      </div>
    </>
  );
};

export default Filter;
