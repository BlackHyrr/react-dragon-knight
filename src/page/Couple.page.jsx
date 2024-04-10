import {useDispatch, useSelector} from "react-redux";
import { selectCoupleError, selectCouples, selectDragons, selectKnights, selectSelectedDragon, selectSelectedKnight } from "../store/selectors";
import { addCouple, selectDragon, selectKnight } from "../store/action";

const CouplePage = () => {

    const dispatch = useDispatch()
    const dragons = useSelector(selectDragons)
    const knights = useSelector(selectKnights)
    const selectedDragon = useSelector(selectSelectedDragon)
    const selectedKnight = useSelector(selectSelectedKnight)
    const couples = useSelector(selectCouples)
    const error = useSelector(selectCoupleError)
    console.log(couples)
    console.log(error)
    const handleSelectDragon = (dragon) => {
        dispatch(selectDragon(dragon))
    }

    const handleSelectKnight= (knight) => {
        dispatch(selectKnight(knight));
    }

    const handleCreateCouple = () => {
        if (selectedDragon && selectedKnight) {
            dispatch(addCouple(selectedDragon, selectedKnight));
        }
    }

    const isInCouple = (entity, couples) => {
        return couples.some(couple => couple.dragon.id === entity.id || couple.knight.id === entity.id);
    }

    return (
        <div className={'mainPage'}>
            <div className={"headerPage"}>
                <h1>Couple List</h1>
                <p>Number of couples : </p>
            </div>
            <div id={'content'}>
                <div id={"list"}>
                    <h4>List of dragons</h4>
                    {
                        dragons.length > 0 ?
                            dragons.map(dragon =>
                                <div key={dragon.id}>
                                    <span>{dragon.name}</span>
                                    <button 
                                        onClick={() => handleSelectDragon(dragon)}
                                        disabled={isInCouple(dragon, couples)}
                                    >Select</button>
                                </div>
                            )
                            :
                            <p>No dragon</p>
                    }
                    <h4>List of knights</h4>
                    {
                        knights.length > 0 ?
                            knights.map(knight =>
                                <div key={knight.id}>
                                    <span>{knight.name}</span>
                                    |
                                    <span>{knight.age}</span>
                                    <button 
                                        onClick={() => handleSelectKnight(knight)}
                                        disabled={isInCouple(knight, couples)}
                                    >Select</button>
                                </div>
                            )
                            :
                            <p>No knight</p>
                    }
                    <h4>List of couples</h4>
                    {
                        couples.length > 0 ?
                            couples.map(couple =>
                                <div key={couple.id}>
                                    <span>{couple.dragon.name}</span>
                                    |
                                    <span>{couple.knight.name}</span>
                                </div>
                            )
                            :
                            <p>No couple</p>
                    }
                </div>
                {error !== "" && <p style={{color: "red"}}>{error}</p>}
                <button onClick={handleCreateCouple}>Link</button>
            </div>
        </div>
    );
};

export default CouplePage;