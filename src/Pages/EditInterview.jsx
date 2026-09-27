import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditInterview({ interviews, updateInterview }) {
    const navigate = useNavigate()
    const { id } = useParams()

    const interview = interviews.find(
        (item) => item.id === Number(id)
    )

    const [formData, setFormData] = useState(
        interview || {
            company: '',
            position: '',
            date: '',
            time: '',
            type: 'Technical Interview',
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

        updateInterview(formData)

        navigate('/interviews')
    }

    if (!interview) {
        return (
            <div>
                <h1>Interview Not Found</h1>

                <button
                    className="action-btn"
                    onClick={() => navigate('/interviews')}
                >
                    Back to Interviews
                </button>
            </div>
        )
    }

    return (
        <div className="add-application">

            <div className="page-header">
                <div>
                    <h1>Edit Interview</h1>
                    <p>Update your interview information</p>
                </div>
            </div>

            <div className="application-form-card">

                <form onSubmit={handleSubmit}>

                    <div className="form-row">

                        <div className="form-group">
                            <label>Company Name</label>

                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Position</label>

                            <input
                                type="text"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group">
                            <label>Interview Date</label>

                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Interview Time</label>

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
                        <label>Interview Type</label>

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
                            onClick={() => navigate('/interviews')}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            Update Interview
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default EditInterview