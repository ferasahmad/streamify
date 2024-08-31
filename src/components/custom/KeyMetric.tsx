"use client";
import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";

interface KeyMetricProps {
  value: string | number;
  description: string;
}

export default function KeyMetric({ value, description }: KeyMetricProps) {
  return (
    <Card className="flex flex-1 flex-col gap-2 pb-1 p-4">
      <CardTitle className="xl:text-2xl text-lg">{value}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}
