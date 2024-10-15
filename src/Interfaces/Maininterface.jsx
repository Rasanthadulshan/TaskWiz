import Footer from "../components/Footercontent";
import MainComponent from "../components/Maincomponent";
import MainComponentCounter from "../components/MainComponentCounter";
import Nav from "../components/Nav";

export default function MainInterface(){
    return (
        <div>
            <Nav></Nav>
            <MainComponentCounter/>
            <MainComponent/>
            <Footer></Footer>
        </div>
    )
}



