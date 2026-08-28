import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Check,
  Copy,
  Facebook,
  Twitter,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { articles } from "../data/articles";

export default function ArticleDetail() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="not-found">
        <h1>ARTICLE NOT FOUND.</h1>
        <Link to="/articles">
          <ArrowLeft size={16} />
          BACK TO ARTICLES
        </Link>
      </main>
    );
  }

  // URL & Text untuk dibagikan
  const currentUrl = window.location.href;
  const shareTitle = article.title;

  // Link Share Platform
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle} - ${currentUrl}`)}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(currentUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  // Handler Copy Link
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  // Handler Native Share (Mobile)
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          url: currentUrl,
        });
      } catch (err) {
        console.log("Share canceled or failed", err);
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <main className="article-detail">
      {/* Back */}
      <Link to="/articles" className="article-back">
        <ArrowLeft size={17} />
        BACK TO ARTICLES
      </Link>

      {/* Header */}
      <header className="article-detail-header">
        <p className="article-category">{article.category}</p>
        <h1>
          {article.title}
          <span>.</span>
        </h1>
        <div className="article-info">
          <span>{article.date}</span>
          <span className="dot">·</span>
          <span className="read-time">
            <Clock size={14} />
            {article.readTime}
          </span>
        </div>
      </header>

      {/* Hero */}
      <div className="article-hero-image">
        <img src={article.image} alt={article.title} />
      </div>

      {/* Content */}
      <article className="article-body">
        <p className="article-intro">{article.intro}</p>
        <div className="article-content">{article.content}</div>
      </article>

      {/* Share */}
      <section className="article-share">
        <p>SHARE THIS ARTICLE</p>

        <div>
          {/* X (Twitter) */}
          <a
            href={xUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            X (Twitter)
            <ArrowUpRight size={14} />
          </a>

          {/* Facebook */}
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
            <ArrowUpRight size={14} />
          </a>

          {/* LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <ArrowUpRight size={14} />
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
            <ArrowUpRight size={14} />
          </a>

          {/* Copy Link */}
          <button
            onClick={handleNativeShare}
            className="share-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              font: "inherit",
              color: "inherit",
            }}
          >
            {copied ? "Link Copied!" : "Copy Link"}
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-bottom">
          <span>© 2026 RIDHO</span>
          <Link to="/">BACK HOME</Link>
        </div>
      </footer>
    </main>
  );
}