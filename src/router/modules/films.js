//电影模块
import Films from "@/views/Film/Films"
import NowPlaying from "@/views/Film/NowPlaying"
import ComingSoon from "@/views/Film/ComingSoon"
import Detail from "@/views/Film/Detail"

const filmsRoutes = [
    {
        path: "/films",
        component: Films,
        //指定路由
        children: [
            {
                path: "nowPlaying", component: NowPlaying
            },
            {
                path: "comingSoon", component: ComingSoon
            }
        ]

    },
    {
        path: "/film/:film_id",
        component: Detail,
    },
]


export default filmsRoutes;