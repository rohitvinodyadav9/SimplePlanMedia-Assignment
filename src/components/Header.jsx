function Header() {
    return (
      <div>
        <div className="header">
          <div className="header-left">
            <div className="header-item">
              <h3>Hobbies</h3>
              <img style={{ width: "50px" }} src="./heart.png" alt="" />
              <h3>Happiness</h3>
              <img src="Subtract.svg" alt="" />
  
              <h3>Home</h3>
            </div>
            <div className="header-paragraph">
              <p>
                A Nordic startup which brings incredibly interesting hobbies from
                around the world to people of all ages.
              </p>
            </div>
  
            <div>
              <div className="email">
                <input
                  className="email-input"
                  type="email"
                  placeholder="Enter your email"
                />
  
                <button className="email-button">
                  start exploring
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1104_30771)">
                      <path
                        d="M10.0013 18.3337C14.6037 18.3337 18.3346 14.6027 18.3346 10.0003C18.3346 5.39795 14.6037 1.66699 10.0013 1.66699C5.39893 1.66699 1.66797 5.39795 1.66797 10.0003C1.66797 14.6027 5.39893 18.3337 10.0013 18.3337Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 13.3337L13.3333 10.0003L10 6.66699"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66797 10H13.3346"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1104_30771">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="background-img">
              <svg
                width="589"
                height="598"
                viewBox="0 0 589 598"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.6557 181.159C60.2517 117.878 148.404 122.04 217.23 94.5232C295.719 63.1429 372.977 -30.367 446.528 11.2923C520.51 53.1958 470.651 170.356 494.961 251.831C518.114 329.429 612.653 393.029 582.901 468.344C552.996 544.048 448.774 546.886 370.123 567.849C297.652 587.166 221.627 615.432 154.186 582.615C85.8571 549.366 53.4245 474.309 29.6033 402.15C5.58169 329.385 -18.245 246.579 21.6557 181.159Z"
                  fill="#FB7356"
                />
              </svg>
              <img className="family-img" src="./img.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="side-img">
          <img src="./side.svg" alt="" />
          <h1 className="explore">
            Explore. Enroll. Have Fun. Repeat - here hobby meets happiness
          </h1>
        </div>
        {/* <div>
          <img style={{width:"100px"}} src="heart.png" alt=""  />
        </div> */}
      </div>
    );
  }
  
  export default Header;
  