import Animation from "../common/Animation"
import InputBox from "../components/input.component"
import avatar from "../static/images/avatar.png"
import logoutIcon from "../static/icons/logout.svg"

const ProfilePage = () => {
    return (
        <Animation className="mb-28">
            <section className="flex flex-col justify-center items-center mt-5">
                <div className="w-36 h-36 relative">
                    <img src={avatar} alt="نام کاربر" className="w-full h-full rounded-full border-2 border-dashed border-gray-600" />

                    <label htmlFor="profile_img" className="absolute -right-1.5 bottom-2 p-1.5 bg-white rounded-full text-blue-600 border-2 border-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        
                        <input id="profile_img" type="file" hidden/>
                    </label>
                </div>
                <p className="mt-6 text-center text-black font-bold text-[27px]">علیرضا شاکر</p>

                <div className="flex justify-between items-center m-10">
                    <div className="flex flex-col items-center gap-3 w-full">
                        <p className="font-bold text-2xl">5</p>
                        <p className="font-bold text-sm text-gray-700">دفعات خروج</p>
                    </div>

                    <hr className="w-48 border border-dashed border-gray-800 rotate-90" />

                    <div className="flex flex-col items-center gap-3 w-full">
                        <p className="font-bold text-2xl">5</p>
                        <p className="font-bold text-sm text-gray-700">تعداد گفتگو ها</p>
                    </div>
                </div>

                <button className="w-full mb-10 bg-red-500 py-3 text-white rounded-full flex items-center justify-center gap-2.5 transition-colors duration-200 hover:bg-red-600">
                    <img src={logoutIcon} alt="خروج" className="w-7" />
                    <p>خروج از حساب</p>
                </button>

                <hr className="w-full text-gray-200" />

                <div className="flex flex-col items-start w-full mt-7 px-4 gap-y-5">
                    <h1 className="text-lg font-bold">ویرایش اطلاعات</h1>

                    <div className="flex flex-col items-center justify-start w-full gap-6">
                        <InputBox
                            id="name"
                            type="text"
                            name="name"
                            label="نام و نام خانوادگی"
                        />

                        <InputBox
                            id="mobile"
                            type="text"
                            name="mobile"
                            label="شماره موبایل"
                        />

                        <button className="w-full bg-green-600 py-3 text-white rounded-full flex items-center justify-center gap-2.5 transition-colors duration-200 hover:bg-green-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#fff" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>

                            <p>ویرایش اطلاعات</p>
                        </button>
                    </div>
                </div>
            </section>
        </Animation>
    )
}

export default ProfilePage