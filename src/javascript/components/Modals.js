

export function TopBunModal({handleClose, show, children}){
    const topBunModalController = show ? "modal display-block" : "modal display-none";

    return(
        <div className={topBunModalController}>
            <div className={"topBunModal"}>
                {children}
                <div className={"topBunImage"}><img src="../../assets/black-buns-on-tray.jpg" alt="black buns on tray"/></div>
                <div className={"topBunInfo"}>
                    <div className={"topBunModalTitle"}></div>
                    <div className={"topBunInfoDivider"}></div>
                    <div className={"topBunModalDescription"}></div>
                </div>
                <button className={"closeTopBunModal"} onClick={handleClose}><img src="../../assets/x-solid.svg" alt="close modal"/></button>
            </div>
        </div>
    );
}


export function TomatoModal({handleClose, show, children}){
    const tomatoModalController = show ? "modal display-block" : "modal display-none";

    return(
        <div className={tomatoModalController}>
            <div className={"tomatoModal"}>
                {children}
                <div className={"tomatoImage"}><img src="../../assets/vertical-tomato-farm.jpg" alt="vertical tomato farm"/></div>
                <div className={"tomatoInfo"}>
                    <div className={"tomatoModalTitle"}></div>
                    <div className={"tomatoInfoDivider"}></div>
                    <div className={"tomatoModalDescription"}></div>
                </div>
                <button className={"closeTomatoModal"} onClick={handleClose}><img src="../../assets/x-solid.svg" alt="close modal"/></button>
            </div>
        </div>

    );
}


export function LettuceModal({handleClose, show, children}){
    const lettuceModalController = show ? "modal display-block" : "modal display-none";

    return(
        <div className={lettuceModalController}>
            <div className={"lettuceModal"}>
                {children}
                <div className={"lettuceImage"}><img src="../../assets/uv-farm-engineers.jpg" alt="uv farm engineers"/></div>
                <div className={"lettuceInfo"}>
                    <div className={"lettuceModalTitle"}></div>
                    <div className={"lettuceInfoDivider"}></div>
                    <div className={"lettuceModalDescription"}></div>
                </div>
                <button className={"closeLettuceModal"} onClick={handleClose}><img src="../../assets/x-solid.svg" alt="close modal"/></button>
            </div>
        </div>

    );
}


export function PattyModal({handleClose, show, children}){
    const pattyModalController = show ? "modal display-block" : "modal display-none";

    return(
        <div className={pattyModalController}>
            <div className={"pattyModel"}>
                {children}
                <div className={"pattyImage"}><img src="../../assets/a-stack-of-vegan-patties.jpg" alt="a stack of vegan patties"/></div>
                <div className={"pattyInfo"}>
                    <div className={"pattyModalTitle"}></div>
                    <div className={"pattyInfoDivider"}></div>
                    <div className={"pattyModalDescription"}></div>
                </div>
                <button className={"closePattyModal"} onClick={handleClose}><img src="../../assets/x-solid.svg" alt="close modal"/></button>
            </div>
        </div>

    );
}


export function BottomBunModal({handleClose, show, children}){
    const bottomBunModalController = show ? "modal display-block" : "modal display-none";

    return(
        <div className={bottomBunModalController}>
            <div className={"bottomBunModal"}>
                {children}
                <div className={"bottomBunImage"}><img src="../../assets/baker-kneeding-dough.jpg" alt="baker kneeding dough"/></div>
                <div className={"bottomBunInfo"}>
                    <div className={"bottomBunModalTitle"}></div>
                    <div className={"bottomBunInfoDivider"}></div>
                    <div className={"bottomBunModalDescription"}></div>
                </div>
                <button className={"closeBottomBunModal"} onClick={handleClose}><img src="../../assets/x-solid.svg" alt="close modal"/></button>
            </div>
        </div>

    );
}


