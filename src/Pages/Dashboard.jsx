import {
  Briefcase,
  Calendar,
  CheckCircle,
  XCircle
} from 'lucide-react'

function Dashboard({
  applications = [],
  interviews = [],
  reminders = [] }) {
  const totalApplications = applications.length

  const interviewCount = applications.filter(
    (application) =>
      application.status === 'Interview' ||
      application.status === 'Technical Interview'
  ).length

  const offers = applications.filter(
    (application) => application.status === 'Offer'
  ).length

  const rejected = applications.filter(
    (application) => application.status === 'Rejected'
  ).length

  const applied = applications.filter(
    (application) => application.status === 'Applied'
  ).length

  const screening = applications.filter(
    (application) => application.status === 'Screening'
  ).length

  const technicalInterviews = applications.filter(
    (application) => application.status === 'Technical Interview'
  ).length

  return (
    <div className="dashboard">

      {/* Dashboard Header */}

      <div className="dashboard-header">
        <h1>Dashboard</h1>

        <p>
          Track and manage your job applications
        </p>
      </div>


      {/* Statistics */}

      <div className="stats-container">

        <div className="stat-card">

          <div className="stat-icon">
            <Briefcase size={24} />
          </div>

          <div>
            <h3>Total Applications</h3>
            <p>{totalApplications}</p>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            <Calendar size={24} />
          </div>

          <div>
            <h3>Interviews</h3>
            <p>{interviewCount}</p>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            <CheckCircle size={24} />
          </div>

          <div>
            <h3>Offers</h3>
            <p>{offers}</p>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            <XCircle size={24} />
          </div>

          <div>
            <h3>Rejected</h3>
            <p>{rejected}</p>
          </div>

        </div>

      </div>


      {/* Application Status */}

      <div className="status-breakdown">

        <div className="section-header">

          <h2>Application Status</h2>

          <p>
            Overview of your current applications
          </p>

        </div>


        <div className="status-grid">

          <div className="status-breakdown-card">

            <span className="status applied">
              Applied
            </span>

            <strong>{applied}</strong>

          </div>


          <div className="status-breakdown-card">

            <span className="status screening">
              Screening
            </span>

            <strong>{screening}</strong>

          </div>


          <div className="status-breakdown-card">

            <span className="status interview">
              Interview
            </span>

            <strong>{interviewCount}</strong>

          </div>


          <div className="status-breakdown-card">

            <span className="status technical-interview">
              Technical Interview
            </span>

            <strong>{technicalInterviews}</strong>

          </div>


          <div className="status-breakdown-card">

            <span className="status offer">
              Offer
            </span>

            <strong>{offers}</strong>

          </div>


          <div className="status-breakdown-card">

            <span className="status rejected">
              Rejected
            </span>

            <strong>{rejected}</strong>

          </div>

        </div>

      </div>


      {/* Upcoming Interviews */}

      <div className="dashboard-section">

        <div className="section-header">

          <h2>Upcoming Interviews</h2>

          <p>
            Your scheduled interviews
          </p>

        </div>


        {interviews.length === 0 ? (

          <div className="dashboard-empty">

            <p>
              No interviews scheduled yet.
            </p>

          </div>

        ) : (

          <div className="dashboard-list">

            {interviews
              .slice()
              .sort((a, b) => {

                const dateA = new Date(
                  `${a.date}T${a.time}`
                )

                const dateB = new Date(
                  `${b.date}T${b.time}`
                )

                return dateA - dateB
              })
              .slice(0, 5)
              .map((interview) => (

                <div
                  className="dashboard-list-item"
                  key={interview.id}
                >

                  <div>

                    <strong>
                      {interview.company}
                    </strong>

                    <p>
                      {interview.position}
                    </p>

                  </div>


                  <div className="dashboard-list-info">

                    <strong>
                      {interview.date}
                    </strong>

                    <p>
                      {interview.time}
                    </p>

                  </div>


                  <span className="interview-type">
                    {interview.type}
                  </span>

                </div>

              ))}

          </div>

        )}

      </div>

      {/* Upcoming Reminders */}

      <div className="dashboard-section">

        <div className="section-header">

          <h2>Upcoming Reminders</h2>

          <p>
            Important tasks and deadlines
          </p>

        </div>

        {reminders.length === 0 ? (

          <div className="dashboard-empty">

            <p>
              No reminders scheduled yet.
            </p>

          </div>

        ) : (

          <div className="dashboard-list">

            {reminders
              .slice()
              .sort((a, b) => {

                const dateA = new Date(
                  `${a.date}T${a.time}`
                )

                const dateB = new Date(
                  `${b.date}T${b.time}`
                )

                return dateA - dateB
              })
              .slice(0, 5)
              .map((reminder) => (

                <div
                  className="dashboard-list-item"
                  key={reminder.id}
                >

                  <div>

                    <strong>
                      {reminder.title}
                    </strong>

                    <p>
                      {reminder.notes || 'No notes'}
                    </p>

                  </div>

                  <div className="dashboard-list-info">

                    <strong>
                      {reminder.date}
                    </strong>

                    <p>
                      {reminder.time}
                    </p>

                  </div>

                </div>

              ))}

          </div>

        )}

      </div>


      {/* Recent Applications */}

      <div className="recent-applications">

        <div className="recent-header">

          <h2>
            Recent Applications
          </h2>

        </div>


        {applications.length === 0 ? (

          <p>
            No applications yet.
          </p>

        ) : (

          <div className="recent-list">

            {applications
              .slice(-5)
              .reverse()
              .map((application) => (

                <div
                  className="recent-application"
                  key={application.id}
                >

                  <div>

                    <strong>
                      {application.company}
                    </strong>

                    <p>
                      {application.position}
                    </p>

                  </div>


                  <div>

                    <span
                      className={`status ${application.status
                        .toLowerCase()
                        .replaceAll(' ', '-')}`}
                    >
                      {application.status}
                    </span>

                  </div>

                </div>

              ))}

          </div>

        )}

      </div>

    </div>
  )
}

export default Dashboard