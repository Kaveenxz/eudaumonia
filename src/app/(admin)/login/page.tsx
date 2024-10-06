export default function Login() {
    return (
      <div className="flex items-center justify-center h-screen bg-red-600">
        <div className="bg-pink-300 p-8 rounded-lg shadow-lg w-80">
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full w-12 h-12 mb-4"></div>
            <h2 className="text-xl font-semibold text-black mb-6">Admin</h2>
          </div>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="User name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
  