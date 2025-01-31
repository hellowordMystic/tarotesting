import Taro, { Component } from '@tarojs/taro'
import Index from './pages/identification/identification'
import '@tarojs/async-await'

import './app.scss'

class App extends Component {

  config = {
    pages: [
      'pages/identification/identification',
      'pages/entry/entry'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
