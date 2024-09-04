import Animation from "../common/Animation"
import avatar from "../static/images/avatar.png"
import avatar2 from "../static/images/avatar-2.jpg"
import avatar3 from "../static/images/avatar-3.jpg"
import avatar4 from "../static/images/avatar-4.jpg"
import avatar5 from "../static/images/avatar-5.jpg"

const CallPage = () => {
    return (
        <Animation className="w-full h-[100vh] bg-slate-900 p-0 flex flex-col items-center">
            <div className="w-full px-4 pt-3 grid grid-cols-2 gap-3">
                <img src={avatar3} alt="نام کاربر" className="w-full rounded-md" />
                <img src={avatar2} alt="نام کاربر" className="w-full rounded-md" />
                <img src={avatar4} alt="نام کاربر" className="w-full rounded-md" />
                <img src={avatar5} alt="نام کاربر" className="w-full rounded-md" />
            </div>

            <section className="fixed bottom-5 w-full px-4">
                <div>
                    <img src={avatar} alt="نام شما" className="w-[43%] rounded-t-md" />
                    {/* border-[5px] border-slate-800 */}
                </div>

                <div className="w-full px-3 py-0.5 rounded-l-full rounded-br-full bg-slate-800">
                    <div className="flex items-center justify-between py-2 px-3">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#fff" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                            </svg>
                        </button>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#fff" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </button>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#fff" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                        </button>

                        <button className="bg-[#ff1717] p-3 flex items-center justify-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#fff" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </Animation>
    )
}

export default CallPage