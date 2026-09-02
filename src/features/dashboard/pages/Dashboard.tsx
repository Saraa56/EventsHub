import {
    CiCalendarDate,
    CiCircleCheck,
    CiClock2,
    CiUser
} from "react-icons/ci";
import { IoSearch } from "react-icons/io5";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

function Dashboard() {
    return (
        <section className="min-h-screen bg-gray-50 px-6 py-8">
            <div className="max-w-6xl mx-auto">

                {/* Encabezado */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold">
                            Dashboard
                        </h1>

                        <p className="text-gray-600">
                            Bienvenido a EventHub, usuario
                        </p>
                    </div>

                    <Button
                        id="button_create_event"
                        type="button"
                        variant="secundario"
                        rounded="md"
                        className="h-10 w-30 text-xs md:text-sm lg:text-base"
                    >
                        Crear Evento
                    </Button>
                </div>

                {/* Resumen */}
                <section
                    id="resumen-eventos"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 "
                >

                    <article
                        id="eventos-create"
                        className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-200"
                    >
                        <div className="justify-between items-center mb-2 flex">
                            <h3 className="text-gray-600 text-xs my-1 font-bold tracking-wide uppercase">
                                Eventos creados
                            </h3>

                            <CiCalendarDate className="w-6 h-6 text-cyan-600 rounded-md bg-cyan-100 opacity-75" />
                        </div>

                        <p className="text-gray-800 font-bold text-3xl">
                            24
                        </p>

                        <small className="text-green-600 font-semibold">
                            +3 este mes
                        </small>
                    </article>

                    <article
                        id="eventos-proximos"
                        className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 hadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-200"
                    >
                        <div className="justify-between items-center mb-2 flex">
                            <h3 className="text-gray-600 text-xs my-1 font-bold tracking-wide uppercase">
                                Próximos eventos
                            </h3>

                            <CiClock2 className="w-6 h-6 text-cyan-600 rounded-md bg-cyan-100 opacity-75" />
                        </div>

                        <p className="text-gray-800 font-bold text-3xl">
                            8
                        </p>

                        <small className="text-green-600 font-semibold">
                            +2 esta semana
                        </small>
                    </article>

                    <article
                        id="participacion"
                        className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 hadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-200"
                    >
                        <div className="justify-between items-center mb-2 flex">
                            <h3 className="text-gray-600 text-xs my-1 font-bold tracking-wide uppercase">
                                Participantes
                            </h3>

                            <CiUser className="w-6 h-6 text-cyan-600 rounded-md bg-cyan-100 opacity-75" />
                        </div>

                        <p className="text-gray-800 font-bold text-3xl">
                            12.4k
                        </p>

                        <small className="text-green-600 font-semibold">
                            +13% vs mes anterior
                        </small>
                    </article>

                    <article
                        id="eventos-finalizados"
                        className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 hadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-200"
                    >
                        <div className="justify-between items-center mb-2 flex">
                            <h3 className="text-gray-600 text-xs my-1 font-bold tracking-wide uppercase">
                                Eventos finalizados
                            </h3>

                            <CiCircleCheck className="w-6 h-6 text-cyan-600 rounded-md bg-cyan-100 opacity-75" />
                        </div>

                        <p className="text-gray-800 font-bold text-3xl">
                            16
                        </p>

                        <small className="text-green-600 font-semibold">
                            60% completados
                        </small>
                    </article>

                </section>

                {/* Búsqueda y filtros */}
                <section
                    id="busqueda-eventos"
                    className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8"
                >
                    <div className="w-full md:flex-1 md:max-w-md relative">
                        <Input
                            type="search"
                            id="search_events"
                            placeholder="Buscar eventos"
                            value=""
                            onChange={() => {}}
                            error=""
                            icon={IoSearch}
                        />
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4 md:mt-0">

                        <Button
                            id="button_filter_todos"
                            type="button"
                            variant="secundario"
                            rounded="full"
                            className="w-auto px-5 py-2"
                        >
                            Todos
                        </Button>

                        <Button
                            id="button_filter_proximos"
                            type="button"
                            variant="secundario"
                            rounded="full"
                            className="w-auto px-5 py-2"
                        >
                            Próximos
                        </Button>

                        <Button
                            id="button_filter_activos"
                            type="button"
                            variant="secundario"
                            rounded="full"
                            className="w-auto px-5 py-2"
                        >
                            Activos
                        </Button>

                        <Button
                            id="button_filter_finalizados"
                            type="button"
                            variant="secundario"
                            rounded="full"
                            className="w-auto px-5 py-2"
                        >
                            Finalizados
                        </Button>

                    </div>
                </section>

            </div>
        </section>
    );
}

export default Dashboard;