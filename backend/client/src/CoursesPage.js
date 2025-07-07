import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./CoursesPage.css";

const allCourses = [
  { id: 1, category: "AI", title: "Introduction to AI", video: "https://www.youtube.com/embed/vo4pMVb0R6M", description: "Basics of Artificial Intelligence", enrolled: 1200, rating: 4.5, isNew: true },
  { id: 2, category: "AI", title: "Deep Learning Explained", video: "https://www.youtube.com/embed/aircAruvnKk", description: "Deep learning fundamentals", enrolled: 950, rating: 4.7, isTop: true },
  { id: 3, category: "ML", title: "Machine Learning Basics", video: "https://www.youtube.com/embed/GwIo3gDZCVQ", description: "Getting started with ML", enrolled: 1600, rating: 4.6, isTop: true },
  { id: 4, category: "ML", title: "Supervised vs Unsupervised Learning", video: "https://www.youtube.com/embed/9yl6-HEY7_s", description: "Understand different ML approaches", enrolled: 800, rating: 4.4 },
  { id: 5, category: "Cloud", title: "AWS Cloud Essentials", video: "https://www.youtube.com/embed/ubCNZRNjhyo", description: "Introduction to AWS Cloud", enrolled: 1100, rating: 4.3 },
  { id: 6, category: "Cloud", title: "Azure Basics", video: "https://www.youtube.com/embed/3Arj5zlUPG4", description: "Introduction to Azure Cloud", enrolled: 750, rating: 4.2 },
  { id: 7, category: "Cloud", title: "GCP Fundamentals", video: "https://www.youtube.com/embed/IUU6OR8yHCc", description: "Google Cloud Platform fundamentals", enrolled: 670, rating: 4.1 },
  { id: 8, category: "Web Development", title: "React for Beginners", video: "https://www.youtube.com/embed/bMknfKXIFA8", description: "Learn React step by step", enrolled: 2000, rating: 4.8, isTop: true },
  { id: 9, category: "Web Development", title: "HTML & CSS Crash Course", video: "https://www.youtube.com/embed/UB1O30fR-EE", description: "Build modern websites", enrolled: 2500, rating: 4.9, isTop: true, isNew: true },
  { id: 10, category: "Web Development", title: "JavaScript Basics", video: "https://www.youtube.com/embed/W6NZfCO5SIk", description: "Introduction to JavaScript", enrolled: 2300, rating: 4.7 },
  { id: 11, category: "DevOps", title: "DevOps Overview", video: "https://www.youtube.com/embed/Xrgk023l4lI", description: "Understand DevOps practices", enrolled: 900, rating: 4.4 },
  { id: 12, category: "DevOps", title: "CI/CD Pipelines Explained", video: "https://www.youtube.com/embed/scEDHsr3APg", description: "Continuous Integration and Delivery", enrolled: 650, rating: 4.3 },
  { id: 13, category: "DevOps", title: "Kubernetes Basics", video: "https://www.youtube.com/embed/X48VuDVv0do", description: "Introduction to Kubernetes", enrolled: 700, rating: 4.2 },
];

const extraTopicVideos = {
  HTML: [
    { title: "HTML Crash Course", url: "https://www.youtube.com/embed/UB1O30fR-EE" },
    { title: "Semantic HTML", url: "https://www.youtube.com/embed/3JluqTojuME" },
  ],
  CSS: [
    { title: "CSS Flexbox Guide", url: "https://www.youtube.com/embed/JJSoEo8JSnc" },
    { title: "CSS Grid Layout", url: "https://www.youtube.com/embed/jV8B24rSN5o" },
  ],
  JavaScript: [
    { title: "JavaScript Basics", url: "https://www.youtube.com/embed/W6NZfCO5SIk" },
    { title: "Modern JavaScript", url: "https://www.youtube.com/embed/hdI2bqOjy3c" },
  ],
  "React JS": [
    { title: "React Hooks", url: "https://www.youtube.com/embed/f687hBjwFcM" },
    { title: "React State Management", url: "https://www.youtube.com/embed/kJEsTjH5mVg" },
  ],
  Angular: [
    { title: "Angular Tutorial", url: "https://www.youtube.com/embed/3qBXWUpoPHo" },
  ],
  Python: [
    { title: "Python Full Course", url: "https://www.youtube.com/embed/_uQrJ0TkZlc" },
  ],
  "Machine Learning": [
    { title: "Intro to Machine Learning", url: "https://www.youtube.com/embed/GwIo3gDZCVQ" },
  ],
  "Deep Learning": [
    { title: "Deep Learning Crash Course", url: "https://www.youtube.com/embed/aircAruvnKk" },
  ],
  AWS: [
    { title: "AWS for Beginners", url: "https://www.youtube.com/embed/ulprqHHWlng" },
  ],
  Azure: [
    { title: "Azure Overview", url: "https://www.youtube.com/embed/3Arj5zlUPG4" },
  ],
  GCP: [
    { title: "GCP Fundamentals", url: "https://www.youtube.com/embed/IUU6OR8yHCc" },
  ],
};

