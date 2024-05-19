'use client'

import DownloadIcon from '@/assets/icons/labResults/DownloadIcon'
import { usePatientContext } from '@/hooks/PatientContext'
import React from 'react'

export const LabResults = () => {
  const { selectedPatient } = usePatientContext()
  if (!selectedPatient) {
    return <div>Please select a patient to view details.</div>
  }
  return (
    <div className="bg-white shadow-sm rounded-xl p-6 w-[367px] h-[296px] overflow-auto">
      <h2 className="text-2xl font-bold mb-8 sticky top-0 bg-white z-10">
        Lab Results
      </h2>
      <ul className="overflow-auto max-h-[calc(100%-70px)] scrollbar-thin scrollbar-thumb-rounded-full">
        {selectedPatient.lab_results.map((result, index) => (
          <li key={index} className="flex justify-between items-center mb-4 px-4">
            <span>{result}</span>
            <DownloadIcon className="w-5 h-5" />
          </li>
        ))}
      </ul>
    </div>
  )
}
