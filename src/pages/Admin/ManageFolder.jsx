import React, { useState } from "react";
import Input from "../../components/Input/Input";
import imagesArray from "../../assets/assets";
import { TiTick } from "react-icons/ti";
import { IoCloseCircle } from "react-icons/io5";
import Modal from "./ManageImages/Modal";
import Button from "../../components/Button/Button";
import { HiFolderAdd } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/Admin/admin";
import { BsFolder2 } from "react-icons/bs";

export const ManageFolder = () => {
  const folder = useSelector(state=>state.admin)
  console.log(folder) 
  return (
    <div className="relative flex flex-col justify-center items-center">
     
      <Modal>
        <Modal.Open opens="create-image">
          <h1 className="text-xl text-sky-900 font-bold flex justify-center items-center gap-4 mt-5">
            <span>Create Folder</span>
            <Button>
              <HiFolderAdd className="w-8 h-8" />
            </Button>
          </h1>
        </Modal.Open>
        <Modal.Window name="create-image">
          <CreateFolder />
        </Modal.Window>
      </Modal>
      <div>
        {folder.map(item=><div key={item.id} className="shadow-md p-4">
            <div className="">
            <BsFolder2 className="size-12"/>
            </div>
            <p className="text-sm font-semibold">{item.name}</p>
        </div>)}
      </div>
    </div>
  );
};

const CreateFolder = ({onCloseModel}) => {
  const dispatch =useDispatch()
  const [selectedImages, setSelectedImages] = useState([]);
  const [select, setSelect] = useState(false);
  const [name,setName] = useState('')
  const handleImageSelect = (imageName, e) => {
    e.stopPropagation();
    if (!selectedImages.includes(imageName)) {
      setSelectedImages([...selectedImages, imageName]);
    }
  };

  const handleImageRemove = (imageName, e) => {
    e.stopPropagation();
    setSelectedImages(selectedImages.filter((name) => name !== imageName));
  };

  const handleSubmit = () => {
       if(!name) return;
       console.log({
        name,
        imageList:selectedImages
       })
       let data = {
        name,
        imageList:selectedImages
       }
      dispatch(register(data))
       onCloseModel?.()
  };
  
  return (
    <div className="flex flex-col gap-1" onClick={(e) =>setSelect(false)}>
      <div>

      </div>
      <Input label="Name" onChange={(e)=>setName(e.target.value)}/>
      <section className="flex flex-col gap-1 relative">
        <label htmlFor="" className="text-sky-800 font-bold">
          Add Image :
        </label>
        <div
          className={`bg-white max-w-md min-h-[8vh] relative rounded-sm grid grid-cols-4 p-2 gap-2 border-2 ${
            select ? "border-blue-300" : ""
          } hover:cursor-pointer`}
          onClick={(e) => {
            e.stopPropagation();
            setSelect(!select);
          }}
        >
          {selectedImages.map((imageName) => (
            <span key={imageName} className="bg-blue-200 flex text-[10px] rounded-sm p-1">
              <span>{imageName}</span>
              <span>
                <IoCloseCircle
                  className="size-6 ml-1 cursor-pointer"
                  onClick={(e) => handleImageRemove(imageName, e)}
                />
              </span>
            </span>
          ))}
        </div>
        {select && (
          <ul className="bg-white text-sm max-w-md flex flex-col gap-1 p-2 h-[40vh] overflow-scroll transition-all">
            {imagesArray.map((item) => (
              <li
                key={item.srcName}
                className={`flex justify-between hover:bg-gray-200 ${selectedImages.includes(item.srcName) ? "bg-sky-200 hover:bg-sky-200" : ""} px-5`}
                onClick={(e) => handleImageSelect(item.srcName, e)}
              >
                <span>{item.srcName}</span>
                <span className="flex items-center justify-center">{selectedImages.includes(item.srcName) && <TiTick className="size-5" />}</span>
              </li>
            ))}
          </ul>
        )}
        <Button className='bg-blue-500' onClick={handleSubmit}>Submit</Button>
      </section>
    </div>
  );
};
