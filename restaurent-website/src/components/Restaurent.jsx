import { React } from "react"
import "./restaurentStyle.css"
import MenuApi from "./MenuApi"
import { useState } from "react"
import { MenuCard } from "./MenuCard"
import { Navbar } from "./Navbar"


const uniqueList = [...new Set(MenuApi.map((e) => {
    return e.category;
})),
"All"
]
console.log(uniqueList);

const Restaurent = () => {
    const [menuData, setMenuData] = useState(MenuApi);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {

        if (category === "All") {
            setMenuData(MenuApi);
            return;
        }
        const updatedList = MenuApi.filter((e) => {
            return e.category === category;    
        });
        setMenuData(updatedList);
    }
    
 return(
    <>
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard mData={menuData}/>
    </>
   ) 
}

export default Restaurent;