"use client";
import ListingCard from "@incubee/components/ui/ListingCard";
import Filterbox from "@incubee/components/ui/filterbox";
import { ModeToggle } from "@incubee/components/ui/modetoggle";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@incubee/components/ui/resizable";
import Search from "@incubee/components/ui/search";
import { SortBY } from "@incubee/components/ui/sortBy";

export default function Home() {
  const defaultLayout = [200, 800];
  return (
    <div className="w-full h-screen">
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full  items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          minSize={18}
          maxSize={20}
          className="hidden md:block p-5 space-y-10"
        >
          <Search />

          <Filterbox />
        </ResizablePanel>
        <ResizableHandle withHandle className="hidden md:block" />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          minSize={40}
          className="p-5"
        >
          <div className="flex justify-between my-5">
            <div className="flex space-x-1">
              <h4 className="font-bold">64 Results</h4>
              <span className="dark:text-neutral-400">in Lagos, Nigeria</span>
            </div>

            <SortBY />
          </div>

          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5">
            <ListingCard />
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle className="hidden xl:block" />
      </ResizablePanelGroup>
    </div>
  );
}
