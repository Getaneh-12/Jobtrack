import {
  LayoutDashboard,
  Briefcase,
  Plus,
  Calendar,
  Bell,
  Settings
} from 'lucide-react'

import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>


        <NavLink
          to="/applications"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          <Briefcase size={20} />
          <span>Applications</span>
        </NavLink>


        <NavLink
          to="/add-application"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          <Plus size={20} />
          <span>Add Application</span>
        </NavLink>


        <NavLink
          to="/interviews"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          <Calendar size={20} />
          <span>Interviews</span>
        </NavLink>


        <NavLink
          to="/reminders"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          <Bell size={20} />
          <span>Reminders</span>
        </NavLink>


        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>

      </nav>
    </aside>
  )
}

export default Sidebar