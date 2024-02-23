// import React, { useState } from 'react';
// import "./Sidebar.css"
// import { Link, useLocation } from 'react-router-dom';
// import { FiMenu } from 'react-icons/fi';
// import {IoHome} from 'react-icons/io5';
// import {RiUserSettingsLine} from 'react-icons/ri';
// import {MdOutlineMessage} from 'react-icons/md';
// import {IoIosAnalytics} from 'react-icons/io';

// const Sidebar = ({open,setOpen}) => {
//     const adminmenudata = [
//         {
//             id: 1,
//             url: '/barber-dashboard',
//             icon: <IoHome />,
//             name: "Dashboard"
//         },
//         {
//             id: 2,
//             url: '/barber-dashboard/salon',
//             icon: <RiUserSettingsLine />,
//             name: "Salon"
//         },
//         {
//             id: 3,
//             url: '/barber-dashboard/barber',
//             icon: < MdOutlineMessage />,
//             name: "Barbers"
//         },
//         {
//             id: 4,
//             url: '/barber-dashboard/customer',
//             icon: <IoIosAnalytics />,
//             name: "Customers"
//         }
//     ]

    

//     const location = useLocation();
    
//     const closeMenu = () => {
//         setOpen(!open)
//     }

//     const openMenu = () => {
//         setOpen(true)
//     }

//     const hidesidebar = open ? "sidebar" : "sidebar-hide"
//     // const menuname = open

//     const content = (
      
//         <div className="main-container">
//             <div className={hidesidebar}>
//                 { open === true ? <div>
//                     <h1>IQB Barber</h1>
//                     <div onClick={closeMenu} className='menu-container-icon'><FiMenu /></div>
//                 </div> : <div><div onClick={closeMenu} className='menu-container-icon'><FiMenu /></div></div>}
                

//                 <div className='sidebar-menu-content'>
//                     {adminmenudata?.map((menu) => (
//                         <Link to={menu.url} key={menu.id}>
//                             <div className={location.pathname === menu.url ? 'active' : 'navlink'}>
//                                 <div style={{fontSize:"1.8rem",marginLeft:"3px"}}>{menu.icon}</div>
//                                 {open && (
//                                     <div

//                                     >
//                                         {menu.name}
//                                     </div>
//                                 )}
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );

//     return content;
// };

// export default Sidebar;


import React, { useState } from 'react';
import "./Sidebar.css"
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import {IoHome} from 'react-icons/io5';
import {RiUserSettingsLine} from 'react-icons/ri';
import {MdOutlineMessage} from 'react-icons/md';
import {IoIosAnalytics} from 'react-icons/io';

const Sidebar = React.memo(({ open, setOpen }) => {
    const adminmenudata = [
        {
            id: 1,
            url: '/barber-dashboard',
            icon: <IoHome />,
            name: "Dashboard"
        },
        {
            id: 2,
            url: '/barber-dashboard/salon',
            icon: <RiUserSettingsLine />,
            name: "Salon"
        },
        {
            id: 3,
            url: '/barber-dashboard/barber',
            icon: <MdOutlineMessage />,
            name: "Barbers"
        },
        {
            id: 4,
            url: '/barber-dashboard/customer',
            icon: <IoIosAnalytics />,
            name: "Customers"
        }
    ];

    const location = useLocation();

    const closeMenu = () => {
        setOpen(!open);
    };

    const openMenu = () => {
        setOpen(true);
    };

    const hidesidebar = open ? "sidebar" : "sidebar-hide";

    const content = (
        <div className="main-container">
            <div className={hidesidebar}>
                {open === true ? (
                    <div>
                        <h1>IQB Barber</h1>
                        <div onClick={closeMenu} className='menu-container-icon'><FiMenu /></div>
                    </div>
                ) : (
                    <div><div onClick={closeMenu} className='menu-container-icon'><FiMenu /></div></div>
                )}

                <div className='sidebar-menu-content'>
                    {adminmenudata?.map((menu) => (
                        <Link to={menu.url} key={menu.id}>
                            <div className={location.pathname === menu.url ? 'active' : 'navlink'}>
                                <div style={{fontSize:"1.8rem",marginLeft:"3px"}}>{menu.icon}</div>
                                {open && (
                                    <div>
                                        {menu.name}
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );

    return content;
});

export default Sidebar;

