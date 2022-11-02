import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.styl'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <Text className='text__primary'>Hello world!</Text>
      </View>
    )
  }
}
