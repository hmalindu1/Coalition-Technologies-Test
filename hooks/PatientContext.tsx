'use client'

import { createContext, useState, useContext, ReactNode } from 'react'


interface Diagnostic {
  name: string
  description: string
  status: string
}

interface Patient {
  name: string
  gender: string
  age: number
  profile_picture: string
  date_of_birth: string
  phone_number: string
  emergency_contact: string
  insurance_type: string
  diagnostic_list: Diagnostic[]
  lab_results: string[]
}

interface PatientContextProps {
  selectedPatient: Patient | null
  setSelectedPatient: (patient: Patient) => void
}

const PatientContext = createContext<PatientContextProps | undefined>(undefined)

export const PatientProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)

  return (
    <PatientContext.Provider value={{ selectedPatient, setSelectedPatient }}>
      {children}
    </PatientContext.Provider>
  )
}

export const usePatientContext = () => {
  const context = useContext(PatientContext)
  if (!context) {
    throw new Error('usePatientContext must be used within a PatientProvider')
  }
  return context
}
