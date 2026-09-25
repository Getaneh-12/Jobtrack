function Dashboard() {
  return (
    <div className="dashboard">

      {/* Dashboard Header */}
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Track and manage your job applications</p>
      </div>

      {/* Statistics */}
      <div className="stats-container">

        <div className="stat-card">
          <h3>Total Applications</h3>
          <p>24</p>
        </div>

        <div className="stat-card">
          <h3>Interviews</h3>
          <p>5</p>
        </div>

        <div className="stat-card">
          <h3>Offers</h3>
          <p>2</p>
        </div>

        <div className="stat-card">
          <h3>Rejected</h3>
          <p>5</p>
        </div>

      </div>

    </div>
  )
}

export default Dashboard