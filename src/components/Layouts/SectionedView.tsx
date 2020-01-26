import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import PageSection from "../PageSection/pageSection"
import { SectionSize } from "../PageSection/pageSection";
import Header from "../Header/header"

const SectionedView = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SectionedViewSiteTitleQuery {
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
      {/* <footer>
        <PageSection size={SectionSize.Fill} color="#fef" background="#666">
          Built by Joshua Liley
        </PageSection>
      </footer> */}
    </div>
  )
}

SectionedView.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionedView
