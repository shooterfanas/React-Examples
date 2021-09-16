import React from "react";
import Footer from "../components/footer";
import Icon from "../components/icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About React</Footer.Title>
            <Footer.Link href="#">React Begin</Footer.Link>
            <Footer.Link href="#">Context Api</Footer.Link>
            <Footer.Link href="#">Hooks</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>APIs</Footer.Title>
            <Footer.Link href="#">JSON Placeholder</Footer.Link>
            <Footer.Link href="#">Rest API</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Programming Languages</Footer.Title>
            <Footer.Link href="#">HTML</Footer.Link>
            <Footer.Link href="#">CSS</Footer.Link>
            <Footer.Link href="#">JavaScript</Footer.Link>
            <Footer.Link href="#">React JS</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#">
              <Icon className="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-youtube" />
              YouTube
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-twitter" />
              Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
