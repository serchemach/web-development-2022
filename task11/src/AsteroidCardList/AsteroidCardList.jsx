import { ASTEROID_SHOW_MODE_DANGEROUS } from "../AsteroidConstants/AsteroidConstants";
import { AsteroidCard } from "../AsteroidCard/AsteroidCard";
import { useContext } from "react";
import { AsteroidsContext } from "../App";

export const AsteroidCardList = (props) => {
    const { list } = props;
    const { state, dispatch } = useContext(AsteroidsContext);

    let showList = list;

    if (state.showMode === ASTEROID_SHOW_MODE_DANGEROUS) {
        showList = showList.filter((item) => item.grade === "опасен");
    }

    console.log(useContext(AsteroidsContext));

    if (list.length === 0) {
        return <div>List is empty</div>;
    } else {
        return showList.map((item) => (
            <AsteroidCard
                name={item.name}
                grade={item.grade}
                date={item.date}
                distance={item.distance}
                size={item.size}
            />
        ));
    }
};
