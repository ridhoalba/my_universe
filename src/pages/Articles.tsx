import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import { articles } from "../data/articles";

export default function Articles() {
  return (
    <main className="articles-page">

      <Link
        to="/"
        className="back-link"
      >
        <ArrowLeft size={17} />
        BACK
      </Link>

      <header className="articles-header">

        <p className="eyebrow">
          02 — WRITINGS
        </p>

        <h1>
          ARTICLES<span>.</span>
        </h1>

        <p>
          Thoughts, experiences, and things
          <br />
          I've learned along the way.
        </p>

      </header>

      <section className="article-list">

        {articles.map((article) => (

          <Link
            key={article.slug}
            to={`/articles/${article.slug}`}
            className="article-item"
          >

            <span className="article-number">
              {article.number}
            </span>

            <div className="article-main">

              <h2>
                {article.title}
              </h2>

              <div className="article-meta">

                <span>
                  {article.category}
                </span>

                <span>
                  {article.date}
                </span>

              </div>

            </div>

            <ArrowUpRight
              className="article-arrow"
              size={25}
              strokeWidth={1.3}
            />

          </Link>

        ))}

      </section>

      <footer className="footer articles-footer">

        <div className="socials">

          <a href="#">
            Instagram
            <ArrowUpRight size={14} />
          </a>

          <a href="#">
            GitHub
            <ArrowUpRight size={14} />
          </a>

          <a href="#">
            LinkedIn
            <ArrowUpRight size={14} />
          </a>

          <a href="#">
            WhatsApp
            <ArrowUpRight size={14} />
          </a>

          <a href="mailto:hello@example.com">
            Email
            <ArrowUpRight size={14} />
          </a>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 RIDHO
          </span>

          <Link to="/">
            BACK HOME
          </Link>

        </div>

      </footer>

    </main>
  );
}