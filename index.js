/**
javascript
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import {
//     Welcome,
//     Login,
//     Register,
//     InfoScreen,
//     InfoList,
//     ProductGridView,
//     Settings,
//     } from './Screens'
// import UITab from './navigation/UITab'
import App from './navigation/App'
let fakedProducts =[
    {
        productName:'Iphone3',
        year :2013
    },
    {
        productName:'Iphone5',
        year :2015
    },
    {
        productName:'Iphone4',
        year :2014
    },
    {
        productName:'Iphone6',
        year :2016
    }
]
/*AppRegistry.registerComponent(appName,
() => () => <Welcome 
                x = {5} y = {10}
                person = {{
                    name : 'Bui Quoc Van',
                    age : 20,
                    email : "vantbth123@gmail.com"
                }}
                products ={fakedProducts}
                />); // truyền hai đối tượng x,y dưới màn hình welcome 
*/
AppRegistry.registerComponent(appName,() => () => <App/>)