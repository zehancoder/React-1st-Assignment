import { useState } from "react";

function SlideFunc() {
    
    let slideItem = [
        {
            id: 1,
            img: "/design.png",
            comment: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            name: "John Doe",
            company: "Chief Strategy Officer @ Company"
        },
        {
            id: 2,
            img: "/design.png",
            comment: "The one thing we can never get enough of is love. And the one thing we never give enough is love.",
            name: "Frank Zappa",
            company: "Project Manager @Company"
        },
        {
            id: 3,
            img: "/design.png",
            comment: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            name: "Albert Einstein",
            company: "Swift Warp @ Company"
        },
    ]
    const [item, setItem] = useState(0);
    function prevItem() {
        setItem((prevIndex) => (prevIndex == 0 ? slideItem.length - 1 : prevIndex - 1));
    }
    function nextItem(){
        setItem((prevIndex) => (prevIndex == slideItem.length -1 ? 0 : prevIndex + 1));
    }
    let {img, comment, name, company} = slideItem[item]
    return (
        <>
            <section className="py-8">
                <div className="max-w-[1400px] mx-auto  md:h-96 h-auto md:py-3 py-3 relative ">
                    <button className="md:block hidden font-extralight absolute left-15 cursor-pointer arrow-btn text-white md:text-6xl text-3xl " onClick={prevItem}>
                        <i class="fa-solid fa-angle-left transition duration-300 hover:text-[#0FF1F6]"></i>
                    </button>
                    <div className="md:w-5/6 mx-auto h-full px-4 flex items-center justify-center">
                        <div className="text-center">
                            <img className="mx-auto" src= {img} alt="" />
                            <h1 className="md:text-2xl lg:w-3xl mt-7 text-white text-xl  font-light work-sens">{comment}</h1>
                            <h3 className="md:text-3xl text-xl text-[#0FF1F6] font-semibold work-sens md:mt-8 lg:mt-14 mt-6">{name}</h3>
                            <h3 className="mt-3 md:text-2xl text-xl font-light work-sens text-white ">{company}</h3>
                        </div>

                    </div>
                    <button className="md:block hidden font-extralight cursor-pointer arrow-btn absolute right-8 text-white md:text-6xl text-3xl " onClick={nextItem}>
                        <i class="fa-solid fa-angle-right transition duration-300 hover:text-[#0FF1F6]"></i>
                    </button>
                    <div className="flex gap-3 justify-center mt-5">
                        {slideItem.map((_, idx) => (
                            <button className= {`p-1 ${idx === item ? "bg-[#0FF1F6]" : "bg-gray-700"} cursor-pointer`} onClick={() => (setItem(idx))}></button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default SlideFunc;