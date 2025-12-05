export default function login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#d8a48f]">
      <div className=" bg-white rounded-lg shadow-lg p-6 w-[600px]">

        {/* Logo */}
        <div className="flex justify-center mb-6">

          <img src="/logo.png" alt="Logo" className="h-40 w-40"  />         

        </div>

       
        <form className="space-y-6"> 
          {/* Username */}
          <div className="px-8">
            <label htmlFor="username" className="block font-bold">Username:</label>
            <input type="text" id="username" 
              className="w-3/4 border-b-1 border-gray-400 focus:outline-none focus:border-[#d8a48f] py-2"/>
          </div>

          {/* Password */}
          <div className="px-8">
            <label htmlFor="password" className="block font-bold">Password:</label>
            <input type="password" id="password"
              className="w-3/4 border-b-1 border-gray-400 focus:outline-none focus:border-[#d8a48f] py-2"/>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-6 px-6 mt-10">
            <button
              type="reset"
              className="bg-gray-800 text-white  font-semibold px-6 py-1  rounded-md hover:bg-gray-600 transition duration-150">
              Clear
            </button>

            <button
              type="submit"
              className="bg-[#ECD0C2] text-black font-semibold px-6 py-2 rounded-md hover:bg-[#c48b76] transition duration-150">
              Login
            </button>
          </div>
        </form>
      </div>
     
    </div>
  );
}