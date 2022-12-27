export default function SlideIndicator({ month, onClick }: { month: number; onClick: (index: number) => void }) {
    return (
        <div className="absolute bottom-0 flex items-center justify-center gap-[5px]">
            {Array.from({ length: 12 }).map((_, i) => (
                <button key={i} type="button" className={`${i + 1 === month ? 'w-[24px]  bg-gray-500' : 'w-[8px] bg-gray-50'} h-[8px] rounded-md`} onClick={() => onClick(i + 1)} />
            ))}
        </div>
    );
}
