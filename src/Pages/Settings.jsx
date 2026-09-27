import { useState } from 'react'
import { useEffect, usestate } from 'react'

function Settings() {

    const [showProfile, setShowProfile] = useState(false)

    const [profile, setProfile] = useState({
        name: 'Gech',
        email: 'gech@example.com'
    })

    const [notifications, setNotifications] = useState(true)
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('jobtrack_dark_mode')

        return savedMode
            ? JSON.parse(savedMode)
            : false
    })
    const [showClearModal, setShowClearModal] = useState(false)

    function handleChange(event) {
        const { name, value } = event.target

        setProfile({
            ...profile,
            [name]: value
        })
    }

    function handleSave(event) {
        event.preventDefault()

        localStorage.setItem(
            'jobtrack_profile',
            JSON.stringify(profile)
        )

        setShowProfile(false)
    }

    function toggleDarkMode() {
        const newValue = !darkMode

        setDarkMode(newValue)

        localStorage.setItem(
            'jobtrack_dark_mode',
            JSON.stringify(newValue)
        )

        document.body.classList.toggle('dark-mode', newValue)
    }

    function toggleNotifications() {
        const newValue = !notifications

        setNotifications(newValue)

        localStorage.setItem(
            'jobtrack_notifications',
            JSON.stringify(newValue)
        )
    }
    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode)
    }, [darkMode])

    function clearAllData() {
        localStorage.removeItem('jobtrack_applications')
        localStorage.removeItem('jobtrack_interviews')
        localStorage.removeItem('jobtrack_reminders')
        localStorage.removeItem('jobtrack_profile')
        localStorage.removeItem('jobtrack_notifications')
        localStorage.removeItem('jobtrack_dark_mode')

        setShowClearModal(false)

        window.location.reload()
    }

    return (
        <div className="settings">

            <div className="page-header">
                <div>
                    <h1>Settings</h1>
                    <p>Manage your JobTrack preferences</p>
                </div>
            </div>

            <div className="settings-card">

                <div className="settings-title">
                    <h2>General Settings</h2>
                    <p>Configure your JobTrack application</p>
                </div>

                {/* Profile */}

                <div className="settings-item">

                    <div>
                        <h3>Profile</h3>
                        <p>Manage your personal information</p>
                    </div>

                    <button
                        type="button"
                        className="settings-btn"
                        onClick={() => setShowProfile(!showProfile)}
                    >
                        {showProfile ? 'Close' : 'Manage'}
                    </button>

                </div>

                {showProfile && (
                    <div className="profile-settings">

                        <form onSubmit={handleSave}>

                            <div className="form-group">

                                <label>Name</label>

                                <input
                                    type="text"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="form-group">

                                <label>Email</label>

                                <input
                                    type="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="form-actions">

                                <button
                                    type="button"
                                    className="cancel-btn"
                                    onClick={() => setShowProfile(false)}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="save-btn"
                                >
                                    Save Profile
                                </button>

                            </div>

                        </form>

                    </div>
                )}

                {/* Notifications */}

                <div className="settings-item">

                    <div>
                        <h3>Notifications</h3>
                        <p>
                            Receive notifications for interviews and reminders
                        </p>
                    </div>

                    <button
                        type="button"
                        className={`notification-toggle ${notifications ? 'enabled' : 'disabled'
                            }`}
                        onClick={toggleNotifications}
                    >
                        {notifications ? 'Enabled' : 'Disabled'}
                    </button>

                </div>

                {/* Storage */}

                <div className="settings-item">

                    <div>
                        <h3>Storage</h3>

                        <p>
                            Your JobTrack data is stored in your browser.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="clear-data-btn"
                        onClick={() => setShowClearModal(true)}
                    >
                        Clear All Data
                    </button>

                </div>
                {/* Appearance */}

                <div className="settings-item">

                    <div>
                        <h3>Appearance</h3>
                        <p>
                            Change the appearance of your JobTrack dashboard
                        </p>
                    </div>

                    <button
                        type="button"
                        className={`notification-toggle ${darkMode ? 'enabled' : 'disabled'
                            }`}
                        onClick={toggleDarkMode}
                    >
                        {darkMode ? 'Dark Mode' : 'Light Mode'}
                    </button>

                </div>

                {showClearModal && (
                    <div className="delete-modal-overlay">

                        <div className="delete-modal">

                            <div className="delete-modal-icon">
                                !
                            </div>

                            <h2>Clear All Data?</h2>

                            <p>
                                This will permanently delete your applications,
                                interviews, reminders, profile information, and
                                other JobTrack settings.
                            </p>

                            <div className="delete-modal-actions">

                                <button
                                    type="button"
                                    className="modal-cancel-btn"
                                    onClick={() => setShowClearModal(false)}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="button"
                                    className="modal-delete-btn"
                                    onClick={clearAllData}
                                >
                                    Clear All Data
                                </button>

                            </div>

                        </div>

                    </div>
                )}

            </div>

        </div>
    )
}

export default Settings