import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditApplication({ applications, updateApplication }) {
    const navigate = useNavigate()
    const { id } = useParams()

    const application = applications.find(
        (item) => item.id === Number(id)
    )

    const [formData, setFormData] = useState(
        application || {
            company: '',
            position: '',
            status: 'Applied',
            appliedDate: '',
            jobLink: '',
            salary: '',
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

        updateApplication(formData)

        navigate('/applications')
    }

    if (!application) {
        return (
            <div>
                <h1>Application Not Found</h1>
                <button onClick={() => navigate('/applications')}>
                    Back to Applications
                </button>
            </div>
        )
    }

    return (
        <div className="add-application">
            <div className="page-header">
                <div>
                    <h1>Edit Application</h1>
                    <p>Update your job application information</p>
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
                            <label>Status</label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="Applied">Applied</option>
                                <option value="Screening">Screening</option>
                                <option value="Interview">Interview</option>
                                <option value="Technical Interview">
                                    Technical Interview
                                </option>
                                <option value="Offer">Offer</option>
                                <option value="Rejected">Rejected</option>
                                <option value="Withdrawn">Withdrawn</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Applied Date</label>

                            <input
                                type="date"
                                name="appliedDate"
                                value={formData.appliedDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group">
                            <label>Job Link</label>

                            <input
                                type="url"
                                name="jobLink"
                                value={formData.jobLink}
                                onChange={handleChange}
                                placeholder="https://example.com/job"
                            />
                        </div>

                        <div className="form-group">
                            <label>Expected Salary</label>

                            <input
                                type="text"
                                name="salary"
                                value={formData.salary}
                                onChange={handleChange}
                                placeholder="e.g. 20,000 ETB"
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
                            onClick={() => navigate('/applications')}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            Update Application
                        </button>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default EditApplication