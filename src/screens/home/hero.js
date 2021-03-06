import React from "react";
import { Link } from "react-static";
import { Wrapper } from "../../components/wrapper";
import styled from "styled-components";
import { ProjectBadge } from "formidable-oss-badges";

const HeroContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 5rem;
  padding: 0;
  position: relative;
  text-align: left;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 20rem;
    padding-left: 32rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  letter-spacing: 0.15em;
  margin: 0 0 2rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  @media (min-width: 768px) {
    font-size: 5.8rem;
    margin: 4rem 0 2rem;
    text-align: left;
  }
`;

const HeroBody = styled.p`
  font-family: "akkurat";
  letter-spacing: 0.08em;
  font-size: 1.4rem;
  line-height: 2.2rem;
  margin: 0 0 6rem;
  max-width: 30rem;
  text-align: left;
  width: 100%;
  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 2.8rem;
    max-width: 100%;
  }
`;

const HeroLogo = styled(ProjectBadge)`
  max-width: 16rem;
  position: relative;
  @media (min-width: 768px) {
    left: -3rem;
    max-width: auto;
    min-width: 32rem;
    position: absolute;
    top: 0;
  }
`;

const HeroNavList = styled.ul`
  border-top: 0.2rem solid #707070;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  padding: 2rem 0 0;
  text-align: center;
  width: 100%;
  @media (min-width: 768px) {
    margin: 10rem 0 0;
  }
  & li a {
    color: white;
    display: inline-block;
    font-size: 1.7rem;
    letter-spacing: 0.05em;
    margin: 0 2rem;
    transition: opacity 0.4s;
    text-transform: uppercase;
  }
  & li a:hover {
    color: #fc6986;
  }
`;

class Hero extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      animating: false,
      copied: false
    };
  }

  handleCopy(e) {
    e.preventDefault();
    this.setState({ animating: true, copied: true });
    setTimeout(() => {
      this.setState({ animating: false });
    }, "100");
    setTimeout(() => {
      this.setState({ copied: false });
    }, "3000");
  }

  render() {
    return (
      <Wrapper noPadding>
        <HeroContent>
          <HeroLogo
            description="Spectacle"
            abbreviation="S"
            color="#eb7287"
            number="03"
          />
          <HeroTitle>Spectacle</HeroTitle>
          <HeroBody>
            A React.js based library for creating sleek presentations using JSX
            syntax that gives you the ability to live demo your code.
          </HeroBody>
        </HeroContent>
        <HeroNavList>
          <li>
            <Link prefetch to="/docs">
              Docs
            </Link>
          </li>
          <li>
            <a
              title="Issues"
              href="https://www.github.com/FormidableLabs/spectacle/issues"
            >
              Issues
            </a>
          </li>
          <li>
            <a
              title="GitHub"
              href="https://github.com/FormidableLabs/spectacle"
            >
              GitHub
            </a>
          </li>
        </HeroNavList>
      </Wrapper>
    );
  }
}

export default Hero;
