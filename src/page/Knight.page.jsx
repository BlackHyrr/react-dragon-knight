import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectKnightError, selectKnights, selectNewKnight} from "../store/selectors/index.js";
import {addKnight, deleteDragon, deleteKnight, setKnightError, setKnightInfo} from "../store/action/index.js";

const KnightPage = () => {
    const dispatch = useDispatch()
    const knight = useSelector(selectNewKnight)
    const knights = useSelector(selectKnights)
    const error = useSelector(selectKnightError)

    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === 'age' && !value.match(/^[0-9]*$/)) {
            return;
        }
        dispatch(setKnightInfo({name, value}))
    }

    const handleSubmit = () => {
        if(knight.age <= 0 || knight.age === '') {
            dispatch(setKnightError("Please enter a valid age"))
            return
        }

        if(knight.name.trim() === '' || knights.find((kni) => kni.name.toLowerCase() === knight.name.toLowerCase().trim()) !== undefined) {
            dispatch(setKnightError("Please enter a valid and unique name"))
            return
        }
        dispatch(addKnight())
    }

    return (
        <div className={'mainPage'}>
            <div className={"headerPage"}>
                <h1>Knight List</h1>
                <p>Number of knights : {knights.length}</p>
            </div>
            <div id={'content'}>
                <div id={"inputGroup"}>
                    <input
                        type={"text"}
                        name={'name'}
                        value={knight.name}
                        placeholder={'Knight name'}
                        onChange={handleChange}
                    />
                    <input
                        type={"text"}
                        name={'age'}
                        value={knight.age}
                        placeholder={'Knight age'}
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit}>Add</button>
                    {error !== "" && <p style={{color: "red"}}>{error}</p>}
                </div>
                <div id={"list"}>
                    <h4>List</h4>
                    {
                        knights.length > 0 ?
                            knights.map(knight =>
                                <div key={knight.id}>
                                    <span>{knight.name}</span>
                                    |
                                    <span>{knight.age}</span>
                                    <button onClick={() => dispatch(deleteKnight(knight.id))}>X</button>
                                </div>
                            )
                            :
                            <p>No knight</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default KnightPage;