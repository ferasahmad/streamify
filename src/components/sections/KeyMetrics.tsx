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
    <div className="flex h-full flex-col gap-4">
      <div className="flex flex-1 gap-4">
        <KeyMetric
          value={formatNumber(metrics.totalUsers)}
          description="Total registered users on the platform."
        />
        <KeyMetric
          value={formatNumber(metrics.activeUsers)}
          description="Users active this month"
        />
      </div>
      <div className="flex flex-1 gap-4">
        <KeyMetric
          value={formatNumber(metrics.totalStreams)}
          description="Total streams on the platform"
        />
        <KeyMetric
          value={`$${formatNumber(metrics.totalRevenue)}`}
          description="Total generated revenue from subscriptions, advertisements and other sources."
        />
      </div>
    </div>
  );
}
