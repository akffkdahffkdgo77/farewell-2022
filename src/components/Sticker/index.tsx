export default function Sticker({ month }: { month: number }) {
    return (
        <>
            <div className="absolute top-0 rounded-sm -left-[30px] border border-white -rotate-[20deg] w-[120px] h-10 bg-black"></div>
            <h2 className={`${month < 10 ? 'left-[15px]' : 'left-[6px]'} absolute top-0 text-[28px] font-bold font-mono text-white`}>
                {month}
                <small className="text-sm font-medium">월</small>
            </h2>
        </>
    );
}
