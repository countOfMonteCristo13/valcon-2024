import { useState } from 'react'
import PropList from '../../components/propList/PropList'
import useProps from '../../hooks/useProps';
import InfiniteScroll from 'react-infinite-scroll-component';
import LandingPageSideBar from '../../layouts/landingPage/landingPageSideBar/LandingPageSideBar';
import Modal from '../../components/modal/Modal';
import AddPropForm from '../../layouts/addPropForm/AddPropForm';
import useUserStats from '../../hooks/useUserStats';
import Header from '../../components/header/Header';
import { backgroundSecondary, borderRadius1, box, flex1, flexAlignCenter, gap0_3, gap0_5, justifyBetween, padding0_5_1, padding1 } from '../../styles/index.css';
import { allPropsStyle, landingPageStyle } from './LandingPageStyle.css';
import { LuPlus } from 'react-icons/lu';
import { allRewardsHeaderButtonStyle, allRewardsHeaderStyle, headerButtonStyle, rewardsHeaderTitleStyle } from '../rewardsPage/RewardsPageStyle.css';
import './LandingPages.css'

const LandingPage = () => {
    const[showModal,setShowModal] = useState<boolean>(false);
    const [page,setPage] = useState(0);
    const sort = 'asc'
    const size = 10;

    const {propsList, isLoading: arePropsLoading, hasError: hasPropsError, totalPages} = useProps(page,size,sort);
    const {userStats, isLoading: areStatsLoading, hasError: hasUserStatsError} = useUserStats();

    

  return (
        <div className={`${flex1} ${landingPageStyle} ${backgroundSecondary}`}>
          <div className={allPropsStyle}>
          {
            showModal && <Modal closeModal={() => setShowModal(false)}><AddPropForm hideModal={() => setShowModal(false)} giveablePoints={userStats?.giveablePoints || 0} userId={userStats?.user.id || 0}/></Modal>
          }
            <Header className={`${flexAlignCenter} ${justifyBetween} ${padding1} ${allRewardsHeaderStyle}`}>
              <h2 className={rewardsHeaderTitleStyle}>
                All Props
              </h2>
              <div className={`${flexAlignCenter} ${gap0_5}`}>
                <div
                  className={`${box} ${headerButtonStyle} ${allRewardsHeaderButtonStyle}`}
                >
                <LuPlus size={32} />
                </div>
                <div className={`${box} ${padding0_5_1} ${borderRadius1} ${flexAlignCenter} ${gap0_3}`}>
                  <LuPlus size={32} />
                </div>
              </div>
            </Header>
              <div className={`${backgroundSecondary} landing-page__layout`}>
                <InfiniteScroll
                    className={`${backgroundSecondary} landing-page__props`}
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
              <LandingPageSideBar/>
        </div>
  )
}

export default LandingPage
