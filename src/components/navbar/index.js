import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'

import './style.scss'

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isShowBurgerMenu: false, // 是否显示菜单(移动设备上)
    }
  }

  /**
   * 设置组件的 state
   * @param {String} field 字段
   * @param {*} value 值
   */
  setStateValue = (field, value) => {
    this.setState({
      [field]: value,
    })
  }

  render() {
    const { siteTitle, location } = this.props
    const { isShowBurgerMenu } = this.state

    return (
      <>
        <nav className="navbar is-link has-shadow">
          <div className="container my-navbar-container">
            <div className="navbar-brand">
              <Link
                className="navbar-item title is-4 is-marginless has-text-weight-bold"
                to="/"
              >
                {siteTitle}
              </Link>
              <div
                role="button"
                className={classNames('navbar-burger burger', {
                  'is-active': isShowBurgerMenu,
                })}
                onClick={() => {
                  this.setStateValue('isShowBurgerMenu', !isShowBurgerMenu)
                }}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </div>
            </div>

            <div
              className={classNames('navbar-menu', {
                'is-active': isShowBurgerMenu,
              })}
            >
              <div className="navbar-start">
                <Link
                  className={classNames('navbar-item', {
                    'is-active': location.pathname === '/',
                  })}
                  to="/"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
