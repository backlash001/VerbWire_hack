import React from 'react'

import { useNavigate } from 'react-router-dom';

const Specialty = (props) => {

    const navigate = useNavigate();

    const imglink = 'https://images.unsplash.com/photo-1530026454774-50cce722a1fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    const data = props.data;

  return (
    <div className='flex justify-center items-center flex-col py-3 px-2 border-2 border-border-primary rounded-md gap-3 w-32 bg-bg-secondary cursor-pointer hover:bg-gray-800'
    onClick={() => navigate(`/doctor/${data.name}/`)}
    >
        <p className='text-white font-semibold font-serif'>{data.name}</p>
        <img src={imglink} alt="" className='w-10 h-10 rounded-full'/>
        <p className='text-center text-white font-serif text-sm'>Speciality description</p> 
    </div>
  )
}

export default Specialty