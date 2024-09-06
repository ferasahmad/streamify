"use client";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export function FilterData() {
  const [selectedButton, setSelectedButton] = useState<1 | 2 | 3>();

  const onClick = (button: number) => {};

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded">
          <Filter />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded-lg">
        <p className="text-lg font-semibold">Filter user</p>
        <div className="border rounded flex">
          <button
            onClick={() => onClick(1)}
            className={`${selectedButton === 1 ? classes.activeButton : ""} ${
              classes.button
            }`}
          >
            1 Month
          </button>
          <button
            onClick={() => onClick(2)}
            className={`${selectedButton === 1 ? classes.activeButton : ""} ${
              classes.button
            }`}
          >
            3 Months
          </button>
          <button
            onClick={() => onClick(3)}
            className={`${selectedButton === 1 ? classes.activeButton : ""} ${
              classes.button
            }`}
          >
            All time
          </button>
        </div>
        <Button variant={"outline"}>Save</Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const classes = {
  button: "flex-1 text-sm",
  activeButton: "bg-red-200",
};
