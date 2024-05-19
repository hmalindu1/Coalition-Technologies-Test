'use client'

import Image from 'next/image'
import React from 'react'
import Lungs from '@/assets/png/RespiratoryCard/respiratory.png'
import { usePatientContext } from '@/hooks/PatientContext'

const RespiratoryRate = () => {
  const { selectedPatient } = usePatientContext()

  if (!selectedPatient) {
    return <div>Please select a patient to view details.</div>
  }

  if (!selectedPatient.diagnosis_history) {
    return <div>No diagnostics history available for the selected patient.</div>
  }
  return (
    <div className="w-[228px] h-[242px] p-4 bg-respiratoryRate rounded-xl shadow-sm ">
      <Image src={Lungs} alt={''} className="w-[96px] mb-4" />
      <div className="text-left flex flex-col mb-3 -space-y-1">
        <p className="text-[16px] font-medium">Respiratory Rate</p>
        <p className="text-[30px] font-extrabold text-gray-900">{selectedPatient?.diagnosis_history[0].respiratory_rate.value}</p>
      </div>
      <div className="text-[14px] text-gray-500 font-normal">Normal</div>
    </div>
  )
}

export default RespiratoryRate
