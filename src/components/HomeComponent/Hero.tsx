import React from 'react'
import { Button } from '../ui/button'
import { LightbulbIcon } from 'lucide-react'

const Hero = () => {
    return (
        <div className='flex items-center justify-center h-screen p-4'>
            <section className='flex flex-col items-center justify-center gap-2'>
                <LightbulbIcon
                    size={200}
                    className='text-primary'
                />

                <h1 className='text-2xl font-bold text-center'>
                    Web Developer Portfolio
                </h1>
                <p className='md:w-[500px] text-center text-muted-foreground text-sm'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis voluptates temporibus provident, dicta eveniet veritatis repudiandae vitae aliquam omnis.
                </p>

                <Button
                    className='w-[300px] mt-2 rounded-full'
                >
                    Download My CV
                </Button>
            </section>
        </div>
    )
}

export default Hero