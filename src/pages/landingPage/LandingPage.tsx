import { useState } from 'react'
import PropList from '../../components/propList/PropList'
import useProps from '../../hooks/useProps';
import InfiniteScroll from 'react-infinite-scroll-component';
import MenuBar from '../../containers/menuBar/MenuBar';
import logo from '../../assets/propsLogo1.png'
import './LandingPage.css'

const LandingPage = () => {

    const [size,setSize] = useState(10);
    const [page,setPage] = useState(0)
    const sort = 'asc'

    const {propsList, isLoading, hasError, totalPages} = useProps(page,size,sort);

  return (
    <div className='landing-page'>
            <div className='landing-page__heading'>
              <img className='landing-page__heading__logo' src={logo} alt="logo" />
              <h2 className='landing-page__heading__title'>Props</h2>
            </div>
            <div className='landing-page__layout'>
              <MenuBar/>
              <InfiniteScroll
                  className='landing-page__props'
                  dataLength={propsList.length}
                  next={() => setPage(prevPage => prevPage + 1)}
                  hasMore={page < totalPages}
                  loader={<h4 style={{ textAlign: 'center', paddingBottom:'1rem'}}>Loading...</h4>}
                  endMessage={
                  <p style={{ textAlign: 'center', paddingBottom:'1rem'}}>
                  <b>Yay! You have seen it all</b>
                  </p>
                  
                  }
                  scrollableTarget={'prop-list'}
                  refreshFunction={() => setPage(0)}
                  pullDownToRefresh
                  pullDownToRefreshThreshold={50}
                  pullDownToRefreshContent={
                    <h3 style={{ textAlign: 'center', paddingBottom:'1rem'}}>&#8595; Pull down to refresh</h3>
                  }
                  releaseToRefreshContent={
                    <p style={{ textAlign: 'center', paddingBottom:'1rem'}}>&#8593; Release to refresh</p>
                  }
              >
                  <PropList propList={propsList}/>
              </InfiniteScroll>
            </div>
        </div>
  )
}

export default LandingPage
