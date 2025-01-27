import { Button } from "@mui/material";
function SecSix() {
    return (
        <>
            <section className="lg:py-24 md:py-16 py-12"> 
                <div className="text-center">
                    <h1 className="md:text-2xl tracking-wide font-light monserrat text-xl text-[#0FF1F6]">GET STARTED</h1>
                    <h1 className="md:text-4xl font-normal text-white italic text-2xl md:mt-8 mt-4 monserrat">Embrace the <span className="font-semibold not-italic">new era of</span> outbound.</h1>
                    <p className="md:text-2xl font-extralight text-white md-mt-14 mt-6 work-sens text-xl tracking-normal">Wizia lets you train, activate, and optimize aiDRs. <br />
                    Take your outbound to new levels of performance and efficiency.</p>
                    <Button variant="contained" sx={{backgroundColor:"#0FF1F6", fontSize: "16px", color: "#002228", textTransform: "capitalize", padding: "10px 17px",marginTop: "26px", borderRadius: "50px"}}>Sign Up for the Beta <img src="/icons.png" className="ml-1" alt="" /></Button>
                </div>
            </section>
        </>
    )
}
export default SecSix;