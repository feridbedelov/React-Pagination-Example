import { useState, useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";

export const usePagination = (totalPageCount, totalCount, perPage) => {
  const history = useHistory();
  const location = useLocation();

  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const search = location.search;

    if (search) {
      const thenum = search.match(/\d+/)[0];
      setActivePage(thenum);
    } else {
      setActivePage(1);
    }
  }, [location]);

  const onPageChangeHandler = (data) => {
    setActivePage(data.selected + 1);
    if (data.selected === 0) {
      history.push(`/`);
    } else {
      history.push(`/?page=${data.selected + 1}`);
    }
  };

  const firstIndex = activePage * perPage - perPage;
  const lastIndex =
    activePage * perPage > totalCount ? totalCount : activePage * perPage;

  // When page is 1 then prev button is invisible , if page is last then next button is invisible
  useEffect(() => {
    if (totalPageCount !== null) {
      const pageNext = document.querySelector(".page-next");
      const pagePrev = document.querySelector(".page-prev");

      

      if (pageNext) {
        pageNext.style.display = activePage == totalPageCount ? "none" : "block";
      }
      if (pagePrev) {
        pagePrev.style.display = activePage === 1 ? "none" : "block";
      }
    }
  }, [activePage, totalPageCount]);

  return {
    activePage,
    setActivePage,
    firstIndex,
    lastIndex,
    onPageChangeHandler,
  };
};
