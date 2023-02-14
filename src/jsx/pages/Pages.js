import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PagesTable from "../components/table/PagesTable/PagesTable";
import TableFilterInput from "../components/table/PagesTable/TableFilterInput";

const Pages = () => {
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

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
        <TableFilterInput />
      </div>
      <div className="row d-flex flex-wrap mt-5">
        <PagesTable
          pages={sortedPages}
          setPages={setSortedPages}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
};

export default Pages;
