import React, {useState} from 'react';

const NavApp = () => {

    const [handleScope, setHandleScope] = useState(true)
    const [handleInput, setHandleInput] = useState(false)
    const [handleTags, setHandleTags] = useState(false)

    const handleClick = (e) => {
        if(e.target.id ==="1"){
            setHandleScope(true)
            setHandleInput(false)
            setHandleTags(false)
        }
        if(e.target.id ==="2"){
            setHandleScope(false)
            setHandleInput(true)
            setHandleTags(false)
        }
        if(e.target.id ==="3"){
            setHandleScope(false)
            setHandleInput(false)
            setHandleTags(true)
        }
    } 

    return (
        <div className='navApp'>
            <h1>My Library</h1>
            <div className="info">
            <img className='info' src='/static/icones/bouton-dinformation.png'></img>
            </div>
            <button className='import-button' value={"+ Import CSV"}>+ Import CSV</button>
            <button className='newScope-button' value={"New scope"}>New scope</button>
            <ul className='navAppFlow'>
                <li id='1' className={handleScope ? "active" : ""} onClick={handleClick}>My Scopes</li>
                <li id='2' className={handleInput? "active" : ""} onClick={handleClick}>My Inputs</li>
                <li id='3' className={handleTags ? "active" : ""} onClick={handleClick}>My Tags</li>
            </ul>
        </div>
    );
};

export default NavApp;