import React from "react";
import "./SuccessPage.css";

interface SuccessPageProps {
  onGoHome?: () => void;
}

export const SuccessPage: React.FC<SuccessPageProps> = ({ onGoHome }) => {
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
          <button className="icon-btn" aria-label="Профиль" type="button">
            👤
          </button>
        </div>
      </header>

      <main className="layout-content">
        <div className="layout-container">
          <button type="button" className="back-btn" onClick={onGoHome}>
            Back to home
          </button>

          <h1 className="page-title">Success</h1>

          <div className="success-card">
            <h2 className="success-card__title">Email confirmed.</h2>
            <p className="success-card__subtitle">
              Your registration is now completed
            </p>

            <button type="button" className="primary-btn" onClick={onGoHome}>
              Go to home
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

export default SuccessPage;
