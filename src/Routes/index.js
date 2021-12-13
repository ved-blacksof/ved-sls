import {
    Homepage, 
    Aboutus,
    Evcharging,
    Cloudsolution,
    IOTplatform,
    Digital,
    Smartstreet,
    Railways,
    Solar,
    Smarttraffic,
    Contactus,
    Gaming,
    Smartmetering,
    IPcore,
    MachineLearning,
    Electronics,
    Highspeed,
    Testing,
    SoftDev,
    Transformers,
    Homeautomation
        
} from '../components/pages'

export const Routes = [
    {
        path: "/",
        title: "/home",
        exact: true,
        component: () => <Homepage />
    },
    {
        path: "/home",
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
        path: "/smartstreet",
        title: "/smartstreet",
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
    {
        path: "/smarttraffic",
        title: "/smarttraffic",
        exact: true,
        component: () => <Smarttraffic />
    },
    {
        path: "/contact",
        title: "/contact",
        exact: true,
        component: () => <Contactus />
    },
    {
        path: "/gaming",
        title: "/gaming",
        exact: true,
        component: () => <Gaming />
    },
    {
        path: "/smartmeter",
        title: "/smartmeter",
        exact: true,
        component: () => <Smartmetering/>
    },
    {
        path: "/ipcore",
        title: "/ipcore",
        exact: true,
        component: () => <IPcore/>
    },
    {
        path: "/ml",
        title: "/ml",
        exact: true,
        component: () => <MachineLearning/>
    },
    {
        path: "/electronics",
        title: "/electronics",
        exact: true,
        component: () => <Electronics/>
    },
    {
        path: "/highspeed",
        title: "/highspeed",
        exact: true,
        component: () => <Highspeed/>
    },
    {
        path: "/testing",
        title: "/testing",
        exact: true,
        component: () => <Testing/>
    },
    {
        path: "/softdev",
        title: "/softdev",
        exact: true,
        component: () => <SoftDev/>
    },
    {
        path: "/transformers",
        title: "/transformers",
        exact: true,
        component: () => <Transformers/>
    },
    {
        path: "/homeauto",
        title: "/homeauto",
        exact: true,
        component: () => <Homeautomation/>
    },

]
