import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./SingleBlogPage.module.css";

export default function SingleBlogPage() {
 // Access the blog data from state





 const blogsData = [
  {
    id: 1,
    title: "Blog 1",
    email: "admin@gmail.com",
    shortContent: "sckdfjsdlidakjcsodihsijdkhsakjcxhskjcn sdchuskcjhskcjhskcjbskcsdjhskcjsd",
    description: "This is blog 1 description",
    content: "This is the full content of blog 1",
    image: "https://via.placeholder.com/150",
    createdOn: "12-12-2024",
  },
 
];
 
const blogsList = [
  {
    id: 1,
    title: "Blog 1",
    email: "admin@gmail.com",
    shortContent: "sckdfjsdlidakjcsodihsijdkhsakjcxhskjcn sdchuskcjhskcjhskcjbskcsdjhskcjsd",
    description: "This is blog 1 description",
    content: "This is the full content of blog 1",
    image: "https://via.placeholder.com/150",
    createdOn: "12-12-2024",
  },
  {
    id: 2,
    title: "Blog 1",
    email: "admin@gmail.com",
    shortContent: "sckdfjsdlidakjcsodihsijdkhsakjcxhskjcn sdchuskcjhskcjhskcjbskcsdjhskcjsd",
    description: "This is blog 1 description",
    content: "This is the full content of blog 1",
    image: "https://via.placeholder.com/150",
    createdOn: "12-12-2024",
  }, {
    id: 3,
    title: "Blog 1",
    email: "admin@gmail.com",
    shortContent: "sckdfjsdlidakjcsodihsijdkhsakjcxhskjcn sdchuskcjhskcjhskcjbskcsdjhskcjsd",
    description: "This is blog 1 description",
    content: "This is the full content of blog 1",
    image: "https://via.placeholder.com/150",
    createdOn: "12-12-2024",
  }, {
    id: 4,
    title: "Blog 1",
    email: "admin@gmail.com",
    shortContent: "sckdfjsdlidakjcsodihsijdkhsakjcxhskjcn sdchuskcjhskcjhskcjbskcsdjhskcjsd",
    description: "This is blog 1 description",
    content: "This is the full content of blog 1",
    image: "https://via.placeholder.com/150",
    createdOn: "12-12-2024",
  }, {
    id: 5,
    title: "Blog 1",
    email: "admin@gmail.com",
    shortContent: "sckdfjsdlidakjcsodihsijdkhsakjcxhskjcn sdchuskcjhskcjhskcjbskcsdjhskcjsd",
    description: "This is blog 1 description",
    content: "This is the full content of blog 1",
    image: "https://via.placeholder.com/150",
    createdOn: "12-12-2024",
  },




 
];



  return (
    <div className={styles.singleblogPage}>
       <h1>Recents Blogs Posts</h1>
     <div className={styles.singleblogPageContainer}>
      <div className={styles.singleblogContainer}>
     {blogsData.map((story, index) => (
      <div >
     <div className={styles.blogImageContainer}>
          <img src={story.image} alt="Web development" className={styles.blogImage} />
        </div>
      {/* Header Section */}
      <div className={styles.blogContentContainer}>
      <header className={styles.headerBlog}>
        <h2 className={styles.blogTitle}>{story.title}</h2>
        <div className={styles.metaInfo}>
          <span className={styles.author}>{story.email}</span>
          <span className={styles.date}>{story.createdOn}</span>
          
        </div>
        <p>
           {story.shortContent}
          </p>
      </header>

      {/* Blog Content Section */}
      <section className={styles.blogContent}>
        
        <div className={styles.paragraphBlog}>
          <p>
            {story.content}
          </p>
        </div>

       
      </section>
      </div>
    </div>
     ))}
     </div>
    <div className={styles.blogListContainer}>
    
      <section className={styles.blogListSection}>
        <div>
      {blogsList.map((story, index) => (
        <div className={styles.blogListContent}>
          <img src="" alt=""/>
          <div className={styles.blogsDetails}> 

          </div>
        </div>
          ))}
          </div>
      </section>
  
    </div>
    </div>
    </div>
  );
}
