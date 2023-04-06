import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import theme from '../global/theme'
import GlobalStyle from '../global/GlobalStyle'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      file(name: { regex: "/fav/" }) {
        publicURL
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Helmet
          htmlAttributes={{ lang: `en` }}
          title={data.site.siteMetadata.title}
          link={[
            {
              rel: 'icon',
              type: 'image/png',
              href: data.file.publicURL,
            },
          ]}
        >
          <meta name="description" content="Fullstack Team as a Service"></meta>
          <meta property="og:url" content="https://qteam.cloud" />
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Qteam Website"/>
          <meta property="og:description" content="Fullstack Team as a Service"/>
          <meta property="og:image" content="https://qteam.cloud/og-url.jpg"></meta>
        </Helmet>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
