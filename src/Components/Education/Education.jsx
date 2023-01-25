import React from "react";


const Data = [
    {
        id: 1,
        title: "BACHELOR",
        time: "2022 - 2023",
        desc: "Responsable de Projets informatique",
        company: "MEWO Campus Métiers"
    },
    {
        id: 2,
        title: "MASTER 2",
        time: "2022 - 2023",
        desc: "Ingénierie logicielle",
        company: "Université Virtuelle du Sénégal"
    },
    {
        id: 3,
        title: "MASTER 1",
        time: "2021 - 2022",
        desc: "Ingénierie logicielle",
        company: "Université Virtuelle du Sénégal"
    },
    {
        id: 4,
        title: "LICENCE",
        time: "2017 - 2020",
        desc: "Mathématique Appliquées et Informatique",
        company: "Université Virtuelle du Sénégal"
    }
    ]



const Education = () =>{
    return(
        <div className=" mb-[4rem] mt-[3rem]">
            <h2 className="text-textColor1 text-[20px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
                Parcours et formations.
            </h2>
            <div className="flex gap-16 justify-center flex-wrap items-center py-10">
                {
                    Data.map(({id,image,title,time,location,desc,company}) =>{
                        return(

                            <div key={id} className="group group/item w-[510px] p-[15px] bg-white rounded-[15px]
                             shadow-lg shadow-greyIsh-400/700 bg-[#f9fafb] ">

                                <span className="flex justify-between items-center gap-4">
                                    <h1 className="text-[16px] font-semi-bold text-orangeColor">
                                    {title}
                                </h1>
                                    <span className="flex items-center text-orangeColor gap-1">
                                        {time}
                                    </span>
                                </span>
                                <span>
                                    {desc}
                                </span>

                                <span className="text-[14px] py-[1rem] block">
                                        {company}
                                </span>

                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Education