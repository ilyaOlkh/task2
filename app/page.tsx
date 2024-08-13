import Image from "next/image";
import Header from "./components/Header";
import ProfileComplete from "./components/ProfileComplete";

export default function Home() {
    return (<>
        <Header />
        <main className="flex flex-col items-center justify-between p-2 ">
            <ProfileComplete />
        </main>
    </>);
}
