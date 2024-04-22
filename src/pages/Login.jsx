// Login.js

import React, { useState } from 'react';
import FormRow from '../components/Input';
import Button from '../components/Button';
import Password from 'antd/es/input/Password';


const Login = () => {
  const [user, setUser] = useState({
    name:"",
    password:""
  });
 
  

  const handleLogin = () => {
    
     console.log('clicked')
  };

  return (
    <section className='h-[100vh] flex flex-col justify-center items-center'>

    
    <div className='flex flex-col w-[40%] bg-sky-200 gap-4 p-3'>
      <h1 className='text-center mt-4 text-sky-800 text-bold'>Login</h1>
      <FormRow label='UserName'>
       <input
        type="text"
        className='px-2 py-1 col-span-2'
        placeholder="Username"
        value={user.name}
        onChange={(e) => setUser((data)=>({
          ...data,
          name:e.target.value
        }))}
       />
      </FormRow>
      <FormRow label='Password'>
       <input
        type="text"
        placeholder="Username"
        className='px-2 py-1 col-span-2'
        value={user.password}
        onChange={(e) => setUser((data)=>({
          ...data,
          password:e.target.value
        }))}
       />
      </FormRow>
      <div className='flex justify-center'>
      <Button onClick={handleLogin}>Login</Button>
      </div>
      
    </div>
    </section>
  );
};

export default Login;
