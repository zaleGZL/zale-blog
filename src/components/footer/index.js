import React from 'react'
import { Link } from 'gatsby'

import './style.scss'

class Footer extends React.PureComponent {
  render() {
    const { siteDescription } = this.props
    return (
      <>
        <hr className="my-footer-divider" />
        <div className="my-footer-container">
          <div className="container has-text-centered">
            <Link className="has-text-link" to="/">{siteDescription}</Link>{' '}
            <span className="has-text-grey">Power By Gatsby</span>
          </div>
        </div>
      </>
    )
  }
}

export default Footer
