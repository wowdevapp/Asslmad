
'use client'
import useOfferModal from "@/app/hooks/useOfferModal";
import useRegisterModal from "@/app/hooks/useRegisterHook";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Avatar } from "../Avatar";
import { MenuItem } from "./MenuItem";

export const UserMenu = () => {
    const [isOpen,setIsOpen]=useState(false);
    const registerModal =useRegisterModal()
    const  offerModal = useOfferModal();
    const toggleOpen= useCallback (()=>{
          setIsOpen((value)=> !value);
    },[])
    const onOffer=useCallback(()=>{
        /* we must handle login here */
        offerModal.onOpen()
    },[offerModal])
    
  return (
    <div className="relative">
        <div className=" flex flex-row items-center gap-3">
            <div
            onClick={onOffer} className="hidden shadow-sm md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                Publish your course
            </div>
            <div onClick={toggleOpen} className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                <AiOutlineMenu />
                <div className="hidden md:block">
                    <Avatar/>
                </div>
            </div>

        </div>
        {isOpen && (
            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                <>
                  <MenuItem label="Login" onClick={()=>{}} />
                  <MenuItem label="Sign Up" onClick={registerModal.onOpen} />
                </>
            </div>
        )}
    </div>
  )
}
