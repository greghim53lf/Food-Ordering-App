import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-lime-600" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <span className="text-lime-600">Stay Green, Stay Fresh...</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-lime-600">Login</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
