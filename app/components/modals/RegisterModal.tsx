'use client'
import { useState } from "react"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

import useRegisterModal from "@/app/hooks/useRegisterHook"
import axios from "axios"
import toast from "react-hot-toast"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { Button } from "../Button"
import { Heading } from "../Heading"
import { Input } from "../inputs/Input"
import { Modal } from "./Modal"
const RegisterModal = () =>{
    const registerModal = useRegisterModal();
    const [isLoading,setIsLoading] =useState(false);
    const {register,handleSubmit,formState:{errors}}=useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    })
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
    
        axios.post('/api/register', data)
        .then(() => {
          toast.success('Registered!');
          registerModal.onClose();
        })
        .catch((error) => {
          toast.error('something went wrong');
        })
        .finally(() => {
          setIsLoading(false);
        })
      }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome to asslmad"  subtitle="Create an account" />
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
            <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
            <Input id="password" type="password" label="Password" disabled={isLoading} register={register} errors={errors} required />
        </div>
    )
    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
          <hr />
          <Button 
            outline 
            label="Continue with Google"
            icon={FcGoogle}
            onClick={() => console.log('sign in strategy')} 
          />
          <Button 
            outline 
            label="Continue with Github"
            icon={AiFillGithub}
            onClick={() => console.log('sign in strategy')}
          />
          <div 
            className="
              text-neutral-500 
              text-center 
              mt-4 
              font-light
            "
          >
            <p>Already have an account?
              <span 
                onClick={registerModal.onClose} 
                className="
                  text-neutral-800
                  cursor-pointer 
                  hover:underline
                "
                > Log in</span>
            </p>
          </div>
        </div>
      )
    return (
        <Modal body={bodyContent} footer={footerContent } onSubmit={handleSubmit(onSubmit)} disabled={isLoading} isOpen={registerModal.isOpen} title={"Register"}  actionLabel={"Continue"} onClose={registerModal.onClose} />
    )
}
export default RegisterModal