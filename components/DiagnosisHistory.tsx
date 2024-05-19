import React from 'react'
import BloodPressureChart from './BloodPressureChart'
import ArrowDown from '@/assets/icons/chart/ArrowDown'
import RespiratoryRate from '@/components/RespiratoryRate'
import Temperature from './Temperature'
import HeartRate from './HeartRate'

const DiagnosisHistory = () => {
  return (
    <div className="w-[766px] h-[673px] px-5 py-2 bg-white rounded-xl mt-3">
      <h2 className="text-2xl font-bold mt-2 mb-7">Diagnosis History</h2>
      <BloodPressureChart />
      <div className="mt-5 flex items-center gap-5">
        <RespiratoryRate />
        <Temperature />
        <HeartRate />
      </div>
    </div>
  )
}

export default DiagnosisHistory
