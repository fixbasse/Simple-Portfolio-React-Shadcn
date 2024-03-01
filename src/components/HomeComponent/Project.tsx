
const projectData = [
    {
        img: '/khonkan.jpeg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus blanditiis corrupti aspernatur dicta accusamus omnis officiis, non harum tota',
        label: 'Musician Portfolio',
        href: 'https://weerisprofile-5c610.web.app/?fbclid=IwAR1iyWw1UpV8LUgKni9jMYg8J7o79kPwUn2TnAPL4dY2e7eWJbeLtFL8lH8'
    },
    {
        img: '/bnbImg.png',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus blanditiis corrupti aspernatur dicta accusamus omnis officiis, non harum tota',
        label: 'Hotel Clone',
        href: 'https://bnb-next-auth-prisma.vercel.app/'
    },
    {
        img: '/khonkan.jpeg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus blanditiis corrupti aspernatur dicta accusamus omnis officiis, non harum tota',
        label: 'Musician Portfolio',
        href: 'https://weerisprofile-5c610.web.app/?fbclid=IwAR1iyWw1UpV8LUgKni9jMYg8J7o79kPwUn2TnAPL4dY2e7eWJbeLtFL8lH8'
    },
]

const Project = () => {
    // const openBnb = () => {
    //     window.open('https://weerisprofile-5c610.web.app/?fbclid=IwAR1iyWw1UpV8LUgKni9jMYg8J7o79kPwUn2TnAPL4dY2e7eWJbeLtFL8lH8')
    // };

    // const openMusician = () => {
    //     window.open('https://bnb-next-auth-prisma.vercel.app/')
    // }

    return (
        <div
            id='project'
            className='md:h-scree flex flex-col gap-8 md:gap-20 items-center justify-center p-4 md:px-20'>

            <h1 className="text-2xl md:text-3xl font-semibold">
                My Project
            </h1>

            <section className='grid md:grid-cols-2 lg:grid-cols-3 w-full gap-8'>
                {projectData.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-lg"
                    >
                        <img
                            src={item.img}
                            alt="/"
                            className="md:h-[250px] w-full rounded-t-lg opacity-95"
                        />

                        <article className="p-4 bg-gray-50 dark:bg-gray-900 rounded-b-lg">
                            <p className="text-sm font-light leading-tight">
                                {item.desc}
                            </p>

                            <div className="flex items-center gap-2 mt-2">
                                <img
                                    src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/295846082_5287557381289971_2914643479467110738_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeE1vBoZHhJzYG1Fz2cnaBQSzNER4XHfdVfM0RHhcd91V4SH6GIZJP9kqp-KigolH6kUB6KGWzbnD500nFIjdWyv&_nc_ohc=-dDpHh_dUjIAX-3zB88&_nc_ht=scontent.fbkk13-2.fna&oh=00_AfCFInxJ03seHQbJh8jiZF6QhXk2tMB9TUXJ0tuA2ZexGQ&oe=65D6A945"
                                    alt="/"
                                    className="w-[30px] h-[30px] rounded-full"
                                />
                                <h2 className="font-semibold">
                                    {item.label}
                                </h2>
                            </div>
                        </article>
                    </div>
                ))}

            </section>
        </div>
    )
}

export default Project