export function BurgerMenuModal({handleClose, show, children}){
    const burgerMenuModalController = show ? "modal display-block" : "modal display-none";

    return(
        <div className={burgerMenuModalController}>
            <div className={"menuModal"}>
                {children}
                <button className={"modalCloseButton"} onClick={handleClose}>
                    <img src="../../assets/x-solid.svg" alt="close modal"/>
                </button>
                <div className={"modalHeader"}>
                    <div className={"modalTitle"}>Burger Place Burgers</div>
                    <div className={"modalDescription"}>
                        <div className={"veganIcon"}>
                            <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                        </div>
                        <div className={"descriptionText"}>
                            100% Vegan Items + Farm to Table
                        </div>
                    </div>
                </div>
                <div className={"modalMenuItemsContainer"}>

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                    </div>
                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Sweet & Spicy</div>
                        <div className={"itemDescription"}>Bacon, Pepper Jack Cheese, Arugula, Honey-Sriracha, Aioli</div>
                    </div>

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                    </div>
                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Truffle & Brie</div>
                        <div className={"itemDescription"}>Truffle Aioli, Brie Cheese, Pickled Onions, Honey</div>
                    </div>

                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Classy</div>
                        <div className={"itemDescription"}>Goat Cheese, Caramelized Onions, Balsamic Glaze, Honey</div>
                    </div>

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
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
    );
}


export function SausageMenuModal({handleClose, show, children}){
    const sausageMenuModalController = show ? "modal display-block" : "modal display-none";

    return(
        <div className={sausageMenuModalController}>
            <div className={"menuModal"}>
                {children}
                <button className={"modalCloseButton"} onClick={handleClose}>
                    <img src="../../assets/x-solid.svg" alt="close modal"/>
                </button>
                <div className={"modalHeader"}>
                    <div className={"modalTitle"}>Burger Place Sausages</div>
                    <div className={"modalDescription"}>
                        <div className={"veganIcon"}>
                            <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
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

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                    </div>
                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Spicy Polish</div>
                        <div className={"itemDescription"}>Vegan pork, vegan beef, spices, garlic, paprika</div>
                    </div>

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                    </div>
                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Chipotle Chicken Florentine</div>
                        <div className={"itemDescription"}>Vegan chicken, spinach, feta, sun-dried tomato, chipotle</div>
                    </div>

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                    </div>
                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>The Italian</div>
                        <div className={"itemDescription"}>Wheat, eggplant, red wine, garlic, spices, fennel</div>
                    </div>

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                    </div>
                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Smoked Hungarian</div>
                        <div className={"itemDescription"}>Vegan pork, garlic, paprika</div>
                    </div>
                </div>
                <div className={"modalFooter"}>Let Us Know if you have a serious food allergy. We will do our best to accommodate you.</div>
            </div>
        </div>

    );
}


export function FryMenuModal({handleClose, show, children}){
    const fryMenuModalController = show ? "modal display-block" : "modal display-none";

    return(
        <div className={fryMenuModalController}>
            <div className={"menuModal"}>
                {children}
                <button className={"modalCloseButton"} onClick={handleClose}>
                    <img src="../../assets/x-solid.svg" alt="close modal"/>
                </button>
                <div className={"modalHeader"}>
                    <div className={"modalTitle"}>Burger Place Fries</div>
                    <div className={"modalDescription"}>
                        <div className={"veganIcon"}>
                            <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                        </div>
                        <div className={"descriptionText"}>
                            100% Vegan Items + Farm to Table
                        </div>
                    </div>
                </div>
                <div className={"modalMenuItemsContainer"}>

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                    </div>
                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Poutine</div>
                        <div className={"itemDescription"}>Standard Cut Fries, Impossible Brisket, Smoked Mozzarella, Cilantro Chimichurri</div>
                    </div>

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                    </div>
                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Garlic & Rosemary Fries</div>
                        <div className={"itemDescription"}>Waffle of Standard Cut Fries. Seasoned with salt, minced, garlic, rosemary, and chopped parsley</div>
                    </div>

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                    </div>
                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Sweet Potato Fries</div>
                        <div className={"itemDescription"}>Sweet Potato Fries. Lightly seasoned with salt</div>
                    </div>

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                    </div>
                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Spicy Green Beans</div>
                        <div className={"itemDescription"}>Fried Green Beans. Seasoned with chipotle</div>
                    </div>

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                    </div>
                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Just Salt Fries</div>
                        <div className={"itemDescription"}>Waffle or Standard Cut Fries. Seasoned with literally just salt</div>
                    </div>
                </div>
                <div className={"modalFooter"}>Let Us Know if you have a serious food allergy. We will do our best to accommodate you.</div>
            </div>
        </div>

    );
}


