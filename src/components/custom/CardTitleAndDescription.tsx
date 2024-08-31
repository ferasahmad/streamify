import * as React from "react";
import { CardTitle, CardDescription } from "../ui/card";

interface CardTitleAndDescriptionProps {
  title: string;
  description: string;
}

const CardTitleAndDescription: React.FC<CardTitleAndDescriptionProps> = ({
  title,
  description,
}) => (
  <div>
    <CardTitle className="pb-2 text-2xl md:text-lg">{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </div>
);

export default CardTitleAndDescription;
