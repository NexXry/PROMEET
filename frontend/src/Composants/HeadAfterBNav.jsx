import {Button} from '@material-tailwind/react';
import {Link} from "react-router-dom";

export function HeadAfterBNav() {
    return (
        <>
            <div className="flex flex-row my-24">
                <div
                    className="flex flex-col mx-auto w-full lg:flex-row-reverse gap-10 lg:gap-12">
                    <div className="mt-4">
                        <img src="/public/img_pageAccueil.jpg" alt="Hero image"
                             className="rounded-lg mx-auto w-[500px] lg:w-[1000px]"/>
                    </div>
                    <div
                        className="flex flex-col justify-center items-center lg:items-start gap-4">
                        <div
                            className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
                            <h1 className="text-2xl leading-tight sm:text-2xl md:text-4xl xl:text-4xl font-bold text-gray">
                                <span
                                    className="text-bleuFonce">ProMEET rencontrer un PRO</span>

                            </h1>
                            <p className="mt-4 text-gray-700 break-words w-11/12 md:w-10/12">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis
                                aspernatur
                                quis voluptatum porro incidunt,
                                libero sequi quos eos velit
                                jkdhjdhjhdjhfdjkfhsdkjfhskdfhskdjdjfhksdfhsjdfhksdfhksdfhsdkfhsdkfhskfhskdjf
                            </p>
                        </div>
                        <Link to={'/recherche'}>
                            <Button
                                className="w-40  text-bleuFonce hover:text-white border border-bleuFonce bg-transparent relative overflow-hidden duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-bleuFonce hover:after:opacity-100 hover:after:scale-[2.5]">
                                    <span className="flex relative z-[5]">
                                        Trouver un Pro
                                    </span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
