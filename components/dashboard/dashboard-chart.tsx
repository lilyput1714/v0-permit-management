"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"

interface DashboardChartProps {
  type: "observations" | "incidents"
}

export default function DashboardChart({ type }: DashboardChartProps) {
  // Mock data for observations chart
  const observationsData = [
    { name: "Jan", safe: 8, unsafe: 3, nearMiss: 1 },
    { name: "Feb", safe: 10, unsafe: 4, nearMiss: 2 },
    { name: "Mar", safe: 12, unsafe: 2, nearMiss: 1 },
    { name: "Apr", safe: 15, unsafe: 5, nearMiss: 3 },
    { name: "May", safe: 9, unsafe: 3, nearMiss: 2 },
  ]

  // Mock data for incidents chart
  const incidentsData = [
    { name: "Property Damage", value: 8 },
    { name: "First Aid", value: 5 },
    { name: "Medical Treatment", value: 3 },
    { name: "Environmental", value: 2 },
    { name: "Near Miss", value: 12 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

  if (type === "observations") {
    return (
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={observationsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="safe" fill="#4ade80" name="Safe" />
            <Bar dataKey="unsafe" fill="#f87171" name="Unsafe" />
            <Bar dataKey="nearMiss" fill="#fbbf24" name="Near Miss" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={incidentsData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {incidentsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
