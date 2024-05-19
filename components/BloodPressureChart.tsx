'use client'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from 'chart.js'
import { usePatientContext } from '@/hooks/PatientContext'
import Dropdown from '@/assets/icons/chart/Dropdown'
import ArrowDown from '@/assets/icons/chart/ArrowDown'
import ArrowUp from '@/assets/icons/chart/ArrowUp'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
)

const BloodPressureChart = () => {
  const { selectedPatient } = usePatientContext()

  if (!selectedPatient) {
    return <div>Please select a patient to view details.</div>
  }

  if (!selectedPatient.diagnosis_history) {
    return <div>No diagnostics history available for the selected patient.</div>
  }

  const startDate = new Date(2023, 9, 1) // October 1, 2023
  const endDate = new Date(2024, 2, 31) // March 31, 2024

  const recentHistory = selectedPatient.diagnosis_history
    .filter((entry) => {
      const entryMonth = new Date(entry.month + ' 1, 2020').getMonth()
      const entryDate = new Date(entry.year, entryMonth)
      return entryDate >= startDate && entryDate <= endDate
    })
    .sort((a, b) => {
      const dateA = new Date(a.year, new Date(a.month + ' 1, 2020').getMonth())
      const dateB = new Date(b.year, new Date(b.month + ' 1, 2020').getMonth())
      return dateA - dateB
    })

  console.log('Filtered recent history:', recentHistory)

  const months = [
    'Oct, 2023',
    'Nov, 2023',
    'Dec, 2023',
    'Jan, 2024',
    'Feb, 2024',
    'Mar, 2024',
  ]

  console.log('Last six months:', months)

  const historyMap = recentHistory.reduce((acc, entry) => {
    const monthYear = `${entry.month.slice(0, 3)}, ${entry.year}`
    acc[monthYear] = entry
    return acc
  }, {})

  console.log('History map:', historyMap)

  const systolicData = months.map((monthYear) =>
    historyMap[monthYear]
      ? historyMap[monthYear].blood_pressure.systolic.value
      : null
  )
  const diastolicData = months.map((monthYear) =>
    historyMap[monthYear]
      ? historyMap[monthYear].blood_pressure.diastolic.value
      : null
  )

  console.log('Systolic Data:', systolicData)
  console.log('Diastolic Data:', diastolicData)

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Systolic',
        data: systolicData,
        borderColor: 'rgba(230, 111, 210, 1)',
        backgroundColor: '#E66FD2',
        borderWidth: 2,
        pointRadius: 6,
        pointBorderColor: '#ffffff',
        pointBackgroundColor: 'rgba(230, 111, 210, 1)',
        lineTension: 0.5,
      },
      {
        label: 'Diastolic',
        data: diastolicData,
        borderColor: 'rgba(140, 111, 230, 1)',
        backgroundColor: 'rgba(140, 111, 230, 1)',
        borderWidth: 2,
        pointRadius: 6,
        pointBorderColor: '#ffffff',
        pointBackgroundColor: 'rgba(140, 111, 230, 1)',
        lineTension: 0.5,
      },
    ],
  }

  const options = {
    scales: {
      x: {
        ticks: {
          callback: function (value: any, index: any, values: any): string {
            const label = this.getLabelForValue(value)
            return label.slice(0, 3) + ', ' + label.slice(-4)
          },
          maxRotation: 0,
          minRotation: 0,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
        grid: {
          display: true,
          color: 'rgba(200, 200, 200, 1)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || ''
            if (label) {
              label += ': '
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y
            }
            return label
          },
        },
      },
    },
  }

  return (
    <div className="flex bg-chartBackground rounded-xl items-start justify-between py-2">
      <div className="p-4 rounded-xl w-2/3 h-[298px] flex items-center">
        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[18px] font-bold ">Blood Pressure</h2>
            <div className="flex items-center space-x-2 ">
              <h3 className="text-[14px]">Last 6 Months</h3>
              <Dropdown />
            </div>
          </div>
          <Line data={chartData} options={options} />
        </div>
      </div>
      <div className="flex flex-col flex-1 text-left px-8 py-2">
        <div className="mb-4">
          <div className="flex items-center justify-left text-[14px] font-bold text-gray-700">
            <span className="h-3 w-3 bg-Systolic rounded-full mr-2"></span>
            Systolic
          </div>
          <div className="text-[22px] font-bold text-gray-900">
            {
              selectedPatient?.diagnosis_history[0].blood_pressure.systolic
                .value
            }
          </div>
          <div className="text-gray-600 text-[14px] flex items-center gap-2">
            {' '}
            <span>
              <ArrowUp />
            </span>{' '}
            Higher than Average
          </div>
        </div>
        <div className="flex h-[1px] bg-gray-300" />
        <div className="mt-4">
          <div className="flex items-center justify-left text-[14px] font-bold text-gray-700">
            <span className="h-3 w-3 bg-Diastolic rounded-full mr-2"></span>
            Diastolic
          </div>
          <div className="text-[22px] font-bold text-gray-900">
            {
              selectedPatient?.diagnosis_history[0].blood_pressure.diastolic
                .value
            }
          </div>
          <div className="text-gray-600 text-[14px] flex items-center gap-2">
            {' '}
            <span>
              <ArrowDown />
            </span>
            Lower than Average
          </div>
        </div>
      </div>
    </div>
  )
}

export default BloodPressureChart
