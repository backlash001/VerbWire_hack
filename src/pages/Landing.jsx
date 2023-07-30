/* eslint-disable no-unused-vars */
import React from 'react'

import Blockchain from '../assets/landing/blockchain.jpg';
import DoctorAppointment from '../assets/landing/doctor.jpg';
import FundRaiser from '../assets/landing/fund-raiser.jpg';
import Hero from '../assets/landing/hero.jpg';


const Landing = () => {
  return (
    <div className="h-[88vh] w-screen relative snap-mandatory snap-y scroll-smooth overflow-scroll">
      {/* <div className="absolute top-0 left-0 right-0 h-20 z-10 ">navigation</div> */}
      <section
        className="bg-gradient-to-tl from-[#CEEFFF] from-10% via-[#EAF8FF] to-[#EFFAFD] w-full h-screen snap-center shrink-0 flex items-center justify-center relative"
      >
        <p className="absolute top-[10%] bottom-0 left-[50%] px-10 text-end flex items-center justify-center  flex-col z-10">
          {/* <span className="text-blue-900">presenting</span> */}
          <h1 className="font-extrabold text-[4rem] m-4 text-center">
            Med <span className="text-blue-900">Secure</span>
          </h1>
          <p className=" text-lg text-center px-10 text-slate-700 text-[1.1rem] font-semibold tracking-wider">
            Revolutionize way for patients to book doctors' appointments by
            leveraging the power of blockchain technology. By combining the
            convenience of online booking with the security and transparency of
            blockchain
          </p>
        </p>
        <img
          src={Hero}
          alt=""
          className="w-3/4 h-full object-contain absolute bottom-0 left-0 scale-75 -translate-x-20 translate-y-24"
        />
      </section>
      <section
        className="bg-gradient-to-bl from-[#CEEFFF] from-10% via-[#EAF8FF] to-[#EFFAFD]  h-screen w-full snap-center
      
      "
      >
        <div
          className="grid h-full w-full
        grid-cols-2 place-items-center
        "
        >
          <div className="p-[3rem] flex items-start justify-center flex-col">
            <h1 className="text-[3.25rem] font-bold">Booking</h1>
            <h1 className="text-[3.25rem] font-bold">
              Doctor's <span className="text-blue-900">Appointment</span>
            </h1>
            <p className="my-10 text-start text-[1.1rem] tracking-wider italic">
              Through the blockchain, patients will have direct control over
              their appointment scheduling. They can view the real-time
              availability of doctors, select their preferred time slot, and
              book appointments instantly. This decentralized approach
              eliminates the need for intermediaries, reduces administrative
              overhead, and minimizes the risk of double bookings or scheduling
              conflicts
            </p>
          </div>
          <div
            className="h-full
          flex items-end justify-center
          "
          >
            <img
              src={DoctorAppointment}
              alt=""
              className="max-h-full w-full object-contain"
            />
          </div>
        </div>
      </section>
      <section
        className="bg-gradient-to-b from-[#EEF9FE] to-white h-screen w-full snap-center
      
      "
      >
        <div
          className="grid h-full w-full
        grid-cols-[2fr_1fr] place-items-center
        "
        >
          <div className=" h-full flex items-end justify-center">
            <img
              src={Blockchain}
              alt=""
              className="w-full max-h-full object-contain"
            />
          </div>
          <div className="p-[3rem] flex items-start justify-center flex-col">
            <h1 className="text-[3rem] font-bold">
              Secure <span className="text-blue-900">blockchain</span>
            </h1>
            <p className="my-10 text-end italic text-[1.1rem] tracking-wider">
              Our system will utilize blockchain technology to ensure the
              security and integrity of the appointment booking process. By
              leveraging blockchain's decentralized nature and cryptographic
              algorithms, we can eliminate the risks of data tampering,
              unauthorized access, and other security vulnerabilities
            </p>
          </div>
        </div>
      </section>
      <section
        className="bg-[#FFFFFF] h-screen w-full snap-center
      
      "
      >
        <div
          className="grid h-full w-full
        grid-cols-[1fr_2fr] place-items-center
        "
        >
          <div className="p-[3rem] flex items-start justify-center flex-col">
            <h1 className="text-[3rem] font-bold">
              Fund <span className="text-blue-900">raiser</span>
            </h1>
            <p className="my-10 text-start italic text-[1.1rem] tracking-wider">
              The fundraiser aims to secure the necessary financial resources to
              develop, test, and launch the platform successfully. The funds
              raised will be utilized for software development, blockchain
              integration, user experience design, security audits, marketing
              efforts, and operational expenses
            </p>
          </div>
          <div className="h-full w-full">
            <img
              src={FundRaiser}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing