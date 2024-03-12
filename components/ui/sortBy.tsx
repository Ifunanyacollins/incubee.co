"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@incubee/lib/utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const sortKeys = [
  {
    value: "name",
    label: "Name",
  },
  {
    value: "createdAt",
    label: "Date created",
  },
];

export function SortBY() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? sortKeys.find((sortKey) => sortKey.value === value)?.label
            : "Sort by..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandEmpty>No sort command found.</CommandEmpty>
          <CommandList>
            {sortKeys.map((sortKey) => (
              <CommandItem
                key={sortKey.value}
                value={sortKey.value}
                onSelect={(val) => console.log(val)}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === sortKey.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {sortKey.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
