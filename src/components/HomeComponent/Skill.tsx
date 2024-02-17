import { CompassIcon, File, LucideListCollapse, SearchCheck } from 'lucide-react'

const aboutData = [
    {
        icon: <CompassIcon size={80} className='text-primary' />,
        label: 'Access your files, anywhere',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus amet similique nihil sunt eius aliquid quibusdam ipsam, numquam adipisci, dolorem ut ver'
    },
    {
        icon: <SearchCheck size={80} className='text-primary' />,
        label: 'Security you can trust',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus amet similique nihil sunt eius aliquid quibusdam ipsam, numquam adipisci, dolorem ut ver'
    },
    {
        icon: <LucideListCollapse size={80} className='text-primary' />,
        label: 'Realtime collaboration',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus amet similique nihil sunt eius aliquid quibusdam ipsam, numquam adipisci, dolorem ut ver'
    },
    {
        icon: <File size={80} className='text-primary' />,
        label: 'Store any type of files',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus amet similique nihil sunt eius aliquid quibusdam ipsam, numquam adipisci, dolorem ut ver'
    },
]

const Skill = () => {
    return (
        <div
            id='skill'
            className='md:h-screen flex items-center justify-center p-4 md:px-20'>

            <div className='grid md:grid-cols-2 w-full h-full gap-8'>
                {aboutData.map((item) => (
                    <section
                        key={item.label}
                        className='flex flex-col justify-center items-center gap-4'>

                        <span className=' text-primary-foreground'>
                            {item.icon}
                        </span>

                        <div className='flex flex-col items-center text-center gap-2'>
                            <h3 className='font-semibold'>
                                {item.label}
                            </h3>
                            <p className='text-sm text-muted-foreground md:w-[70%]'>
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