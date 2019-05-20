import React, {Component} from 'react';
import mainIcon from "../../images/icons/128x128/cat_slippers.png";


export default class Header extends Component {

    render() {
        return (
            <header className="ui container header_padded">
                <img className="ui middle aligned mini image" src={mainIcon}/>
                <span className="blue_cat">Кот</span><span className="red_cat">услуги</span>
            </header>
        )
    }
}