import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./SingleBlogPage.module.css";

export default function SingleBlogPage() {
  const { id } = useParams();
  const location = useLocation();
  const blog = location.state; // Access the blog data from state

  if (!blog) {
    return <h2>Blog not found</h2>;
  }
  return (
    <div>
      <div className={styles.singleBlogContainer}>
        <img src={blog.image} alt={blog.title} className={styles.blogImage} />
        <h1 className={styles.blogTitle}>{blog.title}</h1>
        <p className={styles.blogContent}>{blog.content}</p>
      </div>
    </div>
  );
}
