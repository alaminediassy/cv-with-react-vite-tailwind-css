import React from 'react'

// Imported Icons ........
import {BiTimeFive} from "react-icons/all";

// Imported
import logo1 from "../../Assets/logo1.png"
import logo2 from "../../Assets/logo2.png"
import logo3 from "../../Assets/logo3.png"
import logo4 from "../../Assets/logo4.png"
import logo5 from "../../Assets/logo5.png"
import logo6 from "../../Assets/logo6.png"
import logo7 from "../../Assets/logo7.png"
import logo8 from "../../Assets/logo8.png"


// In this case, we shall list all the jobs into an array called data ......

const Data = [
  {
    id: 1,
    image: logo1,
    title: "Web Designer",
    time: "Now",
    location: "Luxembourg",
    desc: "Lorem ipsum,  dolor sit amet consectetur adipisicing elit, Corrupti, laborriosam!",
    company: "Orange Luxembourg"
  },
  {
    id: 2,
    image: logo2,
    title: "UI Designer",
    time: "15Hrs",
    location: "France",
    desc: "Lorem ipsum,  dolor sit amet consectetur adipisicing elit, Corrupti, laborriosam!",
    company: "Vodafone Comp."
  },
  {
    id: 3,
    image: logo3,
    title: "Lead Developer",
    time: "15Hrs",
    location: "France",
    desc: "Lorem ipsum,  dolor sit amet consectetur adipisicing elit, Corrupti, laborriosam!",
    company: "Vodafone Comp."
  },
  {
    id: 4,
    image: logo4,
    title: "Manager",
    time: "15Hrs",
    location: "Luxembourg",
    desc: "Lorem ipsum,  dolor sit amet consectetur adipisicing elit, Corrupti, laborriosam!",
    company: "Vodafone Comp."
  },
  {
    id: 5,
    image: logo5,
    title: "Fullstack Developer",
    time: "19Hrs",
    location: "France",
    desc: "Lorem ipsum,  dolor sit amet consectetur adipisicing elit, Corrupti, laborriosam!",
    company: "Vodafone Comp."
  },
  {
    id: 6,
    image: logo6,
    title: "Social Media Manaager",
    time: "22Hrs",
    location: "France",
    desc: "Lorem ipsum,  dolor sit amet consectetur adipisicing elit, Corrupti, laborriosam!",
    company: "Vodafone Comp."
  },
  {
    id: 7,
    image: logo7,
    title: "Graphic Designer",
    time: "1Day",
    location: "France",
    desc: "Lorem ipsum,  dolor sit amet consectetur adipisicing elit, Corrupti, laborriosam!",
    company: "Vodafone Comp."
  },
  {
    id: 8,
    image: logo8,
    title: "UI Designer",
    time: "2Days",
    location: "France",
    desc: "Lorem ipsum,  dolor sit amet consectetur adipisicing elit, Corrupti, laborriosam!",
    company: "Vodafone Comp."
  }

]

const Jobs = () => {
  return (
    <div className="jobContainer flex gap-7 justify-center flex-wrap items-center py-10">
      {
        Data.map(({id,image,title,time,location,desc,company}) =>{

          return(
              //This will return a single job post based on the ID
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px]
      hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

        <span className="flex justify-between items-center gap-4">
          <h1 className="text-[16px] font-semi-bold text-textColor group-hover:text-white">
            {title}
          </h1>
          <span className="flex items-center text-[#ccc] gap-1">
            <BiTimeFive/>{time}
          </span>
        </span>
                <h6 className="text-[#ccc]">{location}</h6>

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

                <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semi-bold
          text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
                  Apply Now
                </button>
              </div>

          )
        })
      }
    </div>
  )
}

export default Jobs
