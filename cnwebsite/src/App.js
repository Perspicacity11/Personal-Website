import "./style.css";
import "./bootstrap.min.css";
import "./font-awesome.min.css";

function App() {
  return (
    <span>
      <div id="top" className="hero background-overlay">
        <div className="hero-content">
          <h1>Cassius Naylor</h1>
          <p className="hero-job">
            <span>[SUBHEADER]</span>
          </p>
          <p className="hero-job-desc">[SUBTEXT]</p>
        </div>

        <div className="hero-arrow page-scroll home-arrow-down">
          <a
            className=""
            hrefTo="#intro"
            onClick={(event) => {
              event.preventDefault();
              // Find hrefTo, look up in DOM, find the position of the found element and scrollIntoView to that position
              let hrefTo = event.currentTarget.getAttribute("hrefTo");
              event.currentTarget.scrollIntoView({ behavior: "smooth" });
            }}
            ariaHidden="true"
          >
            <i className="fa fa-angle-double-down" ariaHidden="true"></i>
          </a>
        </div>
      </div>

      <header id="masthead" className="site-header">
        <nav
          id="primary-navigation"
          className="site-navigation"
          dataSpy="affix"
        >
          <div className="container">
            <div className="navbar-header page-scroll">
              <button
                type="button"
                className="navbar-toggle collapsed"
                dataToggle="collapse"
                dataTarget="#portfolio-perfect-collapse"
                ariaExpanded="false"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div className="page-scroll site-logo">
                <a href="#top">Cass</a>
              </div>

              <div
                className="main-menu collapse navbar-collapse"
                id="portfolio-perfect-collapse"
              >
                <ul className="nav navbar-nav navbar-right">
                  <li className="page-scroll">
                    <a href="#top">About me</a>
                  </li>
                  <li className="page-scroll">
                    <a href="#history">History</a>
                  </li>
                  <li className="page-scroll">
                    <a href="#works">Work</a>
                  </li>
                  <li className="page-scroll">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main id="main" class="site-main"></main>

      <section class="site-section section-hello" id="intro">
        <div class="container">
          <h2>HELLO &amp; WELCOME</h2>
          <p class="section-subtitle">
            <span>EXPLORE OUR WORLD</span>
          </p>
          <div class="row">
            <div class="col-sm-4">
              <div class="main-service text-right">
                <div class="rectangle">
                  <i class="fa fa-calendar" ariaHidden="true"></i>
                </div>
                <h3>We Meet Deadlines</h3>
                <p>
                  Your deadline is the most important value for us. Our job is
                  to make sure the job is done perfectly before the deadline.
                </p>
              </div>
              <div class="main-service text-right">
                <div class="rectangle">
                  <i class="fa fa-comments" ariaHidden="true"></i>
                </div>
                <h3>Communication Is Key</h3>
                <p>
                  Our team is available to check on your questions and take in
                  feedback as soon as possibly.
                </p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="big-rectangle">
                <img src="assets/img/john-logo.png" alt=""></img>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="main-service text-left">
                <div class="rectangle">
                  <i class="fa fa-check" ariaHidden="true"></i>
                </div>
                <h3>Quality Control</h3>
                <p>
                  We test out everything to make sure that your project is fully
                  functional, cross-browser compatible and meets your
                  specifications.
                </p>
              </div>
              <div class="main-service text-left">
                <div class="rectangle">
                  <i class="fa fa-list" ariaHidden="true"></i>
                </div>
                <h3>Pixel Perfect</h3>
                <p>
                  We develop meaningful digital products and experiences that
                  matter with design thinking and creative craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-background section-quote background-overlay text-center">
        <div class="container">
          <p>
            We make our <span>work look good</span> &amp; have experience in the
            creation of brand identities for <span>print &amp; web</span>, with
            a difference.
          </p>
        </div>
      </section>
    </span>
  );
}

export default App;
