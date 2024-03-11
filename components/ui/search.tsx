import { Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import { Input } from "./input";

function Search() {
  return (
    <form>
      <div className="relative">
        <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search" className="px-8" />
        <SlidersHorizontal className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer block md:hidden" />
      </div>
    </form>
  );
}

export default Search;
