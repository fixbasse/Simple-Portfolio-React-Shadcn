import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { LucideMenu } from "lucide-react"
import { ThemeToggle } from "../ThemeToggle"

export function MobileNavbar() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <LucideMenu
                    size={30}
                    className="md:hidden cursor-pointer"
                />
            </DialogTrigger>
            <DialogContent className="h-[70dvh] rounded-xl py-16">

                <div className="flex flex-col justify-between items-center text-3xl font-medium text-muted-foregroun">
                    <a href="#skill">
                        Skill
                    </a>
                    <a href="#about">
                        About
                    </a>
                    <a href="#project">
                        Project
                    </a>
                    <a href="#contact">
                        Contact
                    </a>

                    <ThemeToggle />
                </div>
            </DialogContent>
        </Dialog>
    )
}
