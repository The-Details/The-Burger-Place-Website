import React from "react";
import ReactDOM from "react-dom";
import "../stylesheets/Modals.css";
import blackBuns from "../../assets/black-buns-on-tray.jpg";
import x from "../../assets/x-solid.svg";
import tomato from "../../assets/vertical-tomato-farm.jpg";
import lettuce from "../../assets/uv-farm-engineers.jpg";
import patty from "../../assets/a-stack-of-vegan-patties.jpg";
import dough from "../../assets/baker-kneeding-dough.jpg";
import leaf from "../../assets/leaf-solid.svg";

export const TopBunModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(

        <React.Fragment>
        <div className={"topBunModalOverlay"}>
            <div className={"topBunModal"}>
                <div className={"topBunImage"}><img src={blackBuns} alt="black buns on tray"/></div>
                <div className={"topBunInfo"}>
                    <div className={"topBunModalTitle"}>The Perfect Bun</div>
                    <div className={"topBunInfoDivider"}></div>
                    <div className={"topBunModalDescription"}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non quam. Massa tincidunt dui ut ornare lectus. Tellus molestie nunc non blandit. Venenatis a condimentum vitae sapien pellentesque habitant. Elit sed vulputate mi sit. Fermentum posuere urna nec tincidunt praesent semper feugiat. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Consequat nisl vel pretium lectus quam id leo. Lacus vel facilisis volutpat est velit egestas dui.
                    </p>
                    </div>
                </div>
                <button className={"closeTopBunModal"} onClick={hide}><img src={x} alt="close modal"/></button>
            </div>
        </div>
        </React.Fragment>, document.body
    ) : null;


