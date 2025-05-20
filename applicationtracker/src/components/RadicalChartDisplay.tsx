"use client"

import { Frown, TrendingUp } from "lucide-react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
const chartData = [
  { type: "application", count: 15, fill: "var(--color-application)" },
]

const chartConfig = {
  count: {
    label: "Times you got ghosted",
  },
  application: {
    label: "Ghosted",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function RadicalChartDisplay() {
  return (
    <Card className="flex flex-col justify-center text-center max-w-90 shrink-0">
      <CardHeader className="items-center pb-0 pt-5">
        <CardTitle className="text-indigo-100">Times you got ghosted...</CardTitle>
        <CardDescription className="text-indigo-300">January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={100}
            innerRadius={80}
            outerRadius={140}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-red-200 last:fill-card"
              polarRadius={[84, 77]}
            />
            <RadialBar dataKey="count" background/>
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
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
                          className="fill-indigo-100 text-4xl font-bold"
                        >
                          {chartData[0].count.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-indigo-300"
                        >
                          Times
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm pb-5">
        <div className="flex items-center gap-2 font-medium leading-none text-indigo-100">
          Trending up by 1.2% this month <TrendingUp className="h-4 w-4"/> <Frown className="h-4 w-4" />
        </div>
        <div className="leading-none text-indigo-300">
          Out of 40 (total rejection count)
        </div>
      </CardFooter>
    </Card>
  )
}
