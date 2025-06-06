import {
  NavBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@/components/ui/navbar";
import { Navigate, NavLink, Route, Routes } from "react-router";
import { cn } from "@/lib/utils";
import { ListView } from "@/pages/list-view";
import { IssueView } from "@/pages/issue-view";
import { GitLayout } from "@/components/layouts/git-layout";
import { NotFoundView } from "@/pages/not-found-view";
import { RandomNumberView } from "@/pages/random-number-view";
import logo from "@/assets/tanstack.png";

function App() {
  interface Path {
    id: number;
    to: string;
    name: string;
  }

  const menuItems: Path[] = [
    {
      id: 1,
      name: "Random number",
      to: "random-number",
    },
    {
      id: 2,
      name: "Github' Issues",
      to: "issues/list",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <NavBar>
        {/* Content */}
        <NavbarContent>
          <NavbarMenuToggle className="lg:hidden" />
          <NavbarBrand className="flex justify-start items-center">
            <NavLink to="/">
              {/* <ReactIcon /> */}
              <img src={logo} alt="tanstack-logo" className="h-10 w-auto" />
              <span className="hidden lg:block font-semibold">
                Tanstack Query
              </span>
            </NavLink>
          </NavbarBrand>
        </NavbarContent>
        {/* Content Links */}
        <NavbarContent className="hidden lg:flex " justify="start">
          {menuItems.map(({ id, name, to }) => (
            <NavbarItem key={id}>
              <NavLink
                className={({ isActive }) =>
                  cn(isActive ? "text-indigo-600" : "text-black")
                }
                to={to}
              >
                {name}
              </NavLink>
            </NavbarItem>
          ))}
        </NavbarContent>
        {/* Content */}

        {/* Menu */}
        <NavbarMenu side="left">
          {menuItems.map(({ id, name, to }) => (
            <NavbarMenuItem asChild={false} key={id}>
              <NavLink
                className={({ isActive }) =>
                  cn(
                    "px-2 size-full flex items-center justify-start",
                    isActive && "text-gray-700 bg-neutral-200",
                  )
                }
                to={to}
              >
                {name}
              </NavLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavBar>
      {/* Router */}
      <Routes>
        <Route path="issues" element={<GitLayout />}>
          <Route index path="list" element={<ListView />} />
          <Route path="issue/:issueNumber" element={<IssueView />} />
          <Route path="*" element={<Navigate to="list" />} />
        </Route>
        <Route path="/" element={<Navigate to="issues/list" />} />
        <Route path="random-number" element={<RandomNumberView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </>
  );
}

export default App;
