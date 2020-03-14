# react-infinite-virtual-list
This is a infinite virtual list for react

## How to use?

```sh
npm install react-infinite-virtual-list --save
```

```sh
import LongScrollView from 'react-infinite-virtual-list'
import 'react-infinite-virtual-list/lib/main.min.css'

return (
  <div>
    <LongScrollView 
      height={'1000px'}
      list={list} // the data 
      renderTemplate={renderTemplate}
      scroll={pageScroll}
      cardHeight={100}
      scrollToBottomHeight={100}
      scrollToBottom={scrollToBottom} 
    />
  </div>
)
```

```sh
相关配置
height:                整个组件的高度
list:                  需要展示的所有数据，
renderTemplate:        数据渲染模版
scroll:                页面滚动的钩子
cardHeight             每个数据项的高度
scrollToBottomHeight   页面触底事件的触发高度
scrollToBottom         页面触底事件钩子
  </div>
)
```
