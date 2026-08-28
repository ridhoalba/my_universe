import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.JPG";

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/ridho.14alba/" },
  { name: "GitHub", url: "https://github.com/ridhoalba" },
  {name: "LinkedIn", url: "https://www.linkedin.com/in/ridho-alba-bb2a55431/"},
  { name: "Email", url: "mailto:ridhoalba461.space@gmail.com" },
];

export default function Home() {
  return (
    <main className="home">
      {/* Article Navigation */}
      <Link to="/articles" className="article-link">
        <span>ARTICLES</span>
        <ArrowUpRight size={18} strokeWidth={1.7} />
      </Link>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            RIDHO ALBA<span>.</span>
          </h1>

          <div className="hero-line" />

          <p className="role">
            TECH ENTHUSIAST
            <br />
            <span>& DIGITAL CREATOR</span>
          </p>

          <p className="intro">
            I build digital experiences that turn ideas
            <br />
            into something real, useful, and meaningful.
          </p>
        </div>

        <div className="profile-wrapper">
          <div className="profile-frame">
            <img src={profile} alt="Ridho" />
          </div>

          <span className="profile-label">BASED IN INDONESIA</span>
        </div>
      </section>

      {/* Statement */}
      <section className="statement">
        <p>01 — WHAT I DO</p>

        <h2>
          BUILDING THINGS
          <br />
          <em>THAT MATTER.</em>
        </h2>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="socials">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
            >
              {social.name}
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© 2026 RIDHO</span>
          <span>MADE WITH REACT</span>
        </div>
      </footer>
    </main>
  );
}