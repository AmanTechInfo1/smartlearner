import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./NewsSection.module.css";
import {
  fetchFilteredNews,
  fetchNews,
  getAllBlogs,
} from "../../redux/features/blogSlice";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaFacebook, FaInstagram, FaSnapchat, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoNewspaper } from "react-icons/io5";
import { FaAnglesRight } from "react-icons/fa6";

export default function News() {
  const dispatch = useDispatch();
  const { news } = useSelector(
    (state) => state.blog
  ); 

  useEffect(() => {
      dispatch(fetchNews());
  }, [dispatch]);


  return (
    <div>
      <div className={styles.newsContainers}>
        <div className={styles.newsSection}>
          <div className={styles.topStories}>
            <section>
              {" "}
              <h2>
                Top headlines{" "}
                <MdOutlineKeyboardDoubleArrowRight style={{ color: "red" }} />
              </h2>
              <div className={styles.socialFollowIcons}>
                <a
                  href="https://www.facebook.com/smartlearnerdrivingschool"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    id={styles.FollowIcons}
                    style={{ color: "blue" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/smartlearnerdrivingschool"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    id={styles.FollowIcons}
                    style={{ color: "pink" }}
                  />
                </a>
                <a
                  href="https://www.snapchat.com/add/smartlearner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSnapchat
                    id={styles.FollowIcons}
                    style={{ color: "yellow" }}
                  />
                </a>
                <a
                  href="https://twitter.com/smartlearner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter
                    id={styles.FollowIcons}
                    style={{ color: "white" }}
                  />
                </a>
                <a
                  href="https://www.youtube.com/@SmartLearnerDrivingSchool"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube id={styles.FollowIcons} style={{ color: "red" }} />
                </a>
              </div>
            </section>

            <hr></hr>
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className={styles.slider}
              loop={true}
            >
              {news.map((story, index) => (
                <SwiperSlide key={index} className={styles.slide}>
                  <div className={styles.storyCard}>
                    <section className={styles.imgSection}>
                      <img
                        src={story.thumbnail}
                        alt={story.title}
                        className={styles.newsBannerImage}
                      />
                      <a
                        href={story.source.url}
                        style={{
                          color: "white",
                          textDecoration: "none",
                          fontFamily: "'Courier New', Courier, monospace",
                        }}
                      >
                        <img
                          src={story.source.favicon}
                          className={styles.favicon}
                        />
                        {story.source.name}
                      </a>
                      <a
                        href={story.url}
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <h3>{story.title}</h3>{" "}
                      </a>
                      {/* <span>
                        {`${new Date(story.date).getDate()}/${
                          new Date(story.date).getMonth() + 1
                        }/${new Date(story.date).getFullYear()}`}{" "}
                        {`${new Date(story.date).getHours()}:${new Date(
                          story.date
                        ).getMinutes()}:${new Date(story.date).getSeconds()}`}
                      </span> */}
                    </section>
                    <section className={styles.storiesDetails}>
                      <div className={styles.storiesFevicon}>
                        <a href={story.source.url}>
                          <img
                            src={story.source.favicon}
                            className={styles.favicon}
                          />
                          {story.source.name}
                        </a>
                      </div>

                      <p>{story.description}</p>
                      <p>keywords:</p>
                      <p>{story.keywords.join(", ")}</p>
                      <a
                        href={story.url}
                        style={{ color: "red", textDecoration: "none" }}
                      >
                        {" "}
                        <p>
                          Read More <FaAnglesRight />
                        </p>
                      </a>
                      {/* <span>
                        {`${new Date(story.date).getDate()}/${
                          new Date(story.date).getMonth() + 1
                        }/${new Date(story.date).getFullYear()}`}{" "}
                        {`${new Date(story.date).getHours()}:${new Date(
                          story.date
                        ).getMinutes()}:${new Date(story.date).getSeconds()}`}
                      </span> */}
                    </section>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Local News Section */}
          <div className={styles.localNews}>
            <h2>
              Recent News <IoNewspaper style={{ color: "red" }} />
            </h2>
            <div className={styles.newsList}>
              {news.map((news, index) => (
                <a href={news.url}>
                  <div key={index} className={styles.newsCard}>
                    <img
                      src={news.thumbnail}
                      alt={news.title}
                      className={styles.imageDate}
                    />
                    <div>
                      <h4>{news.title}</h4>
                      {/* <span style={{ color: "red" }}>
                        {`${new Date(news.date).getDate()}/${
                          new Date(news.date).getMonth() + 1
                        }/${new Date(news.date).getFullYear()}`}{" "}
                        {`${new Date(news.date).getHours()}:${new Date(
                          news.date
                        ).getMinutes()}:${new Date(news.date).getSeconds()}`}
                      </span> */}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
