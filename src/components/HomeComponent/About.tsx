import { LucideFolderCog2, Youtube } from 'lucide-react'

const About = () => {
    const openYoutube = () => {
        window.open('https://www.youtube.com/watch?v=4631sx8CfdY')
    };

    return (
        <div
            id='about'
            className='flex items-center justify-center h-screen p-4 md:px-20'>

            <section className='flex flex-col text-center lg:text-left lg:flex-row items-center w-full'>
                <div className='flex-1'>
                    <LucideFolderCog2
                        size={400}
                        className='text-primary hidden md:block'
                    />
                    <LucideFolderCog2
                        size={300}
                        className='text-primary md:hidden'
                    />
                </div>


                <div className='flex-1 flex flex-col gap-4'>
                    <h2 className='text-4xl'>
                        Wongsapat Sungsean
                    </h2>
                    <p className='text-sm font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit recusandae nostrum illum, omnis modi officiis ab dolor eius aperiam eveniet blanditiis fugiat ad
                    </p>
                    <p className='text-sm font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit recusandae nostrum illum, omnis modi officiis ab dolor eius aperiam eveniet blanditiis
                    </p>

                    <button
                        onClick={openYoutube}
                        className='flex items-center justify-center lg:justify-start gap-2 underline hover:no-underline text-primary font-semibold'>
                        Checkout my music career
                        <Youtube size={30} />
                    </button>
                </div>
            </section>
        </div>
    )
}

export default About