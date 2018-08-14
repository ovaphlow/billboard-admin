import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/Navbar'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', list: [] }
    this.accept = this.accept.bind(this)
    this.reject = this.reject.bind(this)
  }

  accept(event) {
    axios({
      method: 'put',
      url: 'http://localhost:9001/api/review/' + event.target.getAttribute('data-id') + '/accept',
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      location.reload(true)
    }).catch(err => this.setState({ message: `服务器通信异常 ${err}` }))
  }

  reject(event) {
    axios({
      method: 'put',
      url: 'http://localhost:9001/api/review/' + event.target.getAttribute('data-id') + '/reject',
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      location.reload(true)
    }).catch(err => this.setState({ message: `服务器通信异常 ${err}` }))
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:9001/api/review/',
      responseType: 'json'
    }).then(response => {
      console.info(response.data)
      if (response.data.message) {
        this.setState({ message: response.data.message })
        return false
      }
      this.setState({ list: response.data.content })
    }).catch(err => this.setState({ message: `服务器通信异常 ${err}` }))
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
              <li className="nav-item">
                <a className="nav-link" href="./index.html">
                  <i className="fa fa-fw fa-home"></i> 首页
                </a>
              </li>
              <li className="nav-item active">
                <a href="#" className="nav-link">
                  <i className="fa fa-fw fa-check-square-o"></i> 资质审核
                </a>
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

        <div className="contrainer-fluid">
          <div className="col-md-12">
            <p className="lead text-center">待审核资质</p>
            <ul className="list-group">
              {this.state.list.map(item =>
                <li className="list-group-item list-group-item-action" key={item.id}>
                  <div className="row">
                    <div className="col-12">
                      <h5>{item.name}</h5>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          电话：{item.phone}
                        </li>
                        <li className="list-inline-item">
                          Email：{item.email}
                        </li>
                        <li className="list-inline-item">
                          {item.province} {item.city} {item.district}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <img src={item.licence_image} alt="资质图片" className="img-fluid img-thumbnail" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="btn-group pull-right">
                        <button type="button" className="btn btn-outline-primary" data-id={item.uuid} onClick={this.accept}>
                          <i className="fa fa-fw fa-check-square"></i> 审核通过
                        </button>
                        <button type="button" className="btn btn-outline-danger" data-id={item.uuid} onClick={this.reject}>
                          <i className="fa fa-fw fa-remove"></i> 退回
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'))
