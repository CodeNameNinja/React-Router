import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <Link>
          <li>A Book</li>
        </Link>
        <Link>
          <li>A Carpet</li>
        </Link>
        <Link>
          <li>An Online Course</li>
        </Link>
      </ul>
    </section>
  );
};

export default Products;
