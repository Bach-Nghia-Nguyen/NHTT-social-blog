import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { blogActions } from "../redux/actions/blog.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "react-moment";
import Markdown from "react-markdown";

import Loader from "../components/Loader";
import Reactions from "../components/Reactions";
import Reviews from "../components/Reviews";

const BlogDetailPage = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const history = useHistory();

  const blog = useSelector((state) => state.blog.selectedBlog);
  const loading = useSelector((state) => state.blog.loading);

  const handleGoBack = (e) => {
    history.goBack();
  };

  useEffect(() => {
    if (id) {
      dispatch(blogActions.getSingleBlog(id));
    }
  }, [dispatch, id]);

  return (
    <div className="pages">
      <h1>The detail of a blog goes here</h1>

      <div className="d-flex justify-content-between">
        <Button onClick={handleGoBack}>
          <FontAwesomeIcon icon="chevron-left" size="1x" /> Back
        </Button>

        {/* Blog Edit button goes here */}
      </div>

      {/* Blog detail section */}
      {loading ? (
        <Loader />
      ) : (
        <>
          {blog && (
            <div className="mb-5">
              <h4>{blog.title}</h4>

              {blog.images && <img src={blog.images[0]} alt="blog" />}

              <span className="text-muted">
                @{blog.author?.name} wrote
                <Moment fromNow>{blog.createdAt}</Moment>
              </span>

              <hr />

              {blog.content && <Markdown source={blog.content} />}

              <hr />

              <Reactions
                reactionsData={blog.reactions}
                targetType="Blog"
                targetId={blog._id}
                size="lg"
              />

              <hr />

              <Reviews reviews={blog.reviews} />
            </div>
          )}
        </>
      )}

      {/* Review Creation Form goes here */}
    </div>
  );
};

export default BlogDetailPage;
