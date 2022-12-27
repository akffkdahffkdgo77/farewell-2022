import { useEffect, useRef, useState } from 'react';

import { IMAGE } from 'constant';
import { Banner, RepositoryList, SlideIndicator, Sticker } from 'components';

export default function Home() {
    const timerId = useRef<NodeJS.Timer>();
    const [month, setMonth] = useState(1);

    const onClick = (index: number) => setMonth(index);

    useEffect(() => {
        timerId.current = setInterval(() => setMonth((prev) => (prev === 12 ? 1 : prev + 1)), 3000);

        return () => clearInterval(timerId.current);
    }, []);

    return (
        <div className="bg-black min-h-screen p-10">
            <Banner />
            <div className="relative h-full w-full flex items-center justify-center flex-col mt-10">
                <div className="relative [height:calc(100vh_-_360px)]">
                    <Sticker month={month} />
                    <img className="h-full object-cover" src={IMAGE[month as keyof typeof IMAGE]} alt="sample" />
                </div>
                <RepositoryList month={month} />
                <SlideIndicator month={month} onClick={onClick} />
            </div>
        </div>
    );
}
