import {useRouter} from "next/router";

import Button from '../ui/Button';

const Hero = ({heading, message}) => {

    const router = useRouter();

    const handleClick = () => {
        router.push('/home');
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-2" />
            <div className="p-5 text-white z-[2] mt-[-10rem]">
                <h2 className="text-5xl font-bold">{heading}</h2>
                <p className="py-5 text-xl">{message}</p>
                <Button click={handleClick}>Start</Button>
            </div>
        </div>
    )
}

export default Hero;