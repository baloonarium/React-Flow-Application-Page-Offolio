import React, {useRef, useEffect, useState} from 'react';
import gsap from "gsap"
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from "../lotties/burger.json";

const Header = () => {

    const [burgerActive, setBurgerActive] = useState(false)
    const [lottieWay, setLottieWay] = useState(1)

    const handleClick = () => {
    
console.log(burgerActive)
    
        ////////ACTIVE//////////////////////////////////
    
        if (burgerActive === false) {
 
            setLottieWay(1)
            setBurgerActive(true)
            
            playerRef.current.play();
            setTimeout(()=> {
                playerRef.current.pause();
            },400)
        }
    
        //////INACTIVE///////////////////////////////////
        else if (burgerActive === true) {
            setLottieWay(-1)
            playerRef.current.play();
            setTimeout(()=> {
                playerRef.current.pause();
            },400)
            setBurgerActive(false)
        }
    }

    const bell = useRef(null)
    const cube = useRef(null)
    const question = useRef(null)
    const profil = useRef(null)

            const mouseEnterBell = () => {
                
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    bell.current,
                    {
                        rotate: -15,
                    },
                    "-=2"
                );
                TL.play();

            }
    
            const mouseLeaveBell = () => {
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    bell.current,
                    {
                        rotate: 0,
                    },
                    "-=2"
                );
                TL.play();
    
            }
    
            const mouseEnterCube = () => {
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    cube.current,
                    {
                        rotate: -15,
                    },
                    "-=2"
                );
                TL.play();
            }
    
            const mouseLeaveCube = () => {
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    cube.current,
                    {
                        rotate: 0,
                    },
                    "-=2"
                );
                TL.play();
    
            }
    
            const mouseEnterQuestion = () => {
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    question.current,
                    {
                        rotate: -15,
                    },
                    "-=2"
                );
                TL.play();
            }
    
            const mouseLeaveQuestion = () => {
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    question.current,
                    {
                        rotate: 0,
                    },
                    "-=2"
                );
                TL.play();
    
            }
    
            const mouseEnterProfil = () => {
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    profil.current,
                    {
                        rotate: -15,
                    },
                    "-=2"
                );
                TL.play();
            }
    
            const mouseLeaveProfil = () => {
                const TL = gsap.timeline({
                    paused: true,
                });
                TL.to(
                    profil.current,
                    {
                        rotate: 0,
                    },
                    "-=2"
                );
                TL.play();
    
            }

            const playerRef = useRef(null);

    return (
        <div className='header'>
                    <div className={burgerActive ? "active-menu-rideau" : "menu-rideau"}>

        </div>
        <div className='menuBurger' onClick={handleClick}>  
        <Player
        src={animationData}
        className="player"
        loop={false}
        speed={2}
        direction={lottieWay}
        ref={playerRef}

      />
            </div>
            <h1>OFFOLIO</h1>
            <p>v.1.20.4</p>
            <ul className='header-right-icones'>
                <li className='bell' ref={bell} onMouseEnter={mouseEnterBell} onMouseLeave={mouseLeaveBell}><img src='/static/icones/cloche.png'></img></li>
                <li className='cube' ref={cube} onMouseEnter={mouseEnterCube} onMouseLeave={mouseLeaveCube}><img src='/static/icones/vide.png'></img></li>
                <li className='question' ref={question} onMouseEnter={mouseEnterQuestion} onMouseLeave={mouseLeaveQuestion}><img src='/static/icones/point-dinterrogation-sur-un-fond-noir-circulaire.png'></img></li>
                <li className='profil' ref={profil} onMouseEnter={mouseEnterProfil} onMouseLeave={mouseLeaveProfil}><img src='/static/icones/utilisateur-de-profil.png'></img></li>
                <li className='profil-name'>Votre profil</li>
            </ul>
        </div>
    );
};

export default Header;