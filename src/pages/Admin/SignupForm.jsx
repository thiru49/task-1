import React from "react";
import FormRow from "../../components/Input"; 
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import axios from "axios";

export const SignupForm = () => {
  const { handleSubmit, register,formState,getValues,reset} = useForm();

  const {errors} = formState

  const onSubmit = async (data) => {
    console.log(data);
    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/user/register`, {
      name:data.name,
      email:data.email,
      password:data.password
    })
    .then( (response) =>{
      console.log(response);
    })
    .catch( (error) => {
      console.log(`error name :${error}`);
    });
    console.log('clicked')
    reset()
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-sky-300/30 w-1/2 p-4 flex flex-col gap-4 transition-all rounded-sm shadow-md"
    >
      <FormRow label="Name" error={errors?.name?.message}>
        <input
          id="name"
          type="text"
          className="px-2 text-sm py-1 col-span-2"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Email" error={errors?.email?.message}>
        <input
          id="email"
          type="email"
          className="px-2 text-sm py-1 col-span-2"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address"
            }
          })}
        />
      </FormRow>
      <FormRow label="Password" error={errors?.password?.message}>
        <input
          id="password"
          type="password"
          className="px-2 text-sm py-1 col-span-2"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters"
            }
          })}
        />
      </FormRow>
      <FormRow label="Confirm Password" error={errors?.confirmPassword?.message}>
        <input
          id="confirmPassword"
          type="password"
          className="px-2 text-sm py-1 col-span-2"
          {...register("confirmPassword", {
            required: "This field is required",
            validate: value=> value === getValues().password || 'password did not match'
          })}
        />
      </FormRow>
     <div className="p-2 flex justify-between">
        <Button type='reset'>Cancel</Button>
        <Button type='submit'>Submit</Button>
     </div>
        
      
    </form>
  );
};