export function SmoothieMenuModal({handleClose, show, children}){
    const smoothieMenuModalController = show ? "modal display-block" : "modal display-none";

    return(
        <div className={smoothieMenuModalController}>
            <div className={"menuModal"}>
                {children}
                <button className={"modalCloseButton"} onClick={handleClose}>
                    <img src="../../assets/x-solid.svg" alt="close modal"/>
                </button>
                <div className={"modalHeader"}>
                    <div className={"modalTitle"}>Burger Place Burgers</div>
                    <div className={"modalDescription"}>
                        <div className={"veganIcon"}>
                            <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                        </div>
                        <div className={"descriptionText"}>
                            100% Vegan Items + Farm to Table
                        </div>
                    </div>
                </div>
                <div className={"modalMenuItemsContainer"}>

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                    </div>
                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Peach</div>
                        <div className={"itemDescription"}>Peach juice, peaches, banana, non-fat oat frozen yogurt, orange sherbet</div>
                    </div>

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                    </div>
                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Strawberry</div>
                        <div className={"itemDescription"}>Apple juice, strawberries, banana, non-fat oat frozen yogurt</div>
                    </div>

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                    </div>
                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Tropical Guava</div>
                        <div className={"itemDescription"}>Guava juice, strawberries, banana, non-fat frozen oat yogurt, pineapple sherbet</div>
                    </div>

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                    </div>
                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Acai Energy</div>
                        <div className={"itemDescription"}>Apple juice, Brazilian acai, strawberries, banana, non-fat oat frozen yogurt</div>
                    </div>

                    <div className={"veganItem"}>
                        <img src="../../assets/leaf-solid.svg" alt="vegan item"/>
                    </div>
                    <div className={"modalMenuItem"}>
                        <div className={"itemTitle"}>Tropical Kale</div>
                        <div className={"itemDescription"}>Pineapple juice, kale, peaches, bananas, non-fat frozen oat yogurt, pineapple sherbet</div>
                    </div>
                </div>
                <div className={"modalFooter"}>Let Us Know if you have a serious food allergy. We will do our best to accommodate you.</div>
            </div>
        </div>

    );
}


export function ContactInfoModal({handleClose, show, children}){
    const contactInfoModalController = show ? "modal display-block" : "modal display-none";

    return(
        <div className={contactInfoModalController}>
            <div className={"contactInfoModal"}>
                {children}
                <div className={"contactInfoTitle"}></div>
                <div className={"orderModalDivider"}></div>
                <div className={"contactInfo"}></div>
                <button className={"closeContactInfoModal"} onClick={handleClose}><img src="../../assets/x-solid.svg" alt="close modal"/></button>
            </div>
        </div>

    );
}


export function DoorDashModal({handleClose, show, children}){
    const doorDashModalController = show ? "modal display-block" : "modal display-none";

    return(
        <div className={doorDashModalController}>
            <div className={"doorDashModal"}>
                {children}
                <div className={"doorDashTitle"}></div>
                <div className={"orderModalDivider"}></div>
                <div className={"doorDashInfo"}></div>
                <button className={"closeDoorDashModal"} onClick={handleClose}><img src="../../assets/x-solid.svg" alt="close modal"/></button>
            </div>
        </div>

    );
}


export function UberEatsModal({handleClose, show, children}){
    const uberEatsModalController = show ? "modal display-block" : "modal display-none";

    return(
        <div className={uberEatsModalController}>
            <div className={"uberEatsModal"}>
                {children}
                <div className={"uberEatsTitle"}></div>
                <div className={"orderModalDivider"}></div>
                <div className={"uberEatsInfo"}></div>
                <button className={"closeUberEatsModal"} onClick={handleClose}><img src="../../assets/x-solid.svg" alt="close modal"/></button>
            </div>
        </div>

    );
}


export function CallUsModal({handleClose, show, children}){
    const callUsModalController = show ? "modal display-block" : "modal display-none";

    return(
        <div className={callUsModalController}>
            <div className={"callUsModal"}>
                {children}
                <div className={"callUsTitle"}></div>
                <div className={"orderModalDivider"}></div>
                <div className={"callUsInfo"}></div>
                <button className={"closeCallUsModal"} onClick={handleClose}><img src="../../assets/x-solid.svg" alt="close modal"/></button>
            </div>
        </div>

    );
}


export function OrderThruUsModal({handleClose, show, children}){
    const orderThruUsModalController = show ? "modal display-block" : "modal display-none";

    return(
        <div className={orderThruUsModalController}>
            <div className={"orderThruUsModal"}>
                {children}
                <div className={"orderThruUsTitle"}></div>
                <div className={"orderModalDivider"}></div>
                <div className={"orderThruUsInfo"}></div>
                <button className={"closeOrderThruUsModal"} onClick={handleClose}><img src="../../assets/x-solid.svg" alt="close modal"/></button>
            </div>
        </div>

    );
}