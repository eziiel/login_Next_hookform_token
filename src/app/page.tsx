"use client"

import { Reducer } from "@/reducer"
import React, { FormEvent } from "react"
import { useForm } from "react-hook-form"
import { fileURLToPath } from "url"

export default function Home() {
  const count = { count: 0 }
  const [state, dispatch ] = React.useReducer(Reducer, count)
  const { 
    register, 
    handleSubmit, 
    watch, 
    // formState: {isSubmitting}
  } = useForm()

  const handleSubmitForm = (data: any) => {
    // console.log(data)
  }

  console.log(watch())
  return (
    <>
      {/* <header /> */}

      <form onSubmit={handleSubmit(handleSubmitForm)}
        className="shadow-1zxl	flex flex-col gap-8 p-16 w-400 h-300 bg-gray-900 rounded-lg overflow-hidden fixed top-2/4 left-2/4 transform-2/4 -translate-y-1/2 -translate-x-1/2" >
        <strong className="text-2xl">Realizar login</strong>

        <input 
          onClick={() => dispatch({type: 'INCREMENT'})} 
          type="text" 
          placeholder="e-mail" 
          className="p-2 text-lg text-blue-950 font-medium rounded-lg"
          {...register("email")}
        />
        <input 
          onClick={() => dispatch({type: 'DECREMENT'})} 
          type="password" 
          placeholder="senha"
          className="p-2 text-lg text-blue-950 font-medium rounded-lg"
          {...register("password")}
        />
        <button className="p-2 ">Entrar</button>
        <div className="-z-50">
          <span className="block w-40 h-40 border-blue-500 absolute -top-16 -right-16 rounded-full border-2	"></span>
          <span className="block w-40 h-40 border-blue-500 absolute top-0 -right-16 rounded-full border-2 	"></span>
          <span className="block w-40 h-40 border-blue-500 absolute top-12 -right-16 rounded-full border-2 	"></span>
          <span className="block w-40 h-40 border-blue-500 absolute top-24 -right-16 rounded-full border-2 	"></span>
        </div>
      </form>
    
      {/* <footer></footer> */}
    
    </>
  )
}
