import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import LongScrollView from '../../src/index'
import './app.css'
import styels from './styles.css'

function App () {

  const [list, setList] = useState([])

  // 页面初始化
  useEffect(() => {
    getMoreData()
  }, [])

  const getMoreData = async () => {
    // 模拟异步请求
    setTimeout(() => {
      let data = []
      for (let n = list.length; n < list.length + 20; n++) {
        data.push({
          name: `dataList-${n}`,
          key: n,
          time: new Date().getTime()
        })
      }
      setList(list => [...list, ...data])
    }, 0)
  }

  // 页面滚动
  const pageScroll = () => {
    console.log('scroll')
  }

  // 页面滚动到底部
  const scrollToBottom = value => {
    console.log('页面触底')
    getMoreData()
  }

  const renderTemplate = el => <div className={styels.card} key={el.key}>{el.name}</div>


  return (
    <div>
      <LongScrollView height={'500px'} list={list} renderTemplate={renderTemplate} scroll={pageScroll} cardHeight={100} scrollToBottomHeight={100} scrollToBottom={scrollToBottom} />
    </div>
  )
}

render(<App />, document.getElementById("root"))