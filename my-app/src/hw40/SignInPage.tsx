import React, { useState } from "react";
import "./SignInPage.css";

interface SignInPageProps {
  onGoHome?: () => void;
  onSuccessLogin?: () => void;
  onForgotPassword?: () => void;
  onSignUpClick?: () => void;
}

export const SignInPage: React.FC<SignInPageProps> = ({
  onGoHome,
  onSuccessLogin,
  onForgotPassword,
  onSignUpClick,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log("Отправка формы входа:", { email, password });

    if (onSuccessLogin) {
      onSuccessLogin();
    }
  };

  return (
    <div className="layout-page">
      <header className="page-header">
        <div className="page-header__left">
          <button className="icon-btn" aria-label="Menu" type="button">
            ☰
          </button>
        </div>
        <div className="page-header__right">
          <button className="icon-btn" aria-label="Search" type="button">
            🔍
          </button>
          <button className="icon-btn" aria-label="Profile" type="button">
            👤
          </button>
        </div>
      </header>

      <main className="layout-content">
        <div className="layout-container">
          <button type="button" className="back-btn" onClick={onGoHome}>
            Back to home
          </button>

          <h1 className="page-title">Sign In</h1>

          <form className="sign-in-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-input"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-forgot">
              <button
                type="button"
                className="forgot-password-btn"
                onClick={onForgotPassword}
              >
                Forgot password?
              </button>
            </div>

            <button type="submit" className="primary-btn">
              Sign In
            </button>

            <p className="form-footer-text">
              Don’t have an account?{" "}
              <button
                type="button"
                className="link-btn"
                onClick={onSignUpClick}
              >
                Sign Up
              </button>
            </p>
          </form>
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

export default SignInPage;
