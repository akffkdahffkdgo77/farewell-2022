export default function SlideIndicator({ index, onClick }: { index: number; onClick: (index: number) => void }) {
    return (
        <div className="absolute bottom-0 flex items-center justify-center gap-[5px]">
            {Array.from({ length: 7 }).map((_, i) => (
                <button key={i} type="button" className={`${i === index ? 'w-[24px]  bg-gray-500' : 'w-[8px] bg-gray-50'} h-[8px] rounded-md`} onClick={() => onClick(i)} />
            ))}
        </div>
    );
}
