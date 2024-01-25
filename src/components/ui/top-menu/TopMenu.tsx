import Link from "next/link";
import { Menubar, MenubarMenu, MenubarTrigger } from "../../shadcn/ui/menubar";
import { Sidebar } from "../sidebar/Sidebar";

export const TopMenu = () => {
  return (
    <Menubar className="flex justify-between px-10">
      <div>
        <MenubarMenu>
          <Link href={"/"}>
            <MenubarTrigger className="text-md">Home</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </div>

      <Sidebar />
    </Menubar>
  );
};
