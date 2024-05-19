// pages/Page.tsx
import PatientList from '@/components/PatientsList'
import PatientInformation from '@/components/PatientInformation'
import { PatientProvider } from '@/hooks/PatientContext'
import DiagnosticList from '@/components/DiagnosticList'
import { LabResults } from '@/components/LabResults'
import BloodPressureChart from '@/components/BloodPressureChart'
import DiagnosisHistory from '@/components/DiagnosisHistory'

async function getAllPatients() {
  const username = 'coalition'
  const password = 'skills-test'
  const encodedCredentials = Buffer.from(`${username}:${password}`).toString(
    'base64'
  )

  const res = await fetch(
    'https://fedskillstest.coalitiontechnologies.workers.dev',
    {
      method: 'GET',
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
        'Content-Type': 'application/json',
      },
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Page = async () => {
  const allPatientData = await getAllPatients()
  return (
    <PatientProvider>
      <div className="my-5 flex flex-1 justify-between">
        <PatientList patients={allPatientData} />
        <div className="flex flex-col justify-between">
          <DiagnosisHistory />
          <DiagnosticList />
        </div>
        <div className="flex flex-col justify-between">
          <PatientInformation />
          <LabResults />
        </div>
      </div>
    </PatientProvider>
  )
}

export default Page
