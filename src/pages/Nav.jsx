import { useState } from "react";
import { Link } from "react-router-dom";

function Navber() {
    const navItem = ["About Us", "Pricing", "Customers", "Solutions"]
    const [isMobile, setIsMobile] = useState(false);
    function openNav(){
       setIsMobile(true);
    }
    function closeNav(){
        setIsMobile(false)
    }
    
    return(
        
        <>
            <div className="border-b  border-[#55555586]" >
            <header className="max-w-[1400px] py-5 flex items-center justify-between px-5 mx-auto overflow-hidden">
                <a href="/"><img className="lg:w-28  w-26 cursor-pointer" src="Logo.png" alt="" /></a>

                <nav className="md:text-lg text-base text-white work-sens hidden lg:inline">
                    {
                    navItem.map((val) => (
                        <Link key={val} to= {val} href="#" className="cursor-pointer px-4 py-2 transition duration-300 hover:bg-gray-700 rounded-md">{val}</Link>
                    ))
                    }
                    {/* <a href="#" className="cursor-pointer px-4 py-2 transition duration-300 hover:bg-gray-700 rounded-md">Solutions</a> */}
                    
                </nav>
                <div className="lg:flex gap-5 work-sens hidden ">
                    <button className=" font-medium text-base rounded-4xl border border-transparent px-5 py-2 transition duration-300 text-gray-700 hover:text-white bg-[#0FF1F6] hover:bg-transparent cursor-pointer hover:border-[#0FF1F6]">
                        Book a Demo
                    </button>
                    <button className=" font-medium text-base rounded-4xl border border-white px-5 py-2 transition duration-300 text-white hover:text-gray-700 bg-transparent hover:bg-[#0FF1F6] cursor-pointer hover:border-[#0FF1F6]">
                        Contact Us
                    </button>
                </div>
                <div className="lg:hidden block text-2xl text-white " >
                    
                    {isMobile ? <div className="px-3 py-2 transition duration-300 rounded-full hover:bg-gray-700 cursor-pointer" onClick={closeNav}><i className = "fa-solid fa-close" ></i></div> : <div className="px-3 py-2 transition duration-300 rounded-full hover:bg-gray-700 cursor-pointer" onClick={openNav}><i class="fa-solid fa-bars" ></i></div>}
                </div>

                {/* open navber */}

                <nav className={`md:text-lg text-base  work-sens  absolute  top-0 z-20 h-full py-8 bg-[#002228] text-white transition-all duration-300  font-semibold w-72 ${isMobile ? "left-0" : "-left-full"}`}>
                    
                    {
                    navItem.map((val) => (
                        <Link key={val} to={val}  className="cursor-pointer px-4 py-2 transition hover:text-gray-700 block duration-300 hover:bg-white rounded-md">{val}</Link>
                    ))
                    }
                    {/* <a href="#" className="cursor-pointer px-4 py-2 transition duration-300 hover:bg-gray-700 rounded-md">Solutions</a> */}
                    <div className="flex flex-col gap-5 work-sens  w-48 px-3 mt-3">
                    <button className=" font-medium text-base rounded-4xl border border-transparent px-5 py-2 transition duration-300 text-gray-700 hover:text-white bg-[#0FF1F6] hover:bg-transparent cursor-pointer hover:border-[#0FF1F6]">
                        Book a Demo
                    </button>
                    <button className=" font-medium text-base rounded-4xl border border-white px-5 py-2 transition duration-300 text-white hover:text-gray-700 bg-transparent hover:bg-[#0FF1F6] cursor-pointer hover:border-[#0FF1F6]">
                        Contact Us
                    </button>
                </div>
                    
                </nav>

            </header>
            </div>
        </>
    )
}
export default Navber;