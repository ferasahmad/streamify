import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

const SortableHeaderCell: React.FC<{
  title: string;
  column: any;
}> = ({ title, column }) => (
  <Button
    variant="ghost"
    className="rounded"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    aria-sort={
      column.getIsSorted()
        ? column.getIsSorted() === "asc"
          ? "ascending"
          : "descending"
        : "none"
    }
  >
    {title}
    <ArrowUpDown className="ml-2 h-4 w-4" />
  </Button>
);

export default SortableHeaderCell;
