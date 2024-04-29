import Modal from './Modal';
import React, {  useContext, useEffect, useRef, useState } from "react";
import { HiFolderAdd } from "react-icons/hi";
import Input from "../../../components/Input/Input";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button/Button";

import toast from "react-hot-toast";
import FsLightbox from 'fslightbox-react';
import imagesArray from '../../../assets/assets';
import { getImageUpload, imageUpload } from '../../../services/Index';


export const ManageImages = () => {
    const [toggler, setToggler] = useState(false);
    const [slide,setSlide] = useState(1)
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

   useEffect(() => {
      const fetchImage = async () => {
        try {
          setLoading(true);
          const response = await getImageUpload();
  
          if (response.status === 200) {
            console.log(response.data);
            setData(response.data);
            toast.success(`${response.data.message}`);
          } else {
            console.log("Unexpected status code:", response.status);
            toast.error(`Unexpected status code: ${response.status}`);
          }
        } catch (error) {
          console.error("API error:", error);
          toast.error(`API error: ${error.message}`);
        } finally {
          setLoading(false);
        }
      };
  
      fetchImage();
    }, [])

    console.log(data)  
   
    return (
    <div>
      <Modal>
        <Modal.Open opens='create-image'>
      <h1 className="text-xl text-sky-900 font-bold flex justify-center items-center gap-4 mt-5">
        <span>Create Image</span>
        <Button><HiFolderAdd className="w-8 h-8"/></Button>
      </h1>
      </Modal.Open>
      <Modal.Window name='create-image'>
       <ImageForm/>
      </Modal.Window>
      </Modal> 
      <div className='grid grid-cols-4 gap-2 h-[500px]'>
      {data.map((item,index)=>(
      <div key={index} className='relative overflow-hidden' onClick={()=>{setSlide(index+1)
      setToggler(!toggler)}}>
        <img src={item.file_path} className='w-full h-full object-center'/>
        </div>))}
      </div>
      <FsLightbox sources={data.map(item=>(item.file_path))} type="image" toggler={toggler} slide={slide}/>
    </div>
  );
};

const ImageForm = ({onCloseModel})=>{

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const inputRef = useRef();
  let file = new FormData();
  const { handleSubmit, register, formState, reset } = useForm();
  const { errors } = formState;
  const onSubmit = async (data) => {
    console.log(data);
    reset();

    try {
      file.append("file_upload", data.image[0]);
      file.append("name", data.name);
      file.append("description", data.description);
      file.append("upload_name", data.uploadName);

      setLoading(true);
      const response = await imageUpload(file);

      if (response.status === 200) {
        console.log(response.data);
        toast.success(`${response.data.message}`);
        onCloseModel?.()
      } else {
        console.log(response);
        console.log("Unexpected status code:", response.status);
        toast.error(`Unexpected status code: ${response.status}`);
      }
    } catch (error) {
      console.error("API error:", error);
      setIsError(error.message);
      toast.error(`API error: ${error.message}`);
    } finally {
      setLoading(false);
      onCloseModel?.()

    }
  };
  return(
    <div className="bg-sky-200 rounded-sm shadow-sm p-2 my-4 flex flex-col gap-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <Input
              label="Name"
              name="name"
              type="text"
              ref={inputRef}
              error={errors?.name?.message}
              register={register}
              {...register("name", { required: "This field required" })}
            />
            <Input
              label="Description"
              name="description"
              type="text"
              ref={inputRef}
              {...register("description", { required: "This field required" })}
              error={errors?.description?.message}
            />
            <Input
              label="UploadName"
              name="uploadName"
              type="text"
              ref={inputRef}
              {...register("uploadName", { required: "This field required" })}
              error={errors?.uploadName?.message}
            />
            <Input
              label="Upload Image"
              name="image"
              type="file"
              accept="image/*"
              ref={inputRef}
              error={errors?.image?.message}
              {...register("image", { required: "upload image" })}
            />
            <div>
              <Button
                className="bg-red-400 border-none text-white"
                type="submit"

              >
                Submit
              </Button>
            </div>
          </form>
        </div>
  )
}