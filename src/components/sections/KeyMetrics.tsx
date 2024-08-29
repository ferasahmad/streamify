"use client";
import React from "react";
import KeyMetric from "../custom/KeyMetric";
import { Card, CardTitle, CardDescription } from "../ui/card";
import { Metrics } from "@/types";
import Image from "next/image";
import { formatNumber } from "@/utilities/helpers";

interface KeyMetricsProps {
  metrics: Metrics;
}

export default function KeyMetrics({ metrics }: KeyMetricsProps) {
  return (
    <div className="w-1/2 justify-between flex">
      <div className="flex flex-wrap gap-4 w-1/2">
        <KeyMetric
          value={formatNumber(metrics.totalUsers)}
          description="Total Users"
        />
        <KeyMetric
          value={formatNumber(metrics.activeUsers)}
          description="Active Users"
        />
        <KeyMetric
          value={formatNumber(metrics.totalStreams)}
          description="Total Streams"
        />
        <KeyMetric
          value={`$${formatNumber(metrics.totalRevenue)}`}
          description="Total Revenue"
        />
      </div>
      <Card className="relative w-1/2 overflow-hidden">
        <Image
          src={metrics.artistImage}
          layout="fill"
          objectFit="cover"
          alt="Artist"
          className="absolute inset-0 w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-0 text-white p-4">
          <CardTitle>{metrics.topArtist}</CardTitle>
          <CardDescription>Top artist this month.</CardDescription>
        </div>
      </Card>
    </div>
  );
}
