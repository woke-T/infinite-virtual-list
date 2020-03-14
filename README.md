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
  <div className={styles.wrap}>
    <LongScrollView height={'1000px'} list={list} renderTemplate={renderTemplate} scroll={pageScroll} cardHeight={100} scrollToBottomHeight={100} scrollToBottom={scrollToBottom} />
  </div>
)
```
