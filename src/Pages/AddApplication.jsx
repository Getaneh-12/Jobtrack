import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddApplication({ addApplication }) {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    company: '',
    position: '',
    status: 'Applied',
    appliedDate: '',
    jobLink: '',
    salary: '',
    notes: ''
  })

  const [success, setSuccess] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    addApplication(formData)

    setSuccess(true)

    setTimeout(() => {
      navigate('/applications')
    }, 1000)
  }

  return (
    <div className="add-application">

      <div className="page-header">
        <div>
          <h1>Add Application</h1>
          <p>Add a new job application to JobTrack</p>
        </div>
      </div>

      {success && (
        <div className="success-message">
          Application added successfully!
        </div>
      )}

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
                placeholder="e.g. Ethio telecom"
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
                placeholder="e.g. Frontend Developer"
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
              placeholder="Add notes about this application..."
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
              Save Application
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default AddApplication