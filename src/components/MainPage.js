import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import PostList from "./PostList";
import Axios from "axios";
import ReactPaginate from "react-paginate";
import "../styles/Pagination.scss";

import { usePagination } from "../customHooks/usePagination";
import Pagination from "./Pagination";

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const {
    activePage,
    lastIndex,
    firstIndex,
    onPageChangeHandler,
  } = usePagination(17, 100, 6);

  const getPosts = (pageNum) => {
    setLoading(true);
    Axios.get(`http://localhost:3000/posts/?_page=${pageNum}&_limit=6`)
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          setPosts(res.data);
        }, 1000);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getPosts(activePage);
  }, [activePage]);


  return (
    <div className='ui center'>
      <div className='ui cards '>
        {loading ? (
          <div className='inner-loader'>
            <Loader />
          </div>
        ) : (
          <PostList posts={posts} />
        )}
      </div>

      {posts.length > 0 && (
        <Pagination
          firstIndex={firstIndex}
          lastIndex={lastIndex}
          activePage={activePage}
          onPageChangeHandler={onPageChangeHandler}
          totalCount={100}
          pageCount={17}
        />
      )}
    </div>
  );
};

export default MainPage;
