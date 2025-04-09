import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
// import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";

const Hero = () => {
    // const controls = useControls('HackerRoom', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     scale: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    // })
    const isMobile = useMediaQuery({query: '(max-width: 786px)'});

    return (
        <section className = "min-h-screen w-full flex flex-col relative">
            <div className = "w-full mx-auto flex flex-col lg:mt-36 mt-20 c-space gap-3">
                <p className = "lg:text-3xl text-2xl font-medium text-white text-center">Hello, I am Aryaman<span className = "waving-hand">👋</span></p>
                <p className = "hero_tag bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">Creating and Imagining</p>
            </div>

            <div className = "w-full h-full absolute inset-0">
                {/*<Leva/>*/}
                <Canvas className = "w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]}/>

                        <HeroCamera isMobile = {isMobile}>
                            <HackerRoom
                                scale = {isMobile ? 0.06 : 0.07}
                                position = {[1, -5, 1]}
                                rotation = {[0, Math.PI, 0]}

                                // position = {[controls.positionX, controls.positionY, controls.positionZ]}
                                // rotation = {[controls.rotationX, controls.rotationY, controls.rotationZ]}
                                // scale = {[controls.scale, controls.scale, controls.scale]}
                            />
                        </HeroCamera>

                        <group>
                            <Target position = {[-9, -10, -10]}/>
                            <ReactLogo position = {[5, 4, 0]}/>
                            <Cube position = {[7.5, -6, 0]}/>
                            <Rings position = {[-5.5, 4, 0]}/>
                        </group>

                        <ambientLight intensity = {1}/>
                        <directionalLight position = {[10, 10, 10]} intensity = {0.5}/>
                    </Suspense>
                </Canvas>
            </div>

            <div className = "absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href = "#contact" className = "w-fit">
                    {/*<Button></Button>*/}
                </a>
            </div>
        </section>
    )
}
export default Hero
