import React from 'react'

import NavBar from '../navbar'
import Footer from '../footer'

import '../../style/index.scss'

class Layout extends React.PureComponent {
  render() {
    const { children } = this.props

    return (
      <>
        <NavBar {...this.props} />
        {children}
        <Footer {...this.props} />
      </>
    )
  }
}

export default Layout
