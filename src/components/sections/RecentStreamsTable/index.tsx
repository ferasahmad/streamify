"use client";

import * as React from "react";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "../../ui/card";
import { Stream } from "@/types";
import CardTitleAndDescription from "../../custom/CardTitleAndDescription";
import SortableHeaderCell from "./SortableHeaderCell";
import { useMemo, useState } from "react";

interface RecentStreamsTableProps {
  recentStreams: Stream[];
}

export default function RecentStreamsTable({
  recentStreams,
}: RecentStreamsTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const filteredData = useMemo(
    () =>
      recentStreams.filter(
        (stream) =>
          stream.artist.toLowerCase().includes(globalFilter.toLowerCase()) ||
          stream.songName.toLowerCase().includes(globalFilter.toLowerCase())
      ),
    [recentStreams, globalFilter]
  );

  const columns = useMemo<ColumnDef<Stream>[]>(
    () => [
      {
        accessorKey: "songName",
        header: "Song Name",
        enableSorting: false,
      },
      {
        accessorKey: "artist",
        header: "Artist",
        enableSorting: false,
      },
      {
        accessorKey: "dateStreamed",
        header: ({ column }) => (
          <SortableHeaderCell title="Date Streamed" column={column} />
        ),
      },
      {
        accessorKey: "streamCount",
        header: ({ column }) => (
          <SortableHeaderCell title="Stream Count" column={column} />
        ),
        cell: ({ row }) => (
          <div>{row.getValue<number>("streamCount").toLocaleString()}</div>
        ),
      },
      {
        accessorKey: "userId",
        header: "User ID",
        enableSorting: false,
      },
    ],
    []
  );

  const table = useReactTable<Stream>({
    data: filteredData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Card className={classes.card}>
      <div className={classes.cardContainer}>
        <CardTitleAndDescription
          title="Recently Streamed Songs"
          description="Most recent streamed songs."
        />
        <Input
          type="text"
          placeholder="Filter by artist or song name"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className={classes.input}
        />
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={`${
                    header.id === "dateStreamed" || header.id === "userId"
                      ? classes.hiddenLgTableCell
                      : ""
                  }`}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={`${classes.textLeftCell} ${
                      cell.column.id === "dateStreamed" ||
                      cell.column.id === "userId"
                        ? classes.hiddenLgTableCell
                        : ""
                    }`}
                  >
                    <div className="ml-0">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className={classes.noResultsCell}
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className={classes.paginationContainer}>
        <Button
          className={classes.button}
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          className={classes.button}
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </Card>
  );
}

const classes = {
  card: "w-full md:h-[800px] h-[955px]",
  cardContainer: "flex flex-col gap-4 p-4",
  input: "md:max-w-sm rounded w-full",
  hiddenLgTableCell: "hidden lg:table-cell",
  textLeftCell: "text-left p-4",
  noResultsCell: "h-24 text-center",
  paginationContainer: "flex items-center justify-end space-x-2 p-4",
  button: "rounded",
};
