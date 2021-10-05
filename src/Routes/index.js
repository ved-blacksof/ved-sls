import { Homepage } from '../components/pages'

export const Routes = [
    {
        path: "/",
        title: "/home",
        exact: true,
        component: () => <Homepage />
    },
]
