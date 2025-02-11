import React from 'react'
import { useForm } from "react-hook-form";

const ReactForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors  , isSubmitting},
      } = useForm();
    
      let onSubmit = async (data: any) => {
        await new Promise((resolve)=>{setTimeout(resolve,3000)})
        console.log("Submming the form data", data);
      };

  return (
    <form className="bg-slate-200" onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label htmlFor="">First Name :</label>
      <input
        type="text"
        {...register("firstName", {
          required: true,
          minLength: {value:3,message:"min length mxt be 3"},
          maxLength: {value:6,message:"max length mxt be 6"},
        })}
      />
      {errors.firstName && <small className="text-red-600">{errors.firstName.message}</small>}
    </div>
    <div>
      <label htmlFor="">Middle Name :</label>
      <input type="text" {...register("middleName",{
          required: true,
          minLength: {value:3,message:"min length mxt be 3"},
          maxLength: {value:6,message:"max length mxt be 6"},
        })} />
          {errors.middleName && <small className="text-red-600">{errors.middleName.message}</small>}
    </div>
    <div>
      <label htmlFor="">Last Name :</label>
      <input type="text" {...register("lastName")} />
    </div>

   <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"} />
  </form>
  )
}

export default ReactForm