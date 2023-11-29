

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li>
                <a>Library</a>
                <ul className="p-2">
                  <li><a>Books</a></li>
                  <li><a>Movies</a></li>
                </ul>
              </li>
              <li><a>Description</a></li>
            </ul>
          </div>
          <img className="w-20" src="vite.svg" alt="" />
          <p className="ml-4 text-5xl" style={{ fontFamily: "'Black Ops One', 'Bungee Shade', cursive", color: '#FF0000' }}>GERMAN  <span style={{ fontFamily: "'Black Ops One', 'Bungee Shade', cursive", color: '#FFCC00' }}>EYE</span></p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li tabIndex={0}>
              <details>
                <summary>Library</summary>
                <ul className="p-2">
                  <li><a>Books</a></li>
                  <li><a>Movies</a></li>
                </ul>
              </details>
            </li>
            <li><a>Description</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Log in</a>
        </div>
      </div>



    </>
  );
};

export default Header;