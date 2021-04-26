import React from "react";
// import Loader from "../components/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogActions } from "../redux/actions/blog.actions";
import { ClipLoader } from "react-spinners";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import PaginationBar from "../components/PaginationBar";
import { useState } from "react";
import { useHistory } from "react-router";

const HomePage = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const totalPageNum = useSelector((state) => state.blog.totalPageNum);
  const loading = useSelector((state) => state.blog.loading);
  // const [blogs, setBlogs] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  // const BACKEND_API = process.env.REACT_APP_BACKEND_API;
  const history = useHistory();

  const handleClickDetail = (id) => {
    history.push(`/blogs/${id}`);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(blogActions.getBlogs(pageNum));
  }, [dispatch, pageNum]);
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center mb-3">
        <PaginationBar
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalPageNum={totalPageNum}
        />
      </Row>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="red" size={150} loading={true} />
        </div>
      ) : (
        <>
          {blogs.length > 0 ? (
            <Row>
              {blogs.map((blog) => (
                <Col xs={4} className="mb-4">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={blog.images[0]} />
                    <Card.Body>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.content}</Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => handleClickDetail(blog._id)}
                      >
                        Click to View Post
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <p>There are no blogs</p>
          )}
        </>
      )}
    </Container>
  );
};

export default HomePage;
