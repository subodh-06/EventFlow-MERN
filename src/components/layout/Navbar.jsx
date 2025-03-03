import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <section className="py-4 bg-zinc-800">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <img src="/eventflow.svg" alt="logo" width={32} height={32} />
              <span className="text-lg font-semibold text-[#1FDA8B]">EventFlow</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex justify-center">
            <NavigationMenuList className="flex items-center gap-6">
              <NavigationMenuItem>
                <a href="/" className={navigationMenuTriggerStyle()}>
                  Home
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#" className={navigationMenuTriggerStyle()}>
                  Events
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#" className={navigationMenuTriggerStyle()}>
                  Contact
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
          <Button>
              <a href="/organize-event">Organize Event</a>
            </Button>
            <Button>
              <a href="/login">Sign in</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen bg-zinc-800 overflow-scroll px-4">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center gap-4">
                    <img src="/eventflow.svg" alt="logo" width={32} height={32} />
                    <span className="text-lg font-semibold text-[#1FDA8B]">EventFlow</span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col items-start">
                <div className="flex flex-col gap-4 w-full mt-4 text-gray-50">
                  <a href="/" className="font-medium">
                    Home
                  </a>
                  <a href="#" className="font-medium">
                    Events
                  </a>
                  <a href="#" className="font-medium">
                    Contact
                  </a>
                </div>
                <div className="mt-6 flex flex-col gap-4 w-full">
                <Button>
              <a href="/organize-event">Organize Event</a>
            </Button>
            <Button>
              <a href="/login">Sign in</a>
            </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
