import { ISticker } from 'components/Sticker/types';

export default function Sticker({ index }: ISticker) {
    return (
        <>
            <div className="absolute -top-2.5 rounded-sm -left-[30px] border border-white -rotate-[20deg] w-[120px] h-10 bg-black"></div>
            <h2 className={`${index < 10 ? 'left-[15px]' : 'left-[6px]'} absolute -top-2.5 text-[28px] font-bold font-mono text-white`}>
                <small className="text-sm font-medium">#</small>
                {index + 1}
            </h2>
        </>
    );
}
