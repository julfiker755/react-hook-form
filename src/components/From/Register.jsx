import React from 'react';
import Field from '../Field';
import { Controller, useFieldArray, useForm } from "react-hook-form"
import NumberInput from '../NumberInput';

const Register= () => {
    const {register,handleSubmit,control,formState: { errors }} = useForm()
    const { fields, append,remove} = useFieldArray({
       name:"social",
       control
      });
    

    const onSubmit = (data) =>{
            console.log(data)
    }
  
    
    return (
        <div className='h-screen justify-center flex flex-col'>
            <div className='w-full lg:max-w-sm border p-3 rounded-md m-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Field label={"Email"} error={errors?.email}>
                <input
                 {...register("email",{required:"Email is  required"})}
                className={`focus:outline-red-700 border  py-1 px-2 rounded-md}`}
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                />
            </Field>
            <Field label={"Password"} error={errors?.password}>
                <input
                 {...register("password",{required:"Password is  required",minLength:{
                    value:8,
                    message:"Password must be 8 charactor"
                 }})}
                 className={`focus:outline-red-700 border  py-1 px-2 rounded-md}`}
                type="text"
                name="password"
                id="password"
                placeholder="Enter your password"
                />
            </Field>
            <Field label={"Full Name"} error={errors?.fullname}>
                <input
                 {...register("fullname",{required:"fullname is  required"})}
                 className={`focus:outline-red-700 border  py-1 px-2 rounded-md}`}
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Enter your Full name"
                />
            </Field>
            {/* customize number field starts*/}
            <Field label={"Age"} error={errors?.age}>
                     <Controller
                            name="age"
                            control={control}
                            defaultValue={0}
                            render={({ field: { ref, ...field } }) => (
                                <NumberInput
                                    id="age"
                                    className={`focus:outline-red-700 border  py-1 px-2 rounded-md}`}
                                    {...field}
                                />
                            )}
                            rules={{
                                max: {
                                    value: 100,
                                    message: "Age can be between 0 and 100",
                                },
                            }}
                        />
            </Field>
            <Field label={"Image"} error={errors?.image}>
                <input
                 {...register("image",{required:"image is  required"})}
                 className={`focus:outline-red-700 border  py-1 px-2 rounded-md}`}
                type="file"
                name="image"
                id="image"
                />
            </Field>
            {/* customize number field ends */}
           <h1 className='font-bold text-xl'>Enter social Handles</h1>
           {fields.map((field,index)=>{
            return (
                <div key={field?.id} className='flex gap-2 items-center'>
                    <div  className='flex gap-2'>
                    <Field label={"Social Name"} >
                          <input
                          type="text"
                          className={`focus:outline-red-700 border w-full py-1 px-2 rounded-md}`}
                          {...register(`social[${index}].name`)}
                           id={`social[${index}].name`}
                           name={`social[${index}].name`}
                          />
                    </Field>
                    <Field label={"Social URL"} >
                          <input
                          type="text"
                          className={`focus:outline-red-700 border w-full  py-1 px-2 rounded-md}`}
                          {...register(`social[${index}].url`)}
                           id={`social[${index}].url`}
                           name={`social[${index}].url`}
                          />
                    </Field>
                    </div>
                    <button onClick={()=>remove(index)} className='bg-[#2ede5d] px-4 mt-[25px] h-fit text-white'>Remove</button>
                </div>
            )
           })}
          <div className='flex justify-center'>
          <button
           className='bg-[#2d83c5] py-1 px-3 text-white rounded-md'
           onClick={()=>append({name:"",url:""})}
           >
            
            Add a social handle
           </button>
          </div>
            
            <Field>
                <button className='bg-[#2f92d0] text-white py-2 px-3 rounded-md'>Register</button>
            </Field>
           
        </form>
        </div>
        </div>
    );
};


export default Register;