export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4 flex flex-col">
      {/* Logo */}
      <div className="text-xl font-semibold mb-6">Neo UI</div>

      {/* Navigation */}
      <nav className="space-y-2">
        <a
          href="#"
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800"
        >
          <span>🏠</span>
          <span>Home</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800"
        >
          <span>📅</span>
          <span>Events</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800"
        >
          <span>📦</span>
          <span>Orders</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800"
        >
          <span>⚙️</span>
          <span>Settings</span>
        </a>
      </nav>

      {/* Upcoming Events */}
      <div className="mt-6">
        <h3 className="text-gray-400 uppercase text-sm mb-2">
          Upcoming Events
        </h3>
        <div className="space-y-2">
          <a href="#" className="block p-2 rounded-lg hover:bg-gray-800">
            Bear Hug: Live in Concert
          </a>
          <a href="#" className="block p-2 rounded-lg hover:bg-gray-800">
            Six Fingers — DJ Set
          </a>
          <a href="#" className="block p-2 rounded-lg hover:bg-gray-800">
            We All Look The Same
          </a>
          <a href="#" className="block p-2 rounded-lg hover:bg-gray-800">
            Viking People
          </a>
        </div>
      </div>

      {/* Support */}
      <div className="mt-auto">
        <a
          href="#"
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800"
        >
          <span>❓</span>
          <span>Support</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800"
        >
          <span>📜</span>
          <span>Changelog</span>
        </a>
      </div>

      {/* User Profile */}
      <div className="mt-6 flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-medium">Erica</p>
          <p className="text-xs text-gray-400">erica@example.com</p>
        </div>
      </div>
    </div>
  );
}
