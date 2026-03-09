import React from "react";
import "./Sidebar.css";

function Sidebar({ cart }) {
  const totalHours = cart.reduce((sum, v) => sum + v.hours, 0);

  return (
    <div className="sidebar">
      <h2>Your Progress</h2>
      <p>Courses Added: {cart.length}</p>
      <p>Total Hours: {totalHours}</p>

      <h3>Badges</h3>
      <div className="badges">
        <span role="img" aria-label="Gold Star" className="badge-icon">⭐</span>
        <span role="img" aria-label="Red Star" className="badge-icon" style={{ color: "#ff5722" }}>⭐</span>
        <span role="img" aria-label="Rocket" className="badge-icon">🚀</span>
      </div>

      <h3>Leaderboard</h3>
      <div className="leaderboard">
        <div className="leaderboard-item">
          <span className="rank-badge">1</span>
          <div className="leaderboard-bar">
            <div className="leaderboard-fill" style={{ width: "60%" }}></div>
          </div>
          <span>3</span>
        </div>
        <div className="leaderboard-item">
          <span className="rank-badge" style={{ background: "#b388ff" }}>2</span>
          <div className="leaderboard-bar">
            <div className="leaderboard-fill" style={{ width: "80%", background: "#b388ff" }}></div>
          </div>
          <span>4</span>
        </div>
        <div className="leaderboard-item">
          <span className="rank-badge" style={{ background: "#80deea" }}>3</span>
          <div className="leaderboard-bar">
            <div className="leaderboard-fill" style={{ width: "60%", background: "#80deea" }}></div>
          </div>
          <span>3</span>
        </div>
      </div>

      <h3>Discussion Forum</h3>
      <div className="discussion-forum">
        <p>How to stay motivated</p>
        <span className="forum-replies">💬 4 replies</span>
      </div>

      <h3>Mentorship Program</h3>
      <div className="mentorship">
        <span role="img" aria-label="Mentorship" className="mentorship-icon">👨‍🏫 ⇌ 👩‍🎓</span>
        <p>Join our mentorship program!</p>
      </div>
    </div>
  );
}

export default Sidebar;
