import home from "../static/icons/home.svg"
import calls from "../static/icons/call.svg"
import history from "../static/icons/history.svg"
import profile from "../static/icons/user.svg"

export const navbarLinks = [
    {
        name: "خانه",
        icon: home,
        dis: "-translate-x-0",
        url: "/"
    },
    {
        name: "گفتگوها",
        icon: calls,
        dis: "-translate-x-16",
        url: "/rooms"
    },
    {
        name: "تاریخچه",
        icon: history,
        dis: "-translate-x-32",
        url: "/history"
    },
    {
        name: "پروفایل",
        icon: profile,
        dis: "-translate-x-48",
        url: "/profile"
    }
]