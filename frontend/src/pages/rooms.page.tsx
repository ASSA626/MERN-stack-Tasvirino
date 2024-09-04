import { Link } from "react-router-dom"
import Animation from "../common/Animation"
import RoomCard from "../components/room-card.component"

const Roomspage = () => {
    return (
        <Animation className="mb-28">
            <div className="flex items-center justify-between py-5">
                <h1 className="text-3xl font-bold">گفتگو ها</h1>

                <Link to="/rooms/create" className="px-5 py-2.5 bg-green-500 rounded-full text-white flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                    <span>گفتگو جدید</span>
                </Link>
            </div>

            <div className="flex flex-col items-center justify-center mt-6 mb-4">
                <div className="bg-gray-300 px-6 py-1 rounded-full text-center text-sm">
                    <p>10 شهریور، 1403</p>
                </div>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-y-8">
                <RoomCard
                    title="تست ردیف دوم"
                    created_at="21:06"
                    ended_at="22:34"
                    person_counts={8}
                    status="open"
                />
            </section>
        </Animation>
    )
}

export default Roomspage