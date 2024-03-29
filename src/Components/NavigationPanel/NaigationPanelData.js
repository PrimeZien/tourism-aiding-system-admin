import React from "react";
import Dashboard from "../../Assets/NavigationPanel/dashboard.png";
import Vendors from "../../Assets/NavigationPanel/vendors.png";
import Users from "../../Assets/NavigationPanel/users.png";
import Configurations from "../../Assets/NavigationPanel/configurations.png";
import Locations from "../../Assets/NavigationPanel/locations.png";

export const NavigationPanelData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <img src={Dashboard} alt="Dashboard Icon" className="nav-bar-icon"/>,
        subItems: []
    },
    {
        title: 'Locations',
        path: '/locations',
        icon: <img src={Locations} alt="Locations Icon" className="nav-bar-icon"/>,
        subItems: []
    },
    {
        title: 'Vendors',
        path: '/vendors',
        icon: <img src={Vendors} alt="Vendors Icon" className="nav-bar-icon"/>,
        subItems: []
    },
    {
        title: 'Users',
        path: '/users',
        icon: <img src={Users} alt="Users Icon" className="nav-bar-icon"/>,
        subItems: []
    },
    {
        title: 'Configurations',
        path: '/configurations',
        icon: <img src={Configurations} alt="Configuration Icon" className="nav-bar-icon"/>,
        subItems: [
            {title: 'Driver Fare',path: ''},
            {title: 'Vehicle Types',path: '/configurations/vehicle-types'},
            {title: 'Accommodation Types',path: ''},
            {title: 'Room Facilities',path: ''},
            {title: 'Bathroom Facilities',path: ''},
            {title: 'Provinces',path: ''},
            {title: 'Location activities',path: ''},
        ]
    },
]