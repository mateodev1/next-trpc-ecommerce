import Link from "next/link";
import { MenubarMenu, MenubarTrigger } from "../../shadcn/ui/menubar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../shadcn/ui/sheet";

export const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="font-semibold  ">Menu</SheetTrigger>
      <SheetContent>
        <MenubarMenu>
          <Link href={"/admin/category"}>
            <MenubarTrigger className="text-md w-3/4 hover:bg-gray-200">
              Category
            </MenubarTrigger>
          </Link>
        </MenubarMenu>
      </SheetContent>
    </Sheet>
  );
};
