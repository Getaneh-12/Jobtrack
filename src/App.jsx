import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Sidebar from './component/sidebar'

import Dashboard from './Pages/Dashboard'
import Applications from './Pages/Applications'
import AddApplication from './Pages/AddApplication'
import EditApplication from './Pages/EditApplication'
import Interviews from './Pages/Interviews'
import EditInterview from './Pages/EditInterview'
import Reminders from './Pages/Reminders'
import EditReminder from './Pages/EditReminder'
import ApplicationDetails from './Pages/ApplicationDetail'
import Settings from './Pages/Settings'


import './App.css'

function App() {
  const [reminders, setReminders] = useState(() => {
    const savedReminders = localStorage.getItem('jobtrack_reminders')

    if (savedReminders) {
      return JSON.parse(savedReminders)
    }

    return []
  })

  const [interviews, setInterviews] = useState(() => {
    const savedInterviews = localStorage.getItem('jobtrack_interviews')

    if (savedInterviews) {
      return JSON.parse(savedInterviews)
    }

    return []
  })

  function addInterview(newInterview) {
    const interview = {
      id: Date.now(),
      ...newInterview
    }

    setInterviews((currentInterviews) => {
      const updatedInterviews = [
        ...currentInterviews,
        interview
      ]

      localStorage.setItem(
        'jobtrack_interviews',
        JSON.stringify(updatedInterviews)
      )

      return updatedInterviews
    })
  }

  function addReminder(newReminder) {
    const reminder = {
      id: Date.now(),
      ...newReminder
    }

    setReminders((currentReminders) => {
      const updatedReminders = [
        ...currentReminders,
        reminder
      ]

      localStorage.setItem(
        'jobtrack_reminders',
        JSON.stringify(updatedReminders)
      )

      return updatedReminders
    })
  }

  function updateReminder(updatedReminder) {
    setReminders((currentReminders) => {
      const updatedReminders = currentReminders.map(
        (reminder) =>
          reminder.id === updatedReminder.id
            ? updatedReminder
            : reminder
      )

      localStorage.setItem(
        'jobtrack_reminders',
        JSON.stringify(updatedReminders)
      )

      return updatedReminders
    })
  }

  function deleteReminder(id) {
    setReminders((currentReminders) => {
      const updatedReminders = currentReminders.filter(
        (reminder) => reminder.id !== id
      )

      localStorage.setItem(
        'jobtrack_reminders',
        JSON.stringify(updatedReminders)
      )

      return updatedReminders
    })
  }

  function deleteInterview(id) {
    setInterviews((currentInterviews) => {
      const updatedInterviews = currentInterviews.filter(
        (interview) => interview.id !== id
      )

      localStorage.setItem(
        'jobtrack_interviews',
        JSON.stringify(updatedInterviews)
      )

      return updatedInterviews
    })
  }

  function updateInterview(updatedInterview) {
    setInterviews((currentInterviews) => {
      const updatedInterviews = currentInterviews.map(
        (interview) =>
          interview.id === updatedInterview.id
            ? updatedInterview
            : interview
      )

      localStorage.setItem(
        'jobtrack_interviews',
        JSON.stringify(updatedInterviews)
      )

      return updatedInterviews
    })
  }

  const [applications, setApplications] = useState(() => {
    const savedApplications = localStorage.getItem('jobtrack_applications')

    if (savedApplications) {
      return JSON.parse(savedApplications)
    }

    return [
      {
        id: 1,
        company: 'Ethio telecom',
        position: 'Frontend Developer',
        status: 'Interview',
        appliedDate: '2026-09-20',
        jobLink: '',
        salary: '',
        notes: ''
      },
      {
        id: 2,
        company: 'Commercial Bank of Ethiopia',
        position: 'Software Developer',
        status: 'Applied',
        appliedDate: '2026-09-18',
        jobLink: '',
        salary: '',
        notes: ''
      },
      {
        id: 3,
        company: 'Bank of Abyssinia',
        position: 'Backend Developer',
        status: 'Screening',
        appliedDate: '2026-09-15',
        jobLink: '',
        salary: '',
        notes: ''
      }
    ]
  })

  function addApplication(newApplication) {
    const application = {
      id: Date.now(),
      ...newApplication
    }

    setApplications((currentApplications) => {
      const updatedApplications = [
        ...currentApplications,
        application
      ]

      localStorage.setItem(
        'jobtrack_applications',
        JSON.stringify(updatedApplications)
      )

      return updatedApplications
    })
  }
  function deleteApplication(id) {
    console.log('Deleting application ID:', id)

    setApplications((currentApplications) => {
      console.log('Current applications:', currentApplications)

      const updatedApplications = currentApplications.filter(
        (application) => String(application.id) !== String(id)
      )

      console.log('Updated applications:', updatedApplications)

      localStorage.setItem(
        'jobtrack_applications',
        JSON.stringify(updatedApplications)
      )

      return updatedApplications
    })
  }

  function updateApplication(updatedApplication) {
    setApplications((currentApplications) => {
      const updatedApplications = currentApplications.map(
        (application) =>
          application.id === updatedApplication.id
            ? updatedApplication
            : application
      )

      localStorage.setItem(
        'jobtrack_applications',
        JSON.stringify(updatedApplications)
      )

      return updatedApplications
    })
  }

  return (
    <HashRouter>
      <div className="app">
        <Navbar />

        <div className="main-container">
          <Sidebar />

          <main className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    applications={applications}
                    interviews={interviews}
                    reminders={reminders}
                  />
                }
              />

              <Route
                path="/applications"
                element={
                  <Applications
                    applications={applications}
                    deleteApplication={deleteApplication}
                  />
                }
              />

              <Route
                path="/application/:id"
                element={
                  <ApplicationDetails
                    applications={applications}
                    deleteApplication={deleteApplication}
                  />
                }
              />

              <Route
                path="/add-application"
                element={
                  <AddApplication
                    addApplication={addApplication}
                  />
                }
              />

              <Route
                path="/edit-application/:id"
                element={
                  <EditApplication
                    applications={applications}
                    updateApplication={updateApplication}
                  />
                }
              />

              <Route
                path="/interviews"
                element={
                  <Interviews
                    interviews={interviews}
                    addInterview={addInterview}
                    deleteInterview={deleteInterview}
                  />
                }
              />

              <Route
                path="/edit-interview/:id"
                element={
                  <EditInterview
                    interviews={interviews}
                    updateInterview={updateInterview}
                  />
                }
              />

              <Route
                path="/reminders"
                element={
                  <Reminders
                    reminders={reminders}
                    addReminder={addReminder}
                    deleteReminder={deleteReminder}
                  />
                }
              />

              <Route
                path="/edit-reminder/:id"
                element={
                  <EditReminder
                    reminders={reminders}
                    updateReminder={updateReminder}
                  />
                }
              />
              <Route
                path="/settings"
                element={<Settings />}
              />

            </Routes>

          </main>
        </div>
      </div>
    </HashRouter>
  )
}

export default App