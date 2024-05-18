// components/PatientInformation.tsx
'use client'

import React from 'react'
import { usePatientContext } from '@/hooks/PatientContext' // Correct import path
import Image from 'next/image'
import Schedule from '@/assets/icons/navbar/Schedule'
import FemaleIcon from '@/assets/icons/PatientInformation/FemaleIcon'
import PhoneIcon from '@/assets/icons/PatientInformation/PhoneIcon'
import InsuaranceIcon from '@/assets/icons/PatientInformation/InsuaranceIcon'

const formatDate = (dateString: string | number | Date) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const PatientInformation = () => {
  const { selectedPatient } = usePatientContext()

  if (!selectedPatient) {
    return <div>Please select a patient to view details.</div>
  }

  return (
    <div className="bg-white shadow-sm rounded-xl p-6 w-[367px] h-[740px]">
      <div className="flex flex-col items-center mt-[8px]">
        <Image
          src={selectedPatient.profile_picture}
          alt={selectedPatient.name}
          className="w-[200px] h-[200px] rounded-full mb-4"
          width={96}
          height={96}
        />
        <h2 className="text-[24px] font-extrabold my-[10px]">
          {selectedPatient.name}
        </h2>
      </div>
      <div className="mt-6 space-y-[24px]">
        <div className="flex items-center space-x-[16px]">
          <div
            className="bg-gray-100 p-2 rounded-full w-[42px] h-[42px] flex justify-center items-center"
          >
            <Schedule />
          </div>
          <div className="flex flex-col">
            <div className="text-[14px] ">Date Of Birth:</div>
            <div className="text-[14px] font-bold">
              {formatDate(selectedPatient.date_of_birth)}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-[16px]">
          <div className="">
            <FemaleIcon />
          </div>
          <div className="flex flex-col">
            <div className="text-[14px] ">Gender:</div>
            <div className="text-[14px] font-bold">
              {selectedPatient.gender}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-[16px]">
          <div className="">
            <PhoneIcon />
          </div>
          <div className="flex flex-col">
            <div className="text-[14px] ">Contact Info:</div>
            <div className="text-[14px] font-bold">
              {selectedPatient.phone_number}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-[16px]">
          <div className="">
            <PhoneIcon />
          </div>
          <div className="flex flex-col">
            <div className="text-[14px] ">Emergency Contacts:</div>
            <div className="text-[14px] font-bold">
              {selectedPatient.emergency_contact}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-[16px]">
          <div className="">
            <InsuaranceIcon />
          </div>
          <div className="flex flex-col">
            <div className="text-[14px] ">Insurance Provider:</div>
            <div className="text-[14px] font-bold">
              {selectedPatient.insurance_type}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-[220px] h-[41px] items-center bg-navBarActive rounded-full mx-auto mt-8 text-[14px] font-bold">
        Show All Information
      </div>
    </div>
  )
}

export default PatientInformation
