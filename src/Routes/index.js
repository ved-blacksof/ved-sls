import {
    Homepage, 
    Aboutus,
    Evcharging,
    Cloudsolution,
    IOTplatform,
    Digital,
    Smartstreet,
    Railways,
<<<<<<< HEAD
    Solar,
    Smarttraffic
=======
    Solar
>>>>>>> 6abe93bbf00ebb16cffc66800f79eed3709c4a31
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
<<<<<<< HEAD
        path: "/smartstreet",
        title: "/smartstreet",
=======
        path: "/smart",
        title: "/smart",
>>>>>>> 6abe93bbf00ebb16cffc66800f79eed3709c4a31
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
<<<<<<< HEAD
    {
        path: "/smarttraffic",
        title: "/smarttraffic",
        exact: true,
        component: () => <Smarttraffic />
    },

=======
>>>>>>> 6abe93bbf00ebb16cffc66800f79eed3709c4a31
]
