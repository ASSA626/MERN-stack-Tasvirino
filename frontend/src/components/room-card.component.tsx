import avatar from "../static/images/avatar.png"
import trashIcon from "../static/icons/trash.svg"
import linkIcon from "../static/icons/link.svg"
import { Link } from "react-router-dom"

interface RoomInfo {
    title?: string,
    created_at?: string,
    ended_at?: string,
    person_counts?: number,
    status?: string
}

const RoomCard = ({ title, created_at, ended_at, person_counts, status }: RoomInfo) => {
    return (
        <div>
            <div className="w-full bg-[#4d5de4] p-6 rounded-2xl">
                <div className="flex flex-col justify-start">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-2 relative bg-white py-3 px-3 rounded-full text-white">
                                <img src={trashIcon} alt="حذف" className="w-[22px]" />
                            </button>

                            <button className="flex items-center gap-2 relative bg-white py-3 px-3 rounded-full text-white">
                                <img src={linkIcon} alt="همرسانی" className="w-[22px]" />
                            </button>
                        </div>

                        <div className="flex items-center gap-1 relative bg-white p-2 rounded-full">
                            <div className="w-[40px] h-[40px] rounded-full bg-[#d54e31] text-white flex items-center justify-center">
                                <p className="text-lg">2+</p>
                            </div>

                            <img
                                src={avatar}
                                alt={title}
                                className="w-[40px] h-[40px] rounded-full"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <h1 className="text-3xl font-bold text-white">{title}</h1>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 mt-4">
                        {
                            status === 'open' ?
                                <Link to="/call" className="bg-green-500 px-3 py-2 rounded-full w-full mt-1">
                                    <p className="text-center text-white text-md">ورود به گفتگو</p>
                                </Link>
                                :
                                <div className="bg-red-500 px-3 py-2 rounded-full w-full mt-1">
                                    <p className="text-center text-white text-md">به اتمام رسیده</p>
                                </div>
                        }

                        <div className="flex items-center gap-3">
                            <p className="text-white">تعداد شرکت کنندگان:</p>
                            <p className="text-white">{person_counts} نفر </p>
                        </div>
                    </div>

                    <div className="w-full bg-[#6975e3] flex items-center justify-between mt-6 py-2.5 px-6 border-2 border-dashed border-white rounded-lg">
                        <div className="flex flex-col gap-3">
                            <p className="text-sm font-bold text-white text-start">شروع گفتگو</p>
                            <p className="text-[21px] text-start text-white font-bold">{created_at}</p>
                        </div>

                        <hr className="w-[67px] rotate-90 border border-dashed border-white" />

                        <div className="flex flex-col gap-3">
                            <p className="text-sm font-bold text-white text-end">پایان گفتگو</p>
                            <p className="text-[21px] text-end text-white font-bold">{ended_at}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="w-full min-h-[4rem] border-t-2 border-white bg-[#4d5de4] rounded-t-2xl rounded-b-md flex items-center justify-between px-5">
                <div className="h-5 w-5 bg-white rounded-lg" />
                <div className="h-5 w-5 bg-white rounded-lg" />
                <div className="h-5 w-5 bg-white rounded-lg" />
                <div className="h-5 w-5 bg-white rounded-lg" />
                <div className="h-5 w-5 bg-white rounded-lg" />
                <div className="h-5 w-5 bg-white rounded-lg" />
                <div className="h-5 w-5 bg-white rounded-lg" />
                <div className="h-5 w-5 bg-white rounded-lg" />
                <div className="h-5 w-5 bg-white rounded-lg" />
            </div> */}
        </div>
    )
}

export default RoomCard