import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import PageSection from "../PageSection/pageSection"

import Header from "../Header/header"

const SectionedView = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <footer>
        <PageSection size="fill" color="#fef" background="#666">
          Built by Joshua Liley
        </PageSection>
      </footer>
    </div>
  )
}

SectionedView.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionedView
