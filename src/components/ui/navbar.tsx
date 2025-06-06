import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import type {
  DialogContentProps,
  DialogTriggerProps,
} from "@radix-ui/react-dialog";

const navBarVariants = cva(
  `
  bg-white
  flex
  h-14
  items-center
  px-4
  relative
  w-full
  z-50

  lg:h-16
  `,
  {
    variants: {
      position: {
        static: "",
        sticky: "fixed top-0",
      },
      isBordered: {
        true: "border-b",
        false: "",
      },
      hasShadow: {
        true: "shadow-md",
        false: "",
      },
    },
    defaultVariants: {
      position: "sticky",
      isBordered: false,
      hasShadow: true,
    },
  }
);

const navbarBrandVariants = cva(`
  left-0
  grid place-content-center
  h-10
 
  w-full
  [&_svg]:pointer-events-none
  `);

const navbarContentVariants = cva(
  `
  flex
  items-center
  gap-x-4!
  `,
  {
    variants: {
      justify: {
        start: "mr-4 lg:mr-6",
        end: "ml-auto",
      },
    },
    defaultVariants: {
      justify: "start",
    },
  }
);

const navbarItemVariants = cva(
  `
  font-semibold 
  text-md 
  hover:underline 
  underline-offset-2
  `,
  {
    variants: {
      isActive: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      isActive: false,
    },
  }
);

const navbarMenuToggleVariants = cva(
  `
  cursor-pointer
  flex 
  flex-col
  justify-center
  items-center
  outline-none 
  rounded-md
  shrink-0
  size-10
  transition
  whitespace-nowrap

  disabled:pointer-events-none 
  disabled:opacity-50 
  
  dark:aria-invalid:ring-destructive/40
  
  [&_svg:not([class*='size-'])]:size-8
  [&_svg]:pointer-events-none
  active:[&_svg]:text-gray-600
  [&_svg]:shrink-0 
  aria-invalid:border-destructive
  aria-invalid:ring-destructive/20 
  focus-visible:border-ring 
  focus-visible:ring-[3px] 
  focus-visible:ring-ring/50 

  `
);

const navbarMenuVariants = cva(
  `
  flex
  flex-col
  items-start
  justify-center
  h-full 
  text-sm
  `
);

const navbarMenuItemVariants = cva(
  `
  text-md 
  font-semibold 
  my-1 text-start 
  w-full
  flex 
  h-10
  justify-start 
  items-center
   active:bg-gray-200
  `
);

interface NavBarContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBarContext = React.createContext<NavBarContextProps>({
  isOpen: false,
  setIsOpen: () => {},
});

function NavBar({
  className,
  hasShadow,
  isBordered,
  position,
  ...props
}: React.ComponentProps<"nav"> & VariantProps<typeof navBarVariants>) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <NavBarContext.Provider value={{ isOpen, setIsOpen }}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <nav
          className={cn(
            navBarVariants({ hasShadow, isBordered, position }),
            className
          )}
          {...props}
        />
      </Sheet>
    </NavBarContext.Provider>
  );
}

function NavbarBrand({ className, ...props }: React.ComponentProps<"div">) {
  useContextValidation({
    componentNameChild: "NavbarBrand",
    componentNameParent: "Navbar",
  });
  return <Slot className={cn(navbarBrandVariants(), className)} {...props} />;
}

function NavbarContent({
  className,
  justify,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof navbarContentVariants>) {
  useContextValidation({
    componentNameChild: "NavbarContent",
    componentNameParent: "Navbar",
  });
  return (
    <div
      data-justify={justify}
      className={cn(navbarContentVariants({ justify }), className)}
      {...props}
    />
  );
}

function NavbarItem({
  className,
  isActive,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof navbarItemVariants>) {
  useContextValidation({
    componentNameChild: "NavbarItem",
    componentNameParent: "Navbar",
  });
  return (
    <div
      className={cn(navbarItemVariants({ isActive }), className)}
      {...props}
    />
  );
}

function NavbarMenuToggle({
  className,
  ...rest
}: React.ComponentProps<
  React.ForwardRefExoticComponent<
    DialogTriggerProps & React.RefAttributes<HTMLButtonElement>
  >
> &
  VariantProps<typeof navbarMenuToggleVariants>) {
  useContextValidation({
    componentNameChild: "NavbarMenuToggle",
    componentNameParent: "Navbar",
  });
  return (
    <SheetTrigger asChild {...rest}>
      <div className={cn(navbarMenuToggleVariants(), className)}>
        <MenuIcon />
      </div>
    </SheetTrigger>
  );
}

function NavbarMenu({
  className,
  children,
  ...props
}: React.ComponentProps<
  React.ForwardRefExoticComponent<
    DialogContentProps & React.RefAttributes<HTMLDivElement>
  >
> & {
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
}) {
  useContextValidation({
    componentNameChild: "NavbarMenu",
    componentNameParent: "Navbar",
  });
  return (
    <SheetContent className={cn(className)} {...props}>
      <SheetHeader className="text-start w-full h-auto">
        <SheetTitle>Tanstack Query</SheetTitle>
        <SheetDescription>
          Powerful asynchronous state management for TS/JS, React, Solid, Vue,
          Svelte and Angular
        </SheetDescription>
      </SheetHeader>
      <ScrollArea className={cn(navbarMenuVariants())}>{children}</ScrollArea>
    </SheetContent>
  );
}

function NavbarMenuItem({
  asChild = true,
  className,
  ...rest
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const { setIsOpen } = useContextValidation({
    componentNameChild: "NavbarMenuItem",
    componentNameParent: "Navbar",
  });
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      onClick={() => setIsOpen(false)}
      className={cn(navbarMenuItemVariants(), className)}
      {...rest}
    />
  );
}

const useContextValidation = ({
  componentNameChild = "Component child",
  componentNameParent = "Component Parent",
}: {
  componentNameChild?: String;
  componentNameParent?: string;
}) => {
  const context = React.useContext(NavBarContext);
  if (!context)
    throw new Error(
      `${componentNameChild} must be used whitin ${componentNameParent}`
    );
  return context;
};

export {
  NavBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
};
