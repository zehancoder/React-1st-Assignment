import SecThree from "../SectionThree";
import SlideFunc from "./SliderSec";
import SecTwo from "./SectionTwo";
import {Button, Slide} from "@mui/material"
import SecFive from "./SectionFive";
import SecSix from "./SectionSix";
function HomeItem() {
    return (
        <>
            <div className="lg:bg-[url(/hbg.png)] w-full bg-cover overflow-hidden">
            <div className="lg:h-[700px] md:h-[500px] h-auto flex lg:flex-row flex-col items-center md:px-8 px-4 lg:py-0 py-20 lg:text-start text-center p-8 relative max-w-[1400px] mx-auto">
                <div className="w-full lg:space-y-4 space-y-2 z-10">
                <h2 className="monserrat md:text-3xl text-xl font-light text-[#0FF1F6] ">AI SDRs (aiDRs)</h2>
                <h1 className="md:text-7xl text-5xl text-white font-bold lg:leading-20 md:leading-16 monserrat">More <span className="italic font-medium">leads</span>,<br />less <span className="italic font-medium">people</span></h1>
                <p className="text-white md:text-2xl text-lg font-extralight tracking-wider work-sens">Train an aiDR on your ICP and messaging matrix. <br />Activate it on a patch. It will send personalized <br /> sequences to every target contact.</p>
                <Button variant="contained" sx={{backgroundColor:"#0FF1F6", fontSize: "16px", color: "#002228", textTransform: "capitalize", padding: "10px 17px",marginTop: "15px", borderRadius: "50px"}}>Sign Up for the Beta <img src="/icons.png" className="ml-1" alt="" /></Button>
                </div>
                <div className="lg:hidden block rotate-90 w-[1800px] -z-0 absolute bottom-0">
                    <img src="hbg.png" className="w-full" alt="" />
                </div>
               
            </div>
            </div>
            <section className="p-3 bg-[#07292F]">
                <div className="max-w-7xl mx-auto md:py-16 lg:py-12  text-center">
                    <h1 className="md:text-xl uppercase text-lg monserrat text-[#0FF1F6] font-light">our trusted partners</h1>
                    <img className="mx-auto mt-7 md:w-4/5 w-full" src="Logos.png" alt="" />
                </div>
            </section>

            {/* Section two added */}
            <SecTwo/>

            {/* Section three added */}
            <SecThree/>

            {/* Section four added */}
            <SlideFunc/>

            {/* Section five added */}
            <SecFive/>

            {/* Section six added */}
            <SecSix/>
        </>
    )
}
export default HomeItem;