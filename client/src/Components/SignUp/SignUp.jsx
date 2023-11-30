
const SignUp = () => {
    return (
        <div>
 <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up with Us!</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username:
            </label>
            <input
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="text"
              name="username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="password"
              name="confirmPassword"
              required
            />
          </div>
          <button
            className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default SignUp;