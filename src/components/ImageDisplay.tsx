import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
export interface IDisplayImageProps {
  imageName: string;
}

interface Data {
  placeholderImage: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}
export interface IDisplayImageState {
  data: Data;
}
export default class DisplayImage extends React.Component<IDisplayImageProps, IDisplayImageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: null
    }
  }

  public componentDidMount() {
    // const data = UserImg();
    // this.setState({...this.state, data });
  }
  public render() {
  
    return (      
      <StaticQuery
        query={graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    originalName
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const image = data.allImageSharp.edges.find(
            edge => edge.node.fluid.originalName === this.props.imageName
          )
          if (!image) {
            return null
          }
          return <Img fluid={image.node.fluid} className="pf-displayedImage" />
        }}
      />
    );
  }
}

// const DisplayImage: React.SFC<IDisplayImageProps> = ({
//   imageName,
// }) => {
// // 4
//   const data: Data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "$imageName" }) {
//         childImageSharp {
//           fluid(maxWidth: 500) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
  
//   return (
//     <Img fluid={data.placeholderImage.childImageSharp.fluid} />
//   );
// };
// // 5
// export default DisplayImage;