import React from 'react';
import classes from './Header.module.css'
import MySearch from '../UI/search/MySearch';
import Menu from '../UI/iconsSvg/menu.jsx'
import Layers from '../UI/iconsSvg/layers.jsx'
import MyButtonTools from '../UI/buttonTools/MyButtonTools';
import Split from '../UI/iconsSvg/split.jsx'
import Settings from '../UI/iconsSvg/settings.jsx'



const Header = () => {
    return (
        <div className={classes.Header}>
            <div className={classes.headerLeft}>
                <Menu className={classes.menu} />
                <MySearch className={classes.mySearch}/>
                <MyButtonTools className={classes.myButtonTools} />
                <Layers className={classes.layers}/>
            </div>
            <div className={classes.headerRight}>
                <Split className={classes.split}/>
                <Settings className={classes.settings}/>
            </div>
        </div>
    );
};

export default Header;