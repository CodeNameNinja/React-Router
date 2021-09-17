import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="product/1">A Book</Link>
        </li>
        <li>
          <Link to="product/2">A Carpet</Link>
        </li>
        <li>
          <Link to="product/3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
