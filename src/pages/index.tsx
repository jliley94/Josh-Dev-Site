import React from "react";
import { Link } from "gatsby";
import SectionedView from "../components/Layouts/SectionedView";
import SEO from "../components/seo";
import {
  FlexDirection,
  SectionType,
} from "../components/PageSection/sectionBlock";
import SectionBlock from "../components/PageSection/sectionBlock";
import Carousel from "../components/PageSection/carousel";
import PageSection from "../components/PageSection/pageSection";
import { SectionSize } from "../components/PageSection/pageSection";
import HoverZoom from "../components/HoverZoom/hoverZoom";
import UserImg from "../components/userImage";
import "../../src/styles/global.scss";

const NewDesign = () => (
  <SectionedView>
    <SectionBlock
      direction={FlexDirection.Vertical}
      type={SectionType.Normal}
      background={null}
    >
      <SEO title="New design" />

      {/* Section One: About */}
      <PageSection
        size={SectionSize.Fill}
        color="#ddd"
        background="url('https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')"
        padding="0"
        navigationPoint={1}
      >
        <HoverZoom
          padding="150px 0"
          background="url('https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')"
        >
          <h2>About me</h2>

          <SectionBlock
            direction={FlexDirection.Horizontal}
            type={SectionType.Normal}
            background={null}
          >
            {/* Section One: About - Image */}
            <PageSection
              size={SectionSize.X_Small}
              color="#ddd"
              background="#1a2838"
            >
              <UserImg />
            </PageSection>
            {/* Section One: About - Info */}
            <PageSection
              size={SectionSize.Wide}
              color="#112244"
              background="#ddd"
            >
              <h2>Hello, I'm Josh. A front-end web developer.</h2>
              <p style={{ textAlign: "left" }}>
                I've been working as a developer in Chester for 3 years now. I
                specialise in creating{" "}
                <span className="pf-standout">React</span> applications with{" "}
                <span className="pf-standout">Typescript</span>. However, I am
                familiar with a lot of other frameworks, libraries, and
                technologies because I work on various projects which require
                different expertise, allowing me to continually{" "}
                <span className="pf-standout">upskill</span> myself. I love
                problem-solving, whether it's diagnosing a technical issue,
                solving problems for clients, or just finding better ways to
                work effectively.
              </p>
            </PageSection>
          </SectionBlock>
        </HoverZoom>
      </PageSection>

      {/* Section Two: Projects */}
      <PageSection
        size={SectionSize.Fill}
        color="#666"
        background={null}
        navigationPoint={2}
        padding="80px 0"
      >
        <h2>What im working on</h2>
        <SectionBlock
          direction={FlexDirection.Horizontal}
          type={SectionType.Expandable}
          background={null}
        >
          {/* Section Two: Projects - P1 */}
          <PageSection
            size={SectionSize.Medium}
            color="#ddd"
            background="#1a2838"
          >
            <h3>To do</h3>

            <SectionBlock
              direction={FlexDirection.Vertical}
              type={SectionType.Spaced}
              background={null}
            >
              <PageSection
                size={SectionSize.Fill}
                color="#1a2838"
                background="#fff"
              >
                <h4>David's Website</h4>
              </PageSection>
              <PageSection
                size={SectionSize.Fill}
                color="#1a2838"
                background="#fff"
              >
                <h4>Dylans Website</h4>
              </PageSection>
            </SectionBlock>
          </PageSection>

          {/* Section Two: Projects - P2 */}
          <PageSection
            size={SectionSize.Medium}
            color="#ddd"
            background="#1a2838"
          >
            <h3>In progress</h3>
            <SectionBlock
              direction={FlexDirection.Vertical}
              type={SectionType.Spaced}
              background={null}
            >
              <PageSection
                size={SectionSize.Fill}
                color="#1a2838"
                background="#fff"
              >
                <h4>Alexa Skill</h4>
              </PageSection>
              <PageSection
                size={SectionSize.Fill}
                color="#1a2838"
                background="#fff"
              >
                <h4>Reddit Bot</h4>
              </PageSection>
            </SectionBlock>
          </PageSection>

          {/* Section Two: Projects - P2 */}
          <PageSection
            size={SectionSize.Medium}
            color="#ddd"
            background="#1a2838"
          >
            <h3>Completed</h3>
            <SectionBlock
              direction={FlexDirection.Vertical}
              type={SectionType.Spaced}
              background={null}
            >
              <PageSection
                size={SectionSize.Fill}
                color="#1a2838"
                background="#fff"
              >
                <h4>Portfolio Site</h4>
              </PageSection>
            </SectionBlock>
          </PageSection>
        </SectionBlock>
      </PageSection>

      {/* Section Three: Work */}
      <PageSection
        size={SectionSize.Fill}
        color="#ddd"
        background="#12a5aa"
        navigationPoint={3}
        padding="100px 0"
      >
        <h2>My Work History</h2>
        <Carousel
          startingSlide={1}
        >
          {/* Section Three: Work - Description */}
          <PageSection
            size={SectionSize.Fill}
            color="#112244"
            background="#ddd"
          >
            <h2>I graduated from Sheffield Hallam University</h2>
            <p>
              I studied Information technologies with Business from 2012-2016
            </p>

            <h4>Modules:</h4>
            <ul>
              <li>Ive worked on React projects</li>
              <li>Passed 2 certified microsoft exams</li>
              <li>Given talks internally and externally on programming</li>
              <li>Consulted with clients to architect a solution</li>
              <li>provided first line support to clients</li>
            </ul>
          </PageSection>
          {/* Section Three: Work - Highlights */}
          <PageSection
            size={SectionSize.Fill}
            color="#112244"
            background="#ddd"
          >
            <h2>I currently work at a SharePoint consultancy in Chester</h2>
            <p>
              As a developer at WM Reply, I work with a range of clients, that I
              provide bespoke solutions for their unique problems. This means
              I'm constantly collaborating on projects with different scopes.
              This enables me to grow many different skills, in a variety of
              areas.
            </p>

            <h4>Highlights:</h4>
            <ul>
              <li>Ive worked on React projects</li>
              <li>Passed 2 certified microsoft exams</li>
              <li>Given talks internally and externally on programming</li>
              <li>Consulted with clients to architect a solution</li>
              <li>provided first line support to clients</li>
            </ul>
          </PageSection>
        </Carousel>
      </PageSection>

      {/* Section Four: Skills */}
      <PageSection
        size={SectionSize.Fill}
        color="#ddd"
        background="#112244"
        navigationPoint={4}
        padding="80px 0"
      >
        <h2>This is the skills section</h2>
        <p>
          My skills include but are not limited to, writing random stuff that
          has no meaning
        </p>
      </PageSection>

      {/* Section Four: My Feed */}
      <PageSection
        size={SectionSize.Fill}
        color="#0066dd"
        background="transparent"
        navigationPoint={5}
        padding="100px 0"
      >
        <h2>My Feed</h2>

        <SectionBlock
          direction={FlexDirection.Horizontal}
          type={SectionType.Normal}
          background={null}
        >
          {/* Section Four: Mu Feed */}
          <PageSection
            size={SectionSize.Wide}
            color="#ddd"
            background="#0066dd"
          >
            <h2>Stuff im up to</h2>
            <p>Blah blah blah...</p>
          </PageSection>

          {/* Section Four: Mu Feed */}
          <PageSection
            size={SectionSize.Wide}
            color="#ddd"
            background="#0066dd"
          >
            <h2>What i've learnt this week</h2>
            <p>What ive learnt this week will shock you...</p>
          </PageSection>
        </SectionBlock>
      </PageSection>
    </SectionBlock>
  </SectionedView>
);

export default NewDesign;
