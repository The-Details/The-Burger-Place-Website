import {GlassHeader} from "./Header";
import {
    AccentSection,
    FrySection,
    MainSection,
    OrderSection,
    SausageSection,
    SmoothieSection,
    WittyRemarkSection
} from "./Sections";
import {GlassFooter} from "./Footer";
import '../stylesheets/App.css';

export function Home() {

    return(
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