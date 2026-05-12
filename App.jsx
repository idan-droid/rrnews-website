import React from "react";

const categories = ["India", "State", "Politics", "Crime", "Business", "Sports", "Entertainment", "Technology", "Opinion", "Videos"];

const sideStories = [
  {
    tag: "India",
    title: "Citizens demand stronger response to public service gaps",
    text: "Reports from communities show why local voices need more attention in mainstream coverage.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80"
  },
  {
    tag: "Investigation",
    title: "Inside the systems that affect ordinary people every day",
    text: "Our team follows facts, documents evidence, and gives space to people directly affected.",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80"
  }
];

const latest = [
  "Local residents raise concerns over road safety and poor lighting",
  "Public health officials urge stronger hygiene monitoring in markets",
  "Young journalists turn to digital platforms for independent reporting",
  "Community groups call for action on water logging after heavy rain",
  "Small businesses seek clarity on new local compliance requirements"
];

const reports = [
  {
    tag: "Breaking",
    title: "Ground report exposes the reality behind local civic issues",
    text: "RRNEWS brings field based reporting from the ground, focusing on public concerns and accountability.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80"
  },
  {
    tag: "India",
    title: "Public voices are becoming central to digital news coverage",
    text: "Independent platforms are using video, field work, and explainers to reach wider audiences.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80"
  },
  {
    tag: "Crime",
    title: "Local safety concerns require stronger public attention",
    text: "Our reporters track stories that matter to communities and everyday public life.",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=900&q=80"
  },
  {
    tag: "Business",
    title: "Small businesses seek clarity on new compliance rules",
    text: "RRNEWS explains policy changes in simple language for citizens and business owners.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
  },
  {
    tag: "Technology",
    title: "Digital media reshapes how people consume local news",
    text: "Short videos, social media, and public submissions are changing newsrooms across India.",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=80"
  },
  {
    tag: "Opinion",
    title: "Why ground reporting matters for democracy",
    text: "When citizens are heard, public institutions are more likely to respond.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80"
  }
];

const videos = [
  {
    title: "Reality Check: What citizens are saying on the ground",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Explained: Why local reporting matters in Indian democracy",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Special Report: The story behind one public complaint",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=80"
  }
];

function Logo() {
  return (
    <div className="logo-card">
      <div className="logo-text">
        RR<span>NEWS</span>
        <div className="tagline">REPORTING REALITY</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <div className="top-strip">
        <div className="container">RRNEWS | Reporting Reality | Public focused news from India</div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <Logo />
          <nav className="nav">
            {categories.slice(0, 7).map((item) => (
              <a href="#" key={item}>{item}</a>
            ))}
          </nav>
          <div className="header-actions">
            <button className="btn btn-white">Subscribe</button>
            <button className="btn btn-red">Live TV</button>
          </div>
        </div>
      </header>

      <section className="breaking">
        <div className="container breaking-inner">
          <span className="breaking-label">Breaking News</span>
          <marquee>RRNEWS brings you public focused reporting, ground stories, investigations, explainers, and video reports from across India.</marquee>
        </div>
      </section>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <article className="hero-main">
              <div>
                <span className="label">Top Story</span>
                <h1>Reporting Reality. Giving Voice to the Public.</h1>
                <p>RRNEWS is a public focused Indian news brand covering ground realities, civic issues, investigations, community stories, videos, and explainers.</p>
                <button className="btn btn-red">Read Full Story</button>
              </div>
            </article>

            <aside className="side-stories">
              {sideStories.map((story) => (
                <article className="side-card" key={story.title}>
                  <img src={story.image} alt="" />
                  <div className="side-card-content">
                    <span className="label">{story.tag}</span>
                    <h3>{story.title}</h3>
                    <p>{story.text}</p>
                  </div>
                </article>
              ))}

              <div className="tip-box">
                <h3>Send us a story tip</h3>
                <p>Have information, evidence, or a public issue that needs attention? Reach out to the RRNEWS newsroom.</p>
                <button className="btn btn-white">Contact Newsroom</button>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-white">
          <div className="container news-grid">
            <aside className="panel">
              <h2 className="panel-title-border">Latest News</h2>
              {latest.map((item, index) => (
                <div className="latest-item" key={item}>
                  <div className="latest-number">{index + 1}</div>
                  <p>{item}</p>
                </div>
              ))}
            </aside>

            <section className="reports">
              <div className="section-heading">
                <div>
                  <h2>Top Reports</h2>
                  <p>Important stories from the RRNEWS desk.</p>
                </div>
              </div>

              <div className="report-cards">
                {reports.map((story) => (
                  <article className="report-card" key={story.title}>
                    <img src={story.image} alt="" />
                    <div className="report-card-content">
                      <span className="label">{story.tag}</span>
                      <h3>{story.title}</h3>
                      <p>{story.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <aside>
              <div className="panel">
                <h2>Popular Categories</h2>
                <div className="category-list">
                  {categories.map((cat) => (
                    <span key={cat}>{cat}</span>
                  ))}
                </div>
              </div>

              <div className="panel" style={{ marginTop: "22px" }}>
                <h2>Search News</h2>
                <div className="search-box">
                  <input placeholder="Search stories" />
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="video-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <h2>RRNEWS Videos</h2>
                <p>Watch field reports, explainers, interviews, and public issue coverage.</p>
              </div>
              <button className="btn btn-red">Watch More</button>
            </div>

            <div className="video-grid">
              {videos.map((video) => (
                <article className="video-card" key={video.title}>
                  <div className="video-thumb">
                    <img src={video.image} alt="" />
                    <div className="play">▶</div>
                  </div>
                  <h3>{video.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container feature-grid">
            <div className="feature-card">
              <div className="feature-icon">R</div>
              <h3>Ground Reports</h3>
              <p>Public focused stories from the field.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">F</div>
              <h3>Fact Based</h3>
              <p>Careful reporting with accountability.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">V</div>
              <h3>Video First</h3>
              <p>Reels, reports, interviews, and explainers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">P</div>
              <h3>Public Voice</h3>
              <p>Stories that reflect real community concerns.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Logo />
            <p>RRNEWS is a public focused Indian news platform built to report reality, highlight ground issues, and bring citizens closer to the stories that matter.</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Email: newsroom@rrnews.in</p>
            <p>Facebook: @RRNewsOfficial</p>
            <p>Location: India</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <p><a href="#">About RRNEWS</a></p>
            <p><a href="#">Advertise With Us</a></p>
            <p><a href="#">Submit News Tip</a></p>
            <p><a href="#">Privacy Policy</a></p>
          </div>
        </div>
        <div className="container copyright">© 2026 RRNEWS. All rights reserved.</div>
      </footer>
    </>
  );
}
