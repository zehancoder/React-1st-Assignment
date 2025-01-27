import { useState } from "react";
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'

function SecThree(){
    // type effect
    const [typeEffect] = useTypewriter({
        words: ['prefered email st|'], 
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 50
    })

    return (
        <div className="md:p-14 p-4">
            <div className="bg-[url(/train-bg.png)] bg-cover flex items-center rounded-3xl justify-center lg:h-[600px] md:h-[500px] h-auto px-3 md:py-0 py-8">
               <div>
               <h1 className="md:text-5xl monserrat text-3xl font-semibold text-white">Train your aiDR on your...</h1>
                <h2 className="md:text-5xl text-3xl text-[#0FF1F6] md:mt-4 mt-3 italic monserrat font-medium">{typeEffect}<Cursor/></h2>
                <p className="md:text-3xl text-2xl font-extralight text-white md:mt-8 mt-5">You’re in control. Train your aiDR on <br /> elements of your Marketing strategy.</p>
               </div>
            </div>
        </div>
    )
}
export default SecThree;