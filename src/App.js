import './App.css';
import Footer from './pages/footer/Footer';
import Home from './pages/page1/Home';
import Project from './pages/page2/project/Project';
import ContactUs from './pages/page2/contactUs/ContactUs';
import Projectpage from './pages/projectpage/Projectpage';
import ProjectDetails from './pages/projectpage/ProjectDetails';
import Navbar from './pages/page1/Navbar'; // Make sure to import your Navbar
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <>
              <Navbar />
              <Home />
              <Project />
              <ContactUs />
            </>
          ),
        },
        {
          path: "projects",
          element: <Projectpage />,
        },
        {
          path: "projects/:id",
          element: <ProjectDetails />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
