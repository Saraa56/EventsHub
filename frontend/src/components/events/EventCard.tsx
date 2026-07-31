import Button from "../ui/Button";
import type { EventCardProps } from "../../features/events/types/event.types";

function EventCard({
    title,
    date,
    location,
    participants,
    status
}: EventCardProps) {

    return (
        <article className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">

            {/* Imagen */}
            <div className="h-40 w-full bg-gray-100">
                <img
                    src="https://valkiriahubspace.com/wp-content/uploads/2021/07/eventos-tecnol%C3%B3gicos.jpg"
                    alt="Imagen del evento"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Información */}
            <div className="p-4">

                <span className="inline-block text-xs text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full">
                    {status}
                </span>

                <h3 className="mt-3 font-bold text-gray-900">
                    {title}
                </h3>

                <div className="mt-3 text-sm text-gray-500 space-y-1">
                    <p>{date}</p>
                    <p>{location}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">

                    <span className="text-sm text-gray-600">
                     {participants}
                    </span>

                    <Button
                        id="button_ver_evento"
                        type="button"
                        className="text-xs"
                    >
                        Ver detalles
                    </Button>

                </div>

            </div>

        </article>
    );
}

export default EventCard;