import React from "react";
import { Plus } from "lucide-react";
import { ModeToggle } from "./modetoggle";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

function Header() {
  return (
    <div className="h-16 border-border border-b border-0 border-solid p-5 flex justify-between items-center">
      <span className="block">Incubee</span>

      <div className="flex space-x-3">
        <Button>
          <Plus className="h-[1rem] w-[1rem] mr-2" />
          New Comb
        </Button>
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Header;
