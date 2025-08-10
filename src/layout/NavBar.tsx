import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "@/styles/globals.css";
import Image from "next/image";

export function NavBar() {
  return <nav className="bg-primary pt-4 pl-2 pr-2 pb-4 grid grid-cols-2">
    <div className="flex items-center">
      <Image src='/logo.svg' alt="guilmon" width={40} height={40} style={{ color: 'white', fill: 'white' }} />
      <span>Digimon RPG Evolution Viewer</span>
    </div>
    <div className="flex items-center gap-2">
      <Input type="search" placeholder="Digimon" />
      <Button variant={"secondary"} type="button">Search</Button>
    </div>
  </nav>
}