import {
    Homepage, 
    Aboutus,
    Evcharging
} from '../components/pages'

export const Routes = [
    {
        path: "/",
        title: "/home",
        exact: true,
        component: () => <Homepage />
    },
    {
        path: "/about",
        title: "/about",
        exact: true,
        component: () => <Aboutus />
    },
    {
        path: "/evcharger",
        title: "/evcharger",
        exact: true,
        component: () => <Evcharging />
    },
]
