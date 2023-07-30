
import { useContract,useContractRead } from '@thirdweb-dev/react'

import useStore from '../../store'
import DoctorCard from '../../components/DoctorCard'

import contractAbi from '../../contracts/abi.json'

import { useParams } from 'react-router-dom'

const SpecifiedDoctorList = () => {

    const {id} = useParams()
    const speciality = id

    const {contractaddress} = useStore((state) => ({
        contractaddress:state.contractaddress,
    }))

    const {contract} = useContract(
        contractaddress,contractAbi.abi
    )

    const {data,isLoading,error} = useContractRead(
        contract,
        "getAllDoctorsInCategory",
        [speciality]
    )

    console.log(data)

    if(error) {
        console.log(error)
        return(
            <div className='text-bold text-red-800 font-serif'>
                Error in getting all doctors!!
            </div>
        )
    }
    
  return (
    <div className='w-full flex bg-bg-primary justify-center items-start h-[88vh] overflow-scroll overflow-x-hidden py-2'>
        {
            isLoading ? (
                <div className='font-semibold text-green-600 font-serif'>
                    Loading Doctors...
                </div>
            ) : (
                <div className='w-full flex gap-3 px-2'>
                    {
                        data?.map((item,index) => (
                            <DoctorCard data={item} key={index}/>
                        )
                        )
                    }
                </div>
            )
        }
    </div>
  )
}

export default SpecifiedDoctorList