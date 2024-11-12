import TalkToUsForm from "@/components/TalkToUs/TalkToUsForm";
import bannerTalkToUs from "@/public/banner-fale-conosco.webp"
import Image from "next/image";

const TalkToUS = () => {
    return ( 
        <main className="flex flex-col items-center px-5 py-8 gap-4 bg-beige-normal">
            <h1 className="uppercase font-roboto font-bold text-lg">fale conosco</h1>

            <p className="font-roboto text-base text-[#444444]">Compartilhe sua ideia, inspire a ação</p>

            <div className="relative h-[193px] w-[262px]">
                <Image alt="Imagem de pessoas sendo amparadas" src={bannerTalkToUs} fill className="object-cover rounded-lg" />
            </div>

            <TalkToUsForm />
        </main>
     );
}
 
export default TalkToUS;