import Accordion from "../../../components/accordion/Accordion"
import Carousel from "../../../components/carousel/Carousel";
import Loader from "../../../components/loader/Loader";
import UseRandomRewards from "../../../hooks/useRandomRewards"
import { padding0_5 } from "../../../styles/index.css";


const RandomRewards = () => {

    const {randomRewards, isLoading} = UseRandomRewards();
    const listOfImages: string[] = randomRewards.map(reward => reward.imageReference);

  return (
    <Accordion title="Possible rewards">
        <div className={`${padding0_5}`}>
            {
                isLoading ? 
                <Loader/> : 
                <Carousel images={listOfImages}/>
            }
        </div>
    </Accordion>
  )
}

export default RandomRewards
