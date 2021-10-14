import {
    Homepage, 
    Aboutus,
    Evcharging,
    Cloudsolution,
    IOTplatform,
    Digital,
    Smartstreet,
    Railways,
    Solar
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
    {
        path: "/cloud",
        title: "/cloud",
        exact: true,
        component: () => <Cloudsolution />
    },
    {
        path: "/iot",
        title: "/iot",
        exact: true,
        component: () => <IOTplatform />
    },
    {
        path: "/digital",
        title: "/digital",
        exact: true,
        component: () => <Digital />
    },
    {
        path: "/smart",
        title: "/smart",
        exact: true,
        component: () => <Smartstreet />
    },
    {
        path: "/railways",
        title: "/railways",
        exact: true,
        component: () => <Railways />
    },
    {
        path: "/solar",
        title: "/solar",
        exact: true,
        component: () => <Solar />
    },
]
