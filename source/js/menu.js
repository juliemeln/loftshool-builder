 //// СТАТЬИ В БЛОГЕ
(function() {
'use strict';
$(window).scroll(function () {
var wScroll = $(window).scrollTop(),
 menu = $('.static .menu-blog'),
 sidebar = $('.static .menu-wrapper'),
 stickyStart = sidebar.offset().top,
 menuClone = sidebar.clone(),
 fixedSidebar = $('.fixed .left-col');

 console.log(stickyStart);
 console.log(stickyStart);
 console.log(menu);

 if (wScroll >= stickyStart) {

 //  menu.css({
 //  	top : wScroll - stickyStart + 'px'
 //  });

 if (!fixedSidebar.find('.menu-wrapper').length) {
 fixedSidebar.append(menuClone);
 menu.hide();
 }

 } else {
 fixedSidebar.find('.menu-wrapper').remove();
 menu.show();
 }
 });
 })();