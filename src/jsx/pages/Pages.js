import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PagesTable from "../components/table/PagesTable/PagesTable";

const Pages = () => {
  const { pages } = useSelector((state) => state.pages);

  const [sortedPages, setSortedPages] = useState(sortPages(pages));

  useEffect(() => {
    setSortedPages(sortPages(pages));
  }, [pages]);

  function sortPages(arr) {
    return arr.sort((a, b) => {
      return b.pinned - a.pinned;
    });
  }

  const searchPages = (e) => {
    let filteredPages = [];

    if (!e.target.value) {
      setSortedPages(sortPages(pages));
    } else {
      filteredPages = pages.filter(
        (page) =>
          page.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          page.author.toLowerCase().includes(e.target.value.toLowerCase()) ||
          page.category.toLowerCase().includes(e.target.value.toLowerCase())
      );

      setSortedPages(sortPages(filteredPages));
    }
  };

  return (
    <div className="container w-100">
      <div className="row d-flex justify-content-end">
        <Link to="/pages/single">
          <Button variant="primary" className="btn">
            New Page
          </Button>
        </Link>
      </div>
      <div className="row mt-5">
        <div className="col d-flex align-items-center">
          <h4 className="mb-0">{`${sortedPages.length} ${
            sortedPages.length === 1 ? "page" : "pages"
          }`}</h4>
        </div>
        <div className="col d-flex justify-content-end px-0">
          <div className="input-group search-area w-75">
            <input
              type="text"
              className="form-control"
              placeholder="Search pages"
              onChange={searchPages}
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7871 22.7761L17.9548 16.9437C19.5193 15.145 20.4665 12.7982 20.4665 10.2333C20.4665 4.58714 15.8741 0 10.2333 0C4.58714 0 0 4.59246 0 10.2333C0 15.8741 4.59246 20.4665 10.2333 20.4665C12.7982 20.4665 15.145 19.5193 16.9437 17.9548L22.7761 23.7871C22.9144 23.9255 23.1007 24 23.2816 24C23.4625 24 23.6488 23.9308 23.7871 23.7871C24.0639 23.5104 24.0639 23.0528 23.7871 22.7761ZM1.43149 10.2333C1.43149 5.38004 5.38004 1.43681 10.2279 1.43681C15.0812 1.43681 19.0244 5.38537 19.0244 10.2333C19.0244 15.0812 15.0812 19.035 10.2279 19.035C5.38004 19.035 1.43149 15.0865 1.43149 10.2333Z"
                    fill="#A4A4A4"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex flex-wrap mt-5">
        <PagesTable pages={sortedPages} setPages={setSortedPages} />
      </div>
    </div>
  );
};

export default Pages;
