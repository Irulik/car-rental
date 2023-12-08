
const Modal = ({children}) => {
    return (
        <div className='ModalWindow'>
            <div className="ModalContainer">
                <svg className="ModalCross">
                    <use href="/src/images/icons/Cross-opt.svg"></use>
                </svg>
                <div className="ModalContainer">
                    <div className="ModalContainerParts">
                        <div className="ModalImg">
                            <img
                                src="/src/images/image-1.jpg"
                                alt=""></img>
                        </div>
                    <div className="ModalContainerText">
                        <div className="ModalBlockFirst">
                            <h3 className="ModalTitle">
                                <span className="CarTitle"></span>
                            </h3>
                            <div className="ModalBlockAddress">
                                    <ul className="ListType">
                                        <li className="City">{ }</li>
                                        <li className="Country"></li>
                                        <li className="Year"></li>
                                        <li className="Type"></li>
                                    </ul>
                                    <ul className="ListDescription">
                                        <li className="DescOne"></li>
                                        <li className="DescTwo"></li>
                                    </ul>
                                </div>
                                <p className="BlockText"></p>                            
                            </div>
                            <div className="BlockFunction">
                                <h4 className="FuncTitle"></h4>
                            
                                <div className="BlockFuncContainer">
                                    <ul className="BlockFuncDescription">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>

                                    <ul className="">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="BlockRental">
                                <h4 className="RentalTitle">Rental Conditions</h4>
                                <div className="BlockRentalDescription">
                                    <ul className="BlockRentList">
                                        <li className="BlockRentListInput">
                                            <span></span>
                                        </li>
                                        <li className="BlockRentListTwo"></li>
                                    </ul>
                                    <ul className="BlockMoreDes">
                                        <li></li>
                                        <li>
                                            <span></span>
                                        </li>
                                        <li>
                                            <span></span>
                                        </li>
                                    </ul>
                                </div>
                          </div>                        
                    </div>
                    </div>
                    <button width="168px" className="RentalCar">Rental car</button>

                </div>

            </div>
            
        </div>
    )
}

export default Modal