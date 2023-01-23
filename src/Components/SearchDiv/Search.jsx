import React from 'react'
import {AiOutlineCloseCircle, AiOutlineSearch, BsHouseDoor, CiLocationOn} from "react-icons/all.js";
import {useState} from "react";

// Functions to delete text fields when clicking on the icon

const Search = () => {
    const [text, setText] = useState("");
    const handleClick = () =>{
        setText("")
    }
    const [text1, setText1] = useState("");
    const handleClick1 = () =>{
        setText1("")
    }

    const [text2, setText2] = useState("");
    const handleClick2 = () =>{
        setText2("")
    }

    // Function to delete option value

    const [option, setOption] = useState("");
    function clearSelection (){
        setOption("");
    }

  return (
    <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">

        <form action="">
            <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px]
        bg-white p-5 shadow-lg shadow-greyIsh-700">

                <div className="flex gap-2 items-center">
                    <AiOutlineSearch className="text-[25px] icon"/>
                    <input type="text" value={text} onChange={e =>setText(e.target.value)} className="bg-transparent text-blue-500
              focus:outline-none w-[100%]" placeholder="Search Job Here ...."/>
                    <AiOutlineCloseCircle onClick={handleClick} className="text-[25px] text-[#a5a6a6] hover:text-textColor icon"/>
                </div>

                <div className="flex gap-2 items-center">
                    <BsHouseDoor className="text-[25px] icon"/>
                    <input type="text" value={text1} onChange={e =>setText1(e.target.value)} className="bg-transparent text-blue-500
              focus:outline-none w-[100%]" placeholder="Search By Type ...."/>
                    <AiOutlineCloseCircle onClick={handleClick1} className="text-[25px] text-[#a5a6a6] hover:text-textColor icon"/>
                </div>

                <div className="flex gap-2 items-center">
                    <CiLocationOn className="text-[25px] icon"/>
                    <input type="text" value={text2} onChange={e =>setText2(e.target.value)} className="bg-transparent text-blue-500
              focus:outline-none w-[100%]" placeholder="Search By Location ...."/>
                    <AiOutlineCloseCircle onClick={handleClick2} className="text-[25px] text-[#a5a6a6] hover:text-textColor icon"/>
                </div>

                <button className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">Search</button>

            </div>
        </form>

        <div className="secDiv flex items-center gap-10 justify-center">

            <div className="singleSearch flex items-center gap-2">
                <label htmlFor="type" className="text-[#808080] font-semi-bold">Sort by:</label>
                <select
                    name=""
                    id="type" className="bg-white rounded-[3px] px-4 py-1">
                    <option value=""></option>
                    <option value="">Relevance</option>
                    <option value="">Inclusive</option>
                    <option value="">Starts With</option>
                    <option value="">Contains</option>
                </select>
            </div>

            <div className="singleSearch flex items-center gap-2">
                <label htmlFor="level" className="text-[#808080] font-semi-bold">Type:</label>
                <select name="" id="level" className="bg-white rounded-[3px] px-4 py-1">
                    <option value=""></option>
                    <option value="">Full-Time</option>
                    <option value="">Remote</option>
                    <option value="">Contract</option>
                    <option value="">Part-time</option>
                </select>
            </div>

            <div className="singleSearch flex items-center gap-2">
                <label htmlFor="relevance" className="text-[#808080] font-semi-bold">Level:</label>
                <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1">
                    <option value=""></option>
                    <option value="">Senior</option>
                    <option value="">Beginner</option>
                    <option value="">Intermediate</option>
                    <option value="">Advocate</option>
                </select>
            </div>

            <span className="text-[#a1a1a1] cursor-pointer">Clear All</span>

        </div>




    </div>
  )
}

export default Search