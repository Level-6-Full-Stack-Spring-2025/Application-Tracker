"use client"

import * as React from "react"
import { Smile, TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { status: "pendingResult", count: 5, fill: "var(--color-pendingResult)" },
  { status: "OArecieved", count: 10, fill: "var(--color-OArecieved)" },
  { status: "interviewed", count: 2, fill: "var(--color-interviewed)" },
  { status: "offerRecieved", count: 1, fill: "var(--color-offerRecieved)" },
  { status: "rejected", count: 40, fill: "var(--color-rejected)" },
]

const chartConfig = {
  count: {
    label: "Applications",
  },
  pendingResult: {
    label: "Pending",
    color: "hsl(var(--chart-1))",
  },
  OArecieved: {
    label: "OA",
    color: "hsl(var(--chart-2))",
  },
  interviewed: {
    label: "Interview",
    color: "hsl(var(--chart-3))",
  },
  offerRecieved: {
    label: "Offer",
    color: "hsl(var(--chart-4))",
  },
  rejected: {
    label: "Rejected",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function PieChartDisplay() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0)
  }, [])

  return (
    <Card className="flex flex-col justify-center text-center max-w-90 shrink-0">
      <CardHeader className="items-center pb-0 pt-5">
        <CardTitle className="text-indigo-100">Applications</CardTitle>
        <CardDescription className="text-indigo-300">January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-indigo-100 text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-indigo-300"
                        >
                          Applications
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm pb-5">
        <div className="flex items-center gap-2 font-medium leading-none text-indigo-100">
          OAs up by 3.34% this month <TrendingUp className="h-4 w-4" /> <Smile className="h-4 w-4"/>
        </div>
        <div className="leading-none text-indigo-300">
          Showing total applications for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
