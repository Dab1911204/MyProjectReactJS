import Home from '../pages/Home';
import LayoutDefault from '../layout/layoutDefault';
import Cart from '../pages/Cart';

export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "cart",
                element: <Cart />
            },
        ]
    }
]