export const TomatoModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(

    <React.Fragment>
        <div className={"tomatoModalOverlay"}>
            <div className={"tomatoModal"}>
                <div className={"tomatoImage"}><img src={tomato} alt="vertical tomato farm"/></div>
                <div className={"tomatoInfo"}>
                    <div className={"tomatoModalTitle"}>The Perfect Farm</div>
                    <div className={"tomatoInfoDivider"}></div>
                    <div className={"tomatoModalDescription"}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non quam. Massa tincidunt dui ut ornare lectus. Tellus molestie nunc non blandit. Venenatis a condimentum vitae sapien pellentesque habitant. Elit sed vulputate mi sit. Fermentum posuere urna nec tincidunt praesent semper feugiat. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Consequat nisl vel pretium lectus quam id leo. Lacus vel facilisis volutpat est velit egestas dui.
                        </p>
                    </div>
                </div>
                <button className={"closeTomatoModal"} onClick={hide}><img src={x} alt="close modal"/></button>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;


export const LettuceModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(

    <React.Fragment>
        <div className={"lettuceModalOverlay"}>
            <div className={"lettuceModal"}>
                <div className={"lettuceImage"}><img src={lettuce} alt="uv farm engineers"/></div>
                <div className={"lettuceInfo"}>
                    <div className={"lettuceModalTitle"}>The Perfect Lab</div>
                    <div className={"lettuceInfoDivider"}></div>
                    <div className={"lettuceModalDescription"}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non quam. Massa tincidunt dui ut ornare lectus. Tellus molestie nunc non blandit. Venenatis a condimentum vitae sapien pellentesque habitant. Elit sed vulputate mi sit. Fermentum posuere urna nec tincidunt praesent semper feugiat. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Consequat nisl vel pretium lectus quam id leo. Lacus vel facilisis volutpat est velit egestas dui.
                        </p>
                    </div>
                </div>
                <button className={"closeLettuceModal"} onClick={hide}><img src={x} alt="close modal"/></button>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;


export const PattyModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(

    <React.Fragment>
        <div className={"pattyModalOverlay"}>
            <div className={"pattyModal"}>
                <div className={"pattyImage"}><img src={patty} alt="a stack of vegan patties"/></div>
                <div className={"pattyInfo"}>
                    <div className={"pattyModalTitle"}>The Perfect Patty</div>
                    <div className={"pattyInfoDivider"}></div>
                    <div className={"pattyModalDescription"}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non quam. Massa tincidunt dui ut ornare lectus. Tellus molestie nunc non blandit. Venenatis a condimentum vitae sapien pellentesque habitant. Elit sed vulputate mi sit. Fermentum posuere urna nec tincidunt praesent semper feugiat. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Consequat nisl vel pretium lectus quam id leo. Lacus vel facilisis volutpat est velit egestas dui.
                        </p>
                    </div>
                </div>
                <button className={"closePattyModal"} onClick={hide}><img src={x} alt="close modal"/></button>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;


export const BottomBunModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(

    <React.Fragment>
        <div className={"bottomBunModalOverlay"}>
            <div className={"bottomBunModal"}>
                <div className={"bottomBunImage"}><img src={dough} alt="baker kneeding dough"/></div>
                <div className={"bottomBunInfo"}>
                    <div className={"bottomBunModalTitle"}>The Perfect Technique</div>
                    <div className={"bottomBunInfoDivider"}></div>
                    <div className={"bottomBunModalDescription"}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non quam. Massa tincidunt dui ut ornare lectus. Tellus molestie nunc non blandit. Venenatis a condimentum vitae sapien pellentesque habitant. Elit sed vulputate mi sit. Fermentum posuere urna nec tincidunt praesent semper feugiat. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Consequat nisl vel pretium lectus quam id leo. Lacus vel facilisis volutpat est velit egestas dui.
                        </p>
                    </div>
                </div>
                <button className={"closeBottomBunModal"} onClick={hide}><img src={x} alt="close modal"/></button>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;


export const BurgerMenuModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(

        <React.Fragment>
        <div className={"burgerMenuModalOverlay"}>
            <div className={"menuModal"}>
                <button className={"modalCloseButton"} onClick={hide}>
                    <img src={x} alt="close modal"/>
                </button>
                <div className={"modalHeader"}>
                    <div className={"modalTitle"}>Burger Place Burgers</div>
                    <div className={"modalDescription"}>
                        <div className={"veganIcon"}>
                            <img src={leaf} alt="vegan item"/>
                        </div>
                        <div className={"descriptionText"}>
                            100% Vegan Items + Farm to Table
                        </div>
                    </div>
                </div>
                <div className={"modalMenuItemsContainer"}>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Sweet & Spicy</div>
                        <div className={"itemDescription"}>Bacon, Pepper Jack Cheese, Arugula, Honey-Sriracha, Aioli</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Truffle & Brie</div>
                        <div className={"itemDescription"}>Truffle Aioli, Brie Cheese, Pickled Onions, Honey</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Classy</div>
                        <div className={"itemDescription"}>Goat Cheese, Caramelized Onions, Balsamic Glaze, Honey</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>The Colombian</div>
                        <div className={"itemDescription"}>Smoked Mozzarella, Cilantro, Chimichurri, Roasted Bananas</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>The Classic</div>
                        <div className={"itemDescription"}>Extra Sharp White Cheddar, Pickles, Burger Place Sauce</div>
                    </div>
                </div>
                <div className={"modalFooter"}>Let Us Know if you have a serious food allergy. We will do our best to accommodate you.</div>
            </div>
        </div>
        </React.Fragment>, document.body
) : null;


export const SausageMenuModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(

        <React.Fragment>
        <div className={"sausageMenuModalOverlay"}>
            <div className={"menuModal"}>
                <button className={"modalCloseButton"} onClick={hide}>
                    <img src={x} alt="close modal"/>
                </button>
                <div className={"modalHeader"}>
                    <div className={"modalTitle"}>Burger Place Sausages</div>
                    <div className={"modalDescription"}>
                        <div className={"veganIcon"}>
                            <img src={leaf} alt="vegan item"/>
                        </div>
                        <div className={"descriptionText"}>
                            100% Vegan Items + Farm to Table
                        </div>
                    </div>
                </div>
                <div className={"modalMenuItemsContainer"}>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Smoked Bratwurst</div>
                        <div className={"itemDescription"}>Bacon, Pepper Jack Cheese, Arugula, Honey-Sriracha, Aioli</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Spicy Polish</div>
                        <div className={"itemDescription"}>Vegan pork, vegan beef, spices, garlic, paprika</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Chipotle Chicken Florentine</div>
                        <div className={"itemDescription"}>Vegan chicken, spinach, feta, sun-dried tomato, chipotle</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>The Italian</div>
                        <div className={"itemDescription"}>Wheat, eggplant, red wine, garlic, spices, fennel</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Smoked Hungarian</div>
                        <div className={"itemDescription"}>Vegan pork, garlic, paprika</div>
                    </div>
                </div>
                <div className={"modalFooter"}>Let Us Know if you have a serious food allergy. We will do our best to accommodate you.</div>
            </div>
        </div>
        </React.Fragment>, document.body
) : null;


export const FryMenuModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(

        <React.Fragment>
        <div className={"fryMenuModalOverlay"}>
            <div className={"menuModal"}>
                <button className={"modalCloseButton"} onClick={hide}>
                    <img src={x} alt="close modal"/>
                </button>
                <div className={"modalHeader"}>
                    <div className={"modalTitle"}>Burger Place Fries</div>
                    <div className={"modalDescription"}>
                        <div className={"veganIcon"}>
                            <img src={leaf} alt="vegan item"/>
                        </div>
                        <div className={"descriptionText"}>
                            100% Vegan Items + Farm to Table
                        </div>
                    </div>
                </div>
                <div className={"modalMenuItemsContainer"}>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Poutine</div>
                        <div className={"itemDescription"}>Standard Cut Fries, Impossible Brisket, Smoked Mozzarella, Cilantro Chimichurri</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Garlic & Rosemary Fries</div>
                        <div className={"itemDescription"}>Waffle of Standard Cut Fries. Seasoned with salt, minced, garlic, rosemary, and chopped parsley</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Sweet Potato Fries</div>
                        <div className={"itemDescription"}>Sweet Potato Fries. Lightly seasoned with salt</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Spicy Green Beans</div>
                        <div className={"itemDescription"}>Fried Green Beans. Seasoned with chipotle</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Just Salt Fries</div>
                        <div className={"itemDescription"}>Waffle or Standard Cut Fries. Seasoned with literally just salt</div>
                    </div>
                </div>
                <div className={"modalFooter"}>Let Us Know if you have a serious food allergy. We will do our best to accommodate you.</div>
            </div>
        </div>
        </React.Fragment>, document.body
) : null;


export const SmoothieMenuModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(

        <React.Fragment>
        <div className={"smoothieMenuModalOverlay"}>
            <div className={"menuModal"}>
                <button className={"modalCloseButton"} onClick={hide}>
                    <img src={x} alt="close modal"/>
                </button>
                <div className={"modalHeader"}>
                    <div className={"modalTitle"}>Burger Place Burgers</div>
                    <div className={"modalDescription"}>
                        <div className={"veganIcon"}>
                            <img src={leaf} alt="vegan item"/>
                        </div>
                        <div className={"descriptionText"}>
                            100% Vegan Items + Farm to Table
                        </div>
                    </div>
                </div>
                <div className={"modalMenuItemsContainer"}>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Peach</div>
                        <div className={"itemDescription"}>Peach juice, peaches, banana, non-fat oat frozen yogurt, orange sherbet</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Strawberry</div>
                        <div className={"itemDescription"}>Apple juice, strawberries, banana, non-fat oat frozen yogurt</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Tropical Guava</div>
                        <div className={"itemDescription"}>Guava juice, strawberries, banana, non-fat frozen oat yogurt, pineapple sherbet</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Acai Energy</div>
                        <div className={"itemDescription"}>Apple juice, Brazilian acai, strawberries, banana, non-fat oat frozen yogurt</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Tropical Kale</div>
                        <div className={"itemDescription"}>Pineapple juice, kale, peaches, bananas, non-fat frozen oat yogurt, pineapple sherbet</div>
                    </div>
                </div>
                <div className={"modalFooter"}>Let Us Know if you have a serious food allergy. We will do our best to accommodate you.</div>
            </div>
        </div>
        </React.Fragment>, document.body
) : null;


export const ContactInfoModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(

        <React.Fragment>
        <div className={"contactInfoModalOverlay"}>
            <div className={"contactInfoModal"}>
                <div className={"contactInfoTitle"}></div>
                <div className={"orderModalDivider"}></div>
                <div className={"contactInfo"}></div>
                <button className={"closeContactInfoModal"} onClick={hide}><img src={x} alt="close modal"/></button>
            </div>
        </div>
        </React.Fragment>, document.body
) : null;


export const DoorDashModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(

        <React.Fragment>
        <div className={"doorDashModalOverlay"}>
            <div className={"doorDashModal"}>
                <div className={"doorDashTitle"}></div>
                <div className={"orderModalDivider"}></div>
                <div className={"doorDashInfo"}></div>
                <button className={"closeDoorDashModal"} onClick={hide}><img src={x} alt="close modal"/></button>
            </div>
        </div>
        </React.Fragment>, document.body
) : null;


export const UberEatsModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(

        <React.Fragment>
        <div className={"uberEatsModalOverlay"}>
            <div className={"uberEatsModal"}>
                <div className={"uberEatsTitle"}></div>
                <div className={"orderModalDivider"}></div>
                <div className={"uberEatsInfo"}></div>
                <button className={"closeUberEatsModal"} onClick={hide}><img src={x} alt="close modal"/></button>
            </div>
        </div>
        </React.Fragment>, document.body
) : null;


export const CallUsModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(

        <React.Fragment>
        <div className={"callUsModalOverlay"}>
            <div className={"callUsModal"}>
                <div className={"callUsTitle"}></div>
                <div className={"orderModalDivider"}></div>
                <div className={"callUsInfo"}></div>
                <button className={"closeCallUsModal"} onClick={hide}><img src={x} alt="close modal"/></button>
            </div>
        </div>
        </React.Fragment>, document.body
) : null;


export const OrderThruUsModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(

        <React.Fragment>
        <div className={"orderThruUsModalOverlay"}>
            <div className={"orderThruUsModal"}>
                <div className={"orderThruUsTitle"}></div>
                <div className={"orderModalDivider"}></div>
                <div className={"orderThruUsInfo"}></div>
                <button className={"closeOrderThruUsModal"} onClick={hide}><img src={x} alt="close modal"/></button>
            </div>
        </div>
        </React.Fragment>, document.body
) : null;