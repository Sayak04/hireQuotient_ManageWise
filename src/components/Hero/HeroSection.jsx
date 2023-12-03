import "./HeroSection.css";
import Dashboard from "../../assets/dashboard.webp";
import BigCardRight from "../../assets/bigCardRight.webp";
import SmallCard1 from "../../assets/SmallCard1.webp";
import SmallCard2 from "../../assets/SmallCard2.webp";
import SmallCard3 from "../../assets/SmallCard3.webp";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="top-manage-wise">
        <div className="icon-hand">👋</div>
        <div className="text-manage">Welcome to manage wise!</div>
      </div>
      <div className="hero-heading">
        <h1 className="heading">
          Empower your business with{" "}
          <span className="highlight-hero-text">Strategic</span> insights
        </h1>
      </div>
      <div className="hero-paragraph">
        <p className="paragraph">
          Powerful management platform designed to streamline your business
          operations, boost productivity, and drive success
        </p>
      </div>
      <div className="btn-container">
        <div className="primary-button-container">
          <button className="primary-blue-btn">
            <p>Get Started</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM4.049 9h8.559l-2.266-2.265 1.414-1.414 4.735 4.733-4.735 4.734-1.414-1.414L12.718 11H4.049z" />
            </svg>
          </button>
        </div>
        <div className="secondary-button-container">
          <div className="template">
            <button className="template-btn secondary-btn">
              <p>Watch Demo</p>
              <svg
                height={30}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 73.82A182.18 182.18 0 1 0 438.18 256 182.182 182.182 0 0 0 256 73.82zm67.825 192.217L218.7 326.734a10.376 10.376 0 0 1-15.566-8.99V196.356a10.38 10.38 0 0 1 15.575-8.99l105.125 60.696a10.376 10.376 0 0 1-.009 17.974z"
                  data-name="Play"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="dashboard-container">
        <img className="dashboard-img" src={Dashboard} alt="dashboard img" />
      </div>

      <section aria-label="Features" id="features">
        <div className="features-container">
          <div className="top-manage-wise premier-features">
            <div className="icon-hand">🔥</div>
            <div className="text-manage">Premier Features </div>
          </div>
          <div className="hero-heading">
            <h1 className="heading feature-heading">
              Discover our product&apos;s{" "}
              <span className="highlight-feature-text">Capabilities</span>
            </h1>
          </div>
          <div className="hero-paragraph">
            <p className="paragraph">
              Don&apos;t settle for mediocrity - embrace the future of
              management with Manage Wise.
            </p>
          </div>
          <div className="big-cards">
            <div className="left-card">
              <div className="star-container">
                <p className="star">⭐️</p>
              </div>
              <div className="big-card-text">
                Boost productivity and streamline workflow with us. Enjoy our
                intuitive interface and robust features.
              </div>
            </div>
            <div className="right-card">
              <img className="big-card-img" src={BigCardRight} alt="big card" />
              <div className="right-card-bottom-container">
                <p className="right-card-heading">Smart Task Management</p>
                <p className="right-card-p">
                  Say goodbye to chaos with our smart task management system
                </p>
              </div>
            </div>
          </div>
          <div className="small-cards">
            <div className="three-card">
              <img className="big-card-img" src={SmallCard1} alt="card 1" />
              <div className="right-card-bottom-container">
                <p className="right-card-heading">Flexible Scheduling</p>
                <p className="right-card-p">
                  Stay productive with our flexible scheduling system
                </p>
              </div>
            </div>
            <div className="three-card">
              <img className="big-card-img" src={SmallCard2} alt="card 2" />
              <div className="right-card-bottom-container">
                <p className="right-card-heading">Easy Communication</p>
                <p className="right-card-p">
                  Collaborate seamlessly with your team in real-time
                </p>
              </div>
            </div>
            <div className="three-card">
              <img className="big-card-img" src={SmallCard3} alt="card 3" />
              <div className="right-card-bottom-container">
                <p className="right-card-heading">Analytics</p>
                <p className="right-card-p">
                  Gain valuable insights with our advanced analytics feature
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="features-section2">
        <div className="top-manage-wise and-more-feature">
          <div className="icon-hand">🤩</div>
          <div className="text-manage">AND MORE...</div>
        </div>
        <div className="feature-heading">
          <h1 className="heading feature2-heading">
            Explore an array of features that elevate your{" "}
            <span className="highlight-feature-text">Productivity </span>
            to new heights
          </h1>
        </div>
        <div className="feature2-paragraph-container">
          <p className="feature2-paragraph">
            Discover the tools that will revolutionize the way you manage and
            optimize your operations
          </p>
        </div>
        <div className="black-cards-wrapper">
          <div className="black-card">
            <div className="icon-part">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="36"
                height="36"
                style={{ width: "100%", height: "100%", color: "#fff" }}
              >
                <path
                  fillRule="evenodd"
                  d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-part">
              <h2 className="black-card-heading">
                Cross-Platform Compatibility
              </h2>
              <p className="black-card-paragraph">
                Enjoy the flexibility of cross-platform compatibility. Our
                product works seamlessly across desktop, web, and mobile
                devices, allowing you to work from your preferred device.
              </p>
            </div>
          </div>
          <div className="black-card">
            <div className="icon-part">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="36"
                height="36"
                style={{ width: "100%", height: "100%", color: "#fff" }}
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
            </div>
            <div className="text-part">
              <h2 className="black-card-heading">
                Stay Informed with Essential Notifications
              </h2>
              <p className="black-card-paragraph">
                Automate support from first customer contact to closing the
                ticket. Drastically improve time to resolution.Automate support
                from first customer contact to closing the ticket.
              </p>
            </div>
          </div>
          <div className="black-card">
            <div className="icon-part">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="36"
                height="36"
                style={{ width: "100%", height: "100%", color: "#fff" }}
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="text-part">
              <h2 className="black-card-heading">
                Secure Data Encryption at all times
              </h2>
              <p className="black-card-paragraph">
                Trust in our robust data encryption to keep your sensitive
                information safe and secure. Rest easy knowing your data is
                protected at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
