import s from './App.module.css';
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";

function App() {
    return (
        <div className={s.AppWrapper}>
            <Header/>
            <div className={s.mainWrapper}>
                <Main/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
