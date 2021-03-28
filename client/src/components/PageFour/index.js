import React from "react";
import { Container } from "semantic-ui-react";
import "./styles.css";

const PageFour = () => (
  <Container>
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="content_box_404">
                <h3 className="h2">
                  Oops, looks like your job search ended in the Stone Age!
                </h3>

                <p>
                  The page you are looking for is not available! But...now you
                  have a unique opportunity to look at skies as Neanderthals
                  did. Back then, they had no light pollution and were able to
                  see the bright night sky. Click the 'NASA' button and see what
                  happens!
                </p>

                <button className="link_404">
                  <a href="http://jobtrack-search.herokuapp.com/home">Home</a>
                </button>
                <button className="link_404">
                  <a href="https://apod.nasa.gov/apod" target="_blank">
                    NASA
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
);

export default PageFour;
