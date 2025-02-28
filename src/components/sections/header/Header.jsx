import Header_logo from '../../../assets/images/logo1.png';
import {ReactComponent as Header_menu} from '../../general/Svg/svg-menu.svg';
import {ReactComponent as Header_search} from '../../general/Svg/svg-search.svg';
import {ReactComponent as Header_User} from '../../general/Svg/svg-account.svg';
import {ReactComponent as Header_notifications} from '../../general/Svg/svg-notifications.svg';
import {Menu_Navigation} from '../../general/Menu-navigation/Menu-navigation';
import {handleClick} from '../../../index';

import {useState} from 'react';

function navNone(header_section_data){
    if(window.innerWidth > 650) return(<Menu_Navigation menu_Navigation_data = {header_section_data}/>);
    else return;
}

export function Header(props) {
    const {header_section_data} = props;
    const [isShown, setIsShown] = useState(false);
    const header_data_user = 11;
    
    return (
        <>
        <header className="header header-sticky section">
            <nav className="header-box container header-line">
                <div className="header-box__container">
                    <button className="header-box__container-logo svg-box button button-img menu-navigation__button" id="menu-navigation__button">
                        <Header_menu onClick={handleClick(setIsShown)}/>
                        <a href="/" className="">
                            <img src={Header_logo} alt="" className="" />
                        </a>
                    </button>
                    <div className="form-search">
                        <button className="svg-box button form-search__button">
                            <Header_search />
                            <form action="">
                                <input type="search" id="input-search" name="search" placeholder={header_section_data.header_input_text} className="form-search__input" />
                            </form>
                        </button>
                    </div>
                    <div className="header-box__container">
                        <a href="" className="svg-box button button-img">
                            <Header_notifications />
                            <div className="button-img__count">{header_data_user}</div>
                        </a>
                        <a href="/user/1" className="button button-img header-box__container-people svg-box">
                            <Header_User/>
                        </a>
                    </div>
                </div>
            </nav>
            {navNone(header_section_data)}
            {<> { isShown && (
                <Menu_Navigation menu_Navigation_data = {header_section_data}/>
            ) } </>}
        </header>
        <div className="header-bottom"></div>
        </>
    );
}