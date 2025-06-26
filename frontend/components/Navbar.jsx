// components/Navbar.jsx
export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-6 px-4 max-w-6xl mx-auto">
            <div className="text-2xl font-title text-auroraBlue">Oriapsi</div>
            <ul className="flex space-x-6 font-body">
                <li><a href="#dashboard" className="hover:text-auroraBlue">Dashboard</a></li>
                <li><a href="#agenda" className="hover:text-auroraBlue">Agenda</a></li>
                <li><a href="#transcribe" className="hover:text-auroraBlue">Transcribe</a></li>
                <li><a href="#docs" className="hover:text-auroraBlue">Docs</a></li>
            </ul>
        </nav>
    );
}
