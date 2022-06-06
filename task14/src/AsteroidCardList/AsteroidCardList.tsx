import { ASTEROID_SHOW_MODE_DANGEROUS } from "../AsteroidConstants/AsteroidConstants";
import {
    Asteroid,
    AsteroidCard,
    AsteroidCardClickCallback,
} from "../AsteroidCard/AsteroidCard";
import { useContext } from "react";
import { ViewContext } from "../App";

export type AsteroidCardListProps = {
    list: Asteroid[];
    onClick?: AsteroidCardClickCallback;
};

export const AsteroidCardList = (props: AsteroidCardListProps) => {
    const { list, onClick } = props;
    const { state, dispatch } = useContext(ViewContext);

    let showList = list;

    if (state.showMode === ASTEROID_SHOW_MODE_DANGEROUS) {
        showList = showList.filter((item) => item.grade === "опасен");
    }

    if (list.length === 0) {
        return <div>List is empty</div>;
    } else {
        return (
            <div>
                {showList.map((item) => (
                    <AsteroidCard
                        name={item.name}
                        grade={item.grade}
                        date={item.date}
                        distance={item.distance}
                        size={item.size}
                        id={item.id}
                        onClick={onClick}
                    />
                ))}
            </div>
        );
    }
};
