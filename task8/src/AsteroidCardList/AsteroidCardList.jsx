import { ASTEROID_SHOW_MODE_DANGEROUS } from "../AsteroidConstants/AsteroidConstants"
import { AsteroidCard } from "../AsteroidCard/AsteroidCard";

export const AsteroidCardList = (props) => {
    const {list, showParams} = props;
    let showList = list;

    if(showParams.showMode === ASTEROID_SHOW_MODE_DANGEROUS){
        showList = showList.filter((item)=>item.grade==="опасен")
    }

    return showList.map(
        (item)=><AsteroidCard name={item.name} grade={item.grade} date={item.date}
                distance={item.distance} size={item.size} distanceMode={showParams.distanceMode}/>)

}