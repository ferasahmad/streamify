"use client";
import React from "react";
import KeyMetric from "../custom/KeyMetric";
import { Metrics } from "@/types";
import { formatNumber } from "@/utilities/helpers";

interface KeyMetricsProps {
  metrics: Metrics;
}

export default function KeyMetrics({ metrics }: KeyMetricsProps) {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <KeyMetric
          value={formatNumber(metrics.totalUsers)}
          description="Total registered users on the platform."
        />
        <KeyMetric
          value={formatNumber(metrics.activeUsers)}
          description="Users active this month"
        />
      </div>
      <div className={classes.row}>
        <KeyMetric
          value={formatNumber(metrics.totalStreams)}
          description="Total streams on the platform"
        />
        <KeyMetric
          value={`$${formatNumber(metrics.totalRevenue)}`}
          description="Total generated revenue."
        />
      </div>
    </div>
  );
}

const classes = {
  container: "flex h-full flex-col gap-2",
  row: "flex flex-1 gap-2",
};
