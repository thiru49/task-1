import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { signUp } from "../../services/Index";
import toast from "react-hot-toast";

export const SignupForm = () => {
  const inputRef = useRef();
  const { handleSubmit, register, formState, getValues } = useForm();
  const [isError,setIsError] = useState('')
  const [loading,setLoading] = useState(false)
  const {errors} = formState


  const onSubmit = async (data) => {
    console.log(data);
    const { name, email, password } = data;
    try {
      setLoading(true);
      const response = await signUp({name,email,password});

      if (response.status === 200) {
        console.log(response.data)
        toast.success(`${response.data.message}`);
        setLoading(false);
      } else {
        console.log(response)
        console.log("Unexpected status code:", response.status);
        toast.error(`Unexpected status code: ${response.status}`);
        setLoading(false);
      }
    } catch (error) {
      console.log(error)
      setIsError(error)
      console.log("register failed:", error.message);
      setLoading(false);
      toast.error(`${error.message}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-sky-300/30 w-1/2 p-4 flex flex-col gap-4 transition-all rounded-sm shadow-md"
    >
      <Input
        ref={inputRef}
        label='Name'
        id="name"
        type="text"
        error={errors?.name?.message}
        register={register} 
        {...register("name", {
          required: "This field is required",
        })}
        disabled={loading}
      />
      <Input
        ref={inputRef}
        label='email'
        id="email"
        type="email"
        error={errors?.email?.message || isError?.response?.data?.error?.email[0]}
        register={register} 
        {...register("email", {
          required: "This field is required",
        })}
        disabled={loading}
      />
      <Input
        ref={inputRef}
        label='Password'
        id="password"
        type="password"
        error={errors?.password?.message}
        register={register} 
        {...register("password", {
          required: "This field is required",
          minLength: {
            value: 8,
            message: "Password needs a minimum of 8 characters"
          }
        })}
        disabled={loading}
      />
      <Input
        ref={inputRef}
        label='ConfirmPassword'
        id="confirmPassword"
        type="password"
        error={errors?.confirmPassword?.message}
        register={register} 
        {...register("confirmPassword", {
          required: "This field is required",
          validate:(value)=>(
            value === getValues().password || 'Password not matched'
          )
        })}
        disabled={loading}
      />

      <div className="p-2 flex justify-between">
        <Button type="reset" className='bg-sky-500 px-4 py-2'  disabled={loading}>Cancel</Button>
        <Button type="submit" className='bg-sky-500 px-4 py-2'  disabled={loading}>Submit</Button>
      </div>
    </form>
  );
};
