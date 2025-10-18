import "./style.css";
import ProductCard from "../ProductCard";
import products from "../../data/products.json";

function Container() {
  return (
    <div className="container">
      {productsList()}
    </div>
  );
}

function productsList() {
  return products.map((item) => (
    <ProductCard
      key={item.image}
      title={item.title}
      description={item.description}
      image={require(`../../data/images/${item.image}`)}
    />
  ));
}

export default Container;
