import { useEffect, useRef, useState } from 'react';

import { IMAGE } from 'constant';
import { Banner, ProjectDescription, SlideIndicator, Sticker } from 'components';

export default function Home() {
    const timerId = useRef<NodeJS.Timer>();
    const [index, setIndex] = useState(0);

    const onClick = (index: number) => setIndex(index);

    useEffect(() => {
        timerId.current = setInterval(() => setIndex((prev) => (prev === 6 ? 0 : prev + 1)), 3000);

        return () => clearInterval(timerId.current);
    }, []);

    return (
        <div className="bg-black min-h-screen p-10">
            <Banner />
            <div className="relative h-full w-full flex items-center justify-center flex-col mt-10">
                <div className="relative [height:calc(100vh_-_360px)]">
                    <Sticker index={index} />
                    <img className="h-full object-cover" src={IMAGE[index]} alt="project" />
                </div>
                <SlideIndicator index={index} onClick={onClick} />
                <ProjectDescription index={index} />
            </div>
        </div>
    );
}
