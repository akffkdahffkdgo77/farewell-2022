import { DATA } from 'constant';

export default function ProjectDescription({ index }: { index: number }) {
    return (
        <div className="p-5 text-white h-[100px] text-sm font-mono font-semibold flex flex-col justify-center items-center gap-2.5">
            <ul className="flex flex-wrap justify-center items-center gap-[5px] max-w-3xl">
                {DATA[index].skills.map((val) => (
                    <li key={val} className="p-[5px] bg-white text-black border border-white rounded-md text-xs">
                        {val}
                    </li>
                ))}
            </ul>
        </div>
    );
}
