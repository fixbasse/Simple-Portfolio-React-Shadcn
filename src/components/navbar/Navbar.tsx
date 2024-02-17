import { MapPinned } from "lucide-react"
import { ThemeToggle } from "../ThemeToggle"
import { MobileNavbar } from "./MobileNavbar"


const Navbar = () => {
    return (
        <nav className="fixed bg-background w-full px-4 md:px-12 py-4 flex items-center justify-between z-50">
            <div className="md:hidden">
                <MobileNavbar />
            </div>

            <section className="flex items-center gap-4">
                <MapPinned
                    size={50}
                    className="hidden md:block"
                />
                <MapPinned
                    size={40}
                    className="md:hidden text-primary"
                />

                <h2 className="text-3xl md:text-4xl font-bold">
                    Logo
                </h2>
            </section>


            <section className="flex items-center gap-4">
                <div className="hidden md:block">
                <MobileNavbar />
                </div>
                {/* <div className="hidden md:flex items-center gap-2 md:gap-8 text-sm font-medium">
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
                </div> */}

                <ThemeToggle />
            </section>
        </nav>
    )
}

export default Navbar