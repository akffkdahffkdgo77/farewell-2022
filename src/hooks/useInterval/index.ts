import { useEffect, useRef, useState } from 'react';

const useInterval = (): [number, (index: number) => void] => {
    const timerId = useRef<NodeJS.Timer>();
    const [index, setIndex] = useState(0);

    const onClick = (index: number) => setIndex(index);

    useEffect(() => {
        timerId.current = setInterval(() => setIndex((prev) => (prev === 6 ? 0 : prev + 1)), 5000);

        return () => clearInterval(timerId.current);
    }, []);

    return [index, onClick];
};

export default useInterval;
