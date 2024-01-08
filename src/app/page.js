import Image from 'next/image';
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Banner from '../../public/banner.webp'
import Img1 from '../../public/img1.jpg'
import Img2 from '../../public/img2.jpg'
import Img3 from '../../public/img3.jpg'

export default function Home() {
  return (
    <Container fluid className={styles.cmpad}>
      <Row>
        <Col>

          <div className={styles.pad}>

            <a href="" className={styles.cross}>
              <span>&#10005;</span>
            </a>

            <h1>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</h1>

            <Image className={styles.banner} src={Banner}
              alt="" />

            <p className={styles.para}>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>

            <div className={styles.mauto}>
              <a href="" className={styles.bttn}>Visit Website</a>
            </div>



            <div className={styles.section}>
              <Row>


                <Col lg="4">
                  <Image className={styles.secimg} src={Img3}
                    alt="" />
                  <p className={styles.para}>Explore large, destructible environments where no two games are ever the same.</p>
                </Col>
                <Col lg="4">
                  <Image className={styles.secimg} src={Img2}
                    alt="" />
                  <p className={styles.para}>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
                </Col>
                <Col lg="4">
                  <Image className={styles.secimg} src={Img1}
                    alt="" />
                  <p className={styles.para}>Discover even more ways to play across thousands of creator-made game genres</p>
                </Col>
              </Row>
            </div>



            <div className={styles.section}>
              <h1>Our Contribution</h1>
              <p className={styles.para}>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
              <Row>
                <Col lg="4">
                  <h2 className={styles.counter}>5M</h2>
                  <p className={styles.para}>Daily User Engagements</p>
                </Col>
                <Col lg="4">
                  <h2 className={styles.counter}>$500K</h2>
                  <p className={styles.para}>Revenue Surge for an Platform</p>
                </Col>
                <Col lg="4">
                  <h2 className={styles.counter}>10X</h2>
                  <p className={styles.para}>ROAS on all our marketing campaigns</p>
                </Col>
              </Row>
            </div>





            <div className={styles.section}>
              <h1>Interested in delving deeper into the project?</h1>
              <p className={styles.para}>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <a href="mailto:hello@abc.com" className={styles.link}>hello@abc.com</a> or give us a call at <a href="tel:+91 480 20802730" className={styles.link}>+91 480 20802730</a>.</p>
              <div className={styles.gbtn}>
                <a href="" className={styles.bttntra}>Ring Us On Skype</a>
                <a href="" className={styles.bttn}>Contact Us</a>
              </div>

            </div>






            <p className={styles.para}>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>


          </div>



        </Col>
      </Row>
    </Container>
  )
}
