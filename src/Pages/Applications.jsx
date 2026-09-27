import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Applications({ applications, deleteApplication }) {

    const navigate = useNavigate()

    const [search, setSearch] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')
    const [applicationToDelete, setApplicationToDelete] = useState(null)

    const filteredApplications = applications.filter((application) => {

        const company = application.company || ''
        const position = application.position || ''

        const matchesSearch =
            company.toLowerCase().includes(search.toLowerCase()) ||
            position.toLowerCase().includes(search.toLowerCase())

        const matchesStatus =
            statusFilter === 'all' ||
            application.status === statusFilter

        return matchesSearch && matchesStatus
    })

    function openDeleteModal(application) {
        console.log('Selected application:', application)
        setApplicationToDelete(application)
    }

    function confirmDelete() {

        if (!applicationToDelete) {
            console.log('No application selected')
            return
        }

        console.log(
            'Deleting:',
            applicationToDelete.id,
            applicationToDelete.company
        )

        deleteApplication(applicationToDelete.id)

        setApplicationToDelete(null)
    }

    return (
        <div className="applications">

            {/* Page Header */}

            <div className="page-header">

                <div>
                    <h1>Applications</h1>

                    <p>
                        Manage your job applications
                    </p>
                </div>

                <button
                    type="button"
                    className="add-application-btn"
                    onClick={() => navigate('/add-application')}
                >
                    + Add Application
                </button>

            </div>


            {/* Applications Card */}

            <div className="applications-card">

                {/* Search and Filter */}

                <div className="applications-top">

                    <input
                        type="text"
                        placeholder="Search company or position..."
                        className="search-input"
                        value={search}
                        onChange={(event) =>
                            setSearch(event.target.value)
                        }
                    />

                    <select
                        className="status-filter"
                        value={statusFilter}
                        onChange={(event) =>
                            setStatusFilter(event.target.value)
                        }
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


                {/* Applications Table */}

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

                                        {/* View */}

                                        <button
                                            type="button"
                                            className="action-btn"
                                            onClick={() =>
                                                navigate(
                                                    `/application/${application.id}`
                                                )
                                            }
                                        >
                                            View
                                        </button>


                                        {/* Edit */}

                                        <button
                                            type="button"
                                            className="action-btn edit-btn"
                                            onClick={() =>
                                                navigate(
                                                    `/edit-application/${application.id}`
                                                )
                                            }
                                        >
                                            Edit
                                        </button>


                                        {/* Delete */}

                                        <button
                                            type="button"
                                            className="action-btn delete-btn"
                                            onClick={() =>
                                                openDeleteModal(application)
                                            }
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


            {/* Delete Modal */}

            {applicationToDelete && (

                <div className="delete-modal-overlay">

                    <div className="delete-modal">

                        <div className="delete-modal-icon">
                            !
                        </div>

                        <h2>
                            Delete Application?
                        </h2>

                        <p>
                            Are you sure you want to delete the application for{' '}
                            <strong>
                                {applicationToDelete.company}
                            </strong>
                            ?
                        </p>


                        <div className="delete-modal-actions">

                            <button
                                type="button"
                                className="modal-cancel-btn"
                                onClick={() =>
                                    setApplicationToDelete(null)
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

export default Applications