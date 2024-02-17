
const projectData = [
    {
        img: 'https://images.pexels.com/photos/20204362/pexels-photo-20204362/free-photo-of-ashville-appalachian-mountains-north-carolina.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus blanditiis corrupti aspernatur dicta accusamus omnis officiis, non harum tota',
        label: 'Hotel Clone'
    },
    {
        img: 'https://images.pexels.com/photos/20204362/pexels-photo-20204362/free-photo-of-ashville-appalachian-mountains-north-carolina.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus blanditiis corrupti aspernatur dicta accusamus omnis officiis, non harum tota',
        label: 'Musician Portfolio'
    },
]

const Project = () => {
    return (
        <div
            id='project'
            className='md:h-screen flex items-center justify-center p-4 md:px-40'>

            <section className='grid md:grid-cols-2 w-full gap-8'>
                {projectData.map((item) => (
                    <div
                        key={item.label}
                        className="bg-muted rounded-lg"
                    >

                        <img
                            src={item.img}
                            alt=""
                            className="h-[200px] rounded-lg w-full object-cover"
                        />

                        <article className="p-4">
                            <p className="text-sm text-muted-foreground">
                                {item.desc}
                            </p>
                            <h2 className="text-xl font-semibold mt-1">
                                {item.label}
                            </h2>
                        </article>
                    </div>
                ))}

            </section>
        </div>
    )
}

export default Project