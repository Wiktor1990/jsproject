import React from "react";
import type { IPost } from "./types";
import "./SinglePostPage.css";

interface SinglePostPageProps {
  post: IPost;
  onGoBack: () => void;
  onPrevPost?: () => void;
  onNextPost?: () => void;
}

export const SinglePostPage: React.FC<SinglePostPageProps> = ({
  post,
  onGoBack,
  onPrevPost,
  onNextPost,
}) => {
  return (
    <div className="layout-page">
      <header className="page-header">
        <div className="page-header__left">
          <button className="icon-btn" aria-label="Меню" type="button">
            ☰
          </button>
        </div>
        <div className="page-header__right">
          <button className="icon-btn" aria-label="Поиск" type="button">
            🔍
          </button>
          <div className="user-profile">
            <span className="user-avatar">AM</span>
            <span className="user-name">Artem Malkin</span>
          </div>
        </div>
      </header>

      <main className="single-post-main">
        <div className="single-post-container">
          <nav className="breadcrumbs">
            <span className="breadcrumb-link" onClick={onGoBack}>
              Home
            </span>
            <span className="breadcrumb-separator">|</span>
            <span className="breadcrumb-current">Post {post.id}</span>
          </nav>

          <h1 className="post-detail-title">{post.title}</h1>

          {post.image && (
            <div className="post-detail-image-wrapper">
              <img
                src={post.image}
                alt={post.title}
                className="post-detail-image"
              />
            </div>
          )}

          <div className="post-detail-content">
            <p>{post.text}</p>
            <p>
              During the final days of Alice Neel’s blockbuster solo show at the
              Metropolitan Museum of Art this summer, the line for the
              exhibition spanned the length of the museum’s European paintings
              corridor, and the wait was over half an hour. Titled “People Come
              First,” the show featured more than 100 gritty cityscapes,
              domestic interiors, and stripped-down portraits of Neel’s
              neighbors, friends, and fellow artists, in the largest ever
              showing of her work in her hometown of New York City.
            </p>
            <p>
              The stories tracked Hambling’s trailblazing career while focusing
              on her current and upcoming projects. The artist's installation
              Bets (2021), produced alongside sound recordist Chris Watson, was
              recently on view at Snape Maltings in London. Meanwhile, this
              October, portraits by Hambling will be presented at the Italian
              gallery Thomas Brambilla. The artist’s “Wave Series” is also
              currently being exhibited in the group show “Summer Exhibition” at
              Marlborough London, which runs through September 10th.
            </p>
          </div>

          <div className="post-detail-footer">
            <div className="reactions-group">
              <button type="button" className="reaction-btn" aria-label="Лайк">
                👍
              </button>
              <button
                type="button"
                className="reaction-btn"
                aria-label="Дизлайк"
              >
                👎
              </button>
            </div>
            <button type="button" className="favorite-btn">
              🔖 Add to favorites
            </button>
          </div>

          <div className="post-navigation">
            <div className="nav-prev" onClick={onPrevPost}>
              <span className="nav-arrow">← Prev</span>
              <span className="nav-post-title">
                10 Things to Know About Space
              </span>
            </div>
            <div className="nav-next" onClick={onNextPost}>
              <span className="nav-arrow">Next →</span>
              <span className="nav-post-title">
                A Beautiful Orbit Belonging to History
              </span>
            </div>
          </div>
        </div>
      </main>

      <footer className="page-footer">
        <div className="page-footer__container">
          <span>©2022 Blogfolio</span>
          <span>All rights reserved</span>
        </div>
      </footer>
    </div>
  );
};
