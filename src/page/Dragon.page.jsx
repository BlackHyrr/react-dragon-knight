import {addDragon, deleteDragon, setDragonError, setDragonName} from "../store/action/index.js";
import {useDispatch, useSelector} from "react-redux";
import {selectDragonError, selectDragonName, selectDragons} from "../store/selectors/index.js";

const DragonPage = () => {

    const dispatch = useDispatch()

    const name = useSelector(selectDragonName)
    const dragons = useSelector(selectDragons)
    const error = useSelector(selectDragonError)

    const handleChange = (e) => {
        dispatch(setDragonName(e.target.value))
    }

    const handleDragonSubmit = () => {
        if (name.trim() === '' || dragons.find((dragon) => dragon.name.toLowerCase() === name.toLowerCase().trim()) !== undefined) {
            dispatch(setDragonError('Invalid Data'))
            return;
        }
        dispatch(addDragon())
    }

    return (
        <div className={'mainPage'}>
            <div className={"headerPage"}>
                <h1>Dragon List</h1>
                <p>Number of dragons : {dragons.length}</p>
            </div>
            <div id={'content'}>
                <div id={"inputGroup"}>
                    <input type={"text"} placeholder={'Dragon name'} onChange={handleChange} value={name}/>
                    <button onClick={handleDragonSubmit}>Add</button>
                    {error !== "" && <p style={{color: "red"}}>{error}</p>}
                </div>
                <div id={"list"}>
                    <h4>List</h4>
                    {
                        dragons.length > 0 ?
                            dragons.map(dragon =>
                                <div key={dragon.id}>
                                    <span>{dragon.name}</span>
                                    <button onClick={() => dispatch(deleteDragon(dragon.id))}>X</button>
                                </div>
                            )
                            :
                            <p>No dragon</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default DragonPage;