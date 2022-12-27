import { is0, is2, is22, is23, isA, isE, isE2, isF, isL, isL2, isR, isW } from 'utils';

export default function Banner() {
    return (
        <header className="w-full flex items-center justify-center">
            <h1 className="invisible">Farewell 2022</h1>
            {Array.from({ length: 52 }).map((_, index) => (
                <div className="flex flex-col items-center justify-start" key={index}>
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div
                            key={`${index}-${i}`}
                            className={`${
                                isF(index, i) || isA(index, i) || isR(index, i) || isE(index, i) || isW(index, i) || isE2(index, i) || isL(index, i) || isL2(index, i)
                                    ? `bg-white animate-bounce ${
                                          isA(index, i)
                                              ? '[animation-delay:0.1s]'
                                              : isR(index, i)
                                              ? '[animation-delay:0.2s]'
                                              : isE(index, i)
                                              ? '[animation-delay:0.3s]'
                                              : isW(index, i)
                                              ? '[animation-delay:0.4s]'
                                              : isE2(index, i)
                                              ? '[animation-delay:0.5s]'
                                              : isL(index, i)
                                              ? '[animation-delay:0.6s]'
                                              : isL2(index, i)
                                              ? '[animation-delay:0.7s]'
                                              : ''
                                      }`
                                    : is2(index, i) || is0(index, i) || is22(index, i) || is23(index, i)
                                    ? `bg-white animate-bounce ${
                                          is2(index, i)
                                              ? '[animation-delay:0.8s]'
                                              : is0(index, i)
                                              ? '[animation-delay:0.9s]'
                                              : is22(index, i)
                                              ? '[animation-delay:1s]'
                                              : is23(index, i)
                                              ? '[animation-delay:1.1s]'
                                              : ''
                                      }`
                                    : 'bg-black'
                            } border-white border rounded-sm w-5 h-5 text-white`}
                        ></div>
                    ))}
                </div>
            ))}
        </header>
    );
}
