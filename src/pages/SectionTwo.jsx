function SecTwo() {
  let data = [
    {
      id: 1,
      images: "pan.png",
      hedings: "You’re in Control",
      paras:
        "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
    },
    {
      id: 2,
      images: "root.png",
      hedings: "Infinitely Scalable",
      paras:
        "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
    },
    {
      id: 3,
      images: "arrows.png",
      hedings: "Incredibly Flexible",
      paras:
        "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
    },
  ];
  return (
    <>
      <div className="px-3 lg:py-18 md:py-14 py-7">
        <div className="max-w-[1400px] flex items-center justify-between mx-auto">
            {data.map((val) => (
                <div key={val.id} className="col-span-12 lg- col-span-4 p-3">
                    <img className="w-24" src= {val.images} alt="" />
                    <h1 className="md:text-3xl mt-5 text-xl text-white font-medium monserrat">{val.hedings}</h1>
                    <p className="md:text-2xl font-extralight work-sens mt-5 text-xl max-w-96 text-white">{val.paras}</p>
                </div>
            ))}
        </div>
      </div>
    </>
  );
}
export default SecTwo;