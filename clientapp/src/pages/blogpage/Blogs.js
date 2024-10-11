import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Blogs.module.css"; // Import CSS Module
import aboutImg from "../../assets/images/image_2021_03_03T15_33_28_479Z-1024x768.png";
import { Pagination } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaFacebook, FaInstagram, FaSnapchat, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const blogsData = [
  {
    id: 1,
    title: "Blog 1",
    description: "This is blog 1 description",
    content: "This is the full content of blog 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Blog 2",
    description: "This is blog 2 description",
    content: "This is the full content of blog 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Blog 3",
    description: "This is blog 3 description",
    content: "This is the full content of blog 3",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Blog 1",
    description: "This is blog 1 description",
    content: "This is the full content of blog 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Blog 2",
    description: "This is blog 2 description",
    content: "This is the full content of blog 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Blog 3",
    description: "This is blog 3 description",
    content: "This is the full content of blog 3",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "Blog 1",
    description: "This is blog 1 description",
    content: "This is the full content of blog 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    title: "Blog 2",
    description: "This is blog 2 description",
    content: "This is the full content of blog 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    title: "Blog 3",
    description: "This is blog 3 description",
    content: "This is the full content of blog 3",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    title: "Blog 1",
    description: "This is blog 1 description",
    content: "This is the full content of blog 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    title: "Blog 2",
    description: "This is blog 2 description",
    content: "This is the full content of blog 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    title: "Blog 3",
    description: "This is blog 3 description",
    content: "This is the full content of blog 3",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    title: "Blog 1",
    description: "This is blog 1 description",
    content: "This is the full content of blog 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 14,
    title: "Blog 2",
    description: "This is blog 2 description",
    content: "This is the full content of blog 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    title: "Blog 3",
    description: "This is blog 3 description",
    content: "This is the full content of blog 3",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 16,
    title: "Blog 1",
    description: "This is blog 1 description",
    content: "This is the full content of blog 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 17,
    title: "Blog 2",
    description: "This is blog 2 description",
    content: "This is the full content of blog 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 18,
    title: "Blog 3",
    description: "This is blog 3 description",
    content: "This is the full content of blog 3",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 19,
    title: "Blog 1",
    description: "This is blog 1 description",
    content: "This is the full content of blog 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 20,
    title: "Blog 2",
    description: "This is blog 2 description",
    content: "This is the full content of blog 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 21,
    title: "Blog 3",
    description: "This is blog 3 description",
    content: "This is the full content of blog 3",
    image: "https://via.placeholder.com/150",
  },
];

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const blogsPerPage = 10; // Number of blogs per page
  const totalPages = Math.ceil(blogsData.length / blogsPerPage); // Total pages calculation
  const navigate = useNavigate();

  // Get current blogs for the selected page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle page click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle blog click to navigate to single blog
  const handleBlogClick = (blog) => {
    navigate(`/blogs/${blog.id}`, { state: blog });
  };

  return (
    <div className={styles.blogsPage}>
      <div className={styles.blogscontainer}>
        <div className={styles.blogsHomeBanner}>
          <div className={styles.opicity}></div>
          <section>
            <div className={styles.blogsheader}>
              <h2>Blog Name</h2>
            </div>
          </section>
        </div>
        <div className={styles.blogsContainerRows}>
          <div className={styles.blogsrow}>
            {/* Left Column */}
            <div className={styles.blogsleftColumn}>
              {currentBlogs.map((blog) => (
                <div className={styles.blogscard} key={blog.id}>
                  <h2>{blog.title}</h2>
                  <h5>{blog.description}</h5>
                  <div className={styles.fakeimg} style={{ height: "200px" }}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className={styles.blogImage}
                    />
                  </div>
                  <p>{blog.content.substring(0, 100)}...</p>{" "}
                  <Button
                    variant="danger"
                    onClick={() => handleBlogClick(blog)}>
                    Read More..
                  </Button>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className={styles.blogsrightColumn}>
              <div className={styles.blogscard}>
                <h2>About Me</h2>
                <img
                  src={aboutImg}
                  alt="blog"
                  style={{ maxWidth: "350px", width: "100%" }}
                />

                <p>
                  SmartLearner was founded in 2004 with the vision of
                  becoming...{" "}
                  <Link to="/about">
                    <Button variant="danger">Read More..</Button>
                  </Link>
                </p>
              </div>
              <div className={styles.blogscard}>
                <h3>Popular Posts</h3>
                <div className={styles.fakeimg}>Image</div>
                <br />
                <div className={styles.fakeimg}>Image</div>
                <br />
                <div className={styles.fakeimg}>Image</div>
              </div>
              <div className={styles.blogscard}>
                <h3>Follow Me</h3>
                <div className={styles.socialFollowIcons}>
                  <a
                    href="https://www.facebook.com/smartlearnerdrivingschool"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaFacebook id={styles.FollowIcons} />
                  </a>
                  <a
                    href="https://www.instagram.com/smartlearnerdrivingschool"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaInstagram id={styles.FollowIcons} />
                  </a>
                  <a
                    href="https://www.snapchat.com/add/smartlearner"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaSnapchat id={styles.FollowIcons} />
                  </a>
                  <a
                    href="https://twitter.com/smartlearner"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaXTwitter id={styles.FollowIcons} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCWqlTyiFfPNqgKeffuo68rghttp"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaYoutube id={styles.FollowIcons} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center mt-4">
            <Pagination>
              <Pagination.First
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              />
              <Pagination.Prev
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageClick(index + 1)}>
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
              <Pagination.Last
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
