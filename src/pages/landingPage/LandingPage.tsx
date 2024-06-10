import { useState } from 'react'
import PropList from '../../components/propList/PropList'
import useProps from '../../hooks/useProps';
import './LandingPage.css'
import InfiniteScroll from 'react-infinite-scroll-component';

const LandingPage = () => {

    const [size,setSize] = useState(10);
    const [page,setPage] = useState(0)
    const sort = 'asc'

    const {propsList, isLoading, hasError, totalElements} = useProps(page,size,sort);

  return (
    <div className='landing-page'>
            <InfiniteScroll
                className='landing-page__props'
                dataLength={propsList.length}
                next={() => setSize(prevSize => prevSize + 1)}
                hasMore={size <= totalElements}
                loader={<h4>Loading...</h4>}
                endMessage={
                <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
                </p>
                
                }
                scrollableTarget={'landing-page'}
                refreshFunction={() => setSize(10)}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                  <h3 className='full-width'>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                  <p className='full-width'>&#8593; Release to refresh</p>
                }
            >
                <PropList propList={propsList}/>
            </InfiniteScroll>
        </div>
  )
}

export default LandingPage
