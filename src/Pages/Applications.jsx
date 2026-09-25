import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Applications({ applications, deleteApplication }) {

    const navigate = useNavigate()

    const [search, setSearch] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')

    const filteredApplications = applications.filter((application) => {

        const matchesSearch =
            application.company
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            application.position
                .toLowerCase()
                .includes(search.toLowerCase())

        const matchesStatus =
            statusFilter === 'all' ||
            application.status === statusFilter

        return matchesSearch && matchesStatus
    })

    return (
        <div className="applications">

            <div className="page-header">

                <div>
                    <h1>Applications</h1>
                    <p>Manage your job applications</p>
                </div>

                <button
                    className="add-application-btn"
                    onClick={() => navigate('/add-application')}
                >
                    + Add Application
                </button>

            </div>

            <div className="applications-card">

                <div className="applications-top">

                    <input
                        type="text"
                        placeholder="Search company or position..."
                        className="search-input"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />

                    <select
                        className="status-filter"
                        value={statusFilter}
                        onChange={(event) => setStatusFilter(event.target.value)}
                    >

                        <option value="all">
                            All Status
                        </option>

                        <option value="Applied">
                            Applied
                        </option>

                        <option value="Screening">
                            Screening
                        </option>

                        <option value="Interview">
                            Interview
                        </option>

                        <option value="Technical Interview">
                            Technical Interview
                        </option>

                        <option value="Offer">
                            Offer
                        </option>

                        <option value="Rejected">
                            Rejected
                        </option>

                        <option value="Withdrawn">
                            Withdrawn
                        </option>

                    </select>

                </div>

                <div className="table-container">

                    <table>

                        <thead>

                            <tr>
                                <th>Company</th>
                                <th>Position</th>
                                <th>Status</th>
                                <th>Applied Date</th>
                                <th>Action</th>
                            </tr>

                        </thead>

                        <tbody>

                            {filteredApplications.map((application) => (

                                <tr key={application.id}>

                                    <td>
                                        <strong>
                                            {application.company}
                                        </strong>
                                    </td>

                                    <td>
                                        {application.position}
                                    </td>

                                    <td>

                                        <span
                                            className={`status ${application.status
                                                .toLowerCase()
                                                .replaceAll(' ', '-')}`}
                                        >
                                            {application.status}
                                        </span>

                                    </td>

                                    <td>
                                        {application.appliedDate}
                                    </td>
                                    <td>
                                        <button
                                            className="action-btn edit-btn"
                                            onClick={() => navigate(`/edit-application/${application.id}`)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="action-btn delete-btn"
                                            onClick={() => deleteApplication(application.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>


                                </tr>

                            ))}

                        </tbody>

                    </table>

                    {filteredApplications.length === 0 && (
                        <p className="no-applications">
                            No applications found.
                        </p>
                    )}

                </div>

            </div>

        </div>
    )
}

export default Applications