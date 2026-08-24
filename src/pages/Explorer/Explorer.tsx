
import { useState } from "react";
import { Filter } from "lucide-react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const categories = [
    "Todos",
    "Corporativo",
    "Música",
    "Arte & Cultura",
    "Moda & Belleza",
    "Entretenimiento",
    "Beneficencia"
]

export default function Explorer() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("Todos");

    return (
        <main className="min-h-screen bg-[#060203]">
            <section className="border-b border-[#5C2A2D]/20 bg-[#100608]/40 py-10">
                <div className="max-w-7xl mx-auto px-2 sm:px-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#B5A89E] mb-2 block">
                        Directorio
                    </span>
                    <h1 className="font-serif text-3xl  text-[#F0EAE4] mb-6">
                        Explorar eventos
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
                        <Input
                            type="text"
                            id="explorer-search"
                            placeholder="Buscar eventos o ciudades..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="!py-3"
                        />
                        <Button
                            id="search-explorer"
                            variant="plano"
                            className="!px-4 !py-2 flex items-center justify-center gap-2 border border-[#5C2A2D]/40 rounded-md text-sm text-[#B5A89E] hover:border-[#5C2E30] hover:text-[#F0EAE4] transition-colors"
                        >
                            <Filter size={13} /> Filtros
                        </Button>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex flex-wrap gap-2 max-w-7xl mx-auto px-4 sm:px-6 py-6">
                    {categories.map((item) => (
                    <Button
                        key={item}
                        id="button-category"
                        variant="plano"
                        rounded="md"
                        onClick={() => setCategory(item)}
                        className={`text-xs px-3 py-1.5 border font-mono tracking-wide outline-none ${
                            category === item
                                ? "bg-[#351C1D] border-[#351C1D] text-[#F0EAE4]"
                                : "bg-[#100608] border border-[#5C2A2D]/40  text-[#B5A89E] hover:bg-[#351C1D]/50 hover:border-[#5C2E30] hover:text-[#F0EAE4] focus-visible:border-[#8B4A4D] focus-visible:text-[#F0EAE4] focus-visible:ring-1 focus-visible:ring-[#8B4A4D]/60"
                        }`}
                    >
                        {item}
                    </Button>
                    ))}
                </div>
            </section>
        </main>
    );
}