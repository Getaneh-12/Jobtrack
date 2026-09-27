import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Reminders({ reminders, addReminder, deleteReminder }) {

    const navigate = useNavigate()

    const [showForm, setShowForm] = useState(false)
    const [reminderToDelete, setReminderToDelete] = useState(null)

    const [formData, setFormData] = useState({
        title: '',
        date: '',
        time: '',
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

        addReminder(formData)

        setFormData({
            title: '',
            date: '',
            time: '',
            notes: ''
        })

        setShowForm(false)
    }

    function confirmDelete() {

        if (!reminderToDelete) {
            return
        }

        deleteReminder(reminderToDelete.id)

        setReminderToDelete(null)
    }

    return (
        <div className="reminders">

            {/* Page Header */}

            <div className="page-header">

                <div>

                    <h1>
                        Reminders
                    </h1>

                    <p>
                        Keep track of important job application deadlines
                    </p>

                </div>

                <button
                    type="button"
                    className="add-application-btn"
                    onClick={() => setShowForm(true)}
                >
                    + Add Reminder
                </button>

            </div>


            {/* Add Reminder Form */}

            {showForm && (

                <div className="application-form-card">

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">

                            <label>
                                Reminder Title
                            </label>

                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="e.g. Follow up with company"
                                required
                            />

                        </div>


                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Date
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
                                    Time
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
                                Notes
                            </label>

                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder="Add reminder details..."
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
                                Save Reminder
                            </button>

                        </div>

                    </form>

                </div>

            )}


            {/* Empty State */}

            {!showForm && reminders.length === 0 && (

                <div className="reminders-card">

                    <div className="empty-interviews">

                        <h2>
                            No Reminders Yet
                        </h2>

                        <p>
                            Add reminders for application deadlines,
                            follow-ups, and other important tasks.
                        </p>

                    </div>

                </div>

            )}


            {/* Reminder List */}

            {!showForm && reminders.length > 0 && (

                <div className="reminders-list">

                    {reminders.map((reminder) => (

                        <div
                            className="reminder-card"
                            key={reminder.id}
                        >

                            <div className="reminder-main">

                                <h3>
                                    {reminder.title}
                                </h3>

                                <p>
                                    {reminder.notes || 'No notes added.'}
                                </p>

                            </div>


                            <div className="reminder-details">

                                <p>
                                    <strong>
                                        Date:
                                    </strong>{' '}
                                    {reminder.date}
                                </p>

                                <p>
                                    <strong>
                                        Time:
                                    </strong>{' '}
                                    {reminder.time}
                                </p>

                            </div>


                            <div className="reminder-actions">

                                <button
                                    type="button"
                                    className="action-btn edit-btn"
                                    onClick={() =>
                                        navigate(
                                            `/edit-reminder/${reminder.id}`
                                        )
                                    }
                                >
                                    Edit
                                </button>


                                <button
                                    type="button"
                                    className="action-btn delete-btn"
                                    onClick={() =>
                                        setReminderToDelete(reminder)
                                    }
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            )}


            {/* Delete Confirmation Modal */}

            {reminderToDelete && (

                <div className="delete-modal-overlay">

                    <div className="delete-modal">

                        <div className="delete-modal-icon">
                            !
                        </div>


                        <h2>
                            Delete Reminder?
                        </h2>


                        <p>

                            Are you sure you want to delete the reminder
                            <strong>
                                {' '}{reminderToDelete.title}
                            </strong>
                            ?

                        </p>


                        <div className="delete-modal-actions">

                            <button
                                type="button"
                                className="modal-cancel-btn"
                                onClick={() =>
                                    setReminderToDelete(null)
                                }
                            >
                                Cancel
                            </button>


                            <button
                                type="button"
                                className="modal-delete-btn"
                                onClick={confirmDelete}
                            >
                                Delete Reminder
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </div>
    )
}

export default Reminders