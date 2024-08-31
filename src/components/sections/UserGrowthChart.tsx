"use client";

import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { UserGrowth } from "@/types";
import CardTitleAndDescription from "../custom/CardTitleAndDescription";

interface UserGrowthChartProps {
  userGrowth: UserGrowth;
}

const UserGrowthChart: React.FC<UserGrowthChartProps> = ({ userGrowth }) => {
  const chartData = userGrowth.months.map((month, index) => ({
    month,
    totalUsers: userGrowth.totalUsers[index],
    activeUsers: userGrowth.activeUsers[index],
  }));

  const chartConfig: ChartConfig = {
    totalUsers: {
      label: "Total Users",
      color: "hsl(var(--chart-1))",
    },
    activeUsers: {
      label: "Active Users",
      color: "hsl(var(--chart-2))",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitleAndDescription
          title="User Growth"
          description="User growth trends this year."
        />
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="totalUsers"
              type="natural"
              stroke={chartConfig.totalUsers.color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="activeUsers"
              type="natural"
              stroke={chartConfig.activeUsers.color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default UserGrowthChart;
