import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import axios from "axios";
import Input from "../../components/Input/Input";

export const SignupForm = () => {
  const inputRef = useRef();
  const { handleSubmit, register, formState, getValues, reset } = useForm();

  const {errors} = formState
  const onSubmit = async (data) => {
    console.log(data);
    const { name, email, password } = data;
    reset();
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
      />
      <Input
        ref={inputRef}
        label='email'
        id="email"
        type="email"
        error={errors?.email?.message}
        register={register} 
        {...register("email", {
          required: "This field is required",
        })}
      />
      <Input
        ref={inputRef}
        label='Password'
        id=""
        type="text"
        error={errors?.name?.message}
        register={register} 
        {...register("name", {
          required: "This field is required",
        })}
      />
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
      />

      <div className="p-2 flex justify-between">
        <Button type="reset">Cancel</Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
