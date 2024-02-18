
import {
    Dialog,
    DialogContent,
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
                    className="cursor-pointer"
                />
            </DialogTrigger>
            
            <DialogContent className="rounded-xl max-[1024px]:h-full overflow-auto lg:py-16">

                <div className="flex flex-col gap-4 items-center text-3xl font-medium">
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
