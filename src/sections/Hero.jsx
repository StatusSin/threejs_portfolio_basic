import React from 'react'

const Hero = () => {
    return (
        <section className = "min-h-screen w-full flex flex-col relative">
            <div className = "w-full mx-auto flex flex-col lg:mt-36 mt-20 c-space gap-3">
                <p className = "lg:text-3xl text-2xl font-medium text-white text-center">Hello, I am Aryaman<span className = "waving-hand">👋</span></p>
                <p className = "hero_tag bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">Creating and Imagining</p>
            </div>

            <div className = "w-full h-full absolute inset-0">

            </div>
        </section>
    )
}
export default Hero
