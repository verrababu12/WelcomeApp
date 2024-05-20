// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: true,
  }

  onSubscribe = () => {
    const {isSubscribed} = this.state
    this.setState({isSubscribed: !isSubscribed})
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thankyou! Happy Learning</p>
        <button className="button" type="button" onClick={this.onSubscribe}>
          {isSubscribed ? 'Subscribe' : 'Subscribed'}
        </button>
      </div>
    )
  }
}
export default Welcome
