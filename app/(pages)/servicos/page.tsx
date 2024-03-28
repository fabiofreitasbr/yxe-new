import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import ListServicos from "@/app/parts/estrutura/listServicos";

export default function PageServicos() {
    return (
        <>
            <HeaderTitle titlePage="Serviços" />
            <section id="servicos" className="py-10">
                <div className="container mx-auto px-4">
                    <ListServicos />
                </div>
            </section>
        </>
    );
}
