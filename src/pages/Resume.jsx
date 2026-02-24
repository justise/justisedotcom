import { Link } from 'react-router-dom'

export default function Resume() {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-sm-3">
          <picture>
            <source srcSet="/images/Headshot.webp" />
            <img
              src="/images/Headshot.jpeg"
              width="200"
              height="200"
              className="headshot mb-3"
              alt="Kris Gray"
            />
          </picture>
          <p>
            <h1>Kris Gray</h1>
            Redmond, WA <br />
            <a href="http://www.justise.com/resume">http://www.justise.com/resume</a>
            <br />
            <a href="mailto:kgray@justise.com">kgray@justise.com</a>
            <br />
            <picture>
              <source srcSet="/images/GitHub-Mark-32px.png.webp" />
              <img src="/images/GitHub-Mark-32px.png" width="14" height="14" alt="GitHub" />
            </picture>{' '}
            <a href="https://github.com/KrisGraySFDC" title="Mostly private commits unfortunately">
              https://github.com/KrisGraySFDC
            </a>
            <br />
            <picture>
              <source srcSet="/images/GitHub-Mark-32px.png.webp" />
              <img src="/images/GitHub-Mark-32px.png" width="14" height="14" alt="GitHub" />
            </picture>{' '}
            <a href="https://github.com/justise" title="Some personal work">
              https://github.com/justise
            </a>
            <br />
          </p>

          <p>
            <h5>Values</h5>
            <ul>
              <li>Always Be Learning</li>
              <li>Maintainability, Simplicity, Quality</li>
              <li>Communication and collaboration</li>
              <li>Strong relationships.</li>
            </ul>
          </p>

          <p>
            <h5>Skills</h5>
            <h6>Front End</h6>
            <ul>
              <li>JavaScript, HTML, CSS</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Salesforce Lightning Framework</li>
              <li>Mocha, Jest, WebDriver, Sinon</li>
              <li>VSCode</li>
              <li>VSCode Extensions Authoring</li>
              <li>Google Chrome Extensions</li>
              <li>NodeJS, NPM</li>
              <li>Web Components</li>
            </ul>

            <h6>Infrastructure</h6>
            <ul>
              <li>CircleCI</li>
              <li>Jenkins (and Groovy)</li>
              <li>Heroku</li>
              <li>Netlify</li>
            </ul>

            <h6>Back End</h6>
            <ul>
              <li>Java</li>
              <li>C# / .NET</li>
              <li>SQL</li>
              <li>Spring</li>
            </ul>

            <h6>Intangibles</h6>
            <ul>
              <li>Strong Scrum / Agile advocate</li>
              <li>Team Lead</li>
              <li>Strong Mentorship</li>
              <li>Open Source</li>
              <li>Product Social Engagement</li>
              <li>Presentations at Conferences and Internationally</li>
            </ul>
          </p>

          <p>
            <h5>Presentations</h5>
            <ul>
              <li>
                <a href="https://www.youtube.com/watch?v=umJseJI9J8Q">
                  Salesforce JavaScript Frameworks with Kris Gray | Episode 13
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=hlowo0NTLAI">
                  History of the Lightning Framework
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=N7cPTJeN-jc">
                  Top 10 features of the Lightning Inspector
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=nygnbZj4EXs">
                  Local Development for Lightning Web Components
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=_jaLRA4Bb_g">
                  The Lightning Component Library is here
                </a>
              </li>
            </ul>
          </p>
        </div>

        <div className="col-sm">
          <div className="row mb-4">
            <div className="col">
              <h3>Experience</h3>
            </div>
            <div className="col text-end">
              <a href="/media/KrisGray_Resume.pdf" download>
                Download as PDF
              </a>
            </div>
          </div>

          <div className="row align-items-baseline">
            <div className="col">
              <h4>
                <a href="https://www.airbnb.com/">Airbnb</a>
              </h4>
            </div>
            <div className="col text-end">
              <h6>2021 – current</h6>
            </div>
          </div>
          <h6>Engineering Manager, Reviews</h6>
          <p>
            Engineering Manager for the Reviews team, leading the relaunch of Review Flows for
            Experiences and Services, new AI-based review features, and quality enforcement
            programs for guests and hosts.
          </p>
          <ul>
            <li>
              Rewrote the Review Flow Architecture using Server Driven Technology to support
              experimentation and product variations at scale.
            </li>
            <li>
              Authored a hybrid flow enabling hosts to comply with the Digital Services Act.
            </li>
            <li>
              Drove architectural decisions on the signup and login experience.
            </li>
            <li>
              Created and host the <b>Monthly Frontend Tech Forum</b>, a cultural meeting for
              shareouts and community building across the web engineering organization.
            </li>
            <li>
              Created and hosted the <b>Managers AI Roundtable</b>, bringing managers across the
              company together for roundtable discussions on AI adoption within their teams and
              organizations.
            </li>
          </ul>

          <div className="row mt-5 align-items-baseline">
            <div className="col">
              <h4>
                <a href="http://www.salesforce.com/">SalesForce</a>
              </h4>
            </div>
            <div className="col text-end">
              <h6>2009 – 2021</h6>
            </div>
          </div>
          <h6>Principal Member of Technical Staff</h6>
          <p>
            Lead teams utilizing the SalesForce reactive UI framework (LWC) and its redux
            equivalent (Wires) to deliver critical features for customers. Principal developer for
            several different UI frameworks upon which all of SalesForce is built.
          </p>
          <ul>
            <li>
              Co-Authored the{' '}
              <a href="https://github.com/forcedotcom/aura">(Aura) Lightning Framework</a> enabling
              the SalesForce Platform to support millions of users every day.
            </li>
            <li>
              Team Lead on the{' '}
              <a href="https://developer.salesforce.com/docs/component-library">
                Lightning Component Library
              </a>{' '}
              which is built with the Lightning Platform and is now the most popular external site
              at all of salesforce.com with 5+ million hits per month.
            </li>
            <li>
              Worked directly with customers, product owners across the organization and principal
              architects to dictate the team product backlog and key deliverables.
            </li>
            <li>
              Maintain the CircleCI, Jenkins and Heroku infrastructure for the Component Library.
            </li>
            <li>
              Authored and{' '}
              <b>
                <a href="https://github.com/forcedotcom/lightning-inspector">Open Sourced</a>
              </b>{' '}
              the Google Chrome Extension for the Lightning Framework.
            </li>
            <li>
              Attended TC-39, contributed to browser bugs and gave feedback to design specs for new
              eco-system technologies.
            </li>
            <li>
              Implemented a Javascript Framework and Component set to align with a founding OOCSS
              framework with the guidance of{' '}
              <a href="http://www.stubbornella.org/content/">Nicole Sullivan</a>.
            </li>
            <li>
              Team lead of the Lightning Platform Tooling team where we released key features like
              the VSCode Extension,{' '}
              <a href="https://developer.salesforce.com/blogs/2019/10/announcing-lwc-local-development-beta.html">
                Local Development
              </a>
              , Component Library and the aforementioned Lightning Inspector.
            </li>
            <li>
              Currently performing role of Architect for an initiative across 3 teams in 5
              different time zones to drastically improve processes in developer documentation and
              customer facing portals.
            </li>
            <li>
              Mentored teams onboarding onto <b>TypeScript</b>, Jest and Webdriverio for workflow
              improvements backed by Github, CircleCI, and other cloud based platforms improving
              productivity and enabling easy paths to Open Sourcing.
            </li>
            <li>
              Strong developer productivity advocate. Maintained the documentation infrastructure
              for internal JavaScript frameworks leveraging JSDoc and custom JSDoc plugins.
            </li>
            <li>
              Aligning component sets with multiple <b>CSS Design Systems</b> across the
              organization.
            </li>
            <li>
              Drove quality initiatives for the Lightning Framework, increasing customer success and
              adoption. Primary focus was on removing complexity, giving customers a clear way to
              accomplish their goals and enhancing code coverage.
            </li>
            <li>Lead project to convert the <b>Java Server</b> of the Aura framework to Spring.</li>
          </ul>

          <div className="row mt-5 align-items-baseline">
            <div className="col">
              <h4>
                <a href="http://www.method.com/">Method</a>
              </h4>
            </div>
            <div className="col text-end">
              <h6>2008 – 2009</h6>
            </div>
          </div>
          <p>
            <i>Design agency in San Francisco working with top brands (Visa, Ted, Clear Capital)</i>
          </p>
          <p>Primary UI developer, transforming award winning designs into award winning websites.</p>

          <div className="row mt-5 align-items-baseline">
            <div className="col-md-8">
              <h4>
                <a href="http://www.changepoint.com/">Changepoint (formerly eProject)</a>
              </h4>
            </div>
            <div className="col-md-4 text-end">
              <h6>2005 – 2008</h6>
            </div>
          </div>
          <p>
            <i>SaaS project management product</i>
          </p>
          <p>
            Founded the UI framework team. Responsible for the base UI framework for the entire
            company, integration of jQuery and SPA features to improve performance and usability.
            Responsible for key features like Capacity Planner and Salesforce Integration.
          </p>

          <div className="row mt-5 align-items-baseline">
            <div className="col">
              <h4>
                <a href="http://www.vmc.com/">VMC</a>
              </h4>
            </div>
            <div className="col text-end">
              <h6>2004 – 2005</h6>
            </div>
          </div>
          <p>
            <i>
              VMC is the global consulting wing of Volt, who are the key contracting company for
              Microsoft.
            </i>
          </p>
          <p>
            Maintained the internal portal that controls all the project management, trouble
            tickets, and help desk facilities for the company.
          </p>

          <h5 className="mt-5">Ancient History</h5>
          <ul>
            <li>JetStream Software (2004)</li>
            <li>Transenda (2003)</li>
            <li>Action Engine (2003)</li>
            <li>xLoom (2000 – 2003)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
