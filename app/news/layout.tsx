import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

type Props = {
    children: React.ReactNode;
};

export default function NewsLaayout({children}: Props){
    return(
        <>
            <Hero title="qualification,project" sub="資格、プロジェクト" />
            <Sheet>{children}</Sheet>
        </>
    );
}