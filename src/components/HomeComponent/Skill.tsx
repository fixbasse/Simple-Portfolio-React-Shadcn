import { CompassIcon, File, LucideListCollapse, SearchCheck } from 'lucide-react'

const aboutData = [
    {
        icon: <CompassIcon size={80} className='text-primary' />,
        label: 'HTML, CSS And JAVASCRIPT',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus amet similique nihil sunt eius aliquid quibusdam ipsam, numquam adipisci, dolorem ut ver'
    },
    {
        icon: <SearchCheck size={80} className='text-primary' />,
        label: 'React & NextJS',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus amet similique nihil sunt eius aliquid quibusdam ipsam, numquam adipisci, dolorem ut ver'
    },
    {
        icon: <LucideListCollapse size={80} className='text-primary' />,
        label: 'NodeJS & Express',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus amet similique nihil sunt eius aliquid quibusdam ipsam, numquam adipisci, dolorem ut ver'
    },
    {
        icon: <File size={80} className='text-primary' />,
        label: 'MongoDB & MySQL',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus amet similique nihil sunt eius aliquid quibusdam ipsam, numquam adipisci, dolorem ut ver'
    },
]

const Skill = () => {
    return (
        <div
            id='skill'
            className='lg:h-screen flex items-center justify-center p-4 md:px-20 max-[1024px]:my-20'>

            <div className='grid md:grid-cols-2 w-full lg:h-full gap-8'>
                {aboutData.map((item) => (
                    <section
                        key={item.label}
                        className='flex flex-col justify-center items-center gap-4 hover:scale-90 duration-500'>

                        <span className='text-primary-foreground'>
                            {item.icon}
                        </span>

                        <div className='flex flex-col items-center text-center gap-2'>
                            <h3 className='font-semibold'>
                                {item.label}
                            </h3>
                            <p className='text-sm font-light md:w-[70%]'>
                                {item.desc}
                            </p>
                        </div>
                    </section>
                ))}
            </div>

        </div>
    )
}

export default Skill