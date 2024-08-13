import Image from "next/image";

export default function Header() {
    return (<>
        <header className=" bg-white border-borderGray border-b-2">
            <div className="flex  justify-center w-full ">
                <div className="flex justify-between items-center p-4 w-full max-w-screen-xl">
                    <h1 className="font-bold">My Tipaw</h1>
                    <div className="flex gap-10 items-center">
                        <div className="flex gap-1">
                            <span className="text-primary">
                                Fr
                            </span>
                            <span className="text-primary">
                                •
                            </span>
                            <span>
                                NI
                            </span>
                        </div>
                        <button type="button">
                            <Image src='/bell.svg' alt="bell" width={25} height={25} />
                        </button>
                        <button type="button" className="flex gap-5 items-center">
                            <div className="flex gap-2 items-center font-medium">
                                <div className="rounded-full">
                                    <Image src='/avatar.jpg' alt="avatar" width={40} height={40} />
                                </div>
                                <span className="text-gray">John Smith</span>
                            </div>
                            <Image src='/downarrow.svg' alt="downarrow" width={15} height={15} />
                        </button>
                    </div>
                </div>
            </div>
        </header >
    </>);
}
