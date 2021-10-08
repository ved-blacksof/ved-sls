import {
    Homepage, 
    Aboutus

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
]
