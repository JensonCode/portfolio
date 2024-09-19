import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col justify-center gap-10 px-[5%]">
      <h1 className="my-0 text-center text-6xl drop-shadow-none">404</h1>

      <div className="flex items-center justify-center">
        <p className="text-3xl font-bold">The requested url was not found on</p>
        <Image
          src="/j.svg"
          alt="Jenson Li Portfolio Logo"
          height={120}
          width={120}
        />
      </div>

      <Button asChild size="lg" className="mx-auto" disabled={false}>
        <Link href="/">Go to Portfolio Home Page</Link>
      </Button>
    </section>
  );
}
