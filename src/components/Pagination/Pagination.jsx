import React, { useContext } from "react";
import { productsContext } from "../../contexts/ProductsContext";

const Pagination = () => {
  const { postsPerPage, totalPosts, paginate } = useContext(productsContext);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation">
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "center",
        }}
        className="pagination"
      >
        {pageNumbers.map((item) => (
          <li className="page-item" onClick={() => paginate(item)} key={item}>
            <a className="page-link" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;