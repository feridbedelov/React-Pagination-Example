import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  firstIndex,
  lastIndex,
  totalCount,
  pageCount,
  onPageChangeHandler,
  activePage
}) => {



  return (
    <div className='pagination'>
      <div className='left'>
        <span className='left-span'>
          Showing {firstIndex + 1} - {lastIndex} of {totalCount} results
        </span>
      </div>

      <div className='right'>
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          previousLabel='<'
          nextLabel='>'
          activeClassName='active-page'
          activeLinkClassName='active-link'
          previousClassName='page-prev'
          nextClassName='page-next'
          containerClassName='pages-container'
          onPageChange={onPageChangeHandler}
          forcePage={activePage === 1 ? 0 : activePage - 1}
        />
      </div>
    </div>
  );
};

export default Pagination;
