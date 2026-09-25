import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './component/Navbar'
import Sidebar from './component/sidebar'

import Dashboard from './Pages/Dashboard'
import Applications from './Pages/Applications'
import AddApplication from './Pages/AddApplication'

import './App.css'

function App() {
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
  setApplications((currentApplications) => {
    const updatedApplications = currentApplications.filter(
      (application) => application.id !== id
    )

    localStorage.setItem(
      'jobtrack_applications',
      JSON.stringify(updatedApplications)
    )

    return updatedApplications
  })
}
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <div className="main-container">
          <Sidebar />

          <main className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard applications={applications} />
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
                path="/add-application"
                element={
                  <AddApplication
                    addApplication={addApplication}
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App