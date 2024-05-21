import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
     {/*<Link to='https://bentap.com/me/ufukcam' className="button -primary">Get in touch &rarr;</Link> */}
        <a href="https://bentap.com/me/ufukcam" target="_blank" className="button -primary">Get in touch &rarr;</a>
      </div>
    )}
  />
)
