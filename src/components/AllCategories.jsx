import React from 'react'

import { useContract,useContractRead } from '@thirdweb-dev/react'

import useStore from '../store'

import contractAbi from '../contracts/abi.json'
import Specialty from './Specialty'

const AllCategories = () => {

    const {contractaddress} = useStore((state) => ({
        contractaddress:state.contractaddress,
    }))

    const {contract} = useContract(
        contractaddress,contractAbi.abi
    )

    const {data,isLoading,error} = useContractRead(
        contract,
        "getAllCategories",
    )
    
    if(error){
        console.log(error)
        return(
            <div>
                <p className="font-serif text-lg text-green-500 text-center">Error Fetching all specialities...</p>
            </div>
        )
    }
    
  return (
    <>
      {
        isLoading ? (
            <div>
                <p className="font-serif text-lg text-green-500 text-center">Loading...</p>
            </div>
        ) : (
            <div className="w-1/2 h-full flex justify-start items-baseline overflow-scroll gap-2 mx-2 py-2 px-3 overflow-y-auto overflow-x-hidden flex-wrap">
                {
                    data?.map((item,index) => {
                        if(item.name !== '')return <Specialty key={index} data={item}/>
                    })
                }
            </div>
        )
      }
    </>
  )
}

export default AllCategories