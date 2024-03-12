"use client";
import Filterbox from "@incubee/components/ui/filterbox";
import { ModeToggle } from "@incubee/components/ui/modetoggle";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@incubee/components/ui/resizable";
import Search from "@incubee/components/ui/search";

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
          Listings will appear here
        </ResizablePanel>

        <ResizableHandle withHandle className="hidden xl:block" />
      </ResizablePanelGroup>
    </div>
  );
}
