import { InstagramIcon, LucideFacebook, Mail, MapPin, Phone } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Footer = () => {
    return (
        <div className='md:h-screen flex flex-col justify-between items-center'>

            {/* SEND EMAIL */}
            <div className='flex flex-col items-center justify-center h-screen md:h-[70vh]'>
                <h2 className='text-2xl font-semibold'>
                    Let's work together!
                </h2>
                <p className='text-muted-foreground text-center px-4'>
                    I'll lend you my wisdom, just tell me your goal. Hope to hear from you soon.
                </p>

                <div className='flex gap-4 w-[80%] mt-4'>
                    <Input
                        placeholder='Your email...'
                        className='rounded-full p-6 bg-gray-50 dark:bg-gray-900'
                    />
                    <Button className='h-full'>
                        Send Email
                    </Button>
                </div>
            </div>


            <footer className='md:h-[30dvh] w-full grid md:grid-cols-3 gap-10 md:gap-14 bg-gray-50 dark:bg-gray-900 p-4 md:py-8 md:px-20'>
                <section className='flex flex-col gap-8'>
                    <h2 className='font-bold text-3xl'>
                        Logo
                    </h2>

                    <div className='flex gap-4 text-sm'>
                        <MapPin />

                        <p className='text-muted-foreground'>
                            Pinklao, Boromratchonnani 30, Taling Chan Bangkok 10170
                        </p>
                    </div>
                </section>

                {/* CONTACT */}
                <section className='flex flex-col gap-4 text-sm'>
                    <div className='flex items-center gap-4'>
                        <Phone />

                        <div className='flex flex-col text-muted-foreground'>
                            <span>
                                081-405-0169
                            </span>
                            <span>
                                094-593-8001
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <Mail />

                        <div className='flex flex-col text-muted-foreground'>
                            <span>
                                fix_kaow@hotmail.com
                            </span>
                            <span>
                                fix_Active@hotmail.com
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <LucideFacebook />

                        <div className='flex flex-col gap-2 text-muted-foreground'>
                            Fix Wongsapat
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <InstagramIcon />

                        <div className='flex flex-col gap-2 text-muted-foreground'>
                            fuxBasee
                        </div>
                    </div>
                </section>

                <div className='font-bold text-3xl'>
                    Logo
                </div>
            </footer>
        </div>
    )
}

export default Footer