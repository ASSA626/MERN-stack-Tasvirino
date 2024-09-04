import Animation from "../common/Animation"
import dotsIcon from "../static/icons/threedot.svg"

const HistoryPage = () => {
    return (
        <Animation className="mb-28">
            <div className="flex flex-col items-center justify-center mt-8 mb-4">
                <div className="bg-gray-300 px-6 py-1 rounded-full text-center text-sm">
                    <p>10 شهریور، 1403</p>
                </div>
            </div>

            <section className="flex flex-col gap-6">
                <div className="relative">
                    <div className="bg-white border-2 border-dashed border-[#818ce8] w-full p-4 rounded-md shadow-2xl shadow-gray-300">
                        <h1 className="mb-2 text-xl font-bold">ایجاد گفتگو</h1>
                        <p className="text-sm font-bold text-gray-600">شما در ساعت 22:35 دقیقه گفتگوی "تست ردیف دوم" را ایجاد کردید</p>
                    </div>

                    <button className="absolute top-3 left-3">
                        <img src={dotsIcon} alt="حذف و گرفتن گزارش" className="w-[22px]" />
                    </button>
                </div>

                <div className="relative">
                    <div className="bg-white border-2 border-dashed border-[#818ce8] w-full p-4 rounded-md shadow-2xl shadow-gray-300">
                        <h1 className="mb-2 text-xl font-bold">خروج از سایت</h1>
                        <p className="text-sm font-bold text-gray-600">شما در ساعت 21:05 دقیقه از حساب خود خارج شدید</p>
                    </div>

                    <button className="absolute top-3 left-3">
                        <img src={dotsIcon} alt="حذف و گرفتن گزارش" className="w-[22px]" />
                    </button>
                </div>
            </section>

            <div className="flex flex-col items-center justify-center mt-8 mb-4">
                <div className="bg-gray-300 px-6 py-1 rounded-full text-center text-sm">
                    <p>9 شهریور، 1403</p>
                </div>
            </div>

            <section className="flex flex-col gap-6">
                <div className="relative">
                    <div className="bg-white border-2 border-dashed border-[#818ce8] w-full p-4 rounded-md shadow-2xl shadow-gray-300">
                        <h1 className="mb-2 text-xl font-bold">حذف گفتگو</h1>
                        <p className="text-sm font-bold text-gray-600">شما در ساعت 23:35 دقیقه گفتگوی "تست ردیف اول" را حذف کردید</p>
                    </div>

                    <button className="absolute top-3 left-3">
                        <img src={dotsIcon} alt="حذف و گرفتن گزارش" className="w-[22px]" />
                    </button>
                </div>

                <div className="relative">
                    <div className="bg-white border-2 border-dashed border-[#818ce8] w-full p-4 rounded-md shadow-2xl shadow-gray-300">
                        <h1 className="mb-2 text-xl font-bold">ایجاد گفتگو</h1>
                        <p className="text-sm font-bold text-gray-600">شما در ساعت 20:21 دقیقه گفتگوی "تست ردیف اول" را ایجاد کردید</p>
                    </div>

                    <button className="absolute top-3 left-3">
                        <img src={dotsIcon} alt="حذف و گرفتن گزارش" className="w-[22px]" />
                    </button>
                </div>
            </section>
        </Animation>
    )
}

export default HistoryPage