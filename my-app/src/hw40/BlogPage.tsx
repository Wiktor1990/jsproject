import React, { useState } from "react";
import type { IPost } from "./types";
import "./BlogPage.css";

interface BlogPageProps {
  posts: IPost[];
  onPostClick: (post: IPost) => void;
}

type TabType = "all" | "favorites" | "popular";

export const BlogPage: React.FC<BlogPageProps> = ({ posts, onPostClick }) => {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredPosts = posts.filter((post) => {
    if (activeTab === "all") return true;
    if (activeTab === "favorites") return post.id % 2 === 0; // Для примера
    if (activeTab === "popular") return post.id % 3 === 0; // Для примера
    return true;
  });

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

      <main className="blog-main">
        <div className="blog-container">
          <h1 className="blog-title">Blog</h1>

          <div className="blog-tabs">
            <button
              type="button"
              className={`tab-btn ${activeTab === "all" ? "tab-btn--active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "favorites" ? "tab-btn--active" : ""}`}
              onClick={() => setActiveTab("favorites")}
            >
              My Favorites
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "popular" ? "tab-btn--active" : ""}`}
              onClick={() => setActiveTab("popular")}
            >
              Popular
            </button>
          </div>

          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="blog-card"
                onClick={() => onPostClick(post)}
              >
                {post.image && (
                  <div className="blog-card__image-wrapper">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-card__image"
                    />
                  </div>
                )}
                <div className="blog-card__content">
                  <span className="blog-card__date">{post.date}</span>
                  <h3 className="blog-card__title">{post.title}</h3>

                  <div className="blog-card__footer">
                    <div className="card-reactions">
                      <button
                        type="button"
                        className="card-react-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        👍
                      </button>
                      <button
                        type="button"
                        className="card-react-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        👎
                      </button>
                    </div>
                    <div className="card-actions">
                      <button
                        type="button"
                        className="card-action-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        🔖
                      </button>
                      <button
                        type="button"
                        className="card-action-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        •••
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Пагинация */}
          <div className="blog-pagination">
            <button
              type="button"
              className="pagination-arrow"
              disabled={currentPage === 1}
            >
              ← Prev
            </button>
            <div className="pagination-pages">
              <button type="button" className="page-num page-num--active">
                1
              </button>
              <button type="button" className="page-num">
                2
              </button>
              <button type="button" className="page-num">
                3
              </button>
              <span className="pagination-dots">...</span>
              <button type="button" className="page-num">
                6
              </button>
            </div>
            <button type="button" className="pagination-arrow">
              Next →
            </button>
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
