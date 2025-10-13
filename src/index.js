import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Container from "./components/Container"
import Footer from "./components/Footer"
import "./style.css"

function App() {
    return (
        <>
            <Header />
            <Container />
            <Footer/>
        </>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>)