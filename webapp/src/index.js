import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './component/Navbar'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', list: [] }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Navbar active={'index'} />

        <div className="contrainer-fluid">
          <div className="col-md-12">
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'))
