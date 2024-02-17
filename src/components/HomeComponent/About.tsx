import { LucideFolderCog2 } from 'lucide-react'
import React from 'react'

const About = () => {
    return (
        <div
            id='about'
            className='flex items-center justify-center h-screen p-4 md:px-20'>

            <section className='flex flex-col text-center md:text-left md:flex-row items-center w-full'>
                <div className='flex-1'>
                    <LucideFolderCog2
                        size={500}
                        className='text-primary hidden md:block'
                    />
                    <LucideFolderCog2
                        size={300}
                        className='text-primary md:hidden'
                    />
                </div>


                <div className='flex-1 flex flex-col gap-2'>
                    <h2 className='text-4xl'>
                        Wongsapat Sungsean
                    </h2>
                    <p className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit recusandae nostrum illum, omnis modi officiis ab dolor eius aperiam eveniet blanditiis fugiat ad
                    </p>
                    <p className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit recusandae nostrum illum, omnis modi officiis ab dolor eius aperiam eveniet blanditiis
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About