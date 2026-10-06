import { Bell } from 'lucide-react'

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-left">
                <h2>JobTrack</h2>
            </div>

            <div className="navbar-right">
                <button className="notification-btn">
                    <Bell size={20} />
                </button>
            </div>

            <div className="user-profile">
                <div className="user-avater">G</div>
                <span>Gech</span>
            </div>
        </header>
    )
}
export default Navbar

