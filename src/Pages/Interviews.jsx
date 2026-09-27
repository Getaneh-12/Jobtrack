import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Interviews({ interviews, addInterview, deleteInterview }) {

    const navigate = useNavigate()

    const [showForm, setShowForm] = useState(false)
    const [interviewToDelete, setInterviewToDelete] = useState(null)

    const [formData, setFormData] = useState({
        company: '',
        position: '',
        date: '',
        time: '',
        type: 'Technical Interview',
        notes: ''
    })

    function handleChange(event) {
        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        addInterview(formData)

        setFormData({
            company: '',
            position: '',
            date: '',
            time: '',
            type: 'Technical Interview',
            notes: ''
        })

        setShowForm(false)
    }

    function confirmDelete() {

        if (!interviewToDelete) {
            return
        }

        deleteInterview(interviewToDelete.id)

        setInterviewToDelete(null)
    }

    return (
        <div className="interviews">

            {/* Page Header */}

            <div className="page-header">

                <div>

                    <h1>
                        Interviews
                    </h1>

                    <p>
                        Manage your upcoming and completed interviews
                    </p>

                </div>

                <button
                    type="button"
                    className="add-application-btn"
                    onClick={() => setShowForm(true)}
                >
                    + Add Interview
                </button>

            </div>


            {/* Add Interview Form */}

            {showForm && (

                <div className="application-form-card">

                    <form onSubmit={handleSubmit}>

                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Company Name
                                </label>

                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="e.g. Ethio telecom"
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Position
                                </label>

                                <input
                                    type="text"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    placeholder="e.g. Frontend Developer"
                                    required
                                />

                            </div>

                        </div>


                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Interview Date
                                </label>

                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Interview Time
                                </label>

                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>


                        <div className="form-group">

                            <label>
                                Interview Type
                            </label>

                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                            >

                                <option value="Phone Interview">
                                    Phone Interview
                                </option>

                                <option value="Video Interview">
                                    Video Interview
                                </option>

                                <option value="Technical Interview">
                                    Technical Interview
                                </option>

                                <option value="HR Interview">
                                    HR Interview
                                </option>

                                <option value="Final Interview">
                                    Final Interview
                                </option>

                                <option value="On-site Interview">
                                    On-site Interview
                                </option>

                            </select>

                        </div>


                        <div className="form-group">

                            <label>
                                Notes
                            </label>

                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder="Add interview notes..."
                                rows="5"
                            />

                        </div>


                        <div className="form-actions">

                            <button
                                type="button"
                                className="cancel-btn"
                                onClick={() => setShowForm(false)}
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="save-btn"
                            >
                                Save Interview
                            </button>

                        </div>

                    </form>

                </div>

            )}


            {/* Interview List */}

            {interviews.length === 0 ? (

                <div className="interviews-card">

                    <div className="empty-interviews">

                        <h2>
                            No Interviews Yet
                        </h2>

                        <p>
                            You haven't added any interviews yet.
                        </p>

                    </div>

                </div>

            ) : (

                <div className="interviews-list">

                    {interviews.map((interview) => (

                        <div
                            className="interview-card"
                            key={interview.id}
                        >

                            <div>

                                <h3>
                                    {interview.company}
                                </h3>

                                <p>
                                    {interview.position}
                                </p>

                            </div>


                            <div className="interview-details">

                                <p>
                                    <strong>
                                        Date:
                                    </strong>{' '}
                                    {interview.date}
                                </p>

                                <p>
                                    <strong>
                                        Time:
                                    </strong>{' '}
                                    {interview.time}
                                </p>

                                <p>
                                    <strong>
                                        Type:
                                    </strong>{' '}
                                    {interview.type}
                                </p>

                            </div>


                            <button
                                type="button"
                                className="action-btn edit-btn"
                                onClick={() =>
                                    navigate(
                                        `/edit-interview/${interview.id}`
                                    )
                                }
                            >
                                Edit
                            </button>


                            <button
                                type="button"
                                className="action-btn delete-btn"
                                onClick={() =>
                                    setInterviewToDelete(interview)
                                }
                            >
                                Delete
                            </button>

                        </div>

                    ))}

                </div>

            )}


            {/* Delete Confirmation Modal */}

            {interviewToDelete && (

                <div className="delete-modal-overlay">

                    <div className="delete-modal">

                        <div className="delete-modal-icon">
                            !
                        </div>


                        <h2>
                            Delete Interview?
                        </h2>


                        <p>

                            Are you sure you want to delete the interview
                            for{' '}

                            <strong>
                                {interviewToDelete.company}
                            </strong>
                            ?

                        </p>


                        <div className="delete-modal-actions">

                            <button
                                type="button"
                                className="modal-cancel-btn"
                                onClick={() =>
                                    setInterviewToDelete(null)
                                }
                            >
                                Cancel
                            </button>


                            <button
                                type="button"
                                className="modal-delete-btn"
                                onClick={confirmDelete}
                            >
                                Delete Interview
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </div>
    )
}

export default Interviews