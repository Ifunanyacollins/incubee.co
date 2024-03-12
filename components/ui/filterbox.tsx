import React from "react";
import { Checkbox } from "./checkbox";
import ExtendedAccordion from "./extendedAccordion";
import { SliderRange } from "./slider";

import { ScrollArea } from "./scroll-area";
function Filterbox() {
  const items = [
    {
      key: "item-1",
      title: "Choose Country",
      children: (
        <ScrollArea className=" w-full">
          <div className="flex items-center space-x-2 mb-3">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Nigeria
            </label>
          </div>

          <div className="flex items-center space-x-2 mb-3">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Kenya
            </label>
          </div>

          <div className="flex items-center space-x-2 mb-3">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Rwanda
            </label>
          </div>
        </ScrollArea>
      ),
    },
    {
      key: "item-2",
      title: "Comb Type",
      children: (
        <div className="space-y-5">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" name="hackerHouse" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Hacker House
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" name="individualMentor" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Individual Mentor
            </label>
          </div>
        </div>
      ),
    },
    // {
    //   key: "item-3",
    //   title: "Number of Incubees",
    //   children: (
    //     <div className="w-full">
    //       <SliderRange defaultValue={[1, 100]} minStepsBetweenThumbs={1} />
    //       <div className="flex justify-between my-3">
    //         <span>1</span>

    //         <span>100</span>
    //       </div>
    //     </div>
    //   ),
    // },
    // {
    //   key: "item-4",
    //   title: "Price",
    //   children: (
    //     <div className="w-full">
    //       {/*
    //          Range here will be addressed in percentage, for instance if the minimum amount is $1 and max amount is $5000
    //          The slider component can only handle 0 - 100 so if a user slides to [10 - 50] what that means is 50% of  $5000 and 10% of it
    //         */}
    //       <SliderRange
    //         defaultValue={[0, 100]}
    //         minStepsBetweenThumbs={1}
    //         onValueChange={(VAL) => console.log(VAL)}
    //       />
    //       <div className="flex justify-between my-3">
    //         <span>$1</span>

    //         <span>$5000</span>
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  return <ExtendedAccordion items={items} type="multiple" />;
}

export default Filterbox;
