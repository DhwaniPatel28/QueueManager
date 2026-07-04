import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          Dhwani Queue Manager
        </Link>

        <div className="flex gap-4">

          <Link
            to="/join"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white"
          >
            Join Queue
          </Link>

          <Link
            to="/status"
            className="px-4 py-2 rounded-lg border"
          >
            Check Status
          </Link>

          <Link
            to="/staff"
            className="text-2xl"
          >
            👤
          </Link>

        </div>

      </div>
    </nav>
  );
}