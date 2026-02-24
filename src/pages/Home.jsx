export default function Home() {
  return (
    <>
      <div className="container my-5">
        <section>
          <div className="row pe-lg-5">
            <div className="col-md-7 d-flex align-items-center">
              <div>
                <h3 className="mb-4">Engineering</h3>
                <p>
                  I'm an <a href="https://www.linkedin.com/in/krisgray/">Engineering Manager at Airbnb</a>,
                  leading the team responsible for how guests and hosts share their experiences
                  through reviews. Before moving into management I spent over a decade as a
                  hands-on engineer at Salesforce and Airbnb building products used by millions
                  of people every day.
                </p>
                <p>
                  <a href="/resume">Full résumé →</a>
                </p>
              </div>
            </div>
            <div className="col-md-5 mb-4">
              <picture>
                <source srcSet="/media/profile-image.webp" />
                <img
                  src="/media/profile-image.jpg"
                  height="533"
                  width="400"
                  className="img-thumbnail"
                  loading="lazy"
                  alt="Kris Gray"
                />
              </picture>
            </div>
          </div>
        </section>
      </div>

      <div className="container my-5">
        <section>
          <div className="row pe-lg-5">
            <div className="col-md-5 d-flex">
              <div>
                <h3 className="mb-4">Geeking out on Books</h3>
                <p>I love to find that next great book.</p>
                <div id="gr_updates_widget">
                  <iframe
                    id="the_iframe"
                    src="https://goodreads.com/widgets/user_update_widget?height=500&num_updates=5&user=6322230&width=390"
                    width="400"
                    height="500"
                    frameBorder="0"
                    loading="lazy"
                    title="Goodreads updates"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-center">
              <div>
                <h3 className="mb-4">Recommendations</h3>
                <p>
                  I try to recommend stuff that I haven't heard others talking about. Everyone
                  knows about{' '}
                  <a href="https://www.goodreads.com/book/show/375802.Ender_s_Game">Enders Game</a>{' '}
                  (My first love from middle school, my favorite book, even if the authors crazy),
                  but these are those rare books I somehow came upon that I think everyone should
                  experience.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a href="https://www.goodreads.com/book/show/40523931-the-light-brigade">
                      The Light Brigade
                    </a>{' '}
                    - This book broke me for a while.
                  </li>
                  <li className="list-group-item">
                    <a href="https://www.goodreads.com/book/show/17333324-ancillary-justice?ac=1&from_search=true&qid=1snSSNUl2n&rank=1">
                      Ancillary Justice (and sequels)
                    </a>{' '}
                    - For the first half you have no idea whats going on. Still worth just reading
                    and absorbing the world to experience whats to come.
                  </li>
                  <li className="list-group-item">
                    <a href="https://www.goodreads.com/book/show/37794149-a-memory-called-empire">
                      A Memory Called Empire
                    </a>{' '}
                    - Feel a bit silly trying to convince people that a Hugo Award Winner is worth
                    reading, but this series is fantastic. Run to the book store for it.
                  </li>
                  <li className="list-group-item">
                    <a href="https://www.goodreads.com/book/show/26114545-too-like-the-lightning">
                      Too Like the Lightning
                    </a>{' '}
                    - Unlike anything I've read. An epic story told as if by a poet.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
