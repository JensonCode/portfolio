"use client";

import React, { HTMLAttributes } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import SocialLinks from "@/components/social-links";

import { Button } from "@/components/ui/button";
import * as Sheet from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Menu } from "lucide-react";

const navLinks = ["About", "Projects", "Contact"];

const Logo = () => {
  return (
    <Image
      src="/j.svg"
      alt="Jenson Li Portfolio Logo"
      width={60}
      height={60}
      priority
    />
  );
};

const NavLinks = ({
  className,
  ...props
}: HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={cn("flex gap-10", className)} {...props}>
      {navLinks.map((navLink) => (
        <Button
          key={"nav-link-" + navLink}
          variant="link"
          size="link"
          onClick={() => {}}
        >
          {navLink}
        </Button>
      ))}
    </ul>
  );
};

const MenuToggle = () => {
  return (
    <Sheet.Sheet>
      <Sheet.SheetTrigger className="md:hidden">
        <Menu className="size-10 text-icon" />
      </Sheet.SheetTrigger>
      <Sheet.SheetContent className="border-0">
        <Sheet.SheetHeader>
          <VisuallyHidden>
            <Sheet.SheetTitle>Menu</Sheet.SheetTitle>
            <Sheet.SheetDescription>Nav Menu</Sheet.SheetDescription>
          </VisuallyHidden>
        </Sheet.SheetHeader>

        <nav className="mx-[10%] flex h-[100dvh] flex-col justify-between divide-y-2 divide-secondary-foreground py-[25%]">
          <Sheet.SheetClose asChild>
            <NavLinks className="flex-col" />
          </Sheet.SheetClose>

          <div className="py-10">
            <Sheet.SheetClose asChild>
              <SocialLinks />
            </Sheet.SheetClose>
          </div>
        </nav>
      </Sheet.SheetContent>
    </Sheet.Sheet>
  );
};

export default function Nav() {
  return (
    <nav className="sticky top-0 z-[10] flex h-[10vh] w-full items-center justify-between bg-black/0 px-5 py-2 md:px-10">
      <Logo />

      <NavLinks className="max-md:hidden" />

      <MenuToggle />
    </nav>
  );
}
