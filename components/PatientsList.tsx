'use client'

import HorizontalDots from '@/assets/icons/patientList/HorizontalDots'
import SearchIcon from '@/assets/icons/patientList/SearchIcon'
import Image from 'next/image'
import { useState } from 'react'

interface Patient {
  name: string
  gender: string
  age: number
  profile_picture: string
}

interface PatientListProps {
  patients: Patient[]
}

const PatientList = ({ patients }: PatientListProps) => {
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null)

  return (
    <div className="w-[364px] h-[1054px] bg-white shadow-sm rounded-2xl mt-10">
      <div className="flex items-center justify-between mb-4 p-4">
        <h2 className="text-2xl font-bold">Patients</h2>
        <div className="flex items-center ">
          <SearchIcon />
        </div>
      </div>
      <ul className="overflow-y-auto h-[970px] scrollbar-thin scrollbar-thumb-rounded-full">
        {patients.map((patient, index) => (
          <li
            key={index}
            className={`py-3 mb-2 cursor-pointer flex items-center ${
              selectedPatient === patient.name ? 'bg-patientListSelect' : ''
            }`}
            onClick={() => setSelectedPatient(patient.name)}
          >
            <Image
              src={patient.profile_picture}
              alt={patient.name}
              className="w-12 h-12 rounded-full mx-3"
              width={48}
              height={48}
            />
            <div className="flex-grow">
              <h3 className="text-md font-semibold">{patient.name}</h3>
              <p className="text-sm text-gray-600">
                {patient.gender}, {patient.age}
              </p>
            </div>
            <div className='mr-4'>
              <HorizontalDots />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PatientList
