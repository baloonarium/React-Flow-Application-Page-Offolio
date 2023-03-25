import React, {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';

const LeftNav = () => {
    
    const reseau = useRef(null)
    const stat = useRef(null)
    const list = useRef(null)
    const echange = useRef(null)
    const build = useRef(null)

    const [handleReseau, setHandleReseau] = useState(false)
    const [handleStat, setHandleStat] = useState(false)
    const [handleList, setHandleList] = useState(false)
    const [handleBuild, setHandleBuild] = useState(true)
    const [handleEchange, setHandleEchange] = useState(false)

    const handleClick = (e) => {
        if(e.target.id === "1") {
            setHandleReseau(true)
            setHandleStat(false)
            setHandleList(false)
            setHandleBuild(false)
            setHandleEchange(false)
        }
        if(e.target.id === "2") {
            setHandleReseau(false)
            setHandleStat(true)
            setHandleList(false)
            setHandleBuild(false)
            setHandleEchange(false)
        }
        if(e.target.id === "3") {
            setHandleReseau(false)
            setHandleStat(false)
            setHandleList(true)
            setHandleBuild(false)
            setHandleEchange(false)
        }
        if(e.target.id === "4") {
            setHandleReseau(false)
            setHandleStat(false)
            setHandleList(false)
            setHandleBuild(true)
            setHandleEchange(false)
        }
        if(e.target.id === "5") {
            setHandleReseau(false)
            setHandleStat(false)
            setHandleList(false)
            setHandleBuild(false)
            setHandleEchange(true)
        }

    }
    

            const mouseEnterReseau = () => {
                
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    reseau.current,
                    {
                        rotate: -15,
                    },
                    "-=2"
                );
                TL.play();

            }
    
            const mouseLeaveReseau = () => {
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    reseau.current,
                    {
                        rotate: 0,
                    },
                    "-=2"
                );
                TL.play();
    
            }
    
            const mouseEnterStat = () => {
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    stat.current,
                    {
                        rotate: -15,
                    },
                    "-=2"
                );
                TL.play();
            }
    
            const mouseLeaveStat = () => {
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    stat.current,
                    {
                        rotate: 0,
                    },
                    "-=2"
                );
                TL.play();
    
            }
    
            const mouseEnterList = () => {
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    list.current,
                    {
                        rotate: -15,
                    },
                    "-=2"
                );
                TL.play();
            }
    
            const mouseLeaveList = () => {
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    list.current,
                    {
                        rotate: 0,
                    },
                    "-=2"
                );
                TL.play();
    
            }
    
            const mouseEnterEchange = () => {
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    echange.current,
                    {
                        rotate: -15,
                    },
                    "-=2"
                );
                TL.play();
            }
    
            const mouseLeaveEchange = () => {
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    echange.current,
                    {
                        rotate: 0,
                    },
                    "-=2"
                );
                TL.play();
    
            }

            const mouseEnterBuild = () => {
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    build.current,
                    {
                        rotate: -15,
                    },
                    "-=2"
                );
                TL.play();
            }
    
            const mouseLeaveBuild = () => {
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    build.current,
                    {
                        rotate: 0,
                    },
                    "-=2"
                );
                TL.play();
    
            }

    return (
        <div className='left-nav'>
            <ul className='icones'>
                <li id='1'  onMouseEnter={mouseEnterReseau} onMouseLeave={mouseLeaveReseau} onClick={handleClick}><img id='1' className='reseau' onClick={handleClick} ref={reseau} src='/static/icones/la-mise-en-reseau.png'></img><span className={handleReseau ? "barre-active-reseau" : "barre-reseau"}></span></li>
                <li id='2'  onMouseEnter={mouseEnterStat} onMouseLeave={mouseLeaveStat} onClick={handleClick}><img id='2' className='stat' onClick={handleClick} ref={stat} src='/static/icones/statistiques.png'></img><span className={handleStat ? "barre-active-stat" : "barre-stat"}></span></li>
                <li id='3'  onMouseEnter={mouseEnterList} onMouseLeave={mouseLeaveList} onClick={handleClick}><img id='3' className='list' onClick={handleClick} ref={list} src='/static/icones/liste.png'></img><span className={handleList ? "barre-active-list" : "barre-list"}></span></li>
                <li id='4'  onMouseEnter={mouseEnterBuild} onMouseLeave={mouseLeaveBuild} onClick={handleClick}><img id='4' className='blocs' onClick={handleClick} ref={build} src='/static/icones/blocs.png'></img><span className={handleBuild ? "barre-active-build" : "barre-build"}></span></li>               
                <li id='5'  onMouseEnter={mouseEnterEchange} onMouseLeave={mouseLeaveEchange} onClick={handleClick}><img id='5' className='echange' onClick={handleClick} ref={echange} src='/static/icones/echange.png'></img><span className={handleEchange ? "barre-active-echange" : "barre-echange"}></span></li>
            </ul>
        </div>
    );
};

export default LeftNav;