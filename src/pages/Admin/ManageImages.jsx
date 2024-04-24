import { Modal } from "antd";
import React, { useRef, useState } from "react";
import { HiFolderAdd } from "react-icons/hi";
import Input from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { imageUpload } from "../../services/Index";
import toast from "react-hot-toast";

export const ManageImages = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const { handleSubmit, register, formState, reset } = useForm();
  const { errors } = formState;
  const inputRef = useRef();
  let file = new FormData();

  const onSubmit = async (data) => {
    console.log(data);
    reset();

    try {
      file.append("file_upload", data.image[0]);
      file.append("name", data.name);
      file.append("description", data.description);

      setLoading(true);
      const response = await imageUpload(file);

      if (response.status === 200) {
        console.log(response.data);
        toast.success(`${response.data.message}`);
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
      setModalOpen(false);
    }
  };

  return (
    <div>
      <h1 className="text-xl text-sky-900 font-bold flex justify-center items-center gap-4 mt-5">
        <span>Create Image</span>
        <HiFolderAdd className="w-8 h-8" onClick={() => setModalOpen(true)} />
      </h1>
      <Modal
        title="Create Image"
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={handleSubmit(onSubmit)}
        footer // Trigger form submission
      >
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
      </Modal>
    </div>
  );
};
