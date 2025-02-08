import { Outlet, useNavigation } from "react-router"
import { Contact } from "../Pages/Contact"
import { Experience } from "../Pages/Experience"
import { Home } from "../Pages/Home"
import { Projects } from "../Pages/Projects"
import { Skills } from "../Pages/Skills"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const AppLayout=()=>{
    const navigation=useNavigation();
    if(navigation==="loading")
        return <Loading/>

    return(<div className="">
        <Header/>
        {/* <Home/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/> */}
        <Outlet/>
        <Footer/>
    </div>)
}