function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h3>Logo</h3>
        
          <h3>Categories</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
          >
            <path
              d="M9.875 1.56249L5.5 5.9375L1.125 1.5625"
              stroke="#2430A0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
      </div>
      <div className="navbar-right">
        <h3>TEACH</h3>
        <div className="bar"></div>
        <button className="button-login">LOGIN</button>
        <button className="button-signup">SIGNUP</button>
      </div>
    </div>
  );
}

export default Navbar;
