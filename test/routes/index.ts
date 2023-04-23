import React, {lazy} from "react";
interface routesType {
    path: string
    component: React.LazyExoticComponent<any>
}
const componentsRoute: routesType[] = [
    {
        path: 'button',
        component: lazy(() => import('../packages-dev/button/Button')),
    },
    {
        path: 'button-pro',
        component: lazy(() => import('../packages-pro/button/Button')),
    },
]


export default componentsRoute