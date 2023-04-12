import { MutableRefObject } from "react";

export interface RouteType {
    to:string;
    element: JSX.Element;
    label:string;
     ref:MutableRefObject<HTMLInputElement | undefined>
  }

export interface SocialIcon{
    name: string;
    icon:JSX.Element;
    url?: string;
}

interface Job{
     name: string;
     url: string;
}

export interface Experience {
    job: Job;
    rol: string;
    periodStart: Date;
    periodEnd?: Date;
    description: string;
    skills: string[]
}
export interface EmailForm {
    from_name: string;
    email: string;
    message: string;
}