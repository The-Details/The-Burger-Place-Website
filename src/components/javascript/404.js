import seedling from "../../assets/seedling-solid.svg";
import {ReturnHomeButton} from "./Buttons";
import "../stylesheets/404.css";

export function ErrorPage() {
    return(
        <div className={"errorPageMainContainer"}>
            <div className={"errorImageContainer"}><img src={seedling} alt="seedling"/></div>
            <div className={"errorHeaderContainer"}><h1 className={"errorHeader"}>Oh no...!</h1></div>
            <div className={"errorDescriptionContainer"}><p className={"errorDescription"}>It would seem we are still growing the thing you are looking for. Check back later maybe it will be done then!</p></div>
            <div className={"returnHomeButton"}><ReturnHomeButton/></div>
        </div>
    );
}