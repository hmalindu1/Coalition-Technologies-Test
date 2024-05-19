'use client'

import { usePatientContext } from '@/hooks/PatientContext'
import React from 'react'

const DiagnosticList = () => {
  const { selectedPatient } = usePatientContext()

  if (!selectedPatient) {
    return <div>Please select a patient to view details.</div>
  }

  return (
    <div className="bg-white shadow-sm rounded-xl p-6 mt-6 w-[766px] h-[349px] overflow-auto">
      <h2 className="text-2xl font-bold mb-8 sticky top-0 bg-white z-10">
        Diagnostic List
      </h2>
      <div className="overflow-auto max-h-[calc(100%-70px)] scrollbar-thin scrollbar-thumb-rounded-full">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="sticky top-0 z-10">
            <tr>
              <th className="pl-6 pr-12 py-3 text-left text-[14px] font-bold text-black tracking-wider bg-gray-100 rounded-s-full">
                Problem/Diagnosis
              </th>
              <th className="px-6 py-3 text-left text-[14px] font-bold text-black tracking-wider bg-gray-100">
                Description
              </th>
              <th className="px-6 py-3 text-left text-[14px] font-bold text-black tracking-wider bg-gray-100 rounded-e-full">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {selectedPatient.diagnostic_list.map((diagnostic, index) => (
              <tr key={index}>
                <td className="pl-6 py-3 text-sm font-medium text-gray-600">
                  {diagnostic.name}
                </td>
                <td className="px-6 py-3 text-sm text-gray-600">
                  {diagnostic.description}
                </td>
                <td className="px-6 py-3 text-sm text-gray-600">
                  {diagnostic.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DiagnosticList
