import "./JoinUs.css";
import HappyUsers from "../../assets/happyUsers.webp";

const JoinUs = () => {
  return (
    <div className="join-us">
      <div className="join-us-container">
        <div className="join-us-content-wrapper">
          <div className="content-container">
            <div className="dont-miss-out-container">
              <div className="icon-hand">👋</div>
              <div className="text-manage dont-miss">Don&apos;t miss out</div>
            </div>
            <div className="join-us-heading-container">
              <h5 className="join-us-heading">
                Unleash your <span>Potential</span> with us
              </h5>
            </div>
            <div className="join-us-paragraph">
              <p className="join-us-para">
                Join our community of ambitious individuals and organizations
                eager to make a difference.
              </p>
            </div>
            <div className="primary-button-container">
              <button className="primary-blue-btn">
                <p>Try out now</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM4.049 9h8.559l-2.266-2.265 1.414-1.414 4.735 4.733-4.735 4.734-1.414-1.414L12.718 11H4.049z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="happy-users-container">
            <div className="happy-user-top">
              <div className="top-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  style={{ width: "100%", height: "100%" }}
                >
                  <use xlinkHref="#svg2224725030" />
                </svg>
              </div>
              <div className="inside-top">
                <div className="inside-text">
                    <span className="s200">
                        200+{" "}
                    </span>
                    <span className="span-text">Happy users</span>
                </div>
              </div>
              <div className="happy-user-bottom">
                <img src={HappyUsers} alt="users" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
