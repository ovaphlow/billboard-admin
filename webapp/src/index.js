import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/Navbar'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="./index.html">#title</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="./index.html">
                  <i className="fa fa-fw fa-home"></i> 首页
                </a>
              </li>
              <li className="nav-item active">
                <a href="#" className="nav-link">资质审核</a>
              </li>
            </ul>
            <ul className="navbar-nav float-right">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fa fa-fw fa-user"></i> 当前用户
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="contrainer">
          <div className="row">
            <div className="col-md-12">
              <p className="lead text-center">待审核资质</p>
              <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">
                  <h5>公司名</h5>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <h5>公司名</h5>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <h5>公司名</h5>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <h5>公司名</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'))
