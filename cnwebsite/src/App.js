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
            <span>SOFTWARE DEVELOPER & D.E.I. CONSULTANT</span>
          </p>
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

      <header id="masthead" className="site-header" class="sticky-top">
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

              <div className="page-scroll site-logo sticky-top">
                <a href="#top">Cassius Naylor</a>
              </div>

              <div
                className="main-menu collapse navbar-collapse"
                id="portfolio-perfect-collapse"
              >
                <ul className="nav navbar-nav navbar-right">
                  <li className="page-scroll">
                    <a href="#intro">Main page</a>
                  </li>
                  <li className="page-scroll">
                    <a href="#aboutme">About me</a>
                  </li>
                  <li className="page-scroll">
                    <a href="#tech">Technology</a>
                  </li>
                  <li className="page-scroll">
                    <a href="#dei">Diversity, equity & inclusion</a>
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
          <h2>WELCOME</h2>
          <p class="section-subtitle">
            <span>TO MY CORNER OF THE INTERNET</span>
          </p>
          <div class="row">
            <div class="col-sm-4">
              <div class="main-service text-right">
                <div class="rectangle">
                  <i class="fa fa-calendar" ariaHidden="true"></i>
                </div>
                <h3>Building software</h3>
                <p>[INSERT STUFF HERE ABOUT CODING AND TECH]</p>
              </div>
              <div class="main-service text-right">
                <div class="rectangle">
                  <i class="fa fa-comments" ariaHidden="true"></i>
                </div>
                <h3>My career so far</h3>
                <p>[INSERT STUFF HERE ABOUT FT AND OTHER JOBS]</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="big-rectangle">
                <img src="assets/img/cn-images/logo2sq.jpg" alt=""></img>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="main-service text-left">
                <div class="rectangle">
                  <i class="fa fa-check" ariaHidden="true"></i>
                </div>
                <h3>Advocating for inclusion</h3>
                <p>[STUFF HERE ABOUT MY WORK IN PROUD FT]</p>
              </div>
              <div class="main-service text-left">
                <div class="rectangle">
                  <i class="fa fa-list" ariaHidden="true"></i>
                </div>
                <h3>Writer, speaker, consultant</h3>
                <p>[STUFF HERE ABOUT MY VOLUNTARY WORK AND PUBLISHED WORK]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-background section-quote background-overlay text-center">
        <div class="container">
          <p></p>
        </div>
      </section>

      <section class="site-section section-hello" id="tech">
        <div class="container">
          <h2>TECHNOLOGY</h2>
          <p class="section-subtitle">
            <span>Some example projects</span>
          </p>
          <div class="row">
            <div class="col-sm-4">
              <div class="main-service text-right">
                <div class="rectangle">
                  <i class="fa fa-calendar" ariaHidden="true"></i>
                </div>
                <h3>Building software</h3>
                <p>[INSERT STUFF HERE ABOUT CODING AND TECH]</p>
              </div>
              <div class="main-service text-right">
                <div class="rectangle">
                  <i class="fa fa-comments" ariaHidden="true"></i>
                </div>
                <h3>My career so far</h3>
                <p>[INSERT STUFF HERE ABOUT FT AND OTHER JOBS]</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="big-rectangle">
                <img src="assets/img/cn-images/logo2sq.jpg" alt=""></img>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="main-service text-left">
                <div class="rectangle">
                  <i class="fa fa-check" ariaHidden="true"></i>
                </div>
                <h3>Advocating for inclusion</h3>
                <p>[STUFF HERE ABOUT MY WORK IN PROUD FT]</p>
              </div>
              <div class="main-service text-left">
                <div class="rectangle">
                  <i class="fa fa-list" ariaHidden="true"></i>
                </div>
                <h3>Writer, speaker, consultant</h3>
                <p>[STUFF HERE ABOUT MY VOLUNTARY WORK AND PUBLISHED WORK]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-background section-quote background-overlay text-center">
        <div class="container">
          <p></p>
        </div>
      </section>

      <section class="site-section section-hello" id="dei">
        <div class="container">
          <h2>DIVERSITY, EQUITY AND INCLUSION</h2>
          <p class="section-subtitle">
            <span>Highlights of my work</span>
          </p>
          <div class="row">
            <div class="col-sm-4">
              <div class="main-service text-right">
                <div class="rectangle">
                  <i class="fa fa-calendar" ariaHidden="true"></i>
                </div>
                <h3>Building software</h3>
                <p>[INSERT STUFF HERE ABOUT CODING AND TECH]</p>
              </div>
              <div class="main-service text-right">
                <div class="rectangle">
                  <i class="fa fa-comments" ariaHidden="true"></i>
                </div>
                <h3>My career so far</h3>
                <p>[INSERT STUFF HERE ABOUT FT AND OTHER JOBS]</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="big-rectangle">
                <img src="assets/img/cn-images/logo2sq.jpg" alt=""></img>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="main-service text-left">
                <div class="rectangle">
                  <i class="fa fa-check" ariaHidden="true"></i>
                </div>
                <h3>Advocating for inclusion</h3>
                <p>[STUFF HERE ABOUT MY WORK IN PROUD FT]</p>
              </div>
              <div class="main-service text-left">
                <div class="rectangle">
                  <i class="fa fa-list" ariaHidden="true"></i>
                </div>
                <h3>Writer, speaker, consultant</h3>
                <p>[STUFF HERE ABOUT MY VOLUNTARY WORK AND PUBLISHED WORK]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-background section-quote background-overlay text-center">
        <div class="container">
          <p></p>
        </div>
      </section>

      <section class="site-section section-hello" id="contact">
        <div class="container">
          <h2>GET IN TOUCH</h2>
          <div class="row">
            <div class="col-sm-4">
              <div class="main-service text-right">
                <div class="rectangle">
                  <i class="fa fa-calendar" ariaHidden="true"></i>
                </div>
                <h3>Building software</h3>
                <p>[INSERT STUFF HERE ABOUT CODING AND TECH]</p>
              </div>
              <div class="main-service text-right">
                <div class="rectangle">
                  <i class="fa fa-comments" ariaHidden="true"></i>
                </div>
                <h3>My career so far</h3>
                <p>[INSERT STUFF HERE ABOUT FT AND OTHER JOBS]</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="big-rectangle">
                <img src="assets/img/cn-images/logo2sq.jpg" alt=""></img>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="main-service text-left">
                <div class="rectangle">
                  <i class="fa fa-check" ariaHidden="true"></i>
                </div>
                <h3>Advocating for inclusion</h3>
                <p>[STUFF HERE ABOUT MY WORK IN PROUD FT]</p>
              </div>
              <div class="main-service text-left">
                <div class="rectangle">
                  <i class="fa fa-list" ariaHidden="true"></i>
                </div>
                <h3>Writer, speaker, consultant</h3>
                <p>[STUFF HERE ABOUT MY VOLUNTARY WORK AND PUBLISHED WORK]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-background section-quote background-overlay text-center">
        <div class="container">
          <p></p>
        </div>
      </section>
    </span>
  );
}

export default App;
