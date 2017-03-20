// ==UserScript==
// @name        Reliance Auto Login
// @namespace   Reliance
// @include     http://reliancebroadband.co.in/reliance/login.do
// @include     http://reliancebroadband.co.in/reliance/startportal_isg.do?CPURL=null
// @version     1
// @grant       none
// ==/UserScript==
document.getElementsByClassName("b")[0].value="Username here"; //Replace the Username string with your username
document.getElementsByClassName("b")[1].value="Password Here"; //Replace the password string with your password
document.getElementsByTagName("a")[5].click();
document.onload=function(){window.location.href="http://google.com"}; //Automatically logs in and redirects to google.com