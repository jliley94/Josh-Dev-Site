import React from "react";
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
import SkillsContainer from "./../components/SkillIndicator/skillsContainer";
import SkillIndicator from "../components/SkillIndicator/skillIndicator";
import { SkillIconType } from "../components/SkillIndicator/skills.modules";
import ContactForm from "../components/ContactForm/ContactForm";
import SocialIcons from "../components/SocialIcons/SocialIcons";
import DisplayImage from "../components/ImageDisplay";

export interface IPortfolioState {
  searchQuery: string;
}

export default class Portfolio extends React.Component<{}, IPortfolioState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }

  public render() {
    return (
      <SectionedView>
        <SEO title="My Portfolio" />
        <SectionBlock
          direction={FlexDirection.Vertical}
          type={SectionType.Normal}
          background={null}
        >
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
                    I've been working as a developer in Chester for 3 years now.
                    I specialise in creating{" "}
                    <span className="pf-standout">React</span> applications with{" "}
                    <span className="pf-standout">Typescript</span>. However, I
                    am familiar with a lot of other frameworks, libraries, and
                    technologies because I work on various projects which
                    require different expertise, allowing me to continually{" "}
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
                background="#112244"
              >
                <h3>To do</h3>

                <SectionBlock
                  direction={FlexDirection.Vertical}
                  type={SectionType.Spaced}
                  background={null}
                >
                  <PageSection
                    size={SectionSize.Fill}
                    color="#112244"
                    background="#fff"
                  >
                    <h4>Gain another Microsoft qualification</h4>
                  </PageSection>
                  <PageSection
                    size={SectionSize.Fill}
                    color="#112244"
                    background="#fff"
                  >
                    <h4>Learn another language</h4>
                  </PageSection>
                </SectionBlock>
              </PageSection>

              {/* Section Two: Projects - P2 */}
              <PageSection
                size={SectionSize.Medium}
                color="#ddd"
                background="#112244"
              >
                <h3>In progress</h3>
                <SectionBlock
                  direction={FlexDirection.Vertical}
                  type={SectionType.Spaced}
                  background={null}
                >
                  <PageSection
                    size={SectionSize.Fill}
                    color="#112244"
                    background="#fff"
                  >
                    <h4>Build an Alexa skill</h4>
                  </PageSection>
                  <PageSection
                    size={SectionSize.Fill}
                    color="#112244"
                    background="#fff"
                  >
                    <h4>Create a Reddit bot</h4>
                  </PageSection>
                </SectionBlock>
              </PageSection>

              {/* Section Two: Projects - P2 */}
              <PageSection
                size={SectionSize.Medium}
                color="#ddd"
                background="#112244"
              >
                <h3>Completed</h3>
                <SectionBlock
                  direction={FlexDirection.Vertical}
                  type={SectionType.Spaced}
                  background={null}
                >
                  <PageSection
                    size={SectionSize.Fill}
                    color="#112244"
                    background="#fff"
                  >
                    <h4>This Portfolio Site</h4>
                  </PageSection>
                </SectionBlock>
              </PageSection>
            </SectionBlock>
          </PageSection>

          {/* Section Three: Work */}
          <PageSection
            size={SectionSize.Fill}
            color="#565656"
            background="#ddd"
            navigationPoint={3}
            padding="100px 0"
          >
            <h2>My Work History</h2>
            <Carousel startingSlide={1}>
              {/* Section Three: Work - Description */}
              <PageSection
                size={SectionSize.Fill}
                color="#565656"
                background="#a88e82"
                padding="3vh 4vh"
              >
                <h2>I graduated from Sheffield Hallam University</h2>
                <h4>
                  BSc Honours in IT with Business Technologies | Grade: 2.1
                </h4>
                <p>
                  This course covered a wide range of computing topics including
                  web development, software design, project management, database
                  administration and design, and system analysis. This gave me
                  experience with Javascript, CSS, C#, PHP, SQL, and Visual
                  Basic, as well as other areas such as giving presentations,
                  working to deadlines, and working within a team
                </p>

                <SectionBlock
                  direction={FlexDirection.Horizontal}
                  type={SectionType.Normal}
                  background="transparent"
                >
                  <PageSection
                    size={SectionSize.Fill}
                    color="#565656"
                    background="#a88e82"
                    padding="3vh 4vh"
                  >
                    <h4>Projects Included:</h4>
                    <ul>
                      <li>Web Applications (PHP, SQL, JavaScript)</li>
                      <li>
                        Software Applications (Java, Android, Visual Basic)
                      </li>
                      <li>Building and Configuring Computer Systems</li>
                      <li>Creating and managing data within databases</li>
                    </ul>
                  </PageSection>
                  <PageSection
                    size={SectionSize.Fill}
                    color="inherit"
                    background="transparent"
                  >
                    <h4>Modules Included:</h4>
                    <ul>
                      <li>Advanced Web Technologies</li>
                      <li>Data Warehousing and Data Mining</li>
                      <li>Internet Entrepreneurship</li>
                      <li>Object-Orientated Programming</li>
                      <li>Interactive Web Applications</li>
                      <li>E-Business Technologies</li>
                      <li>Planning & Project Management</li>
                    </ul>
                  </PageSection>
                </SectionBlock>
              </PageSection>
              {/* Section Three: Work - Highlights */}
              <PageSection
                size={SectionSize.Fill}
                color="#565656"
                background="#a88e82"
                padding="3vh 4vh"
              >
                <h2>I currently work at a SharePoint consultancy in Chester</h2>
                <p>
                  As a developer at WM Reply, I work with a range of clients,
                  providing bespoke solutions to their unique problems. This
                  means I'm constantly collaborating on projects with different
                  scopes, enabling me to grow many different skills, in a
                  variety of areas.
                </p>
                <SectionBlock
                  direction={FlexDirection.Horizontal}
                  type={SectionType.Normal}
                  background="transparent"
                >
                  <PageSection
                    size={SectionSize.Fill}
                    color="inherit"
                    background="transparent"
                  >
                    <h4>Highlights:</h4>
                    <ul>
                      <li>Passing 2 Microsoft certified exams</li>
                      <li>
                        Given talks internally and externally on programming
                      </li>
                      <li>Consulted with clients to architect solutions</li>
                      <li>provided second line support to clients</li>
                    </ul>
                  </PageSection>
                  <PageSection
                    size={SectionSize.Fill}
                    color="inherit"
                    background="transparent"
                  >
                    <h4>Microsoft Certified Exams</h4>
                    <SkillIndicator
                      icon="Cert2.png"
                      iconType={SkillIconType.Image}
                      name="Azure Fundamentals"
                      extraClasses={["horizontal"]}
                    />
                    
                    <SkillIndicator
                      icon="Cert1.png"
                      iconType={SkillIconType.Image}
                      name="Programming in HTML5 with JavaScript and CSS3"
                      extraClasses={["horizontal"]}
                    />
                  </PageSection>
                </SectionBlock>
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
            <h2>My Skills</h2>

            <SkillsContainer />
          </PageSection>

          {/* Section Four: My Feed */}
          <PageSection
            size={SectionSize.Wide}
            color="#112244"
            background="transparent"
            navigationPoint={5}
            padding="50px 0"
          >

            <h2>Contact</h2>

            <SectionBlock
              direction={FlexDirection.Vertical}
              type={SectionType.Normal}
              background="transparent"
            >
              <PageSection
                size={SectionSize.Fill}
                color="#112244"
                background="transparent"
                padding="50px 0"
              >

                <ContactForm />

              </PageSection>

              <PageSection
                size={SectionSize.Fill}
                color="#112244  "
                background="transparent"
                padding="0"
              >
                <SocialIcons linkedIn={true} github={true} email={false} size="4.5rem" />
              </PageSection>
            </SectionBlock>
          </PageSection>
        </SectionBlock>
      </SectionedView>
    );
  }
}
