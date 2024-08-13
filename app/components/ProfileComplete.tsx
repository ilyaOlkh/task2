import Image from "next/image";

export default function ProfileComplete() {
    return (<>
        <div className=" bg-white w-full  max-w-screen-xl rounded-lg border-borderGray border-2">
            <div className="p-7">
                <div className="">
                    <h2 className="text-primary font-medium">You successfully complete your profile at Tipaw</h2>
                    <div className="text-primary font-medium">Now you can use Tipaw for 100% 🎉</div>
                </div>
            </div>
            <div className="grayLine"></div>
            <div className="p-7">
            </div>
        </div>
    </>);
}
