import React from 'react'

// .......... Imported images .........
import artilux from "../../Assets/artilux.png"
import galaxy from "../../Assets/galaxy.png"
import valentines from "../../Assets/valentines.png"

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
        <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
            The value that holds us true and to account
        </h1>


        <div className="grid gap-[6rem] grid-cols-3 items-center">

            <div className="simpleGrid rounded-[10px] hover:bg-[#fcb9a9] p-[1.5rem]">
                <div className="flex items-center gap-3">
                    <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#fcb9a9] h-[40px]
                    w-[40px] flex items-center justify-center">
                        <img src={artilux} alt="" className="w-[70%]"/>
                    </div>
                    <span className="font-semiBold text-textColor text-[18px]">
                        Artlix Media
                    </span>
                </div>
                <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semi-bold">
                    Things beinf made beautiful simple are at the heart of everything we do.
                </p>
            </div>


            <div className="simpleGrid rounded-[10px] hover:bg-[#fce5ae] p-[1.5rem]">
                <div className="flex items-center gap-3">
                    <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#fce5ae] h-[40px]
                    w-[40px] flex items-center justify-center">
                        <img src={valentines} alt="" className="w-[70%]"/>
                    </div>
                    <span className="font-semiBold text-textColor text-[18px]">
                        Valentines
                    </span>
                </div>
                <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semi-bold">
                    Things beinf made beautiful simple are at the heart of everything we do.
                </p>
            </div>


            <div className="simpleGrid rounded-[10px] hover:bg-[#fcc3e6] p-[1.5rem]">
                <div className="flex items-center gap-3">
                    <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#fcc3e6] h-[40px]
                    w-[40px] flex items-center justify-center">
                        <img src={galaxy} alt="" className="w-[70%]"/>
                    </div>
                    <span className="font-semiBold text-textColor text-[18px]">
                        Galaxy Org.
                    </span>
                </div>
                <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semi-bold">
                    Things beinf made beautiful simple are at the heart of everything we do.
                </p>
            </div>



        </div>
    </div>
  )
}

export default Value
