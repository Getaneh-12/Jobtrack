import {
  LayoutDashboard,
  Briefcase,
  Plus,
  Calendar,
  Bell,
  Settings
} from 'lucide-react'

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <a href="/">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </a>

        <a href="/applications">
          <Briefcase size={20} />
          <span>Applications</span>
        </a>

        <a href="/add-application">
          <Plus size={20} />
          <span>Add Application</span>
        </a>

        <a href="/interviews">
          <Calendar size={20} />
          <span>Interviews</span>
        </a>

        <a href="/reminders">
          <Bell size={20} />
          <span>Reminders</span>
        </a>

        <a href="/settings">
          <Settings size={20} />
          <span>Settings</span>
        </a>
      </nav>
    </aside>
  ) 
}

export default Sidebar