import { FormEvent, useState } from "react"
import { useUserStore } from "../stores/useUserStore"
import Animation from "../common/Animation"
import { Link } from "react-router-dom"
import InputBox from "../components/input.component"
import { Toaster } from "react-hot-toast"

const Register = () => {

    const [dataAuth, setDataAuth] = useState({
        name: "",
        mobile: "",
        password: ""
    })

    const { register, user } = useUserStore()

    const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        register(dataAuth)
    }

    return (
        <Animation>
            <Toaster />
            <section className="flex flex-col md:flex-row h-screen items-center">

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                    <div className="w-full max-sm:h-[100hv]">
                        <h1 className="text-xl font-bold leading-tight text-center">ثبت نام در تصویرینو</h1>
                        <p className="mt-2 text-sm text-center">ساخته شده توسط علیرضا شاکر</p>

                        <form className="mt-10" onSubmit={handleRegister}>
                            <div className="flex flex-col gap-6">
                                <InputBox id="name" type="text" name="name" label="نام و نام خانوادگی" value={dataAuth.name} onChange={(e) => setDataAuth({...dataAuth, name: e.target.value})}/>
                                <InputBox id="mobile" type="text" name="mobile" label="شماره موبایل" value={dataAuth.mobile} onChange={(e) => setDataAuth({...dataAuth, mobile: e.target.value})}/>
                                <InputBox id="password" type="text" name="password" label="رمزعبور" value={dataAuth.password} onChange={(e) => setDataAuth({...dataAuth, password: e.target.value})}/>
                            </div>

                            <button type="submit" className="w-full block rounded-md bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-3 mt-6 transition-colors duration-200">ثبت نام</button>
                        </form>

                        <p className="mt-8 text-center">ایا از قبل حساب کاربری داری؟ <Link to="/login" className="text-blue-500 hover:text-blue-700 font-semibold">ورود</Link></p>
                    </div>
                </div>

                <div className="hidden relative lg:flex h-full items-center w-1/2 justify-center bg-gray-200">

                    <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin"></div>
                    <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>

                </div>

            </section>
        </Animation>
    )
}

export default Register