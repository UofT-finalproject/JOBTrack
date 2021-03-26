import React from "react";
import { Container } from "semantic-ui-react";
import "./style.css";

const Page_404New = () => (
  <Container>
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
              </div>

              <div class="contant_box_404">
                <h3 class="h2">
                  Oops, looks like your job search ended in a Stone Age!
                </h3>

                <p>The page you are looking for is not available!</p>

                <button href="" type="button" class="link_404">
                  Home
                </button>
                <button href="" type="button" class="link_404">
                  Job Search Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
);

export default Page_404New;
