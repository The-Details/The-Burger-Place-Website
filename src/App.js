import './components/stylesheets/App.css';
import {GlassHeader} from './components/javascript/Header';
import {GlassFooter} from "./components/javascript/Footer";
import {
    AccentSection,
    FrySection,
    MainSection,
    OrderSection,
    SausageSection,
    SmoothieSection,
    WittyRemarkSection
} from "./components/javascript/Sections";


function App() {
  return (
    <div className="App">
        <GlassHeader />
        <MainSection />
        <WittyRemarkSection />
        <SausageSection />
        <AccentSection />
        <FrySection />
        <AccentSection />
        <SmoothieSection />
        <OrderSection />
        <GlassFooter />
    </div>
  );
}

export default App;
