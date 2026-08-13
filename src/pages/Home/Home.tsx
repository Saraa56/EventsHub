import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function Home() {
    return (
        <>
            <section className="bg-[#060203] text-[#F0EAE4]">
                <span>Plataforma gestion de eventos</span>
        
                <h1>Cada evento,
                    <br />Perfemectamente orquestado</h1>
        
                    <p>Crea, organiza y gestiona eventos desde una sola plataforma. Fechas, <br />aforo, asistentes y mucho más.</p>
               
            </section>
        
            <section>
                <Input type={"search"} id={"explorer-search"} placeholder={"Buscar eventos, organizadores, ciudades..."}>
                </Input>
                 <Button type={"submit"} id={""}>Buscar</Button>
            </section>
      </>
    )
}
