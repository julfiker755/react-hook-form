import React from 'react';
import Field from '../Field';
import { useForm } from "react-hook-form"

const Login = () => {
    const {register,handleSubmit,watch, formState: { errors },setError} = useForm()

    const onSubmit = (data) =>{
        const user={email:"julfiker755.bd@gmail.com",password:"12345678"}
        const found=user.email === data?.email && user?.password === data?.password
        if(!found){
            setError("randomerror",{
                message:`User width email ${data.email} is not found `, 
                type:"random"           
            })
        }else{
            console.log(data)
        }
        
    }
  
    
    return (
        <div className='h-screen justify-center flex flex-col'>
            <div className='w-full lg:max-w-sm border p-3 rounded-md m-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Field label={"Email"} error={errors?.email}>
                <input
                 {...register("email",{required:"Email is not required"})}
                className={`focus:outline-red-700 border  py-1 px-2 rounded-md ${errors?.email && 'border-[red]' }`}
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                />
            </Field>
            <Field label={"Password"} error={errors?.password}>
                <input
                 {...register("password",{required:"Password is not required",minLength:{
                    value:8,
                    message:"Password must be 8 charactor"
                 }})}
                 className={`focus:outline-red-700 border  py-1 px-2 rounded-md ${errors?.password && 'border-[red]' }`}
                type="text"
                name="password"
                id="password"
                placeholder="Enter your password"
                />
            </Field>
            {errors?.randomerror?.message && <div className='bg-[#b05c5c] p-5 text-white'>{errors?.randomerror?.message}</div>}
            
            <Field>
                <button className='bg-[#2f92d0] text-white py-2 px-3 rounded-md'>Login</button>
            </Field>
           
        </form>
        </div>
        </div>
    );
};

export default Login;