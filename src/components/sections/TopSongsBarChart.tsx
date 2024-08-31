import { useMemo } from "react";
import { Bar, BarChart, XAxis, YAxis, LabelList } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Song } from "@/types";
import { formatNumber } from "@/utilities/helpers";
import CardTitleAndDescription from "../custom/CardTitleAndDescription";

interface TopSongsBarChartProps {
  topSongs: Song[];
}

export default function TopSongsBarChart({ topSongs }: TopSongsBarChartProps) {
  const sortedTopSongs = useMemo(
    () => topSongs.sort((a, b) => b.streamCount - a.streamCount),
    [topSongs]
  );

  const chartConfig = {
    streamCount: {
      label: "Streams",
    },
    label: {
      color: "hsl(var(--background))",
    },
  } satisfies ChartConfig;

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const { songName, artist, streamCount } = payload[0].payload;
      return (
        <div className="bg-black p-2 rounded">
          <p className="">{`${songName} by ${artist}`}</p>
          <p className="">{`Streams: ${formatNumber(streamCount)}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitleAndDescription
          title="Top Songs"
          description="Most streamed songs over the past month."
        />
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={sortedTopSongs}
            layout="vertical"
            barCategoryGap={10}
          >
            <YAxis
              dataKey="songName"
              type="category"
              tickLine={false}
              width={70}
              axisLine={false}
            />
            <XAxis dataKey="streamCount" type="number" hide />
            <ChartTooltip cursor={false} content={<CustomTooltip />} />
            <Bar
              dataKey="streamCount"
              layout="vertical"
              radius={5}
              fill="hsl(var(--chart-1))"
            >
              <LabelList
                dataKey="streamCount"
                position="inside"
                className="fill-background"
                fontSize={12}
                formatter={formatNumber}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
