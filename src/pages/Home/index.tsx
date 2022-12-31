import { GITHUB_LINKS, IMAGE } from 'constant';
import { Banner, ProjectDescription, SlideIndicator, Sticker } from 'components';
import useInterval from 'hooks/useInterval';

export default function Home() {
    const [index, onClick] = useInterval();

    return (
        <div className="bg-black min-h-screen p-10">
            <Banner />
            <div className="relative h-full w-full flex items-center justify-center flex-col mt-10">
                <div className="relative [height:calc(100vh_-_360px)]">
                    <Sticker index={index} />
                    <a href={GITHUB_LINKS[index]} target="_blank" rel="noreferrer noopener">
                        <img className="h-full object-cover" src={IMAGE[index]} alt="project" />
                    </a>
                </div>
                <SlideIndicator index={index} onClick={onClick} />
                <ProjectDescription index={index} />
            </div>
        </div>
    );
}
