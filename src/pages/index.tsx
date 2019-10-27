import React from "react"
import { Link } from "gatsby"
import SectionedView from "../components/Layouts/SectionedView"
import SEO from "../components/seo"
import { FlexDirection } from "../components/PageSection/sectionBlock"
import SectionBlock from "../components/PageSection/sectionBlock"
import PageSection from "../components/PageSection/pageSection"
import UserImg from "../components/userImage"
import "../../src/styles/global.scss"

const NewDesign = () => (
  <SectionedView>
    <SectionBlock direction={FlexDirection.Vertical} background={null}>
      <SEO title="New design" />

      {/* Section One: About */}
      <PageSection
        size="fill"
        color="#ddd"
        background="url('https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')"
        padding="150px 0"
      >
        <h2>About me</h2> 

        <SectionBlock direction={FlexDirection.Horizontal} background={null}>
          {/* Section One: About - Image */}
          <PageSection size="x-small" color="#ddd" background="#1a2838">
            <UserImg />
          </PageSection>
          {/* Section One: About - Info */}
          <PageSection size="large" color="#112244" background="#ddd">
            <h1>This is the about section</h1>
            <p>
              this is some information about me, I will fill this in with gweneral information about how awesome i am. 
              But for now this nonsense will have to do as i dont have time to do it properly.
            </p>
          </PageSection>
        </SectionBlock>
      </PageSection>

      {/* Section Two: Projects */}
      <PageSection
        size="fill"
        color="#666"
        background={null}
      >
        <h1>This is the projects section</h1>
        <SectionBlock direction={FlexDirection.Horizontal} background={null}>
          {/* Section Two: Projects - P1 */}
          <PageSection size="med" color="#ddd" background="#0066dd">
            <h1>Project ive worked on</h1>
            <p>
              Information about that project...
            </p>
          </PageSection>

          {/* Section Two: Projects - P2 */}
          <PageSection size="med" color="#ddd" background="#0066dd">
            <h1>Project ive worked on</h1>
            <p>
              Information about that project...
            </p>
          </PageSection>

          {/* Section Two: Projects - P2 */}
          <PageSection size="med" color="#ddd" background="#0066dd">
            <h1>Project ive worked on</h1>
            <p>
              Information about that project...
            </p>
          </PageSection>
        </SectionBlock>
      </PageSection>

      {/* Section Three: Work */}
      <PageSection size="fill" color="#ddd" background="#12a5aa">
        <h1>This is the work section</h1>
        <p>
          I will put info about my job here i guess, what i do, skills, things ive worked on etc...
        </p>
      </PageSection>

      {/* Section Four: Skills */}
      <PageSection size="fill" color="#ddd" background="#f555ff">
        <h1>This is the skills section</h1>
        <p>My skills include but are not limited to, writing random stuff that has no meaning</p>
      </PageSection>

      {/* Section Four: Mu Feed */}
      <PageSection size="fill" color="#0066dd" background="transparent">
        <h1>My Feed</h1>

        <SectionBlock direction={FlexDirection.Horizontal} background={null}>   
          {/* Section Four: Mu Feed */}
          <PageSection size="large" color="#ddd" background="#0066dd">
            <h1>Stuff im up to</h1>
            <p>
              Blah blah blah...
            </p>
          </PageSection>

          {/* Section Four: Mu Feed */}
          <PageSection size="large" color="#ddd" background="#0066dd">
            <h1>What i've learnt this week</h1>
            <p>
              What ive learnt this week will shock you...
            </p>
          </PageSection>
        </SectionBlock>
      </PageSection>
    </SectionBlock>
  </SectionedView>
)

export default NewDesign
