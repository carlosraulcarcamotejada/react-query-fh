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
import { MainLayout } from "@/components/layouts/main-layout";
import { RandomNumberView } from "@/pages/random-number-view";
import logo from "@/assets/tanstack.png";
import { NotFoundView } from "@/pages/not-found-view";

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
      <NavBar isBlurred isBordered hasShadow={false}>
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

        {/* Menu Floating Window */}
        <NavbarMenu side="left">
          {menuItems.map(({ id, name, to }) => (
            <NavbarMenuItem key={id}>
              <NavLink
                className={({ isActive }) => cn(isActive && "bg-neutral-100")}
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
        <Route path="issues" element={<MainLayout />}>
          <Route index element={<Navigate to="list" />} />
          <Route path="list" element={<ListView />} />
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
