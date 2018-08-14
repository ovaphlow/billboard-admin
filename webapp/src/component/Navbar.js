import React from 'react'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="./index.html">#title</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className={this.props.active === 'index' ? 'nav-item active' : 'nav-item'}>
                <a href="./index.html" className="nav-link">
                  <i className="fa fa-fw fa-home"></i> 首页
                </a>
              </li>
              <li className={this.props.active === 'review' ? 'nav-item active' : 'nav-item'}>
                <a href="./review.html" className="nav-link">
                  <i className="fa fa-fw fa-check-square-o"></i> 资质审核
                </a>
              </li>
              <li className={this.props.active === 'complaints' ? 'nav-item active' : 'nav-item'}>
                <a href="./complaints.html" className="nav-link">
                  <i className="fa fa-fw fa-warning"></i> 举报/投诉
                </a>
              </li>
            </ul>
            <ul className="navbar-nav float-right">
              <li className={this.props.active === 'user' ? 'nav-item active' : 'nav-item'}>
                <a href="#" className="nav-link">
                  <i className="fa fa-fw fa-user"></i> 当前用户
                </a>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
}
