"use client";
import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";

interface KeyMetricProps {
  value: string | number;
  description: string;
}

export default function KeyMetric({ value, description }: KeyMetricProps) {
  return (
    <Card className="flex w-40 h-40 flex-col items-center justify-center p-4">
      <CardTitle>{value}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}