function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedResource, setSelectedResource] = useState(null);
  const [watched, setWatched] = useState([]);
  const [cart, setCart] = useState([]);
  const [purchased, setPurchased] = useState([]);
  const [showMyLearning, setShowMyLearning] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const navigate = useNavigate();

  // Filter by category
  let filteredCourses = selectedCategory === "All"
    ? allCourses
    : allCourses.filter((c) => c.category === selectedCategory);

  // Filter by resource/topic
  if (selectedResource) {
    filteredCourses = filteredCourses.filter(
      (c) =>
        c.title.toLowerCase().includes(selectedResource.toLowerCase()) ||
        c.category.toLowerCase().includes(selectedResource.toLowerCase())
    );
  }

  // Filter by search query
  if (searchQuery) {
    filteredCourses = filteredCourses.filter((c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sort
  if (sortOption === "rating") {
    filteredCourses = [...filteredCourses].sort((a, b) => b.rating - a.rating);
  } else if (sortOption === "enrolled") {
    filteredCourses = [...filteredCourses].sort((a, b) => b.enrolled - a.enrolled);
  } else if (sortOption === "newest") {
    filteredCourses = [...filteredCourses].sort((a, b) => b.id - a.id);
  }

  const progress = watched.length > 0 ? (watched.length / allCourses.length) * 100 : 0;

  const handleAddToCart = (id) => {
    if (!cart.includes(id) && !purchased.includes(id)) {
      setCart((prev) => [...prev, id]);
      alert("Added to cart!");
    }
  };

  const handleVideoClick = (id) => {
    if (!watched.includes(id)) {
      setWatched((prev) => [...prev, id]);
    }
  };

  const handleCheckout = () => {
    setPurchased((prev) => [...prev, ...cart]);
    setCart([]);
    setShowMyLearning(true);
    alert("Purchase successful! Courses added to My Learning.");
  };

  const purchasedCourses = allCourses.filter((c) => purchased.includes(c.id));

  // Badge helper
  const getBadge = (c) => {
    if (c.isNew) return <span className="course-badge new-badge">New</span>;
    if (c.isTop) return <span className="course-badge top-badge">Top Rated</span>;
    return null;
  };

  // Progress per course (for demonstration, random for now)
  const getCourseProgress = (id) => (watched.includes(id) ? 100 : 0);

  return (
    <div className="courses-container">
      <div className="courses-wrapper">
        <header className="header">
          <div className="header-content">
            <h2 tabIndex="0">LMS Dashboard</h2>
            <div className="header-actions">
              <button onClick={() => setShowMyLearning((v) => !v)} aria-label="My Learning">
                {showMyLearning ? "Back to Courses" : "My Learning"}
              </button>
              <button onClick={() => navigate("/login")} aria-label="Sign Out">Sign Out</button>
            </div>
          </div>
        </header>

        <div className="content">
          <aside className="sidebar">
            <h3 tabIndex="0">Categories</h3>
            <ul className="categories">
              {["All", "AI", "ML", "Cloud", "Web Development", "DevOps"].map(
                (cat) => (
                  <li
                    key={cat}
                    className={selectedCategory === cat ? "active" : ""}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSelectedResource(null);
                    }}
                    tabIndex="0"
                    aria-label={cat}
                  >
                    {cat}
                  </li>
                )
              )}
            </ul>
            <h3 tabIndex="0">Progress</h3>
            <div className="progress-bar" aria-label="Overall Progress">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p>
              {watched.length} of {allCourses.length} watched
            </p>
          </aside>

          <main className="courses-list">
            {/* Search and Sort Controls */}
            {!showMyLearning && (
              <div className="courses-controls">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-bar"
                  aria-label="Search courses"
                />
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="sort-dropdown"
                  aria-label="Sort courses"
                >
                  <option value="default">Sort By</option>
                  <option value="rating">Highest Rated</option>
                  <option value="enrolled">Most Popular</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            )}

            {selectedResource && (
              <div style={{ marginBottom: "15px" }}>
                <strong>Filtered by: {selectedResource}</strong>{" "}
                <button onClick={() => setSelectedResource(null)}>
                  Clear Filter
                </button>
              </div>
            )}

            {showMyLearning ? (
              <div>
                <h3>My Learning (Purchased Courses)</h3>
                {purchasedCourses.length === 0 ? (
                  <p>No courses purchased yet.</p>
                ) : (
                  <div className="courses-grid">
                    {purchasedCourses.map((c) => (
                      <div key={c.id} className="course-card">
                        {getBadge(c)}
                        <div className="video-wrapper">
                          <iframe
                            src={c.video}
                            title={c.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <h4>{c.title}</h4>
                        <p>{c.description}</p>
                        <p>
                          ⭐ {c.rating} / 5 | 👥 {c.enrolled} enrolled
                        </p>
                        <div className="mini-progress-bar">
                          <div
                            className="mini-progress-fill"
                            style={{ width: `${getCourseProgress(c.id)}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="courses-grid">
                {filteredCourses.map((c) => (
                  <div key={c.id} className="course-card">
                    {getBadge(c)}
                    <div
                      className="video-wrapper"
                      onClick={() => handleVideoClick(c.id)}
                      tabIndex="0"
                      aria-label={`Watch ${c.title}`}
                    >
                      <iframe
                        src={c.video}
                        title={c.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <h4>{c.title}</h4>
                    <p>{c.description}</p>
                    <p>
                      ⭐ {c.rating} / 5 | 👥 {c.enrolled} enrolled
                    </p>
                    <div className="mini-progress-bar">
                      <div
                        className="mini-progress-fill"
                        style={{ width: `${getCourseProgress(c.id)}%` }}
                      ></div>
                    </div>
                    <button
                      onClick={() => handleAddToCart(c.id)}
                      disabled={cart.includes(c.id) || purchased.includes(c.id)}
                      aria-label={
                        purchased.includes(c.id)
                          ? "Purchased"
                          : cart.includes(c.id)
                          ? "In Cart"
                          : "Add to Cart"
                      }
                    >
                      {purchased.includes(c.id)
                        ? "Purchased"
                        : cart.includes(c.id)
                        ? "In Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Extra videos for selected topic */}
            {selectedResource && extraTopicVideos[selectedResource] && (
              <div className="extra-content">
                <h3>Additional Learning: {selectedResource}</h3>
                <div className="extra-videos-grid">
                  {extraTopicVideos[selectedResource].map((video, idx) => (
                    <div key={idx} className="extra-video-card">
                      <iframe
                        src={video.url}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <p>{video.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>

        {cart.length > 0 && !showMyLearning && (
          <div style={{ padding: "20px", textAlign: "center" }}>
            <button
              onClick={handleCheckout}
              style={{
                padding: "12px 24px",
                background: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        )}

        <section className="resources-section">
          <h3>Explore More Topics</h3>
          <div className="resources-grid">
            {[
              ["HTML", "CSS", "JavaScript", "React JS", "Angular"],
              ["Python", "Machine Learning", "Deep Learning"],
              ["AWS", "Azure", "GCP"],
            ].map((group, i) => (
              <div key={i}>
                <ul>
                  {group.map((item) => (
                    <li
                      key={item}
                      onClick={() => setSelectedResource(item)}
                      style={{ cursor: "pointer" }}
                      tabIndex="0"
                      aria-label={`Explore ${item}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <p>📞 Contact us: support@example.com | 📱 +1-234-567-890</p>
        </footer>
      </div>
    </div>
  );
}

export default CoursesPage;
