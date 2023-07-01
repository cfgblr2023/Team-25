import React from 'react'
import "../styles/footer.css"
export default function FooterComp() {
  return (
    <div className='footer'>
      <div className='sb__footer section__padding'>
        <div className='sb__footer-links'>
            <div className='sb__footer-links_div'>
                <h4>For Business</h4>
                <a href='/'>
                    <p>Employer</p>
                </a>
                <a href='/'>
                    <p>Health Plan</p>
                </a>
                <a href='/'>
                    <p>Individial</p>
                </a>
            </div>

            <div className='sb__footer-links_div'>
                <h4>Resources</h4>
                <a href='/'>
                    <p>Resource center</p>
                </a>
                <a href='/'>
                    <p>Testimonials</p>
                </a>
                <a href='/'>
                    <p>STV</p>
                </a>
            </div>
            
            <div className='sb__footer-links_div'>
                <h4>Partners</h4>
                <a href='/'>
                    <p>Swing tech</p>
                </a>
            </div>

            <div className='sb__footer-links_div'>
                <h4>Company</h4>
                <a href='/about'>
                    <p>About</p>
                </a>
                <a href='/'>
                    <p>Contact</p>
                </a>
                <a href='/'>
                    <p>Career</p>
                </a>
            </div>

            <div className='sb__footer-links_div'>
                <h4>Coming Soon on</h4>
                <div className='socialmedia'>
                    <p><i className="fa-brands fa-instagram"></i></p>
                    <p><i className="fa-brands fa-facebook"></i></p>
                    <p><i className="fa-brands fa-linkedin"></i></p>
                    <p><i className="fa-brands fa-twitter"></i></p>
                </div>
            </div>
        </div>

        <hr></hr>

        <div className='sb__footer-below'>
            <div className='sb__footer-copyright'>
                <p>
                    @{new Date().getFullYear()} Canasu. All right resereved.
                </p>
            </div>
            <div className='sb__footer-below-links'>
                <a href="/">
                    <div>
                        <p>
                            Terms & Conditions
                        </p>
                    </div>
                </a>
                
                <a href="/">
                    <div>
                        <p>
                            Privacy
                        </p>
                    </div>
                </a>
                <a href="/">
                    <div>
                        <p>
                            Security
                        </p>
                    </div>
                </a>
                <a href="/">
                    <div>
                        <p>
                            Cookie Declarations
                        </p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}
