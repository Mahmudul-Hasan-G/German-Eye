

const Insert = () => {
    return (
        <div>
        <form>
      <div className="flex flex-col items-center justify-center h-screen border rounded shadow-lg p-6">
      <h1 className="text-4xl font-bold mb-6 text-yellow-500 border-b-2 border-red-500 rounded-full px-2 py-1">
        Where are we right now?
      </h1>

      <div className="container mx-auto p-4">
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">City</h3>
          <input
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter name of the city you're visiting"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Address</h3>
          <input
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter the full address"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Zip Code</h3>
          <input
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter zip code"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Image</h3>
          <input
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Publish the image"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Name of the place</h3>
          <input
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="what place are you in"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Description Area</h3>
          <input
            className="w-full px-3 py-16 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Describe what we are seeing"
          />
        </div>

        
      </div>

      <button
        className="bg-red-500 text-white font-bold py-3 px-6 rounded mt-4 focus:outline-none focus:shadow-outline"
        type="button"
      >
        Insert
      </button>
    </div>
    </form>
        </div>
    );
};

export default Insert;