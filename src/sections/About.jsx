import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("aryamanramchandran@gmail.me");

        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

    return (
        <section className = "c-space my-20">
            <div className = "grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className = "col-span-1 xl:row-span-3">
                    <div className = "grid-container">
                        <img src = "/assets/grid1.png" alt = "grid-1" className = "w-full lg:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className = "grid-headtext">
                                Hello, I am Aryaman
                            </p>
                            <p className = "grid-subtext">
                                I love to create and learn! I hope to take my expertise in AI and HCI as well as my general coding knowledge to new heights.
                            </p>
                        </div>
                    </div>
                </div>

                <div className = 'col-span-1 xl:row-span-3'>
                    <div className = "grid-container">
                        <img src = "/assets/grid2.png" alt = "grid-2" className = "w-full lg:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className = "grid-headtext">TechStack</p>
                            <p className = "grid-subtext">I am a Machine Learning Enthusiast proficient in Python; a Full Stack Web Developer primarily with JavaScript, CSS, React, ThreeJS and HTML; a App Developer primarily with Swift</p>
                        </div>
                    </div>
                </div>

                <div className = 'col-span-1 xl:row-span-4'>
                    <div className = "grid-container">
                        <div className = "rounded-3xl w-full lg:h-[326] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width = {326}
                                backgroundColor={"rgba(0, 0, 0, 0)"}
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 41.8781,
                                    lng: -87.6298,
                                    text: "I'm Here",
                                    color: "white",
                                    size: 20,
                                }]}
                            />
                        </div>
                        <div>
                            <p className = "grid-headtext">I am undergoing graduate school at UIUC</p>
                            <p className = "grid-subtext">I am willing to work anywhere. I am open to all opportunities. I can work remote or in person.</p>
                            <Button name = "Contact Me" isBeam containerClass= "w-full mt-10"/>
                        </div>
                    </div>
                </div>

                <div className = 'col-span-2 xl:row-span-3'>
                    <div className = "grid-container">
                        <img src = "/assets/grid3.png" alt = "grid-3" className = "w-full lg:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className = "grid-headtext">Coding is My Passion</p>
                            <p className = "grid-subtext">I am enthralled with coding and all that can be made from it. I want to fuse as many learnings as I can into my work, developing new ideas and interesting concepts.</p>
                        </div>
                    </div>
                </div>

                <div className = 'xl:col-span-1 xl:row-span-2'>
                    <div className = "grid-container">
                        <img src = "/assets/grid4.png" alt = "grid-4" className = "w-full lg:h-[276px] h-fit object-cover sm:object-top"/>
                        <div>
                            <p className = "grid-subtext text-center">Contact Me</p>
                            <div className = "copy-container" onClick={handleCopy}>
                                <img src = {hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt={"copy"}/>
                                <p className = "lg:text-xl font-medium bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-white">aryamanramchandran@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About
