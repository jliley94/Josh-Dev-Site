import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import PageSection from "../PageSection/pageSection"
import { SectionSize } from "../PageSection/pageSection";
import CornerButton from "../Header/cornerButton";

const ReturnOnlyView = ({ children }) => {
  const data = useStaticQuery(graphql`
    query ReturnOnlySiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <CornerButton text="Back" link="/"/>
      <div>
        <main>{children}</main>
      </div>
      <footer>
        <PageSection size={SectionSize.Fill} color="#fef" background="#666">
          Built by Joshua Liley
        </PageSection>
      </footer>
    </div>
  )
}

ReturnOnlyView.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ReturnOnlyView
