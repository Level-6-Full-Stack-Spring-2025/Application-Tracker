"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
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
  { month: "January", desktop: 10 },
  { month: "February", desktop: 14 },
  { month: "March", desktop: 20 },
  { month: "April", desktop: 10 },
  { month: "May", desktop: 4 },
  { month: "June", desktop: 0 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function BarChartDisplay() {
  return (
    <Card className="flex flex-col py-5 text-center max-w-250 max-h-122">
      <CardHeader>
        <CardTitle className="text-indigo-100">Applications Per Month</CardTitle>
        <CardDescription className="text-indigo-300">January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} >
        <BarChart
            className="fill-indigo-100"
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" radius={8} className="fill-indigo-300">
              <LabelList
                position="top"
                offset={12}
                className="fill-indigo-100"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardContent className="flex justify-center">
        <ChartContainer config={chartConfig}>
          <BarChart
            className="fill-indigo-100"
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" radius={8} className="fill-indigo-300">
              <LabelList
                position="top"
                offset={12}
                className="fill-indigo-100"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent> */}
    </Card>
  )
}
