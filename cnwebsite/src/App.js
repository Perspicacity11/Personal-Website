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

      <header id="masthead" className="site-header">
        <nav
          id="primary-navigation"
          className="site-navigation affix-top"
          dataSpy="affix"
        >
          <div className="container affix-top">
            <div className="navbar-header page-scroll affix-top">
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
                <div class="lefthexagon">
                  <i class="fa fa-calendar" ariaHidden="true"></i>
                </div>
                <h3>Building software</h3>
                <p>[INSERT STUFF HERE ABOUT CODING AND TECH]</p>
              </div>
              <div class="main-service text-right">
                <div class="lefthexagon">
                  <i class="fa fa-comments" ariaHidden="true"></i>
                </div>
                <h3>My career so far</h3>
                <p>[INSERT STUFF HERE ABOUT FT AND OTHER JOBS]</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="big-hexagon1"></div>
            </div>
            <div class="col-sm-4">
              <div class="main-service text-left">
                <div class="righthexagon">
                  <i class="fa fa-check" ariaHidden="true"></i>
                </div>
                <h3>Advocating for inclusion</h3>
                <p>[STUFF HERE ABOUT MY WORK IN PROUD FT]</p>
              </div>
              <div class="main-service text-left">
                <div class="righthexagon">
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

      <section class="site-section section-about text-center" id="aboutme">
        <div class="container">
          <h2>ME, MYSELF AND I</h2>
          <p class="section-subtitle">
            <span>How I got here and where I want to go</span>
          </p>
          <div class="row">
            <div class="col-sm-3 col-xs-6">
              <div class="feature-about">
                <div class="medium-hexagon hexagon">
                  <i class="fa fa-laptop" aria-hidden="true"></i>
                </div>
                <h3>My background</h3>
                <p></p>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="feature-about">
                <div class="medium-hexagon hexagon">
                  <i class="fa fa-code" aria-hidden="true"></i>
                </div>
                <h3>What I do</h3>
                <p>
                  My waking life is divided between building software and
                  building inclusion
                </p>
              </div>
            </div>
            <div class="circle"></div>
          </div>
        </div>
      </section>

      <section class="section-background section2-quote background-overlay text-center">
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
                <div class="lefthexagon"></div>
                <h3>eatGPT</h3>
                <p>
                  Combined recipe generator/culinary social media service, built
                  on the MERN stack as bootcamp final project
                </p>
              </div>
              <div class="main-service text-right">
                <div class="lefthexagon">
                  <i class="fa fa-comments" ariaHidden="true"></i>
                </div>
                <h3>burnbook</h3>
                <p>
                  Social network service built from a basic legacy codebase on
                  the MERN stack
                </p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="big-hexagon2"></div>
            </div>
            <div class="col-sm-4">
              <div class="main-service text-left">
                <div class="righthexagon">
                  <i class="fa fa-check" ariaHidden="true"></i>
                </div>
                <h3>MakersBnB</h3>
                <p>
                  Database-backed, account-based system for owners to list their
                  properties for short-term let, and for users to lease those
                  properties.
                </p>
              </div>
              <div class="main-service text-left">
                <div class="righthexagon">
                  <i class="fa fa-list" ariaHidden="true"></i>
                </div>
                <h3>JS-PY Translator</h3>
                <p>
                  Simple text translator using the ChatGPT API to translate pure
                  Javascript into Python
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-background section5-quote background-overlay text-center">
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
                <div class="lefthexagon">
                  <i class="fa fa-calendar" ariaHidden="true"></i>
                </div>
                <h3>Media</h3>
                <p>[- ProudFT - IntermediaUK]</p>
              </div>
              <div class="main-service text-right">
                <div class="lefthexagon">
                  <i class="fa fa-comments" ariaHidden="true"></i>
                </div>
                <h3>Advertising & Marketing</h3>
                <p>[- Outvertising - DSC]</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="big-hexagon3"></div>
            </div>
            <div class="col-sm-4">
              <div class="main-service text-left">
                <div class="righthexagon">
                  <i class="fa fa-check" ariaHidden="true"></i>
                </div>
                <h3>Awards</h3>
                <p>
                  [- British LGBT Awards 2022 - Rainbow Honours 2022 - British
                  Diversity Awards 2023]
                </p>
              </div>
              <div class="main-service text-left">
                <div class="righthexagon">
                  <i class="fa fa-list" ariaHidden="true"></i>
                </div>
                <h3>My writing and other work</h3>
                <p>[Interviews, articles, workshops]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-background section3-quote background-overlay text-center">
        <div class="container">
          <p></p>
        </div>
      </section>

      <section class="site-section section-hello" id="contact">
        <div class="container">
          <h2>GET IN TOUCH</h2>
          <p class="section-subtitle"></p>
          <div class="row">
            <form>
              <div class="col-md-4">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Name"
                  required
                ></input>
              </div>
              <div class="col-md-4">
                <input
                  class="form-control"
                  type="email"
                  placeholder="Email"
                  required
                ></input>
              </div>
              <div class="col-md-4">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Subject"
                  required
                ></input>
              </div>
              <div class="col-sm-12">
                <textarea
                  class="form-control"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div class="col-sm-12">
                <button class="btn btn-inverted">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section class="section-background section4-quote background-overlay text-center">
        <div class="container">
          <p></p>
        </div>
      </section>
    </span>
  );
}

export default App;
