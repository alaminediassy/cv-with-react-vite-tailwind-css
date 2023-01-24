import React from "react";
import {BiTimeFive} from "react-icons/all.js";
import babiAlem from "../../Assets/babiAlem.png"
import maarif from "../../Assets/maarif.png"
import artilux00 from "../../Assets/artilux00.png"



const Data = [
    {
        id: 1,
        image: babiAlem,
        title: "Graphic Designer",
        time: "Fev-2021 - Juin-2022",
        location: "Turquie",
        desc: "Chargé de conception de flyers, d'affiche, de banderoles et\n" +
            "d'images de publicités pour les réseaux sociaux.\n" +
            "Prise de photo lors des activités de l'association.\n" +
            "Mise à jour des contenus du site web de l'association\n" +
            "avec Wordpress",
        company: "Bâb-ı Âlem"
    },
    {
        id: 2,
        image: maarif,
        title: "Instituteur Informatique",
        time: "Mars-2019 - Juil-2020",
        location: "Sénégal",
        desc: "Instituteur vacataire d’informatique à l’école élémentaire \n" +
            "Maarif Iba der Thiam de la fondation Maarif de Turque.\n" +
            "Chargé d’initier les élèves aux outils informatiques et de leur\n" +
            "apprendre les bases pour utiliser ordinateur.\n" +
            "Conception des bulletins de notes avec Excel.",
        company: "Fondation Maarif Sénégal"
    },
    {
        id: 3,
        image: artilux00,
        title: "Création de site web",
        time: "06/01/2023 - 30/01/2023",
        location: "Télétravail",
        desc: "Je développe actuellement un site web pour un Cabinet pour la promotion" +
            "de l’Entreprenariat et de l’Artisanat basé au Sénégal.Le site est basé" +
            "sous le CMS WordPress, j’utilise le thème Divi pour la conception des" +
            "fonctionnalités avancées du site.",
        company: "Artilux Media"
    }
    ]


const Experiences = () => {
    return(

        <div className=" mb-[4rem] mt-[3rem]">
            <h2 className="text-textColor1 text-[20px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
                Expériences Professionnelles.
            </h2>
            <div className="flex gap-16 justify-center flex-wrap items-center py-10">
            {
                Data.map(({id,image,title,time,location,desc,company}) =>{
                    return(

                        <div key={id} className="group group/item w-[500px] p-[20px] bg-white rounded
                  hover:bg-orangeColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                    <span className="flex justify-between items-center gap-4">
                      <h1 className="text-[16px] font-semi-bold text-textColor group-hover:text-white">
                        {title}
                      </h1>
                      <span className="flex items-center text-[#ccc] gap-1 group-hover:text-white">
                        <BiTimeFive/>{time}
                      </span>
                    </span>
                            <h6 className="text-[#ccc] group-hover:text-white">{location}</h6>

                            <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
                    group-hover:text-white">
                                {desc}
                            </p>

                            <div className="company flex items-center gap-2">
                                <img src={image} alt="Company logo" className="w-[10%]"/>
                                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                        {company}
                      </span>
                            </div>

                        </div>

                    )
                })
            }
            </div>
        </div>
    )
}

export default Experiences