import React, { useState, useEffect } from "react";
import "./App.css";

import PostList from "./components/PostList";
import Axios from "axios";
import Pagination from "react-paginate";
import Spinner from "./components/Spinner";
import Loader from "./components/Loader"

const App = () => {
  const [first, setFirst] = useState(true);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  const getPosts = (pageNum = 1) => {
    setLoading(true);
    Axios.get(`http://localhost:3000/posts/?_page=${pageNum}&_limit=6`)
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          setPosts(res.data);
          setFirst(false);
          setPageCount(Math.ceil(100 / 6));
        }, 1000);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const pageHandleClick = (data) => {
    getPosts(data.selected + 1);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return first && loading ? (
    <div className='spinner'>
      <Spinner />
    </div>
  ) : (
    <div>
      <div className='ui menu header'>
        <h1>Posts Pagination</h1>
      </div>
      <div className='ui center aligned container'>
        <div className='ui cards '>
          {loading ? (
            <div className = "inner-loader" >
              <Loader />
            </div>
          ) : (
            <PostList posts={posts} />
          )}
        </div>
        {posts && (
          <Pagination
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={pageHandleClick}
            containerClassName={"ui pagination menu"}
            activeClassName={"active"}
          />
        )}
      </div>
    </div>
  );
};

export default App;
