'use client'
import { BiSearch } from "react-icons/bi"
export const Search = () => {
  return (
    <div 
    className="
    border-[1px]
    md:auto
    py-2
    rounded-full
    shadow-sm
    hover:shadow-md
    transition
    cursor:pointer
    ">
        <div className="flex flex-row items-center justify-between">
            {/* <div className="text-sm font-semibold px-6">
                anywhere
            </div> */}
            <div className="hidden sm:block  border-x-[1px] flex-1 text-center text-sm font-semibold px-6">
                Onligne
            </div>
            <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                <div className="hidden sm:block">Offligne</div>
                <div className="p-2 bg-yellow-500 rounded-full text-white">
                     <BiSearch size={18}/>
                </div>
            </div>
        </div>
    </div>
  )
}
