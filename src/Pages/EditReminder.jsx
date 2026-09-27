import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditReminder({ reminders, updateReminder }) {
    const navigate = useNavigate()
    const { id } = useParams()

    const reminder = reminders.find(
        (item) => item.id === Number(id)
    )

    const [formData, setFormData] = useState(
        reminder || {
            title: '',
            date: '',
            time: '',
            notes: ''
        }
    )

    function handleChange(event) {
        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        updateReminder(formData)

        navigate('/reminders')
    }

    if (!reminder) {
        return (
            <div>
                <h1>Reminder Not Found</h1>

                <button
                    className="action-btn"
                    onClick={() => navigate('/reminders')}
                >
                    Back to Reminders
                </button>
            </div>
        )
    }

    return (
        <div className="add-application">

            <div className="page-header">
                <div>
                    <h1>Edit Reminder</h1>
                    <p>Update your reminder information</p>
                </div>
            </div>

            <div className="application-form-card">

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Reminder Title</label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-row">

                        <div className="form-group">
                            <label>Date</label>

                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Time</label>

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
                        <label>Notes</label>

                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows="5"
                        />
                    </div>

                    <div className="form-actions">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={() => navigate('/reminders')}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            Update Reminder
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default EditReminder