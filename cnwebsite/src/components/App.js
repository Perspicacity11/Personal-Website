import "../style.css";
import "../bootstrap.min.css";
import "../font-awesome.min.css";
import EmailContactForm from "./Email";
import Header from "./Header"

function App() {
  return (
    <span>
      <div id="top" className="hero background-overlay">
        <div className="hero-content">
          <h1>Cassius Naylor</h1>
          <p className="hero-job">
            <span>SOFTWARE ENGINEER & D.E.I. ADVISOR</span>
          </p>
        </div>

        <div className="hero-arrow page-scroll home-arrow-down">
          <a
            className=""
            hrefTo="#intro"
            onClick={(event) => {
              event.preventDefault();
              let hrefTo = event.currentTarget.getAttribute("hrefTo");
              let section = document.querySelector(hrefTo);
              let offset = 100;
              let topPos = section.getBoundingClientRect().top + window.pageYOffset - offset;
              window.scrollTo({ top: topPos, behavior: "smooth" });
            }}
            ariaHidden="true"
          >
            <i className="fa fa-angle-double-down" ariaHidden="true"></i>
          </a>
        </div>
      </div>

      <Header></Header>

      <main id="main" class="site-main"></main>

      <section class="site-section section-hello" id="intro">
        <div class="container">
          <h2>WELCOME</h2>
          <p class="section-subtitle">
            <span>AKA. 'The Gist'</span>
          </p>
          <div class="row">
            <div class="col-sm-4">
              <div class="main-service text-right">
                <div class="lefthexagon1"></div>
                <h3>Building software</h3>
                <p>
                  I'm driven to build, optimise and secure the systems that make peoples
                  lives easier, and their work more effective. 
                  If you have a project and need a full-stack dev, DevOps or test engineer, get in touch!
                </p>
              </div>
              <div class="main-service text-right">
                <div class="lefthexagon2"></div>
                <h3>My career so far</h3>
                <p>
                I’ve built a portfolio of professional experience, spanning journalism, 
                publishing, activism, research, comms, sales, marketing and operations. It helps me to look at all facets
                of a business challenge or brief, and work out a multidisciplinary approach to tackling it. 
                </p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="big-hexagon1"></div>
            </div>
            <div class="col-sm-4">
              <div class="main-service text-left">
                <div class="righthexagon1"></div>
                <h3>Advocating for inclusion</h3>
                <p>
                  Since 2019 I have been championing inclusive policy and
                  process at the highest levels of the UK media and the wider
                  professional economy, with a focus on trans and non-binary
                  inclusion. My main work is now in advertising and marketing D.E.I.
                </p>
              </div>
              <div class="main-service text-left">
                <div class="righthexagon2"></div>
                <h3>Writer, speaker, advisor</h3>
                <p>
                  I love what I do and I love to talk about it! I am available for retained 
                  or ad hoc advisory work so please reach out if you think my perspective would 
                  be of value to your event, publication or initiative. 
                </p>
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
            <span>where I came from and where I'm going</span>
          </p>
          <div class="row">
            <div class="col-sm-3 col-xs-6">
              <div class="feature-about">
                <div class="medium-hexagon hexagon"></div>
                <h3>My background</h3>
                <p>
                  Raised oldest of three near Southampton, I moved to London
                  to study politics in 2014 and started working concurrently as
                  an investigative videojournalist. Throughout the interceding
                  nine years I've been a publisher and a cabaret bartender, a
                  writer and an activist, sold and bought enterprise
                  technology, and worked in (or near) fields from foreign direct
                  investment to the news and entertainment media, advertising
                  and marketing to fashion, fintech and financial markets.
                  <br></br>
                  <br></br>
                  Most recently I was the global communications team coordinator
                  at the <a href="https://ft.com/"> Financial Times</a> - and
                  global co-chair of the LGBTQ+ employee network Proud FT -
                  until after four years I left the company to pursue a career
                  in software engineering.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-xs-6">
              <div class="feature-about">
                <div class="medium-hexagon hexagon"></div>
                <h3>What I do</h3>
                <p>
                  Nowadays I divide my time between two focuses: software and
                  social justice.
                  <br></br>
                  <br></br>On software: I am a graduate of the{" "}
                  <a href="https://makers.tech">Makers Academy</a> software development 
                  programme with IBM and AWS certifications in DevOps and cloud infrastructure design, respectively. 
                  I specialise in JavaScript - primarily across the M.E.R.N. stack - and am
                  comfortable with TypeScript, Ruby, CSS, HTML, and testing
                  frameworks like Cypress and Jest. I'm always learning, and am
                  mostly building in Python at the moment with a focus on applied AI. My interests
                  are in full-stack development, data management, system
                  architecture and information security.
                  <br></br>
                  <br></br>
                  On social justice: I'm a disabled, LG(B)TQ+ activist and
                  advocate working in the media and marketing industries,
                  currently as co-director of advocacy at
                  <a href="https://www.outvertising.org/"> Outvertising</a> and as a 
                  business consultant with <a href="https://www.purposeunion.com/"> Purpose Union</a>.
                  While at the Financial Times, I led Proud FT to deliver
                  award-winning work, including the introduction of the
                  paper's first Transgender Inclusion Policy, the most
                  comprehensive of its kind in the sector at the time. I am 
                  variously involved in other working groups, networks and ad
                  hoc projects as well as advising on corporate and creative
                  D.E.I.
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
                <div class="lefthexagon3"></div>
                <h3>eatGPT</h3>
                <p>
                  Combined recipe generator/culinary social media service, built
                  on the MERN stack as my engineering course final team project.
                  <br></br>
                  <br></br>
                  <a href="https://github.com/Perspicacity11/eatGPT">
                    | Check out the code |
                  </a>
                </p>
              </div>
              <div class="main-service text-right">
                <div class="lefthexagon4"></div>
                <h3>burnbook</h3>
                <p>
                  Social network service built from a basic legacy codebase on
                  the MERN stack, with image upload, user profiles and likes.
                  <br></br>
                  <br></br>
                  <a href="https://github.com/Perspicacity11/burnbook">
                    | Check out the code |
                  </a>
                </p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="big-hexagon2"></div>
            </div>
            <div class="col-sm-4">
              <div class="main-service text-left">
                <div class="righthexagon3"></div>
                <h3>MakersBnB</h3>
                <p>
                  Database-backed system for owners to list their
                  properties for short-term let, and for users to lease those
                  properties. Built with Ruby.
                  <br></br>
                  <br></br>
                  <a href="https://github.com/SimpleLuke/makersbnb-ruby">
                    | Check out the code |
                  </a>
                </p>
              </div>
              <div class="main-service text-left">
                <div class="righthexagon4"></div>
                <h3>JS-PY Translator</h3>
                <p>
                  Simple text translator using the ChatGPT API to translate pure
                  Javascript into Python. Built with Python and Django.
                  <br></br>
                  <br></br>
                  <a href="https://github.com/Perspicacity11/JS-PY-Translator">
                    | Check out the code |
                  </a>
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
            <span>Highlights of the work</span>
          </p>
          <div class="row">
            <div class="col-md-4">
              <div class="main-service text-right">
                <div class="lefthexagon5"></div>
                <h3>Media</h3>
                <p>
                  In my ProudFT capacity I represented the Financial Times on
                  the board of{" "}
                  <a href="https://intermediauk.co.uk/">IntermediaUK</a>,
                  working with network leads from twenty other major UK media
                  organisations to address the recent groundswell in transphobic
                  reporting.
                  <br></br>
                  <br></br>I now advise news and media professionals on
                  effective engagement with newsrooms around responsible
                  reporting, free expression and inclusion.
                </p>
              </div>
              <div class="main-service text-right">
                <div class="lefthexagon6"></div>
                <h3>Advertising & Marketing</h3>
                <p>
                  I've been involved in adland since joining Outvertising (then
                  PrideAM) in 2018, where I helped launch the second edition of
                  the{" "}
                  <a href="https://www.outvertising.org/outvertising-download">
                    Outvertising Guide
                  </a>{" "}
                  - the authoritative handbook on authentic LGBTQ+
                  representation in advertising. I remain with the organisation
                  as co-director of advocacy, leading OVT's work to reform the advertising
                  ecosystem, and break the supply chains of disinformation that harm minoritised 
                  communities.
                  <br></br>
                  <br></br>I also consult on internal D.E.I. governance for Purpose Union and <a href="https://www.vercida.com/uk">
                  VERCIDA</a>{" "}, and on 
                  inclusive marketing creative for the <a href="https://thedsc.org.uk/"> Diversity Standards Collective.
                  </a>{" "}
                </p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="big-hexagon3"></div>
            </div>
            <div class="col-sm-4">
              <div class="main-service text-left">
                <div class="righthexagon5"></div>
                <h3>Awards</h3>
                <p>
                  Work that I led has been shortlisted for:
                  <ul>
                    <li>
                  <a href="https://britishlgbtawards.com/network-rail-top-10-network-group-erg-2022/">
                    British LGBT Awards 2022
                  </a>
                    </li>
                  <li>
                  <a href="https://www.rainbowhonours.com/shortlist-2022.html"> Rainbow Honours 2022 </a>
                  </li>
                  <li>
                  <a href="https://www.britishdiversityawards.com/shortlist-2023?pgid=lcozrgx1-e6fae771-14b9-46bb-8b2a-8052d304ebdc">
                    British Diversity Awards 2023
                  </a>
                  </li>
                  <li>
                  <a href="https://thebankoflondonrainbowhonours.com/2023-winners/">
                    Rainbow Honours 2023
                  </a>
                  </li>
                  </ul>
                </p>
              </div>
              <div class="main-service text-left">
                <div class="righthexagon6"></div>
                <h3>Published words</h3>
                <br></br>
                <ul>
                  By me:
                  <ul>
                    <li>
                      <a href="https://www.mygwork.com/es/my-g-news/financial-times/figures-of-lgbtq-history-alexander-the-great">
                        MyGWork, for LGBTQ+ History Month
                      </a>
                    </li>
                    <li>
                      IntermediaUK, for Pansexual Pride Day (
                      <a href="https://intermediauk.co.uk/post/pan-pride-2021-q-a-with-charlie-martin-cassius-naylor/">
                        podcast
                      </a>
                      )
                    </li>
                    <li>
                      Outvertising, for Bisexual Pride Day (
                      <a href="https://podcasters.spotify.com/pod/show/outvertising-podcast/episodes/The-Invisible-Bs-Bisexuality-Special-ekdau9">
                        podcast
                      </a>
                      )
                    </li>
                    <li>
                      Access Intelligence Group, on inclusion in media (
                      <a href="https://www.youtube.com/watch?v=uMzNnC38gow">
                        video
                      </a>{" "}
                      with summary articles{" "}
                      <a href="https://www.responsesource.com/blog/how-the-uk-media-can-support-the-transgender-community-assessmatters-with-proud-fts-cassius-naylor/">
                        one
                      </a>{" "}
                      &{" "}
                      <a href="https://www.vuelio.com/uk/blog/this-is-where-we-all-can-make-a-discernable-difference-accessmatters-with-cassius-naylor-proud-ft/">
                        two
                      </a>
                      )
                    </li>
                    <br></br>
                  </ul>
                  About me:
                  <ul>
                    <li>
                      <a href="https://www.marketing-beat.co.uk/2023/07/14/offend-woke-brand/">
                        Marketing Beat, on pinkwashing in advertising
                      </a>
                    </li>
                    <li>
                      <a href="https://www.campaignlive.co.uk/article/brands-apprehensive-pride-campaigns/1825330">
                        Campaign, on the backlash to Pride 2023
                      </a>
                    </li>
                    <li>
                      <a href="https://www.thepinknews.com/2020/12/23/financial-times-paul-mcclean-graduate-trainee-programme-lgbt-journalists/">
                        Pink News, as part of a Proud FT partnership
                      </a>
                    </li>
                    <li>
                      <a href="https://medium.com/queertopia/pride-of-place-financial-times-pushes-for-queer-inclusivity-in-business-43cb9611c355">
                        Liam Heitmann-Ryce-LeMercier, on Medium
                      </a>
                    </li>
                  </ul>
                </ul>
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
        <EmailContactForm></EmailContactForm>
      </section>

      <section class="section-networks blue-bg">
        <div class="container">
          <a
            href="https://www.linkedin.com/in/cassius-naylor/"
            class="hexagon2"
          >
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="https://www.twitter.com/Cassius_Naylor" class="hexagon2">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="https://github.com/Perspicacity11/CV" class="hexagon2">
            <i class="fa fa-github-square"></i>
          </a>
          <a href="https://medium.com/@cassius.cr.naylor" class="hexagon2">
            <i class="fa fa-medium"></i>
          </a>
        </div>
      </section>

      <section class="section-background section4-quote background-overlay text-center">
        <div class="container">
          <p></p>
        </div>
      </section>

      <footer id="colophon" class="site-footer">
        <div class="container-fluid">
          <ul class="list-unstyled list-inline">
            <li class="page-scroll">
              <a href="#top">Back to top</a>
            </li>
            <li class="page-scroll">
              <a href="#intro">Welcome</a>
            </li>
            <li class="page-scroll">
              <a href="#aboutme">About me</a>
            </li>
            <li class="page-scroll">
              <a href="#tech">Tech</a>
            </li>
            <li class="page-scroll">
              <a href="#dei">D.E.I.</a>
            </li>
            <li class="page-scroll">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div class="page-scroll">
            <a href="#top" class="hexagon2">
              <i class="fa fa-angle-double-up"></i>
            </a>
          </div>
        </div>

        <div class="container text-center">
          <p class="copyright">
            &copy;{" "}
            <a>
              Cassius Naylor
            </a>{" "}
            - 2023
          </p>
        </div>
      </footer>
    </span>
  );
}

export default App;
