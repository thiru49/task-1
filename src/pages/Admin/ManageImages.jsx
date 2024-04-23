import { Modal } from 'antd'
import React, { useState } from 'react'
import { HiFolderAdd } from 'react-icons/hi'
import Input from '../../components/Input/Input'
export const ManageImages = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <h1 className='text-xl text-sky-900 font-bold flex justify-center items-center gap-4 mt-5'><span>Create Image</span><HiFolderAdd className='w-8 h-8' onClick={() => setModalOpen(true)}/></h1>
      <Modal
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <div className='bg-sky-400 border-2 border-black p-2 flex flex-col gap-2'>
          <h1 className='text-center text-xl'>Create Image</h1>
          <Input label='Name' name='name'/>
          <Input label='Description' name='description'/>
        </div>
      </Modal>
    </div>
  )
}
