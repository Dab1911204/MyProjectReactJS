import Home from '../page/Home';
import About from '../page/About';
import Contact from '../page/Contact';
import Error404 from '../page/Error404';
import LayoutDefault from '../layout/layoutDefault';
import Blog from '../page/Blog';
import BlogNews from '../page/Blog/blogNews';
import BlogRelated from '../page/Blog/BlogRelated';
import BlogAll from '../page/Blog/BlogAll';
import BlogDetail from '../page/Blog/BlogDetail';
import InfoUser from '../page/InfoUser';
import Login from '../page/Login';
import PrivateRoutes from '../components/PrivateRoutes';

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
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "blog",
                element: <Blog />,
                children: [
                    {
                        index: true,
                        element: <BlogAll />
                    },
                    {
                        path: "news",
                        element: <BlogNews />
                    },
                    {
                        path: "related",
                        element: <BlogRelated />
                    },
                    {
                        path: ":id",
                        element: <BlogDetail />
                    }
                ]
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "*",
                element: <Error404 />
            },
            {
                element: <PrivateRoutes />,
                children: [
                    {
                        path: "info-user",
                        element: <InfoUser />
                    }
                ]
            }
        ]
    }
]

{/* <Routes>
        <Route path="/" element={<LayoutDefault />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />}>
            <Route index element={<BlogAll />} />
            <Route path="news" element={<BlogNews />} />
            <Route path="related" element={<BlogRelated />} />
            <Route path=":id" element={<BlogDetail />} />
          </Route>
          
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
          <Route element={<PrivateRoutes />}>
            <Route path="info-user" element={<InfoUser />} />
          </Route>
        </Route>
      </Routes> */}