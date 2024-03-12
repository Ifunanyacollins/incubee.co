import * as React from "react";
import house from "@incubee/public/house.jpg";
import { Mail, Send } from "lucide-react";
import { Card, CardContent, CardHeader } from "./card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Tooltip } from "./tooltip";

function ListingCard() {
  return (
    <Card className=" overflow-hidden">
      <CardHeader>
        <Image
          className="rounded-lg"
          src={house}
          alt="Picture of the author"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </CardHeader>
      <CardContent className="flex justify-between items-center">
        <div className="flex gap-x-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-bold">Jack one</h2>
            <p className="dark:text-neutral-400">Ikeja, Estate</p>
          </div>
        </div>

        <div className="flex gap-x-3">
          <Tooltip message="Send an email">
            <Mail className="dark:text-neutral-400 cursor-pointer" />
          </Tooltip>
          <Tooltip message="In-app message">
            <Send className="dark:text-neutral-400 cursor-pointer" />
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  );
}

export default ListingCard;
