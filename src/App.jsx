import React from "react";

const categories = ["India", "States", "Politics", "Crime", "Business", "Sports", "Entertainment", "Tech", "Videos"];

const latest = [
  "Ground report highlights civic concerns raised by local residents",
  "Public service gaps continue to affect everyday life in several areas",
  "Young reporters use digital media to bring local issues into focus",
  "Community voices call for stronger accountability and faster action",
  "Explained: why ground reporting matters for ordinary citizens"
];

const reports = [
  {
    tag: "Ground Report",
    title: "Citizens demand answers on civic issues affecting daily life",
    text: "RRNews brings field based reporting that documents public concerns and local voices.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    tag: "Investigation",
    title: "Inside the systems that shape public life",
    text: "Our reporters follow evidence, speak to people on the ground and explain the story clearly.",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80"
  },
  {
    tag: "India",
    title: "Public voices become central to digital news",
    text: "Independent reporting is changing how citizens understand local issues and accountability.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80"
  },
  {
    tag: "Technology",
    title: "Digital newsrooms reshape public reporting in India",
    text: "Short videos, social media and public submissions are changing newsrooms across India.",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=80"
  }
];

function Logo({ small = false }) {
  return (
    <div className={small ? "logo logo-small" : "logo"}>
      <div className="logo-main">
        <span className="logo-rr">RR</span><span className="logo-news">News</span>
      </div>
      <div className="logo-bottom">
        <span></span>
        <p>REPORTING REALITY</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="site">
      <header className="top-header">
        <div className="container header-inner">
          <Logo small />
          <nav className="nav">
            {categories.map((cat) => <a href="#" key={cat}>{cat}</a>)}
          </nav>
          <button className="live-btn">Live TV</button>
        </div>
      </header>

      <section className="breaking">
        <div className="container breaking-inner">
          <strong>BREAKING</strong>
          <marquee>RRNews | Reporting Reality | Public focused reporting, ground stories, investigations, explainers and video reports from across India.</marquee>
        </div>
      </section>

      <main>
        <section className="hero">
          <div className="map-dots"></div>
          <div className="red-ribbon"></div>
          <div className="blue-panel">
            <div className="globe"></div>
          </div>

          <div className="container hero-grid">
            <div className="hero-copy">
              <Logo />
              <p className="kicker">Independent Indian News Platform</p>
              <h1>Reporting Reality. Giving Voice to the Public.</h1>
              <p className="hero-text">
                RRNews covers ground realities, civic issues, investigations, community stories, explainers and videos with a clear public first approach.
              </p>
              <div className="actions">
                <button className="primary">Read Top Stories</button>
                <button className="secondary">Submit News Tip</button>
              </div>
            </div>

            <article className="lead-card">
              <img src={reports[0].image} alt="News reporting" />
              <div>
                <span>{reports[0].tag}</span>
                <h2>{reports[0].title}</h2>
                <p>{reports[0].text}</p>
              </div>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="container news-layout">
            <aside className="latest-card">
              <h2>Latest News</h2>
              {latest.map((item, index) => (
                <div className="latest-item" key={item}>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  <p>{item}</p>
                </div>
              ))}
            </aside>

            <section>
              <div className="section-head">
                <div>
                  <p className="kicker">Top Coverage</p>
                  <h2>Major Reports</h2>
                </div>
                <a href="#">View All</a>
              </div>

              <div className="report-grid">
                {reports.map((story) => (
                  <article className="report-card" key={story.title}>
                    <img src={story.image} alt="" />
                    <div>
                      <span>{story.tag}</span>
                      <h3>{story.title}</h3>
                      <p>{story.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <aside className="side">
              <div className="category-card">
                <h2>Categories</h2>
                <div className="tags">
                  {categories.map((cat) => <span key={cat}>{cat}</span>)}
                </div>
              </div>

              <div className="tip-card">
                <h2>Send a Story Tip</h2>
                <p>Have information, evidence or a public issue that needs attention? Contact the RRNews newsroom.</p>
                <button className="primary">Contact Newsroom</button>
              </div>
            </aside>
          </div>
        </section>

        <section className="video-section">
          <div className="container">
            <div className="section-head light">
              <div>
                <p className="kicker">Watch</p>
                <h2>RRNews Videos</h2>
              </div>
              <button className="outline-light">Watch More</button>
            </div>

            <div className="video-grid">
              {reports.slice(0, 3).map((story) => (
                <article className="video-card" key={story.title}>
                  <div className="video-image">
                    <img src={story.image} alt="" />
                    <div className="play">▶</div>
                  </div>
                  <div>
                    <span>{story.tag}</span>
                    <h3>{story.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="values">
          <div className="container values-grid">
            <div>
              <p className="kicker">Why RRNews</p>
              <h2>Built for reality based public reporting</h2>
            </div>
            <div className="value-card">
              <h3>Ground First</h3>
              <p>We focus on field reporting and voices from affected communities.</p>
            </div>
            <div className="value-card">
              <h3>Public Interest</h3>
              <p>We highlight stories that matter to citizens and everyday life.</p>
            </div>
            <div className="value-card">
              <h3>Clear Explainers</h3>
              <p>We explain complex issues in simple, accessible language.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Logo small />
            <p>RRNews is a public focused Indian news platform built to report reality, highlight ground issues and bring citizens closer to the stories that matter.</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Email: newsroom@rrnews.in</p>
            <p>Facebook: @RRNewsOfficial</p>
            <p>Location: India</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="#">About RRNews</a>
            <a href="#">Advertise With Us</a>
            <a href="#">Submit News Tip</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="container copyright">© 2026 RRNews. All rights reserved.</div>
      </footer>
    </div>
  );
}
