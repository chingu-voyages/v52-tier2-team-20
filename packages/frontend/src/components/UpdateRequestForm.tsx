"use client"

import React, { useState } from 'react'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import FormField from './FormField'
import {
    TrashIcon
  } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation'

export default function UpdateRequestForm({request}:{request:any}) {
    //STATE

    const [buttonDisabled, setButtonDisabled] = useState(false)
    const {id, name, email, phoneNumber, address, preferred_date, preferred_timeslot, request_status} = request.data

    const router = useRouter()

    //ZOD CONFIG
    const formSchema = z.object({
            id: z.string(),
            name: z.string(),
            email: z.string(),
            phoneNumber: z.string(),
            address: z.string(),
            preferred_date: z.string(),
            preferred_timeslot: z.string(),
            request_status: z.string()
    })

    const {    
        register,
        handleSubmit,
        formState: { errors },
        setError
        } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: id,
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            preferred_date: preferred_date,
            preferred_timeslot: preferred_timeslot,
            request_status: request_status
        },
    })
    
       
        // Define a submit handler.
        async function onSubmit(values: z.infer<typeof formSchema>) {
            setButtonDisabled(true)
            const {id, name, email, phoneNumber, address, preferred_date, preferred_timeslot, request_status} = values
            
            const postBody = JSON.stringify({
                //UNCOMMENT BELOW IF WANTING TO UPDATE FEATURE TO PATCH MORE FIELDS
                // name: name,
                // email: email,
                // phoneNumber: phoneNumber,
                // address: address,
                // preferred_date: preferred_date,
                // preferred_timeslot: preferred_timeslot,
                request_status: request_status
             })
            const response = await fetch(`http://localhost:8000/api/v1/admin/request/${id}`, {method: 'PATCH', headers: {'Content-Type':'application/json'}, body: postBody})
            if (response.status === 200 || response.status === 400){
                setButtonDisabled(false)
            }
        }

        async function handleClick() {
            const deleteRequestById = async (id:string) => {
                const response = await fetch(`http://localhost:8000/api/v1/admin/request/${id}`, {method: "DELETE"})
            const apiResponse = await response.json()
            return apiResponse
            }
            const data = await deleteRequestById(id)
            if(data.status===201){
                console.log(data.message);
                router.push('/admin/dashboard')
            } else if (data.status===401) {
                alert(data.message)
                console.log(data.message)
            }
        }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:flex md:flex-wrap mt-14">
        <div className='flex flex-col md:w-1/2 justify-start space-y-9'>
        <FormField 
            label="Name"
            type="text"
            placeholder={name}
            name="name"
            register={register}
            error={errors.name}
        />
        <FormField
            label="Address" 
            type="text"
            placeholder={address}
            name="address"
            register={register}
            error={errors.address}
        />
        <FormField 
            label="Phone"
            type="text"
            placeholder={phoneNumber}
            name="phoneNumber"
            register={register}
            error={errors.phoneNumber}
        />
        <FormField 
            label="Email"
            type="text"
            placeholder={email}
            name="email"
            register={register}
            error={errors.email}
        />
        <FormField 
            label="Confirmation number"
            type="text"
            placeholder={id}
            name="id"
            register={register}
            error={errors.id}
        />
        </div>
        <div className='flex flex-col md:w-1/2 justify-start space-y-9 pt-9 md:pt-0'>
        <FormField
            label="Preferred date"
            type="text"
            placeholder={preferred_date.toLocaleString("en-US", { dateStyle: "full" })}
            name="preferred_date"
            register={register}
            error={errors.preferred_date}
        />
        <FormField
            label="Preferred timeslot" 
            type="text"
            placeholder={preferred_timeslot}
            name="preferred_timeslot"
            register={register}
            error={errors.preferred_timeslot}
        />
        <FormField
            label="Request status"
            type="text"
            placeholder={request_status}
            name="request_status"
            register={register}
            error={errors.request_status}
        />
        <label> Update status to: 
        <select {...register("request_status", { required: true })}>
            <option value="0" disabled>Update status...</option>
            <option value="unscheduled">Unscheduled</option>
            <option value="scheduled">Scheduled</option>
            <option value="completed">Completed</option>
        </select>
        </label>
        </div>
        <div className='pt-9 space-y-4 md:w-full md:inline-flex'>
        <div className='md:w-1/2'>
        <button type="submit" className='hover:bg-blue-400 bg-active-blue text-white text-sm rounded-xl h-12 w-72'disabled={buttonDisabled}>Save changes</button>
        </div>
        {/* Replace button with shadcn dialog box one day... */}
        <button className='flex flex-row text-red-500 underline max-w-52 active:bg-red-300' onClick={handleClick}><TrashIcon className='size-5 mr-1'/>Delete appointment</button> 
        </div>
    </form>
  )
}