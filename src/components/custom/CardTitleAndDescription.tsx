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
    <CardTitle className={classes.cardTitle}>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </div>
);

export default CardTitleAndDescription;

const classes = {
  cardTitle: "pb-2 text-lg md:text-2xl",
};
