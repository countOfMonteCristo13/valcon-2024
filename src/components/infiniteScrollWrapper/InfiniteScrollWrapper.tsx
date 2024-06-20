import InfiniteScroll from "react-infinite-scroll-component"
import { backgroundSecondary, directionColumn, flexJustifyCenter, fullWidth, gap1, paddingX1 } from "../../styles/index.css"
import { ReactNode } from "react"
import { infiniteScrollMessageStyle } from "./InfiniteScrollWrapperStyle.css"

type InfiniteScrollWrapperProps = {
    children:ReactNode,
    listLength:number,
    refreshFuntion: () => void,
    nextFuntion: () => void,
    hasMore:boolean
}

const InfiniteScrollWrapper = ({children, listLength, refreshFuntion, nextFuntion, hasMore}:InfiniteScrollWrapperProps) => {
    console.log(listLength);
    console.log(hasMore);
  return (
        <InfiniteScroll
          className={`${backgroundSecondary} ${fullWidth} ${flexJustifyCenter} ${directionColumn} ${gap1} ${paddingX1}`}
          dataLength={listLength}
          next={nextFuntion}
          hasMore={hasMore}
          loader={<h4 className={infiniteScrollMessageStyle}>Loading...</h4>}
          endMessage={
            <p className={infiniteScrollMessageStyle}>
              <b>Yay! You have seen it all</b>
            </p>

          }
          refreshFunction={refreshFuntion}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <h3 className={infiniteScrollMessageStyle}>&#8595; Pull down to refresh</h3>
          }
          releaseToRefreshContent={
            <p className={infiniteScrollMessageStyle}>&#8593; Release to refresh</p>
          }
        >
          {children}
        </InfiniteScroll>
  )
}

export default InfiniteScrollWrapper
