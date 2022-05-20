import { ASTEROID_SHOW_MODE_DANGEROUS } from "../AsteroidConstants/AsteroidConstants";
import { Asteroid, AsteroidCard } from "../AsteroidCard/AsteroidCard";
import { useContext } from "react";
import { AsteroidsContext } from "../App";

export type AsteroidCardListProps = {
    list: Asteroid[];
};

export const AsteroidCardList = (props: AsteroidCardListProps) => {
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
        return <div>
            {
                showList.map((item) => (
                    <AsteroidCard
                        name={item.name}
                        grade={item.grade}
                        date={item.date}
                        distance={item.distance}
                        size={item.size}
                    />
                ))
            }
        </div>;
    }
};
