import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import { articles } from "../data/articles";

export default function ArticleDetail() {

  const { slug } = useParams();

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return (
      <main className="not-found">

        <h1>
          ARTICLE NOT FOUND.
        </h1>

        <Link to="/articles">
          <ArrowLeft size={16} />
          BACK TO ARTICLES
        </Link>

      </main>
    );
  }

  return (
    <main className="article-detail">

      {/* Back */}

      <Link
        to="/articles"
        className="article-back"
      >
        <ArrowLeft size={17} />
        BACK TO ARTICLES
      </Link>


      {/* Header */}

      <header className="article-detail-header">

        <p className="article-category">
          {article.category}
        </p>

        <h1>
          {article.title}
          <span>.</span>
        </h1>

        <div className="article-info">

          <span>
            {article.date}
          </span>

          <span className="dot">
            ·
          </span>

          <span className="read-time">

            <Clock size={14} />

            {article.readTime}

          </span>

        </div>

      </header>


      {/* Hero */}

      <div className="article-hero-image">

        <img
          src={article.image}
          alt={article.title}
        />

      </div>


      {/* Content */}

      <article className="article-body">

        <p className="article-intro">
          {article.intro}
        </p>

        <div className="article-content">
          {article.content}
        </div>

      </article>


      {/* Share */}

      <section className="article-share">

        <p>
          SHARE THIS ARTICLE
        </p>

        <div>

          <a href="#">
            Instagram
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

        </div>

      </section>


      {/* Footer */}

      <footer className="footer">

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