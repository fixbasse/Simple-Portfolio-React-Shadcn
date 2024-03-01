import { Button } from '../ui/button'
import { LightbulbIcon } from 'lucide-react'

const Hero = () => {

    return (
        <div className='flex items-center justify-center lg:h-screen p-4'>
            {/* TEXT */}
            <section className='flex flex-col items-center justify-center gap-2 max-[1024px]:my-44'>
                <LightbulbIcon
                    size={200}
                    className='text-primary'
                />

                <h1 className='text-2xl font-bold text-center'>
                    Web Developer Portfolio
                </h1>
                <p className='md:w-[500px] text-center font-light text-sm leading-tight'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis voluptates temporibus provident, dicta eveniet veritatis repudiandae vitae aliquam omnis.
                </p>

                <a href="/Wongsapat-CV.pdf" download>
                    <Button
                        className='w-[300px] mt-2 rounded-full'
                    >
                        Download My CV
                    </Button>
                </a>
            </section>
        </div>
    )
}

export default Hero