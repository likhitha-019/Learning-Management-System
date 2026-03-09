<aside className="dashboard-sidebar">
  <div className="user-profile">
    <img
      src="https://randomuser.me/api/portraits/women/44.jpg"
      alt="Jane profile"
      className="profile-avatar"
    />
    <h2>Welcome back, Jane!</h2>
  </div>

  <div className="learning-path">
    <h3>My Learning Path</h3>
    <div className="progress-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: "40%" }}></div>
      </div>
      <span>40% Complete</span>
    </div>
    <button className="btn-primary">Continue Learning</button>
  </div>

  <div className="badges-section">
    <h3>Badges Earned</h3>
    <div className="badges">
      <span role="img" aria-label="star">⭐</span>
      <span role="img" aria-label="sparkles">✨</span>
      <span role="img" aria-label="rocket">🚀</span>
    </div>
  </div>

  <div className="leaderboard-section">
    <h3>Leaderboard</h3>
    <ul className="leaderboard-list">
      <li><strong>1.</strong> User A — 3 pts</li>
      <li><strong>2.</strong> User B — 4 pts</li>
      <li><strong>3.</strong> User C — 3 pts</li>
    </ul>
  </div>

  <div className="discussion-section">
    <h3>Discussion Forum</h3>
    <p>How to stay motivated</p>
    <span className="discussion-replies">4 replies</span>
  </div>

  <div className="mentorship-card">
    <h3>Mentorship Program</h3>
    <p>Connect with mentors to stay on track.</p>
    <button className="btn-secondary">Join Now</button>
  </div>
</aside>
