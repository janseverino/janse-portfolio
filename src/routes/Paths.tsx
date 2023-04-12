import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Experience from "../pages/Experience/Experience";
import Work from "../pages/Work/Work";
import { RouteType } from "../types/types";

import {useRef} from 'react';

const usePaths = () =>
{
 const routesPaths: RouteType[] = [
    {
      label: "About",
      to: "/about",
      element: <About />,
      ref: useRef()
    },
    {
      label: "Experience",
      to: "/experiences",
      element: <Experience />,
      ref: useRef()
    },
    {
      label: "Work",
      to: "/work",
      element: <Work />,
      ref: useRef()
    },
    {
      label: "Contact",
      to: "/contact",
      element: <Contact />,
      ref: useRef()
    },
  ]
    return {
        routesPaths
    }
}

export default usePaths
