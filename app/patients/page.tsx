import PatientList from "@/components/PatientsList"

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
//   console.log(allPatientData)
  return <div className="my-5">
    <PatientList patients={allPatientData} />
  </div>
}

export default Page
