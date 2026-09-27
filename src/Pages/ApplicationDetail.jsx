import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ApplicationDetails({ applications, deleteApplication }) {

    const navigate = useNavigate()
    const { id } = useParams()

    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const application = applications.find(
        (item) => String(item.id) === String(id)
    )

    if (!application) {
        return (
            <div className="application-details">

                <h1>Application Not Found</h1>

                <button
                    type="button"
                    className="action-btn"
                    onClick={() => navigate('/applications')}
                >
                    Back to Applications
                </button>

            </div>
        )
    }

    function confirmDelete() {

        console.log('Deleting application:', application)

        deleteApplication(application.id)

        setShowDeleteModal(false)

        navigate('/applications')
    }

    return (
        <div className="application-details">

            {/* Header */}

            <div className="page-header">

                <div>

                    <h1>
                        Application Details
                    </h1>

                    <p>
                        View your job application information
                    </p>

                </div>

                <button
                    type="button"
                    className="action-btn"
                    onClick={() => navigate('/applications')}
                >
                    Back to Applications
                </button>

            </div>


            {/* Application Card */}

            <div className="application-details-card">

                <div className="details-header">

                    <div>

                        <h2>
                            {application.company}
                        </h2>

                        <p>
                            {application.position}
                        </p>

                    </div>


                    <span
                        className={`status ${application.status
                            .toLowerCase()
                            .replaceAll(' ', '-')}`}
                    >
                        {application.status}
                    </span>

                </div>


                {/* Details */}

                <div className="details-grid">

                    <div className="detail-item">
                        <span>Company</span>
                        <strong>{application.company}</strong>
                    </div>


                    <div className="detail-item">
                        <span>Position</span>
                        <strong>{application.position}</strong>
                    </div>


                    <div className="detail-item">
                        <span>Status</span>
                        <strong>{application.status}</strong>
                    </div>


                    <div className="detail-item">
                        <span>Applied Date</span>
                        <strong>{application.appliedDate}</strong>
                    </div>


                    <div className="detail-item">
                        <span>Expected Salary</span>

                        <strong>
                            {application.salary || 'Not specified'}
                        </strong>

                    </div>


                    <div className="detail-item">

                        <span>Job Link</span>

                        {application.jobLink ? (

                            <a
                                href={application.jobLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Job Posting
                            </a>

                        ) : (

                            <strong>
                                Not provided
                            </strong>

                        )}

                    </div>

                </div>


                {/* Notes */}

                <div className="details-notes">

                    <h3>
                        Notes
                    </h3>

                    <p>
                        {application.notes || 'No notes added.'}
                    </p>

                </div>


                {/* Actions */}

                <div className="details-actions">

                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={() =>
                            navigate(
                                `/edit-application/${application.id}`
                            )
                        }
                    >
                        Edit Application
                    </button>


                    <button
                        type="button"
                        className="modal-delete-btn"
                        onClick={() => setShowDeleteModal(true)}
                    >
                        Delete Application
                    </button>

                </div>

            </div>


            {/* Delete Confirmation Modal */}

            {showDeleteModal && (

                <div className="delete-modal-overlay">

                    <div className="delete-modal">

                        <div className="delete-modal-icon">
                            !
                        </div>


                        <h2>
                            Delete Application?
                        </h2>


                        <p>

                            Are you sure you want to delete the application
                            for{' '}

                            <strong>
                                {application.company}
                            </strong>

                            ?

                        </p>


                        <div className="delete-modal-actions">

                            <button
                                type="button"
                                className="modal-cancel-btn"
                                onClick={() =>
                                    setShowDeleteModal(false)
                                }
                            >
                                Cancel
                            </button>


                            <button
                                type="button"
                                className="modal-delete-btn"
                                onClick={confirmDelete}
                            >
                                Delete Application
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </div>
    )
}

export default ApplicationDetails