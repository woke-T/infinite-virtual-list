import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.css'

function LongScrllView (props) {
  /**
   * @renderTemplate 列表每一项的渲染方式
   * @scroll 页面滚动触发的事件
   * @scrollToBottomHeight 距离页面底部距离为scrollToBottom时，触发触底事件
   * @scrollToBottom 页面触底事件
   * @height 页面高度
   * @list 所有的列表数据
   */

  const { list, height = '100vh', renderTemplate, scroll, scrollToBottom, scrollToBottomHeight = 0, cardHeight = 1 } = props
  const [holdUpHeight, setHoldUpHeight] = useState(0)  // 顶部隐藏快的高度
  const [listHeight, setListHeight] = useState(0)  // 列表的总高度
  const [virtualList, setVirtualList] = useState(list)
  const ref_card = useRef(null)
  const ref_wrap = useRef(null)

  let flag = true 


  useEffect(() => {
    calculateVirtualList()
    setListHeight(list.length * cardHeight)
  }, [list])

  useEffect(() => {
    calculateVirtualList()
  }, [holdUpHeight])

  // handle page scroll
  const handleScroll = e => {
    e.preventDefault()

    const scrollHeight = e.currentTarget.scrollHeight
    const scrollTop = e.currentTarget.scrollTop
    const clientHeight = e.currentTarget.clientHeight
    // call parents's function
    scroll(e)

    // set placeholder's height
    setHoldUpHeight(scrollTop)

    // execute scrllToBottm() when this page is scrllToBottomHeight from the bottom
    if (scrollTop + clientHeight + scrollToBottomHeight >= scrollHeight && flag) {
      flag = false
      scrollToBottom()
    } else if (!flag && scrollTop + clientHeight + scrollToBottomHeight <= scrollHeight) {
      flag = true
    }

    // complete virtualList's data when scrollTop equals to 0
    if (scrollTop === 0) {
      console.log('页面触顶')
    }

  }

  // complete virtualList's data
  const calculateVirtualList = () => {
    const startIndex = Math.ceil(holdUpHeight / cardHeight)
    const endIndex = Math.ceil(ref_wrap.current.clientHeight / cardHeight) + startIndex
    setVirtualList(list.slice(startIndex, endIndex))
  }

  return (
    <div onScroll={handleScroll} ref={ref_wrap} style={{ height: height }} className={styles.wrap}>
      <div className={styles.holdupBoard} style={{ height: `${listHeight}px` }} />
      <ul  className={styles.showList} style={{transform: `translate3d(0,${holdUpHeight}px,0)`}}>
        {virtualList.map(el => <li className={styles.cardItem} ref={ref_card} key={el.key}>{renderTemplate(el)}</li>)}
      </ul>
    </div>
  )
}

export default LongScrllView