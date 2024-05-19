'use client'

import Image from 'next/image'
import React from 'react'
import Heart from '@/assets/png/HeartRateCard/HeartBPM.png'
import { usePatientContext } from '@/hooks/PatientContext'
import ArrowDown from '@/assets/icons/chart/ArrowDown'

const HeartRate = () => {
  const { selectedPatient } = usePatientContext()

  if (!selectedPatient) {
    return <div>Please select a patient to view details.</div>
  }

  if (!selectedPatient.diagnosis_history) {
    return <div>No diagnostics history available for the selected patient.</div>
  }

  return (
    <div className="w-[228px] h-[242px] p-4 bg-heartRate rounded-xl shadow-sm ">
      <Image src={Heart} alt={''} className="w-[96px] mb-4" />
      <div className="text-left flex flex-col mb-3 -space-y-1">
        <p className="text-[16px] font-medium">Heart Rate</p>
        <p className="text-[30px] font-extrabold text-gray-900">
          {selectedPatient?.diagnosis_history[0].heart_rate.value}°F
        </p>
      </div>
      <div className="text-[14px] text-gray-500 font-normal flex items-center gap-4">
        <span>
          <ArrowDown />
        </span>
        Normal
      </div>
    </div>
  )
}

export default HeartRate
