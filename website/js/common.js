;window.navbars = [
    { name: "首页", url: "/" },
    { name: "关于我们", url: "/about.html" },
    { name: "产品介绍", url: "/product.html" }
];


/**
 * 创建导航栏
 */
(function () {
    var navbarStr = '';
    var pathname = window.location.pathname;
    console.log('pathname', pathname)
    $.each(navbars, function (index, item) {
        var isActive = pathname === item.url ? 'active' : '';
        navbarStr += '<li class=" ' + isActive  + ' "><a href=" ' + item.url + ' ">' + item.name + '</a></li> ';
    })

    $("#bs-example-navbar-collapse-1 .navbar-right").html(navbarStr);
})();


