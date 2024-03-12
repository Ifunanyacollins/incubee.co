import React, { ReactNode } from "react";
import {
  Accordion as BaseAccordion,
  AccordionItem as BaseAccordionItem,
  AccordionTrigger as BaseAccordionTrigger,
  AccordionContent as BaseAccordionContent,
} from "./accordion";

interface AccordionItemProps {
  title: ReactNode;
  key: string;
  children: ReactNode;
  disabled?: boolean;
}

interface CustomAccordionProps {
  items: AccordionItemProps[];
  className?: string;
  type?: "single" | "multiple";
}

const ExtendedAccordion: React.FC<CustomAccordionProps> = ({
  items,
  className = "",
  type = "multiple",
}) => {
  return (
    <BaseAccordion
      className={`w-full ${className}`}
      type={type as any}
      defaultValue={items.map((item) => item.key)}
    >
      {items.map((item) => (
        <BaseAccordionItem key={item.key} value={item.key} className="border-0">
          <BaseAccordionTrigger className="font-bold text-xl">
            {item.title}
          </BaseAccordionTrigger>
          <BaseAccordionContent>
            {item.disabled ? (
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium leading-none cursor-not-allowed opacity-70">
                  {item.children}
                </label>
              </div>
            ) : (
              <div className="flex items-center space-x-2">{item.children}</div>
            )}
          </BaseAccordionContent>
        </BaseAccordionItem>
      ))}
    </BaseAccordion>
  );
};

export default ExtendedAccordion;
