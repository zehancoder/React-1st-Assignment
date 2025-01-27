import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";

function SecFive() {
  const [typeEffect] = useTypewriter({
    words: ["Let us handle the rest."],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  const Improvement = [
    {
        id: 1,
        parcent: "32%",
        text: "Improvement in Open Rates"
    },
    {
        id: 2,
        parcent: "75%",
        text: "Improvement in Ramp Time"
    },
    {
        id: 3,
        parcent: "35%",
        text: "Improvement in Meetings Booked"
    },
  ]
  return (
    <>
      <section className="md:p-14 p-4">
        <div className="bg-[url(/bg-right.png)] bg-cover rounded-3xl lg:h-[600px] md:h-[650px] h-auto md:px-16 px-4 md:py-18 py-14">
          <h1 className="md:text-5xl text-3xl font-medium text-white monserrat">
            Allocate effort where your reps make an inpact.
          </h1>
          <h3 className="italic text-2xl md:mt-6 mt-4 md:text-4xl font-medium monserrat text-[#0FF1F6]">
            {typeEffect}
            <Cursor />
          </h3>
          <p className="md:text-2xl text-xl font-extralight md:mt-6 mt-4 text-white work-sens">
            Keep your reps “in the air” -- out in the field and on the phone{" "}
            <br /> where they can build relationships.
          </p>
          <div className="flex items-center md:flex-row flex-col md:mt-17 lg:mt-28 mt-8 md:gap-0 gap-8">
            {Improvement.map((val) => (
                <div className="flex flex-col md:w-60 w-full justify-between ">
                    <h1 key={val.id} className="md:text-5xl text-3xl monserrat text-[#0FF1F6] font-semibold">{val.parcent}</h1>
                    <h2 key={val.id} className="md:text-2xl text-xl font-light mt-4 text-white monserrat">{val.text}</h2>
                </div>
                
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default SecFive;
