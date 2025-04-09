import React from 'react'

const About = () => {
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

                
            </div>
        </section>
    )
}
export default About
