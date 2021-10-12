import {
    Homepage, 
    Aboutus,
    Evcharging,
    Cloudsolution,
    IOTplatform
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
]
