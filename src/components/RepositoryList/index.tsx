import { DATA } from 'constant';

export default function RepositoryList({ month }: { month: number }) {
    return (
        <ul className="p-5 text-white h-[100px] text-sm font-mono font-semibold flex flex-wrap justify-center items-center gap-2.5">
            {DATA[month as keyof typeof DATA].map((list) => (
                <li key={list} className="text-center border border-white rounded-md p-2.5">
                    {list}
                </li>
            ))}
        </ul>
    );
}
