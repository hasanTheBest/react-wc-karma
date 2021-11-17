import React from "react";

const BlogPagination = () => {
  return (
    <nav className="blog-pagination justify-content-center d-flex">
      <ul className="pagination">
        <li className="page-item">
          <a href="#" className="page-link" aria-label="Previous">
            <span aria-hidden="true">
              <span className="lnr lnr-chevron-left"></span>
            </span>
          </a>
        </li>
        {new Array(10).fill(1).map((f, i) => (
          <li className="page-item">
            <a href="#" className="page-link">
              {i.toString().padStart(2, "0")}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a href="#" className="page-link" aria-label="Next">
            <span aria-hidden="true">
              <span className="lnr lnr-chevron-right"></span>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BlogPagination;
