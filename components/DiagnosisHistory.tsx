import React from 'react'
import BloodPressureChart from './BloodPressureChart'

const DiagnosisHistory = () => {
  return (
    <div className='w-[766px] h-[673px] p-5 bg-white rounded-xl mt-3'>
        <h2 className='text-2xl font-bold mb-10'>Diagnosis History</h2>
        <BloodPressureChart />
        <div>
            
        </div>
    </div>
  )
}

export default DiagnosisHistory