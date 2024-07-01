import { useState, } from "react";
import {Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "@/assets/logo.png";


type Props = {}

const Navbar = (props: Props) => {
const flexBetween = "flex items-center justify-between";

  return <nav>
<div>
className={'${flexBetween} fixed top-0 z-30 w-full py-6'}
>
    <div className={'${flexBetween} mx-auto w-5/6'}>
<div className={'${flexBetween} w-full gap-16'}>
<img alt="logo" src={logo}/>
</div>

    </div>

</div>
  </nav>;
   
  
};

export default Navbar