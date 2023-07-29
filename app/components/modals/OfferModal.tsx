'use client'
enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    IMAGES = 2,
    DESCRIPTION = 3,
    PRICE = 4,
  }
import useOfferModal from '@/app/hooks/useOfferModal';
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Heading } from '../Heading';
import CategoryInput from '../inputs/CategoryInput';
import CountrySelect from '../inputs/CountrySelect';
import ImageUpload from '../inputs/ImageUpload';
import { Input } from '../inputs/Input';
import { categories } from '../navbar/Categeories';
import { Modal } from './Modal';
 

export const OfferModal = () => {
    const offerModal= useOfferModal();
    const [step,setStep] = useState(STEPS.CATEGORY);
    const [isLoading,setIsLoading] =useState(false)
    const {register,handleSubmit,setValue,watch,formState:{errors}}=useForm<FieldValues>(
      {
        defaultValues:{
          category:'',
          location:null,
          imageSrc:null,
          age:null,
          course_level:null,
          duration:null,
          price:1,
          title:'',
          description:'',
        }
      }
    )
    const category = watch('category');
    const location = watch('location');
    const imageSrc = watch('imageSrc');
    const setCustumValue =(id:string,value:any) =>{
      setValue(id,value,{
        shouldDirty:true,
        shouldTouch:true,
        shouldValidate:true
      })
    }
    const onBack =()=>{
        setStep((value)=>value-1);
    }
    const onNext =()=>{
        setStep((value) =>value+1);
    }
    const actionLabel =useMemo(()=>{
        if(step ===STEPS.PRICE){
            return "Create"
        }
        return "Next"
    },[step]);
    const Map=useMemo(()=>dynamic(()=>import('../Map'),{ssr:false}),[location])
    
    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
          return undefined
        }
    
        return 'Back'
      }, [step]);
      let bodyContent = (
        <div className='flex flex-col gap-8'>
          <Heading 
             title='Whiche of this describe your course'
             subtitle='Pick a category' />
             <div 
               className='
               grid
               grid-cols-1
               md:grid-cols-2
               gap-3
               max-h-[50vh]
               overflow-y-auto
               '>
                {categories.map((item)=>(
                  <div key={item.label} className="col-span-1">
                    <CategoryInput onClick={(category)=>{setCustumValue('category',category)}} selected={category===item.label} label={item.label} icon={item.icon} />
                  </div>
                ))}
             </div>

          
        </div>
      )
      if(step===STEPS.LOCATION){
        bodyContent =(
          <div className='flex flex-col gap-8'>
            <Heading 
              title='Where is your location'
              subtitle='Help students find you' />
              <CountrySelect 
                  value={location} 
                 onChange={(value) => setCustumValue('location', value)}  />
                 <Map center={location?.latlng} />
          </div>
        )
      }
      if(step ===STEPS.IMAGES){
        bodyContent = (
          <div className='flex flex-col gap-8'>
            <Heading 
              title='Add a photo to your cource' subtitle='Show  students what you have' />
              <ImageUpload onChange={(value) => setCustumValue('imageSrc', value)}
               value={imageSrc} />
          </div>
        )
      }
      if(step ==STEPS.DESCRIPTION){
        bodyContent= (
          <div className='flex flex-col gap-8'>
            <Heading
            title='How do you describe your course ?'
            subtitle='Short and Sweet work best'
            />
            <Input id="title" label='Title' disabled={isLoading} register={register} errors={errors}/>
            <hr/>
            <Input type='textarea' id="description" label='Description' disabled={isLoading} register={register} errors={errors}/>
          </div>
        )
      }
      if(step ==STEPS.PRICE){
        bodyContent= (
          <div className='flex flex-col gap-8'>
            <Heading
            title='Now set your price'
            subtitle='How much do you charge per hour'
            />
            <Input formatPrice type='number' id="price" label='Price' disabled={isLoading} register={register} errors={errors}/>
          </div>
        )
      }

      const onSubmit:SubmitHandler<FieldValues> = (data)=>{
        
      }

  return (
    <Modal
    isOpen={offerModal.isOpen}
    title="Create your offer!"
    actionLabel={actionLabel}
    secondaryActionLabel={secondaryActionLabel}
    secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
    body={bodyContent}
    onSubmit={onNext}
    onClose={offerModal.onClose}
  />
  )
}
