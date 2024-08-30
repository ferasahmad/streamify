"use client";
import React from "react";
import KeyMetric from "../custom/KeyMetric";
import { Card, CardTitle, CardDescription } from "../ui/card";
import { Metrics } from "@/types";
import { formatNumber } from "@/utilities/helpers";

interface KeyMetricsProps {
  metrics: Metrics;
}

export default function KeyMetrics({ metrics }: KeyMetricsProps) {
  return (
    <div className="flex h-full flex-wrap gap-4">
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
  );
}
