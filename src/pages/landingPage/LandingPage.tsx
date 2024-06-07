import { useState } from 'react'
import PropList from '../../components/propList/PropList'
import useProps from '../../hooks/useProps';
import './LandingPage.css'
import Button from '../../components/button/Button';

const LandingPage = () => {

    const [size,setSize] = useState(5);
    const [page,setPage] = useState(0)
    const sort = 'asc'

    const {propsList, isLoading, hasError} = useProps(page,size,sort);

    const nextPage = () => {
        setPage(page + 1);
    };

    const prevPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    if(isLoading){
        return (
            <h1>Loading</h1>
        )
    }

  return (
    <div className='landing-page'>
        <div className='landing-page__props'>
            <PropList propList={propsList}/>
            <div className='landing-page__props__pagination'>
                <Button title='Previous' onClick={prevPage} className='landing-page__props__pagination__button'/>
                <Button title='Next' onClick={nextPage} className='landing-page__props__pagination__button'/>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
