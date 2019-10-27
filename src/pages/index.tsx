import React from "react"
import { Link } from "gatsby"
import SectionedView from "../components/Layouts/SectionedView"
import SEO from "../components/seo"
import { FlexDirection } from "../components/PageSection/sectionBlock"
import SectionBlock from "../components/PageSection/sectionBlock"
import PageSection from "../components/PageSection/pageSection"
import '../../src/styles/global.scss'

const NewDesign = () => (
  <SectionedView>
    <SectionBlock direction={FlexDirection.Vertical} background="transparent">
      <SEO title="New design" />

      {/* Section One: About */}
      <PageSection size="fill" color="#ddd" background="#0066dd">
        <h1>This is the about section</h1>
        <p>this is some information about me, I guess this will do for now</p>
      </PageSection>

      {/* Section Two: Projects */}
      <PageSection
        size="fill"
        color="#666"
        background="url('https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')"
      >
        <h1>This is the about section</h1>
        <SectionBlock direction={FlexDirection.Horizontal} background="#aaaa">
          <PageSection size="large" color="#ddd" background="#0066dd">
            <h1>This is the about section</h1>
            <p>
              this is some information about me, I guess this will do for now
            </p>
          </PageSection>
          <PageSection size="large" color="#ddd" background="#0066dd">
            <h1>This is the about section</h1>
            <p>
              this is some information about me, I guess this will do for now
            </p>
          </PageSection>
        </SectionBlock>
      </PageSection>

      {/* Section Three: Work */}
      <PageSection size="small" color="#ddd" background="#12a5aa">
        <h1>This is the about section</h1>
        <p>this is some information about me, I guess this will do for now</p>
      </PageSection>

      {/* Section Four: Skills */}
      <PageSection size="large" color="#ddd" background="#f555ff">
        <h1>This is the about section</h1>
        <p>this is some information about me, I guess this will do for now</p>
      </PageSection>

      {/* Section Four: Skills */}
      <PageSection size="fill" color="#0066dd" background="transparent">
        <h1>This is the about section</h1>
        <p>this is some information about me, I guess this will do for now</p>

        <SectionBlock direction={FlexDirection.Horizontal} background={null}>
          <PageSection size="large" color="#ddd" background="#0066dd">
            <h1>This is the about section</h1>
            <p>
              this is some information about me, I guess this will do for now
            </p>
          </PageSection>
          <PageSection size="large" color="#ddd" background="#0066dd">
            <h1>This is the about section</h1>
            <p>
              this is some information about me, I guess this will do for now
            </p>
          </PageSection>
        </SectionBlock>

      </PageSection>

      <Link to="/">Go back to the homepage</Link>
    </SectionBlock>
  </SectionedView>
)

export default NewDesign
