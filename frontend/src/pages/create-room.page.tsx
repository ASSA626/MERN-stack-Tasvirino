import Animation from "../common/Animation"
import InputBox from "../components/input.component"
import linkIcon from "../static/icons/link.svg"

const CreateRoom = () => {
    return (
        <Animation className="mb-28">
            <section className="flex flex-col items-start mt-5">
                <h1 className="text-2xl font-bold text-gray-600">ایجاد گفتگو</h1>

                <form className="w-full mt-6 flex flex-col gap-y-5 mb-6">
                    <InputBox
                        id="title"
                        type="text"
                        name="title"
                        label="اسم گفتگو"
                    />

                    <div className=" w-full mb-3">
                        <p className="mb-2">لینک گفتگو</p>
                        <div className="w-full py-1 px-2.5 border border-gray-400 rounded-md flex items-center justify-between gap-2">
                            <button className="p-2 border border-dashed border-gray-500 rounded-md">
                                <img src={linkIcon} alt="" className="w-6" />
                            </button>

                            <p className="text-md text-end line-clamp-1">localhost:3000/call/TybncsRTOm98wc</p>
                        </div>
                    </div>

                    <button type="button" className="bg-green-500 py-2.5 text-white rounded-md">ایجاد گفتگو</button>
                </form>
            </section>
        </Animation>
    )
}

export default CreateRoom