const cheerio = require("cheerio");
const _ = require("lodash");

let html = `
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
	
<link rel="icon" sizes="192x192" href="icon.png">

<title>Product Personalizer</title>
<script src="https://cdn.shopify.com/s/assets/external/app.js"></script>
<script>


function $_GET(q,s) {
    s = (s) ? s : window.location.search;
    var re = new RegExp('&amp;'+q+'=([^&amp;]*)','i');
    return (s=s.replace(/^\?/,'&amp;').match(re)) ?s=s[1] :s='';
}
var value = $_GET('install');
var upgrade = $_GET('upgrade');
var tier = $_GET('tier');
var login = $_GET('login');
if (window.top !== window.self || value == 'true' || upgrade == 'true' || login == 'true') {
    ShopifyApp.init({
      apiKey: '6c3fa8aea073718ce069cf82939fc5a8',
      shopOrigin: 'https://1sttheworld.myshopify.com',
    });
}
</script>




    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/sb-admin.css" rel="stylesheet">
	   <link href="css/dd.css" rel="stylesheet">
	 <!-- Custom CSS -->


    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	 <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- jQuery -->
   <script src="js/jquery-2.1.4.min.js"></script>
    <!-- Bootstrap Core JavaScript -->
   <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <!-- Morris Charts JavaScript -->
			<script src="js/jscolor.min.js"></script>
	<script src="js/bootstrap-colorpicker.min.js"></script>
	 <link href="css/bootstrap-colorpicker.min.css" rel="stylesheet">
	 
	<script src="js/jquery-ui.js"></script>
	
   <script src="js/jquery.ui.rotatable.js"></script>
	
	<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-77405955-3', 'auto');
	ga('send', 'pageview');

	</script>
	<style>
	
</style>

</head>

<body onload="ShopifyApp.Bar.loadingOff();">
<style>
canvas{z-index: 999;
position: absolute;
top: 0px;background:transparent;left:0px;}
.area {
    z-index: 999999;
}

.nav > li {
    float: left;cursor: pointer;
}
a,a:hover{color:#212b36;}
.form-control {
    border: 1px solid #c4cdd5;
}

 .form-control:focus{
    border: 1px solid #5c6ac4;
    -webkit-box-shadow: 0 0 0 1px #5c6ac4;
    box-shadow: 0 0 0 1px #5c6ac4;
}
body {
    background-color: #f4f6f8;
}
.btn-default,.btn-default:hover{border-color:green;}
@font-face {
					font-family: 'Arial';
					src: url('font/Arial.ttf')  format('truetype');
				}@font-face {
					font-family: 'CurlzMT';
					src: url('font/CurlzMT.ttf')  format('truetype');
				}@font-face {
					font-family: 'OpenSans-Bold';
					src: url('font/OpenSans-Bold.ttf')  format('truetype');
				}@font-face {
					font-family: 'monogram1';
					src: url('monogram/monogram1.ttf')  format('truetype');
				}@font-face {
					font-family: 'Blue-ocean';
					src: url('font/1sttheworld.myshopify.com/Blue-ocean.ttf')   format('truetype');
				}@font-face {
					font-family: 'Svn-trebuchets';
					src: url('font/1sttheworld.myshopify.com/Svn-trebuchets.ttf')   format('truetype');
				}@font-face {
					font-family: 'Aoncc-';
					src: url('font/1sttheworld.myshopify.com/Aoncc-.ttf')   format('truetype');
				}@font-face {
					font-family: 'Celtg-';
					src: url('font/1sttheworld.myshopify.com/Celtg-.ttf')   format('truetype');
				}@font-face {
					font-family: 'Oldlondonalternate';
					src: url('font/1sttheworld.myshopify.com/Oldlondonalternate.ttf')   format('truetype');
				}@font-face {
					font-family: 'Oldlondon';
					src: url('font/1sttheworld.myshopify.com/Oldlondon.ttf')   format('truetype');
				}@font-face {
					font-family: 'Ifc-insane-rodeo';
					src: url('font/1sttheworld.myshopify.com/Ifc-insane-rodeo.ttf')   format('truetype');
				}@font-face {
					font-family: 'Irishuncialfabeta-bold';
					src: url('font/1sttheworld.myshopify.com/Irishuncialfabeta-bold.ttf')   format('truetype');
				}@font-face {
					font-family: 'Caviardreams-italic';
					src: url('font/1sttheworld.myshopify.com/Caviardreams-italic.ttf')   format('truetype');
				}@font-face {
					font-family: 'Signatrue-2';
					src: url('font/1sttheworld.myshopify.com/Signatrue-2.ttf')   format('truetype');
				}@font-face {
					font-family: 'American-captain';
					src: url('font/1sttheworld.myshopify.com/American-captain.ttf')   format('truetype');
				}@font-face {
					font-family: 'Carnevalee-freakshow';
					src: url('font/1sttheworld.myshopify.com/Carnevalee-freakshow.ttf')   format('truetype');
				}@font-face {
					font-family: 'Celtic-gaelige';
					src: url('font/1sttheworld.myshopify.com/Celtic-gaelige.ttf')   format('truetype');
				}@font-face {
					font-family: 'Caviardreams-bold';
					src: url('font/1sttheworld.myshopify.com/Caviardreams-bold.ttf')   format('truetype');
				}@font-face {
					font-family: 'Svn-franko';
					src: url('font/1sttheworld.myshopify.com/Svn-franko.ttf')   format('truetype');
				}@font-face {
					font-family: 'Akadora';
					src: url('font/1sttheworld.myshopify.com/Akadora.ttf')   format('truetype');
				}@font-face {
					font-family: 'Caviardreams-bolditalic';
					src: url('font/1sttheworld.myshopify.com/Caviardreams-bolditalic.ttf')   format('truetype');
				}@font-face {
					font-family: 'Afterglow-regular';
					src: url('font/1sttheworld.myshopify.com/Afterglow-regular.ttf')   format('truetype');
				}@font-face {
					font-family: 'Viking-hell';
					src: url('font/1sttheworld.myshopify.com/Viking-hell.ttf')   format('truetype');
				}@font-face {
					font-family: 'Shadeerah-demo';
					src: url('font/1sttheworld.myshopify.com/Shadeerah-demo.ttf')   format('truetype');
				}@font-face {
					font-family: 'Celtichd';
					src: url('font/1sttheworld.myshopify.com/Celtichd.ttf')   format('truetype');
				}@font-face {
					font-family: 'Sports-world-regular';
					src: url('font/1sttheworld.myshopify.com/Sports-world-regular.ttf')   format('truetype');
				}@font-face {
					font-family: 'Big-caslon-medium';
					src: url('font/1sttheworld.myshopify.com/Big-caslon-medium.ttf')   format('truetype');
				}@font-face {
					font-family: 'Caviardreams';
					src: url('font/1sttheworld.myshopify.com/Caviardreams.ttf')   format('truetype');
				}@font-face {
					font-family: 'Svn-bira';
					src: url('font/1sttheworld.myshopify.com/Svn-bira.ttf')   format('truetype');
				}@font-face {
					font-family: 'Svn-internation';
					src: url('font/1sttheworld.myshopify.com/Svn-internation.ttf')   format('truetype');
				}@font-face {
					font-family: 'Vogue';
					src: url('font/1sttheworld.myshopify.com/Vogue.ttf')   format('truetype');
				}@font-face {
					font-family: 'Copperplate';
					src: url('font/1sttheworld.myshopify.com/Copperplate.ttf')   format('truetype');
				}@font-face {
					font-family: 'Unifrakturmaguntia16';
					src: url('font/1sttheworld.myshopify.com/Unifrakturmaguntia16.ttf')   format('truetype');
				}@font-face {
					font-family: 'Signatrue';
					src: url('font/1sttheworld.myshopify.com/Signatrue.ttf')   format('truetype');
				}@font-face {
					font-family: 'Keepcalm-medium';
					src: url('font/1sttheworld.myshopify.com/Keepcalm-medium.ttf')   format('truetype');
				}@font-face {
					font-family: 'Irishpenny';
					src: url('font/1sttheworld.myshopify.com/Irishpenny.ttf')   format('truetype');
				}@font-face {
					font-family: 'Ambar-pearl-personal-use';
					src: url('font/1sttheworld.myshopify.com/Ambar-pearl-personal-use.ttf')   format('truetype');
				}@font-face {
					font-family: 'Svn-bear';
					src: url('font/1sttheworld.myshopify.com/Svn-bear.ttf')   format('truetype');
				}@font-face {
					font-family: 'Agencyfb';
					src: url('font/1sttheworld.myshopify.com/Agencyfb.ttf')   format('truetype');
				}@font-face {
					font-family: 'Hollywoodhills';
					src: url('font/1sttheworld.myshopify.com/Hollywoodhills.ttf')   format('truetype');
				}@font-face {
					font-family: 'Arial-black';
					src: url('font/1sttheworld.myshopify.com/Arial-black.ttf')   format('truetype');
				}@font-face {
					font-family: 'Svn-aptima-bold-1';
					src: url('font/1sttheworld.myshopify.com/Svn-aptima-bold-1.ttf')   format('truetype');
				}@font-face {
					font-family: 'Pirate-ship';
					src: url('font/1sttheworld.myshopify.com/Pirate-ship.ttf')   format('truetype');
				}@font-face {
					font-family: 'Myriadpro-regular';
					src: url('font/1sttheworld.myshopify.com/Myriadpro-regular.ttf')   format('truetype');
				}@font-face {
					font-family: 'Pictorial-signature';
					src: url('font/1sttheworld.myshopify.com/Pictorial-signature.ttf')   format('truetype');
				}@font-face {
					font-family: 'Mermaid-swash-caps';
					src: url('font/1sttheworld.myshopify.com/Mermaid-swash-caps.ttf')   format('truetype');
				}@font-face {
					font-family: 'Oceanicdrift3d';
					src: url('font/1sttheworld.myshopify.com/Oceanicdrift3d.ttf')   format('truetype');
				}@font-face {
					font-family: 'Signatrue-8';
					src: url('font/1sttheworld.myshopify.com/Signatrue-8.ttf')   format('truetype');
				}@font-face {
					font-family: 'Bebasneue-regular';
					src: url('font/1sttheworld.myshopify.com/Bebasneue-regular.ttf')   format('truetype');
				}@font-face {
					font-family: 'Icielamerigraf';
					src: url('font/1sttheworld.myshopify.com/Icielamerigraf.ttf')   format('truetype');
				}@font-face {
					font-family: 'Mermaid1001';
					src: url('font/1sttheworld.myshopify.com/Mermaid1001.ttf')   format('truetype');
				}
<div style="font-family:Arial;opacity:0;height:0;width:0;">.</div><div style="font-family:CurlzMT;opacity:0;height:0;width:0;">.</div><div style="font-family:OpenSans-Bold;opacity:0;height:0;width:0;">.</div><div style="font-family:monogram1;opacity:0;height:0;width:0;">.</div><div style="font-family:Blue-ocean;opacity:0;height:0;width:0;">.</div><div style="font-family:Svn-trebuchets;opacity:0;height:0;width:0;">.</div><div style="font-family:Aoncc-;opacity:0;height:0;width:0;">.</div><div style="font-family:Celtg-;opacity:0;height:0;width:0;">.</div><div style="font-family:Oldlondonalternate;opacity:0;height:0;width:0;">.</div><div style="font-family:Oldlondon;opacity:0;height:0;width:0;">.</div><div style="font-family:Ifc-insane-rodeo;opacity:0;height:0;width:0;">.</div><div style="font-family:Irishuncialfabeta-bold;opacity:0;height:0;width:0;">.</div><div style="font-family:Caviardreams-italic;opacity:0;height:0;width:0;">.</div><div style="font-family:Signatrue-2;opacity:0;height:0;width:0;">.</div><div style="font-family:American-captain;opacity:0;height:0;width:0;">.</div><div style="font-family:Carnevalee-freakshow;opacity:0;height:0;width:0;">.</div><div style="font-family:Celtic-gaelige;opacity:0;height:0;width:0;">.</div><div style="font-family:Caviardreams-bold;opacity:0;height:0;width:0;">.</div><div style="font-family:Svn-franko;opacity:0;height:0;width:0;">.</div><div style="font-family:Akadora;opacity:0;height:0;width:0;">.</div><div style="font-family:Caviardreams-bolditalic;opacity:0;height:0;width:0;">.</div><div style="font-family:Afterglow-regular;opacity:0;height:0;width:0;">.</div><div style="font-family:Viking-hell;opacity:0;height:0;width:0;">.</div><div style="font-family:Shadeerah-demo;opacity:0;height:0;width:0;">.</div><div style="font-family:Celtichd;opacity:0;height:0;width:0;">.</div><div style="font-family:Sports-world-regular;opacity:0;height:0;width:0;">.</div><div style="font-family:Big-caslon-medium;opacity:0;height:0;width:0;">.</div><div style="font-family:Caviardreams;opacity:0;height:0;width:0;">.</div><div style="font-family:Svn-bira;opacity:0;height:0;width:0;">.</div><div style="font-family:Svn-internation;opacity:0;height:0;width:0;">.</div><div style="font-family:Vogue;opacity:0;height:0;width:0;">.</div><div style="font-family:Copperplate;opacity:0;height:0;width:0;">.</div><div style="font-family:Unifrakturmaguntia16;opacity:0;height:0;width:0;">.</div><div style="font-family:Signatrue;opacity:0;height:0;width:0;">.</div><div style="font-family:Keepcalm-medium;opacity:0;height:0;width:0;">.</div><div style="font-family:Irishpenny;opacity:0;height:0;width:0;">.</div><div style="font-family:Ambar-pearl-personal-use;opacity:0;height:0;width:0;">.</div><div style="font-family:Svn-bear;opacity:0;height:0;width:0;">.</div><div style="font-family:Agencyfb;opacity:0;height:0;width:0;">.</div><div style="font-family:Hollywoodhills;opacity:0;height:0;width:0;">.</div><div style="font-family:Arial-black;opacity:0;height:0;width:0;">.</div><div style="font-family:Svn-aptima-bold-1;opacity:0;height:0;width:0;">.</div><div style="font-family:Pirate-ship;opacity:0;height:0;width:0;">.</div><div style="font-family:Myriadpro-regular;opacity:0;height:0;width:0;">.</div><div style="font-family:Pictorial-signature;opacity:0;height:0;width:0;">.</div><div style="font-family:Mermaid-swash-caps;opacity:0;height:0;width:0;">.</div><div style="font-family:Oceanicdrift3d;opacity:0;height:0;width:0;">.</div><div style="font-family:Signatrue-8;opacity:0;height:0;width:0;">.</div><div style="font-family:Bebasneue-regular;opacity:0;height:0;width:0;">.</div><div style="font-family:Icielamerigraf;opacity:0;height:0;width:0;">.</div><div style="font-family:Mermaid1001;opacity:0;height:0;width:0;">.</div>
</style>





<div class="navbar navbar-fixed-top">
<div class="navbar-inner">
<div class="">

<ul class="nav " style="padding: 0px 0px;">
<li class="">

	<a onclick="clickon('products.php')"  ><i class="fa fa-cubes"></i><span class="mlink" > Products</span></a>
        <div class="menu-dropdown"  >                          
          <div class="dropdown">
            <span onclick="clickon('products.php')">Configure Product</span>
            <span onclick="clickon('personalized.php')">Configured List</span>                           
        </div>
      </div>

	</li>

	<li class="">
	<a onclick="clickon('font.php')" ><i class="fa fa-font"></i><span class="mlink" > Fonts</span></a>
	</li>
	<li class="">
	<a onclick="clickon('image.php')" ><i class="fa fa-image"></i><span class="mlink" > Images</span></a>
	</li>
	<li class="">
	<a onclick="clickon('colors.php')" ><i class="fa fa-paint-brush"></i><span class="mlink" > Colors</span></a>
	</li>
	<li class="">
	<a onclick="clickon('dropdown.php')" ><i class="fa fa-th-list"></i><span class="mlink" > Options</span></span></a>
	</li>
	<li class="">
	<a onclick="clickon('settings.php')" ><i class="fa fa-gears"></i><span class="mlink" > Settings</span></a>

    <div class="menu-dropdown"  >                          
          <div class="dropdown">
            <span onclick="clickon('settings.php')">General Settings</span>
            <span onclick="clickon('subscription.php')">Subscription</span>
            <span onclick="clickon('liquid-installation.php')">Installation</span>     
            <span class="pplr-import" style="display:none" onclick="importproduct(event)">Import</span>                         

        </div>
      </div>

	</li>
	<li class="">
	<!---
	<a href="demo-product.php" >Demo Configuration</a>

-->
</li>
	<li class="">
	
		<a href="//productpersonalizer.com/docs/?ref=admin" target="_blank" ><i class="fa fa-question-circle"></i><span class="mlink" > Help</span></a>
		</li>

</ul>
</div>
</div>
</div>

<style>

.menu-dropdown{
display: none;
position: absolute;
top: 32px;
left: 50%;
transform: translate(-50%,0%);
text-align: center;
min-width: 200px;
}

.menu-dropdown:before {
    content: '◆';
    position: absolute;
    font-size: 40px;
    line-height: 24px;
    top: -5px;
    color: #fff;
    z-index: 1;
    text-shadow: 0px -2px 1px #ddd;
    height: 18px;
    overflow: hidden;
    left: calc(50% - 14px);
}
.menu-dropdown .dropdown{
position: relative;
border-radius: 3px;
top: 10px;
box-shadow: 0px 0px 10px #ccc;
padding: 5px 0px;
background: #fff;
}

.menu-dropdown .dropdown span {
    display: block;
    text-align: center;
    font-size: 1.4rem;
    white-space: nowrap;
    text-align: center;
    padding: 0px 10px;
    line-height: 40px;
    border-left: 3px solid #fff;
    cursor: pointer;
}

.menu-dropdown .dropdown span:hover {
    background: #F9FAFB;
    border-left: 3px solid ;
}

.nav li:hover .menu-dropdown{display:block;}
.nav > li a{
    position: relative;cursor: pointer;
}

a{cursor:pointer;}
.navbar-inner .nav{
text-align: center;
margin: 0 auto;}
.nav > li {
    display: inline-block;float:none;
}
.mlink{}
.vertical-menu {
    position: absolute;
    width: 180px;
    height: 100%;
    top: 0px;
    z-index: 10;
    padding-top: 10px;
    background: #1F262D;
    -webkit-box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.08);
    box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.08);
	display:none;
}

.vertical-menu a {
    background-color: #1F262D; /* Grey background color */
    color: #fff; /* Black text color */
    display: block; /* Make the links appear below each other */
    padding: 14px 15px; /* Add some padding */
    text-decoration: none; /* Remove underline from links */
    opacity: 0.6;
}

.vertical-menu a:hover {
    opacity: 1;
}

.vertical-menu a.current {
    background-color: #27a9e3; /* Add a green color to the "active/current" link */
    color: white;
    opacity: 1;
}

#wrapper {
    margin-left: 0px;height: 100%;position: relative;

padding-bottom: 0px;
}

.custom-logo {
    max-height: 100px;
    border-radius: 5px;
    max-width: 100px;
    margin: 0px 30px;
    box-sizing: border-box;
}

.navbar .navbar-inner {
background-image: none;
box-shadow: none;
background-color: #f4f6f8;
border-bottom: 1px solid #dfe3e8;
color: #000;
}

.navbar-fixed-bottom, .navbar-fixed-top {
    position: fixed;
	width:100%;
    right: 0;
    left: 0;
    z-index: 999999999;
}
.site-branding a{opacity: 1;}

  .ui-icon-arrowthick-2-n-s{
    margin-left: -15px;
  }

html, body {
    height: auto;
}
body {

    margin-top: 30px;

}
.vertical-menu .fa {
    width: 22px;
}
.navbar .nav > li > a {
    color: #212b36;
	padding: 5px 20px 5px;
}

.nav .open>a, .nav .open>a:focus, .nav .open>a:hover , .navbar .nav > li > a:hover, .navbar .nav > li > a.current {
opacity: 1;
border-bottom: 2px solid;
}

.navbar {
    min-height: 30px;
    margin-bottom: 0px;
}

.table-bordered > tbody > tr > td, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > td, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > thead > tr > th {

    border: 0px solid #ddd;

}
.form-group {
    margin-bottom: 5px !important;
    margin-right: 10px;
    float: left;
}

.checkbox, .radio {
    position: relative;
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
}

#page-wrapper {
    padding: 0px;
	background:#f4f6f8;
}
.blockc {
    border: 1px solid #eee;
    border-radius: 0px;
    margin: 20px 0px;
    float: left;
    width: 100%;
	background:#fff;
	position: relative;
}
.canvas {
    position: absolute;
    left: 0px;
    top: 0px;
	margin-top: 0px;
}
.progress {
    border-radius: 0px;
    height: 5px;
}

.blockc h5, .blockc label {
    background: #fff;
    border-bottom: 2px solid #eee;
	min-height:80px;
}
@media only screen and (max-width: 1075px) {
	.navbar .nav > li > a {
    padding: 5px 9px 5px;
}
}
@media only screen and (min-width: 1921px) {
	.container-fluid{max-width:1900px}
	body {
		font-size: 16px;
	}

	.navbar .nav > li > a {
		padding: 5px 25px 5px;
	}
	body {
		margin-top: 35px;
	}
	.form-group {
		padding: 5px 0px;
	}
}

@media only screen and (max-width: 1920px) {
	.container-fluid{max-width:1400px}
	body {
		margin-top: 35px;
	}
}
@media only screen and (max-width: 954px) {
	.navbar-inner .nav {
		text-align: center;
	}
	body {
		margin-top: 70px;
	}
}

</style>

<div class="vertical-menu">

				<link rel="stylesheet" href="css/fontawesome-stars.css">
<div class="stars stars-example-fontawesome" style="float: left;width: 100%;text-align: center;">
	                <span class="title" style="color: #fff;padding: 20px;float: left;width: 100%;text-align: center;">How are we doing?</span>
                <select id="example-fontawesome" name="rating" autocomplete="off">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5" selected="">5</option>
                </select>
 </div>
 </div>
<style type="text/css">
	.br-theme-fontawesome-stars .br-widget {

    height: 28px;

white-space: nowrap;

padding: 0 23px;

float: left;

width: 100%;

text-align: center;

}
.br-theme-fontawesome-stars .br-widget a {

    float: left;
    padding: 3px;
    display: inline-block;
    opacity: 1;

}
.vertical-menu a {
    cursor: pointer;

}

.s_per{max-width: 140px;}
.personalizebutton input{max-width: 140px;}

</style>

<div id="contactModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" style="max-width: 600px;">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h3 class="modal-title">Thanks for your honesty</h3>
                    </div>
                    <div class="modal-body">
                        <div class="containter">
                            <div class="row">
                                <form  id="contactForm1" class="form-horizontal" name="commentform" method="post" action="send_form_email.php" style="padding: 0px 100px;">
                                    <div class="" style="width: 100%;">
                                    	<h4>What can we do to improve?</h4>
                                        <div  style="width: 100%;">
                                            <label for="InputEmail" class="control-label" style="font-weight: normal;padding: 20px 0px 5px;">Email Address (if you want us to reply to you)</label>
                                            <div class="">
                                                <input style="width: 100%;" type="email" class="form-control" id="email" name="email" value="vuminhtien0909@gmail.com"  required  >
                                            </div>
                                        </div>
                                        <div  style="width: 100%;">
                                            <label for="InputMessage" class="control-label" style="font-weight: normal;padding: 20px 0px 5px;">Message</label>
                                            <div class="">
                                                <textarea  style="width: 100%;" name="comments" id="comments" class="form-control" rows="5" required></textarea>
                                            </div>
                                        </div>
                                        <div style="padding: 10px">
                                        <input type="submit" name="submit" id="submit" value="Submit" class="btn btn-info ">
                                    </div>
                                    </div>
                                </form>


                            </div>

                        </div>
                    </div><!-- End of Modal body -->
                </div><!-- End of Modal content -->
            </div><!-- End of Modal dialog -->
        </div><!-- End of Modal -->


<script src="js/jquery.barrating.js"></script>
<script type="text/javascript">

function clickon(k){
window.location  = k+'?shop_r=1sttheworld.myshopify.com';
ShopifyApp.Bar.loadingOn();
}
	$(function() {
    function ratingEnable() {
        $('#example-1to10').barrating('show', {
            theme: 'bars-1to10'
        });

        $('#example-movie').barrating('show', {
            theme: 'bars-movie'
        });

        $('#example-movie').barrating('set', 'Mediocre');

        $('#example-square').barrating('show', {
            theme: 'bars-square',
            showValues: true,
            showSelectedRating: false
        });

        $('#example-pill').barrating('show', {
            theme: 'bars-pill',
            initialRating: 'A',
            showValues: true,
            showSelectedRating: false,
            allowEmpty: true,
            emptyValue: '-- no rating selected --',
            onSelect: function(value, text) {
                alert('Selected rating: ' + value);
            }
        });

        $('#example-reversed').barrating('show', {
            theme: 'bars-reversed',
            showSelectedRating: true,
            reverse: true
        });

        $('#example-horizontal').barrating('show', {
            theme: 'bars-horizontal',
            reverse: true,
            hoverState: false
        });

        $('#example-fontawesome').barrating({
            theme: 'fontawesome-stars',
            showSelectedRating: false,
			  onSelect: function(value, text, event) {
			    if (typeof(event) !== 'undefined') {

					console.log(value);
					if(value>3){

						window.open('https://apps.shopify.com/product-personalizer?reveal_new_review=true&ref=saifullah-bin-ashraf', "_blank");
					}
					else{

						$("#contactModal").modal();
					}

			    } else {

			    }
			  }
        });

        $('#example-css').barrating({
            theme: 'css-stars',
            showSelectedRating: false
        });

        $('#example-bootstrap').barrating({
            theme: 'bootstrap-stars',
            showSelectedRating: false
        });

        var currentRating = $('#example-fontawesome-o').data('current-rating');

        $('.stars-example-fontawesome-o .current-rating')
            .find('span')
            .html(currentRating);

        $('.stars-example-fontawesome-o .clear-rating').on('click', function(event) {
            event.preventDefault();

            $('#example-fontawesome-o')
                .barrating('clear');
        });

        $('#example-fontawesome-o').barrating({
            theme: 'fontawesome-stars-o',
            showSelectedRating: false,
            initialRating: currentRating,
            onSelect: function(value, text) {
                if (!value) {
                    $('#example-fontawesome-o')
                        .barrating('clear');
                } else {
                    $('.stars-example-fontawesome-o .current-rating')
                        .addClass('hidden');

                    $('.stars-example-fontawesome-o .your-rating')
                        .removeClass('hidden')
                        .find('span')
                        .html(value);
                }
            },
            onClear: function(value, text) {
                $('.stars-example-fontawesome-o')
                    .find('.current-rating')
                    .removeClass('hidden')
                    .end()
                    .find('.your-rating')
                    .addClass('hidden');
            }
        });
    }

    function ratingDisable() {
        $('select').barrating('destroy');
    }

    $('.rating-enable').click(function(event) {
        event.preventDefault();

        ratingEnable();

        $(this).addClass('deactivated');
        $('.rating-disable').removeClass('deactivated');
    });

    $('.rating-disable').click(function(event) {
        event.preventDefault();

        ratingDisable();

        $(this).addClass('deactivated');
        $('.rating-enable').removeClass('deactivated');
    });

    ratingEnable();
});


function submitForm(){

    var email = $("#email").val();
    var comments = $("#comments").val();
 
    $.ajax({
        type: "POST",
        url: "send_form_email.php",
        data: "email=" + email + "&comments=" + comments,
        success : function(text){
            if (text == "true"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $("#contactModal").modal('hide');
}


	$("#contactForm1").on("submit", function (event) {
    if (event.isDefaultPrevented()) {

    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

    function importproduct(e){
        e.preventDefault();
        $("#myModal66").modal();
    }
if (window.top == window.self) {
    $('.pplr-import').show();
}

</script>

<!-- Modal -->
<div id="myModal66" class="modal fade" role="dialog">
<div class="modal-dialog">

<!-- Modal content-->
<div class="modal-content" style="float: left;">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal">&times;</button>
<h4 class="modal-title">Import Configuration from other store</h4>
</div>
<div class="modal-body" style="float: left;">
<div>
        <form action="ajaximport.php" method="post" role="form" class="" id="import" style="padding-top: 20px;">   
        <div class="" style="float: left;">


        <input id="count00" type="hidden" required value="0" placeholder="0" min="0" class="form-control " name="count" />

        <div class="form-group  input-text" style="text-align: center;">
        <input type="hidden" name="store" value="1sttheworld.myshopify.com" />
        <div class="form-group">
            <label class="col-md-12 control-label" >Store To Copy</label> 
            <div class="col-md-12 inputGroupContainer">
                <div class="input-group">
              <input type="text" name="store2" placeholder="Store URL" value="" />
          </div>
         </div>
     </div>

        <div class="form-group">
            <label class="col-md-12 control-label" >Password</label> 
            <div class="col-md-12 inputGroupContainer">
                <div class="input-group">
                  <input type="password" name="password" value="" />
              </div>
          </div>
        </div>

                    <div class="checkbox " style="margin-bottom: 20px;float: left;width: 100%;">
        <label>
        <input name="overwrite" type="checkbox" value="1">
        Overwrite existing configuration?
        </label>
        </div>


        <input type="submit" name="colorlist" class="btn btn-success" value="Import" style="width: 200px;margin: 0 auto;float: none;" />
        </div>
        <div style="width: 100%;float: left;">
            <p class="upgrade" style="float: left;width:100%;background: green;padding: 10px;text-align: center;display: none;"></p>
        </div>
        <div style="width: 100%;float: left;max-height: 200px;overflow-y: auto;margin: 20px 0px;" class="successed">
        </div>

        </div>
        </form>
    </div>

</div>
</div>

</div>
</div>

<script>
    function recursively_ajax5()
{
    currentRequest = $.ajax({
       type: "POST",
       url: "ajaximport.php",
       dataType:'html', 
       data:$("#import").serialize(),

       beforeSend : function()    {        
        },
       success: function(data1)
       {
        console.log(data1);
        var data= JSON.parse(data1);


        if(data==2){

            jQuery(".upgrade").html('Please Upgrade your current Subscription <a href="subscription.php" target="_blank" >from HERE </a>');
            jQuery(".upgrade").show(1000);
            return;
        }

        if(data[0]==1){
            if(data[1] !== ''){jQuery('.successed').append(data[1]+" successfully configured</br>");}
                var percentComplete = data[0] * 100;
                jQuery(".progress").width(percentComplete + "%");
                $(".canvas").remove();
                jQuery(".upgrade").html('Completed').css("background", 'greeen'); 
                jQuery(".upgrade").slideDown(1000);


        }
        else{
            if(parseFloat(data[0])>0 ){
                var page = data[2];
                var newcount = parseInt($("#count00").val())+1;
                $("#count00").val(newcount);


                if(data[1] !== ''){jQuery('.successed').append((newcount-1)+' - '+data[1]+" successfully configured</br>");}

                var percentComplete = data[0] * 100;
                jQuery(".progress").width(percentComplete + "%");
                setTimeout(function() {
                                recursively_ajax5();
                        }, 1000);
                }
                else{
                    jQuery(".upgrade").html('Cannot Be Completed').css("background", 'red'); 
                    $(".canvas").remove();
                    jQuery(".upgrade").slideDown(1000);
                }
            }

            jQuery(".successed").scrollTop(jQuery(".successed")[0].scrollHeight);

         }
       
       });
       
}


  $("#import").submit(function(event){
   event.preventDefault();
    $(".canvas").remove();
    $(".upgrade").hide();
    $(".successed").html('');

    $("#count00").val('0');

   jQuery(".upgrade").before('<span class="canvas"><div class="progress" style="width: 0%;"></div></div>');
    recursively_ajax5();
  }
 );



</script>

<div id="wrapper">

        <div id="page-wrapper">

            <div class="container-fluid">
			
<script type="text/javascript">
	var drop = {"Style":{"White":["0","1"],"Black":["0","1"]},"Position":{"Top":["0","1"],"Middle":["0","1"],"Bottom":["0","1"],"Classic":["0","1"]},"Vertical":{"Vertical":["0","1"],"Horizontal":["0","1"]},"Text Single":{"Top":["0","1"],"Middle":["0","1"],"Bottom":["0","1"]},"Text Box":{"Line 1":["0","1"],"Line 2":["0","1"],"Line 3":["0","1"]},"Box Text":{"Line 1":["0","1"],"Line 2":["0","1"],"Line 3":["0","1"]},"Couple Text":{"Text 1":["0","1"],"Text 2":["0","1"]},"Color":{"White":["0","1"],"Black":["0","1"]},"Colors":{"Black":["0","1"],"White":["0","1"]},"Red":{"Black Sole":["0","1"],"White Sole":["0","1"]},"Black":{"Black":["0","1"],"White":["0","1"]}};
	var conditions_json = [["2","checked","show","3"]];
	var grpimg = {"nz":{"text":["7.jpg","","","0","","1","7.jpg",""],"nz 6":["nz-6.png","","","0","","1","7.jpg",""]},"au":{"au 6":["au-6.png","","","0","","1","mockup.jpg",""]},"netherlands":{"netherlands 6":["netherlands-6.png","","","0","","1","au-6.png",""]},"hawaii":{"hawaii":["hawaii.png","","","0","","1","au-6.png",""]},"moose":{"moose":["moose.png","","","0","","1","au-6.png",""]}};
	var grpcolor = {"Colors":{"White":["#ffffff",1,"1.png",0,0,0],"Yellow":["#e3cb1a",1,"1.png",0,0,0],"Cyan":["#1ae3bf",1,"1.png",0,0,0],"Green":["#42e31a",1,"1.png",0,0,0],"Blue":["#03e0e0",1,"1.png",0,0,0]},"Fonts":{"Yellow":["#ffee4c",1,"1.png",0,0,0],"White":["#ffffff",1,"1.png",0,0,0],"Purple":["#bf37ff",1,"1.png",0,0,0],"Blue":["#0087ff",1,"1.png",0,0,0]},"Choose A Color":{"Black":["#000000",1,"1.png",0,0,0],"White":["#ffffff",1,"1.png",0,0,0]}};
</script>


<link href="manage.css" rel="stylesheet">

<div class="row">
<h4 style="text-align: center;padding-top: 5px;margin-bottom: 5px;"> <a style="color: yellowgreen;" target="_blank" href="http://1sttheworld.myshopify.com/admin/products/3691134976080" ><i class="fa fa-edit"></i></a> <a target="_blank" href="http://1sttheworld.myshopify.com/products/new-zealand-wooden-wall-clock-custom" >New Zealand Wooden Wall Clock Custom Bn10 <i style="color: blue;" class="fa fa-external-link"></i></a>  | <a href="manage.php?id=3691134255184"> Next ></a></h4>



<script>
var shopify = '1sttheworld.myshopify.com';
var pricechange = '32042911236176';
var fontgroup_json = {"Your-Text-Here":{"Hollywoodhills":["Hollywoodhills.ttf",1,0,1]},"Text-Here":{"Bebasneue regular":["Bebasneue-regular.ttf",1,0,1],"Caviardreams bold":["Caviardreams-bold.ttf",1,0,1],"Caviardreams bolditalic":["Caviardreams-bolditalic.ttf",1,0,1],"Caviardreams italic":["Caviardreams-italic.ttf",1,0,1],"Hollywoodhills":["Hollywoodhills.ttf",1,0,1],"Keepcalm medium":["Keepcalm-medium.ttf",1,0,1],"Mermaid swash caps":["Mermaid-swash-caps.ttf",1,0,1],"Mermaid1001":["Mermaid1001.ttf",1,0,1],"Oldlondon":["Oldlondon.ttf",1,0,1],"Oldlondonalternate":["Oldlondonalternate.ttf",1,0,1],"Shadeerah demo":["Shadeerah-demo.ttf",1,0,1],"Vogue":["Vogue.ttf",1,0,1],"Afterglow regular":["Afterglow-regular.ttf",1,0,1]},"Fonts":{"Mermaid swash caps":["Mermaid-swash-caps.ttf",1,0,1],"Caviardreams bold":["Caviardreams-bold.ttf",1,0,1],"Oldlondonalternate":["Oldlondonalternate.ttf",1,0,1],"Vogue":["Vogue.ttf",1,0,1],"Mermaid1001":["Mermaid1001.ttf",1,0,1]},"Scottish-Fonts":{"Celtic gaelige":["Celtic-gaelige.ttf",1,0,1],"Celtg ":["Celtg-.ttf",1,0,1],"Celtichd":["Celtichd.ttf",1,0,1],"Irishpenny":["Irishpenny.ttf",1,0,1],"Irishuncialfabeta bold":["Irishuncialfabeta-bold.ttf",1,0,1]},"Celtic-Font":{"Celtichd":["Celtichd.ttf",1,0,1]}};

</script>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
<script type="text/javascript" src="multiple-select.js"></script>

<link href="multiple-select.css" rel="stylesheet" type="text/css">
<div class="col-lg-7 col-md-7 col-sm-12" style="padding-right: 0px;">
	<form name="" action="" method="post" role="form" id="mainform">		
								
	<div style="width:100%;float:left">
		<div class="form-group" style="width:27%;float:left;">
			<div class="checkbox">
				<label>
					<input name="cstmfy_req" value="1" checked type="checkbox">Enable Customization
					<span style="display:none;" data-original-title="Untick to Disable" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span>
				</label>
			</div>

		</div>
	
	<div class="form-group " style="width:50%;float:left; display:none;">
	<div class="checkbox">
		<label>
			<input class="cstmfy_all" name="cstmfy_all" onclick="nonvariant(this)" value="1"  type="checkbox">All variant Image 
			<span data-original-title="All variant image works only on variant image and all field must have same variant image. Works with shopify's variant option for different color/style/size or with thumb images." class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span>
		</label>
	</div>
		</div>		
				
				
	</div>
	
	<script>
    var imagelist_t='<option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/-Back-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/-Back-quilt-bed-set-1.jpg">-Back-quilt-bed-set-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/-Blue-quilt-bed-set-2.jpg"   value="images/1sttheworld.myshopify.com/-Blue-quilt-bed-set-2.jpg">-Blue-quilt-bed-set-2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/-Gold-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/-Gold-quilt-bed-set-1.jpg">-Gold-quilt-bed-set-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/-Gray-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/-Gray-quilt-bed-set-1.jpg">-Gray-quilt-bed-set-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/-Gray-quilt-bed-set-2.jpg"   value="images/1sttheworld.myshopify.com/-Gray-quilt-bed-set-2.jpg">-Gray-quilt-bed-set-2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/-Green-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/-Green-quilt-bed-set-1.jpg">-Green-quilt-bed-set-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/-mk-pillow.jpg"   value="images/1sttheworld.myshopify.com/-mk-pillow.jpg">-mk-pillow.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/-Red-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/-Red-quilt-bed-set-1.jpg">-Red-quilt-bed-set-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/-Reggae-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/-Reggae-quilt-bed-set-1.jpg">-Reggae-quilt-bed-set-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/-Set-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/-Set-quilt-bed-set-1.jpg">-Set-quilt-bed-set-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/-Yellow-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/-Yellow-quilt-bed-set-1.jpg">-Yellow-quilt-bed-set-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/.jpg"   value="images/1sttheworld.myshopify.com/.jpg">.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/1-Black-no.jpg"   value="images/1sttheworld.myshopify.com/1-Black-no.jpg">1-Black-no.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/1-black-No.jpg"   value="images/1sttheworld.myshopify.com/1-black-No.jpg">1-black-No.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/1-thththt.jpg"   value="images/1sttheworld.myshopify.com/1-thththt.jpg">1-thththt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/1.jpg"   value="images/1sttheworld.myshopify.com/1.jpg">1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/2.jpg"   value="images/1sttheworld.myshopify.com/2.jpg">2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/2dffrgffr.jpg"   value="images/1sttheworld.myshopify.com/2dffrgffr.jpg">2dffrgffr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/3-te-n-walledcdt-women.jpg"   value="images/1sttheworld.myshopify.com/3-te-n-walledcdt-women.jpg">3-te-n-walledcdt-women.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/3-te-n-wallet-wdscdmen.jpg"   value="images/1sttheworld.myshopify.com/3-te-n-wallet-wdscdmen.jpg">3-te-n-wallet-wdscdmen.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/3-te-n-wallet-women-Rdcdecovered-copy.jpg"   value="images/1sttheworld.myshopify.com/3-te-n-wallet-women-Rdcdecovered-copy.jpg">3-te-n-wallet-women-Rdcdecovered-copy.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/3-te-n-wallet-women-Recovered.jpg"   value="images/1sttheworld.myshopify.com/3-te-n-wallet-women-Recovered.jpg">3-te-n-wallet-women-Recovered.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/3.jpg"   value="images/1sttheworld.myshopify.com/3.jpg">3.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/3a.jpg"   value="images/1sttheworld.myshopify.com/3a.jpg">3a.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/3e-33e32.jpg"   value="images/1sttheworld.myshopify.com/3e-33e32.jpg">3e-33e32.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/4.jpg"   value="images/1sttheworld.myshopify.com/4.jpg">4.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/4linn.jpg"   value="images/1sttheworld.myshopify.com/4linn.jpg">4linn.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/4t423.jpg"   value="images/1sttheworld.myshopify.com/4t423.jpg">4t423.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/4wwfw-strap.jpg"   value="images/1sttheworld.myshopify.com/4wwfw-strap.jpg">4wwfw-strap.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/5.jpg"   value="images/1sttheworld.myshopify.com/5.jpg">5.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/6.jpg"   value="images/1sttheworld.myshopify.com/6.jpg">6.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/7.jpg"   value="images/1sttheworld.myshopify.com/7.jpg">7.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/8.jpg"   value="images/1sttheworld.myshopify.com/8.jpg">8.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/9.jpg"   value="images/1sttheworld.myshopify.com/9.jpg">9.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/10.jpg"   value="images/1sttheworld.myshopify.com/10.jpg">10.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/10lin.jpg"   value="images/1sttheworld.myshopify.com/10lin.jpg">10lin.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/11.jpg"   value="images/1sttheworld.myshopify.com/11.jpg">11.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/11l.jpg"   value="images/1sttheworld.myshopify.com/11l.jpg">11l.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/11lin.jpg"   value="images/1sttheworld.myshopify.com/11lin.jpg">11lin.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/12.jpg"   value="images/1sttheworld.myshopify.com/12.jpg">12.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/12v41355.jpg"   value="images/1sttheworld.myshopify.com/12v41355.jpg">12v41355.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/33.jpg"   value="images/1sttheworld.myshopify.com/33.jpg">33.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/66.jpg"   value="images/1sttheworld.myshopify.com/66.jpg">66.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/77.jpg"   value="images/1sttheworld.myshopify.com/77.jpg">77.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/657k88.jpg"   value="images/1sttheworld.myshopify.com/657k88.jpg">657k88.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/888.jpg"   value="images/1sttheworld.myshopify.com/888.jpg">888.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/1111.jpg"   value="images/1sttheworld.myshopify.com/1111.jpg">1111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/1111linnn.jpg"   value="images/1sttheworld.myshopify.com/1111linnn.jpg">1111linnn.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/1112.jpg"   value="images/1sttheworld.myshopify.com/1112.jpg">1112.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/1113.jpg"   value="images/1sttheworld.myshopify.com/1113.jpg">1113.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/1114.jpg"   value="images/1sttheworld.myshopify.com/1114.jpg">1114.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/3243t43.jpg"   value="images/1sttheworld.myshopify.com/3243t43.jpg">3243t43.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/3333.jpg"   value="images/1sttheworld.myshopify.com/3333.jpg">3333.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/4343g4.jpg"   value="images/1sttheworld.myshopify.com/4343g4.jpg">4343g4.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/10230-0-0x2-0c6bf86d-05ff-4228-8a56-ba58909378aa-1024x1024.jpg"   value="images/1sttheworld.myshopify.com/10230-0-0x2-0c6bf86d-05ff-4228-8a56-ba58909378aa-1024x1024.jpg">10230-0-0x2-0c6bf86d-05ff-4228-8a56-ba58909378aa-1024x1024.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/10230-0-0x2-81343f19-d0e4-4062-937d-1de30a67e55a.jpg"   value="images/1sttheworld.myshopify.com/10230-0-0x2-81343f19-d0e4-4062-937d-1de30a67e55a.jpg">10230-0-0x2-81343f19-d0e4-4062-937d-1de30a67e55a.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/10230-0-0x2-bd785642-cdfd-449d-a676-76e6ec123fe5.jpg"   value="images/1sttheworld.myshopify.com/10230-0-0x2-bd785642-cdfd-449d-a676-76e6ec123fe5.jpg">10230-0-0x2-bd785642-cdfd-449d-a676-76e6ec123fe5.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/A-DAXAX.jpg"   value="images/1sttheworld.myshopify.com/A-DAXAX.jpg">A-DAXAX.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/a3.jpg"   value="images/1sttheworld.myshopify.com/a3.jpg">a3.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/A101.jpg"   value="images/1sttheworld.myshopify.com/A101.jpg">A101.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/a102.jpg"   value="images/1sttheworld.myshopify.com/a102.jpg">a102.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/A103.jpg"   value="images/1sttheworld.myshopify.com/A103.jpg">A103.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/A104.jpg"   value="images/1sttheworld.myshopify.com/A104.jpg">A104.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/A105.jpg"   value="images/1sttheworld.myshopify.com/A105.jpg">A105.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/adaaa.jpg"   value="images/1sttheworld.myshopify.com/adaaa.jpg">adaaa.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/adgwiuqfhiue.jpg"   value="images/1sttheworld.myshopify.com/adgwiuqfhiue.jpg">adgwiuqfhiue.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/alba1-1024x1024.jpg"   value="images/1sttheworld.myshopify.com/alba1-1024x1024.jpg">alba1-1024x1024.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/American-Samoa-Custom-hoodie-.jpg"   value="images/1sttheworld.myshopify.com/American-Samoa-Custom-hoodie-.jpg">American-Samoa-Custom-hoodie-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/American-Samoa-Custom-Polo-.jpg"   value="images/1sttheworld.myshopify.com/American-Samoa-Custom-Polo-.jpg">American-Samoa-Custom-Polo-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/American-Samoa-Custom-TShirt.jpg"   value="images/1sttheworld.myshopify.com/American-Samoa-Custom-TShirt.jpg">American-Samoa-Custom-TShirt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/American-Samoa-Custom-Zhoodie-.jpg"   value="images/1sttheworld.myshopify.com/American-Samoa-Custom-Zhoodie-.jpg">American-Samoa-Custom-Zhoodie-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/American-Samoa-Hoodie-Coat-Of-Arms-Polynesian-Wave-Gold-Custom-TH5.jpg"   value="images/1sttheworld.myshopify.com/American-Samoa-Hoodie-Coat-Of-Arms-Polynesian-Wave-Gold-Custom-TH5.jpg">American-Samoa-Hoodie-Coat-Of-Arms-Polynesian-Wave-Gold-Custom-TH5.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Argentina-F-.jpg"   value="images/1sttheworld.myshopify.com/Argentina-F-.jpg">Argentina-F-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Argentina-F-Polo-.jpg"   value="images/1sttheworld.myshopify.com/Argentina-F-Polo-.jpg">Argentina-F-Polo-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Argentina-F-TShirt-.jpg"   value="images/1sttheworld.myshopify.com/Argentina-F-TShirt-.jpg">Argentina-F-TShirt-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Argentina-F-Zhoodie-.jpg"   value="images/1sttheworld.myshopify.com/Argentina-F-Zhoodie-.jpg">Argentina-F-Zhoodie-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/AS1.jpg"   value="images/1sttheworld.myshopify.com/AS1.jpg">AS1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/asdasd12.jpg"   value="images/1sttheworld.myshopify.com/asdasd12.jpg">asdasd12.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/au-6.png"   value="images/1sttheworld.myshopify.com/au-6.png">au-6.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/austria-custom-hoodie-f-.jpg"   value="images/1sttheworld.myshopify.com/austria-custom-hoodie-f-.jpg">austria-custom-hoodie-f-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/austria-custom-polo-f.jpg"   value="images/1sttheworld.myshopify.com/austria-custom-polo-f.jpg">austria-custom-polo-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/austria-custom-tshirt-f-.jpg"   value="images/1sttheworld.myshopify.com/austria-custom-tshirt-f-.jpg">austria-custom-tshirt-f-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/austria-custom-zhoodie-f-.jpg"   value="images/1sttheworld.myshopify.com/austria-custom-zhoodie-f-.jpg">austria-custom-zhoodie-f-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Austrian-Empire-hoodie.jpg"   value="images/1sttheworld.myshopify.com/Austrian-Empire-hoodie.jpg">Austrian-Empire-hoodie.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Austrian-Empire-polo-f-.jpg"   value="images/1sttheworld.myshopify.com/Austrian-Empire-polo-f-.jpg">Austrian-Empire-polo-f-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Austrian-Empire-tshirt-f.jpg"   value="images/1sttheworld.myshopify.com/Austrian-Empire-tshirt-f.jpg">Austrian-Empire-tshirt-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Austrian-Empire-Zhoodie.jpg"   value="images/1sttheworld.myshopify.com/Austrian-Empire-Zhoodie.jpg">Austrian-Empire-Zhoodie.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/backpack-11.jpg"   value="images/1sttheworld.myshopify.com/backpack-11.jpg">backpack-11.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-1.jpg"   value="images/1sttheworld.myshopify.com/Banner-1.jpg">Banner-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-Albania-Broken-White.jpg"   value="images/1sttheworld.myshopify.com/Banner-Albania-Broken-White.jpg">Banner-Albania-Broken-White.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-Albania-Broken.jpg"   value="images/1sttheworld.myshopify.com/Banner-Albania-Broken.jpg">Banner-Albania-Broken.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-Barbados-Broken-White.jpg"   value="images/1sttheworld.myshopify.com/Banner-Barbados-Broken-White.jpg">Banner-Barbados-Broken-White.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-Barbados-Broken.jpg"   value="images/1sttheworld.myshopify.com/Banner-Barbados-Broken.jpg">Banner-Barbados-Broken.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-Lithuania-Custom-White.jpg"   value="images/1sttheworld.myshopify.com/Banner-Lithuania-Custom-White.jpg">Banner-Lithuania-Custom-White.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-Lithuania-Custom.jpg"   value="images/1sttheworld.myshopify.com/Banner-Lithuania-Custom.jpg">Banner-Lithuania-Custom.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/banner-no-1.jpg"   value="images/1sttheworld.myshopify.com/banner-no-1.jpg">banner-no-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-NZ-Custom.jpg"   value="images/1sttheworld.myshopify.com/Banner-NZ-Custom.jpg">Banner-NZ-Custom.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-NZ-Custom2.jpg"   value="images/1sttheworld.myshopify.com/Banner-NZ-Custom2.jpg">Banner-NZ-Custom2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-NZ-Customaaa.jpg"   value="images/1sttheworld.myshopify.com/Banner-NZ-Customaaa.jpg">Banner-NZ-Customaaa.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-NZ-White-Custom.jpg"   value="images/1sttheworld.myshopify.com/Banner-NZ-White-Custom.jpg">Banner-NZ-White-Custom.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-NZ-White-Custom2.jpg"   value="images/1sttheworld.myshopify.com/Banner-NZ-White-Custom2.jpg">Banner-NZ-White-Custom2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-NZ-White-Custom3.jpg"   value="images/1sttheworld.myshopify.com/Banner-NZ-White-Custom3.jpg">Banner-NZ-White-Custom3.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-NZ-White-Custom3aaa.jpg"   value="images/1sttheworld.myshopify.com/Banner-NZ-White-Custom3aaa.jpg">Banner-NZ-White-Custom3aaa.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-Serbia-Broken-White.jpg"   value="images/1sttheworld.myshopify.com/Banner-Serbia-Broken-White.jpg">Banner-Serbia-Broken-White.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-Serbia-Broken.jpg"   value="images/1sttheworld.myshopify.com/Banner-Serbia-Broken.jpg">Banner-Serbia-Broken.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-Swiss-Custom.jpg"   value="images/1sttheworld.myshopify.com/Banner-Swiss-Custom.jpg">Banner-Swiss-Custom.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-Swiss-Custom2.jpg"   value="images/1sttheworld.myshopify.com/Banner-Swiss-Custom2.jpg">Banner-Swiss-Custom2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-Swiss-White-Custom.jpg"   value="images/1sttheworld.myshopify.com/Banner-Swiss-White-Custom.jpg">Banner-Swiss-White-Custom.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Banner-Swiss-White-Custom2.jpg"   value="images/1sttheworld.myshopify.com/Banner-Swiss-White-Custom2.jpg">Banner-Swiss-White-Custom2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Barbados-Custom-hoodie-.jpg"   value="images/1sttheworld.myshopify.com/Barbados-Custom-hoodie-.jpg">Barbados-Custom-hoodie-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Barbados-Custom-hoodie.jpg"   value="images/1sttheworld.myshopify.com/Barbados-Custom-hoodie.jpg">Barbados-Custom-hoodie.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Barbados-Custom-polo-mk-f-.jpg"   value="images/1sttheworld.myshopify.com/Barbados-Custom-polo-mk-f-.jpg">Barbados-Custom-polo-mk-f-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Barbados-Custom-tshirt-f.jpg"   value="images/1sttheworld.myshopify.com/Barbados-Custom-tshirt-f.jpg">Barbados-Custom-tshirt-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Barbados-Custom-Zhoodie.jpg"   value="images/1sttheworld.myshopify.com/Barbados-Custom-Zhoodie.jpg">Barbados-Custom-Zhoodie.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Base34ball-Jersey-1.jpg"   value="images/1sttheworld.myshopify.com/Base34ball-Jersey-1.jpg">Base34ball-Jersey-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/baseballJersey-front-WB-NT.jpg"   value="images/1sttheworld.myshopify.com/baseballJersey-front-WB-NT.jpg">baseballJersey-front-WB-NT.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/baseballJersey-front-WB-NT.png"   value="images/1sttheworld.myshopify.com/baseballJersey-front-WB-NT.png">baseballJersey-front-WB-NT.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Bed-11.jpg"   value="images/1sttheworld.myshopify.com/Bed-11.jpg">Bed-11.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Bedding-Set-Blue-1.jpg"   value="images/1sttheworld.myshopify.com/Bedding-Set-Blue-1.jpg">Bedding-Set-Blue-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Bedding-Set-Gold-1.jpg"   value="images/1sttheworld.myshopify.com/Bedding-Set-Gold-1.jpg">Bedding-Set-Gold-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Bedding-Set-Gray-1.jpg"   value="images/1sttheworld.myshopify.com/Bedding-Set-Gray-1.jpg">Bedding-Set-Gray-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Bedding-Set-Green-1.jpg"   value="images/1sttheworld.myshopify.com/Bedding-Set-Green-1.jpg">Bedding-Set-Green-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Bedding-Set-Red-1.jpg"   value="images/1sttheworld.myshopify.com/Bedding-Set-Red-1.jpg">Bedding-Set-Red-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Bedding-Set-Reggae-2.jpg"   value="images/1sttheworld.myshopify.com/Bedding-Set-Reggae-2.jpg">Bedding-Set-Reggae-2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Bedding-Set-Yellow-1.jpg"   value="images/1sttheworld.myshopify.com/Bedding-Set-Yellow-1.jpg">Bedding-Set-Yellow-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/black-.png"   value="images/1sttheworld.myshopify.com/black-.png">black-.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Black-1-no.jpg"   value="images/1sttheworld.myshopify.com/Black-1-no.jpg">Black-1-no.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/black-1frfr3f.jpg"   value="images/1sttheworld.myshopify.com/black-1frfr3f.jpg">black-1frfr3f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/black-frefrfrf.jpg"   value="images/1sttheworld.myshopify.com/black-frefrfrf.jpg">black-frefrfrf.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/black-no.jpg"   value="images/1sttheworld.myshopify.com/black-no.jpg">black-no.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/black.png"   value="images/1sttheworld.myshopify.com/black.png">black.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-1.jpg"   value="images/1sttheworld.myshopify.com/Blue-1.jpg">Blue-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/blue-1.jpg"   value="images/1sttheworld.myshopify.com/blue-1.jpg">blue-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/blue-1frfrf.jpg"   value="images/1sttheworld.myshopify.com/blue-1frfrf.jpg">blue-1frfrf.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/blue-2HGDHTEHT.jpg"   value="images/1sttheworld.myshopify.com/blue-2HGDHTEHT.jpg">blue-2HGDHTEHT.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-11.jpg"   value="images/1sttheworld.myshopify.com/Blue-11.jpg">Blue-11.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/blue-55.jpg"   value="images/1sttheworld.myshopify.com/blue-55.jpg">blue-55.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-1111.jpg"   value="images/1sttheworld.myshopify.com/Blue-1111.jpg">Blue-1111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-11111.jpg"   value="images/1sttheworld.myshopify.com/Blue-11111.jpg">Blue-11111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-bfhdbhj.jpg"   value="images/1sttheworld.myshopify.com/Blue-bfhdbhj.jpg">Blue-bfhdbhj.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-cfdfcc.jpg"   value="images/1sttheworld.myshopify.com/Blue-cfdfcc.jpg">Blue-cfdfcc.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/blue-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/blue-copy-hdfgdrgrdt.jpg">blue-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/blue-defffr.jpg"   value="images/1sttheworld.myshopify.com/blue-defffr.jpg">blue-defffr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-defwhfc.jpg"   value="images/1sttheworld.myshopify.com/Blue-defwhfc.jpg">Blue-defwhfc.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/blue-fbvfdgbgbg.jpg"   value="images/1sttheworld.myshopify.com/blue-fbvfdgbgbg.jpg">blue-fbvfdgbgbg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-fefvref.jpg"   value="images/1sttheworld.myshopify.com/Blue-fefvref.jpg">Blue-fefvref.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/blue-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/blue-fergrgrgr.jpg">blue-fergrgrgr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-frfrf.jpg"   value="images/1sttheworld.myshopify.com/Blue-frfrf.jpg">Blue-frfrf.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-frfrfr.jpg"   value="images/1sttheworld.myshopify.com/Blue-frfrfr.jpg">Blue-frfrfr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-gdrgggtteg.jpg"   value="images/1sttheworld.myshopify.com/Blue-gdrgggtteg.jpg">Blue-gdrgggtteg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/Blue-gdrguyuuuuu.jpg">Blue-gdrguyuuuuu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-gghyhy5t4r.jpg"   value="images/1sttheworld.myshopify.com/Blue-gghyhy5t4r.jpg">Blue-gghyhy5t4r.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-gtgbtrgb.jpg"   value="images/1sttheworld.myshopify.com/Blue-gtgbtrgb.jpg">Blue-gtgbtrgb.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/blue-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/blue-hibiscus-copy-hdfgdrgrdt.jpg">blue-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-hvhgv.jpg"   value="images/1sttheworld.myshopify.com/Blue-hvhgv.jpg">Blue-hvhgv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/Blue-quilt-bed-set-1.jpg">Blue-quilt-bed-set-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Blue-vdfvf.jpg"   value="images/1sttheworld.myshopify.com/Blue-vdfvf.jpg">Blue-vdfvf.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/bomber-men-truoc-2-.jpg"   value="images/1sttheworld.myshopify.com/bomber-men-truoc-2-.jpg">bomber-men-truoc-2-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/bomber-women-truoc-2-.jpg"   value="images/1sttheworld.myshopify.com/bomber-women-truoc-2-.jpg">bomber-women-truoc-2-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/boston-sneakers-2.jpg"   value="images/1sttheworld.myshopify.com/boston-sneakers-2.jpg">boston-sneakers-2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/boston-sneakers-3.jpg"   value="images/1sttheworld.myshopify.com/boston-sneakers-3.jpg">boston-sneakers-3.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/boston-sneakers-4.jpg"   value="images/1sttheworld.myshopify.com/boston-sneakers-4.jpg">boston-sneakers-4.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/both-views-7kx7k.jpg"   value="images/1sttheworld.myshopify.com/both-views-7kx7k.jpg">both-views-7kx7k.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Canada-Custom-MK-Hoodie-F.jpg"   value="images/1sttheworld.myshopify.com/Canada-Custom-MK-Hoodie-F.jpg">Canada-Custom-MK-Hoodie-F.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Canada-Custom-Polo-F.jpg"   value="images/1sttheworld.myshopify.com/Canada-Custom-Polo-F.jpg">Canada-Custom-Polo-F.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Canada-Custom-tshirt-F.jpg"   value="images/1sttheworld.myshopify.com/Canada-Custom-tshirt-F.jpg">Canada-Custom-tshirt-F.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Canada-Custom-Zhoodie-.jpg"   value="images/1sttheworld.myshopify.com/Canada-Custom-Zhoodie-.jpg">Canada-Custom-Zhoodie-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Car-Seat-mk.jpg"   value="images/1sttheworld.myshopify.com/Car-Seat-mk.jpg">Car-Seat-mk.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/cdvs.jpg"   value="images/1sttheworld.myshopify.com/cdvs.jpg">cdvs.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/cdvsbvr.jpg"   value="images/1sttheworld.myshopify.com/cdvsbvr.jpg">cdvsbvr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Chicago-Sneakers-2.jpg"   value="images/1sttheworld.myshopify.com/Chicago-Sneakers-2.jpg">Chicago-Sneakers-2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Chicago-Sneakers-3.jpg"   value="images/1sttheworld.myshopify.com/Chicago-Sneakers-3.jpg">Chicago-Sneakers-3.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Chicago-Sneakers-4.jpg"   value="images/1sttheworld.myshopify.com/Chicago-Sneakers-4.jpg">Chicago-Sneakers-4.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/CSCSAAS.jpg"   value="images/1sttheworld.myshopify.com/CSCSAAS.jpg">CSCSAAS.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Ct-no.jpg"   value="images/1sttheworld.myshopify.com/Ct-no.jpg">Ct-no.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/d.jpg"   value="images/1sttheworld.myshopify.com/d.jpg">d.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dasfsdcs-benth.jpg"   value="images/1sttheworld.myshopify.com/dasfsdcs-benth.jpg">dasfsdcs-benth.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dcsfewwwww.jpg"   value="images/1sttheworld.myshopify.com/dcsfewwwww.jpg">dcsfewwwww.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/devdvds.jpg"   value="images/1sttheworld.myshopify.com/devdvds.jpg">devdvds.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dewffr.jpg"   value="images/1sttheworld.myshopify.com/dewffr.jpg">dewffr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dfed.jpg"   value="images/1sttheworld.myshopify.com/dfed.jpg">dfed.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/DFGH.jpg"   value="images/1sttheworld.myshopify.com/DFGH.jpg">DFGH.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dfgrehre.jpg"   value="images/1sttheworld.myshopify.com/dfgrehre.jpg">dfgrehre.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dfwdvfwdcds.jpg"   value="images/1sttheworld.myshopify.com/dfwdvfwdcds.jpg">dfwdvfwdcds.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dfwwBag-Recovered.jpg"   value="images/1sttheworld.myshopify.com/dfwwBag-Recovered.jpg">dfwwBag-Recovered.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dgeudhcksjck.jpg"   value="images/1sttheworld.myshopify.com/dgeudhcksjck.jpg">dgeudhcksjck.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dgreher.jpg"   value="images/1sttheworld.myshopify.com/dgreher.jpg">dgreher.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dgycuywdvbciu.jpg"   value="images/1sttheworld.myshopify.com/dgycuywdvbciu.jpg">dgycuywdvbciu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dhcireuhvi.jpg"   value="images/1sttheworld.myshopify.com/dhcireuhvi.jpg">dhcireuhvi.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dhffiuehvi.jpg"   value="images/1sttheworld.myshopify.com/dhffiuehvi.jpg">dhffiuehvi.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dhgfydgfu.jpg"   value="images/1sttheworld.myshopify.com/dhgfydgfu.jpg">dhgfydgfu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dhvcikdskv.jpg"   value="images/1sttheworld.myshopify.com/dhvcikdskv.jpg">dhvcikdskv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/du-.jpg"   value="images/1sttheworld.myshopify.com/du-.jpg">du-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dvf.jpg"   value="images/1sttheworld.myshopify.com/dvf.jpg">dvf.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dwefw.jpg"   value="images/1sttheworld.myshopify.com/dwefw.jpg">dwefw.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/dwq.jpg"   value="images/1sttheworld.myshopify.com/dwq.jpg">dwq.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/e-.jpg"   value="images/1sttheworld.myshopify.com/e-.jpg">e-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/e-fee.jpg"   value="images/1sttheworld.myshopify.com/e-fee.jpg">e-fee.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/e-grgdsgsag.jpg"   value="images/1sttheworld.myshopify.com/e-grgdsgsag.jpg">e-grgdsgsag.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/e-oihewgiuvr.jpg"   value="images/1sttheworld.myshopify.com/e-oihewgiuvr.jpg">e-oihewgiuvr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/e-thfgdf.jpg"   value="images/1sttheworld.myshopify.com/e-thfgdf.jpg">e-thfgdf.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/e-wdwn.jpg"   value="images/1sttheworld.myshopify.com/e-wdwn.jpg">e-wdwn.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/e2dre2fref.jpg"   value="images/1sttheworld.myshopify.com/e2dre2fref.jpg">e2dre2fref.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/eeeeufhei.jpg"   value="images/1sttheworld.myshopify.com/eeeeufhei.jpg">eeeeufhei.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/efefefeag.jpg"   value="images/1sttheworld.myshopify.com/efefefeag.jpg">efefefeag.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/efiuewnveknbv.jpg"   value="images/1sttheworld.myshopify.com/efiuewnveknbv.jpg">efiuewnveknbv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/egregegete-Bag.jpg"   value="images/1sttheworld.myshopify.com/egregegete-Bag.jpg">egregegete-Bag.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/en-no.jpg"   value="images/1sttheworld.myshopify.com/en-no.jpg">en-no.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/EN.jpg"   value="images/1sttheworld.myshopify.com/EN.jpg">EN.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/eqfrqwfqwfcqw.jpg"   value="images/1sttheworld.myshopify.com/eqfrqwfqwfcqw.jpg">eqfrqwfqwfcqw.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/ewe.jpg"   value="images/1sttheworld.myshopify.com/ewe.jpg">ewe.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/ewfvwedvdw.jpg"   value="images/1sttheworld.myshopify.com/ewfvwedvdw.jpg">ewfvwedvdw.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/F.jpg"   value="images/1sttheworld.myshopify.com/F.jpg">F.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/f.jpg"   value="images/1sttheworld.myshopify.com/f.jpg">f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Fanny-Back-hbrghbtg.jpg"   value="images/1sttheworld.myshopify.com/Fanny-Back-hbrghbtg.jpg">Fanny-Back-hbrghbtg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/fcewddedecdeg.jpg"   value="images/1sttheworld.myshopify.com/fcewddedecdeg.jpg">fcewddedecdeg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/fchewifjioew.jpg"   value="images/1sttheworld.myshopify.com/fchewifjioew.jpg">fchewifjioew.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/fe.jpg"   value="images/1sttheworld.myshopify.com/fe.jpg">fe.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/fg.jpg"   value="images/1sttheworld.myshopify.com/fg.jpg">fg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/fgsdgsdgsd.jpg"   value="images/1sttheworld.myshopify.com/fgsdgsdgsd.jpg">fgsdgsdgsd.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/fgthyhhyj.jpg"   value="images/1sttheworld.myshopify.com/fgthyhhyj.jpg">fgthyhhyj.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/fhewiofjoew.jpg"   value="images/1sttheworld.myshopify.com/fhewiofjoew.jpg">fhewiofjoew.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/front-1-2c0ba22f-1939-4d25-ab19-60f10f580470-1024x1024.jpg"   value="images/1sttheworld.myshopify.com/front-1-2c0ba22f-1939-4d25-ab19-60f10f580470-1024x1024.jpg">front-1-2c0ba22f-1939-4d25-ab19-60f10f580470-1024x1024.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/front-1-6b07e0dc-edae-40f7-8510-817979ad5f55.jpg"   value="images/1sttheworld.myshopify.com/front-1-6b07e0dc-edae-40f7-8510-817979ad5f55.jpg">front-1-6b07e0dc-edae-40f7-8510-817979ad5f55.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/front-1-63c0b9ea-13cf-4035-9af9-151e108dc274.jpg"   value="images/1sttheworld.myshopify.com/front-1-63c0b9ea-13cf-4035-9af9-151e108dc274.jpg">front-1-63c0b9ea-13cf-4035-9af9-151e108dc274.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/front-1-266c0ea6-d05b-46c7-9850-45f810e5c208-1024x1024.jpg"   value="images/1sttheworld.myshopify.com/front-1-266c0ea6-d05b-46c7-9850-45f810e5c208-1024x1024.jpg">front-1-266c0ea6-d05b-46c7-9850-45f810e5c208-1024x1024.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/front-1-424623f3-3e4b-4bf7-9822-f2998e902e50-1024x1024.jpg"   value="images/1sttheworld.myshopify.com/front-1-424623f3-3e4b-4bf7-9822-f2998e902e50-1024x1024.jpg">front-1-424623f3-3e4b-4bf7-9822-f2998e902e50-1024x1024.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/front-1-aa85ec50-94be-413e-9d42-a36b96749d99.jpg"   value="images/1sttheworld.myshopify.com/front-1-aa85ec50-94be-413e-9d42-a36b96749d99.jpg">front-1-aa85ec50-94be-413e-9d42-a36b96749d99.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/front-1-cf82bbb6-21e5-4ee2-b348-7a9675a52d69.jpg"   value="images/1sttheworld.myshopify.com/front-1-cf82bbb6-21e5-4ee2-b348-7a9675a52d69.jpg">front-1-cf82bbb6-21e5-4ee2-b348-7a9675a52d69.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/front-3-4a6aea6d-61b3-4c53-b2f3-055fa23e820e.jpg"   value="images/1sttheworld.myshopify.com/front-3-4a6aea6d-61b3-4c53-b2f3-055fa23e820e.jpg">front-3-4a6aea6d-61b3-4c53-b2f3-055fa23e820e.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/front-3-96b78b35-d5d3-4e46-889f-8f29e1c8b0e3.jpg"   value="images/1sttheworld.myshopify.com/front-3-96b78b35-d5d3-4e46-889f-8f29e1c8b0e3.jpg">front-3-96b78b35-d5d3-4e46-889f-8f29e1c8b0e3.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/front-3-c3a30d3b-545e-48ab-8e66-b8e59db68bef.jpg"   value="images/1sttheworld.myshopify.com/front-3-c3a30d3b-545e-48ab-8e66-b8e59db68bef.jpg">front-3-c3a30d3b-545e-48ab-8e66-b8e59db68bef.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/front-3-c69060e0-1c40-4121-b71e-eebe0d037310.jpg"   value="images/1sttheworld.myshopify.com/front-3-c69060e0-1c40-4121-b71e-eebe0d037310.jpg">front-3-c69060e0-1c40-4121-b71e-eebe0d037310.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/front-3-e3d63cde-efeb-4ce5-a87f-c37e4056dd1e.jpg"   value="images/1sttheworld.myshopify.com/front-3-e3d63cde-efeb-4ce5-a87f-c37e4056dd1e.jpg">front-3-e3d63cde-efeb-4ce5-a87f-c37e4056dd1e.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/frwvgfrv.jpg"   value="images/1sttheworld.myshopify.com/frwvgfrv.jpg">frwvgfrv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/ftsrdyyghgh.jpg"   value="images/1sttheworld.myshopify.com/ftsrdyyghgh.jpg">ftsrdyyghgh.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/fvvfgvtg-copy.jpg"   value="images/1sttheworld.myshopify.com/fvvfgvtg-copy.jpg">fvvfgvtg-copy.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/fvvfgvtg.jpg"   value="images/1sttheworld.myshopify.com/fvvfgvtg.jpg">fvvfgvtg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/fwefgefqs.jpg"   value="images/1sttheworld.myshopify.com/fwefgefqs.jpg">fwefgefqs.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/fwrfr.jpg"   value="images/1sttheworld.myshopify.com/fwrfr.jpg">fwrfr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/fwrfrfr.jpg"   value="images/1sttheworld.myshopify.com/fwrfrfr.jpg">fwrfrfr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/fyyrast.jpg"   value="images/1sttheworld.myshopify.com/fyyrast.jpg">fyyrast.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/g.jpg"   value="images/1sttheworld.myshopify.com/g.jpg">g.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gdhfhbgfh.jpg"   value="images/1sttheworld.myshopify.com/gdhfhbgfh.jpg">gdhfhbgfh.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gdiuewhvicuwhed.jpg"   value="images/1sttheworld.myshopify.com/gdiuewhvicuwhed.jpg">gdiuewhvicuwhed.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/german.png"   value="images/1sttheworld.myshopify.com/german.png">german.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gh.jpg"   value="images/1sttheworld.myshopify.com/gh.jpg">gh.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Ghana-hoodie-.jpg"   value="images/1sttheworld.myshopify.com/Ghana-hoodie-.jpg">Ghana-hoodie-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Ghana-polo-f.jpg"   value="images/1sttheworld.myshopify.com/Ghana-polo-f.jpg">Ghana-polo-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Ghana-tshirt-f.jpg"   value="images/1sttheworld.myshopify.com/Ghana-tshirt-f.jpg">Ghana-tshirt-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Ghana-zhoodie-.jpg"   value="images/1sttheworld.myshopify.com/Ghana-zhoodie-.jpg">Ghana-zhoodie-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gno8.jpg"   value="images/1sttheworld.myshopify.com/gno8.jpg">gno8.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gold-1.jpg"   value="images/1sttheworld.myshopify.com/gold-1.jpg">gold-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gold-1.jpg"   value="images/1sttheworld.myshopify.com/Gold-1.jpg">Gold-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/GOLD-1.jpg"   value="images/1sttheworld.myshopify.com/GOLD-1.jpg">GOLD-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gold-2FHTHTHHGT.jpg"   value="images/1sttheworld.myshopify.com/gold-2FHTHTHHGT.jpg">gold-2FHTHTHHGT.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gold-5h5jhyhny.jpg"   value="images/1sttheworld.myshopify.com/Gold-5h5jhyhny.jpg">Gold-5h5jhyhny.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gold-11.jpg"   value="images/1sttheworld.myshopify.com/Gold-11.jpg">Gold-11.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gold-55.jpg"   value="images/1sttheworld.myshopify.com/gold-55.jpg">gold-55.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gold-1111.jpg"   value="images/1sttheworld.myshopify.com/Gold-1111.jpg">Gold-1111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gold-11111.jpg"   value="images/1sttheworld.myshopify.com/Gold-11111.jpg">Gold-11111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gold-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/Gold-copy-hdfgdrgrdt.jpg">Gold-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gold-dvghvegye.jpg"   value="images/1sttheworld.myshopify.com/gold-dvghvegye.jpg">gold-dvghvegye.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gold-eguehgv.jpg"   value="images/1sttheworld.myshopify.com/Gold-eguehgv.jpg">Gold-eguehgv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gold-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/gold-fergrgrgr.jpg">gold-fergrgrgr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gold-frvgfgvr.jpg"   value="images/1sttheworld.myshopify.com/Gold-frvgfgvr.jpg">Gold-frvgfgvr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gold-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/Gold-gdrguyuuuuu.jpg">Gold-gdrguyuuuuu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gold-grthbrh.jpg"   value="images/1sttheworld.myshopify.com/Gold-grthbrh.jpg">Gold-grthbrh.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gold-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/gold-hibiscus-copy-hdfgdrgrdt.jpg">gold-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gray-1.jpg"   value="images/1sttheworld.myshopify.com/gray-1.jpg">gray-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gray-1.jpg"   value="images/1sttheworld.myshopify.com/Gray-1.jpg">Gray-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gray-1efgvv.jpg"   value="images/1sttheworld.myshopify.com/Gray-1efgvv.jpg">Gray-1efgvv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gray-1efrf.jpg"   value="images/1sttheworld.myshopify.com/gray-1efrf.jpg">gray-1efrf.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gray-2HDHTDNYHN.jpg"   value="images/1sttheworld.myshopify.com/gray-2HDHTDNYHN.jpg">gray-2HDHTDNYHN.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gray-55.jpg"   value="images/1sttheworld.myshopify.com/gray-55.jpg">gray-55.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gray-1111111.jpg"   value="images/1sttheworld.myshopify.com/Gray-1111111.jpg">Gray-1111111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gray-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/Gray-copy-hdfgdrgrdt.jpg">Gray-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gray-efregvr.jpg"   value="images/1sttheworld.myshopify.com/Gray-efregvr.jpg">Gray-efregvr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gray-ewyfgrhf.jpg"   value="images/1sttheworld.myshopify.com/Gray-ewyfgrhf.jpg">Gray-ewyfgrhf.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gray-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/gray-fergrgrgr.jpg">gray-fergrgrgr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gray-fgysrfgyus.jpg"   value="images/1sttheworld.myshopify.com/Gray-fgysrfgyus.jpg">Gray-fgysrfgyus.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gray-fvefvv.jpg"   value="images/1sttheworld.myshopify.com/gray-fvefvv.jpg">gray-fvefvv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gray-gdcfheguyfe.jpg"   value="images/1sttheworld.myshopify.com/gray-gdcfheguyfe.jpg">gray-gdcfheguyfe.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gray-gdrgggtteg.jpg"   value="images/1sttheworld.myshopify.com/Gray-gdrgggtteg.jpg">Gray-gdrgggtteg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gray-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/Gray-gdrguyuuuuu.jpg">Gray-gdrguyuuuuu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gray-gtgtg.jpg"   value="images/1sttheworld.myshopify.com/Gray-gtgtg.jpg">Gray-gtgtg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gray-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/gray-hibiscus-copy-hdfgdrgrdt.jpg">gray-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gray-hjjgg.jpg"   value="images/1sttheworld.myshopify.com/Gray-hjjgg.jpg">Gray-hjjgg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Gray-hvgh.jpg"   value="images/1sttheworld.myshopify.com/Gray-hvgh.jpg">Gray-hvgh.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gray-mk-1.jpg"   value="images/1sttheworld.myshopify.com/gray-mk-1.jpg">gray-mk-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Green-1.jpg"   value="images/1sttheworld.myshopify.com/Green-1.jpg">Green-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/green-1.jpg"   value="images/1sttheworld.myshopify.com/green-1.jpg">green-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Green-1gfvgfv.jpg"   value="images/1sttheworld.myshopify.com/Green-1gfvgfv.jpg">Green-1gfvgfv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Green-2.jpg"   value="images/1sttheworld.myshopify.com/Green-2.jpg">Green-2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/green-2HDHNDFHGT.jpg"   value="images/1sttheworld.myshopify.com/green-2HDHNDFHGT.jpg">green-2HDHNDFHGT.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Green-11.jpg"   value="images/1sttheworld.myshopify.com/Green-11.jpg">Green-11.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/green-55.jpg"   value="images/1sttheworld.myshopify.com/green-55.jpg">green-55.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Green-1111.jpg"   value="images/1sttheworld.myshopify.com/Green-1111.jpg">Green-1111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Green-11111.jpg"   value="images/1sttheworld.myshopify.com/Green-11111.jpg">Green-11111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Green-111111.jpg"   value="images/1sttheworld.myshopify.com/Green-111111.jpg">Green-111111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Green-brggg.jpg"   value="images/1sttheworld.myshopify.com/Green-brggg.jpg">Green-brggg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Green-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/Green-copy-hdfgdrgrdt.jpg">Green-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/green-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/green-fergrgrgr.jpg">green-fergrgrgr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/green-fshrfghjrsfvryuw.jpg"   value="images/1sttheworld.myshopify.com/green-fshrfghjrsfvryuw.jpg">green-fshrfghjrsfvryuw.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Green-fyrfy734.jpg"   value="images/1sttheworld.myshopify.com/Green-fyrfy734.jpg">Green-fyrfy734.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Green-gdrgggtteg.jpg"   value="images/1sttheworld.myshopify.com/Green-gdrgggtteg.jpg">Green-gdrgggtteg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Green-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/Green-gdrguyuuuuu.jpg">Green-gdrguyuuuuu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Green-gvrbfbv.jpg"   value="images/1sttheworld.myshopify.com/Green-gvrbfbv.jpg">Green-gvrbfbv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/green-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/green-hibiscus-copy-hdfgdrgrdt.jpg">green-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Green-hvgyug.jpg"   value="images/1sttheworld.myshopify.com/Green-hvgyug.jpg">Green-hvgyug.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/green-mk-1.jpg"   value="images/1sttheworld.myshopify.com/green-mk-1.jpg">green-mk-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Green-vygvtg.jpg"   value="images/1sttheworld.myshopify.com/Green-vygvtg.jpg">Green-vygvtg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Green-yjtjyjj.jpg"   value="images/1sttheworld.myshopify.com/Green-yjtjyjj.jpg">Green-yjtjyjj.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Grocery-Bag-11.jpg"   value="images/1sttheworld.myshopify.com/Grocery-Bag-11.jpg">Grocery-Bag-11.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gsdgurehgt.jpg"   value="images/1sttheworld.myshopify.com/gsdgurehgt.jpg">gsdgurehgt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/guam-gold-mockup.jpg"   value="images/1sttheworld.myshopify.com/guam-gold-mockup.jpg">guam-gold-mockup.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gudhwufcjw.jpg"   value="images/1sttheworld.myshopify.com/gudhwufcjw.jpg">gudhwufcjw.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/gvdcuysh.jpg"   value="images/1sttheworld.myshopify.com/gvdcuysh.jpg">gvdcuysh.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/h1-1.jpg"   value="images/1sttheworld.myshopify.com/h1-1.jpg">h1-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/h2-2.jpg"   value="images/1sttheworld.myshopify.com/h2-2.jpg">h2-2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/h2.jpg"   value="images/1sttheworld.myshopify.com/h2.jpg">h2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/h5.jpg"   value="images/1sttheworld.myshopify.com/h5.jpg">h5.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/h6.jpg"   value="images/1sttheworld.myshopify.com/h6.jpg">h6.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/h7.jpg"   value="images/1sttheworld.myshopify.com/h7.jpg">h7.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/h9.jpg"   value="images/1sttheworld.myshopify.com/h9.jpg">h9.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/haiti-custom-hoodie-f.jpg"   value="images/1sttheworld.myshopify.com/haiti-custom-hoodie-f.jpg">haiti-custom-hoodie-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/haiti-custom-zhoodie-f.jpg"   value="images/1sttheworld.myshopify.com/haiti-custom-zhoodie-f.jpg">haiti-custom-zhoodie-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Haiti-Customized-hoodiez.jpg"   value="images/1sttheworld.myshopify.com/Haiti-Customized-hoodiez.jpg">Haiti-Customized-hoodiez.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Haiti-Customized-polo-mk-f-.jpg"   value="images/1sttheworld.myshopify.com/Haiti-Customized-polo-mk-f-.jpg">Haiti-Customized-polo-mk-f-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Haiti-Customized-tshirt-mk-f.jpg"   value="images/1sttheworld.myshopify.com/Haiti-Customized-tshirt-mk-f.jpg">Haiti-Customized-tshirt-mk-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Haiti-Customized-Zhoodie.jpg"   value="images/1sttheworld.myshopify.com/Haiti-Customized-Zhoodie.jpg">Haiti-Customized-Zhoodie.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/half.jpg"   value="images/1sttheworld.myshopify.com/half.jpg">half.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/handbag-fuhewyfu.jpg"   value="images/1sttheworld.myshopify.com/handbag-fuhewyfu.jpg">handbag-fuhewyfu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/hawaii-5.jpg"   value="images/1sttheworld.myshopify.com/hawaii-5.jpg">hawaii-5.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/hawaii.png"   value="images/1sttheworld.myshopify.com/hawaii.png">hawaii.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/hdb.jpg"   value="images/1sttheworld.myshopify.com/hdb.jpg">hdb.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/hdviufdhvd.jpg"   value="images/1sttheworld.myshopify.com/hdviufdhvd.jpg">hdviufdhvd.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/hfcuhvie.jpg"   value="images/1sttheworld.myshopify.com/hfcuhvie.jpg">hfcuhvie.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Hi-nh-1.jpg"   value="images/1sttheworld.myshopify.com/Hi-nh-1.jpg">Hi-nh-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/hi-nh-2.jpg"   value="images/1sttheworld.myshopify.com/hi-nh-2.jpg">hi-nh-2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Hi-nh-6.jpg"   value="images/1sttheworld.myshopify.com/Hi-nh-6.jpg">Hi-nh-6.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/hi-nh-6.jpg"   value="images/1sttheworld.myshopify.com/hi-nh-6.jpg">hi-nh-6.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/hi.jpg"   value="images/1sttheworld.myshopify.com/hi.jpg">hi.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Hinh-9.jpg"   value="images/1sttheworld.myshopify.com/Hinh-9.jpg">Hinh-9.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Hjs.jpg"   value="images/1sttheworld.myshopify.com/Hjs.jpg">Hjs.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/hoa-i.jpg"   value="images/1sttheworld.myshopify.com/hoa-i.jpg">hoa-i.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Hooded-Blanket-ycgfcv.jpg"   value="images/1sttheworld.myshopify.com/Hooded-Blanket-ycgfcv.jpg">Hooded-Blanket-ycgfcv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/HOODIE.jpg"   value="images/1sttheworld.myshopify.com/HOODIE.jpg">HOODIE.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/hsfiuehiufvewj.jpg"   value="images/1sttheworld.myshopify.com/hsfiuehiufvewj.jpg">hsfiuehiufvewj.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/img.jpg"   value="images/1sttheworld.myshopify.com/img.jpg">img.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/img1.jpg"   value="images/1sttheworld.myshopify.com/img1.jpg">img1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/img1vfvfv.jpg"   value="images/1sttheworld.myshopify.com/img1vfvfv.jpg">img1vfvfv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/in-store-front-bigadadas-right-side-benth.jpg"   value="images/1sttheworld.myshopify.com/in-store-front-bigadadas-right-side-benth.jpg">in-store-front-bigadadas-right-side-benth.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/jgfoihrogroieg.jpg"   value="images/1sttheworld.myshopify.com/jgfoihrogroieg.jpg">jgfoihrogroieg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/kanaka-leather-tote-1.jpg"   value="images/1sttheworld.myshopify.com/kanaka-leather-tote-1.jpg">kanaka-leather-tote-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/kanaka-maoli-beige-tote-1.jpg"   value="images/1sttheworld.myshopify.com/kanaka-maoli-beige-tote-1.jpg">kanaka-maoli-beige-tote-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Large-Tote-Bag-blue-1.jpg"   value="images/1sttheworld.myshopify.com/Large-Tote-Bag-blue-1.jpg">Large-Tote-Bag-blue-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/latvia-hoodie-f-.jpg"   value="images/1sttheworld.myshopify.com/latvia-hoodie-f-.jpg">latvia-hoodie-f-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/latvia-polo-f.jpg"   value="images/1sttheworld.myshopify.com/latvia-polo-f.jpg">latvia-polo-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/latvia-tshirt-f.jpg"   value="images/1sttheworld.myshopify.com/latvia-tshirt-f.jpg">latvia-tshirt-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/latvia-zhoodie-f.jpg"   value="images/1sttheworld.myshopify.com/latvia-zhoodie-f.jpg">latvia-zhoodie-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Leather-Tote-Bag-tgtg.jpg"   value="images/1sttheworld.myshopify.com/Leather-Tote-Bag-tgtg.jpg">Leather-Tote-Bag-tgtg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/leggings-1.jpg"   value="images/1sttheworld.myshopify.com/leggings-1.jpg">leggings-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/leggings-gold-3.jpg"   value="images/1sttheworld.myshopify.com/leggings-gold-3.jpg">leggings-gold-3.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/leggings-gray-1.jpg"   value="images/1sttheworld.myshopify.com/leggings-gray-1.jpg">leggings-gray-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/leggings-green-1.jpg"   value="images/1sttheworld.myshopify.com/leggings-green-1.jpg">leggings-green-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/leggings-Pink-1.jpg"   value="images/1sttheworld.myshopify.com/leggings-Pink-1.jpg">leggings-Pink-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/leggings-Purple-1.jpg"   value="images/1sttheworld.myshopify.com/leggings-Purple-1.jpg">leggings-Purple-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/leggings-red-1.jpg"   value="images/1sttheworld.myshopify.com/leggings-red-1.jpg">leggings-red-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/leggings-yellow-1.jpg"   value="images/1sttheworld.myshopify.com/leggings-yellow-1.jpg">leggings-yellow-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Liechtenstein-Hoodie.jpg"   value="images/1sttheworld.myshopify.com/Liechtenstein-Hoodie.jpg">Liechtenstein-Hoodie.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Liechtenstein-Polo-F.jpg"   value="images/1sttheworld.myshopify.com/Liechtenstein-Polo-F.jpg">Liechtenstein-Polo-F.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Liechtenstein-Tshirt-F.jpg"   value="images/1sttheworld.myshopify.com/Liechtenstein-Tshirt-F.jpg">Liechtenstein-Tshirt-F.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Liechtenstein-zHoodie.jpg"   value="images/1sttheworld.myshopify.com/Liechtenstein-zHoodie.jpg">Liechtenstein-zHoodie.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/lithua-black.png"   value="images/1sttheworld.myshopify.com/lithua-black.png">lithua-black.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/lithua-white.png"   value="images/1sttheworld.myshopify.com/lithua-white.png">lithua-white.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/LITHUA.png"   value="images/1sttheworld.myshopify.com/LITHUA.png">LITHUA.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/lithuania-custom-hoodie-mk-f.jpg"   value="images/1sttheworld.myshopify.com/lithuania-custom-hoodie-mk-f.jpg">lithuania-custom-hoodie-mk-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/lithuania-custom-zhoodie-mk-f.jpg"   value="images/1sttheworld.myshopify.com/lithuania-custom-zhoodie-mk-f.jpg">lithuania-custom-zhoodie-mk-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/lithuania-polo-f.jpg"   value="images/1sttheworld.myshopify.com/lithuania-polo-f.jpg">lithuania-polo-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/lithuania-tshirt-f.jpg"   value="images/1sttheworld.myshopify.com/lithuania-tshirt-f.jpg">lithuania-tshirt-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Luggage-1.jpg"   value="images/1sttheworld.myshopify.com/Luggage-1.jpg">Luggage-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Luggage-trdrtd.jpg"   value="images/1sttheworld.myshopify.com/Luggage-trdrtd.jpg">Luggage-trdrtd.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Malta-hoodie.jpg"   value="images/1sttheworld.myshopify.com/Malta-hoodie.jpg">Malta-hoodie.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Malta-polo-f-.jpg"   value="images/1sttheworld.myshopify.com/Malta-polo-f-.jpg">Malta-polo-f-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Malta-tshirt-f-.jpg"   value="images/1sttheworld.myshopify.com/Malta-tshirt-f-.jpg">Malta-tshirt-f-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Malta-Zhoodie.jpg"   value="images/1sttheworld.myshopify.com/Malta-Zhoodie.jpg">Malta-Zhoodie.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/mk-1.jpg"   value="images/1sttheworld.myshopify.com/mk-1.jpg">mk-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/mk-bed-hhgvg.jpg"   value="images/1sttheworld.myshopify.com/mk-bed-hhgvg.jpg">mk-bed-hhgvg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/mk-bed-k-chu.jpg"   value="images/1sttheworld.myshopify.com/mk-bed-k-chu.jpg">mk-bed-k-chu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/mk-Black-no.jpg"   value="images/1sttheworld.myshopify.com/mk-Black-no.jpg">mk-Black-no.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/mk-h-tr-2.jpg"   value="images/1sttheworld.myshopify.com/mk-h-tr-2.jpg">mk-h-tr-2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/mk-h-z-tr-2.jpg"   value="images/1sttheworld.myshopify.com/mk-h-z-tr-2.jpg">mk-h-z-tr-2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/mk-No-Wh.jpg"   value="images/1sttheworld.myshopify.com/mk-No-Wh.jpg">mk-No-Wh.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/mk-no.jpg"   value="images/1sttheworld.myshopify.com/mk-no.jpg">mk-no.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/MK-SAU2.jpg"   value="images/1sttheworld.myshopify.com/MK-SAU2.jpg">MK-SAU2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/MK-TRC.jpg"   value="images/1sttheworld.myshopify.com/MK-TRC.jpg">MK-TRC.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/MK-TRC2.jpg"   value="images/1sttheworld.myshopify.com/MK-TRC2.jpg">MK-TRC2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/MK-TRCV.jpg"   value="images/1sttheworld.myshopify.com/MK-TRCV.jpg">MK-TRCV.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mocdvdv.jpg"   value="images/1sttheworld.myshopify.com/Mocdvdv.jpg">Mocdvdv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockudcwdwovered.jpg"   value="images/1sttheworld.myshopify.com/Mockudcwdwovered.jpg">Mockudcwdwovered.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Handbag-2.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbag-2.jpg">Mockup-Handbag-2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Handbag-3.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbag-3.jpg">Mockup-Handbag-3.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Handbag-no.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbag-no.jpg">Mockup-Handbag-no.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Handbag-Recovered.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbag-Recovered.jpg">Mockup-Handbag-Recovered.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Handbag-wrgregreg.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbag-wrgregreg.jpg">Mockup-Handbag-wrgregreg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Handbagf-rgef.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbagf-rgef.jpg">Mockup-Handbagf-rgef.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Handbagfe.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbagfe.jpg">Mockup-Handbagfe.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Handbaggggg.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbaggggg.jpg">Mockup-Handbaggggg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Handbededag.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbededag.jpg">Mockup-Handbededag.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Lcdcvdeather-Tote-Bag.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Lcdcvdeather-Tote-Bag.jpg">Mockup-Lcdcvdeather-Tote-Bag.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Leather-Tote-Bafefeg.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Leather-Tote-Bafefeg.jpg">Mockup-Leather-Tote-Bafefeg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Leather-Tote-Bag.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Leather-Tote-Bag.jpg">Mockup-Leather-Tote-Bag.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Leather-Tote-Bagceg.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Leather-Tote-Bagceg.jpg">Mockup-Leather-Tote-Bagceg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Leather-Toteg-copy.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Leather-Toteg-copy.jpg">Mockup-Leather-Toteg-copy.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-ne-.jpg"   value="images/1sttheworld.myshopify.com/Mockup-ne-.jpg">Mockup-ne-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Saddle-Bag-efrgfrg.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Saddle-Bag-efrgfrg.jpg">Mockup-Saddle-Bag-efrgfrg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag-no.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag-no.jpg">Mockup-Tote-Bag-no.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag-Recovefefred.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag-Recovefefred.jpg">Mockup-Tote-Bag-Recovefefred.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag-Recovered.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag-Recovered.jpg">Mockup-Tote-Bag-Recovered.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag-wgfergre.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag-wgfergre.jpg">Mockup-Tote-Bag-wgfergre.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag.jpg">Mockup-Tote-Bag.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Tote-Bdsdag.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Tote-Bdsdag.jpg">Mockup-Tote-Bdsdag.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mockup-Tote-e-Bag.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Tote-e-Bag.jpg">Mockup-Tote-e-Bag.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/mockup.jpg"   value="images/1sttheworld.myshopify.com/mockup.jpg">mockup.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/MockuwdwdwdTote-Bag.jpg"   value="images/1sttheworld.myshopify.com/MockuwdwdwdTote-Bag.jpg">MockuwdwdwdTote-Bag.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mocscscscovered.jpg"   value="images/1sttheworld.myshopify.com/Mocscscscovered.jpg">Mocscscscovered.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Mocscscse-Bag-Recovered.jpg"   value="images/1sttheworld.myshopify.com/Mocscscse-Bag-Recovered.jpg">Mocscscse-Bag-Recovered.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/moose.png"   value="images/1sttheworld.myshopify.com/moose.png">moose.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Nederland-uyffvy.jpg"   value="images/1sttheworld.myshopify.com/Nederland-uyffvy.jpg">Nederland-uyffvy.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/netherlands-6.png"   value="images/1sttheworld.myshopify.com/netherlands-6.png">netherlands-6.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/ngu-a-nghie-ng.jpg"   value="images/1sttheworld.myshopify.com/ngu-a-nghie-ng.jpg">ngu-a-nghie-ng.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/ngu-a-nghie-ng.png"   value="images/1sttheworld.myshopify.com/ngu-a-nghie-ng.png">ngu-a-nghie-ng.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-1-w.jpg"   value="images/1sttheworld.myshopify.com/no-1-w.jpg">no-1-w.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-4b.jpg"   value="images/1sttheworld.myshopify.com/no-4b.jpg">no-4b.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-5-b.jpg"   value="images/1sttheworld.myshopify.com/no-5-b.jpg">no-5-b.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-5-w.jpg"   value="images/1sttheworld.myshopify.com/no-5-w.jpg">no-5-w.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-6.jpg"   value="images/1sttheworld.myshopify.com/no-6.jpg">no-6.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-6b.jpg"   value="images/1sttheworld.myshopify.com/no-6b.jpg">no-6b.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-7.jpg"   value="images/1sttheworld.myshopify.com/no-7.jpg">no-7.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-8-b.jpg"   value="images/1sttheworld.myshopify.com/no-8-b.jpg">no-8-b.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-9-.jpg"   value="images/1sttheworld.myshopify.com/no-9-.jpg">no-9-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-9b.jpg"   value="images/1sttheworld.myshopify.com/no-9b.jpg">no-9b.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-B-1.jpg"   value="images/1sttheworld.myshopify.com/no-B-1.jpg">no-B-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-banner-b.jpg"   value="images/1sttheworld.myshopify.com/no-banner-b.jpg">no-banner-b.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-black.jpg"   value="images/1sttheworld.myshopify.com/no-black.jpg">no-black.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/No-black.png"   value="images/1sttheworld.myshopify.com/No-black.png">No-black.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-en.jpg"   value="images/1sttheworld.myshopify.com/no-en.jpg">no-en.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/NO-Quilt.jpg"   value="images/1sttheworld.myshopify.com/NO-Quilt.jpg">NO-Quilt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-shoulkder.jpg"   value="images/1sttheworld.myshopify.com/no-shoulkder.jpg">no-shoulkder.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-trang.jpg"   value="images/1sttheworld.myshopify.com/no-trang.jpg">no-trang.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-wh-.jpg"   value="images/1sttheworld.myshopify.com/no-wh-.jpg">no-wh-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-wh.jpg"   value="images/1sttheworld.myshopify.com/no-wh.jpg">no-wh.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-Wh.png"   value="images/1sttheworld.myshopify.com/no-Wh.png">no-Wh.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-white-1.jpg"   value="images/1sttheworld.myshopify.com/no-white-1.jpg">no-white-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no-white.jpg"   value="images/1sttheworld.myshopify.com/no-white.jpg">no-white.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/NO.jpg"   value="images/1sttheworld.myshopify.com/NO.jpg">NO.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no.jpg"   value="images/1sttheworld.myshopify.com/no.jpg">no.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no1-b.jpg"   value="images/1sttheworld.myshopify.com/no1-b.jpg">no1-b.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no1.jpg"   value="images/1sttheworld.myshopify.com/no1.jpg">no1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no2-b.jpg"   value="images/1sttheworld.myshopify.com/no2-b.jpg">no2-b.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no2-w.jpg"   value="images/1sttheworld.myshopify.com/no2-w.jpg">no2-w.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no2.jpg"   value="images/1sttheworld.myshopify.com/no2.jpg">no2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no3-b.jpg"   value="images/1sttheworld.myshopify.com/no3-b.jpg">no3-b.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no4.jpg"   value="images/1sttheworld.myshopify.com/no4.jpg">no4.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/no7-b.jpg"   value="images/1sttheworld.myshopify.com/no7-b.jpg">no7-b.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/nott.jpg"   value="images/1sttheworld.myshopify.com/nott.jpg">nott.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/ny-sneakers-2.jpg"   value="images/1sttheworld.myshopify.com/ny-sneakers-2.jpg">ny-sneakers-2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/ny-sneakers-3.jpg"   value="images/1sttheworld.myshopify.com/ny-sneakers-3.jpg">ny-sneakers-3.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/ny-sneakers-4.jpg"   value="images/1sttheworld.myshopify.com/ny-sneakers-4.jpg">ny-sneakers-4.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/nz-6.png"   value="images/1sttheworld.myshopify.com/nz-6.png">nz-6.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/one-fefeinst-vertical-line-wooden-bg-1200x1200-Recovered.jpg"   value="images/1sttheworld.myshopify.com/one-fefeinst-vertical-line-wooden-bg-1200x1200-Recovered.jpg">one-fefeinst-vertical-line-wooden-bg-1200x1200-Recovered.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/one-saddle-bag-agaie-nst-vertical-line-wooden-bg-1200x1200-.jpg"   value="images/1sttheworld.myshopify.com/one-saddle-bag-agaie-nst-vertical-line-wooden-bg-1200x1200-.jpg">one-saddle-bag-agaie-nst-vertical-line-wooden-bg-1200x1200-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/one-saddle-bag-against-vertical-line-wooden-bg-1200x1200-.jpg"   value="images/1sttheworld.myshopify.com/one-saddle-bag-against-vertical-line-wooden-bg-1200x1200-.jpg">one-saddle-bag-against-vertical-line-wooden-bg-1200x1200-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/one-saddle-bag-against-vertical-line-wooden-bg-1200x1200-Recovered.jpg"   value="images/1sttheworld.myshopify.com/one-saddle-bag-against-vertical-line-wooden-bg-1200x1200-Recovered.jpg">one-saddle-bag-against-vertical-line-wooden-bg-1200x1200-Recovered.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/one-sae-gainst-vertical-line-wooden-bg-1200x1200-Recovered.jpg"   value="images/1sttheworld.myshopify.com/one-sae-gainst-vertical-line-wooden-bg-1200x1200-Recovered.jpg">one-sae-gainst-vertical-line-wooden-bg-1200x1200-Recovered.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/oneu-dfwwvertical-line-wooden-bg-1200x1200-.jpg"   value="images/1sttheworld.myshopify.com/oneu-dfwwvertical-line-wooden-bg-1200x1200-.jpg">oneu-dfwwvertical-line-wooden-bg-1200x1200-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Orange-1.jpg"   value="images/1sttheworld.myshopify.com/Orange-1.jpg">Orange-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Orange-11.jpg"   value="images/1sttheworld.myshopify.com/Orange-11.jpg">Orange-11.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Orange-1111.jpg"   value="images/1sttheworld.myshopify.com/Orange-1111.jpg">Orange-1111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Orange-11111.jpg"   value="images/1sttheworld.myshopify.com/Orange-11111.jpg">Orange-11111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/oscsscsst-vertical-line-wooden-bg-1200x1200-.jpg"   value="images/1sttheworld.myshopify.com/oscsscsst-vertical-line-wooden-bg-1200x1200-.jpg">oscsscsst-vertical-line-wooden-bg-1200x1200-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/P1-3.jpg"   value="images/1sttheworld.myshopify.com/P1-3.jpg">P1-3.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/P1.jpg"   value="images/1sttheworld.myshopify.com/P1.jpg">P1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/p2-1.jpg"   value="images/1sttheworld.myshopify.com/p2-1.jpg">p2-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/P2-3.jpg"   value="images/1sttheworld.myshopify.com/P2-3.jpg">P2-3.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/P2.jpg"   value="images/1sttheworld.myshopify.com/P2.jpg">P2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/P3-1.jpg"   value="images/1sttheworld.myshopify.com/P3-1.jpg">P3-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/p3-3.jpg"   value="images/1sttheworld.myshopify.com/p3-3.jpg">p3-3.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/P4-1.jpg"   value="images/1sttheworld.myshopify.com/P4-1.jpg">P4-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/P4-3.jpg"   value="images/1sttheworld.myshopify.com/P4-3.jpg">P4-3.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/P4.jpg"   value="images/1sttheworld.myshopify.com/P4.jpg">P4.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/P5.jpg"   value="images/1sttheworld.myshopify.com/P5.jpg">P5.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/P8.jpg"   value="images/1sttheworld.myshopify.com/P8.jpg">P8.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/P22.jpg"   value="images/1sttheworld.myshopify.com/P22.jpg">P22.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/p33.jpg"   value="images/1sttheworld.myshopify.com/p33.jpg">p33.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/P44.jpg"   value="images/1sttheworld.myshopify.com/P44.jpg">P44.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/P55.jpg"   value="images/1sttheworld.myshopify.com/P55.jpg">P55.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/P66.jpg"   value="images/1sttheworld.myshopify.com/P66.jpg">P66.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/p77.jpg"   value="images/1sttheworld.myshopify.com/p77.jpg">p77.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/photoa10.jpg"   value="images/1sttheworld.myshopify.com/photoa10.jpg">photoa10.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/pillow-case-5.jpg"   value="images/1sttheworld.myshopify.com/pillow-case-5.jpg">pillow-case-5.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Pink-1.jpg"   value="images/1sttheworld.myshopify.com/Pink-1.jpg">Pink-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/pink-1.jpg"   value="images/1sttheworld.myshopify.com/pink-1.jpg">pink-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Pink-1rvrgv.jpg"   value="images/1sttheworld.myshopify.com/Pink-1rvrgv.jpg">Pink-1rvrgv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/pink-2JFJFYJNYJY.jpg"   value="images/1sttheworld.myshopify.com/pink-2JFJFYJNYJY.jpg">pink-2JFJFYJNYJY.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Pink-11.jpg"   value="images/1sttheworld.myshopify.com/Pink-11.jpg">Pink-11.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/pink-55.jpg"   value="images/1sttheworld.myshopify.com/pink-55.jpg">pink-55.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Pink-1111.jpg"   value="images/1sttheworld.myshopify.com/Pink-1111.jpg">Pink-1111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Pink-11111.jpg"   value="images/1sttheworld.myshopify.com/Pink-11111.jpg">Pink-11111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Pink-111111.jpg"   value="images/1sttheworld.myshopify.com/Pink-111111.jpg">Pink-111111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/pink-bdhewfveuw.jpg"   value="images/1sttheworld.myshopify.com/pink-bdhewfveuw.jpg">pink-bdhewfveuw.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Pink-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/Pink-copy-hdfgdrgrdt.jpg">Pink-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Pink-fburyhguirjf.jpg"   value="images/1sttheworld.myshopify.com/Pink-fburyhguirjf.jpg">Pink-fburyhguirjf.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Pink-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/Pink-fergrgrgr.jpg">Pink-fergrgrgr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Pink-fr3fgr3yf.jpg"   value="images/1sttheworld.myshopify.com/Pink-fr3fgr3yf.jpg">Pink-fr3fgr3yf.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Pink-g45gy46yh.jpg"   value="images/1sttheworld.myshopify.com/Pink-g45gy46yh.jpg">Pink-g45gy46yh.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/pink-gdrgggtteg.jpg"   value="images/1sttheworld.myshopify.com/pink-gdrgggtteg.jpg">pink-gdrgggtteg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/pink-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/pink-gdrguyuuuuu.jpg">pink-gdrguyuuuuu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/pink-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/pink-hibiscus-copy-hdfgdrgrdt.jpg">pink-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/pink-mk-1.jpg"   value="images/1sttheworld.myshopify.com/pink-mk-1.jpg">pink-mk-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Pink-rgggrtgt.jpg"   value="images/1sttheworld.myshopify.com/Pink-rgggrtgt.jpg">Pink-rgggrtgt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Pink-wfcyugbvdhcfb.jpg"   value="images/1sttheworld.myshopify.com/Pink-wfcyugbvdhcfb.jpg">Pink-wfcyugbvdhcfb.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Pinkk-1.jpg"   value="images/1sttheworld.myshopify.com/Pinkk-1.jpg">Pinkk-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Poland-Hoodie.jpg"   value="images/1sttheworld.myshopify.com/Poland-Hoodie.jpg">Poland-Hoodie.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Poland-Polo-F.jpg"   value="images/1sttheworld.myshopify.com/Poland-Polo-F.jpg">Poland-Polo-F.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Poland-tshirt-f-.jpg"   value="images/1sttheworld.myshopify.com/Poland-tshirt-f-.jpg">Poland-tshirt-f-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Poland-ZHoodie.jpg"   value="images/1sttheworld.myshopify.com/Poland-ZHoodie.jpg">Poland-ZHoodie.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Polo-truoc-2.jpg"   value="images/1sttheworld.myshopify.com/Polo-truoc-2.jpg">Polo-truoc-2.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/PP-1.jpg"   value="images/1sttheworld.myshopify.com/PP-1.jpg">PP-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/pp-1.jpg"   value="images/1sttheworld.myshopify.com/pp-1.jpg">pp-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/pp11.jpg"   value="images/1sttheworld.myshopify.com/pp11.jpg">pp11.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Pt-1.jpg"   value="images/1sttheworld.myshopify.com/Pt-1.jpg">Pt-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Pt-5.jpg"   value="images/1sttheworld.myshopify.com/Pt-5.jpg">Pt-5.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/pt01.jpg"   value="images/1sttheworld.myshopify.com/pt01.jpg">pt01.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Puerto-Rico-Hoodie-Coqui-Frog-Custom-Mk.jpg"   value="images/1sttheworld.myshopify.com/Puerto-Rico-Hoodie-Coqui-Frog-Custom-Mk.jpg">Puerto-Rico-Hoodie-Coqui-Frog-Custom-Mk.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Purple-1.jpg"   value="images/1sttheworld.myshopify.com/Purple-1.jpg">Purple-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Purple-1fnejnc.jpg"   value="images/1sttheworld.myshopify.com/Purple-1fnejnc.jpg">Purple-1fnejnc.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/purple-2HFHYHYHY.jpg"   value="images/1sttheworld.myshopify.com/purple-2HFHYHYHY.jpg">purple-2HFHYHYHY.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Purple-11.jpg"   value="images/1sttheworld.myshopify.com/Purple-11.jpg">Purple-11.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/purple-55.jpg"   value="images/1sttheworld.myshopify.com/purple-55.jpg">purple-55.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Purple-1111.jpg"   value="images/1sttheworld.myshopify.com/Purple-1111.jpg">Purple-1111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Purple-11111.jpg"   value="images/1sttheworld.myshopify.com/Purple-11111.jpg">Purple-11111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Purple-111111.jpg"   value="images/1sttheworld.myshopify.com/Purple-111111.jpg">Purple-111111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Purple-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/Purple-copy-hdfgdrgrdt.jpg">Purple-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Purple-fcygdbfch.jpg"   value="images/1sttheworld.myshopify.com/Purple-fcygdbfch.jpg">Purple-fcygdbfch.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/purple-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/purple-fergrgrgr.jpg">purple-fergrgrgr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Purple-gdrgggtteg.jpg"   value="images/1sttheworld.myshopify.com/Purple-gdrgggtteg.jpg">Purple-gdrgggtteg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Purple-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/Purple-gdrguyuuuuu.jpg">Purple-gdrguyuuuuu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Purple-grgrvgrf.jpg"   value="images/1sttheworld.myshopify.com/Purple-grgrvgrf.jpg">Purple-grgrvgrf.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Purple-grwgvrg.jpg"   value="images/1sttheworld.myshopify.com/Purple-grwgvrg.jpg">Purple-grwgvrg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/purple-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/purple-hibiscus-copy-hdfgdrgrdt.jpg">purple-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Purple-iqgfdiuebfdejd.jpg"   value="images/1sttheworld.myshopify.com/Purple-iqgfdiuebfdejd.jpg">Purple-iqgfdiuebfdejd.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/purple-vncijdniudr.jpg"   value="images/1sttheworld.myshopify.com/purple-vncijdniudr.jpg">purple-vncijdniudr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Purple-ygtygyuy.jpg"   value="images/1sttheworld.myshopify.com/Purple-ygtygyuy.jpg">Purple-ygtygyuy.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Purplee-1.jpg"   value="images/1sttheworld.myshopify.com/Purplee-1.jpg">Purplee-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/qdefefef.jpg"   value="images/1sttheworld.myshopify.com/qdefefef.jpg">qdefefef.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/qdq.jpg"   value="images/1sttheworld.myshopify.com/qdq.jpg">qdq.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/qeqq.jpg"   value="images/1sttheworld.myshopify.com/qeqq.jpg">qeqq.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/qetfregtrhyt.jpg"   value="images/1sttheworld.myshopify.com/qetfregtrhyt.jpg">qetfregtrhyt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/qu-e23r3.jpg"   value="images/1sttheworld.myshopify.com/qu-e23r3.jpg">qu-e23r3.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/qu-er.png"   value="images/1sttheworld.myshopify.com/qu-er.png">qu-er.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Quilt-3.jpg"   value="images/1sttheworld.myshopify.com/Quilt-3.jpg">Quilt-3.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/quilt-bed-set-4.jpg"   value="images/1sttheworld.myshopify.com/quilt-bed-set-4.jpg">quilt-bed-set-4.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/quilt-bed-set-khong-chu.jpg"   value="images/1sttheworld.myshopify.com/quilt-bed-set-khong-chu.jpg">quilt-bed-set-khong-chu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/quilt-bed-set.jpg"   value="images/1sttheworld.myshopify.com/quilt-bed-set.jpg">quilt-bed-set.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/quilt-hvhv.jpg"   value="images/1sttheworld.myshopify.com/quilt-hvhv.jpg">quilt-hvhv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/re.jpg"   value="images/1sttheworld.myshopify.com/re.jpg">re.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Red-1.jpg"   value="images/1sttheworld.myshopify.com/Red-1.jpg">Red-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/red-1.jpg"   value="images/1sttheworld.myshopify.com/red-1.jpg">red-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Red-1fnejnc.jpg"   value="images/1sttheworld.myshopify.com/Red-1fnejnc.jpg">Red-1fnejnc.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/red-2WGREGRGR.jpg"   value="images/1sttheworld.myshopify.com/red-2WGREGRGR.jpg">red-2WGREGRGR.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Red-11.jpg"   value="images/1sttheworld.myshopify.com/Red-11.jpg">Red-11.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/red-55.jpg"   value="images/1sttheworld.myshopify.com/red-55.jpg">red-55.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Red-1111.jpg"   value="images/1sttheworld.myshopify.com/Red-1111.jpg">Red-1111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Red-11111.jpg"   value="images/1sttheworld.myshopify.com/Red-11111.jpg">Red-11111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Red-111111.jpg"   value="images/1sttheworld.myshopify.com/Red-111111.jpg">Red-111111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/red-byuwegfyuegdyu.jpg"   value="images/1sttheworld.myshopify.com/red-byuwegfyuegdyu.jpg">red-byuwegfyuegdyu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Red-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/Red-copy-hdfgdrgrdt.jpg">Red-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Red-ergtny.jpg"   value="images/1sttheworld.myshopify.com/Red-ergtny.jpg">Red-ergtny.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/red-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/red-fergrgrgr.jpg">red-fergrgrgr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Red-gdrgggtteg.jpg"   value="images/1sttheworld.myshopify.com/Red-gdrgggtteg.jpg">Red-gdrgggtteg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/red-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/red-gdrguyuuuuu.jpg">red-gdrguyuuuuu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Red-hbyrhbrb.jpg"   value="images/1sttheworld.myshopify.com/Red-hbyrhbrb.jpg">Red-hbyrhbrb.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/red-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/red-hibiscus-copy-hdfgdrgrdt.jpg">red-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/red-mk-1.jpg"   value="images/1sttheworld.myshopify.com/red-mk-1.jpg">red-mk-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Red-rfrgvtg.jpg"   value="images/1sttheworld.myshopify.com/Red-rfrgvtg.jpg">Red-rfrgvtg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Red-sgfchsbcfje.jpg"   value="images/1sttheworld.myshopify.com/Red-sgfchsbcfje.jpg">Red-sgfchsbcfje.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Red-ugvyhyg.jpg"   value="images/1sttheworld.myshopify.com/Red-ugvyhyg.jpg">Red-ugvyhyg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Red-vgegvrgv.jpg"   value="images/1sttheworld.myshopify.com/Red-vgegvrgv.jpg">Red-vgegvrgv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Red-ygvh.jpg"   value="images/1sttheworld.myshopify.com/Red-ygvh.jpg">Red-ygvh.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Redd-1.jpg"   value="images/1sttheworld.myshopify.com/Redd-1.jpg">Redd-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/regg-1.jpg"   value="images/1sttheworld.myshopify.com/regg-1.jpg">regg-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Reggae-1.jpg"   value="images/1sttheworld.myshopify.com/Reggae-1.jpg">Reggae-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Reggae-1fnejnc.jpg"   value="images/1sttheworld.myshopify.com/Reggae-1fnejnc.jpg">Reggae-1fnejnc.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/reggae-2GETGTEHBT.jpg"   value="images/1sttheworld.myshopify.com/reggae-2GETGTEHBT.jpg">reggae-2GETGTEHBT.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Reggae-11.jpg"   value="images/1sttheworld.myshopify.com/Reggae-11.jpg">Reggae-11.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/reggae-55.jpg"   value="images/1sttheworld.myshopify.com/reggae-55.jpg">reggae-55.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Reggae-1111.jpg"   value="images/1sttheworld.myshopify.com/Reggae-1111.jpg">Reggae-1111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Reggae-11111.jpg"   value="images/1sttheworld.myshopify.com/Reggae-11111.jpg">Reggae-11111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Reggae-111111.jpg"   value="images/1sttheworld.myshopify.com/Reggae-111111.jpg">Reggae-111111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Reggae-121212.jpg"   value="images/1sttheworld.myshopify.com/Reggae-121212.jpg">Reggae-121212.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/reggae-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/reggae-copy-hdfgdrgrdt.jpg">reggae-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Reggae-cwhebceh.jpg"   value="images/1sttheworld.myshopify.com/Reggae-cwhebceh.jpg">Reggae-cwhebceh.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/reggae-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/reggae-fergrgrgr.jpg">reggae-fergrgrgr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Reggae-frfvcvg.jpg"   value="images/1sttheworld.myshopify.com/Reggae-frfvcvg.jpg">Reggae-frfvcvg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/reggae-fshrfghjrsfvryuw.jpg"   value="images/1sttheworld.myshopify.com/reggae-fshrfghjrsfvryuw.jpg">reggae-fshrfghjrsfvryuw.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Reggae-gdrgggtteg.jpg"   value="images/1sttheworld.myshopify.com/Reggae-gdrgggtteg.jpg">Reggae-gdrgggtteg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Reggae-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/Reggae-gdrguyuuuuu.jpg">Reggae-gdrguyuuuuu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Reggae-gvtrhyuht.jpg"   value="images/1sttheworld.myshopify.com/Reggae-gvtrhyuht.jpg">Reggae-gvtrhyuht.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/reggae-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/reggae-hibiscus-copy-hdfgdrgrdt.jpg">reggae-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Reggae-hyghg.jpg"   value="images/1sttheworld.myshopify.com/Reggae-hyghg.jpg">Reggae-hyghg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Reggae-jjmythnt.jpg"   value="images/1sttheworld.myshopify.com/Reggae-jjmythnt.jpg">Reggae-jjmythnt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/reggae-mk-1.jpg"   value="images/1sttheworld.myshopify.com/reggae-mk-1.jpg">reggae-mk-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Reggae-vgvd.jpg"   value="images/1sttheworld.myshopify.com/Reggae-vgvd.jpg">Reggae-vgvd.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Reggaea-1.jpg"   value="images/1sttheworld.myshopify.com/Reggaea-1.jpg">Reggaea-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/regwreew.jpg"   value="images/1sttheworld.myshopify.com/regwreew.jpg">regwreew.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/romania-custom-hoodie.jpg"   value="images/1sttheworld.myshopify.com/romania-custom-hoodie.jpg">romania-custom-hoodie.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/romania-custom-polo-f.jpg"   value="images/1sttheworld.myshopify.com/romania-custom-polo-f.jpg">romania-custom-polo-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/romania-custom-tshirt-f.jpg"   value="images/1sttheworld.myshopify.com/romania-custom-tshirt-f.jpg">romania-custom-tshirt-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/romania-custom-zhoodie.jpg"   value="images/1sttheworld.myshopify.com/romania-custom-zhoodie.jpg">romania-custom-zhoodie.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/rtcyhu.jpg"   value="images/1sttheworld.myshopify.com/rtcyhu.jpg">rtcyhu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Saddle-Bag-11.jpg"   value="images/1sttheworld.myshopify.com/Saddle-Bag-11.jpg">Saddle-Bag-11.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/SCASC.jpg"   value="images/1sttheworld.myshopify.com/SCASC.jpg">SCASC.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/scf.jpg"   value="images/1sttheworld.myshopify.com/scf.jpg">scf.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/scghsucjvhs.jpg"   value="images/1sttheworld.myshopify.com/scghsucjvhs.jpg">scghsucjvhs.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/scotland-custom-hoodie-f.jpg"   value="images/1sttheworld.myshopify.com/scotland-custom-hoodie-f.jpg">scotland-custom-hoodie-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/scotland-custom-polo-f.jpg"   value="images/1sttheworld.myshopify.com/scotland-custom-polo-f.jpg">scotland-custom-polo-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/scotland-custom-tshirt-f.jpg"   value="images/1sttheworld.myshopify.com/scotland-custom-tshirt-f.jpg">scotland-custom-tshirt-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/scotland-custom-zhoodie-f.jpg"   value="images/1sttheworld.myshopify.com/scotland-custom-zhoodie-f.jpg">scotland-custom-zhoodie-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/scsadcds.jpg"   value="images/1sttheworld.myshopify.com/scsadcds.jpg">scsadcds.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/scsCS.jpg"   value="images/1sttheworld.myshopify.com/scsCS.jpg">scsCS.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/SCWFAVSC.jpg"   value="images/1sttheworld.myshopify.com/SCWFAVSC.jpg">SCWFAVSC.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sdeiugfcbjew.jpg"   value="images/1sttheworld.myshopify.com/sdeiugfcbjew.jpg">sdeiugfcbjew.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/SDSD.jpg"   value="images/1sttheworld.myshopify.com/SDSD.jpg">SDSD.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sdvcasv.jpg"   value="images/1sttheworld.myshopify.com/sdvcasv.jpg">sdvcasv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sfaed.jpg"   value="images/1sttheworld.myshopify.com/sfaed.jpg">sfaed.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sfasfasfaront-big-right-side-benth.jpg"   value="images/1sttheworld.myshopify.com/sfasfasfaront-big-right-side-benth.jpg">sfasfasfaront-big-right-side-benth.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sfdvdgfgfg.jpg"   value="images/1sttheworld.myshopify.com/sfdvdgfgfg.jpg">sfdvdgfgfg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sfegrthrthrttb.jpg"   value="images/1sttheworld.myshopify.com/sfegrthrthrttb.jpg">sfegrthrthrttb.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sfhiwfiw.jpg"   value="images/1sttheworld.myshopify.com/sfhiwfiw.jpg">sfhiwfiw.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sfjciuewview.jpg"   value="images/1sttheworld.myshopify.com/sfjciuewview.jpg">sfjciuewview.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sfsfsafvsafsfse-benth.jpg"   value="images/1sttheworld.myshopify.com/sfsfsafvsafsfse-benth.jpg">sfsfsafvsafsfse-benth.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sgwuwu.jpg"   value="images/1sttheworld.myshopify.com/sgwuwu.jpg">sgwuwu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/shceuiwgvciuew.jpg"   value="images/1sttheworld.myshopify.com/shceuiwgvciuew.jpg">shceuiwgvciuew.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/shcuewgvcuiewdhcn.jpg"   value="images/1sttheworld.myshopify.com/shcuewgvcuiewdhcn.jpg">shcuewgvcuiewdhcn.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/shcuyewgciue.jpg"   value="images/1sttheworld.myshopify.com/shcuyewgciue.jpg">shcuyewgciue.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/shdewhfuiej.jpg"   value="images/1sttheworld.myshopify.com/shdewhfuiej.jpg">shdewhfuiej.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Shoulder-Handbag-vfvgfv.jpg"   value="images/1sttheworld.myshopify.com/Shoulder-Handbag-vfvgfv.jpg">Shoulder-Handbag-vfvgfv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/siudgeiwugvjrn.jpg"   value="images/1sttheworld.myshopify.com/siudgeiwugvjrn.jpg">siudgeiwugvjrn.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sjfnwsfkw.jpg"   value="images/1sttheworld.myshopify.com/sjfnwsfkw.jpg">sjfnwsfkw.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sksklksskks.jpg"   value="images/1sttheworld.myshopify.com/sksklksskks.jpg">sksklksskks.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Sneaker-Ireland.jpg"   value="images/1sttheworld.myshopify.com/Sneaker-Ireland.jpg">Sneaker-Ireland.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/ss.jpg"   value="images/1sttheworld.myshopify.com/ss.jpg">ss.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/su-cwcf.jpg"   value="images/1sttheworld.myshopify.com/su-cwcf.jpg">su-cwcf.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/SU-DDWE.jpg"   value="images/1sttheworld.myshopify.com/SU-DDWE.jpg">SU-DDWE.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/svcscbhs.jpg"   value="images/1sttheworld.myshopify.com/svcscbhs.jpg">svcscbhs.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/svcshcbhs.jpg"   value="images/1sttheworld.myshopify.com/svcshcbhs.jpg">svcshcbhs.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/svedv.jpg"   value="images/1sttheworld.myshopify.com/svedv.jpg">svedv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sweden-hoodie-.jpg"   value="images/1sttheworld.myshopify.com/sweden-hoodie-.jpg">sweden-hoodie-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sweden-polo-f.jpg"   value="images/1sttheworld.myshopify.com/sweden-polo-f.jpg">sweden-polo-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sweden-tshirt-f-.jpg"   value="images/1sttheworld.myshopify.com/sweden-tshirt-f-.jpg">sweden-tshirt-f-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sweden-zhoodie-.jpg"   value="images/1sttheworld.myshopify.com/sweden-zhoodie-.jpg">sweden-zhoodie-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/swfewfew.jpg"   value="images/1sttheworld.myshopify.com/swfewfew.jpg">swfewfew.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/switzerland-custom-hoodie-f.jpg"   value="images/1sttheworld.myshopify.com/switzerland-custom-hoodie-f.jpg">switzerland-custom-hoodie-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/switzerland-custom-hoodie.jpg"   value="images/1sttheworld.myshopify.com/switzerland-custom-hoodie.jpg">switzerland-custom-hoodie.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/switzerland-custom-polo-f.jpg"   value="images/1sttheworld.myshopify.com/switzerland-custom-polo-f.jpg">switzerland-custom-polo-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/switzerland-custom-tshirt-f.jpg"   value="images/1sttheworld.myshopify.com/switzerland-custom-tshirt-f.jpg">switzerland-custom-tshirt-f.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/switzerland-custom-zhoodie.jpg"   value="images/1sttheworld.myshopify.com/switzerland-custom-zhoodie.jpg">switzerland-custom-zhoodie.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sxsxswdxw.jpg"   value="images/1sttheworld.myshopify.com/sxsxswdxw.jpg">sxsxswdxw.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/sydyewufgbjernv.jpg"   value="images/1sttheworld.myshopify.com/sydyewufgbjernv.jpg">sydyewufgbjernv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/tdctfcty.jpg"   value="images/1sttheworld.myshopify.com/tdctfcty.jpg">tdctfcty.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/tend-dgdg.jpg"   value="images/1sttheworld.myshopify.com/tend-dgdg.jpg">tend-dgdg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Tin-Sign.jpg"   value="images/1sttheworld.myshopify.com/Tin-Sign.jpg">Tin-Sign.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Toaowjj.jpg"   value="images/1sttheworld.myshopify.com/Toaowjj.jpg">Toaowjj.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Tote-Bag-gvyruhgb.jpg"   value="images/1sttheworld.myshopify.com/Tote-Bag-gvyruhgb.jpg">Tote-Bag-gvyruhgb.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Tote-Bag-hghvghv.jpg"   value="images/1sttheworld.myshopify.com/Tote-Bag-hghvghv.jpg">Tote-Bag-hghvghv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/trang-no.jpg"   value="images/1sttheworld.myshopify.com/trang-no.jpg">trang-no.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/truoc-fjkdsfjd.jpg"   value="images/1sttheworld.myshopify.com/truoc-fjkdsfjd.jpg">truoc-fjkdsfjd.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/tttsuxduai.jpg"   value="images/1sttheworld.myshopify.com/tttsuxduai.jpg">tttsuxduai.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Turquoise-1.jpg"   value="images/1sttheworld.myshopify.com/Turquoise-1.jpg">Turquoise-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Turquoise-1fnejnc.jpg"   value="images/1sttheworld.myshopify.com/Turquoise-1fnejnc.jpg">Turquoise-1fnejnc.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Turquoise-11.jpg"   value="images/1sttheworld.myshopify.com/Turquoise-11.jpg">Turquoise-11.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Turquoise-21.jpg"   value="images/1sttheworld.myshopify.com/Turquoise-21.jpg">Turquoise-21.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Turquoise-1111.jpg"   value="images/1sttheworld.myshopify.com/Turquoise-1111.jpg">Turquoise-1111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Turquoise-11111.jpg"   value="images/1sttheworld.myshopify.com/Turquoise-11111.jpg">Turquoise-11111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Turquoise-mk-1.jpg"   value="images/1sttheworld.myshopify.com/Turquoise-mk-1.jpg">Turquoise-mk-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Turquoisee-1.jpg"   value="images/1sttheworld.myshopify.com/Turquoisee-1.jpg">Turquoisee-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/u-cfwq.jpg"   value="images/1sttheworld.myshopify.com/u-cfwq.jpg">u-cfwq.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/u-dwdcwovered.jpg"   value="images/1sttheworld.myshopify.com/u-dwdcwovered.jpg">u-dwdcwovered.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/u-dwdw.jpg"   value="images/1sttheworld.myshopify.com/u-dwdw.jpg">u-dwdw.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/u-efeq.jpg"   value="images/1sttheworld.myshopify.com/u-efeq.jpg">u-efeq.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/u-egregrege.jpg"   value="images/1sttheworld.myshopify.com/u-egregrege.jpg">u-egregrege.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/u-erhgefweg.jpg"   value="images/1sttheworld.myshopify.com/u-erhgefweg.jpg">u-erhgefweg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/u-ewfgew.jpg"   value="images/1sttheworld.myshopify.com/u-ewfgew.jpg">u-ewfgew.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/u-hciuewigfew.jpg"   value="images/1sttheworld.myshopify.com/u-hciuewigfew.jpg">u-hciuewigfew.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/U-HDIWQBJU.jpg"   value="images/1sttheworld.myshopify.com/U-HDIWQBJU.jpg">U-HDIWQBJU.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/u-tfgewhtjmntbrve.jpg"   value="images/1sttheworld.myshopify.com/u-tfgewhtjmntbrve.jpg">u-tfgewhtjmntbrve.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/u-uidgiuefe.jpg"   value="images/1sttheworld.myshopify.com/u-uidgiuefe.jpg">u-uidgiuefe.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Untitled-1.jpg"   value="images/1sttheworld.myshopify.com/Untitled-1.jpg">Untitled-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/uydfgiewjcm.jpg"   value="images/1sttheworld.myshopify.com/uydfgiewjcm.jpg">uydfgiewjcm.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/vbierjbviuew.jpg"   value="images/1sttheworld.myshopify.com/vbierjbviuew.jpg">vbierjbviuew.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/vedvedeertical-line-wooden-bg-1200x1200-.jpg"   value="images/1sttheworld.myshopify.com/vedvedeertical-line-wooden-bg-1200x1200-.jpg">vedvedeertical-line-wooden-bg-1200x1200-.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/vfedv.jpg"   value="images/1sttheworld.myshopify.com/vfedv.jpg">vfedv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/vgdsgsfbsdsgss.jpg"   value="images/1sttheworld.myshopify.com/vgdsgsfbsdsgss.jpg">vgdsgsfbsdsgss.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/wall-clock-mockup1-.png"   value="images/1sttheworld.myshopify.com/wall-clock-mockup1-.png">wall-clock-mockup1-.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/wall-clock.png"   value="images/1sttheworld.myshopify.com/wall-clock.png">wall-clock.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Wallet-uifhueirbf.jpg"   value="images/1sttheworld.myshopify.com/Wallet-uifhueirbf.jpg">Wallet-uifhueirbf.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/wdwdwr-Tote-Bag.jpg"   value="images/1sttheworld.myshopify.com/wdwdwr-Tote-Bag.jpg">wdwdwr-Tote-Bag.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/wdwwd.jpg"   value="images/1sttheworld.myshopify.com/wdwwd.jpg">wdwwd.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/wfefwrew.jpg"   value="images/1sttheworld.myshopify.com/wfefwrew.jpg">wfefwrew.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/wfeqfe.jpg"   value="images/1sttheworld.myshopify.com/wfeqfe.jpg">wfeqfe.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/wfeqfgrehg.jpg"   value="images/1sttheworld.myshopify.com/wfeqfgrehg.jpg">wfeqfgrehg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/wfoiewgnkreg.jpg"   value="images/1sttheworld.myshopify.com/wfoiewgnkreg.jpg">wfoiewgnkreg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/White-gegtgtht.jpg"   value="images/1sttheworld.myshopify.com/White-gegtgtht.jpg">White-gegtgtht.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/WL-O-N.jpg"   value="images/1sttheworld.myshopify.com/WL-O-N.jpg">WL-O-N.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Women-Wallet-mockup-jhdbhjebd.jpg"   value="images/1sttheworld.myshopify.com/Women-Wallet-mockup-jhdbhjebd.jpg">Women-Wallet-mockup-jhdbhjebd.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Womens-Wallet-gvgfyug.jpg"   value="images/1sttheworld.myshopify.com/Womens-Wallet-gvgfyug.jpg">Womens-Wallet-gvgfyug.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/wwhite-no.png"   value="images/1sttheworld.myshopify.com/wwhite-no.png">wwhite-no.png</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/www.jpg"   value="images/1sttheworld.myshopify.com/www.jpg">www.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/xdsacsa.jpg"   value="images/1sttheworld.myshopify.com/xdsacsa.jpg">xdsacsa.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/y-ufusfss.jpg"   value="images/1sttheworld.myshopify.com/y-ufusfss.jpg">y-ufusfss.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Yellow-1.jpg"   value="images/1sttheworld.myshopify.com/Yellow-1.jpg">Yellow-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Yellow-1fnejnc.jpg"   value="images/1sttheworld.myshopify.com/Yellow-1fnejnc.jpg">Yellow-1fnejnc.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Yellow-11.jpg"   value="images/1sttheworld.myshopify.com/Yellow-11.jpg">Yellow-11.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/yellow-55.jpg"   value="images/1sttheworld.myshopify.com/yellow-55.jpg">yellow-55.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Yellow-1111.jpg"   value="images/1sttheworld.myshopify.com/Yellow-1111.jpg">Yellow-1111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Yellow-11111.jpg"   value="images/1sttheworld.myshopify.com/Yellow-11111.jpg">Yellow-11111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Yellow-111111.jpg"   value="images/1sttheworld.myshopify.com/Yellow-111111.jpg">Yellow-111111.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Yellow-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/Yellow-copy-hdfgdrgrdt.jpg">Yellow-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Yellow-evgregvfre.jpg"   value="images/1sttheworld.myshopify.com/Yellow-evgregvfre.jpg">Yellow-evgregvfre.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/yellow-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/yellow-fergrgrgr.jpg">yellow-fergrgrgr.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Yellow-frvrvrv.jpg"   value="images/1sttheworld.myshopify.com/Yellow-frvrvrv.jpg">Yellow-frvrvrv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Yellow-gdrgggtteg.jpg"   value="images/1sttheworld.myshopify.com/Yellow-gdrgggtteg.jpg">Yellow-gdrgggtteg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/yellow-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/yellow-gdrguyuuuuu.jpg">yellow-gdrguyuuuuu.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/yellow-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/yellow-hibiscus-copy-hdfgdrgrdt.jpg">yellow-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/yellow-hjbdhcbufde.jpg"   value="images/1sttheworld.myshopify.com/yellow-hjbdhcbufde.jpg">yellow-hjbdhcbufde.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Yellow-hytjyj.jpg"   value="images/1sttheworld.myshopify.com/Yellow-hytjyj.jpg">Yellow-hytjyj.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/yellow-mk-1.jpg"   value="images/1sttheworld.myshopify.com/yellow-mk-1.jpg">yellow-mk-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Yellow-vfevrvfrv.jpg"   value="images/1sttheworld.myshopify.com/Yellow-vfevrvfrv.jpg">Yellow-vfevrvfrv.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/yellow-WFWEF-VVFFRRF.jpg"   value="images/1sttheworld.myshopify.com/yellow-WFWEF-VVFFRRF.jpg">yellow-WFWEF-VVFFRRF.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/Yelloww-1.jpg"   value="images/1sttheworld.myshopify.com/Yelloww-1.jpg">Yelloww-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/YGSWIUFJ.jpg"   value="images/1sttheworld.myshopify.com/YGSWIUFJ.jpg">YGSWIUFJ.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/yl-1.jpg"   value="images/1sttheworld.myshopify.com/yl-1.jpg">yl-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/YL-1.jpg"   value="images/1sttheworld.myshopify.com/YL-1.jpg">YL-1.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/ytfgfggfgt.jpg"   value="images/1sttheworld.myshopify.com/ytfgfggfgt.jpg">ytfgfggfgt.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/yusyfgewjg.jpg"   value="images/1sttheworld.myshopify.com/yusyfgewjg.jpg">yusyfgewjg.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/zip.jpg"   value="images/1sttheworld.myshopify.com/zip.jpg">zip.jpg</option><option class="nonvariant uploadedimg" data-value="images/1sttheworld.myshopify.com/zipzip.jpg"   value="images/1sttheworld.myshopify.com/zipzip.jpg">zipzip.jpg</option>';var imagelist_s='<option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/-Back-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/-Back-quilt-bed-set-1.jpg">-Back-quilt-bed-set-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/-Blue-quilt-bed-set-2.jpg"   value="images/1sttheworld.myshopify.com/-Blue-quilt-bed-set-2.jpg">-Blue-quilt-bed-set-2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/-Gold-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/-Gold-quilt-bed-set-1.jpg">-Gold-quilt-bed-set-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/-Gray-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/-Gray-quilt-bed-set-1.jpg">-Gray-quilt-bed-set-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/-Gray-quilt-bed-set-2.jpg"   value="images/1sttheworld.myshopify.com/-Gray-quilt-bed-set-2.jpg">-Gray-quilt-bed-set-2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/-Green-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/-Green-quilt-bed-set-1.jpg">-Green-quilt-bed-set-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/-mk-pillow.jpg"   value="images/1sttheworld.myshopify.com/-mk-pillow.jpg">-mk-pillow.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/-Red-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/-Red-quilt-bed-set-1.jpg">-Red-quilt-bed-set-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/-Reggae-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/-Reggae-quilt-bed-set-1.jpg">-Reggae-quilt-bed-set-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/-Set-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/-Set-quilt-bed-set-1.jpg">-Set-quilt-bed-set-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/-Yellow-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/-Yellow-quilt-bed-set-1.jpg">-Yellow-quilt-bed-set-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/.jpg"   value="images/1sttheworld.myshopify.com/.jpg">.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/1-Black-no.jpg"   value="images/1sttheworld.myshopify.com/1-Black-no.jpg">1-Black-no.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/1-black-No.jpg"   value="images/1sttheworld.myshopify.com/1-black-No.jpg">1-black-No.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/1-thththt.jpg"   value="images/1sttheworld.myshopify.com/1-thththt.jpg">1-thththt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/1.jpg"   value="images/1sttheworld.myshopify.com/1.jpg">1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/2.jpg"   value="images/1sttheworld.myshopify.com/2.jpg">2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/2dffrgffr.jpg"   value="images/1sttheworld.myshopify.com/2dffrgffr.jpg">2dffrgffr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/3-te-n-walledcdt-women.jpg"   value="images/1sttheworld.myshopify.com/3-te-n-walledcdt-women.jpg">3-te-n-walledcdt-women.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/3-te-n-wallet-wdscdmen.jpg"   value="images/1sttheworld.myshopify.com/3-te-n-wallet-wdscdmen.jpg">3-te-n-wallet-wdscdmen.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/3-te-n-wallet-women-Rdcdecovered-copy.jpg"   value="images/1sttheworld.myshopify.com/3-te-n-wallet-women-Rdcdecovered-copy.jpg">3-te-n-wallet-women-Rdcdecovered-copy.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/3-te-n-wallet-women-Recovered.jpg"   value="images/1sttheworld.myshopify.com/3-te-n-wallet-women-Recovered.jpg">3-te-n-wallet-women-Recovered.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/3.jpg"   value="images/1sttheworld.myshopify.com/3.jpg">3.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/3a.jpg"   value="images/1sttheworld.myshopify.com/3a.jpg">3a.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/3e-33e32.jpg"   value="images/1sttheworld.myshopify.com/3e-33e32.jpg">3e-33e32.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/4.jpg"   value="images/1sttheworld.myshopify.com/4.jpg">4.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/4linn.jpg"   value="images/1sttheworld.myshopify.com/4linn.jpg">4linn.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/4t423.jpg"   value="images/1sttheworld.myshopify.com/4t423.jpg">4t423.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/4wwfw-strap.jpg"   value="images/1sttheworld.myshopify.com/4wwfw-strap.jpg">4wwfw-strap.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/5.jpg"   value="images/1sttheworld.myshopify.com/5.jpg">5.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/6.jpg"   value="images/1sttheworld.myshopify.com/6.jpg">6.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/7.jpg"   value="images/1sttheworld.myshopify.com/7.jpg">7.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/8.jpg"   value="images/1sttheworld.myshopify.com/8.jpg">8.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/9.jpg"   value="images/1sttheworld.myshopify.com/9.jpg">9.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/10.jpg"   value="images/1sttheworld.myshopify.com/10.jpg">10.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/10lin.jpg"   value="images/1sttheworld.myshopify.com/10lin.jpg">10lin.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/11.jpg"   value="images/1sttheworld.myshopify.com/11.jpg">11.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/11l.jpg"   value="images/1sttheworld.myshopify.com/11l.jpg">11l.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/11lin.jpg"   value="images/1sttheworld.myshopify.com/11lin.jpg">11lin.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/12.jpg"   value="images/1sttheworld.myshopify.com/12.jpg">12.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/12v41355.jpg"   value="images/1sttheworld.myshopify.com/12v41355.jpg">12v41355.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/33.jpg"   value="images/1sttheworld.myshopify.com/33.jpg">33.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/66.jpg"   value="images/1sttheworld.myshopify.com/66.jpg">66.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/77.jpg"   value="images/1sttheworld.myshopify.com/77.jpg">77.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/657k88.jpg"   value="images/1sttheworld.myshopify.com/657k88.jpg">657k88.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/888.jpg"   value="images/1sttheworld.myshopify.com/888.jpg">888.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/1111.jpg"   value="images/1sttheworld.myshopify.com/1111.jpg">1111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/1111linnn.jpg"   value="images/1sttheworld.myshopify.com/1111linnn.jpg">1111linnn.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/1112.jpg"   value="images/1sttheworld.myshopify.com/1112.jpg">1112.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/1113.jpg"   value="images/1sttheworld.myshopify.com/1113.jpg">1113.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/1114.jpg"   value="images/1sttheworld.myshopify.com/1114.jpg">1114.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/3243t43.jpg"   value="images/1sttheworld.myshopify.com/3243t43.jpg">3243t43.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/3333.jpg"   value="images/1sttheworld.myshopify.com/3333.jpg">3333.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/4343g4.jpg"   value="images/1sttheworld.myshopify.com/4343g4.jpg">4343g4.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/10230-0-0x2-0c6bf86d-05ff-4228-8a56-ba58909378aa-1024x1024.jpg"   value="images/1sttheworld.myshopify.com/10230-0-0x2-0c6bf86d-05ff-4228-8a56-ba58909378aa-1024x1024.jpg">10230-0-0x2-0c6bf86d-05ff-4228-8a56-ba58909378aa-1024x1024.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/10230-0-0x2-81343f19-d0e4-4062-937d-1de30a67e55a.jpg"   value="images/1sttheworld.myshopify.com/10230-0-0x2-81343f19-d0e4-4062-937d-1de30a67e55a.jpg">10230-0-0x2-81343f19-d0e4-4062-937d-1de30a67e55a.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/10230-0-0x2-bd785642-cdfd-449d-a676-76e6ec123fe5.jpg"   value="images/1sttheworld.myshopify.com/10230-0-0x2-bd785642-cdfd-449d-a676-76e6ec123fe5.jpg">10230-0-0x2-bd785642-cdfd-449d-a676-76e6ec123fe5.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/A-DAXAX.jpg"   value="images/1sttheworld.myshopify.com/A-DAXAX.jpg">A-DAXAX.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/a3.jpg"   value="images/1sttheworld.myshopify.com/a3.jpg">a3.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/A101.jpg"   value="images/1sttheworld.myshopify.com/A101.jpg">A101.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/a102.jpg"   value="images/1sttheworld.myshopify.com/a102.jpg">a102.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/A103.jpg"   value="images/1sttheworld.myshopify.com/A103.jpg">A103.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/A104.jpg"   value="images/1sttheworld.myshopify.com/A104.jpg">A104.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/A105.jpg"   value="images/1sttheworld.myshopify.com/A105.jpg">A105.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/adaaa.jpg"   value="images/1sttheworld.myshopify.com/adaaa.jpg">adaaa.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/adgwiuqfhiue.jpg"   value="images/1sttheworld.myshopify.com/adgwiuqfhiue.jpg">adgwiuqfhiue.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/alba1-1024x1024.jpg"   value="images/1sttheworld.myshopify.com/alba1-1024x1024.jpg">alba1-1024x1024.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/American-Samoa-Custom-hoodie-.jpg"   value="images/1sttheworld.myshopify.com/American-Samoa-Custom-hoodie-.jpg">American-Samoa-Custom-hoodie-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/American-Samoa-Custom-Polo-.jpg"   value="images/1sttheworld.myshopify.com/American-Samoa-Custom-Polo-.jpg">American-Samoa-Custom-Polo-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/American-Samoa-Custom-TShirt.jpg"   value="images/1sttheworld.myshopify.com/American-Samoa-Custom-TShirt.jpg">American-Samoa-Custom-TShirt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/American-Samoa-Custom-Zhoodie-.jpg"   value="images/1sttheworld.myshopify.com/American-Samoa-Custom-Zhoodie-.jpg">American-Samoa-Custom-Zhoodie-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/American-Samoa-Hoodie-Coat-Of-Arms-Polynesian-Wave-Gold-Custom-TH5.jpg"   value="images/1sttheworld.myshopify.com/American-Samoa-Hoodie-Coat-Of-Arms-Polynesian-Wave-Gold-Custom-TH5.jpg">American-Samoa-Hoodie-Coat-Of-Arms-Polynesian-Wave-Gold-Custom-TH5.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Argentina-F-.jpg"   value="images/1sttheworld.myshopify.com/Argentina-F-.jpg">Argentina-F-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Argentina-F-Polo-.jpg"   value="images/1sttheworld.myshopify.com/Argentina-F-Polo-.jpg">Argentina-F-Polo-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Argentina-F-TShirt-.jpg"   value="images/1sttheworld.myshopify.com/Argentina-F-TShirt-.jpg">Argentina-F-TShirt-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Argentina-F-Zhoodie-.jpg"   value="images/1sttheworld.myshopify.com/Argentina-F-Zhoodie-.jpg">Argentina-F-Zhoodie-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/AS1.jpg"   value="images/1sttheworld.myshopify.com/AS1.jpg">AS1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/asdasd12.jpg"   value="images/1sttheworld.myshopify.com/asdasd12.jpg">asdasd12.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/au-6.png"   value="images/1sttheworld.myshopify.com/au-6.png">au-6.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/austria-custom-hoodie-f-.jpg"   value="images/1sttheworld.myshopify.com/austria-custom-hoodie-f-.jpg">austria-custom-hoodie-f-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/austria-custom-polo-f.jpg"   value="images/1sttheworld.myshopify.com/austria-custom-polo-f.jpg">austria-custom-polo-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/austria-custom-tshirt-f-.jpg"   value="images/1sttheworld.myshopify.com/austria-custom-tshirt-f-.jpg">austria-custom-tshirt-f-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/austria-custom-zhoodie-f-.jpg"   value="images/1sttheworld.myshopify.com/austria-custom-zhoodie-f-.jpg">austria-custom-zhoodie-f-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Austrian-Empire-hoodie.jpg"   value="images/1sttheworld.myshopify.com/Austrian-Empire-hoodie.jpg">Austrian-Empire-hoodie.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Austrian-Empire-polo-f-.jpg"   value="images/1sttheworld.myshopify.com/Austrian-Empire-polo-f-.jpg">Austrian-Empire-polo-f-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Austrian-Empire-tshirt-f.jpg"   value="images/1sttheworld.myshopify.com/Austrian-Empire-tshirt-f.jpg">Austrian-Empire-tshirt-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Austrian-Empire-Zhoodie.jpg"   value="images/1sttheworld.myshopify.com/Austrian-Empire-Zhoodie.jpg">Austrian-Empire-Zhoodie.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/backpack-11.jpg"   value="images/1sttheworld.myshopify.com/backpack-11.jpg">backpack-11.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-1.jpg"   value="images/1sttheworld.myshopify.com/Banner-1.jpg">Banner-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-Albania-Broken-White.jpg"   value="images/1sttheworld.myshopify.com/Banner-Albania-Broken-White.jpg">Banner-Albania-Broken-White.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-Albania-Broken.jpg"   value="images/1sttheworld.myshopify.com/Banner-Albania-Broken.jpg">Banner-Albania-Broken.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-Barbados-Broken-White.jpg"   value="images/1sttheworld.myshopify.com/Banner-Barbados-Broken-White.jpg">Banner-Barbados-Broken-White.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-Barbados-Broken.jpg"   value="images/1sttheworld.myshopify.com/Banner-Barbados-Broken.jpg">Banner-Barbados-Broken.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-Lithuania-Custom-White.jpg"   value="images/1sttheworld.myshopify.com/Banner-Lithuania-Custom-White.jpg">Banner-Lithuania-Custom-White.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-Lithuania-Custom.jpg"   value="images/1sttheworld.myshopify.com/Banner-Lithuania-Custom.jpg">Banner-Lithuania-Custom.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/banner-no-1.jpg"   value="images/1sttheworld.myshopify.com/banner-no-1.jpg">banner-no-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-NZ-Custom.jpg"   value="images/1sttheworld.myshopify.com/Banner-NZ-Custom.jpg">Banner-NZ-Custom.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-NZ-Custom2.jpg"   value="images/1sttheworld.myshopify.com/Banner-NZ-Custom2.jpg">Banner-NZ-Custom2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-NZ-Customaaa.jpg"   value="images/1sttheworld.myshopify.com/Banner-NZ-Customaaa.jpg">Banner-NZ-Customaaa.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-NZ-White-Custom.jpg"   value="images/1sttheworld.myshopify.com/Banner-NZ-White-Custom.jpg">Banner-NZ-White-Custom.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-NZ-White-Custom2.jpg"   value="images/1sttheworld.myshopify.com/Banner-NZ-White-Custom2.jpg">Banner-NZ-White-Custom2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-NZ-White-Custom3.jpg"   value="images/1sttheworld.myshopify.com/Banner-NZ-White-Custom3.jpg">Banner-NZ-White-Custom3.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-NZ-White-Custom3aaa.jpg"   value="images/1sttheworld.myshopify.com/Banner-NZ-White-Custom3aaa.jpg">Banner-NZ-White-Custom3aaa.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-Serbia-Broken-White.jpg"   value="images/1sttheworld.myshopify.com/Banner-Serbia-Broken-White.jpg">Banner-Serbia-Broken-White.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-Serbia-Broken.jpg"   value="images/1sttheworld.myshopify.com/Banner-Serbia-Broken.jpg">Banner-Serbia-Broken.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-Swiss-Custom.jpg"   value="images/1sttheworld.myshopify.com/Banner-Swiss-Custom.jpg">Banner-Swiss-Custom.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-Swiss-Custom2.jpg"   value="images/1sttheworld.myshopify.com/Banner-Swiss-Custom2.jpg">Banner-Swiss-Custom2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-Swiss-White-Custom.jpg"   value="images/1sttheworld.myshopify.com/Banner-Swiss-White-Custom.jpg">Banner-Swiss-White-Custom.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Banner-Swiss-White-Custom2.jpg"   value="images/1sttheworld.myshopify.com/Banner-Swiss-White-Custom2.jpg">Banner-Swiss-White-Custom2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Barbados-Custom-hoodie-.jpg"   value="images/1sttheworld.myshopify.com/Barbados-Custom-hoodie-.jpg">Barbados-Custom-hoodie-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Barbados-Custom-hoodie.jpg"   value="images/1sttheworld.myshopify.com/Barbados-Custom-hoodie.jpg">Barbados-Custom-hoodie.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Barbados-Custom-polo-mk-f-.jpg"   value="images/1sttheworld.myshopify.com/Barbados-Custom-polo-mk-f-.jpg">Barbados-Custom-polo-mk-f-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Barbados-Custom-tshirt-f.jpg"   value="images/1sttheworld.myshopify.com/Barbados-Custom-tshirt-f.jpg">Barbados-Custom-tshirt-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Barbados-Custom-Zhoodie.jpg"   value="images/1sttheworld.myshopify.com/Barbados-Custom-Zhoodie.jpg">Barbados-Custom-Zhoodie.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Base34ball-Jersey-1.jpg"   value="images/1sttheworld.myshopify.com/Base34ball-Jersey-1.jpg">Base34ball-Jersey-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/baseballJersey-front-WB-NT.jpg"   value="images/1sttheworld.myshopify.com/baseballJersey-front-WB-NT.jpg">baseballJersey-front-WB-NT.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/baseballJersey-front-WB-NT.png"   value="images/1sttheworld.myshopify.com/baseballJersey-front-WB-NT.png">baseballJersey-front-WB-NT.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Bed-11.jpg"   value="images/1sttheworld.myshopify.com/Bed-11.jpg">Bed-11.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Bedding-Set-Blue-1.jpg"   value="images/1sttheworld.myshopify.com/Bedding-Set-Blue-1.jpg">Bedding-Set-Blue-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Bedding-Set-Gold-1.jpg"   value="images/1sttheworld.myshopify.com/Bedding-Set-Gold-1.jpg">Bedding-Set-Gold-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Bedding-Set-Gray-1.jpg"   value="images/1sttheworld.myshopify.com/Bedding-Set-Gray-1.jpg">Bedding-Set-Gray-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Bedding-Set-Green-1.jpg"   value="images/1sttheworld.myshopify.com/Bedding-Set-Green-1.jpg">Bedding-Set-Green-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Bedding-Set-Red-1.jpg"   value="images/1sttheworld.myshopify.com/Bedding-Set-Red-1.jpg">Bedding-Set-Red-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Bedding-Set-Reggae-2.jpg"   value="images/1sttheworld.myshopify.com/Bedding-Set-Reggae-2.jpg">Bedding-Set-Reggae-2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Bedding-Set-Yellow-1.jpg"   value="images/1sttheworld.myshopify.com/Bedding-Set-Yellow-1.jpg">Bedding-Set-Yellow-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/black-.png"   value="images/1sttheworld.myshopify.com/black-.png">black-.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Black-1-no.jpg"   value="images/1sttheworld.myshopify.com/Black-1-no.jpg">Black-1-no.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/black-1frfr3f.jpg"   value="images/1sttheworld.myshopify.com/black-1frfr3f.jpg">black-1frfr3f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/black-frefrfrf.jpg"   value="images/1sttheworld.myshopify.com/black-frefrfrf.jpg">black-frefrfrf.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/black-no.jpg"   value="images/1sttheworld.myshopify.com/black-no.jpg">black-no.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/black.png"   value="images/1sttheworld.myshopify.com/black.png">black.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-1.jpg"   value="images/1sttheworld.myshopify.com/Blue-1.jpg">Blue-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/blue-1.jpg"   value="images/1sttheworld.myshopify.com/blue-1.jpg">blue-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/blue-1frfrf.jpg"   value="images/1sttheworld.myshopify.com/blue-1frfrf.jpg">blue-1frfrf.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/blue-2HGDHTEHT.jpg"   value="images/1sttheworld.myshopify.com/blue-2HGDHTEHT.jpg">blue-2HGDHTEHT.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-11.jpg"   value="images/1sttheworld.myshopify.com/Blue-11.jpg">Blue-11.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/blue-55.jpg"   value="images/1sttheworld.myshopify.com/blue-55.jpg">blue-55.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-1111.jpg"   value="images/1sttheworld.myshopify.com/Blue-1111.jpg">Blue-1111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-11111.jpg"   value="images/1sttheworld.myshopify.com/Blue-11111.jpg">Blue-11111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-bfhdbhj.jpg"   value="images/1sttheworld.myshopify.com/Blue-bfhdbhj.jpg">Blue-bfhdbhj.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-cfdfcc.jpg"   value="images/1sttheworld.myshopify.com/Blue-cfdfcc.jpg">Blue-cfdfcc.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/blue-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/blue-copy-hdfgdrgrdt.jpg">blue-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/blue-defffr.jpg"   value="images/1sttheworld.myshopify.com/blue-defffr.jpg">blue-defffr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-defwhfc.jpg"   value="images/1sttheworld.myshopify.com/Blue-defwhfc.jpg">Blue-defwhfc.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/blue-fbvfdgbgbg.jpg"   value="images/1sttheworld.myshopify.com/blue-fbvfdgbgbg.jpg">blue-fbvfdgbgbg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-fefvref.jpg"   value="images/1sttheworld.myshopify.com/Blue-fefvref.jpg">Blue-fefvref.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/blue-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/blue-fergrgrgr.jpg">blue-fergrgrgr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-frfrf.jpg"   value="images/1sttheworld.myshopify.com/Blue-frfrf.jpg">Blue-frfrf.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-frfrfr.jpg"   value="images/1sttheworld.myshopify.com/Blue-frfrfr.jpg">Blue-frfrfr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-gdrgggtteg.jpg"   value="images/1sttheworld.myshopify.com/Blue-gdrgggtteg.jpg">Blue-gdrgggtteg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/Blue-gdrguyuuuuu.jpg">Blue-gdrguyuuuuu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-gghyhy5t4r.jpg"   value="images/1sttheworld.myshopify.com/Blue-gghyhy5t4r.jpg">Blue-gghyhy5t4r.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-gtgbtrgb.jpg"   value="images/1sttheworld.myshopify.com/Blue-gtgbtrgb.jpg">Blue-gtgbtrgb.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/blue-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/blue-hibiscus-copy-hdfgdrgrdt.jpg">blue-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-hvhgv.jpg"   value="images/1sttheworld.myshopify.com/Blue-hvhgv.jpg">Blue-hvhgv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-quilt-bed-set-1.jpg"   value="images/1sttheworld.myshopify.com/Blue-quilt-bed-set-1.jpg">Blue-quilt-bed-set-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Blue-vdfvf.jpg"   value="images/1sttheworld.myshopify.com/Blue-vdfvf.jpg">Blue-vdfvf.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/bomber-men-truoc-2-.jpg"   value="images/1sttheworld.myshopify.com/bomber-men-truoc-2-.jpg">bomber-men-truoc-2-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/bomber-women-truoc-2-.jpg"   value="images/1sttheworld.myshopify.com/bomber-women-truoc-2-.jpg">bomber-women-truoc-2-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/boston-sneakers-2.jpg"   value="images/1sttheworld.myshopify.com/boston-sneakers-2.jpg">boston-sneakers-2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/boston-sneakers-3.jpg"   value="images/1sttheworld.myshopify.com/boston-sneakers-3.jpg">boston-sneakers-3.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/boston-sneakers-4.jpg"   value="images/1sttheworld.myshopify.com/boston-sneakers-4.jpg">boston-sneakers-4.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/both-views-7kx7k.jpg"   value="images/1sttheworld.myshopify.com/both-views-7kx7k.jpg">both-views-7kx7k.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Canada-Custom-MK-Hoodie-F.jpg"   value="images/1sttheworld.myshopify.com/Canada-Custom-MK-Hoodie-F.jpg">Canada-Custom-MK-Hoodie-F.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Canada-Custom-Polo-F.jpg"   value="images/1sttheworld.myshopify.com/Canada-Custom-Polo-F.jpg">Canada-Custom-Polo-F.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Canada-Custom-tshirt-F.jpg"   value="images/1sttheworld.myshopify.com/Canada-Custom-tshirt-F.jpg">Canada-Custom-tshirt-F.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Canada-Custom-Zhoodie-.jpg"   value="images/1sttheworld.myshopify.com/Canada-Custom-Zhoodie-.jpg">Canada-Custom-Zhoodie-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Car-Seat-mk.jpg"   value="images/1sttheworld.myshopify.com/Car-Seat-mk.jpg">Car-Seat-mk.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/cdvs.jpg"   value="images/1sttheworld.myshopify.com/cdvs.jpg">cdvs.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/cdvsbvr.jpg"   value="images/1sttheworld.myshopify.com/cdvsbvr.jpg">cdvsbvr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Chicago-Sneakers-2.jpg"   value="images/1sttheworld.myshopify.com/Chicago-Sneakers-2.jpg">Chicago-Sneakers-2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Chicago-Sneakers-3.jpg"   value="images/1sttheworld.myshopify.com/Chicago-Sneakers-3.jpg">Chicago-Sneakers-3.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Chicago-Sneakers-4.jpg"   value="images/1sttheworld.myshopify.com/Chicago-Sneakers-4.jpg">Chicago-Sneakers-4.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/CSCSAAS.jpg"   value="images/1sttheworld.myshopify.com/CSCSAAS.jpg">CSCSAAS.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Ct-no.jpg"   value="images/1sttheworld.myshopify.com/Ct-no.jpg">Ct-no.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/d.jpg"   value="images/1sttheworld.myshopify.com/d.jpg">d.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dasfsdcs-benth.jpg"   value="images/1sttheworld.myshopify.com/dasfsdcs-benth.jpg">dasfsdcs-benth.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dcsfewwwww.jpg"   value="images/1sttheworld.myshopify.com/dcsfewwwww.jpg">dcsfewwwww.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/devdvds.jpg"   value="images/1sttheworld.myshopify.com/devdvds.jpg">devdvds.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dewffr.jpg"   value="images/1sttheworld.myshopify.com/dewffr.jpg">dewffr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dfed.jpg"   value="images/1sttheworld.myshopify.com/dfed.jpg">dfed.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/DFGH.jpg"   value="images/1sttheworld.myshopify.com/DFGH.jpg">DFGH.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dfgrehre.jpg"   value="images/1sttheworld.myshopify.com/dfgrehre.jpg">dfgrehre.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dfwdvfwdcds.jpg"   value="images/1sttheworld.myshopify.com/dfwdvfwdcds.jpg">dfwdvfwdcds.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dfwwBag-Recovered.jpg"   value="images/1sttheworld.myshopify.com/dfwwBag-Recovered.jpg">dfwwBag-Recovered.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dgeudhcksjck.jpg"   value="images/1sttheworld.myshopify.com/dgeudhcksjck.jpg">dgeudhcksjck.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dgreher.jpg"   value="images/1sttheworld.myshopify.com/dgreher.jpg">dgreher.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dgycuywdvbciu.jpg"   value="images/1sttheworld.myshopify.com/dgycuywdvbciu.jpg">dgycuywdvbciu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dhcireuhvi.jpg"   value="images/1sttheworld.myshopify.com/dhcireuhvi.jpg">dhcireuhvi.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dhffiuehvi.jpg"   value="images/1sttheworld.myshopify.com/dhffiuehvi.jpg">dhffiuehvi.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dhgfydgfu.jpg"   value="images/1sttheworld.myshopify.com/dhgfydgfu.jpg">dhgfydgfu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dhvcikdskv.jpg"   value="images/1sttheworld.myshopify.com/dhvcikdskv.jpg">dhvcikdskv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/du-.jpg"   value="images/1sttheworld.myshopify.com/du-.jpg">du-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dvf.jpg"   value="images/1sttheworld.myshopify.com/dvf.jpg">dvf.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dwefw.jpg"   value="images/1sttheworld.myshopify.com/dwefw.jpg">dwefw.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/dwq.jpg"   value="images/1sttheworld.myshopify.com/dwq.jpg">dwq.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/e-.jpg"   value="images/1sttheworld.myshopify.com/e-.jpg">e-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/e-fee.jpg"   value="images/1sttheworld.myshopify.com/e-fee.jpg">e-fee.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/e-grgdsgsag.jpg"   value="images/1sttheworld.myshopify.com/e-grgdsgsag.jpg">e-grgdsgsag.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/e-oihewgiuvr.jpg"   value="images/1sttheworld.myshopify.com/e-oihewgiuvr.jpg">e-oihewgiuvr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/e-thfgdf.jpg"   value="images/1sttheworld.myshopify.com/e-thfgdf.jpg">e-thfgdf.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/e-wdwn.jpg"   value="images/1sttheworld.myshopify.com/e-wdwn.jpg">e-wdwn.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/e2dre2fref.jpg"   value="images/1sttheworld.myshopify.com/e2dre2fref.jpg">e2dre2fref.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/eeeeufhei.jpg"   value="images/1sttheworld.myshopify.com/eeeeufhei.jpg">eeeeufhei.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/efefefeag.jpg"   value="images/1sttheworld.myshopify.com/efefefeag.jpg">efefefeag.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/efiuewnveknbv.jpg"   value="images/1sttheworld.myshopify.com/efiuewnveknbv.jpg">efiuewnveknbv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/egregegete-Bag.jpg"   value="images/1sttheworld.myshopify.com/egregegete-Bag.jpg">egregegete-Bag.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/en-no.jpg"   value="images/1sttheworld.myshopify.com/en-no.jpg">en-no.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/EN.jpg"   value="images/1sttheworld.myshopify.com/EN.jpg">EN.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/eqfrqwfqwfcqw.jpg"   value="images/1sttheworld.myshopify.com/eqfrqwfqwfcqw.jpg">eqfrqwfqwfcqw.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/ewe.jpg"   value="images/1sttheworld.myshopify.com/ewe.jpg">ewe.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/ewfvwedvdw.jpg"   value="images/1sttheworld.myshopify.com/ewfvwedvdw.jpg">ewfvwedvdw.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/F.jpg"   value="images/1sttheworld.myshopify.com/F.jpg">F.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/f.jpg"   value="images/1sttheworld.myshopify.com/f.jpg">f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Fanny-Back-hbrghbtg.jpg"   value="images/1sttheworld.myshopify.com/Fanny-Back-hbrghbtg.jpg">Fanny-Back-hbrghbtg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/fcewddedecdeg.jpg"   value="images/1sttheworld.myshopify.com/fcewddedecdeg.jpg">fcewddedecdeg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/fchewifjioew.jpg"   value="images/1sttheworld.myshopify.com/fchewifjioew.jpg">fchewifjioew.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/fe.jpg"   value="images/1sttheworld.myshopify.com/fe.jpg">fe.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/fg.jpg"   value="images/1sttheworld.myshopify.com/fg.jpg">fg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/fgsdgsdgsd.jpg"   value="images/1sttheworld.myshopify.com/fgsdgsdgsd.jpg">fgsdgsdgsd.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/fgthyhhyj.jpg"   value="images/1sttheworld.myshopify.com/fgthyhhyj.jpg">fgthyhhyj.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/fhewiofjoew.jpg"   value="images/1sttheworld.myshopify.com/fhewiofjoew.jpg">fhewiofjoew.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/front-1-2c0ba22f-1939-4d25-ab19-60f10f580470-1024x1024.jpg"   value="images/1sttheworld.myshopify.com/front-1-2c0ba22f-1939-4d25-ab19-60f10f580470-1024x1024.jpg">front-1-2c0ba22f-1939-4d25-ab19-60f10f580470-1024x1024.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/front-1-6b07e0dc-edae-40f7-8510-817979ad5f55.jpg"   value="images/1sttheworld.myshopify.com/front-1-6b07e0dc-edae-40f7-8510-817979ad5f55.jpg">front-1-6b07e0dc-edae-40f7-8510-817979ad5f55.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/front-1-63c0b9ea-13cf-4035-9af9-151e108dc274.jpg"   value="images/1sttheworld.myshopify.com/front-1-63c0b9ea-13cf-4035-9af9-151e108dc274.jpg">front-1-63c0b9ea-13cf-4035-9af9-151e108dc274.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/front-1-266c0ea6-d05b-46c7-9850-45f810e5c208-1024x1024.jpg"   value="images/1sttheworld.myshopify.com/front-1-266c0ea6-d05b-46c7-9850-45f810e5c208-1024x1024.jpg">front-1-266c0ea6-d05b-46c7-9850-45f810e5c208-1024x1024.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/front-1-424623f3-3e4b-4bf7-9822-f2998e902e50-1024x1024.jpg"   value="images/1sttheworld.myshopify.com/front-1-424623f3-3e4b-4bf7-9822-f2998e902e50-1024x1024.jpg">front-1-424623f3-3e4b-4bf7-9822-f2998e902e50-1024x1024.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/front-1-aa85ec50-94be-413e-9d42-a36b96749d99.jpg"   value="images/1sttheworld.myshopify.com/front-1-aa85ec50-94be-413e-9d42-a36b96749d99.jpg">front-1-aa85ec50-94be-413e-9d42-a36b96749d99.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/front-1-cf82bbb6-21e5-4ee2-b348-7a9675a52d69.jpg"   value="images/1sttheworld.myshopify.com/front-1-cf82bbb6-21e5-4ee2-b348-7a9675a52d69.jpg">front-1-cf82bbb6-21e5-4ee2-b348-7a9675a52d69.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/front-3-4a6aea6d-61b3-4c53-b2f3-055fa23e820e.jpg"   value="images/1sttheworld.myshopify.com/front-3-4a6aea6d-61b3-4c53-b2f3-055fa23e820e.jpg">front-3-4a6aea6d-61b3-4c53-b2f3-055fa23e820e.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/front-3-96b78b35-d5d3-4e46-889f-8f29e1c8b0e3.jpg"   value="images/1sttheworld.myshopify.com/front-3-96b78b35-d5d3-4e46-889f-8f29e1c8b0e3.jpg">front-3-96b78b35-d5d3-4e46-889f-8f29e1c8b0e3.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/front-3-c3a30d3b-545e-48ab-8e66-b8e59db68bef.jpg"   value="images/1sttheworld.myshopify.com/front-3-c3a30d3b-545e-48ab-8e66-b8e59db68bef.jpg">front-3-c3a30d3b-545e-48ab-8e66-b8e59db68bef.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/front-3-c69060e0-1c40-4121-b71e-eebe0d037310.jpg"   value="images/1sttheworld.myshopify.com/front-3-c69060e0-1c40-4121-b71e-eebe0d037310.jpg">front-3-c69060e0-1c40-4121-b71e-eebe0d037310.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/front-3-e3d63cde-efeb-4ce5-a87f-c37e4056dd1e.jpg"   value="images/1sttheworld.myshopify.com/front-3-e3d63cde-efeb-4ce5-a87f-c37e4056dd1e.jpg">front-3-e3d63cde-efeb-4ce5-a87f-c37e4056dd1e.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/frwvgfrv.jpg"   value="images/1sttheworld.myshopify.com/frwvgfrv.jpg">frwvgfrv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/ftsrdyyghgh.jpg"   value="images/1sttheworld.myshopify.com/ftsrdyyghgh.jpg">ftsrdyyghgh.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/fvvfgvtg-copy.jpg"   value="images/1sttheworld.myshopify.com/fvvfgvtg-copy.jpg">fvvfgvtg-copy.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/fvvfgvtg.jpg"   value="images/1sttheworld.myshopify.com/fvvfgvtg.jpg">fvvfgvtg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/fwefgefqs.jpg"   value="images/1sttheworld.myshopify.com/fwefgefqs.jpg">fwefgefqs.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/fwrfr.jpg"   value="images/1sttheworld.myshopify.com/fwrfr.jpg">fwrfr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/fwrfrfr.jpg"   value="images/1sttheworld.myshopify.com/fwrfrfr.jpg">fwrfrfr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/fyyrast.jpg"   value="images/1sttheworld.myshopify.com/fyyrast.jpg">fyyrast.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/g.jpg"   value="images/1sttheworld.myshopify.com/g.jpg">g.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gdhfhbgfh.jpg"   value="images/1sttheworld.myshopify.com/gdhfhbgfh.jpg">gdhfhbgfh.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gdiuewhvicuwhed.jpg"   value="images/1sttheworld.myshopify.com/gdiuewhvicuwhed.jpg">gdiuewhvicuwhed.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/german.png"   value="images/1sttheworld.myshopify.com/german.png">german.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gh.jpg"   value="images/1sttheworld.myshopify.com/gh.jpg">gh.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Ghana-hoodie-.jpg"   value="images/1sttheworld.myshopify.com/Ghana-hoodie-.jpg">Ghana-hoodie-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Ghana-polo-f.jpg"   value="images/1sttheworld.myshopify.com/Ghana-polo-f.jpg">Ghana-polo-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Ghana-tshirt-f.jpg"   value="images/1sttheworld.myshopify.com/Ghana-tshirt-f.jpg">Ghana-tshirt-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Ghana-zhoodie-.jpg"   value="images/1sttheworld.myshopify.com/Ghana-zhoodie-.jpg">Ghana-zhoodie-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gno8.jpg"   value="images/1sttheworld.myshopify.com/gno8.jpg">gno8.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gold-1.jpg"   value="images/1sttheworld.myshopify.com/gold-1.jpg">gold-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gold-1.jpg"   value="images/1sttheworld.myshopify.com/Gold-1.jpg">Gold-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/GOLD-1.jpg"   value="images/1sttheworld.myshopify.com/GOLD-1.jpg">GOLD-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gold-2FHTHTHHGT.jpg"   value="images/1sttheworld.myshopify.com/gold-2FHTHTHHGT.jpg">gold-2FHTHTHHGT.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gold-5h5jhyhny.jpg"   value="images/1sttheworld.myshopify.com/Gold-5h5jhyhny.jpg">Gold-5h5jhyhny.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gold-11.jpg"   value="images/1sttheworld.myshopify.com/Gold-11.jpg">Gold-11.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gold-55.jpg"   value="images/1sttheworld.myshopify.com/gold-55.jpg">gold-55.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gold-1111.jpg"   value="images/1sttheworld.myshopify.com/Gold-1111.jpg">Gold-1111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gold-11111.jpg"   value="images/1sttheworld.myshopify.com/Gold-11111.jpg">Gold-11111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gold-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/Gold-copy-hdfgdrgrdt.jpg">Gold-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gold-dvghvegye.jpg"   value="images/1sttheworld.myshopify.com/gold-dvghvegye.jpg">gold-dvghvegye.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gold-eguehgv.jpg"   value="images/1sttheworld.myshopify.com/Gold-eguehgv.jpg">Gold-eguehgv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gold-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/gold-fergrgrgr.jpg">gold-fergrgrgr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gold-frvgfgvr.jpg"   value="images/1sttheworld.myshopify.com/Gold-frvgfgvr.jpg">Gold-frvgfgvr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gold-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/Gold-gdrguyuuuuu.jpg">Gold-gdrguyuuuuu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gold-grthbrh.jpg"   value="images/1sttheworld.myshopify.com/Gold-grthbrh.jpg">Gold-grthbrh.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gold-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/gold-hibiscus-copy-hdfgdrgrdt.jpg">gold-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gray-1.jpg"   value="images/1sttheworld.myshopify.com/gray-1.jpg">gray-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gray-1.jpg"   value="images/1sttheworld.myshopify.com/Gray-1.jpg">Gray-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gray-1efgvv.jpg"   value="images/1sttheworld.myshopify.com/Gray-1efgvv.jpg">Gray-1efgvv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gray-1efrf.jpg"   value="images/1sttheworld.myshopify.com/gray-1efrf.jpg">gray-1efrf.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gray-2HDHTDNYHN.jpg"   value="images/1sttheworld.myshopify.com/gray-2HDHTDNYHN.jpg">gray-2HDHTDNYHN.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gray-55.jpg"   value="images/1sttheworld.myshopify.com/gray-55.jpg">gray-55.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gray-1111111.jpg"   value="images/1sttheworld.myshopify.com/Gray-1111111.jpg">Gray-1111111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gray-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/Gray-copy-hdfgdrgrdt.jpg">Gray-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gray-efregvr.jpg"   value="images/1sttheworld.myshopify.com/Gray-efregvr.jpg">Gray-efregvr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gray-ewyfgrhf.jpg"   value="images/1sttheworld.myshopify.com/Gray-ewyfgrhf.jpg">Gray-ewyfgrhf.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gray-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/gray-fergrgrgr.jpg">gray-fergrgrgr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gray-fgysrfgyus.jpg"   value="images/1sttheworld.myshopify.com/Gray-fgysrfgyus.jpg">Gray-fgysrfgyus.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gray-fvefvv.jpg"   value="images/1sttheworld.myshopify.com/gray-fvefvv.jpg">gray-fvefvv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gray-gdcfheguyfe.jpg"   value="images/1sttheworld.myshopify.com/gray-gdcfheguyfe.jpg">gray-gdcfheguyfe.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gray-gdrgggtteg.jpg"   value="images/1sttheworld.myshopify.com/Gray-gdrgggtteg.jpg">Gray-gdrgggtteg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gray-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/Gray-gdrguyuuuuu.jpg">Gray-gdrguyuuuuu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gray-gtgtg.jpg"   value="images/1sttheworld.myshopify.com/Gray-gtgtg.jpg">Gray-gtgtg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gray-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/gray-hibiscus-copy-hdfgdrgrdt.jpg">gray-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gray-hjjgg.jpg"   value="images/1sttheworld.myshopify.com/Gray-hjjgg.jpg">Gray-hjjgg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Gray-hvgh.jpg"   value="images/1sttheworld.myshopify.com/Gray-hvgh.jpg">Gray-hvgh.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gray-mk-1.jpg"   value="images/1sttheworld.myshopify.com/gray-mk-1.jpg">gray-mk-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Green-1.jpg"   value="images/1sttheworld.myshopify.com/Green-1.jpg">Green-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/green-1.jpg"   value="images/1sttheworld.myshopify.com/green-1.jpg">green-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Green-1gfvgfv.jpg"   value="images/1sttheworld.myshopify.com/Green-1gfvgfv.jpg">Green-1gfvgfv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Green-2.jpg"   value="images/1sttheworld.myshopify.com/Green-2.jpg">Green-2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/green-2HDHNDFHGT.jpg"   value="images/1sttheworld.myshopify.com/green-2HDHNDFHGT.jpg">green-2HDHNDFHGT.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Green-11.jpg"   value="images/1sttheworld.myshopify.com/Green-11.jpg">Green-11.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/green-55.jpg"   value="images/1sttheworld.myshopify.com/green-55.jpg">green-55.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Green-1111.jpg"   value="images/1sttheworld.myshopify.com/Green-1111.jpg">Green-1111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Green-11111.jpg"   value="images/1sttheworld.myshopify.com/Green-11111.jpg">Green-11111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Green-111111.jpg"   value="images/1sttheworld.myshopify.com/Green-111111.jpg">Green-111111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Green-brggg.jpg"   value="images/1sttheworld.myshopify.com/Green-brggg.jpg">Green-brggg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Green-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/Green-copy-hdfgdrgrdt.jpg">Green-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/green-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/green-fergrgrgr.jpg">green-fergrgrgr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/green-fshrfghjrsfvryuw.jpg"   value="images/1sttheworld.myshopify.com/green-fshrfghjrsfvryuw.jpg">green-fshrfghjrsfvryuw.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Green-fyrfy734.jpg"   value="images/1sttheworld.myshopify.com/Green-fyrfy734.jpg">Green-fyrfy734.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Green-gdrgggtteg.jpg"   value="images/1sttheworld.myshopify.com/Green-gdrgggtteg.jpg">Green-gdrgggtteg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Green-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/Green-gdrguyuuuuu.jpg">Green-gdrguyuuuuu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Green-gvrbfbv.jpg"   value="images/1sttheworld.myshopify.com/Green-gvrbfbv.jpg">Green-gvrbfbv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/green-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/green-hibiscus-copy-hdfgdrgrdt.jpg">green-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Green-hvgyug.jpg"   value="images/1sttheworld.myshopify.com/Green-hvgyug.jpg">Green-hvgyug.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/green-mk-1.jpg"   value="images/1sttheworld.myshopify.com/green-mk-1.jpg">green-mk-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Green-vygvtg.jpg"   value="images/1sttheworld.myshopify.com/Green-vygvtg.jpg">Green-vygvtg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Green-yjtjyjj.jpg"   value="images/1sttheworld.myshopify.com/Green-yjtjyjj.jpg">Green-yjtjyjj.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Grocery-Bag-11.jpg"   value="images/1sttheworld.myshopify.com/Grocery-Bag-11.jpg">Grocery-Bag-11.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gsdgurehgt.jpg"   value="images/1sttheworld.myshopify.com/gsdgurehgt.jpg">gsdgurehgt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/guam-gold-mockup.jpg"   value="images/1sttheworld.myshopify.com/guam-gold-mockup.jpg">guam-gold-mockup.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gudhwufcjw.jpg"   value="images/1sttheworld.myshopify.com/gudhwufcjw.jpg">gudhwufcjw.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/gvdcuysh.jpg"   value="images/1sttheworld.myshopify.com/gvdcuysh.jpg">gvdcuysh.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/h1-1.jpg"   value="images/1sttheworld.myshopify.com/h1-1.jpg">h1-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/h2-2.jpg"   value="images/1sttheworld.myshopify.com/h2-2.jpg">h2-2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/h2.jpg"   value="images/1sttheworld.myshopify.com/h2.jpg">h2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/h5.jpg"   value="images/1sttheworld.myshopify.com/h5.jpg">h5.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/h6.jpg"   value="images/1sttheworld.myshopify.com/h6.jpg">h6.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/h7.jpg"   value="images/1sttheworld.myshopify.com/h7.jpg">h7.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/h9.jpg"   value="images/1sttheworld.myshopify.com/h9.jpg">h9.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/haiti-custom-hoodie-f.jpg"   value="images/1sttheworld.myshopify.com/haiti-custom-hoodie-f.jpg">haiti-custom-hoodie-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/haiti-custom-zhoodie-f.jpg"   value="images/1sttheworld.myshopify.com/haiti-custom-zhoodie-f.jpg">haiti-custom-zhoodie-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Haiti-Customized-hoodiez.jpg"   value="images/1sttheworld.myshopify.com/Haiti-Customized-hoodiez.jpg">Haiti-Customized-hoodiez.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Haiti-Customized-polo-mk-f-.jpg"   value="images/1sttheworld.myshopify.com/Haiti-Customized-polo-mk-f-.jpg">Haiti-Customized-polo-mk-f-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Haiti-Customized-tshirt-mk-f.jpg"   value="images/1sttheworld.myshopify.com/Haiti-Customized-tshirt-mk-f.jpg">Haiti-Customized-tshirt-mk-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Haiti-Customized-Zhoodie.jpg"   value="images/1sttheworld.myshopify.com/Haiti-Customized-Zhoodie.jpg">Haiti-Customized-Zhoodie.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/half.jpg"   value="images/1sttheworld.myshopify.com/half.jpg">half.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/handbag-fuhewyfu.jpg"   value="images/1sttheworld.myshopify.com/handbag-fuhewyfu.jpg">handbag-fuhewyfu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/hawaii-5.jpg"   value="images/1sttheworld.myshopify.com/hawaii-5.jpg">hawaii-5.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/hawaii.png"   value="images/1sttheworld.myshopify.com/hawaii.png">hawaii.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/hdb.jpg"   value="images/1sttheworld.myshopify.com/hdb.jpg">hdb.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/hdviufdhvd.jpg"   value="images/1sttheworld.myshopify.com/hdviufdhvd.jpg">hdviufdhvd.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/hfcuhvie.jpg"   value="images/1sttheworld.myshopify.com/hfcuhvie.jpg">hfcuhvie.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Hi-nh-1.jpg"   value="images/1sttheworld.myshopify.com/Hi-nh-1.jpg">Hi-nh-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/hi-nh-2.jpg"   value="images/1sttheworld.myshopify.com/hi-nh-2.jpg">hi-nh-2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Hi-nh-6.jpg"   value="images/1sttheworld.myshopify.com/Hi-nh-6.jpg">Hi-nh-6.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/hi-nh-6.jpg"   value="images/1sttheworld.myshopify.com/hi-nh-6.jpg">hi-nh-6.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/hi.jpg"   value="images/1sttheworld.myshopify.com/hi.jpg">hi.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Hinh-9.jpg"   value="images/1sttheworld.myshopify.com/Hinh-9.jpg">Hinh-9.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Hjs.jpg"   value="images/1sttheworld.myshopify.com/Hjs.jpg">Hjs.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/hoa-i.jpg"   value="images/1sttheworld.myshopify.com/hoa-i.jpg">hoa-i.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Hooded-Blanket-ycgfcv.jpg"   value="images/1sttheworld.myshopify.com/Hooded-Blanket-ycgfcv.jpg">Hooded-Blanket-ycgfcv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/HOODIE.jpg"   value="images/1sttheworld.myshopify.com/HOODIE.jpg">HOODIE.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/hsfiuehiufvewj.jpg"   value="images/1sttheworld.myshopify.com/hsfiuehiufvewj.jpg">hsfiuehiufvewj.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/img.jpg"   value="images/1sttheworld.myshopify.com/img.jpg">img.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/img1.jpg"   value="images/1sttheworld.myshopify.com/img1.jpg">img1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/img1vfvfv.jpg"   value="images/1sttheworld.myshopify.com/img1vfvfv.jpg">img1vfvfv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/in-store-front-bigadadas-right-side-benth.jpg"   value="images/1sttheworld.myshopify.com/in-store-front-bigadadas-right-side-benth.jpg">in-store-front-bigadadas-right-side-benth.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/jgfoihrogroieg.jpg"   value="images/1sttheworld.myshopify.com/jgfoihrogroieg.jpg">jgfoihrogroieg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/kanaka-leather-tote-1.jpg"   value="images/1sttheworld.myshopify.com/kanaka-leather-tote-1.jpg">kanaka-leather-tote-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/kanaka-maoli-beige-tote-1.jpg"   value="images/1sttheworld.myshopify.com/kanaka-maoli-beige-tote-1.jpg">kanaka-maoli-beige-tote-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Large-Tote-Bag-blue-1.jpg"   value="images/1sttheworld.myshopify.com/Large-Tote-Bag-blue-1.jpg">Large-Tote-Bag-blue-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/latvia-hoodie-f-.jpg"   value="images/1sttheworld.myshopify.com/latvia-hoodie-f-.jpg">latvia-hoodie-f-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/latvia-polo-f.jpg"   value="images/1sttheworld.myshopify.com/latvia-polo-f.jpg">latvia-polo-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/latvia-tshirt-f.jpg"   value="images/1sttheworld.myshopify.com/latvia-tshirt-f.jpg">latvia-tshirt-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/latvia-zhoodie-f.jpg"   value="images/1sttheworld.myshopify.com/latvia-zhoodie-f.jpg">latvia-zhoodie-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Leather-Tote-Bag-tgtg.jpg"   value="images/1sttheworld.myshopify.com/Leather-Tote-Bag-tgtg.jpg">Leather-Tote-Bag-tgtg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/leggings-1.jpg"   value="images/1sttheworld.myshopify.com/leggings-1.jpg">leggings-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/leggings-gold-3.jpg"   value="images/1sttheworld.myshopify.com/leggings-gold-3.jpg">leggings-gold-3.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/leggings-gray-1.jpg"   value="images/1sttheworld.myshopify.com/leggings-gray-1.jpg">leggings-gray-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/leggings-green-1.jpg"   value="images/1sttheworld.myshopify.com/leggings-green-1.jpg">leggings-green-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/leggings-Pink-1.jpg"   value="images/1sttheworld.myshopify.com/leggings-Pink-1.jpg">leggings-Pink-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/leggings-Purple-1.jpg"   value="images/1sttheworld.myshopify.com/leggings-Purple-1.jpg">leggings-Purple-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/leggings-red-1.jpg"   value="images/1sttheworld.myshopify.com/leggings-red-1.jpg">leggings-red-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/leggings-yellow-1.jpg"   value="images/1sttheworld.myshopify.com/leggings-yellow-1.jpg">leggings-yellow-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Liechtenstein-Hoodie.jpg"   value="images/1sttheworld.myshopify.com/Liechtenstein-Hoodie.jpg">Liechtenstein-Hoodie.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Liechtenstein-Polo-F.jpg"   value="images/1sttheworld.myshopify.com/Liechtenstein-Polo-F.jpg">Liechtenstein-Polo-F.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Liechtenstein-Tshirt-F.jpg"   value="images/1sttheworld.myshopify.com/Liechtenstein-Tshirt-F.jpg">Liechtenstein-Tshirt-F.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Liechtenstein-zHoodie.jpg"   value="images/1sttheworld.myshopify.com/Liechtenstein-zHoodie.jpg">Liechtenstein-zHoodie.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/lithua-black.png"   value="images/1sttheworld.myshopify.com/lithua-black.png">lithua-black.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/lithua-white.png"   value="images/1sttheworld.myshopify.com/lithua-white.png">lithua-white.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/LITHUA.png"   value="images/1sttheworld.myshopify.com/LITHUA.png">LITHUA.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/lithuania-custom-hoodie-mk-f.jpg"   value="images/1sttheworld.myshopify.com/lithuania-custom-hoodie-mk-f.jpg">lithuania-custom-hoodie-mk-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/lithuania-custom-zhoodie-mk-f.jpg"   value="images/1sttheworld.myshopify.com/lithuania-custom-zhoodie-mk-f.jpg">lithuania-custom-zhoodie-mk-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/lithuania-polo-f.jpg"   value="images/1sttheworld.myshopify.com/lithuania-polo-f.jpg">lithuania-polo-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/lithuania-tshirt-f.jpg"   value="images/1sttheworld.myshopify.com/lithuania-tshirt-f.jpg">lithuania-tshirt-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Luggage-1.jpg"   value="images/1sttheworld.myshopify.com/Luggage-1.jpg">Luggage-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Luggage-trdrtd.jpg"   value="images/1sttheworld.myshopify.com/Luggage-trdrtd.jpg">Luggage-trdrtd.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Malta-hoodie.jpg"   value="images/1sttheworld.myshopify.com/Malta-hoodie.jpg">Malta-hoodie.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Malta-polo-f-.jpg"   value="images/1sttheworld.myshopify.com/Malta-polo-f-.jpg">Malta-polo-f-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Malta-tshirt-f-.jpg"   value="images/1sttheworld.myshopify.com/Malta-tshirt-f-.jpg">Malta-tshirt-f-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Malta-Zhoodie.jpg"   value="images/1sttheworld.myshopify.com/Malta-Zhoodie.jpg">Malta-Zhoodie.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/mk-1.jpg"   value="images/1sttheworld.myshopify.com/mk-1.jpg">mk-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/mk-bed-hhgvg.jpg"   value="images/1sttheworld.myshopify.com/mk-bed-hhgvg.jpg">mk-bed-hhgvg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/mk-bed-k-chu.jpg"   value="images/1sttheworld.myshopify.com/mk-bed-k-chu.jpg">mk-bed-k-chu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/mk-Black-no.jpg"   value="images/1sttheworld.myshopify.com/mk-Black-no.jpg">mk-Black-no.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/mk-h-tr-2.jpg"   value="images/1sttheworld.myshopify.com/mk-h-tr-2.jpg">mk-h-tr-2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/mk-h-z-tr-2.jpg"   value="images/1sttheworld.myshopify.com/mk-h-z-tr-2.jpg">mk-h-z-tr-2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/mk-No-Wh.jpg"   value="images/1sttheworld.myshopify.com/mk-No-Wh.jpg">mk-No-Wh.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/mk-no.jpg"   value="images/1sttheworld.myshopify.com/mk-no.jpg">mk-no.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/MK-SAU2.jpg"   value="images/1sttheworld.myshopify.com/MK-SAU2.jpg">MK-SAU2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/MK-TRC.jpg"   value="images/1sttheworld.myshopify.com/MK-TRC.jpg">MK-TRC.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/MK-TRC2.jpg"   value="images/1sttheworld.myshopify.com/MK-TRC2.jpg">MK-TRC2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/MK-TRCV.jpg"   value="images/1sttheworld.myshopify.com/MK-TRCV.jpg">MK-TRCV.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mocdvdv.jpg"   value="images/1sttheworld.myshopify.com/Mocdvdv.jpg">Mocdvdv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockudcwdwovered.jpg"   value="images/1sttheworld.myshopify.com/Mockudcwdwovered.jpg">Mockudcwdwovered.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Handbag-2.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbag-2.jpg">Mockup-Handbag-2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Handbag-3.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbag-3.jpg">Mockup-Handbag-3.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Handbag-no.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbag-no.jpg">Mockup-Handbag-no.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Handbag-Recovered.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbag-Recovered.jpg">Mockup-Handbag-Recovered.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Handbag-wrgregreg.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbag-wrgregreg.jpg">Mockup-Handbag-wrgregreg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Handbagf-rgef.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbagf-rgef.jpg">Mockup-Handbagf-rgef.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Handbagfe.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbagfe.jpg">Mockup-Handbagfe.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Handbaggggg.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbaggggg.jpg">Mockup-Handbaggggg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Handbededag.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Handbededag.jpg">Mockup-Handbededag.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Lcdcvdeather-Tote-Bag.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Lcdcvdeather-Tote-Bag.jpg">Mockup-Lcdcvdeather-Tote-Bag.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Leather-Tote-Bafefeg.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Leather-Tote-Bafefeg.jpg">Mockup-Leather-Tote-Bafefeg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Leather-Tote-Bag.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Leather-Tote-Bag.jpg">Mockup-Leather-Tote-Bag.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Leather-Tote-Bagceg.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Leather-Tote-Bagceg.jpg">Mockup-Leather-Tote-Bagceg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Leather-Toteg-copy.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Leather-Toteg-copy.jpg">Mockup-Leather-Toteg-copy.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-ne-.jpg"   value="images/1sttheworld.myshopify.com/Mockup-ne-.jpg">Mockup-ne-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Saddle-Bag-efrgfrg.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Saddle-Bag-efrgfrg.jpg">Mockup-Saddle-Bag-efrgfrg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag-no.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag-no.jpg">Mockup-Tote-Bag-no.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag-Recovefefred.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag-Recovefefred.jpg">Mockup-Tote-Bag-Recovefefred.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag-Recovered.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag-Recovered.jpg">Mockup-Tote-Bag-Recovered.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag-wgfergre.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag-wgfergre.jpg">Mockup-Tote-Bag-wgfergre.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Tote-Bag.jpg">Mockup-Tote-Bag.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Tote-Bdsdag.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Tote-Bdsdag.jpg">Mockup-Tote-Bdsdag.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mockup-Tote-e-Bag.jpg"   value="images/1sttheworld.myshopify.com/Mockup-Tote-e-Bag.jpg">Mockup-Tote-e-Bag.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/mockup.jpg"   value="images/1sttheworld.myshopify.com/mockup.jpg">mockup.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/MockuwdwdwdTote-Bag.jpg"   value="images/1sttheworld.myshopify.com/MockuwdwdwdTote-Bag.jpg">MockuwdwdwdTote-Bag.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mocscscscovered.jpg"   value="images/1sttheworld.myshopify.com/Mocscscscovered.jpg">Mocscscscovered.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Mocscscse-Bag-Recovered.jpg"   value="images/1sttheworld.myshopify.com/Mocscscse-Bag-Recovered.jpg">Mocscscse-Bag-Recovered.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/moose.png"   value="images/1sttheworld.myshopify.com/moose.png">moose.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Nederland-uyffvy.jpg"   value="images/1sttheworld.myshopify.com/Nederland-uyffvy.jpg">Nederland-uyffvy.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/netherlands-6.png"   value="images/1sttheworld.myshopify.com/netherlands-6.png">netherlands-6.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/ngu-a-nghie-ng.jpg"   value="images/1sttheworld.myshopify.com/ngu-a-nghie-ng.jpg">ngu-a-nghie-ng.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/ngu-a-nghie-ng.png"   value="images/1sttheworld.myshopify.com/ngu-a-nghie-ng.png">ngu-a-nghie-ng.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-1-w.jpg"   value="images/1sttheworld.myshopify.com/no-1-w.jpg">no-1-w.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-4b.jpg"   value="images/1sttheworld.myshopify.com/no-4b.jpg">no-4b.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-5-b.jpg"   value="images/1sttheworld.myshopify.com/no-5-b.jpg">no-5-b.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-5-w.jpg"   value="images/1sttheworld.myshopify.com/no-5-w.jpg">no-5-w.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-6.jpg"   value="images/1sttheworld.myshopify.com/no-6.jpg">no-6.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-6b.jpg"   value="images/1sttheworld.myshopify.com/no-6b.jpg">no-6b.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-7.jpg"   value="images/1sttheworld.myshopify.com/no-7.jpg">no-7.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-8-b.jpg"   value="images/1sttheworld.myshopify.com/no-8-b.jpg">no-8-b.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-9-.jpg"   value="images/1sttheworld.myshopify.com/no-9-.jpg">no-9-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-9b.jpg"   value="images/1sttheworld.myshopify.com/no-9b.jpg">no-9b.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-B-1.jpg"   value="images/1sttheworld.myshopify.com/no-B-1.jpg">no-B-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-banner-b.jpg"   value="images/1sttheworld.myshopify.com/no-banner-b.jpg">no-banner-b.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-black.jpg"   value="images/1sttheworld.myshopify.com/no-black.jpg">no-black.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/No-black.png"   value="images/1sttheworld.myshopify.com/No-black.png">No-black.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-en.jpg"   value="images/1sttheworld.myshopify.com/no-en.jpg">no-en.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/NO-Quilt.jpg"   value="images/1sttheworld.myshopify.com/NO-Quilt.jpg">NO-Quilt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-shoulkder.jpg"   value="images/1sttheworld.myshopify.com/no-shoulkder.jpg">no-shoulkder.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-trang.jpg"   value="images/1sttheworld.myshopify.com/no-trang.jpg">no-trang.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-wh-.jpg"   value="images/1sttheworld.myshopify.com/no-wh-.jpg">no-wh-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-wh.jpg"   value="images/1sttheworld.myshopify.com/no-wh.jpg">no-wh.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-Wh.png"   value="images/1sttheworld.myshopify.com/no-Wh.png">no-Wh.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-white-1.jpg"   value="images/1sttheworld.myshopify.com/no-white-1.jpg">no-white-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no-white.jpg"   value="images/1sttheworld.myshopify.com/no-white.jpg">no-white.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/NO.jpg"   value="images/1sttheworld.myshopify.com/NO.jpg">NO.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no.jpg"   value="images/1sttheworld.myshopify.com/no.jpg">no.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no1-b.jpg"   value="images/1sttheworld.myshopify.com/no1-b.jpg">no1-b.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no1.jpg"   value="images/1sttheworld.myshopify.com/no1.jpg">no1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no2-b.jpg"   value="images/1sttheworld.myshopify.com/no2-b.jpg">no2-b.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no2-w.jpg"   value="images/1sttheworld.myshopify.com/no2-w.jpg">no2-w.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no2.jpg"   value="images/1sttheworld.myshopify.com/no2.jpg">no2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no3-b.jpg"   value="images/1sttheworld.myshopify.com/no3-b.jpg">no3-b.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no4.jpg"   value="images/1sttheworld.myshopify.com/no4.jpg">no4.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/no7-b.jpg"   value="images/1sttheworld.myshopify.com/no7-b.jpg">no7-b.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/nott.jpg"   value="images/1sttheworld.myshopify.com/nott.jpg">nott.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/ny-sneakers-2.jpg"   value="images/1sttheworld.myshopify.com/ny-sneakers-2.jpg">ny-sneakers-2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/ny-sneakers-3.jpg"   value="images/1sttheworld.myshopify.com/ny-sneakers-3.jpg">ny-sneakers-3.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/ny-sneakers-4.jpg"   value="images/1sttheworld.myshopify.com/ny-sneakers-4.jpg">ny-sneakers-4.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/nz-6.png"   value="images/1sttheworld.myshopify.com/nz-6.png">nz-6.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/one-fefeinst-vertical-line-wooden-bg-1200x1200-Recovered.jpg"   value="images/1sttheworld.myshopify.com/one-fefeinst-vertical-line-wooden-bg-1200x1200-Recovered.jpg">one-fefeinst-vertical-line-wooden-bg-1200x1200-Recovered.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/one-saddle-bag-agaie-nst-vertical-line-wooden-bg-1200x1200-.jpg"   value="images/1sttheworld.myshopify.com/one-saddle-bag-agaie-nst-vertical-line-wooden-bg-1200x1200-.jpg">one-saddle-bag-agaie-nst-vertical-line-wooden-bg-1200x1200-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/one-saddle-bag-against-vertical-line-wooden-bg-1200x1200-.jpg"   value="images/1sttheworld.myshopify.com/one-saddle-bag-against-vertical-line-wooden-bg-1200x1200-.jpg">one-saddle-bag-against-vertical-line-wooden-bg-1200x1200-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/one-saddle-bag-against-vertical-line-wooden-bg-1200x1200-Recovered.jpg"   value="images/1sttheworld.myshopify.com/one-saddle-bag-against-vertical-line-wooden-bg-1200x1200-Recovered.jpg">one-saddle-bag-against-vertical-line-wooden-bg-1200x1200-Recovered.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/one-sae-gainst-vertical-line-wooden-bg-1200x1200-Recovered.jpg"   value="images/1sttheworld.myshopify.com/one-sae-gainst-vertical-line-wooden-bg-1200x1200-Recovered.jpg">one-sae-gainst-vertical-line-wooden-bg-1200x1200-Recovered.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/oneu-dfwwvertical-line-wooden-bg-1200x1200-.jpg"   value="images/1sttheworld.myshopify.com/oneu-dfwwvertical-line-wooden-bg-1200x1200-.jpg">oneu-dfwwvertical-line-wooden-bg-1200x1200-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Orange-1.jpg"   value="images/1sttheworld.myshopify.com/Orange-1.jpg">Orange-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Orange-11.jpg"   value="images/1sttheworld.myshopify.com/Orange-11.jpg">Orange-11.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Orange-1111.jpg"   value="images/1sttheworld.myshopify.com/Orange-1111.jpg">Orange-1111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Orange-11111.jpg"   value="images/1sttheworld.myshopify.com/Orange-11111.jpg">Orange-11111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/oscsscsst-vertical-line-wooden-bg-1200x1200-.jpg"   value="images/1sttheworld.myshopify.com/oscsscsst-vertical-line-wooden-bg-1200x1200-.jpg">oscsscsst-vertical-line-wooden-bg-1200x1200-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/P1-3.jpg"   value="images/1sttheworld.myshopify.com/P1-3.jpg">P1-3.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/P1.jpg"   value="images/1sttheworld.myshopify.com/P1.jpg">P1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/p2-1.jpg"   value="images/1sttheworld.myshopify.com/p2-1.jpg">p2-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/P2-3.jpg"   value="images/1sttheworld.myshopify.com/P2-3.jpg">P2-3.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/P2.jpg"   value="images/1sttheworld.myshopify.com/P2.jpg">P2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/P3-1.jpg"   value="images/1sttheworld.myshopify.com/P3-1.jpg">P3-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/p3-3.jpg"   value="images/1sttheworld.myshopify.com/p3-3.jpg">p3-3.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/P4-1.jpg"   value="images/1sttheworld.myshopify.com/P4-1.jpg">P4-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/P4-3.jpg"   value="images/1sttheworld.myshopify.com/P4-3.jpg">P4-3.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/P4.jpg"   value="images/1sttheworld.myshopify.com/P4.jpg">P4.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/P5.jpg"   value="images/1sttheworld.myshopify.com/P5.jpg">P5.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/P8.jpg"   value="images/1sttheworld.myshopify.com/P8.jpg">P8.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/P22.jpg"   value="images/1sttheworld.myshopify.com/P22.jpg">P22.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/p33.jpg"   value="images/1sttheworld.myshopify.com/p33.jpg">p33.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/P44.jpg"   value="images/1sttheworld.myshopify.com/P44.jpg">P44.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/P55.jpg"   value="images/1sttheworld.myshopify.com/P55.jpg">P55.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/P66.jpg"   value="images/1sttheworld.myshopify.com/P66.jpg">P66.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/p77.jpg"   value="images/1sttheworld.myshopify.com/p77.jpg">p77.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/photoa10.jpg"   value="images/1sttheworld.myshopify.com/photoa10.jpg">photoa10.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/pillow-case-5.jpg"   value="images/1sttheworld.myshopify.com/pillow-case-5.jpg">pillow-case-5.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Pink-1.jpg"   value="images/1sttheworld.myshopify.com/Pink-1.jpg">Pink-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/pink-1.jpg"   value="images/1sttheworld.myshopify.com/pink-1.jpg">pink-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Pink-1rvrgv.jpg"   value="images/1sttheworld.myshopify.com/Pink-1rvrgv.jpg">Pink-1rvrgv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/pink-2JFJFYJNYJY.jpg"   value="images/1sttheworld.myshopify.com/pink-2JFJFYJNYJY.jpg">pink-2JFJFYJNYJY.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Pink-11.jpg"   value="images/1sttheworld.myshopify.com/Pink-11.jpg">Pink-11.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/pink-55.jpg"   value="images/1sttheworld.myshopify.com/pink-55.jpg">pink-55.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Pink-1111.jpg"   value="images/1sttheworld.myshopify.com/Pink-1111.jpg">Pink-1111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Pink-11111.jpg"   value="images/1sttheworld.myshopify.com/Pink-11111.jpg">Pink-11111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Pink-111111.jpg"   value="images/1sttheworld.myshopify.com/Pink-111111.jpg">Pink-111111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/pink-bdhewfveuw.jpg"   value="images/1sttheworld.myshopify.com/pink-bdhewfveuw.jpg">pink-bdhewfveuw.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Pink-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/Pink-copy-hdfgdrgrdt.jpg">Pink-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Pink-fburyhguirjf.jpg"   value="images/1sttheworld.myshopify.com/Pink-fburyhguirjf.jpg">Pink-fburyhguirjf.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Pink-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/Pink-fergrgrgr.jpg">Pink-fergrgrgr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Pink-fr3fgr3yf.jpg"   value="images/1sttheworld.myshopify.com/Pink-fr3fgr3yf.jpg">Pink-fr3fgr3yf.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Pink-g45gy46yh.jpg"   value="images/1sttheworld.myshopify.com/Pink-g45gy46yh.jpg">Pink-g45gy46yh.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/pink-gdrgggtteg.jpg"   value="images/1sttheworld.myshopify.com/pink-gdrgggtteg.jpg">pink-gdrgggtteg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/pink-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/pink-gdrguyuuuuu.jpg">pink-gdrguyuuuuu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/pink-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/pink-hibiscus-copy-hdfgdrgrdt.jpg">pink-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/pink-mk-1.jpg"   value="images/1sttheworld.myshopify.com/pink-mk-1.jpg">pink-mk-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Pink-rgggrtgt.jpg"   value="images/1sttheworld.myshopify.com/Pink-rgggrtgt.jpg">Pink-rgggrtgt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Pink-wfcyugbvdhcfb.jpg"   value="images/1sttheworld.myshopify.com/Pink-wfcyugbvdhcfb.jpg">Pink-wfcyugbvdhcfb.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Pinkk-1.jpg"   value="images/1sttheworld.myshopify.com/Pinkk-1.jpg">Pinkk-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Poland-Hoodie.jpg"   value="images/1sttheworld.myshopify.com/Poland-Hoodie.jpg">Poland-Hoodie.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Poland-Polo-F.jpg"   value="images/1sttheworld.myshopify.com/Poland-Polo-F.jpg">Poland-Polo-F.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Poland-tshirt-f-.jpg"   value="images/1sttheworld.myshopify.com/Poland-tshirt-f-.jpg">Poland-tshirt-f-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Poland-ZHoodie.jpg"   value="images/1sttheworld.myshopify.com/Poland-ZHoodie.jpg">Poland-ZHoodie.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Polo-truoc-2.jpg"   value="images/1sttheworld.myshopify.com/Polo-truoc-2.jpg">Polo-truoc-2.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/PP-1.jpg"   value="images/1sttheworld.myshopify.com/PP-1.jpg">PP-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/pp-1.jpg"   value="images/1sttheworld.myshopify.com/pp-1.jpg">pp-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/pp11.jpg"   value="images/1sttheworld.myshopify.com/pp11.jpg">pp11.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Pt-1.jpg"   value="images/1sttheworld.myshopify.com/Pt-1.jpg">Pt-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Pt-5.jpg"   value="images/1sttheworld.myshopify.com/Pt-5.jpg">Pt-5.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/pt01.jpg"   value="images/1sttheworld.myshopify.com/pt01.jpg">pt01.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Puerto-Rico-Hoodie-Coqui-Frog-Custom-Mk.jpg"   value="images/1sttheworld.myshopify.com/Puerto-Rico-Hoodie-Coqui-Frog-Custom-Mk.jpg">Puerto-Rico-Hoodie-Coqui-Frog-Custom-Mk.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Purple-1.jpg"   value="images/1sttheworld.myshopify.com/Purple-1.jpg">Purple-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Purple-1fnejnc.jpg"   value="images/1sttheworld.myshopify.com/Purple-1fnejnc.jpg">Purple-1fnejnc.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/purple-2HFHYHYHY.jpg"   value="images/1sttheworld.myshopify.com/purple-2HFHYHYHY.jpg">purple-2HFHYHYHY.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Purple-11.jpg"   value="images/1sttheworld.myshopify.com/Purple-11.jpg">Purple-11.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/purple-55.jpg"   value="images/1sttheworld.myshopify.com/purple-55.jpg">purple-55.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Purple-1111.jpg"   value="images/1sttheworld.myshopify.com/Purple-1111.jpg">Purple-1111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Purple-11111.jpg"   value="images/1sttheworld.myshopify.com/Purple-11111.jpg">Purple-11111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Purple-111111.jpg"   value="images/1sttheworld.myshopify.com/Purple-111111.jpg">Purple-111111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Purple-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/Purple-copy-hdfgdrgrdt.jpg">Purple-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Purple-fcygdbfch.jpg"   value="images/1sttheworld.myshopify.com/Purple-fcygdbfch.jpg">Purple-fcygdbfch.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/purple-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/purple-fergrgrgr.jpg">purple-fergrgrgr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Purple-gdrgggtteg.jpg"   value="images/1sttheworld.myshopify.com/Purple-gdrgggtteg.jpg">Purple-gdrgggtteg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Purple-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/Purple-gdrguyuuuuu.jpg">Purple-gdrguyuuuuu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Purple-grgrvgrf.jpg"   value="images/1sttheworld.myshopify.com/Purple-grgrvgrf.jpg">Purple-grgrvgrf.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Purple-grwgvrg.jpg"   value="images/1sttheworld.myshopify.com/Purple-grwgvrg.jpg">Purple-grwgvrg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/purple-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/purple-hibiscus-copy-hdfgdrgrdt.jpg">purple-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Purple-iqgfdiuebfdejd.jpg"   value="images/1sttheworld.myshopify.com/Purple-iqgfdiuebfdejd.jpg">Purple-iqgfdiuebfdejd.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/purple-vncijdniudr.jpg"   value="images/1sttheworld.myshopify.com/purple-vncijdniudr.jpg">purple-vncijdniudr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Purple-ygtygyuy.jpg"   value="images/1sttheworld.myshopify.com/Purple-ygtygyuy.jpg">Purple-ygtygyuy.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Purplee-1.jpg"   value="images/1sttheworld.myshopify.com/Purplee-1.jpg">Purplee-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/qdefefef.jpg"   value="images/1sttheworld.myshopify.com/qdefefef.jpg">qdefefef.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/qdq.jpg"   value="images/1sttheworld.myshopify.com/qdq.jpg">qdq.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/qeqq.jpg"   value="images/1sttheworld.myshopify.com/qeqq.jpg">qeqq.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/qetfregtrhyt.jpg"   value="images/1sttheworld.myshopify.com/qetfregtrhyt.jpg">qetfregtrhyt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/qu-e23r3.jpg"   value="images/1sttheworld.myshopify.com/qu-e23r3.jpg">qu-e23r3.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/qu-er.png"   value="images/1sttheworld.myshopify.com/qu-er.png">qu-er.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Quilt-3.jpg"   value="images/1sttheworld.myshopify.com/Quilt-3.jpg">Quilt-3.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/quilt-bed-set-4.jpg"   value="images/1sttheworld.myshopify.com/quilt-bed-set-4.jpg">quilt-bed-set-4.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/quilt-bed-set-khong-chu.jpg"   value="images/1sttheworld.myshopify.com/quilt-bed-set-khong-chu.jpg">quilt-bed-set-khong-chu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/quilt-bed-set.jpg"   value="images/1sttheworld.myshopify.com/quilt-bed-set.jpg">quilt-bed-set.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/quilt-hvhv.jpg"   value="images/1sttheworld.myshopify.com/quilt-hvhv.jpg">quilt-hvhv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/re.jpg"   value="images/1sttheworld.myshopify.com/re.jpg">re.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Red-1.jpg"   value="images/1sttheworld.myshopify.com/Red-1.jpg">Red-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/red-1.jpg"   value="images/1sttheworld.myshopify.com/red-1.jpg">red-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Red-1fnejnc.jpg"   value="images/1sttheworld.myshopify.com/Red-1fnejnc.jpg">Red-1fnejnc.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/red-2WGREGRGR.jpg"   value="images/1sttheworld.myshopify.com/red-2WGREGRGR.jpg">red-2WGREGRGR.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Red-11.jpg"   value="images/1sttheworld.myshopify.com/Red-11.jpg">Red-11.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/red-55.jpg"   value="images/1sttheworld.myshopify.com/red-55.jpg">red-55.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Red-1111.jpg"   value="images/1sttheworld.myshopify.com/Red-1111.jpg">Red-1111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Red-11111.jpg"   value="images/1sttheworld.myshopify.com/Red-11111.jpg">Red-11111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Red-111111.jpg"   value="images/1sttheworld.myshopify.com/Red-111111.jpg">Red-111111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/red-byuwegfyuegdyu.jpg"   value="images/1sttheworld.myshopify.com/red-byuwegfyuegdyu.jpg">red-byuwegfyuegdyu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Red-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/Red-copy-hdfgdrgrdt.jpg">Red-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Red-ergtny.jpg"   value="images/1sttheworld.myshopify.com/Red-ergtny.jpg">Red-ergtny.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/red-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/red-fergrgrgr.jpg">red-fergrgrgr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Red-gdrgggtteg.jpg"   value="images/1sttheworld.myshopify.com/Red-gdrgggtteg.jpg">Red-gdrgggtteg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/red-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/red-gdrguyuuuuu.jpg">red-gdrguyuuuuu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Red-hbyrhbrb.jpg"   value="images/1sttheworld.myshopify.com/Red-hbyrhbrb.jpg">Red-hbyrhbrb.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/red-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/red-hibiscus-copy-hdfgdrgrdt.jpg">red-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/red-mk-1.jpg"   value="images/1sttheworld.myshopify.com/red-mk-1.jpg">red-mk-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Red-rfrgvtg.jpg"   value="images/1sttheworld.myshopify.com/Red-rfrgvtg.jpg">Red-rfrgvtg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Red-sgfchsbcfje.jpg"   value="images/1sttheworld.myshopify.com/Red-sgfchsbcfje.jpg">Red-sgfchsbcfje.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Red-ugvyhyg.jpg"   value="images/1sttheworld.myshopify.com/Red-ugvyhyg.jpg">Red-ugvyhyg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Red-vgegvrgv.jpg"   value="images/1sttheworld.myshopify.com/Red-vgegvrgv.jpg">Red-vgegvrgv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Red-ygvh.jpg"   value="images/1sttheworld.myshopify.com/Red-ygvh.jpg">Red-ygvh.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Redd-1.jpg"   value="images/1sttheworld.myshopify.com/Redd-1.jpg">Redd-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/regg-1.jpg"   value="images/1sttheworld.myshopify.com/regg-1.jpg">regg-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Reggae-1.jpg"   value="images/1sttheworld.myshopify.com/Reggae-1.jpg">Reggae-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Reggae-1fnejnc.jpg"   value="images/1sttheworld.myshopify.com/Reggae-1fnejnc.jpg">Reggae-1fnejnc.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/reggae-2GETGTEHBT.jpg"   value="images/1sttheworld.myshopify.com/reggae-2GETGTEHBT.jpg">reggae-2GETGTEHBT.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Reggae-11.jpg"   value="images/1sttheworld.myshopify.com/Reggae-11.jpg">Reggae-11.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/reggae-55.jpg"   value="images/1sttheworld.myshopify.com/reggae-55.jpg">reggae-55.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Reggae-1111.jpg"   value="images/1sttheworld.myshopify.com/Reggae-1111.jpg">Reggae-1111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Reggae-11111.jpg"   value="images/1sttheworld.myshopify.com/Reggae-11111.jpg">Reggae-11111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Reggae-111111.jpg"   value="images/1sttheworld.myshopify.com/Reggae-111111.jpg">Reggae-111111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Reggae-121212.jpg"   value="images/1sttheworld.myshopify.com/Reggae-121212.jpg">Reggae-121212.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/reggae-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/reggae-copy-hdfgdrgrdt.jpg">reggae-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Reggae-cwhebceh.jpg"   value="images/1sttheworld.myshopify.com/Reggae-cwhebceh.jpg">Reggae-cwhebceh.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/reggae-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/reggae-fergrgrgr.jpg">reggae-fergrgrgr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Reggae-frfvcvg.jpg"   value="images/1sttheworld.myshopify.com/Reggae-frfvcvg.jpg">Reggae-frfvcvg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/reggae-fshrfghjrsfvryuw.jpg"   value="images/1sttheworld.myshopify.com/reggae-fshrfghjrsfvryuw.jpg">reggae-fshrfghjrsfvryuw.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Reggae-gdrgggtteg.jpg"   value="images/1sttheworld.myshopify.com/Reggae-gdrgggtteg.jpg">Reggae-gdrgggtteg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Reggae-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/Reggae-gdrguyuuuuu.jpg">Reggae-gdrguyuuuuu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Reggae-gvtrhyuht.jpg"   value="images/1sttheworld.myshopify.com/Reggae-gvtrhyuht.jpg">Reggae-gvtrhyuht.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/reggae-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/reggae-hibiscus-copy-hdfgdrgrdt.jpg">reggae-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Reggae-hyghg.jpg"   value="images/1sttheworld.myshopify.com/Reggae-hyghg.jpg">Reggae-hyghg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Reggae-jjmythnt.jpg"   value="images/1sttheworld.myshopify.com/Reggae-jjmythnt.jpg">Reggae-jjmythnt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/reggae-mk-1.jpg"   value="images/1sttheworld.myshopify.com/reggae-mk-1.jpg">reggae-mk-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Reggae-vgvd.jpg"   value="images/1sttheworld.myshopify.com/Reggae-vgvd.jpg">Reggae-vgvd.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Reggaea-1.jpg"   value="images/1sttheworld.myshopify.com/Reggaea-1.jpg">Reggaea-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/regwreew.jpg"   value="images/1sttheworld.myshopify.com/regwreew.jpg">regwreew.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/romania-custom-hoodie.jpg"   value="images/1sttheworld.myshopify.com/romania-custom-hoodie.jpg">romania-custom-hoodie.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/romania-custom-polo-f.jpg"   value="images/1sttheworld.myshopify.com/romania-custom-polo-f.jpg">romania-custom-polo-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/romania-custom-tshirt-f.jpg"   value="images/1sttheworld.myshopify.com/romania-custom-tshirt-f.jpg">romania-custom-tshirt-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/romania-custom-zhoodie.jpg"   value="images/1sttheworld.myshopify.com/romania-custom-zhoodie.jpg">romania-custom-zhoodie.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/rtcyhu.jpg"   value="images/1sttheworld.myshopify.com/rtcyhu.jpg">rtcyhu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Saddle-Bag-11.jpg"   value="images/1sttheworld.myshopify.com/Saddle-Bag-11.jpg">Saddle-Bag-11.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/SCASC.jpg"   value="images/1sttheworld.myshopify.com/SCASC.jpg">SCASC.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/scf.jpg"   value="images/1sttheworld.myshopify.com/scf.jpg">scf.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/scghsucjvhs.jpg"   value="images/1sttheworld.myshopify.com/scghsucjvhs.jpg">scghsucjvhs.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/scotland-custom-hoodie-f.jpg"   value="images/1sttheworld.myshopify.com/scotland-custom-hoodie-f.jpg">scotland-custom-hoodie-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/scotland-custom-polo-f.jpg"   value="images/1sttheworld.myshopify.com/scotland-custom-polo-f.jpg">scotland-custom-polo-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/scotland-custom-tshirt-f.jpg"   value="images/1sttheworld.myshopify.com/scotland-custom-tshirt-f.jpg">scotland-custom-tshirt-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/scotland-custom-zhoodie-f.jpg"   value="images/1sttheworld.myshopify.com/scotland-custom-zhoodie-f.jpg">scotland-custom-zhoodie-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/scsadcds.jpg"   value="images/1sttheworld.myshopify.com/scsadcds.jpg">scsadcds.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/scsCS.jpg"   value="images/1sttheworld.myshopify.com/scsCS.jpg">scsCS.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/SCWFAVSC.jpg"   value="images/1sttheworld.myshopify.com/SCWFAVSC.jpg">SCWFAVSC.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sdeiugfcbjew.jpg"   value="images/1sttheworld.myshopify.com/sdeiugfcbjew.jpg">sdeiugfcbjew.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/SDSD.jpg"   value="images/1sttheworld.myshopify.com/SDSD.jpg">SDSD.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sdvcasv.jpg"   value="images/1sttheworld.myshopify.com/sdvcasv.jpg">sdvcasv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sfaed.jpg"   value="images/1sttheworld.myshopify.com/sfaed.jpg">sfaed.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sfasfasfaront-big-right-side-benth.jpg"   value="images/1sttheworld.myshopify.com/sfasfasfaront-big-right-side-benth.jpg">sfasfasfaront-big-right-side-benth.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sfdvdgfgfg.jpg"   value="images/1sttheworld.myshopify.com/sfdvdgfgfg.jpg">sfdvdgfgfg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sfegrthrthrttb.jpg"   value="images/1sttheworld.myshopify.com/sfegrthrthrttb.jpg">sfegrthrthrttb.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sfhiwfiw.jpg"   value="images/1sttheworld.myshopify.com/sfhiwfiw.jpg">sfhiwfiw.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sfjciuewview.jpg"   value="images/1sttheworld.myshopify.com/sfjciuewview.jpg">sfjciuewview.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sfsfsafvsafsfse-benth.jpg"   value="images/1sttheworld.myshopify.com/sfsfsafvsafsfse-benth.jpg">sfsfsafvsafsfse-benth.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sgwuwu.jpg"   value="images/1sttheworld.myshopify.com/sgwuwu.jpg">sgwuwu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/shceuiwgvciuew.jpg"   value="images/1sttheworld.myshopify.com/shceuiwgvciuew.jpg">shceuiwgvciuew.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/shcuewgvcuiewdhcn.jpg"   value="images/1sttheworld.myshopify.com/shcuewgvcuiewdhcn.jpg">shcuewgvcuiewdhcn.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/shcuyewgciue.jpg"   value="images/1sttheworld.myshopify.com/shcuyewgciue.jpg">shcuyewgciue.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/shdewhfuiej.jpg"   value="images/1sttheworld.myshopify.com/shdewhfuiej.jpg">shdewhfuiej.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Shoulder-Handbag-vfvgfv.jpg"   value="images/1sttheworld.myshopify.com/Shoulder-Handbag-vfvgfv.jpg">Shoulder-Handbag-vfvgfv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/siudgeiwugvjrn.jpg"   value="images/1sttheworld.myshopify.com/siudgeiwugvjrn.jpg">siudgeiwugvjrn.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sjfnwsfkw.jpg"   value="images/1sttheworld.myshopify.com/sjfnwsfkw.jpg">sjfnwsfkw.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sksklksskks.jpg"   value="images/1sttheworld.myshopify.com/sksklksskks.jpg">sksklksskks.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Sneaker-Ireland.jpg"   value="images/1sttheworld.myshopify.com/Sneaker-Ireland.jpg">Sneaker-Ireland.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/ss.jpg"   value="images/1sttheworld.myshopify.com/ss.jpg">ss.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/su-cwcf.jpg"   value="images/1sttheworld.myshopify.com/su-cwcf.jpg">su-cwcf.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/SU-DDWE.jpg"   value="images/1sttheworld.myshopify.com/SU-DDWE.jpg">SU-DDWE.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/svcscbhs.jpg"   value="images/1sttheworld.myshopify.com/svcscbhs.jpg">svcscbhs.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/svcshcbhs.jpg"   value="images/1sttheworld.myshopify.com/svcshcbhs.jpg">svcshcbhs.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/svedv.jpg"   value="images/1sttheworld.myshopify.com/svedv.jpg">svedv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sweden-hoodie-.jpg"   value="images/1sttheworld.myshopify.com/sweden-hoodie-.jpg">sweden-hoodie-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sweden-polo-f.jpg"   value="images/1sttheworld.myshopify.com/sweden-polo-f.jpg">sweden-polo-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sweden-tshirt-f-.jpg"   value="images/1sttheworld.myshopify.com/sweden-tshirt-f-.jpg">sweden-tshirt-f-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sweden-zhoodie-.jpg"   value="images/1sttheworld.myshopify.com/sweden-zhoodie-.jpg">sweden-zhoodie-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/swfewfew.jpg"   value="images/1sttheworld.myshopify.com/swfewfew.jpg">swfewfew.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/switzerland-custom-hoodie-f.jpg"   value="images/1sttheworld.myshopify.com/switzerland-custom-hoodie-f.jpg">switzerland-custom-hoodie-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/switzerland-custom-hoodie.jpg"   value="images/1sttheworld.myshopify.com/switzerland-custom-hoodie.jpg">switzerland-custom-hoodie.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/switzerland-custom-polo-f.jpg"   value="images/1sttheworld.myshopify.com/switzerland-custom-polo-f.jpg">switzerland-custom-polo-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/switzerland-custom-tshirt-f.jpg"   value="images/1sttheworld.myshopify.com/switzerland-custom-tshirt-f.jpg">switzerland-custom-tshirt-f.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/switzerland-custom-zhoodie.jpg"   value="images/1sttheworld.myshopify.com/switzerland-custom-zhoodie.jpg">switzerland-custom-zhoodie.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sxsxswdxw.jpg"   value="images/1sttheworld.myshopify.com/sxsxswdxw.jpg">sxsxswdxw.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/sydyewufgbjernv.jpg"   value="images/1sttheworld.myshopify.com/sydyewufgbjernv.jpg">sydyewufgbjernv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/tdctfcty.jpg"   value="images/1sttheworld.myshopify.com/tdctfcty.jpg">tdctfcty.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/tend-dgdg.jpg"   value="images/1sttheworld.myshopify.com/tend-dgdg.jpg">tend-dgdg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Tin-Sign.jpg"   value="images/1sttheworld.myshopify.com/Tin-Sign.jpg">Tin-Sign.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Toaowjj.jpg"   value="images/1sttheworld.myshopify.com/Toaowjj.jpg">Toaowjj.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Tote-Bag-gvyruhgb.jpg"   value="images/1sttheworld.myshopify.com/Tote-Bag-gvyruhgb.jpg">Tote-Bag-gvyruhgb.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Tote-Bag-hghvghv.jpg"   value="images/1sttheworld.myshopify.com/Tote-Bag-hghvghv.jpg">Tote-Bag-hghvghv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/trang-no.jpg"   value="images/1sttheworld.myshopify.com/trang-no.jpg">trang-no.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/truoc-fjkdsfjd.jpg"   value="images/1sttheworld.myshopify.com/truoc-fjkdsfjd.jpg">truoc-fjkdsfjd.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/tttsuxduai.jpg"   value="images/1sttheworld.myshopify.com/tttsuxduai.jpg">tttsuxduai.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Turquoise-1.jpg"   value="images/1sttheworld.myshopify.com/Turquoise-1.jpg">Turquoise-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Turquoise-1fnejnc.jpg"   value="images/1sttheworld.myshopify.com/Turquoise-1fnejnc.jpg">Turquoise-1fnejnc.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Turquoise-11.jpg"   value="images/1sttheworld.myshopify.com/Turquoise-11.jpg">Turquoise-11.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Turquoise-21.jpg"   value="images/1sttheworld.myshopify.com/Turquoise-21.jpg">Turquoise-21.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Turquoise-1111.jpg"   value="images/1sttheworld.myshopify.com/Turquoise-1111.jpg">Turquoise-1111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Turquoise-11111.jpg"   value="images/1sttheworld.myshopify.com/Turquoise-11111.jpg">Turquoise-11111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Turquoise-mk-1.jpg"   value="images/1sttheworld.myshopify.com/Turquoise-mk-1.jpg">Turquoise-mk-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Turquoisee-1.jpg"   value="images/1sttheworld.myshopify.com/Turquoisee-1.jpg">Turquoisee-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/u-cfwq.jpg"   value="images/1sttheworld.myshopify.com/u-cfwq.jpg">u-cfwq.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/u-dwdcwovered.jpg"   value="images/1sttheworld.myshopify.com/u-dwdcwovered.jpg">u-dwdcwovered.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/u-dwdw.jpg"   value="images/1sttheworld.myshopify.com/u-dwdw.jpg">u-dwdw.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/u-efeq.jpg"   value="images/1sttheworld.myshopify.com/u-efeq.jpg">u-efeq.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/u-egregrege.jpg"   value="images/1sttheworld.myshopify.com/u-egregrege.jpg">u-egregrege.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/u-erhgefweg.jpg"   value="images/1sttheworld.myshopify.com/u-erhgefweg.jpg">u-erhgefweg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/u-ewfgew.jpg"   value="images/1sttheworld.myshopify.com/u-ewfgew.jpg">u-ewfgew.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/u-hciuewigfew.jpg"   value="images/1sttheworld.myshopify.com/u-hciuewigfew.jpg">u-hciuewigfew.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/U-HDIWQBJU.jpg"   value="images/1sttheworld.myshopify.com/U-HDIWQBJU.jpg">U-HDIWQBJU.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/u-tfgewhtjmntbrve.jpg"   value="images/1sttheworld.myshopify.com/u-tfgewhtjmntbrve.jpg">u-tfgewhtjmntbrve.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/u-uidgiuefe.jpg"   value="images/1sttheworld.myshopify.com/u-uidgiuefe.jpg">u-uidgiuefe.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Untitled-1.jpg"   value="images/1sttheworld.myshopify.com/Untitled-1.jpg">Untitled-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/uydfgiewjcm.jpg"   value="images/1sttheworld.myshopify.com/uydfgiewjcm.jpg">uydfgiewjcm.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/vbierjbviuew.jpg"   value="images/1sttheworld.myshopify.com/vbierjbviuew.jpg">vbierjbviuew.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/vedvedeertical-line-wooden-bg-1200x1200-.jpg"   value="images/1sttheworld.myshopify.com/vedvedeertical-line-wooden-bg-1200x1200-.jpg">vedvedeertical-line-wooden-bg-1200x1200-.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/vfedv.jpg"   value="images/1sttheworld.myshopify.com/vfedv.jpg">vfedv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/vgdsgsfbsdsgss.jpg"   value="images/1sttheworld.myshopify.com/vgdsgsfbsdsgss.jpg">vgdsgsfbsdsgss.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/wall-clock-mockup1-.png"   value="images/1sttheworld.myshopify.com/wall-clock-mockup1-.png">wall-clock-mockup1-.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/wall-clock.png"   value="images/1sttheworld.myshopify.com/wall-clock.png">wall-clock.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Wallet-uifhueirbf.jpg"   value="images/1sttheworld.myshopify.com/Wallet-uifhueirbf.jpg">Wallet-uifhueirbf.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/wdwdwr-Tote-Bag.jpg"   value="images/1sttheworld.myshopify.com/wdwdwr-Tote-Bag.jpg">wdwdwr-Tote-Bag.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/wdwwd.jpg"   value="images/1sttheworld.myshopify.com/wdwwd.jpg">wdwwd.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/wfefwrew.jpg"   value="images/1sttheworld.myshopify.com/wfefwrew.jpg">wfefwrew.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/wfeqfe.jpg"   value="images/1sttheworld.myshopify.com/wfeqfe.jpg">wfeqfe.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/wfeqfgrehg.jpg"   value="images/1sttheworld.myshopify.com/wfeqfgrehg.jpg">wfeqfgrehg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/wfoiewgnkreg.jpg"   value="images/1sttheworld.myshopify.com/wfoiewgnkreg.jpg">wfoiewgnkreg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/White-gegtgtht.jpg"   value="images/1sttheworld.myshopify.com/White-gegtgtht.jpg">White-gegtgtht.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/WL-O-N.jpg"   value="images/1sttheworld.myshopify.com/WL-O-N.jpg">WL-O-N.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Women-Wallet-mockup-jhdbhjebd.jpg"   value="images/1sttheworld.myshopify.com/Women-Wallet-mockup-jhdbhjebd.jpg">Women-Wallet-mockup-jhdbhjebd.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Womens-Wallet-gvgfyug.jpg"   value="images/1sttheworld.myshopify.com/Womens-Wallet-gvgfyug.jpg">Womens-Wallet-gvgfyug.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/wwhite-no.png"   value="images/1sttheworld.myshopify.com/wwhite-no.png">wwhite-no.png</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/www.jpg"   value="images/1sttheworld.myshopify.com/www.jpg">www.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/xdsacsa.jpg"   value="images/1sttheworld.myshopify.com/xdsacsa.jpg">xdsacsa.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/y-ufusfss.jpg"   value="images/1sttheworld.myshopify.com/y-ufusfss.jpg">y-ufusfss.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Yellow-1.jpg"   value="images/1sttheworld.myshopify.com/Yellow-1.jpg">Yellow-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Yellow-1fnejnc.jpg"   value="images/1sttheworld.myshopify.com/Yellow-1fnejnc.jpg">Yellow-1fnejnc.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Yellow-11.jpg"   value="images/1sttheworld.myshopify.com/Yellow-11.jpg">Yellow-11.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/yellow-55.jpg"   value="images/1sttheworld.myshopify.com/yellow-55.jpg">yellow-55.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Yellow-1111.jpg"   value="images/1sttheworld.myshopify.com/Yellow-1111.jpg">Yellow-1111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Yellow-11111.jpg"   value="images/1sttheworld.myshopify.com/Yellow-11111.jpg">Yellow-11111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Yellow-111111.jpg"   value="images/1sttheworld.myshopify.com/Yellow-111111.jpg">Yellow-111111.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Yellow-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/Yellow-copy-hdfgdrgrdt.jpg">Yellow-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Yellow-evgregvfre.jpg"   value="images/1sttheworld.myshopify.com/Yellow-evgregvfre.jpg">Yellow-evgregvfre.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/yellow-fergrgrgr.jpg"   value="images/1sttheworld.myshopify.com/yellow-fergrgrgr.jpg">yellow-fergrgrgr.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Yellow-frvrvrv.jpg"   value="images/1sttheworld.myshopify.com/Yellow-frvrvrv.jpg">Yellow-frvrvrv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Yellow-gdrgggtteg.jpg"   value="images/1sttheworld.myshopify.com/Yellow-gdrgggtteg.jpg">Yellow-gdrgggtteg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/yellow-gdrguyuuuuu.jpg"   value="images/1sttheworld.myshopify.com/yellow-gdrguyuuuuu.jpg">yellow-gdrguyuuuuu.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/yellow-hibiscus-copy-hdfgdrgrdt.jpg"   value="images/1sttheworld.myshopify.com/yellow-hibiscus-copy-hdfgdrgrdt.jpg">yellow-hibiscus-copy-hdfgdrgrdt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/yellow-hjbdhcbufde.jpg"   value="images/1sttheworld.myshopify.com/yellow-hjbdhcbufde.jpg">yellow-hjbdhcbufde.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Yellow-hytjyj.jpg"   value="images/1sttheworld.myshopify.com/Yellow-hytjyj.jpg">Yellow-hytjyj.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/yellow-mk-1.jpg"   value="images/1sttheworld.myshopify.com/yellow-mk-1.jpg">yellow-mk-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Yellow-vfevrvfrv.jpg"   value="images/1sttheworld.myshopify.com/Yellow-vfevrvfrv.jpg">Yellow-vfevrvfrv.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/yellow-WFWEF-VVFFRRF.jpg"   value="images/1sttheworld.myshopify.com/yellow-WFWEF-VVFFRRF.jpg">yellow-WFWEF-VVFFRRF.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/Yelloww-1.jpg"   value="images/1sttheworld.myshopify.com/Yelloww-1.jpg">Yelloww-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/YGSWIUFJ.jpg"   value="images/1sttheworld.myshopify.com/YGSWIUFJ.jpg">YGSWIUFJ.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/yl-1.jpg"   value="images/1sttheworld.myshopify.com/yl-1.jpg">yl-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/YL-1.jpg"   value="images/1sttheworld.myshopify.com/YL-1.jpg">YL-1.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/ytfgfggfgt.jpg"   value="images/1sttheworld.myshopify.com/ytfgfggfgt.jpg">ytfgfggfgt.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/yusyfgewjg.jpg"   value="images/1sttheworld.myshopify.com/yusyfgewjg.jpg">yusyfgewjg.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/zip.jpg"   value="images/1sttheworld.myshopify.com/zip.jpg">zip.jpg</option><option class="uploadedimg"  data-value="images/1sttheworld.myshopify.com/zipzip.jpg"   value="images/1sttheworld.myshopify.com/zipzip.jpg">zipzip.jpg</option>';
		
	</script>

	
<div id="clone" >
			  <div class="col-lg-3 col-md-4 col-sm-3 col-xs-3 bhoechie-tab-menu">
		<ul id="myTab" class="nav nav-tabs" role="tablist">
						<li onclick="updatearea(this,event)" id="li1" class="fieldtab active"><a href="#tab1" ><span class="ui-icon ui-icon-arrowthick-2-n-s" style="margin: 2px"></span><span class="djkks">Image</span></span></a></li>
						<li onclick="updatearea(this,event)" id="li2" class="fieldtab "><a href="#tab2" ><span class="ui-icon ui-icon-arrowthick-2-n-s" style="margin: 2px"></span><span class="djkks">Engrave On Back</span></span></a></li>
						<li onclick="updatearea(this,event)" id="li3" class="fieldtab "><a href="#tab3" ><span class="ui-icon ui-icon-arrowthick-2-n-s" style="margin: 2px"></span><span class="djkks">Text</span></span></a></li>
		
</ul>

<ul id="myTab2" class="nav nav-tabs2" style="padding-bottom: 20px;">

						<li id="last" ><a onclick="$('.pplr-options').slideToggle(100);" style="text-align: left;" class="addfield btn btn-success" href="#addTab"><span class="glyphicon glyphicon-plus"></span> Add Field</a>
							<div class="pplr-options" style="display: none;">
								<div style=" top: 0px; width: 170px;">
									<span  onclick="addfield(this,1)">Text (Single-line)</span>
									<span  onclick="addfield(this,2)">Textarea (Multi-line)</span>
									<span  onclick="addfield(this,3)">Image Upload</span>
									<span  onclick="addfield(this,3,true)">Image Swatch</span>
									<span  onclick="addfield(this,4)">Color Swatch</span>
									<span  onclick="addfield(this,7)">Options List</span>
									<span  onclick="addfield(this,8)">Checkbox</span>

								</div>
							</div>


						</li>
				<li id="lix" ><a href="#"  onclick="updatecondition(true);showcondition(event,this);"><span class="glyphicon glyphicon-cog"></span> Set Conditions </a></li>
</ul>


        </div>
		<div class="col-lg-9 col-md-8 col-sm-9 col-xs-9 bhoechie-tab">
		<div 	class="tab-content">
				<div id="tab1" class="tab-pane fade in active clone selected" >

		<div class="" style="padding-top:0px;">	
		<div class="akb"  >
			<div class="form-group selectbackground" >
			<label style="text-align: center;">Background <span data-original-title="Choosing different background image will create new view." class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="top" title=""></span></label>
			<div class="input-group bcimage" >
			<select name="cstmfy_each_url[]"   onchange="changeimage(this)"  class="form-control2 imageupload imagemain" >
				<option class="nonvariant" data-value="images/1sttheworld.myshopify.com/nz-6.png"  selected value="images/1sttheworld.myshopify.com/nz-6.png">nz-6.png</option>
								<option  data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/nz_3_de91531b-e0b3-4b8c-81d7-c88901522f77_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/nz_3_de91531b-e0b3-4b8c-81d7-c88901522f77.jpg?v=1575993256'>
				1 : nz_3_de91531b-e0b3-4b8c-81d7-c88901522f77.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/1213_fcc39099-cc6f-4c06-bfe3-eccdc7c29291_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/1213_fcc39099-cc6f-4c06-bfe3-eccdc7c29291.jpg?v=1575993256'>
				2 : 1213_fcc39099-cc6f-4c06-bfe3-eccdc7c29291.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/Nz_1_6ac36429-55be-4021-9f84-5f98db397d25_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/Nz_1_6ac36429-55be-4021-9f84-5f98db397d25.jpg?v=1575993256'>
				3 : Nz_1_6ac36429-55be-4021-9f84-5f98db397d25.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/nz_2_f7d6eba3-005f-4373-8330-dfc96fc853ed_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/nz_2_f7d6eba3-005f-4373-8330-dfc96fc853ed.jpg?v=1575993256'>
				4 : nz_2_f7d6eba3-005f-4373-8330-dfc96fc853ed.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/nz_4_f3b22cbc-632c-4e39-ac2c-653aa2545379_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/nz_4_f3b22cbc-632c-4e39-ac2c-653aa2545379.jpg?v=1575993256'>
				5 : nz_4_f3b22cbc-632c-4e39-ac2c-653aa2545379.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/nz_5_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/nz_5.jpg?v=1575993256'>
				6 : nz_5.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/fghg_7e21665e-16f1-4a80-8917-b1aa1131d11a_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/fghg_7e21665e-16f1-4a80-8917-b1aa1131d11a.jpg?v=1575993256'>
				7 : fghg_7e21665e-16f1-4a80-8917-b1aa1131d11a.jpg</option>	
				<option class='nonvariant' data-value='images/a.png' value='images/a.png'>a.png</option><option class='nonvariant' data-value='images/blank.png' value='images/blank.png'>blank.png</option>			</select>
			<span class="input-group-btn" title="Upload Background Image">
					<a data-toggle="modal" data-target="#myModal10" class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
				</span>
			<a class="thumbimgselect thumbimgselecta" href="" style="left: 0px;" onclick="pplrpopupimage(this,event)"  >
				
				<img width="70" src="images/1sttheworld.myshopify.com/nz-6.png" />
			</a>
			</div>
		 </div>
		
		<div class="form-group field-type" style="">
			<label style="width: 170px;">Field Type</label>
				<select name="cstmfy_input_type[]" class="form-control" onchange="selecttype(this)" >
					<option   value='1'>Text (Single-line)</option>	
					<option   value='2'>Textarea (Multi-line)</option>
					<option selected='selected'  value='3'>Image Upload</option>

					<option   value='3'>Image Swatch</option>

					<option   value='4'>Color Swatch</option>

					<option   value='7'>Options List </option>	

					<option   value='8'>Checkbox</option>			
				</select>				
		</div>
		
		</div>


		
	<div class="bhoechie-tab-content active">
		<div class="form-group">
			<label>Label</label>
			<textarea name="cstmfy_name[]" onchange="updatename(this)" style="width: 130px;height:34px;" class="form-control nc">Image</textarea>
			
		</div>
		
		<div class="form-group group-image " style='display:none;'>
			<label>Default Image <span data-original-title="Upload for more" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<div class="input-group swidth" >
		<div class="selectimage selectimagea">
			<select name="cstmfy_image[]" class="form-control imageupload imagesub" onchange="loadimage(this);"   >								
			<option data-value='images/a.png' value='images/a.png'>a.png</option><option selected data-value='images/blank.png' value='images/blank.png'>blank.png</option>
			</select>
			<a class="thumbimgselect" href="" style="left: 0px;" onclick="pplrpopupimage(this,event)">
			</a>
		</div>

		<span class="input-group-btn">
					<a data-toggle="modal" data-target="#myModal11" class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
		</span>
		</div>
		</div>





	
		
		<div class="form-group group-image" style='display:none;'>
			<label>Layer: <span data-original-title="Selecting Bottom layer is for transparent/semitransparent png otherwise Top layer should be selected" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
				<select name="cstmfy_index[]" class="form-control" >
					<option   value='1'>Top</option>	
					<option selected='selected'  value='2'>Bottom</option>				
				</select>				
		</div>

		<div class="form-group group-image image-select" style='display:none;'>
		<label>Image Group</label>
		<select required name="cstmfy_cimage[]" class="form-control cstmfy_cimage nc" onchange="min_upload(this)"  >
			<option value="1" selected>--Select--</option>
			<option value="au">au</option><option value="hawaii">hawaii</option><option value="moose">moose</option><option value="netherlands">netherlands</option><option value="nz">nz</option>			</select>


					<a data-toggle="modal" data-target="#myModal20" class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
		<div class="maxfsu2" style="width: 100%;padding: 15px 0px;display: none;"> Maximum file size uploaded by customer is 20MB </div>
		 </div>
				 
	<div class="form-group group-image no-color cstmfy_aspect" style='display:none;'>
		<label>Aspect Ratio <span data-original-title="Ratio of selectable area of customer's uploaded image" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></label>
		<select name="cstmfy_aspect[]" class="form-control nc"   >
			<option value="1" >No</option>
			<option value="2" selected>Yes</option>
			</select>
		 </div>
		 
		<div class="form-group group-image" style='display:none;'>
			<label class="btn btn-info" onclick="pplrpopupshow()">Crop <span data-original-title="x-y-width-height(px)" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<div class="input-group"> 
			<input name="cstmfy_crop[]" readonly style="width: 110px;" value="0-0-720-720" class="form-control">
			</div>
		</div>
		<div class="form-group group-image no-color" style='display:none;'>
		<label>Grayscale <span data-original-title="make image like engraved on wood" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></label>
		<select name="cstmfy_gray[]" class="form-control"   >
			<option value="1" selected>No</option>
			<option value="2" >Yes</option>
			</select>
		 </div>

		
		<div class="form-group" style="display:none;">
			<input name="id" value="3691134976080" class="form-control">
			
		</div>
		
		<div class="form-group input-text input-monogram">
			<label>Default Value</label>
			<textarea name="cstmfy_default[]"  style="width: 130px;height:34px;" class="form-control">TEXT</textarea>		
		</div>
	


		<div class="form-group  field-color" style='display:none;'>
		<label>Color Selection
		<span data-original-title="Create color group  for Multiple Color option" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span>
		</label>
		<div class="input-group color-selection" >			
		<select name="cstmfy_fcolorc[]" class="form-control cstmfy_color nc"   >
		<option value="1" >Gradient</option>
			<option value="Colors">Colors</option><option value="Fonts">Fonts</option><option value="Choose A Color">Choose A Color</option>			</select>	
		<span class="input-group-btn" data-toggle="modal" data-target="#myModal" ><button  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</button></span>	
		</div>
			
		</div>	

	<div class="form-group  field-check" style='display:none;'>
		<label>Default state
		</label>
		<div class="input-group" >			
		<select name="cstmfy_check[]" class="form-control nc"   >
		<option value="0" selected>Unchecked</option>
		<option value="1" >checked</option>
			</select>	

		</div>
			
		</div>	




	<div class="form-group  input-drop"  >
		<label>Options List
		<span data-original-title="Create Options List to populate this" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span>
		</label>
		<div class="input-group swidth"  >
		<select name="cstmfy_drop[]" class="form-control cstmfy_drop nc" onchange="cstmfy_drop(this);">
		 <option value="1" >Choose or create</option>
			<option value="Style">Style</option><option value="Position">Position</option><option value="Vertical">Vertical</option><option value="Text Single">Text Single</option><option value="Text Box">Text Box</option><option value="Box Text">Box Text</option><option value="Couple Text">Couple Text</option><option value="Color">Color</option><option value="Colors">Colors</option><option value="Red">Red</option><option value="Black">Black</option>			</select>
			<span class="input-group-btn" data-toggle="modal" data-target="#myModal3" >
			<button  class="btn btn-success btn-add "   type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</button>
				</span>

		 </div>	 
			
	</div>


		<div class="form-group  input-drop" >
		<label>Control Type
		</label>
		<div class="input-group" >			
		<select name="cstmfy_otype[]" class="form-control nc cstmfy_otype"  onchange="cstmfy_otype(this);" >
		<option value="1" selected>Dropdown List</option>
		<option value="2" >Button</option>
		</select>	

		</div>
			
		</div>	


		<div class="form-group  input-drop d_d" style="display:">
		<label>Placeholder Text <span data-original-title="Text that appears inside an option field before a value is entered" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<input name="cstmfy_drop_deafult[]" style="width: 70px;" value="" class="form-control nc">
		</div>
		
		<div class="form-group  input-drop">
		<label>Preselect value </label>
			<div class="input-group" >		

			<select name="cstmfy_button_deafult[]" class="form-control nc c_b_d"   >
				<option value="" selected>None</option>
						</select>
			</div>
		</div>

		
		
		<div class="form-group input-textarea" style='display:none;'>
				<label>Number of line</label>
				<input name="cstmfy_wrap[]" type="number" style="width:60px;" value="3" class="form-control nc"  >		
		</div>	
		
		<div class="form-group input-textarea" style='display:none;'>
				<label>line height</label>
				<div class="input-group">
				<input name="cstmfy_line_height[]" required type="number" min="0"  step="0.01" style="width:80px;" value="0.9" class="form-control"  >	
			</div>				
		</div>	

		<div class="form-group  input-text">
				<label>Max-Character <span data-original-title="Per line for textarea" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
				<input name="cstmfy_max[]" type="number" value="200" style="width: 100px;" class="form-control nc">			
		</div>	
		
		<div class="form-group  input-text  input-monogram">
			<label>Default Font</label>
			<div class="input-group dfont" style="width: 150px;">
			<div class="selectfont">
			<select name="cstmfy_font[]" class="form-control font"   >								
			<option style="font-family: 'Arial'" class='nogroup' value='font/Arial.ttf'>Arial.ttf</option><option style="font-family: 'CurlzMT'" class='nogroup' value='font/CurlzMT.ttf'>CurlzMT.ttf</option><option style="font-family: 'OpenSans-Bold'" class='nogroup' selected  value='font/OpenSans-Bold.ttf'>OpenSans-Bold.ttf</option><option style="font-family: 'Afterglow-regular'" data-value="Afterglow-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Afterglow-regular.ttf">Afterglow-regular.ttf</option><option style="font-family: 'Agencyfb'" data-value="Agencyfb.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Agencyfb.ttf">Agencyfb.ttf</option><option style="font-family: 'Akadora'" data-value="Akadora.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Akadora.ttf">Akadora.ttf</option><option style="font-family: 'Ambar-pearl-personal-use'" data-value="Ambar-pearl-personal-use.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ambar-pearl-personal-use.ttf">Ambar-pearl-personal-use.ttf</option><option style="font-family: 'American-captain'" data-value="American-captain.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/American-captain.ttf">American-captain.ttf</option><option style="font-family: 'Aoncc-'" data-value="Aoncc-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Aoncc-.ttf">Aoncc-.ttf</option><option style="font-family: 'Arial-black'" data-value="Arial-black.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Arial-black.ttf">Arial-black.ttf</option><option style="font-family: 'Bebasneue-regular'" data-value="Bebasneue-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Bebasneue-regular.ttf">Bebasneue-regular.ttf</option><option style="font-family: 'Big-caslon-medium'" data-value="Big-caslon-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Big-caslon-medium.ttf">Big-caslon-medium.ttf</option><option style="font-family: 'Blue-ocean'" data-value="Blue-ocean.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Blue-ocean.ttf">Blue-ocean.ttf</option><option style="font-family: 'Carnevalee-freakshow'" data-value="Carnevalee-freakshow.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Carnevalee-freakshow.ttf">Carnevalee-freakshow.ttf</option><option style="font-family: 'Caviardreams-bold'" data-value="Caviardreams-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bold.ttf">Caviardreams-bold.ttf</option><option style="font-family: 'Caviardreams-bolditalic'" data-value="Caviardreams-bolditalic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bolditalic.ttf">Caviardreams-bolditalic.ttf</option><option style="font-family: 'Caviardreams-italic'" data-value="Caviardreams-italic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-italic.ttf">Caviardreams-italic.ttf</option><option style="font-family: 'Caviardreams'" data-value="Caviardreams.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams.ttf">Caviardreams.ttf</option><option style="font-family: 'Celtg-'" data-value="Celtg-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtg-.ttf">Celtg-.ttf</option><option style="font-family: 'Celtic-gaelige'" data-value="Celtic-gaelige.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtic-gaelige.ttf">Celtic-gaelige.ttf</option><option style="font-family: 'Celtichd'" data-value="Celtichd.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtichd.ttf">Celtichd.ttf</option><option style="font-family: 'Copperplate'" data-value="Copperplate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Copperplate.ttf">Copperplate.ttf</option><option style="font-family: 'Hollywoodhills'" data-value="Hollywoodhills.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Hollywoodhills.ttf">Hollywoodhills.ttf</option><option style="font-family: 'Icielamerigraf'" data-value="Icielamerigraf.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Icielamerigraf.ttf">Icielamerigraf.ttf</option><option style="font-family: 'Ifc-insane-rodeo'" data-value="Ifc-insane-rodeo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ifc-insane-rodeo.ttf">Ifc-insane-rodeo.ttf</option><option style="font-family: 'Irishpenny'" data-value="Irishpenny.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishpenny.ttf">Irishpenny.ttf</option><option style="font-family: 'Irishuncialfabeta-bold'" data-value="Irishuncialfabeta-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishuncialfabeta-bold.ttf">Irishuncialfabeta-bold.ttf</option><option style="font-family: 'Keepcalm-medium'" data-value="Keepcalm-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Keepcalm-medium.ttf">Keepcalm-medium.ttf</option><option style="font-family: 'Mermaid-swash-caps'" data-value="Mermaid-swash-caps.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid-swash-caps.ttf">Mermaid-swash-caps.ttf</option><option style="font-family: 'Mermaid1001'" data-value="Mermaid1001.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid1001.ttf">Mermaid1001.ttf</option><option style="font-family: 'Myriadpro-regular'" data-value="Myriadpro-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Myriadpro-regular.ttf">Myriadpro-regular.ttf</option><option style="font-family: 'Oceanicdrift3d'" data-value="Oceanicdrift3d.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oceanicdrift3d.ttf">Oceanicdrift3d.ttf</option><option style="font-family: 'Oldlondon'" data-value="Oldlondon.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondon.ttf">Oldlondon.ttf</option><option style="font-family: 'Oldlondonalternate'" data-value="Oldlondonalternate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondonalternate.ttf">Oldlondonalternate.ttf</option><option style="font-family: 'Pictorial-signature'" data-value="Pictorial-signature.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pictorial-signature.ttf">Pictorial-signature.ttf</option><option style="font-family: 'Pirate-ship'" data-value="Pirate-ship.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pirate-ship.ttf">Pirate-ship.ttf</option><option style="font-family: 'Shadeerah-demo'" data-value="Shadeerah-demo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Shadeerah-demo.ttf">Shadeerah-demo.ttf</option><option style="font-family: 'Signatrue-2'" data-value="Signatrue-2.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-2.ttf">Signatrue-2.ttf</option><option style="font-family: 'Signatrue-8'" data-value="Signatrue-8.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-8.ttf">Signatrue-8.ttf</option><option style="font-family: 'Signatrue'" data-value="Signatrue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue.ttf">Signatrue.ttf</option><option style="font-family: 'Sports-world-regular'" data-value="Sports-world-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Sports-world-regular.ttf">Sports-world-regular.ttf</option><option style="font-family: 'Svn-aptima-bold-1'" data-value="Svn-aptima-bold-1.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-aptima-bold-1.ttf">Svn-aptima-bold-1.ttf</option><option style="font-family: 'Svn-bear'" data-value="Svn-bear.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bear.ttf">Svn-bear.ttf</option><option style="font-family: 'Svn-bira'" data-value="Svn-bira.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bira.ttf">Svn-bira.ttf</option><option style="font-family: 'Svn-franko'" data-value="Svn-franko.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-franko.ttf">Svn-franko.ttf</option><option style="font-family: 'Svn-internation'" data-value="Svn-internation.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-internation.ttf">Svn-internation.ttf</option><option style="font-family: 'Svn-trebuchets'" data-value="Svn-trebuchets.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-trebuchets.ttf">Svn-trebuchets.ttf</option><option style="font-family: 'Unifrakturmaguntia16'" data-value="Unifrakturmaguntia16.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Unifrakturmaguntia16.ttf">Unifrakturmaguntia16.ttf</option><option style="font-family: 'Viking-hell'" data-value="Viking-hell.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Viking-hell.ttf">Viking-hell.ttf</option><option style="font-family: 'Vogue'" data-value="Vogue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Vogue.ttf">Vogue.ttf</option>
			</select>
			<a class="thumbimgselect2" style="width:100%;" href="#" onclick="pplrpopupimage2(this,event);event.preventDefault();"></a>
		</div>
		<span class="input-group-btn">
					<a data-toggle="modal" data-target="#myModal6" onclick="$('.canvas,.presult').remove();"  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
		</span>
		</div>
		</div>	
		
		<div class="form-group  input-text cstmfy_cfonts" style="" >
		<label>Font Selection
		<span data-original-title="Create font group from your uploaded font list" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span>
		</label>
		<div class="input-group font-selection" >
		<select name="cstmfy_fontc[]" class="form-control cstmfy_cfont nc" onchange="selectfont(this)"  >
		 <option value="1" selected>No </option>
			<option value="Celtic-Font">Celtic-Font</option><option value="Fonts">Fonts</option><option value="Scottish-Fonts">Scottish-Fonts</option><option value="Text-Here">Text-Here</option><option value="Your-Text-Here">Your-Text-Here</option>			</select>
			<span class="input-group-btn" data-toggle="modal" data-target="#myModal2" ><button  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</button></span>	
		 </div>	 
			
	</div>
					
		<div class="form-group fontname" style="display:none">
			<label>Font Selection Label</label>
			<input name="cstmfy_fontname[]" value="Choose Font" style="width: 120px;" class="form-control nc">		
		</div>
		


	 
		<div class="form-group  input-text">
			<label>Font Size <span data-original-title="Make bigger customization area  for bigger font size" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<input name="cstmfy_size[]" type="number" max="800" style="width: 70px;" value="30" class="form-control">
			<span class="fsize"></span>
		</div>

	<div class="form-group input-text checkbox" style="width: 100%;float: left;">


			<label><input class="nc" type="hidden" name="cstmfy_csize[]" value="1"   ><input onclick="checkboxhidden(this)" value="0" type="checkbox" name="cstmfy_csize[]"  > Customer can change font size?</label>
					
		</div>
		

		<div class="form-group dcolor">
			<label>Default Color</label>
			<div class="input-group demo2">
				   <input type="text" style="width: 70px;" value="#160de9" class="form-control " name="cstmfy_color[]" />
				   <span class="input-group-addon"><i></i></span>
				 </div>	
		</div>
		
		<div class="form-group  input-text" >
		<label>Color Selection
		<span data-original-title="Create color group  for Multiple Color option. Choose gradient if you want to show a gradient color picker with millions of color" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span>
		</label>
		<div class="input-group color-selection" >			
		<select name="cstmfy_colorc[]" class="form-control cstmfy_color nc" onchange="selectcolor(this)"  >
			<option value="1" selected>No</option>
			<option value="2" >Gradient</option>
			<option value="Choose A Color">Choose A Color</option><option value="Colors">Colors</option><option value="Fonts">Fonts</option>			</select>	
		<span class="input-group-btn" data-toggle="modal" data-target="#myModal" ><button  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</button></span>	
		</div>
			
		</div>	

		<div class="form-group  colorname"  style="display:none;">
			<label>Color Selection Label</label>
			<input name="cstmfy_colorname[]" value="Choose A Color" style="width: 120px;" class="form-control nc">		
		</div>
		<div class="form-group  field-color">
			<label>Blending type:</label>

		<select  name="cstmfy_blend[]" class="form-control">
			<option value="0"   >Normal</option>
			<option value="1" >Lighter</option>
			<option value="2" selected='selected'>Multiply</option>
			<option value="3" >Screen</option>
			<option value="4" >Overlay</option>
			<option value="5" >Darken</option>
			<option value="6" >Lighten</option>
		</select>
		</div>

		
		<div class="form-group  input-text input-monogram">
			<label>Opacity</label>
			<div class="input-group">
				   <input  type="range" min="0" max="127" style="width:150px;" value="0" class="form-control " name="cstmfy_trans[]" />

			 </div>	
		</div>		


		<div class="form-group  input-text">
				<label>Case</label>
				<select name="cstmfy_case[]" class="form-control"  >
					<option selected='selected'  value='1'>Default</option>	
					<option   value='2'>UPPERCASE</option>
					<option   value='3'>lowercase</option>
					<option   value='4'>Capitalize</option>
					<option   value='5'>Sentence</option>
					
				</select>			
		</div>
		

		
		<div class="form-group prev-item no-color halign input-text" >
				<label>Horizontal Align</label>
				<select name="cstmfy_align[]" class="form-control"  >
					<option selected='selected'  value='center'>Center</option>	
					<option   value='left'>Left</option>
					<option   value='right'>Right</option>			
				</select>				
		</div>	

		<div class="form-group input-text checkbox halign" style="width: 100%;float: left;">
			<label>	<input class="nc" type="hidden" name="cstmfy_calign[]" value="1"   ><input value="0"  type="checkbox" onclick="checkboxhidden(this)" name="cstmfy_calign[]"   >Customer can change Horizontal alignment?</label>
				
		</div>

		<div class="form-group prev-item no-color input-textarea" >
				<label>Vertical align</label>
				<select name="cstmfy_valign[]" class="form-control"  >
					<option   value='1'>Top</option>	
					<option selected='selected'  value='2'>Center</option>
					<option   value='3'>Bottom</option>			
				</select>				
		</div>


		<div class="form-group input-pac no-color">
			<label>Plain/Angle/Circular</label>
			<select name="cstmfy_type[]" class="form-control" onchange="pac(this)"  >	
				<option selected='selected'  value='1'>Plain</option>	
				<option   value='2'>Angled</option>
				<option   value='3'>Circular</option>
				</select>
		</div>
		
		<div class="form-group arc no-color" style='display:none;' >
			<label>Arc Radius</label>
			<input name="cstmfy_radius[]" style="width: 70px;" value="500" class="form-control"> <button type="button" class="btn btn-default" onclick="rev(this)">Revese face</button>
		</div>
		
		<div class="form-group angle">
			<label>Angle</label>
			<input name="cstmfy_angle[]" style="width: 70px;" value="0" onkeyup="angle2(this)" class="form-control">
		</div>

		<div class="form-group pplrrequre">
				<label>Required Condition </label>
				<select  name="cstmfy_required[]" class="form-control nc" style="max-width: 110px;"  >
					<option selected='selected'  value='1'>Required</option>	
					<option   value='2'>Optional</option>	
					<option class="creq"   value='3'>Optional with previous field</option>						
				</select>			
		</div>	
		

		 <div class="form-group group-image no-color min_upload" style='display:none;'>
		<label>Min upload width (px)</label>
			<div class="input-group group-image"> 
			<input name="cstmfy_min_width[]" style="width: 60px;" value="200" class="form-control nc">
			</div>
		</div>
		<div class="form-group group-image no-color min_upload" style='display:none;'>
		<label>Min upload height (px)</label>
			<div class="input-group group-image"> 
			<input name="cstmfy_min_height[]" style="width: 60px;" value="200" class="form-control nc">
			</div>
		</div>
		 
		
		<div class="form-group  price_add">
			<label >Additional Charge <span data-original-title="Requires Theme update for price increase feature. If you set create new product no need any theme update. Please See Help Section" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<select name="cstmfy_addition[]" onchange="check_charge(event);" class="form-control nc" onchange="price(this)" style="max-width: 110px;" >
				<option selected='selected'  value='1'>No</option>	
				<option   value='2' >Flat rate</option>	
				<option   value='3' >Percentage with Base-Value</option>	
				<option   value='5' >Percentage with All Previous Value</option>	
				<option  class="no_text" value='4' >Per letter</option>			
			</select>			
		</div>
		
		<div class="form-group pplrprice" style="display:none">
			<label>Price add <span data-original-title="Requires Theme update for price increase feature. If you set create new product no need any theme update. Please See Help Section" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
				<input name="cstmfy_price[]" type="text"  title="no commas allowed" pattern="[^,]+" style="width: 60px;" value="1" class="form-control nc">
			</div>

		<div class="form-group  prev-item">
		<label>Preview Type <span data-original-title="Dynamic field: can be modified by customer and will be previewed. Mask only: cannot be modified by customer but will be previewed" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<select name="cstmfy_type_ds[]" class="form-control"  >	
				<option selected='selected'  value='1'>Dynamic</option>	
				<option   value='2'>Mask only</option>
				<option   value='4'>Water Mark</option>
				<option   value='3'>No preview</option>
			</select>
		</div>

	<div class="form-group " >
		<label>Field Heading</label>
		<textarea name="cstmfy_oindex[]"  style="width: 120px;height:34px;" class="form-control nc"></textarea>	
	</div>

	<div class="form-group checkbox" style="width: 100%;float: left;">
			<label>	<input class="nc" type="hidden" name="cstmfy_tab[]" value="0"   ><input onclick="checkboxhidden(this)" type="checkbox" value="1" name="cstmfy_tab[]"   >Field Heading as tab?</label>


				
	</div>
	
	<div class="form-group input-text" >
		<label>Character Type</label>
		<select name="cstmfy_pattern[]" class="form-control nc"  >	
				<option selected='selected'  value='1'>All</option>	
				<option   value='2'>Alphanumeric only</option>
				<option   value='3'>Alpha only</option>
				<option   value='4'>Numeric only</option>
				<option   value='5'>Date</option>
			</select>

	</div>
			
		<div class="form-group cstmfy_ins" >
			<label>Instruction</label>
			<textarea name="cstmfy_ins[]"  class="form-control nc"></textarea>
		</div>

		<div class="form-group" style="display: none;">
				<label style="max-width: 150px;">Show custom area on frontend</label>
				<select name="cstmfy_area[]" class="form-control"  >
					<option selected='selected'  value='0'>No</option>			
				</select>			
		</div>

		<div class="form-group prev-item">
			<label>X Position</label>
			<div class="input-group cstmfy_posx"> 
			<input name="cstmfy_posx[]" required onchange="xpos(this)" value="49.66hhuhu" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-right"></i>X % </div>
			</div>
		</div>

		<div class="form-group prev-item">
		 	<label>Y Position</label>
			<div class="input-group cstmfy_posy"> 
			<input name="cstmfy_posy[]" required  onchange="ypos(this)" value="30.29" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-up"></i>Y %</div>
			</div>
		</div>

		<div class="form-group prev-item">
			<label>Width</label>
			<div class="input-group"> 
			<input name="cstmfy_width[]" required onchange="pwidth(this)" style="width: 80px;" value="36.32" class="form-control pos"><div class="input-group-addon">%</div>
			</div>
		</div>
		
		<div class="form-group prev-item">
		<label>Height</label>
			<div class="input-group "> 
			<input name="cstmfy_height[]" required onchange="pheight(this)" style="width: 80px;" value="36.83" class="form-control pos"><div class="input-group-addon">%</div>
			</div>
		</div>


		<div class="form-group   input-text cstmfy_style" >
				<label style="max-width: 150px;">Text Style</label>
				<select name="cstmfy_style[]" class="form-control" onchange="selectmonogram(this)" >
					<option selected='selected'  value='1'>Plain</option>	
					<option   value='2'>Monogram 2 letters</option>
					<option   value='3'>Monogram 3 letters</option>
				</select>			
		</div>

	<div style="float: left;width: 100% ;display:none;" class="monogrm2">
		<div class="form-group  input-text">
		<label>Font Family  Initial 2nd</label>
			<div class="input-group" style="width: 150px;">
			<div class="selectimage">
			<select name="cstmfy_font2[]" class="form-control font"   >								
			<option style="font-family: 'Arial'" class='nogroup' value='font/Arial.ttf'>Arial.ttf</option><option style="font-family: 'CurlzMT'" class='nogroup' value='font/CurlzMT.ttf'>CurlzMT.ttf</option><option style="font-family: 'OpenSans-Bold'" class='nogroup' selected  value='font/OpenSans-Bold.ttf'>OpenSans-Bold.ttf</option><option style="font-family: 'Afterglow-regular'" data-value="Afterglow-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Afterglow-regular.ttf">Afterglow-regular.ttf</option><option style="font-family: 'Agencyfb'" data-value="Agencyfb.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Agencyfb.ttf">Agencyfb.ttf</option><option style="font-family: 'Akadora'" data-value="Akadora.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Akadora.ttf">Akadora.ttf</option><option style="font-family: 'Ambar-pearl-personal-use'" data-value="Ambar-pearl-personal-use.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ambar-pearl-personal-use.ttf">Ambar-pearl-personal-use.ttf</option><option style="font-family: 'American-captain'" data-value="American-captain.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/American-captain.ttf">American-captain.ttf</option><option style="font-family: 'Aoncc-'" data-value="Aoncc-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Aoncc-.ttf">Aoncc-.ttf</option><option style="font-family: 'Arial-black'" data-value="Arial-black.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Arial-black.ttf">Arial-black.ttf</option><option style="font-family: 'Bebasneue-regular'" data-value="Bebasneue-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Bebasneue-regular.ttf">Bebasneue-regular.ttf</option><option style="font-family: 'Big-caslon-medium'" data-value="Big-caslon-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Big-caslon-medium.ttf">Big-caslon-medium.ttf</option><option style="font-family: 'Blue-ocean'" data-value="Blue-ocean.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Blue-ocean.ttf">Blue-ocean.ttf</option><option style="font-family: 'Carnevalee-freakshow'" data-value="Carnevalee-freakshow.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Carnevalee-freakshow.ttf">Carnevalee-freakshow.ttf</option><option style="font-family: 'Caviardreams-bold'" data-value="Caviardreams-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bold.ttf">Caviardreams-bold.ttf</option><option style="font-family: 'Caviardreams-bolditalic'" data-value="Caviardreams-bolditalic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bolditalic.ttf">Caviardreams-bolditalic.ttf</option><option style="font-family: 'Caviardreams-italic'" data-value="Caviardreams-italic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-italic.ttf">Caviardreams-italic.ttf</option><option style="font-family: 'Caviardreams'" data-value="Caviardreams.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams.ttf">Caviardreams.ttf</option><option style="font-family: 'Celtg-'" data-value="Celtg-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtg-.ttf">Celtg-.ttf</option><option style="font-family: 'Celtic-gaelige'" data-value="Celtic-gaelige.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtic-gaelige.ttf">Celtic-gaelige.ttf</option><option style="font-family: 'Celtichd'" data-value="Celtichd.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtichd.ttf">Celtichd.ttf</option><option style="font-family: 'Copperplate'" data-value="Copperplate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Copperplate.ttf">Copperplate.ttf</option><option style="font-family: 'Hollywoodhills'" data-value="Hollywoodhills.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Hollywoodhills.ttf">Hollywoodhills.ttf</option><option style="font-family: 'Icielamerigraf'" data-value="Icielamerigraf.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Icielamerigraf.ttf">Icielamerigraf.ttf</option><option style="font-family: 'Ifc-insane-rodeo'" data-value="Ifc-insane-rodeo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ifc-insane-rodeo.ttf">Ifc-insane-rodeo.ttf</option><option style="font-family: 'Irishpenny'" data-value="Irishpenny.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishpenny.ttf">Irishpenny.ttf</option><option style="font-family: 'Irishuncialfabeta-bold'" data-value="Irishuncialfabeta-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishuncialfabeta-bold.ttf">Irishuncialfabeta-bold.ttf</option><option style="font-family: 'Keepcalm-medium'" data-value="Keepcalm-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Keepcalm-medium.ttf">Keepcalm-medium.ttf</option><option style="font-family: 'Mermaid-swash-caps'" data-value="Mermaid-swash-caps.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid-swash-caps.ttf">Mermaid-swash-caps.ttf</option><option style="font-family: 'Mermaid1001'" data-value="Mermaid1001.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid1001.ttf">Mermaid1001.ttf</option><option style="font-family: 'Myriadpro-regular'" data-value="Myriadpro-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Myriadpro-regular.ttf">Myriadpro-regular.ttf</option><option style="font-family: 'Oceanicdrift3d'" data-value="Oceanicdrift3d.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oceanicdrift3d.ttf">Oceanicdrift3d.ttf</option><option style="font-family: 'Oldlondon'" data-value="Oldlondon.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondon.ttf">Oldlondon.ttf</option><option style="font-family: 'Oldlondonalternate'" data-value="Oldlondonalternate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondonalternate.ttf">Oldlondonalternate.ttf</option><option style="font-family: 'Pictorial-signature'" data-value="Pictorial-signature.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pictorial-signature.ttf">Pictorial-signature.ttf</option><option style="font-family: 'Pirate-ship'" data-value="Pirate-ship.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pirate-ship.ttf">Pirate-ship.ttf</option><option style="font-family: 'Shadeerah-demo'" data-value="Shadeerah-demo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Shadeerah-demo.ttf">Shadeerah-demo.ttf</option><option style="font-family: 'Signatrue-2'" data-value="Signatrue-2.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-2.ttf">Signatrue-2.ttf</option><option style="font-family: 'Signatrue-8'" data-value="Signatrue-8.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-8.ttf">Signatrue-8.ttf</option><option style="font-family: 'Signatrue'" data-value="Signatrue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue.ttf">Signatrue.ttf</option><option style="font-family: 'Sports-world-regular'" data-value="Sports-world-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Sports-world-regular.ttf">Sports-world-regular.ttf</option><option style="font-family: 'Svn-aptima-bold-1'" data-value="Svn-aptima-bold-1.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-aptima-bold-1.ttf">Svn-aptima-bold-1.ttf</option><option style="font-family: 'Svn-bear'" data-value="Svn-bear.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bear.ttf">Svn-bear.ttf</option><option style="font-family: 'Svn-bira'" data-value="Svn-bira.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bira.ttf">Svn-bira.ttf</option><option style="font-family: 'Svn-franko'" data-value="Svn-franko.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-franko.ttf">Svn-franko.ttf</option><option style="font-family: 'Svn-internation'" data-value="Svn-internation.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-internation.ttf">Svn-internation.ttf</option><option style="font-family: 'Svn-trebuchets'" data-value="Svn-trebuchets.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-trebuchets.ttf">Svn-trebuchets.ttf</option><option style="font-family: 'Unifrakturmaguntia16'" data-value="Unifrakturmaguntia16.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Unifrakturmaguntia16.ttf">Unifrakturmaguntia16.ttf</option><option style="font-family: 'Viking-hell'" data-value="Viking-hell.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Viking-hell.ttf">Viking-hell.ttf</option><option style="font-family: 'Vogue'" data-value="Vogue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Vogue.ttf">Vogue.ttf</option>
			</select>
			<a class="thumbimgselect2" style="width:100%;" href="#" onclick="pplrpopupimage2(this,event);event.preventDefault();"></a>
		</div>
		<span class="input-group-btn">
					<a data-toggle="modal" data-target="#myModal6" onclick="$('.canvas,.presult').remove();"  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
		</span>
		</div>
		</div>


		<div class="form-group  input-text">
			<label>Font Size   Initial 2nd</label>
			<input name="cstmfy_size2[]" type="number" max="800" style="width: 70px;" value="30" class="form-control">
			
		</div>

		<div class="form-group  input-text">
				<label>Case  Initial 2nd</label>
				<select name="cstmfy_case2[]" class="form-control"  >
					<option   value='0'>Default</option>	
					<option selected='selected'  value='1'>UPPERCASE</option>
					<option   value='2'>lowercase</option>
					
				</select>			
		</div>

		<div class="form-group input-text">
			<label>X Position  Initial 2nd</label>
			<div class="input-group"> 
			<input name="cstmfy_posx2[]" required style="width: 80px;" value="5" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-right"></i>X % </div>
			</div>
		</div>

		<div class="form-group input-text">
		 	<label>Y Position  Initial 2nd</label>
			<div class="input-group"> 
			<input name="cstmfy_posy2[]" required  style="width: 80px;" value="0" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-up"></i>Y %</div>
			</div>
		</div>
	</div>

	<div style="float: left;width: 100%;display:none;" class="monogrm3">

		<div class="form-group  input-text">
		<label>Font Family Initial 3rd</label>
			<div class="input-group" style="width: 150px;">
			<div class="selectimage">
			<select name="cstmfy_font3[]" class="form-control font"   >							
			<option style="font-family: 'Arial'" class='nogroup' value='font/Arial.ttf'>Arial.ttf</option><option style="font-family: 'CurlzMT'" class='nogroup' value='font/CurlzMT.ttf'>CurlzMT.ttf</option><option style="font-family: 'OpenSans-Bold'" class='nogroup' selected  value='font/OpenSans-Bold.ttf'>OpenSans-Bold.ttf</option><option style="font-family: 'Afterglow-regular'" data-value="Afterglow-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Afterglow-regular.ttf">Afterglow-regular.ttf</option><option style="font-family: 'Agencyfb'" data-value="Agencyfb.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Agencyfb.ttf">Agencyfb.ttf</option><option style="font-family: 'Akadora'" data-value="Akadora.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Akadora.ttf">Akadora.ttf</option><option style="font-family: 'Ambar-pearl-personal-use'" data-value="Ambar-pearl-personal-use.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ambar-pearl-personal-use.ttf">Ambar-pearl-personal-use.ttf</option><option style="font-family: 'American-captain'" data-value="American-captain.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/American-captain.ttf">American-captain.ttf</option><option style="font-family: 'Aoncc-'" data-value="Aoncc-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Aoncc-.ttf">Aoncc-.ttf</option><option style="font-family: 'Arial-black'" data-value="Arial-black.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Arial-black.ttf">Arial-black.ttf</option><option style="font-family: 'Bebasneue-regular'" data-value="Bebasneue-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Bebasneue-regular.ttf">Bebasneue-regular.ttf</option><option style="font-family: 'Big-caslon-medium'" data-value="Big-caslon-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Big-caslon-medium.ttf">Big-caslon-medium.ttf</option><option style="font-family: 'Blue-ocean'" data-value="Blue-ocean.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Blue-ocean.ttf">Blue-ocean.ttf</option><option style="font-family: 'Carnevalee-freakshow'" data-value="Carnevalee-freakshow.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Carnevalee-freakshow.ttf">Carnevalee-freakshow.ttf</option><option style="font-family: 'Caviardreams-bold'" data-value="Caviardreams-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bold.ttf">Caviardreams-bold.ttf</option><option style="font-family: 'Caviardreams-bolditalic'" data-value="Caviardreams-bolditalic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bolditalic.ttf">Caviardreams-bolditalic.ttf</option><option style="font-family: 'Caviardreams-italic'" data-value="Caviardreams-italic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-italic.ttf">Caviardreams-italic.ttf</option><option style="font-family: 'Caviardreams'" data-value="Caviardreams.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams.ttf">Caviardreams.ttf</option><option style="font-family: 'Celtg-'" data-value="Celtg-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtg-.ttf">Celtg-.ttf</option><option style="font-family: 'Celtic-gaelige'" data-value="Celtic-gaelige.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtic-gaelige.ttf">Celtic-gaelige.ttf</option><option style="font-family: 'Celtichd'" data-value="Celtichd.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtichd.ttf">Celtichd.ttf</option><option style="font-family: 'Copperplate'" data-value="Copperplate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Copperplate.ttf">Copperplate.ttf</option><option style="font-family: 'Hollywoodhills'" data-value="Hollywoodhills.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Hollywoodhills.ttf">Hollywoodhills.ttf</option><option style="font-family: 'Icielamerigraf'" data-value="Icielamerigraf.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Icielamerigraf.ttf">Icielamerigraf.ttf</option><option style="font-family: 'Ifc-insane-rodeo'" data-value="Ifc-insane-rodeo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ifc-insane-rodeo.ttf">Ifc-insane-rodeo.ttf</option><option style="font-family: 'Irishpenny'" data-value="Irishpenny.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishpenny.ttf">Irishpenny.ttf</option><option style="font-family: 'Irishuncialfabeta-bold'" data-value="Irishuncialfabeta-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishuncialfabeta-bold.ttf">Irishuncialfabeta-bold.ttf</option><option style="font-family: 'Keepcalm-medium'" data-value="Keepcalm-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Keepcalm-medium.ttf">Keepcalm-medium.ttf</option><option style="font-family: 'Mermaid-swash-caps'" data-value="Mermaid-swash-caps.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid-swash-caps.ttf">Mermaid-swash-caps.ttf</option><option style="font-family: 'Mermaid1001'" data-value="Mermaid1001.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid1001.ttf">Mermaid1001.ttf</option><option style="font-family: 'Myriadpro-regular'" data-value="Myriadpro-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Myriadpro-regular.ttf">Myriadpro-regular.ttf</option><option style="font-family: 'Oceanicdrift3d'" data-value="Oceanicdrift3d.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oceanicdrift3d.ttf">Oceanicdrift3d.ttf</option><option style="font-family: 'Oldlondon'" data-value="Oldlondon.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondon.ttf">Oldlondon.ttf</option><option style="font-family: 'Oldlondonalternate'" data-value="Oldlondonalternate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondonalternate.ttf">Oldlondonalternate.ttf</option><option style="font-family: 'Pictorial-signature'" data-value="Pictorial-signature.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pictorial-signature.ttf">Pictorial-signature.ttf</option><option style="font-family: 'Pirate-ship'" data-value="Pirate-ship.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pirate-ship.ttf">Pirate-ship.ttf</option><option style="font-family: 'Shadeerah-demo'" data-value="Shadeerah-demo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Shadeerah-demo.ttf">Shadeerah-demo.ttf</option><option style="font-family: 'Signatrue-2'" data-value="Signatrue-2.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-2.ttf">Signatrue-2.ttf</option><option style="font-family: 'Signatrue-8'" data-value="Signatrue-8.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-8.ttf">Signatrue-8.ttf</option><option style="font-family: 'Signatrue'" data-value="Signatrue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue.ttf">Signatrue.ttf</option><option style="font-family: 'Sports-world-regular'" data-value="Sports-world-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Sports-world-regular.ttf">Sports-world-regular.ttf</option><option style="font-family: 'Svn-aptima-bold-1'" data-value="Svn-aptima-bold-1.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-aptima-bold-1.ttf">Svn-aptima-bold-1.ttf</option><option style="font-family: 'Svn-bear'" data-value="Svn-bear.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bear.ttf">Svn-bear.ttf</option><option style="font-family: 'Svn-bira'" data-value="Svn-bira.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bira.ttf">Svn-bira.ttf</option><option style="font-family: 'Svn-franko'" data-value="Svn-franko.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-franko.ttf">Svn-franko.ttf</option><option style="font-family: 'Svn-internation'" data-value="Svn-internation.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-internation.ttf">Svn-internation.ttf</option><option style="font-family: 'Svn-trebuchets'" data-value="Svn-trebuchets.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-trebuchets.ttf">Svn-trebuchets.ttf</option><option style="font-family: 'Unifrakturmaguntia16'" data-value="Unifrakturmaguntia16.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Unifrakturmaguntia16.ttf">Unifrakturmaguntia16.ttf</option><option style="font-family: 'Viking-hell'" data-value="Viking-hell.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Viking-hell.ttf">Viking-hell.ttf</option><option style="font-family: 'Vogue'" data-value="Vogue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Vogue.ttf">Vogue.ttf</option>
			</select>
			<a class="thumbimgselect2" style="width:100%;" href="#" onclick="pplrpopupimage2(this,event);event.preventDefault();"></a>
		</div>
		<span class="input-group-btn">
					<a data-toggle="modal" data-target="#myModal6" onclick="$('.canvas,.presult').remove();"  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
		</span>
		</div>
		</div>


		<div class="form-group  input-text">
			<label>Font Size   Initial 3rd</label>
			<input name="cstmfy_size3[]" type="number" max="800" style="width: 70px;" value="30" class="form-control">
			
		</div>

		<div class="form-group  input-text">
				<label>Case  Initial 3rd</label>
				<select name="cstmfy_case3[]" class="form-control"  >
					<option   value='0'>Default</option>	
					<option selected='selected'  value='1'>UPPERCASE</option>
					<option   value='2'>lowercase</option>
					
				</select>			
		</div>
		
		<div class="form-group input-text">
			<label>X Position  Initial 3rd</label>
			<div class="input-group"> 
			<input name="cstmfy_posx3[]" required style="width: 80px;" value="5" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-right"></i>X % </div>
			</div>
		</div>

		<div class="form-group input-text">
		 	<label>Y Position  Initial 3rd</label>
			<div class="input-group"> 
			<input name="cstmfy_posy3[]" required  style="width: 80px;" value="0" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-up"></i>Y %</div>
			</div>
		</div>

</div>

		<div class="form-group   input-text" >
				<label style="max-width: 150px;">Custom Effect</label>
				<select name="cstmfy_effect[]" class="form-control seffect"  onchange="cseffect(this)">
					<option selected='selected'  value='0'>No</option>	
					<option   value='2'>Neon Glow</option>
					<option   value='3'>Stroke</option>
					<option   value='4'>Emboss</option>
				</select>			
		</div>


		<div class="form-group  input-text cseffect cseffectcolor" style="display:none" >
				<label>Stroke Color</label>

				<div class="input-group demo2">
				   <input type="text" style="width: 70px;" value="#160de9" class="form-control " name="cstmfy_stroke[]" />
				   <span class="input-group-addon"><i></i></span>
				 </div>	
		
		</div>

		<div class="form-group input-text cseffectw" style="display:none" >
				<label>Effect Width</label>
				<input name="cstmfy_swidth[]" step="0.1" type="number" style="width:60px;" value="1" class="form-control"  >		
		</div>	



		</div>
		<div class="dsd" title="Remove this field" onclick="openshopify(event,this)" ><i class="fa fa-remove"></i></div>

		<div class="afield" title="Copy this field" onclick="addfield(this,0)" ><i class="fa fa-copy"></i></div>
		<div title="Hide the preview of this field" class="tview"><i  class="fa fa-eye eyeview"></i></div>
		
		</div>			
		
		</div>


				<div id="tab2" class="tab-pane fade in  clone selected" >

		<div class="" style="padding-top:0px;">	
		<div class="akb"  >
			<div class="form-group selectbackground" >
			<label style="text-align: center;">Background <span data-original-title="Choosing different background image will create new view." class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="top" title=""></span></label>
			<div class="input-group bcimage" >
			<select name="cstmfy_each_url[]"   onchange="changeimage(this)"  class="form-control2 imageupload imagemain" >
				<option class="nonvariant" data-value="images/1sttheworld.myshopify.com/nz-6.png"  selected value="images/1sttheworld.myshopify.com/nz-6.png">nz-6.png</option>
								<option  data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/nz_3_de91531b-e0b3-4b8c-81d7-c88901522f77_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/nz_3_de91531b-e0b3-4b8c-81d7-c88901522f77.jpg?v=1575993256'>
				1 : nz_3_de91531b-e0b3-4b8c-81d7-c88901522f77.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/1213_fcc39099-cc6f-4c06-bfe3-eccdc7c29291_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/1213_fcc39099-cc6f-4c06-bfe3-eccdc7c29291.jpg?v=1575993256'>
				2 : 1213_fcc39099-cc6f-4c06-bfe3-eccdc7c29291.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/Nz_1_6ac36429-55be-4021-9f84-5f98db397d25_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/Nz_1_6ac36429-55be-4021-9f84-5f98db397d25.jpg?v=1575993256'>
				3 : Nz_1_6ac36429-55be-4021-9f84-5f98db397d25.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/nz_2_f7d6eba3-005f-4373-8330-dfc96fc853ed_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/nz_2_f7d6eba3-005f-4373-8330-dfc96fc853ed.jpg?v=1575993256'>
				4 : nz_2_f7d6eba3-005f-4373-8330-dfc96fc853ed.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/nz_4_f3b22cbc-632c-4e39-ac2c-653aa2545379_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/nz_4_f3b22cbc-632c-4e39-ac2c-653aa2545379.jpg?v=1575993256'>
				5 : nz_4_f3b22cbc-632c-4e39-ac2c-653aa2545379.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/nz_5_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/nz_5.jpg?v=1575993256'>
				6 : nz_5.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/fghg_7e21665e-16f1-4a80-8917-b1aa1131d11a_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/fghg_7e21665e-16f1-4a80-8917-b1aa1131d11a.jpg?v=1575993256'>
				7 : fghg_7e21665e-16f1-4a80-8917-b1aa1131d11a.jpg</option>	
				<option class='nonvariant' data-value='images/a.png' value='images/a.png'>a.png</option><option class='nonvariant' data-value='images/blank.png' value='images/blank.png'>blank.png</option>			</select>
			<span class="input-group-btn" title="Upload Background Image">
					<a data-toggle="modal" data-target="#myModal10" class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
				</span>
			<a class="thumbimgselect thumbimgselecta" href="" style="left: 0px;" onclick="pplrpopupimage(this,event)"  >
				
				<img width="70" src="images/1sttheworld.myshopify.com/nz-6.png" />
			</a>
			</div>
		 </div>
		
		<div class="form-group field-type" style="">
			<label style="width: 170px;">Field Type</label>
				<select name="cstmfy_input_type[]" class="form-control" onchange="selecttype(this)" >
					<option   value='1'>Text (Single-line)</option>	
					<option   value='2'>Textarea (Multi-line)</option>
					<option   value='3'>Image Upload</option>

					<option   value='3'>Image Swatch</option>

					<option   value='4'>Color Swatch</option>

					<option   value='7'>Options List </option>	

					<option selected='selected'  value='8'>Checkbox</option>			
				</select>				
		</div>
		
		</div>


		
	<div class="bhoechie-tab-content active">
		<div class="form-group">
			<label>Label</label>
			<textarea name="cstmfy_name[]" onchange="updatename(this)" style="width: 130px;height:34px;" class="form-control nc">Engrave On Back</textarea>
			
		</div>
		
		<div class="form-group group-image " style='display:none;'>
			<label>Default Image <span data-original-title="Upload for more" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<div class="input-group swidth" >
		<div class="selectimage selectimagea">
			<select name="cstmfy_image[]" class="form-control imageupload imagesub" onchange="loadimage(this);"   >								
			<option data-value='images/a.png' value='images/a.png'>a.png</option><option selected data-value='images/blank.png' value='images/blank.png'>blank.png</option>
			</select>
			<a class="thumbimgselect" href="" style="left: 0px;" onclick="pplrpopupimage(this,event)">
			</a>
		</div>

		<span class="input-group-btn">
					<a data-toggle="modal" data-target="#myModal11" class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
		</span>
		</div>
		</div>





	
		
		<div class="form-group group-image" style='display:none;'>
			<label>Layer: <span data-original-title="Selecting Bottom layer is for transparent/semitransparent png otherwise Top layer should be selected" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
				<select name="cstmfy_index[]" class="form-control" >
					<option   value='1'>Top</option>	
					<option selected='selected'  value='2'>Bottom</option>				
				</select>				
		</div>

		<div class="form-group group-image image-select" style='display:none;'>
		<label>Image Group</label>
		<select required name="cstmfy_cimage[]" class="form-control cstmfy_cimage nc" onchange="min_upload(this)"  >
			<option value="1" selected>--Select--</option>
			<option value="au">au</option><option value="hawaii">hawaii</option><option value="moose">moose</option><option value="netherlands">netherlands</option><option value="nz">nz</option>			</select>


					<a data-toggle="modal" data-target="#myModal20" class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
		<div class="maxfsu2" style="width: 100%;padding: 15px 0px;display: none;"> Maximum file size uploaded by customer is 20MB </div>
		 </div>
				 
	<div class="form-group group-image no-color cstmfy_aspect" style='display:none;'>
		<label>Aspect Ratio <span data-original-title="Ratio of selectable area of customer's uploaded image" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></label>
		<select name="cstmfy_aspect[]" class="form-control nc"   >
			<option value="1" >No</option>
			<option value="2" selected>Yes</option>
			</select>
		 </div>
		 
		<div class="form-group group-image" style='display:none;'>
			<label class="btn btn-info" onclick="pplrpopupshow()">Crop <span data-original-title="x-y-width-height(px)" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<div class="input-group"> 
			<input name="cstmfy_crop[]" readonly style="width: 110px;" value="0-0-720-720" class="form-control">
			</div>
		</div>
		<div class="form-group group-image no-color" style='display:none;'>
		<label>Grayscale <span data-original-title="make image like engraved on wood" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></label>
		<select name="cstmfy_gray[]" class="form-control"   >
			<option value="1" selected>No</option>
			<option value="2" >Yes</option>
			</select>
		 </div>

		
		<div class="form-group" style="display:none;">
			<input name="id" value="3691134976080" class="form-control">
			
		</div>
		
		<div class="form-group input-text input-monogram">
			<label>Default Value</label>
			<textarea name="cstmfy_default[]"  style="width: 130px;height:34px;" class="form-control">TEXT</textarea>		
		</div>
	


		<div class="form-group  field-color" style='display:none;'>
		<label>Color Selection
		<span data-original-title="Create color group  for Multiple Color option" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span>
		</label>
		<div class="input-group color-selection" >			
		<select name="cstmfy_fcolorc[]" class="form-control cstmfy_color nc"   >
		<option value="1" >Gradient</option>
			<option value="Colors">Colors</option><option value="Fonts">Fonts</option><option value="Choose A Color">Choose A Color</option>			</select>	
		<span class="input-group-btn" data-toggle="modal" data-target="#myModal" ><button  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</button></span>	
		</div>
			
		</div>	

	<div class="form-group  field-check" style='display:none;'>
		<label>Default state
		</label>
		<div class="input-group" >			
		<select name="cstmfy_check[]" class="form-control nc"   >
		<option value="0" selected>Unchecked</option>
		<option value="1" >checked</option>
			</select>	

		</div>
			
		</div>	




	<div class="form-group  input-drop"  >
		<label>Options List
		<span data-original-title="Create Options List to populate this" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span>
		</label>
		<div class="input-group swidth"  >
		<select name="cstmfy_drop[]" class="form-control cstmfy_drop nc" onchange="cstmfy_drop(this);">
		 <option value="1" >Choose or create</option>
			<option value="Style">Style</option><option value="Position">Position</option><option value="Vertical">Vertical</option><option value="Text Single">Text Single</option><option value="Text Box">Text Box</option><option value="Box Text">Box Text</option><option value="Couple Text">Couple Text</option><option value="Color">Color</option><option value="Colors">Colors</option><option value="Red">Red</option><option value="Black">Black</option>			</select>
			<span class="input-group-btn" data-toggle="modal" data-target="#myModal3" >
			<button  class="btn btn-success btn-add "   type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</button>
				</span>

		 </div>	 
			
	</div>


		<div class="form-group  input-drop" >
		<label>Control Type
		</label>
		<div class="input-group" >			
		<select name="cstmfy_otype[]" class="form-control nc cstmfy_otype"  onchange="cstmfy_otype(this);" >
		<option value="1" selected>Dropdown List</option>
		<option value="2" >Button</option>
		</select>	

		</div>
			
		</div>	


		<div class="form-group  input-drop d_d" style="display:">
		<label>Placeholder Text <span data-original-title="Text that appears inside an option field before a value is entered" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<input name="cstmfy_drop_deafult[]" style="width: 70px;" value="" class="form-control nc">
		</div>
		
		<div class="form-group  input-drop">
		<label>Preselect value </label>
			<div class="input-group" >		

			<select name="cstmfy_button_deafult[]" class="form-control nc c_b_d"   >
				<option value="" selected>None</option>
						</select>
			</div>
		</div>

		
		
		<div class="form-group input-textarea" style='display:none;'>
				<label>Number of line</label>
				<input name="cstmfy_wrap[]" type="number" style="width:60px;" value="3" class="form-control nc"  >		
		</div>	
		
		<div class="form-group input-textarea" style='display:none;'>
				<label>line height</label>
				<div class="input-group">
				<input name="cstmfy_line_height[]" required type="number" min="0"  step="0.01" style="width:80px;" value="0.9" class="form-control"  >	
			</div>				
		</div>	

		<div class="form-group  input-text">
				<label>Max-Character <span data-original-title="Per line for textarea" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
				<input name="cstmfy_max[]" type="number" value="200" style="width: 100px;" class="form-control nc">			
		</div>	
		
		<div class="form-group  input-text  input-monogram">
			<label>Default Font</label>
			<div class="input-group dfont" style="width: 150px;">
			<div class="selectfont">
			<select name="cstmfy_font[]" class="form-control font"   >								
			<option style="font-family: 'Arial'" class='nogroup' value='font/Arial.ttf'>Arial.ttf</option><option style="font-family: 'CurlzMT'" class='nogroup' value='font/CurlzMT.ttf'>CurlzMT.ttf</option><option style="font-family: 'OpenSans-Bold'" class='nogroup' selected  value='font/OpenSans-Bold.ttf'>OpenSans-Bold.ttf</option><option style="font-family: 'Afterglow-regular'" data-value="Afterglow-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Afterglow-regular.ttf">Afterglow-regular.ttf</option><option style="font-family: 'Agencyfb'" data-value="Agencyfb.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Agencyfb.ttf">Agencyfb.ttf</option><option style="font-family: 'Akadora'" data-value="Akadora.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Akadora.ttf">Akadora.ttf</option><option style="font-family: 'Ambar-pearl-personal-use'" data-value="Ambar-pearl-personal-use.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ambar-pearl-personal-use.ttf">Ambar-pearl-personal-use.ttf</option><option style="font-family: 'American-captain'" data-value="American-captain.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/American-captain.ttf">American-captain.ttf</option><option style="font-family: 'Aoncc-'" data-value="Aoncc-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Aoncc-.ttf">Aoncc-.ttf</option><option style="font-family: 'Arial-black'" data-value="Arial-black.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Arial-black.ttf">Arial-black.ttf</option><option style="font-family: 'Bebasneue-regular'" data-value="Bebasneue-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Bebasneue-regular.ttf">Bebasneue-regular.ttf</option><option style="font-family: 'Big-caslon-medium'" data-value="Big-caslon-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Big-caslon-medium.ttf">Big-caslon-medium.ttf</option><option style="font-family: 'Blue-ocean'" data-value="Blue-ocean.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Blue-ocean.ttf">Blue-ocean.ttf</option><option style="font-family: 'Carnevalee-freakshow'" data-value="Carnevalee-freakshow.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Carnevalee-freakshow.ttf">Carnevalee-freakshow.ttf</option><option style="font-family: 'Caviardreams-bold'" data-value="Caviardreams-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bold.ttf">Caviardreams-bold.ttf</option><option style="font-family: 'Caviardreams-bolditalic'" data-value="Caviardreams-bolditalic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bolditalic.ttf">Caviardreams-bolditalic.ttf</option><option style="font-family: 'Caviardreams-italic'" data-value="Caviardreams-italic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-italic.ttf">Caviardreams-italic.ttf</option><option style="font-family: 'Caviardreams'" data-value="Caviardreams.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams.ttf">Caviardreams.ttf</option><option style="font-family: 'Celtg-'" data-value="Celtg-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtg-.ttf">Celtg-.ttf</option><option style="font-family: 'Celtic-gaelige'" data-value="Celtic-gaelige.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtic-gaelige.ttf">Celtic-gaelige.ttf</option><option style="font-family: 'Celtichd'" data-value="Celtichd.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtichd.ttf">Celtichd.ttf</option><option style="font-family: 'Copperplate'" data-value="Copperplate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Copperplate.ttf">Copperplate.ttf</option><option style="font-family: 'Hollywoodhills'" data-value="Hollywoodhills.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Hollywoodhills.ttf">Hollywoodhills.ttf</option><option style="font-family: 'Icielamerigraf'" data-value="Icielamerigraf.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Icielamerigraf.ttf">Icielamerigraf.ttf</option><option style="font-family: 'Ifc-insane-rodeo'" data-value="Ifc-insane-rodeo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ifc-insane-rodeo.ttf">Ifc-insane-rodeo.ttf</option><option style="font-family: 'Irishpenny'" data-value="Irishpenny.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishpenny.ttf">Irishpenny.ttf</option><option style="font-family: 'Irishuncialfabeta-bold'" data-value="Irishuncialfabeta-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishuncialfabeta-bold.ttf">Irishuncialfabeta-bold.ttf</option><option style="font-family: 'Keepcalm-medium'" data-value="Keepcalm-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Keepcalm-medium.ttf">Keepcalm-medium.ttf</option><option style="font-family: 'Mermaid-swash-caps'" data-value="Mermaid-swash-caps.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid-swash-caps.ttf">Mermaid-swash-caps.ttf</option><option style="font-family: 'Mermaid1001'" data-value="Mermaid1001.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid1001.ttf">Mermaid1001.ttf</option><option style="font-family: 'Myriadpro-regular'" data-value="Myriadpro-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Myriadpro-regular.ttf">Myriadpro-regular.ttf</option><option style="font-family: 'Oceanicdrift3d'" data-value="Oceanicdrift3d.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oceanicdrift3d.ttf">Oceanicdrift3d.ttf</option><option style="font-family: 'Oldlondon'" data-value="Oldlondon.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondon.ttf">Oldlondon.ttf</option><option style="font-family: 'Oldlondonalternate'" data-value="Oldlondonalternate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondonalternate.ttf">Oldlondonalternate.ttf</option><option style="font-family: 'Pictorial-signature'" data-value="Pictorial-signature.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pictorial-signature.ttf">Pictorial-signature.ttf</option><option style="font-family: 'Pirate-ship'" data-value="Pirate-ship.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pirate-ship.ttf">Pirate-ship.ttf</option><option style="font-family: 'Shadeerah-demo'" data-value="Shadeerah-demo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Shadeerah-demo.ttf">Shadeerah-demo.ttf</option><option style="font-family: 'Signatrue-2'" data-value="Signatrue-2.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-2.ttf">Signatrue-2.ttf</option><option style="font-family: 'Signatrue-8'" data-value="Signatrue-8.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-8.ttf">Signatrue-8.ttf</option><option style="font-family: 'Signatrue'" data-value="Signatrue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue.ttf">Signatrue.ttf</option><option style="font-family: 'Sports-world-regular'" data-value="Sports-world-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Sports-world-regular.ttf">Sports-world-regular.ttf</option><option style="font-family: 'Svn-aptima-bold-1'" data-value="Svn-aptima-bold-1.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-aptima-bold-1.ttf">Svn-aptima-bold-1.ttf</option><option style="font-family: 'Svn-bear'" data-value="Svn-bear.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bear.ttf">Svn-bear.ttf</option><option style="font-family: 'Svn-bira'" data-value="Svn-bira.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bira.ttf">Svn-bira.ttf</option><option style="font-family: 'Svn-franko'" data-value="Svn-franko.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-franko.ttf">Svn-franko.ttf</option><option style="font-family: 'Svn-internation'" data-value="Svn-internation.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-internation.ttf">Svn-internation.ttf</option><option style="font-family: 'Svn-trebuchets'" data-value="Svn-trebuchets.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-trebuchets.ttf">Svn-trebuchets.ttf</option><option style="font-family: 'Unifrakturmaguntia16'" data-value="Unifrakturmaguntia16.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Unifrakturmaguntia16.ttf">Unifrakturmaguntia16.ttf</option><option style="font-family: 'Viking-hell'" data-value="Viking-hell.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Viking-hell.ttf">Viking-hell.ttf</option><option style="font-family: 'Vogue'" data-value="Vogue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Vogue.ttf">Vogue.ttf</option>
			</select>
			<a class="thumbimgselect2" style="width:100%;" href="#" onclick="pplrpopupimage2(this,event);event.preventDefault();"></a>
		</div>
		<span class="input-group-btn">
					<a data-toggle="modal" data-target="#myModal6" onclick="$('.canvas,.presult').remove();"  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
		</span>
		</div>
		</div>	
		
		<div class="form-group  input-text cstmfy_cfonts" style="" >
		<label>Font Selection
		<span data-original-title="Create font group from your uploaded font list" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span>
		</label>
		<div class="input-group font-selection" >
		<select name="cstmfy_fontc[]" class="form-control cstmfy_cfont nc" onchange="selectfont(this)"  >
		 <option value="1" selected>No </option>
			<option value="Celtic-Font">Celtic-Font</option><option value="Fonts">Fonts</option><option value="Scottish-Fonts">Scottish-Fonts</option><option value="Text-Here">Text-Here</option><option value="Your-Text-Here">Your-Text-Here</option>			</select>
			<span class="input-group-btn" data-toggle="modal" data-target="#myModal2" ><button  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</button></span>	
		 </div>	 
			
	</div>
					
		<div class="form-group fontname" style="display:none">
			<label>Font Selection Label</label>
			<input name="cstmfy_fontname[]" value="Choose Font2" style="width: 120px;" class="form-control nc">		
		</div>
		


	 
		<div class="form-group  input-text">
			<label>Font Size <span data-original-title="Make bigger customization area  for bigger font size" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<input name="cstmfy_size[]" type="number" max="800" style="width: 70px;" value="30" class="form-control">
			<span class="fsize"></span>
		</div>

	<div class="form-group input-text checkbox" style="width: 100%;float: left;">


			<label><input class="nc" type="hidden" name="cstmfy_csize[]" value="1"   ><input onclick="checkboxhidden(this)" value="0" type="checkbox" name="cstmfy_csize[]"  > Customer can change font size?</label>
					
		</div>
		

		<div class="form-group dcolor">
			<label>Default Color</label>
			<div class="input-group demo2">
				   <input type="text" style="width: 70px;" value="#160de9" class="form-control " name="cstmfy_color[]" />
				   <span class="input-group-addon"><i></i></span>
				 </div>	
		</div>
		
		<div class="form-group  input-text" >
		<label>Color Selection
		<span data-original-title="Create color group  for Multiple Color option. Choose gradient if you want to show a gradient color picker with millions of color" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span>
		</label>
		<div class="input-group color-selection" >			
		<select name="cstmfy_colorc[]" class="form-control cstmfy_color nc" onchange="selectcolor(this)"  >
			<option value="1" selected>No</option>
			<option value="2" >Gradient</option>
			<option value="Choose A Color">Choose A Color</option><option value="Colors">Colors</option><option value="Fonts">Fonts</option>			</select>	
		<span class="input-group-btn" data-toggle="modal" data-target="#myModal" ><button  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</button></span>	
		</div>
			
		</div>	

		<div class="form-group  colorname"  style="display:none;">
			<label>Color Selection Label</label>
			<input name="cstmfy_colorname[]" value="Choose A Color2" style="width: 120px;" class="form-control nc">		
		</div>
		<div class="form-group  field-color">
			<label>Blending type:</label>

		<select  name="cstmfy_blend[]" class="form-control">
			<option value="0"   >Normal</option>
			<option value="1" >Lighter</option>
			<option value="2" selected='selected'>Multiply</option>
			<option value="3" >Screen</option>
			<option value="4" >Overlay</option>
			<option value="5" >Darken</option>
			<option value="6" >Lighten</option>
		</select>
		</div>

		
		<div class="form-group  input-text input-monogram">
			<label>Opacity</label>
			<div class="input-group">
				   <input  type="range" min="0" max="127" style="width:150px;" value="0" class="form-control " name="cstmfy_trans[]" />

			 </div>	
		</div>		


		<div class="form-group  input-text">
				<label>Case</label>
				<select name="cstmfy_case[]" class="form-control"  >
					<option selected='selected'  value='1'>Default</option>	
					<option   value='2'>UPPERCASE</option>
					<option   value='3'>lowercase</option>
					<option   value='4'>Capitalize</option>
					<option   value='5'>Sentence</option>
					
				</select>			
		</div>
		

		
		<div class="form-group prev-item no-color halign input-text" >
				<label>Horizontal Align</label>
				<select name="cstmfy_align[]" class="form-control"  >
					<option selected='selected'  value='center'>Center</option>	
					<option   value='left'>Left</option>
					<option   value='right'>Right</option>			
				</select>				
		</div>	

		<div class="form-group input-text checkbox halign" style="width: 100%;float: left;">
			<label>	<input class="nc" type="hidden" name="cstmfy_calign[]" value="1"   ><input value="0"  type="checkbox" onclick="checkboxhidden(this)" name="cstmfy_calign[]"   >Customer can change Horizontal alignment?</label>
				
		</div>

		<div class="form-group prev-item no-color input-textarea" >
				<label>Vertical align</label>
				<select name="cstmfy_valign[]" class="form-control"  >
					<option   value='1'>Top</option>	
					<option selected='selected'  value='2'>Center</option>
					<option   value='3'>Bottom</option>			
				</select>				
		</div>


		<div class="form-group input-pac no-color">
			<label>Plain/Angle/Circular</label>
			<select name="cstmfy_type[]" class="form-control" onchange="pac(this)"  >	
				<option selected='selected'  value='1'>Plain</option>	
				<option   value='2'>Angled</option>
				<option   value='3'>Circular</option>
				</select>
		</div>
		
		<div class="form-group arc no-color" style='display:none;' >
			<label>Arc Radius</label>
			<input name="cstmfy_radius[]" style="width: 70px;" value="500" class="form-control"> <button type="button" class="btn btn-default" onclick="rev(this)">Revese face</button>
		</div>
		
		<div class="form-group angle">
			<label>Angle</label>
			<input name="cstmfy_angle[]" style="width: 70px;" value="0" onkeyup="angle2(this)" class="form-control">
		</div>

		<div class="form-group pplrrequre">
				<label>Required Condition </label>
				<select  name="cstmfy_required[]" class="form-control nc" style="max-width: 110px;"  >
					<option selected='selected'  value='1'>Required</option>	
					<option   value='2'>Optional</option>	
					<option class="creq"   value='3'>Optional with previous field</option>						
				</select>			
		</div>	
		

		 <div class="form-group group-image no-color min_upload" style='display:none;'>
		<label>Min upload width (px)</label>
			<div class="input-group group-image"> 
			<input name="cstmfy_min_width[]" style="width: 60px;" value="200" class="form-control nc">
			</div>
		</div>
		<div class="form-group group-image no-color min_upload" style='display:none;'>
		<label>Min upload height (px)</label>
			<div class="input-group group-image"> 
			<input name="cstmfy_min_height[]" style="width: 60px;" value="200" class="form-control nc">
			</div>
		</div>
		 
		
		<div class="form-group  price_add">
			<label >Additional Charge <span data-original-title="Requires Theme update for price increase feature. If you set create new product no need any theme update. Please See Help Section" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<select name="cstmfy_addition[]" onchange="check_charge(event);" class="form-control nc" onchange="price(this)" style="max-width: 110px;" >
				<option selected='selected'  value='1'>No</option>	
				<option   value='2' >Flat rate</option>	
				<option   value='3' >Percentage with Base-Value</option>	
				<option   value='5' >Percentage with All Previous Value</option>	
				<option  class="no_text" value='4' >Per letter</option>			
			</select>			
		</div>
		
		<div class="form-group pplrprice" style="display:none">
			<label>Price add <span data-original-title="Requires Theme update for price increase feature. If you set create new product no need any theme update. Please See Help Section" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
				<input name="cstmfy_price[]" type="text"  title="no commas allowed" pattern="[^,]+" style="width: 60px;" value="1" class="form-control nc">
			</div>

		<div class="form-group  prev-item">
		<label>Preview Type <span data-original-title="Dynamic field: can be modified by customer and will be previewed. Mask only: cannot be modified by customer but will be previewed" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<select name="cstmfy_type_ds[]" class="form-control"  >	
				<option selected='selected'  value='1'>Dynamic</option>	
				<option   value='2'>Mask only</option>
				<option   value='4'>Water Mark</option>
				<option   value='3'>No preview</option>
			</select>
		</div>

	<div class="form-group " >
		<label>Field Heading</label>
		<textarea name="cstmfy_oindex[]"  style="width: 120px;height:34px;" class="form-control nc"></textarea>	
	</div>

	<div class="form-group checkbox" style="width: 100%;float: left;">
			<label>	<input class="nc" type="hidden" name="cstmfy_tab[]" value="0"   ><input onclick="checkboxhidden(this)" type="checkbox" value="1" name="cstmfy_tab[]"   >Field Heading as tab?</label>


				
	</div>
	
	<div class="form-group input-text" >
		<label>Character Type</label>
		<select name="cstmfy_pattern[]" class="form-control nc"  >	
				<option selected='selected'  value='1'>All</option>	
				<option   value='2'>Alphanumeric only</option>
				<option   value='3'>Alpha only</option>
				<option   value='4'>Numeric only</option>
				<option   value='5'>Date</option>
			</select>

	</div>
			
		<div class="form-group cstmfy_ins" >
			<label>Instruction</label>
			<textarea name="cstmfy_ins[]"  class="form-control nc"></textarea>
		</div>

		<div class="form-group" style="display: none;">
				<label style="max-width: 150px;">Show custom area on frontend</label>
				<select name="cstmfy_area[]" class="form-control"  >
					<option selected='selected'  value='0'>No</option>			
				</select>			
		</div>

		<div class="form-group prev-item">
			<label>X Position</label>
			<div class="input-group cstmfy_posx"> 
			<input name="cstmfy_posx[]" required onchange="xpos(this)" value="50" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-right"></i>X % </div>
			</div>
		</div>

		<div class="form-group prev-item">
		 	<label>Y Position</label>
			<div class="input-group cstmfy_posy"> 
			<input name="cstmfy_posy[]" required  onchange="ypos(this)" value="30" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-up"></i>Y %</div>
			</div>
		</div>

		<div class="form-group prev-item">
			<label>Width</label>
			<div class="input-group"> 
			<input name="cstmfy_width[]" required onchange="pwidth(this)" style="width: 80px;" value="36.32" class="form-control pos"><div class="input-group-addon">%</div>
			</div>
		</div>
		
		<div class="form-group prev-item">
		<label>Height</label>
			<div class="input-group "> 
			<input name="cstmfy_height[]" required onchange="pheight(this)" style="width: 80px;" value="36.83" class="form-control pos"><div class="input-group-addon">%</div>
			</div>
		</div>


		<div class="form-group   input-text cstmfy_style" >
				<label style="max-width: 150px;">Text Style</label>
				<select name="cstmfy_style[]" class="form-control" onchange="selectmonogram(this)" >
					<option selected='selected'  value='1'>Plain</option>	
					<option   value='2'>Monogram 2 letters</option>
					<option   value='3'>Monogram 3 letters</option>
				</select>			
		</div>

	<div style="float: left;width: 100% ;display:none;" class="monogrm2">
		<div class="form-group  input-text">
		<label>Font Family  Initial 2nd</label>
			<div class="input-group" style="width: 150px;">
			<div class="selectimage">
			<select name="cstmfy_font2[]" class="form-control font"   >								
			<option style="font-family: 'Arial'" class='nogroup' value='font/Arial.ttf'>Arial.ttf</option><option style="font-family: 'CurlzMT'" class='nogroup' value='font/CurlzMT.ttf'>CurlzMT.ttf</option><option style="font-family: 'OpenSans-Bold'" class='nogroup' selected  value='font/OpenSans-Bold.ttf'>OpenSans-Bold.ttf</option><option style="font-family: 'Afterglow-regular'" data-value="Afterglow-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Afterglow-regular.ttf">Afterglow-regular.ttf</option><option style="font-family: 'Agencyfb'" data-value="Agencyfb.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Agencyfb.ttf">Agencyfb.ttf</option><option style="font-family: 'Akadora'" data-value="Akadora.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Akadora.ttf">Akadora.ttf</option><option style="font-family: 'Ambar-pearl-personal-use'" data-value="Ambar-pearl-personal-use.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ambar-pearl-personal-use.ttf">Ambar-pearl-personal-use.ttf</option><option style="font-family: 'American-captain'" data-value="American-captain.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/American-captain.ttf">American-captain.ttf</option><option style="font-family: 'Aoncc-'" data-value="Aoncc-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Aoncc-.ttf">Aoncc-.ttf</option><option style="font-family: 'Arial-black'" data-value="Arial-black.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Arial-black.ttf">Arial-black.ttf</option><option style="font-family: 'Bebasneue-regular'" data-value="Bebasneue-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Bebasneue-regular.ttf">Bebasneue-regular.ttf</option><option style="font-family: 'Big-caslon-medium'" data-value="Big-caslon-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Big-caslon-medium.ttf">Big-caslon-medium.ttf</option><option style="font-family: 'Blue-ocean'" data-value="Blue-ocean.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Blue-ocean.ttf">Blue-ocean.ttf</option><option style="font-family: 'Carnevalee-freakshow'" data-value="Carnevalee-freakshow.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Carnevalee-freakshow.ttf">Carnevalee-freakshow.ttf</option><option style="font-family: 'Caviardreams-bold'" data-value="Caviardreams-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bold.ttf">Caviardreams-bold.ttf</option><option style="font-family: 'Caviardreams-bolditalic'" data-value="Caviardreams-bolditalic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bolditalic.ttf">Caviardreams-bolditalic.ttf</option><option style="font-family: 'Caviardreams-italic'" data-value="Caviardreams-italic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-italic.ttf">Caviardreams-italic.ttf</option><option style="font-family: 'Caviardreams'" data-value="Caviardreams.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams.ttf">Caviardreams.ttf</option><option style="font-family: 'Celtg-'" data-value="Celtg-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtg-.ttf">Celtg-.ttf</option><option style="font-family: 'Celtic-gaelige'" data-value="Celtic-gaelige.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtic-gaelige.ttf">Celtic-gaelige.ttf</option><option style="font-family: 'Celtichd'" data-value="Celtichd.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtichd.ttf">Celtichd.ttf</option><option style="font-family: 'Copperplate'" data-value="Copperplate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Copperplate.ttf">Copperplate.ttf</option><option style="font-family: 'Hollywoodhills'" data-value="Hollywoodhills.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Hollywoodhills.ttf">Hollywoodhills.ttf</option><option style="font-family: 'Icielamerigraf'" data-value="Icielamerigraf.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Icielamerigraf.ttf">Icielamerigraf.ttf</option><option style="font-family: 'Ifc-insane-rodeo'" data-value="Ifc-insane-rodeo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ifc-insane-rodeo.ttf">Ifc-insane-rodeo.ttf</option><option style="font-family: 'Irishpenny'" data-value="Irishpenny.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishpenny.ttf">Irishpenny.ttf</option><option style="font-family: 'Irishuncialfabeta-bold'" data-value="Irishuncialfabeta-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishuncialfabeta-bold.ttf">Irishuncialfabeta-bold.ttf</option><option style="font-family: 'Keepcalm-medium'" data-value="Keepcalm-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Keepcalm-medium.ttf">Keepcalm-medium.ttf</option><option style="font-family: 'Mermaid-swash-caps'" data-value="Mermaid-swash-caps.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid-swash-caps.ttf">Mermaid-swash-caps.ttf</option><option style="font-family: 'Mermaid1001'" data-value="Mermaid1001.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid1001.ttf">Mermaid1001.ttf</option><option style="font-family: 'Myriadpro-regular'" data-value="Myriadpro-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Myriadpro-regular.ttf">Myriadpro-regular.ttf</option><option style="font-family: 'Oceanicdrift3d'" data-value="Oceanicdrift3d.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oceanicdrift3d.ttf">Oceanicdrift3d.ttf</option><option style="font-family: 'Oldlondon'" data-value="Oldlondon.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondon.ttf">Oldlondon.ttf</option><option style="font-family: 'Oldlondonalternate'" data-value="Oldlondonalternate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondonalternate.ttf">Oldlondonalternate.ttf</option><option style="font-family: 'Pictorial-signature'" data-value="Pictorial-signature.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pictorial-signature.ttf">Pictorial-signature.ttf</option><option style="font-family: 'Pirate-ship'" data-value="Pirate-ship.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pirate-ship.ttf">Pirate-ship.ttf</option><option style="font-family: 'Shadeerah-demo'" data-value="Shadeerah-demo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Shadeerah-demo.ttf">Shadeerah-demo.ttf</option><option style="font-family: 'Signatrue-2'" data-value="Signatrue-2.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-2.ttf">Signatrue-2.ttf</option><option style="font-family: 'Signatrue-8'" data-value="Signatrue-8.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-8.ttf">Signatrue-8.ttf</option><option style="font-family: 'Signatrue'" data-value="Signatrue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue.ttf">Signatrue.ttf</option><option style="font-family: 'Sports-world-regular'" data-value="Sports-world-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Sports-world-regular.ttf">Sports-world-regular.ttf</option><option style="font-family: 'Svn-aptima-bold-1'" data-value="Svn-aptima-bold-1.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-aptima-bold-1.ttf">Svn-aptima-bold-1.ttf</option><option style="font-family: 'Svn-bear'" data-value="Svn-bear.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bear.ttf">Svn-bear.ttf</option><option style="font-family: 'Svn-bira'" data-value="Svn-bira.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bira.ttf">Svn-bira.ttf</option><option style="font-family: 'Svn-franko'" data-value="Svn-franko.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-franko.ttf">Svn-franko.ttf</option><option style="font-family: 'Svn-internation'" data-value="Svn-internation.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-internation.ttf">Svn-internation.ttf</option><option style="font-family: 'Svn-trebuchets'" data-value="Svn-trebuchets.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-trebuchets.ttf">Svn-trebuchets.ttf</option><option style="font-family: 'Unifrakturmaguntia16'" data-value="Unifrakturmaguntia16.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Unifrakturmaguntia16.ttf">Unifrakturmaguntia16.ttf</option><option style="font-family: 'Viking-hell'" data-value="Viking-hell.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Viking-hell.ttf">Viking-hell.ttf</option><option style="font-family: 'Vogue'" data-value="Vogue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Vogue.ttf">Vogue.ttf</option>
			</select>
			<a class="thumbimgselect2" style="width:100%;" href="#" onclick="pplrpopupimage2(this,event);event.preventDefault();"></a>
		</div>
		<span class="input-group-btn">
					<a data-toggle="modal" data-target="#myModal6" onclick="$('.canvas,.presult').remove();"  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
		</span>
		</div>
		</div>


		<div class="form-group  input-text">
			<label>Font Size   Initial 2nd</label>
			<input name="cstmfy_size2[]" type="number" max="800" style="width: 70px;" value="30" class="form-control">
			
		</div>

		<div class="form-group  input-text">
				<label>Case  Initial 2nd</label>
				<select name="cstmfy_case2[]" class="form-control"  >
					<option   value='0'>Default</option>	
					<option selected='selected'  value='1'>UPPERCASE</option>
					<option   value='2'>lowercase</option>
					
				</select>			
		</div>

		<div class="form-group input-text">
			<label>X Position  Initial 2nd</label>
			<div class="input-group"> 
			<input name="cstmfy_posx2[]" required style="width: 80px;" value="5" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-right"></i>X % </div>
			</div>
		</div>

		<div class="form-group input-text">
		 	<label>Y Position  Initial 2nd</label>
			<div class="input-group"> 
			<input name="cstmfy_posy2[]" required  style="width: 80px;" value="0" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-up"></i>Y %</div>
			</div>
		</div>
	</div>

	<div style="float: left;width: 100%;display:none;" class="monogrm3">

		<div class="form-group  input-text">
		<label>Font Family Initial 3rd</label>
			<div class="input-group" style="width: 150px;">
			<div class="selectimage">
			<select name="cstmfy_font3[]" class="form-control font"   >							
			<option style="font-family: 'Arial'" class='nogroup' value='font/Arial.ttf'>Arial.ttf</option><option style="font-family: 'CurlzMT'" class='nogroup' value='font/CurlzMT.ttf'>CurlzMT.ttf</option><option style="font-family: 'OpenSans-Bold'" class='nogroup' selected  value='font/OpenSans-Bold.ttf'>OpenSans-Bold.ttf</option><option style="font-family: 'Afterglow-regular'" data-value="Afterglow-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Afterglow-regular.ttf">Afterglow-regular.ttf</option><option style="font-family: 'Agencyfb'" data-value="Agencyfb.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Agencyfb.ttf">Agencyfb.ttf</option><option style="font-family: 'Akadora'" data-value="Akadora.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Akadora.ttf">Akadora.ttf</option><option style="font-family: 'Ambar-pearl-personal-use'" data-value="Ambar-pearl-personal-use.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ambar-pearl-personal-use.ttf">Ambar-pearl-personal-use.ttf</option><option style="font-family: 'American-captain'" data-value="American-captain.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/American-captain.ttf">American-captain.ttf</option><option style="font-family: 'Aoncc-'" data-value="Aoncc-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Aoncc-.ttf">Aoncc-.ttf</option><option style="font-family: 'Arial-black'" data-value="Arial-black.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Arial-black.ttf">Arial-black.ttf</option><option style="font-family: 'Bebasneue-regular'" data-value="Bebasneue-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Bebasneue-regular.ttf">Bebasneue-regular.ttf</option><option style="font-family: 'Big-caslon-medium'" data-value="Big-caslon-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Big-caslon-medium.ttf">Big-caslon-medium.ttf</option><option style="font-family: 'Blue-ocean'" data-value="Blue-ocean.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Blue-ocean.ttf">Blue-ocean.ttf</option><option style="font-family: 'Carnevalee-freakshow'" data-value="Carnevalee-freakshow.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Carnevalee-freakshow.ttf">Carnevalee-freakshow.ttf</option><option style="font-family: 'Caviardreams-bold'" data-value="Caviardreams-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bold.ttf">Caviardreams-bold.ttf</option><option style="font-family: 'Caviardreams-bolditalic'" data-value="Caviardreams-bolditalic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bolditalic.ttf">Caviardreams-bolditalic.ttf</option><option style="font-family: 'Caviardreams-italic'" data-value="Caviardreams-italic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-italic.ttf">Caviardreams-italic.ttf</option><option style="font-family: 'Caviardreams'" data-value="Caviardreams.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams.ttf">Caviardreams.ttf</option><option style="font-family: 'Celtg-'" data-value="Celtg-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtg-.ttf">Celtg-.ttf</option><option style="font-family: 'Celtic-gaelige'" data-value="Celtic-gaelige.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtic-gaelige.ttf">Celtic-gaelige.ttf</option><option style="font-family: 'Celtichd'" data-value="Celtichd.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtichd.ttf">Celtichd.ttf</option><option style="font-family: 'Copperplate'" data-value="Copperplate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Copperplate.ttf">Copperplate.ttf</option><option style="font-family: 'Hollywoodhills'" data-value="Hollywoodhills.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Hollywoodhills.ttf">Hollywoodhills.ttf</option><option style="font-family: 'Icielamerigraf'" data-value="Icielamerigraf.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Icielamerigraf.ttf">Icielamerigraf.ttf</option><option style="font-family: 'Ifc-insane-rodeo'" data-value="Ifc-insane-rodeo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ifc-insane-rodeo.ttf">Ifc-insane-rodeo.ttf</option><option style="font-family: 'Irishpenny'" data-value="Irishpenny.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishpenny.ttf">Irishpenny.ttf</option><option style="font-family: 'Irishuncialfabeta-bold'" data-value="Irishuncialfabeta-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishuncialfabeta-bold.ttf">Irishuncialfabeta-bold.ttf</option><option style="font-family: 'Keepcalm-medium'" data-value="Keepcalm-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Keepcalm-medium.ttf">Keepcalm-medium.ttf</option><option style="font-family: 'Mermaid-swash-caps'" data-value="Mermaid-swash-caps.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid-swash-caps.ttf">Mermaid-swash-caps.ttf</option><option style="font-family: 'Mermaid1001'" data-value="Mermaid1001.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid1001.ttf">Mermaid1001.ttf</option><option style="font-family: 'Myriadpro-regular'" data-value="Myriadpro-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Myriadpro-regular.ttf">Myriadpro-regular.ttf</option><option style="font-family: 'Oceanicdrift3d'" data-value="Oceanicdrift3d.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oceanicdrift3d.ttf">Oceanicdrift3d.ttf</option><option style="font-family: 'Oldlondon'" data-value="Oldlondon.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondon.ttf">Oldlondon.ttf</option><option style="font-family: 'Oldlondonalternate'" data-value="Oldlondonalternate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondonalternate.ttf">Oldlondonalternate.ttf</option><option style="font-family: 'Pictorial-signature'" data-value="Pictorial-signature.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pictorial-signature.ttf">Pictorial-signature.ttf</option><option style="font-family: 'Pirate-ship'" data-value="Pirate-ship.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pirate-ship.ttf">Pirate-ship.ttf</option><option style="font-family: 'Shadeerah-demo'" data-value="Shadeerah-demo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Shadeerah-demo.ttf">Shadeerah-demo.ttf</option><option style="font-family: 'Signatrue-2'" data-value="Signatrue-2.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-2.ttf">Signatrue-2.ttf</option><option style="font-family: 'Signatrue-8'" data-value="Signatrue-8.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-8.ttf">Signatrue-8.ttf</option><option style="font-family: 'Signatrue'" data-value="Signatrue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue.ttf">Signatrue.ttf</option><option style="font-family: 'Sports-world-regular'" data-value="Sports-world-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Sports-world-regular.ttf">Sports-world-regular.ttf</option><option style="font-family: 'Svn-aptima-bold-1'" data-value="Svn-aptima-bold-1.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-aptima-bold-1.ttf">Svn-aptima-bold-1.ttf</option><option style="font-family: 'Svn-bear'" data-value="Svn-bear.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bear.ttf">Svn-bear.ttf</option><option style="font-family: 'Svn-bira'" data-value="Svn-bira.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bira.ttf">Svn-bira.ttf</option><option style="font-family: 'Svn-franko'" data-value="Svn-franko.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-franko.ttf">Svn-franko.ttf</option><option style="font-family: 'Svn-internation'" data-value="Svn-internation.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-internation.ttf">Svn-internation.ttf</option><option style="font-family: 'Svn-trebuchets'" data-value="Svn-trebuchets.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-trebuchets.ttf">Svn-trebuchets.ttf</option><option style="font-family: 'Unifrakturmaguntia16'" data-value="Unifrakturmaguntia16.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Unifrakturmaguntia16.ttf">Unifrakturmaguntia16.ttf</option><option style="font-family: 'Viking-hell'" data-value="Viking-hell.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Viking-hell.ttf">Viking-hell.ttf</option><option style="font-family: 'Vogue'" data-value="Vogue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Vogue.ttf">Vogue.ttf</option>
			</select>
			<a class="thumbimgselect2" style="width:100%;" href="#" onclick="pplrpopupimage2(this,event);event.preventDefault();"></a>
		</div>
		<span class="input-group-btn">
					<a data-toggle="modal" data-target="#myModal6" onclick="$('.canvas,.presult').remove();"  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
		</span>
		</div>
		</div>


		<div class="form-group  input-text">
			<label>Font Size   Initial 3rd</label>
			<input name="cstmfy_size3[]" type="number" max="800" style="width: 70px;" value="30" class="form-control">
			
		</div>

		<div class="form-group  input-text">
				<label>Case  Initial 3rd</label>
				<select name="cstmfy_case3[]" class="form-control"  >
					<option   value='0'>Default</option>	
					<option selected='selected'  value='1'>UPPERCASE</option>
					<option   value='2'>lowercase</option>
					
				</select>			
		</div>
		
		<div class="form-group input-text">
			<label>X Position  Initial 3rd</label>
			<div class="input-group"> 
			<input name="cstmfy_posx3[]" required style="width: 80px;" value="5" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-right"></i>X % </div>
			</div>
		</div>

		<div class="form-group input-text">
		 	<label>Y Position  Initial 3rd</label>
			<div class="input-group"> 
			<input name="cstmfy_posy3[]" required  style="width: 80px;" value="0" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-up"></i>Y %</div>
			</div>
		</div>

</div>

		<div class="form-group   input-text" >
				<label style="max-width: 150px;">Custom Effect</label>
				<select name="cstmfy_effect[]" class="form-control seffect"  onchange="cseffect(this)">
					<option selected='selected'  value='0'>No</option>	
					<option   value='2'>Neon Glow</option>
					<option   value='3'>Stroke</option>
					<option   value='4'>Emboss</option>
				</select>			
		</div>


		<div class="form-group  input-text cseffect cseffectcolor" style="display:none" >
				<label>Stroke Color</label>

				<div class="input-group demo2">
				   <input type="text" style="width: 70px;" value="#160de9" class="form-control " name="cstmfy_stroke[]" />
				   <span class="input-group-addon"><i></i></span>
				 </div>	
		
		</div>

		<div class="form-group input-text cseffectw" style="display:none" >
				<label>Effect Width</label>
				<input name="cstmfy_swidth[]" step="0.1" type="number" style="width:60px;" value="1" class="form-control"  >		
		</div>	



		</div>
		<div class="dsd" title="Remove this field" onclick="openshopify(event,this)" ><i class="fa fa-remove"></i></div>

		<div class="afield" title="Copy this field" onclick="addfield(this,0)" ><i class="fa fa-copy"></i></div>
		<div title="Hide the preview of this field" class="tview"><i  class="fa fa-eye eyeview"></i></div>
		
		</div>			
		
		</div>


				<div id="tab3" class="tab-pane fade in  clone selected" >

		<div class="" style="padding-top:0px;">	
		<div class="akb"  >
			<div class="form-group selectbackground" >
			<label style="text-align: center;">Background <span data-original-title="Choosing different background image will create new view." class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="top" title=""></span></label>
			<div class="input-group bcimage" >
			<select name="cstmfy_each_url[]"   onchange="changeimage(this)"  class="form-control2 imageupload imagemain" >
				<option class="nonvariant" data-value="images/1sttheworld.myshopify.com/mockup.jpg"  selected value="images/1sttheworld.myshopify.com/mockup.jpg">mockup.jpg</option>
								<option  data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/nz_3_de91531b-e0b3-4b8c-81d7-c88901522f77_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/nz_3_de91531b-e0b3-4b8c-81d7-c88901522f77.jpg?v=1575993256'>
				1 : nz_3_de91531b-e0b3-4b8c-81d7-c88901522f77.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/1213_fcc39099-cc6f-4c06-bfe3-eccdc7c29291_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/1213_fcc39099-cc6f-4c06-bfe3-eccdc7c29291.jpg?v=1575993256'>
				2 : 1213_fcc39099-cc6f-4c06-bfe3-eccdc7c29291.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/Nz_1_6ac36429-55be-4021-9f84-5f98db397d25_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/Nz_1_6ac36429-55be-4021-9f84-5f98db397d25.jpg?v=1575993256'>
				3 : Nz_1_6ac36429-55be-4021-9f84-5f98db397d25.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/nz_2_f7d6eba3-005f-4373-8330-dfc96fc853ed_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/nz_2_f7d6eba3-005f-4373-8330-dfc96fc853ed.jpg?v=1575993256'>
				4 : nz_2_f7d6eba3-005f-4373-8330-dfc96fc853ed.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/nz_4_f3b22cbc-632c-4e39-ac2c-653aa2545379_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/nz_4_f3b22cbc-632c-4e39-ac2c-653aa2545379.jpg?v=1575993256'>
				5 : nz_4_f3b22cbc-632c-4e39-ac2c-653aa2545379.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/nz_5_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/nz_5.jpg?v=1575993256'>
				6 : nz_5.jpg</option>	
								<option class='nonvariant' data-value="https://cdn.shopify.com/s/files/1/2074/1905/products/fghg_7e21665e-16f1-4a80-8917-b1aa1131d11a_large.jpg?v=1575993256"   value='https://cdn.shopify.com/s/files/1/2074/1905/products/fghg_7e21665e-16f1-4a80-8917-b1aa1131d11a.jpg?v=1575993256'>
				7 : fghg_7e21665e-16f1-4a80-8917-b1aa1131d11a.jpg</option>	
				<option class='nonvariant' data-value='images/a.png' value='images/a.png'>a.png</option><option class='nonvariant' data-value='images/blank.png' value='images/blank.png'>blank.png</option>			</select>
			<span class="input-group-btn" title="Upload Background Image">
					<a data-toggle="modal" data-target="#myModal10" class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
				</span>
			<a class="thumbimgselect thumbimgselecta" href="" style="left: 0px;" onclick="pplrpopupimage(this,event)"  >
				
				<img width="70" src="images/1sttheworld.myshopify.com/mockup.jpg" />
			</a>
			</div>
		 </div>
		
		<div class="form-group field-type" style="">
			<label style="width: 170px;">Field Type</label>
				<select name="cstmfy_input_type[]" class="form-control" onchange="selecttype(this)" >
					<option   value='1'>Text (Single-line)</option>	
					<option selected='selected'  value='2'>Textarea (Multi-line)</option>
					<option   value='3'>Image Upload</option>

					<option   value='3'>Image Swatch</option>

					<option   value='4'>Color Swatch</option>

					<option   value='7'>Options List </option>	

					<option   value='8'>Checkbox</option>			
				</select>				
		</div>
		
		</div>


		
	<div class="bhoechie-tab-content active">
		<div class="form-group">
			<label>Label</label>
			<textarea name="cstmfy_name[]" onchange="updatename(this)" style="width: 130px;height:34px;" class="form-control nc">Text</textarea>
			
		</div>
		
		<div class="form-group group-image " style='display:none;'>
			<label>Default Image <span data-original-title="Upload for more" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<div class="input-group swidth" >
		<div class="selectimage selectimagea">
			<select name="cstmfy_image[]" class="form-control imageupload imagesub" onchange="loadimage(this);"   >								
			<option data-value='images/a.png' value='images/a.png'>a.png</option><option selected data-value='images/blank.png' value='images/blank.png'>blank.png</option>
			</select>
			<a class="thumbimgselect" href="" style="left: 0px;" onclick="pplrpopupimage(this,event)">
			</a>
		</div>

		<span class="input-group-btn">
					<a data-toggle="modal" data-target="#myModal11" class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
		</span>
		</div>
		</div>





	
		
		<div class="form-group group-image" style='display:none;'>
			<label>Layer: <span data-original-title="Selecting Bottom layer is for transparent/semitransparent png otherwise Top layer should be selected" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
				<select name="cstmfy_index[]" class="form-control" >
					<option   value='1'>Top</option>	
					<option selected='selected'  value='2'>Bottom</option>				
				</select>				
		</div>

		<div class="form-group group-image image-select" style='display:none;'>
		<label>Image Group</label>
		<select required name="cstmfy_cimage[]" class="form-control cstmfy_cimage nc" onchange="min_upload(this)"  >
			<option value="1" selected>--Select--</option>
			<option value="au">au</option><option value="hawaii">hawaii</option><option value="moose">moose</option><option value="netherlands">netherlands</option><option value="nz">nz</option>			</select>


					<a data-toggle="modal" data-target="#myModal20" class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
		<div class="maxfsu2" style="width: 100%;padding: 15px 0px;display: none;"> Maximum file size uploaded by customer is 20MB </div>
		 </div>
				 
	<div class="form-group group-image no-color cstmfy_aspect" style='display:none;'>
		<label>Aspect Ratio <span data-original-title="Ratio of selectable area of customer's uploaded image" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></label>
		<select name="cstmfy_aspect[]" class="form-control nc"   >
			<option value="1" >No</option>
			<option value="2" selected>Yes</option>
			</select>
		 </div>
		 
		<div class="form-group group-image" style='display:none;'>
			<label class="btn btn-info" onclick="pplrpopupshow()">Crop <span data-original-title="x-y-width-height(px)" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<div class="input-group"> 
			<input name="cstmfy_crop[]" readonly style="width: 110px;" value="0-0-720-720" class="form-control">
			</div>
		</div>
		<div class="form-group group-image no-color" style='display:none;'>
		<label>Grayscale <span data-original-title="make image like engraved on wood" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></label>
		<select name="cstmfy_gray[]" class="form-control"   >
			<option value="1" selected>No</option>
			<option value="2" >Yes</option>
			</select>
		 </div>

		
		<div class="form-group" style="display:none;">
			<input name="id" value="3691134976080" class="form-control">
			
		</div>
		
		<div class="form-group input-text input-monogram">
			<label>Default Value</label>
			<textarea name="cstmfy_default[]"  style="width: 130px;height:34px;" class="form-control">Your Text Here</textarea>		
		</div>
	


		<div class="form-group  field-color" style='display:none;'>
		<label>Color Selection
		<span data-original-title="Create color group  for Multiple Color option" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span>
		</label>
		<div class="input-group color-selection" >			
		<select name="cstmfy_fcolorc[]" class="form-control cstmfy_color nc"   >
		<option value="1" >Gradient</option>
			<option value="Colors">Colors</option><option value="Fonts">Fonts</option><option value="Choose A Color">Choose A Color</option>			</select>	
		<span class="input-group-btn" data-toggle="modal" data-target="#myModal" ><button  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</button></span>	
		</div>
			
		</div>	

	<div class="form-group  field-check" style='display:none;'>
		<label>Default state
		</label>
		<div class="input-group" >			
		<select name="cstmfy_check[]" class="form-control nc"   >
		<option value="0" selected>Unchecked</option>
		<option value="1" >checked</option>
			</select>	

		</div>
			
		</div>	




	<div class="form-group  input-drop"  >
		<label>Options List
		<span data-original-title="Create Options List to populate this" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span>
		</label>
		<div class="input-group swidth"  >
		<select name="cstmfy_drop[]" class="form-control cstmfy_drop nc" onchange="cstmfy_drop(this);">
		 <option value="1" >Choose or create</option>
			<option value="Style">Style</option><option value="Position">Position</option><option value="Vertical">Vertical</option><option value="Text Single">Text Single</option><option value="Text Box">Text Box</option><option value="Box Text">Box Text</option><option value="Couple Text">Couple Text</option><option value="Color">Color</option><option value="Colors">Colors</option><option value="Red">Red</option><option value="Black">Black</option>			</select>
			<span class="input-group-btn" data-toggle="modal" data-target="#myModal3" >
			<button  class="btn btn-success btn-add "   type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</button>
				</span>

		 </div>	 
			
	</div>


		<div class="form-group  input-drop" >
		<label>Control Type
		</label>
		<div class="input-group" >			
		<select name="cstmfy_otype[]" class="form-control nc cstmfy_otype"  onchange="cstmfy_otype(this);" >
		<option value="1" selected>Dropdown List</option>
		<option value="2" >Button</option>
		</select>	

		</div>
			
		</div>	


		<div class="form-group  input-drop d_d" style="display:">
		<label>Placeholder Text <span data-original-title="Text that appears inside an option field before a value is entered" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<input name="cstmfy_drop_deafult[]" style="width: 70px;" value="" class="form-control nc">
		</div>
		
		<div class="form-group  input-drop">
		<label>Preselect value </label>
			<div class="input-group" >		

			<select name="cstmfy_button_deafult[]" class="form-control nc c_b_d"   >
				<option value="" selected>None</option>
						</select>
			</div>
		</div>

		
		
		<div class="form-group input-textarea" style='display:block;'>
				<label>Number of line</label>
				<input name="cstmfy_wrap[]" type="number" style="width:60px;" value="3" class="form-control nc"  >		
		</div>	
		
		<div class="form-group input-textarea" style='display:block;'>
				<label>line height</label>
				<div class="input-group">
				<input name="cstmfy_line_height[]" required type="number" min="0"  step="0.01" style="width:80px;" value="0.9" class="form-control"  >	
			</div>				
		</div>	

		<div class="form-group  input-text">
				<label>Max-Character <span data-original-title="Per line for textarea" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
				<input name="cstmfy_max[]" type="number" value="200" style="width: 100px;" class="form-control nc">			
		</div>	
		
		<div class="form-group  input-text  input-monogram">
			<label>Default Font</label>
			<div class="input-group dfont" style="width: 150px;">
			<div class="selectfont">
			<select name="cstmfy_font[]" class="form-control font"   >								
			<option style="font-family: 'Arial'" class='nogroup' value='font/Arial.ttf'>Arial.ttf</option><option style="font-family: 'CurlzMT'" class='nogroup' value='font/CurlzMT.ttf'>CurlzMT.ttf</option><option style="font-family: 'OpenSans-Bold'" class='nogroup' selected  value='font/OpenSans-Bold.ttf'>OpenSans-Bold.ttf</option><option style="font-family: 'Afterglow-regular'" data-value="Afterglow-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Afterglow-regular.ttf">Afterglow-regular.ttf</option><option style="font-family: 'Agencyfb'" data-value="Agencyfb.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Agencyfb.ttf">Agencyfb.ttf</option><option style="font-family: 'Akadora'" data-value="Akadora.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Akadora.ttf">Akadora.ttf</option><option style="font-family: 'Ambar-pearl-personal-use'" data-value="Ambar-pearl-personal-use.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ambar-pearl-personal-use.ttf">Ambar-pearl-personal-use.ttf</option><option style="font-family: 'American-captain'" data-value="American-captain.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/American-captain.ttf">American-captain.ttf</option><option style="font-family: 'Aoncc-'" data-value="Aoncc-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Aoncc-.ttf">Aoncc-.ttf</option><option style="font-family: 'Arial-black'" data-value="Arial-black.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Arial-black.ttf">Arial-black.ttf</option><option style="font-family: 'Bebasneue-regular'" data-value="Bebasneue-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Bebasneue-regular.ttf">Bebasneue-regular.ttf</option><option style="font-family: 'Big-caslon-medium'" data-value="Big-caslon-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Big-caslon-medium.ttf">Big-caslon-medium.ttf</option><option style="font-family: 'Blue-ocean'" data-value="Blue-ocean.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Blue-ocean.ttf">Blue-ocean.ttf</option><option style="font-family: 'Carnevalee-freakshow'" data-value="Carnevalee-freakshow.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Carnevalee-freakshow.ttf">Carnevalee-freakshow.ttf</option><option style="font-family: 'Caviardreams-bold'" data-value="Caviardreams-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bold.ttf">Caviardreams-bold.ttf</option><option style="font-family: 'Caviardreams-bolditalic'" data-value="Caviardreams-bolditalic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bolditalic.ttf">Caviardreams-bolditalic.ttf</option><option style="font-family: 'Caviardreams-italic'" data-value="Caviardreams-italic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-italic.ttf">Caviardreams-italic.ttf</option><option style="font-family: 'Caviardreams'" data-value="Caviardreams.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams.ttf">Caviardreams.ttf</option><option style="font-family: 'Celtg-'" data-value="Celtg-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtg-.ttf">Celtg-.ttf</option><option style="font-family: 'Celtic-gaelige'" data-value="Celtic-gaelige.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtic-gaelige.ttf">Celtic-gaelige.ttf</option><option style="font-family: 'Celtichd'" data-value="Celtichd.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtichd.ttf">Celtichd.ttf</option><option style="font-family: 'Copperplate'" data-value="Copperplate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Copperplate.ttf">Copperplate.ttf</option><option style="font-family: 'Hollywoodhills'" data-value="Hollywoodhills.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Hollywoodhills.ttf">Hollywoodhills.ttf</option><option style="font-family: 'Icielamerigraf'" data-value="Icielamerigraf.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Icielamerigraf.ttf">Icielamerigraf.ttf</option><option style="font-family: 'Ifc-insane-rodeo'" data-value="Ifc-insane-rodeo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ifc-insane-rodeo.ttf">Ifc-insane-rodeo.ttf</option><option style="font-family: 'Irishpenny'" data-value="Irishpenny.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishpenny.ttf">Irishpenny.ttf</option><option style="font-family: 'Irishuncialfabeta-bold'" data-value="Irishuncialfabeta-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishuncialfabeta-bold.ttf">Irishuncialfabeta-bold.ttf</option><option style="font-family: 'Keepcalm-medium'" data-value="Keepcalm-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Keepcalm-medium.ttf">Keepcalm-medium.ttf</option><option style="font-family: 'Mermaid-swash-caps'" data-value="Mermaid-swash-caps.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid-swash-caps.ttf">Mermaid-swash-caps.ttf</option><option style="font-family: 'Mermaid1001'" data-value="Mermaid1001.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid1001.ttf">Mermaid1001.ttf</option><option style="font-family: 'Myriadpro-regular'" data-value="Myriadpro-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Myriadpro-regular.ttf">Myriadpro-regular.ttf</option><option style="font-family: 'Oceanicdrift3d'" data-value="Oceanicdrift3d.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oceanicdrift3d.ttf">Oceanicdrift3d.ttf</option><option style="font-family: 'Oldlondon'" data-value="Oldlondon.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondon.ttf">Oldlondon.ttf</option><option style="font-family: 'Oldlondonalternate'" data-value="Oldlondonalternate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondonalternate.ttf">Oldlondonalternate.ttf</option><option style="font-family: 'Pictorial-signature'" data-value="Pictorial-signature.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pictorial-signature.ttf">Pictorial-signature.ttf</option><option style="font-family: 'Pirate-ship'" data-value="Pirate-ship.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pirate-ship.ttf">Pirate-ship.ttf</option><option style="font-family: 'Shadeerah-demo'" data-value="Shadeerah-demo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Shadeerah-demo.ttf">Shadeerah-demo.ttf</option><option style="font-family: 'Signatrue-2'" data-value="Signatrue-2.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-2.ttf">Signatrue-2.ttf</option><option style="font-family: 'Signatrue-8'" data-value="Signatrue-8.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-8.ttf">Signatrue-8.ttf</option><option style="font-family: 'Signatrue'" data-value="Signatrue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue.ttf">Signatrue.ttf</option><option style="font-family: 'Sports-world-regular'" data-value="Sports-world-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Sports-world-regular.ttf">Sports-world-regular.ttf</option><option style="font-family: 'Svn-aptima-bold-1'" data-value="Svn-aptima-bold-1.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-aptima-bold-1.ttf">Svn-aptima-bold-1.ttf</option><option style="font-family: 'Svn-bear'" data-value="Svn-bear.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bear.ttf">Svn-bear.ttf</option><option style="font-family: 'Svn-bira'" data-value="Svn-bira.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bira.ttf">Svn-bira.ttf</option><option style="font-family: 'Svn-franko'" data-value="Svn-franko.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-franko.ttf">Svn-franko.ttf</option><option style="font-family: 'Svn-internation'" data-value="Svn-internation.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-internation.ttf">Svn-internation.ttf</option><option style="font-family: 'Svn-trebuchets'" data-value="Svn-trebuchets.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-trebuchets.ttf">Svn-trebuchets.ttf</option><option style="font-family: 'Unifrakturmaguntia16'" data-value="Unifrakturmaguntia16.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Unifrakturmaguntia16.ttf">Unifrakturmaguntia16.ttf</option><option style="font-family: 'Viking-hell'" data-value="Viking-hell.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Viking-hell.ttf">Viking-hell.ttf</option><option style="font-family: 'Vogue'" data-value="Vogue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Vogue.ttf">Vogue.ttf</option>
			</select>
			<a class="thumbimgselect2" style="width:100%;" href="#" onclick="pplrpopupimage2(this,event);event.preventDefault();"></a>
		</div>
		<span class="input-group-btn">
					<a data-toggle="modal" data-target="#myModal6" onclick="$('.canvas,.presult').remove();"  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
		</span>
		</div>
		</div>	
		
		<div class="form-group  input-text cstmfy_cfonts" style="" >
		<label>Font Selection
		<span data-original-title="Create font group from your uploaded font list" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span>
		</label>
		<div class="input-group font-selection" >
		<select name="cstmfy_fontc[]" class="form-control cstmfy_cfont nc" onchange="selectfont(this)"  >
		 <option value="1" >No </option>
			<option value="Celtic-Font">Celtic-Font</option><option value="Fonts">Fonts</option><option value="Scottish-Fonts">Scottish-Fonts</option><option selected value="Text-Here">Text-Here</option><option value="Your-Text-Here">Your-Text-Here</option>			</select>
			<span class="input-group-btn" data-toggle="modal" data-target="#myModal2" ><button  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</button></span>	
		 </div>	 
			
	</div>
					
		<div class="form-group fontname" >
			<label>Font Selection Label</label>
			<input name="cstmfy_fontname[]" value="Choose Font3" style="width: 120px;" class="form-control nc">		
		</div>
		


	 
		<div class="form-group  input-text">
			<label>Font Size <span data-original-title="Make bigger customization area  for bigger font size" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<input name="cstmfy_size[]" type="number" max="800" style="width: 70px;" value="20" class="form-control">
			<span class="fsize"></span>
		</div>

	<div class="form-group input-text checkbox" style="width: 100%;float: left;">


			<label><input class="nc" type="hidden" name="cstmfy_csize[]" value="1"  disabled ><input onclick="checkboxhidden(this)" value="0" type="checkbox" name="cstmfy_csize[]" checked > Customer can change font size?</label>
					
		</div>
		

		<div class="form-group dcolor">
			<label>Default Color</label>
			<div class="input-group demo2">
				   <input type="text" style="width: 70px;" value="#050505" class="form-control " name="cstmfy_color[]" />
				   <span class="input-group-addon"><i></i></span>
				 </div>	
		</div>
		
		<div class="form-group  input-text" >
		<label>Color Selection
		<span data-original-title="Create color group  for Multiple Color option. Choose gradient if you want to show a gradient color picker with millions of color" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span>
		</label>
		<div class="input-group color-selection" >			
		<select name="cstmfy_colorc[]" class="form-control cstmfy_color nc" onchange="selectcolor(this)"  >
			<option value="1" selected>No</option>
			<option value="2" >Gradient</option>
			<option value="Choose A Color">Choose A Color</option><option value="Colors">Colors</option><option value="Fonts">Fonts</option>			</select>	
		<span class="input-group-btn" data-toggle="modal" data-target="#myModal" ><button  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</button></span>	
		</div>
			
		</div>	

		<div class="form-group  colorname"  style="display:none;">
			<label>Color Selection Label</label>
			<input name="cstmfy_colorname[]" value="Choose A Color3" style="width: 120px;" class="form-control nc">		
		</div>
		<div class="form-group  field-color">
			<label>Blending type:</label>

		<select  name="cstmfy_blend[]" class="form-control">
			<option value="0"   >Normal</option>
			<option value="1" >Lighter</option>
			<option value="2" selected='selected'>Multiply</option>
			<option value="3" >Screen</option>
			<option value="4" >Overlay</option>
			<option value="5" >Darken</option>
			<option value="6" >Lighten</option>
		</select>
		</div>

		
		<div class="form-group  input-text input-monogram">
			<label>Opacity</label>
			<div class="input-group">
				   <input  type="range" min="0" max="127" style="width:150px;" value="49" class="form-control " name="cstmfy_trans[]" />

			 </div>	
		</div>		


		<div class="form-group  input-text">
				<label>Case</label>
				<select name="cstmfy_case[]" class="form-control"  >
					<option selected='selected'  value='1'>Default</option>	
					<option   value='2'>UPPERCASE</option>
					<option   value='3'>lowercase</option>
					<option   value='4'>Capitalize</option>
					<option   value='5'>Sentence</option>
					
				</select>			
		</div>
		

		
		<div class="form-group prev-item no-color halign input-text" >
				<label>Horizontal Align</label>
				<select name="cstmfy_align[]" class="form-control"  >
					<option selected='selected'  value='center'>Center</option>	
					<option   value='left'>Left</option>
					<option   value='right'>Right</option>			
				</select>				
		</div>	

		<div class="form-group input-text checkbox halign" style="width: 100%;float: left;">
			<label>	<input class="nc" type="hidden" name="cstmfy_calign[]" value="1"   ><input value="0"  type="checkbox" onclick="checkboxhidden(this)" name="cstmfy_calign[]"   >Customer can change Horizontal alignment?</label>
				
		</div>

		<div class="form-group prev-item no-color input-textarea" >
				<label>Vertical align</label>
				<select name="cstmfy_valign[]" class="form-control"  >
					<option   value='1'>Top</option>	
					<option selected='selected'  value='2'>Center</option>
					<option   value='3'>Bottom</option>			
				</select>				
		</div>


		<div class="form-group input-pac no-color">
			<label>Plain/Angle/Circular</label>
			<select name="cstmfy_type[]" class="form-control" onchange="pac(this)"  >	
				<option   value='1'>Plain</option>	
				<option selected='selected'  value='2'>Angled</option>
				<option   value='3'>Circular</option>
				</select>
		</div>
		
		<div class="form-group arc no-color" style='display:none;' >
			<label>Arc Radius</label>
			<input name="cstmfy_radius[]" style="width: 70px;" value="500" class="form-control"> <button type="button" class="btn btn-default" onclick="rev(this)">Revese face</button>
		</div>
		
		<div class="form-group angle">
			<label>Angle</label>
			<input name="cstmfy_angle[]" style="width: 70px;" value="7.57" onkeyup="angle2(this)" class="form-control">
		</div>

		<div class="form-group pplrrequre">
				<label>Required Condition </label>
				<select  name="cstmfy_required[]" class="form-control nc" style="max-width: 110px;"  >
					<option selected='selected'  value='1'>Required</option>	
					<option   value='2'>Optional</option>	
					<option class="creq"   value='3'>Optional with previous field</option>						
				</select>			
		</div>	
		

		 <div class="form-group group-image no-color min_upload" style='display:none;'>
		<label>Min upload width (px)</label>
			<div class="input-group group-image"> 
			<input name="cstmfy_min_width[]" style="width: 60px;" value="200" class="form-control nc">
			</div>
		</div>
		<div class="form-group group-image no-color min_upload" style='display:none;'>
		<label>Min upload height (px)</label>
			<div class="input-group group-image"> 
			<input name="cstmfy_min_height[]" style="width: 60px;" value="200" class="form-control nc">
			</div>
		</div>
		 
		
		<div class="form-group  price_add">
			<label >Additional Charge <span data-original-title="Requires Theme update for price increase feature. If you set create new product no need any theme update. Please See Help Section" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<select name="cstmfy_addition[]" onchange="check_charge(event);" class="form-control nc" onchange="price(this)" style="max-width: 110px;" >
				<option selected='selected'  value='1'>No</option>	
				<option   value='2' >Flat rate</option>	
				<option   value='3' >Percentage with Base-Value</option>	
				<option   value='5' >Percentage with All Previous Value</option>	
				<option  class="no_text" value='4' >Per letter</option>			
			</select>			
		</div>
		
		<div class="form-group pplrprice" style="display:none">
			<label>Price add <span data-original-title="Requires Theme update for price increase feature. If you set create new product no need any theme update. Please See Help Section" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
				<input name="cstmfy_price[]" type="text"  title="no commas allowed" pattern="[^,]+" style="width: 60px;" value="1" class="form-control nc">
			</div>

		<div class="form-group  prev-item">
		<label>Preview Type <span data-original-title="Dynamic field: can be modified by customer and will be previewed. Mask only: cannot be modified by customer but will be previewed" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<select name="cstmfy_type_ds[]" class="form-control"  >	
				<option selected='selected'  value='1'>Dynamic</option>	
				<option   value='2'>Mask only</option>
				<option   value='4'>Water Mark</option>
				<option   value='3'>No preview</option>
			</select>
		</div>

	<div class="form-group " >
		<label>Field Heading</label>
		<textarea name="cstmfy_oindex[]"  style="width: 120px;height:34px;" class="form-control nc"></textarea>	
	</div>

	<div class="form-group checkbox" style="width: 100%;float: left;">
			<label>	<input class="nc" type="hidden" name="cstmfy_tab[]" value="0"   ><input onclick="checkboxhidden(this)" type="checkbox" value="1" name="cstmfy_tab[]"   >Field Heading as tab?</label>


				
	</div>
	
	<div class="form-group input-text" >
		<label>Character Type</label>
		<select name="cstmfy_pattern[]" class="form-control nc"  >	
				<option selected='selected'  value='1'>All</option>	
				<option   value='2'>Alphanumeric only</option>
				<option   value='3'>Alpha only</option>
				<option   value='4'>Numeric only</option>
				<option   value='5'>Date</option>
			</select>

	</div>
			
		<div class="form-group cstmfy_ins" >
			<label>Instruction</label>
			<textarea name="cstmfy_ins[]"  class="form-control nc"></textarea>
		</div>

		<div class="form-group" style="display: none;">
				<label style="max-width: 150px;">Show custom area on frontend</label>
				<select name="cstmfy_area[]" class="form-control"  >
					<option selected='selected'  value='0'>No</option>			
				</select>			
		</div>

		<div class="form-group prev-item">
			<label>X Position</label>
			<div class="input-group cstmfy_posx"> 
			<input name="cstmfy_posx[]" required onchange="xpos(this)" value="56.54" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-right"></i>X % </div>
			</div>
		</div>

		<div class="form-group prev-item">
		 	<label>Y Position</label>
			<div class="input-group cstmfy_posy"> 
			<input name="cstmfy_posy[]" required  onchange="ypos(this)" value="47.16" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-up"></i>Y %</div>
			</div>
		</div>

		<div class="form-group prev-item">
			<label>Width</label>
			<div class="input-group"> 
			<input name="cstmfy_width[]" required onchange="pwidth(this)" style="width: 80px;" value="36.32" class="form-control pos"><div class="input-group-addon">%</div>
			</div>
		</div>
		
		<div class="form-group prev-item">
		<label>Height</label>
			<div class="input-group "> 
			<input name="cstmfy_height[]" required onchange="pheight(this)" style="width: 80px;" value="36.83" class="form-control pos"><div class="input-group-addon">%</div>
			</div>
		</div>


		<div class="form-group   input-text cstmfy_style" >
				<label style="max-width: 150px;">Text Style</label>
				<select name="cstmfy_style[]" class="form-control" onchange="selectmonogram(this)" >
					<option selected='selected'  value='1'>Plain</option>	
					<option   value='2'>Monogram 2 letters</option>
					<option   value='3'>Monogram 3 letters</option>
				</select>			
		</div>

	<div style="float: left;width: 100% ;display:none;" class="monogrm2">
		<div class="form-group  input-text">
		<label>Font Family  Initial 2nd</label>
			<div class="input-group" style="width: 150px;">
			<div class="selectimage">
			<select name="cstmfy_font2[]" class="form-control font"   >								
			<option style="font-family: 'Arial'" class='nogroup' value='font/Arial.ttf'>Arial.ttf</option><option style="font-family: 'CurlzMT'" class='nogroup' value='font/CurlzMT.ttf'>CurlzMT.ttf</option><option style="font-family: 'OpenSans-Bold'" class='nogroup' selected  value='font/OpenSans-Bold.ttf'>OpenSans-Bold.ttf</option><option style="font-family: 'Afterglow-regular'" data-value="Afterglow-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Afterglow-regular.ttf">Afterglow-regular.ttf</option><option style="font-family: 'Agencyfb'" data-value="Agencyfb.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Agencyfb.ttf">Agencyfb.ttf</option><option style="font-family: 'Akadora'" data-value="Akadora.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Akadora.ttf">Akadora.ttf</option><option style="font-family: 'Ambar-pearl-personal-use'" data-value="Ambar-pearl-personal-use.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ambar-pearl-personal-use.ttf">Ambar-pearl-personal-use.ttf</option><option style="font-family: 'American-captain'" data-value="American-captain.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/American-captain.ttf">American-captain.ttf</option><option style="font-family: 'Aoncc-'" data-value="Aoncc-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Aoncc-.ttf">Aoncc-.ttf</option><option style="font-family: 'Arial-black'" data-value="Arial-black.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Arial-black.ttf">Arial-black.ttf</option><option style="font-family: 'Bebasneue-regular'" data-value="Bebasneue-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Bebasneue-regular.ttf">Bebasneue-regular.ttf</option><option style="font-family: 'Big-caslon-medium'" data-value="Big-caslon-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Big-caslon-medium.ttf">Big-caslon-medium.ttf</option><option style="font-family: 'Blue-ocean'" data-value="Blue-ocean.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Blue-ocean.ttf">Blue-ocean.ttf</option><option style="font-family: 'Carnevalee-freakshow'" data-value="Carnevalee-freakshow.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Carnevalee-freakshow.ttf">Carnevalee-freakshow.ttf</option><option style="font-family: 'Caviardreams-bold'" data-value="Caviardreams-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bold.ttf">Caviardreams-bold.ttf</option><option style="font-family: 'Caviardreams-bolditalic'" data-value="Caviardreams-bolditalic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bolditalic.ttf">Caviardreams-bolditalic.ttf</option><option style="font-family: 'Caviardreams-italic'" data-value="Caviardreams-italic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-italic.ttf">Caviardreams-italic.ttf</option><option style="font-family: 'Caviardreams'" data-value="Caviardreams.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams.ttf">Caviardreams.ttf</option><option style="font-family: 'Celtg-'" data-value="Celtg-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtg-.ttf">Celtg-.ttf</option><option style="font-family: 'Celtic-gaelige'" data-value="Celtic-gaelige.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtic-gaelige.ttf">Celtic-gaelige.ttf</option><option style="font-family: 'Celtichd'" data-value="Celtichd.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtichd.ttf">Celtichd.ttf</option><option style="font-family: 'Copperplate'" data-value="Copperplate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Copperplate.ttf">Copperplate.ttf</option><option style="font-family: 'Hollywoodhills'" data-value="Hollywoodhills.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Hollywoodhills.ttf">Hollywoodhills.ttf</option><option style="font-family: 'Icielamerigraf'" data-value="Icielamerigraf.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Icielamerigraf.ttf">Icielamerigraf.ttf</option><option style="font-family: 'Ifc-insane-rodeo'" data-value="Ifc-insane-rodeo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ifc-insane-rodeo.ttf">Ifc-insane-rodeo.ttf</option><option style="font-family: 'Irishpenny'" data-value="Irishpenny.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishpenny.ttf">Irishpenny.ttf</option><option style="font-family: 'Irishuncialfabeta-bold'" data-value="Irishuncialfabeta-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishuncialfabeta-bold.ttf">Irishuncialfabeta-bold.ttf</option><option style="font-family: 'Keepcalm-medium'" data-value="Keepcalm-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Keepcalm-medium.ttf">Keepcalm-medium.ttf</option><option style="font-family: 'Mermaid-swash-caps'" data-value="Mermaid-swash-caps.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid-swash-caps.ttf">Mermaid-swash-caps.ttf</option><option style="font-family: 'Mermaid1001'" data-value="Mermaid1001.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid1001.ttf">Mermaid1001.ttf</option><option style="font-family: 'Myriadpro-regular'" data-value="Myriadpro-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Myriadpro-regular.ttf">Myriadpro-regular.ttf</option><option style="font-family: 'Oceanicdrift3d'" data-value="Oceanicdrift3d.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oceanicdrift3d.ttf">Oceanicdrift3d.ttf</option><option style="font-family: 'Oldlondon'" data-value="Oldlondon.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondon.ttf">Oldlondon.ttf</option><option style="font-family: 'Oldlondonalternate'" data-value="Oldlondonalternate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondonalternate.ttf">Oldlondonalternate.ttf</option><option style="font-family: 'Pictorial-signature'" data-value="Pictorial-signature.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pictorial-signature.ttf">Pictorial-signature.ttf</option><option style="font-family: 'Pirate-ship'" data-value="Pirate-ship.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pirate-ship.ttf">Pirate-ship.ttf</option><option style="font-family: 'Shadeerah-demo'" data-value="Shadeerah-demo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Shadeerah-demo.ttf">Shadeerah-demo.ttf</option><option style="font-family: 'Signatrue-2'" data-value="Signatrue-2.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-2.ttf">Signatrue-2.ttf</option><option style="font-family: 'Signatrue-8'" data-value="Signatrue-8.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-8.ttf">Signatrue-8.ttf</option><option style="font-family: 'Signatrue'" data-value="Signatrue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue.ttf">Signatrue.ttf</option><option style="font-family: 'Sports-world-regular'" data-value="Sports-world-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Sports-world-regular.ttf">Sports-world-regular.ttf</option><option style="font-family: 'Svn-aptima-bold-1'" data-value="Svn-aptima-bold-1.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-aptima-bold-1.ttf">Svn-aptima-bold-1.ttf</option><option style="font-family: 'Svn-bear'" data-value="Svn-bear.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bear.ttf">Svn-bear.ttf</option><option style="font-family: 'Svn-bira'" data-value="Svn-bira.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bira.ttf">Svn-bira.ttf</option><option style="font-family: 'Svn-franko'" data-value="Svn-franko.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-franko.ttf">Svn-franko.ttf</option><option style="font-family: 'Svn-internation'" data-value="Svn-internation.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-internation.ttf">Svn-internation.ttf</option><option style="font-family: 'Svn-trebuchets'" data-value="Svn-trebuchets.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-trebuchets.ttf">Svn-trebuchets.ttf</option><option style="font-family: 'Unifrakturmaguntia16'" data-value="Unifrakturmaguntia16.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Unifrakturmaguntia16.ttf">Unifrakturmaguntia16.ttf</option><option style="font-family: 'Viking-hell'" data-value="Viking-hell.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Viking-hell.ttf">Viking-hell.ttf</option><option style="font-family: 'Vogue'" data-value="Vogue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Vogue.ttf">Vogue.ttf</option>
			</select>
			<a class="thumbimgselect2" style="width:100%;" href="#" onclick="pplrpopupimage2(this,event);event.preventDefault();"></a>
		</div>
		<span class="input-group-btn">
					<a data-toggle="modal" data-target="#myModal6" onclick="$('.canvas,.presult').remove();"  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
		</span>
		</div>
		</div>


		<div class="form-group  input-text">
			<label>Font Size   Initial 2nd</label>
			<input name="cstmfy_size2[]" type="number" max="800" style="width: 70px;" value="30" class="form-control">
			
		</div>

		<div class="form-group  input-text">
				<label>Case  Initial 2nd</label>
				<select name="cstmfy_case2[]" class="form-control"  >
					<option   value='0'>Default</option>	
					<option selected='selected'  value='1'>UPPERCASE</option>
					<option   value='2'>lowercase</option>
					
				</select>			
		</div>

		<div class="form-group input-text">
			<label>X Position  Initial 2nd</label>
			<div class="input-group"> 
			<input name="cstmfy_posx2[]" required style="width: 80px;" value="5" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-right"></i>X % </div>
			</div>
		</div>

		<div class="form-group input-text">
		 	<label>Y Position  Initial 2nd</label>
			<div class="input-group"> 
			<input name="cstmfy_posy2[]" required  style="width: 80px;" value="0" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-up"></i>Y %</div>
			</div>
		</div>
	</div>

	<div style="float: left;width: 100%;display:none;" class="monogrm3">

		<div class="form-group  input-text">
		<label>Font Family Initial 3rd</label>
			<div class="input-group" style="width: 150px;">
			<div class="selectimage">
			<select name="cstmfy_font3[]" class="form-control font"   >							
			<option style="font-family: 'Arial'" class='nogroup' value='font/Arial.ttf'>Arial.ttf</option><option style="font-family: 'CurlzMT'" class='nogroup' value='font/CurlzMT.ttf'>CurlzMT.ttf</option><option style="font-family: 'OpenSans-Bold'" class='nogroup' selected  value='font/OpenSans-Bold.ttf'>OpenSans-Bold.ttf</option><option style="font-family: 'Afterglow-regular'" data-value="Afterglow-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Afterglow-regular.ttf">Afterglow-regular.ttf</option><option style="font-family: 'Agencyfb'" data-value="Agencyfb.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Agencyfb.ttf">Agencyfb.ttf</option><option style="font-family: 'Akadora'" data-value="Akadora.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Akadora.ttf">Akadora.ttf</option><option style="font-family: 'Ambar-pearl-personal-use'" data-value="Ambar-pearl-personal-use.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ambar-pearl-personal-use.ttf">Ambar-pearl-personal-use.ttf</option><option style="font-family: 'American-captain'" data-value="American-captain.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/American-captain.ttf">American-captain.ttf</option><option style="font-family: 'Aoncc-'" data-value="Aoncc-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Aoncc-.ttf">Aoncc-.ttf</option><option style="font-family: 'Arial-black'" data-value="Arial-black.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Arial-black.ttf">Arial-black.ttf</option><option style="font-family: 'Bebasneue-regular'" data-value="Bebasneue-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Bebasneue-regular.ttf">Bebasneue-regular.ttf</option><option style="font-family: 'Big-caslon-medium'" data-value="Big-caslon-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Big-caslon-medium.ttf">Big-caslon-medium.ttf</option><option style="font-family: 'Blue-ocean'" data-value="Blue-ocean.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Blue-ocean.ttf">Blue-ocean.ttf</option><option style="font-family: 'Carnevalee-freakshow'" data-value="Carnevalee-freakshow.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Carnevalee-freakshow.ttf">Carnevalee-freakshow.ttf</option><option style="font-family: 'Caviardreams-bold'" data-value="Caviardreams-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bold.ttf">Caviardreams-bold.ttf</option><option style="font-family: 'Caviardreams-bolditalic'" data-value="Caviardreams-bolditalic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-bolditalic.ttf">Caviardreams-bolditalic.ttf</option><option style="font-family: 'Caviardreams-italic'" data-value="Caviardreams-italic.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams-italic.ttf">Caviardreams-italic.ttf</option><option style="font-family: 'Caviardreams'" data-value="Caviardreams.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Caviardreams.ttf">Caviardreams.ttf</option><option style="font-family: 'Celtg-'" data-value="Celtg-.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtg-.ttf">Celtg-.ttf</option><option style="font-family: 'Celtic-gaelige'" data-value="Celtic-gaelige.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtic-gaelige.ttf">Celtic-gaelige.ttf</option><option style="font-family: 'Celtichd'" data-value="Celtichd.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Celtichd.ttf">Celtichd.ttf</option><option style="font-family: 'Copperplate'" data-value="Copperplate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Copperplate.ttf">Copperplate.ttf</option><option style="font-family: 'Hollywoodhills'" data-value="Hollywoodhills.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Hollywoodhills.ttf">Hollywoodhills.ttf</option><option style="font-family: 'Icielamerigraf'" data-value="Icielamerigraf.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Icielamerigraf.ttf">Icielamerigraf.ttf</option><option style="font-family: 'Ifc-insane-rodeo'" data-value="Ifc-insane-rodeo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Ifc-insane-rodeo.ttf">Ifc-insane-rodeo.ttf</option><option style="font-family: 'Irishpenny'" data-value="Irishpenny.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishpenny.ttf">Irishpenny.ttf</option><option style="font-family: 'Irishuncialfabeta-bold'" data-value="Irishuncialfabeta-bold.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Irishuncialfabeta-bold.ttf">Irishuncialfabeta-bold.ttf</option><option style="font-family: 'Keepcalm-medium'" data-value="Keepcalm-medium.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Keepcalm-medium.ttf">Keepcalm-medium.ttf</option><option style="font-family: 'Mermaid-swash-caps'" data-value="Mermaid-swash-caps.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid-swash-caps.ttf">Mermaid-swash-caps.ttf</option><option style="font-family: 'Mermaid1001'" data-value="Mermaid1001.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Mermaid1001.ttf">Mermaid1001.ttf</option><option style="font-family: 'Myriadpro-regular'" data-value="Myriadpro-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Myriadpro-regular.ttf">Myriadpro-regular.ttf</option><option style="font-family: 'Oceanicdrift3d'" data-value="Oceanicdrift3d.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oceanicdrift3d.ttf">Oceanicdrift3d.ttf</option><option style="font-family: 'Oldlondon'" data-value="Oldlondon.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondon.ttf">Oldlondon.ttf</option><option style="font-family: 'Oldlondonalternate'" data-value="Oldlondonalternate.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Oldlondonalternate.ttf">Oldlondonalternate.ttf</option><option style="font-family: 'Pictorial-signature'" data-value="Pictorial-signature.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pictorial-signature.ttf">Pictorial-signature.ttf</option><option style="font-family: 'Pirate-ship'" data-value="Pirate-ship.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Pirate-ship.ttf">Pirate-ship.ttf</option><option style="font-family: 'Shadeerah-demo'" data-value="Shadeerah-demo.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Shadeerah-demo.ttf">Shadeerah-demo.ttf</option><option style="font-family: 'Signatrue-2'" data-value="Signatrue-2.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-2.ttf">Signatrue-2.ttf</option><option style="font-family: 'Signatrue-8'" data-value="Signatrue-8.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue-8.ttf">Signatrue-8.ttf</option><option style="font-family: 'Signatrue'" data-value="Signatrue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Signatrue.ttf">Signatrue.ttf</option><option style="font-family: 'Sports-world-regular'" data-value="Sports-world-regular.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Sports-world-regular.ttf">Sports-world-regular.ttf</option><option style="font-family: 'Svn-aptima-bold-1'" data-value="Svn-aptima-bold-1.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-aptima-bold-1.ttf">Svn-aptima-bold-1.ttf</option><option style="font-family: 'Svn-bear'" data-value="Svn-bear.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bear.ttf">Svn-bear.ttf</option><option style="font-family: 'Svn-bira'" data-value="Svn-bira.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-bira.ttf">Svn-bira.ttf</option><option style="font-family: 'Svn-franko'" data-value="Svn-franko.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-franko.ttf">Svn-franko.ttf</option><option style="font-family: 'Svn-internation'" data-value="Svn-internation.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-internation.ttf">Svn-internation.ttf</option><option style="font-family: 'Svn-trebuchets'" data-value="Svn-trebuchets.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Svn-trebuchets.ttf">Svn-trebuchets.ttf</option><option style="font-family: 'Unifrakturmaguntia16'" data-value="Unifrakturmaguntia16.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Unifrakturmaguntia16.ttf">Unifrakturmaguntia16.ttf</option><option style="font-family: 'Viking-hell'" data-value="Viking-hell.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Viking-hell.ttf">Viking-hell.ttf</option><option style="font-family: 'Vogue'" data-value="Vogue.ttf"class="nogroup" value="font/1sttheworld.myshopify.com/Vogue.ttf">Vogue.ttf</option>
			</select>
			<a class="thumbimgselect2" style="width:100%;" href="#" onclick="pplrpopupimage2(this,event);event.preventDefault();"></a>
		</div>
		<span class="input-group-btn">
					<a data-toggle="modal" data-target="#myModal6" onclick="$('.canvas,.presult').remove();"  class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
		</span>
		</div>
		</div>


		<div class="form-group  input-text">
			<label>Font Size   Initial 3rd</label>
			<input name="cstmfy_size3[]" type="number" max="800" style="width: 70px;" value="30" class="form-control">
			
		</div>

		<div class="form-group  input-text">
				<label>Case  Initial 3rd</label>
				<select name="cstmfy_case3[]" class="form-control"  >
					<option   value='0'>Default</option>	
					<option selected='selected'  value='1'>UPPERCASE</option>
					<option   value='2'>lowercase</option>
					
				</select>			
		</div>
		
		<div class="form-group input-text">
			<label>X Position  Initial 3rd</label>
			<div class="input-group"> 
			<input name="cstmfy_posx3[]" required style="width: 80px;" value="5" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-right"></i>X % </div>
			</div>
		</div>

		<div class="form-group input-text">
		 	<label>Y Position  Initial 3rd</label>
			<div class="input-group"> 
			<input name="cstmfy_posy3[]" required  style="width: 80px;" value="0" class="form-control pos"><div class="input-group-addon"><i class="fa fa-arrow-up"></i>Y %</div>
			</div>
		</div>

</div>

		<div class="form-group   input-text" >
				<label style="max-width: 150px;">Custom Effect</label>
				<select name="cstmfy_effect[]" class="form-control seffect"  onchange="cseffect(this)">
					<option selected='selected'  value='0'>No</option>	
					<option   value='2'>Neon Glow</option>
					<option   value='3'>Stroke</option>
					<option   value='4'>Emboss</option>
				</select>			
		</div>


		<div class="form-group  input-text cseffect cseffectcolor" style="display:none" >
				<label>Stroke Color</label>

				<div class="input-group demo2">
				   <input type="text" style="width: 70px;" value="#000000" class="form-control " name="cstmfy_stroke[]" />
				   <span class="input-group-addon"><i></i></span>
				 </div>	
		
		</div>

		<div class="form-group input-text cseffectw" style="display:none" >
				<label>Effect Width</label>
				<input name="cstmfy_swidth[]" step="0.1" type="number" style="width:60px;" value="1" class="form-control"  >		
		</div>	



		</div>
		<div class="dsd" title="Remove this field" onclick="openshopify(event,this)" ><i class="fa fa-remove"></i></div>

		<div class="afield" title="Copy this field" onclick="addfield(this,0)" ><i class="fa fa-copy"></i></div>
		<div title="Hide the preview of this field" class="tview"><i  class="fa fa-eye eyeview"></i></div>
		
		</div>			
		
		</div>


		
<div id="tabx" class="tab-pane fade in" style="">
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="background: #fff;overflow-y: scroll;">
<div id="conditions">

	

	  <div class="conds">
	  	<span class="fa fa-copy" onclick="copycondition(this);">	</span>	
	    <span class="fa fa-remove" onclick="remove_condition(this);">
	    </span>	<span class="divwhen">When 
	    <select class="when form-control" name="when[]" onchange="selectIs(this)">
	      <option selected data-val="2.Engrave On Back" value="2" selected="">2.Engrave On Back	      </option>

	    </select>
	    </span> 
	    <span class="divis">
	    	Is 

	    <span class="hideis" ></span>
	    <select class="is" name="is0[]" multiple>
	    	
		    	<option selected value="checked" > checked		      </option>

	      		    </select>
	    <span class="value">
	    </span>
	</span>
	  <span class="divthen">	Then 
	    <select class="showHide form-control" name="showhide[]">
	      <option selected value="show" > Show</option>
	      <option  value="hide" > Hide</option>

	    </select>
	</span>
	<span class="divtarget">
	    <span class="hidetarget" ></span>
	    <select class="target " name="target0[]" multiple>

	      
		     <option selected value="3" data-val="3.Text" selected=""> 3.Text</option>

	      	
	    </select>
	</span>
	  </div>

	
	</div>
<span class="button add-conditional-logic" onclick="addcondition()"><span class="fa fa-plus-circle"></span> Add a new condition</span>

<p>* Add fields with Options List , Checkbox , Group Image field  to populate conditional logic.</p>
<p>* <a href="https://productpersonalizer.com/docs/conditional-logic-set" target="_blank" style="color:yellowgreen">Check here</a> for conditional logic guide </p>

		</div>
		</div>
	</div>
				</div>
		</div>	


<div style="width: :100%;float: left;padding-right: 15px;">

<div style="width:50%;float:left;" class="svp">
	<div class="form-group" style="width:100%;float:left;">
		<label>Save personalization <span data-original-title="Choosing Create New product will create a new product to your inventory" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
			<select name="cstmfy_preview" class="form-control s_per" style="float: right;" onchange="imgsizeh(this);"  >	
				<option    value='1'>Without Personalized Image</option>	
				<option selected='selected'  value='3'>With Personalized Image</option>
				<option   value='4'>With Personalized Image & without Background Image</option>
				<option   value='2'>Creating New product with Personalized image</option>
				<option   value='5'>Creating New product with Personalized image & without Background Image</option>
			</select>
	</div>	
	<div class="form-group imgsize" style="display:none;">
			<label>Personalized output Image Size</label>
			<input name="cstmfy_img" type="number" class="form-control img-size" placeholder="1024" max="5000" value="600" style="max-width: 140px;float: right;" />
	</div>	
	
	<div class="form-group cstmfy_personalize_button" style="width:100%;float:left;">
	<label>Personalize Style <span data-original-title="Direct Field:Field appears before add to cart button, Popup: popup window with preview,Exclusive: popup window with preview and hide add-to-cart button(set add-to-cart class in settings)" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span> </label>
	
	<select name="cstmfy_personalize_button" class="form-control" style="float: right;" onchange="p_button(this);" >	
				<option   value='1'>Direct Field</option>	
				<option   value='2'>Button with toggle</option>
				<option selected='selected'   value='3'>Button with Popup</option>
				<option   value='4'>Button with Popup(Exclusive)</option>
	</select>

</div>
<div class="form-group personalizebutton" style=" width:100%;float:left;">
		<label>Personalize button text</label>
		<input name="cstmfy_personalize_text" type="text" class="form-control"  placeholder="Personalize" value="Personalize It" style="float: right;" />
</div>



</div>	
<div style="width:46%;float:right;" class="svp">
<div class="form-group loadfirst" style="width:100%;float:left;display: none">
	<label>Preview timing <span data-original-title="When the personalization will be visualized" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>
	<select name="cstmfy_load" class="form-control cstmfy_load" style="float: right;" >	
				<option selected='selected'  value='1'>When page load and  change  input field</option>	
				<option   value='0'>Only When change input field</option>
				<option   value='2'>Only When click on preview button</option>
				<option   value='3'>No Preview</option>
	</select>

</div>

<div class="form-group cstmfy_preview_button" style="width:100%;float:left;display: none">
	<label>Preview button <span data-original-title="Preview button  can be customized by class name pplr_preview in your theme" class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="right" title=""></span></label>

	<select name="cstmfy_preview_button" class="form-control c_p_b" style="float: right;" onchange="previewbutton(this);" >	
				<option   value='1'>No</option>	
				<option selected='selected'  value='3'>Mobile only</option>
				<option   value='2'>Desktop & mobile</option>

	</select>

</div>
<div class="form-group previewbutton" style="display:none; width:100%;float:left;">
		<label>Preview button text </label>
		<input name="cstmfy_preview_text" type="text" class="form-control"  placeholder="PREVIEW" value="PREVIEW" style="float: right;" />
</div>

</div>
</div>


 <div style="width: 100%; float: left; margin-bottom: 20px;padding-right: 15px;">	
 	<input style="float: left; width: 40%;" name="template" class="btn btn-warning mainform ptem" value="Save As Template" type="submit">	
		<input style="float: right; width: 40%;" name="submit"  class="btn btn-success mainform" value="SAVE" type="submit">		
</div>	



</form>
	
		
</div>
<link href="css/themes_base_jquery-ui.css" rel="stylesheet" type="text/css">

<div class="col-lg-5 col-md-5 col-sm-12" style="padding-top: 0px;float:left;padding-left: 0px;">

	<p class="bg-warning pplr-warning" style="padding: 5px 10px;">Please update configuration if you remove/rename/update product image / uploaded image in app that are used as background image or default Image</p>

	<p style="text-align: center;"><span onclick="showfieldpreview(this)" ><i class="fa fa-eye"></i> Show</span> <span onclick="hidefieldpreview(this)" >  <i class="fa fa-eye-slash"></i> Hide </span><select id='cfo' multiple style="height: 20px;max-width: 100px;"> 
								<option selected value="1" >Image</option>
									<option selected value="2" >Engrave On Back</option>
									<option selected value="3" >Text</option>
				</select>  Preview </p>

	<div class="pplr" id="pplr">
	  <img id="ming" src="images/1sttheworld.myshopify.com/nz-6.png" />
	  		
	  <div class="area" onmouseover="areaindexshow(this)" ondragstart="dragStart(event,this)" ondragend="dragEnd(event,this)" ></div>
	  
	  
	  		
	  <div class="area" onmouseover="areaindexshow(this)" ondragstart="dragStart(event,this)" ondragend="dragEnd(event,this)" ></div>
	  
	  
	  		
	  <div class="area" onmouseover="areaindexshow(this)" ondragstart="dragStart(event,this)" ondragend="dragEnd(event,this)" ></div>
	  
	  
	  		</div>
		<br/>
	<p style="text-align:center;width:100%"><button class="btn btn-default" onclick="cover()" >Expand field area to full</button>

	 <button class="btn btn-default" onclick='var index=$(".clone.active").index(); $(".area:eq(" + index + ")").toggle()' >Hide/Show field area</button> <a href="" class="download btn btn-default" onclick="$('.area').hide();createImgToPrint('pplr', this, event);" download="New Zealand Wooden Wall Clock Custom Bn10.png" >Save Image </a> <p>
	<div class="alert alert-info">
	<p style="color:blue;text-align:center;width:100%">* Custom area is draggable and resizable</p>

	<p style="color:blue;text-align:center;width:100%">* For better UX use less resolution image for background or Group Image</p>
	</div>
</div>


</div>

<!-- /.row -->

</div>
<!-- /.container-fluid -->

</div>
<!-- /#page-wrapper -->

</div>
<!-- /#wrapper -->









<div id="pplrpopup"></div>

<div id="contactModal2" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg" style="max-width: 600px;margin-top: 70px;">
	    <div class="modal-content scontent">
	        <div class="modal-header">
	            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
	            <h3 class="modal-title">Submit a Ticket</h3>
	        </div>
	        <div class="modal-body">
	            <div class="containter">
	                <div class="row">
	                    <form  id="contactForm2" class="form-horizontal" enctype="multipart/form-data" name="commentform" method="post" action="c_email.php" style="padding: 0px 100px;">
	                        <div class="" style="width: 100%;">

	                        	<div  style="width: 100%;">
	                                <label for="InputEmail" class="control-label" style="font-weight: normal;padding: 5px 0px 5px;">Your Name (Optional)</label>
	                                <div class="">
	                                    <input style="width: 100%;" type="text" class="form-control" id="email" name="name" value="Tien Vu"    >
	                                </div>
	                            </div>
	       
	                            <div  style="width: 100%;">
	                                <label for="InputEmail" class="control-label" style="font-weight: normal;padding: 5px 0px 5px;">Email Address </label>
	                                <div class="">
	                                    <input style="width: 100%;" type="email" class="form-control" id="email" name="email" value="vuminhtien0909@gmail.com"  required  >
	                                </div>
	                            </div>

	                           <div  style="width: 100%;">
	                                <label for="InputEmail" class="control-label" style="font-weight: normal;padding: 5px 0px 5px;">Subject</label>
	                                <div class="">
	                                    <input style="width: 100%;" type="text" class="form-control ssubject" id="subject" name="subject" value=""   required >
	                                </div>
	                            </div>

	                            <div  style="width: 100%;display: none;">
	                                <label for="InputEmail" class="control-label" style="font-weight: normal;padding: 5px 0px 5px;">Shopify Url</label>
	                                <div class="">
	                                    <input style="width: 100%;" type="text" class="form-control" id="surl" name="surl" value="1sttheworld.myshopify.com"    >
	                                </div>
	                            </div>


	                            <div  style="width: 100%;">
	                                <label for="InputMessage" class="control-label" style="font-weight: normal;padding: 5px 0px 5px;">Message</label>
	                                <div class="">
	                                    <textarea  style="width: 100%;" name="comments" id="comments" class="form-control smessage" rows="5" required></textarea>
	                                </div>
	                            </div>

	                         	<div  style="width: 100%;">
							        <input type="file" name="attachment" class="form-control" style="width: 100%;margin: 5px 0px;height:auto">
							    </div>

	                            <div style="padding: 10px">
	                            <input type="submit" name="submit"  value="Submit" class="btn btn-success formSuccess2">
	                        </div>
	                        </div>
	                    </form>


	                </div>

	            </div>
	        </div><!-- End of Modal body -->
	    </div><!-- End of Modal content -->
	</div><!-- End of Modal dialog -->
</div><!-- End of Modal -->


<script>

function popupemail2(t){
$("#contactModal2").modal();
	if(t){
		$(".ssubject").val('Expert Install');
		$(".smessage").val('Please Send Collaborator access request for Expert Install');
	}
	else{
		$(".ssubject").val('');
		$(".smessage").val('');
	}
}


function submitForm2(){

	var form = $("#contactForm2")[0];
	var serializedData = new FormData(form);
	$(".formSuccess2").val('Submitting...');
 
    $.ajax({
    	contentType: false,
        cache: false,
   		processData:false,
        type: "POST",
        url: "c_email.php",
        data: serializedData,
        success : function(text){

        	console.log(text);
            if (text == "true"){
            	$("#cfailed").remove();
                formSuccess2();
                $(".formSuccess2").val('Submit');
                $("body").append('<div id="csuccess">Ticket has been Created Successfully </div>');
                setTimeout(function() {
                	$("#csuccess").remove();

                },5000)
            }
            else{

            	$("#contactForm2").append('<div id="cfailed" class="alert alert-warning">'+ text +'</div>');
            }
        }
    });
}
function formSuccess2(){
    $("#contactModal2").modal('hide');
}


$("#contactForm2").on("submit", function (event) {
    if (event.isDefaultPrevented()) {

    } else {
        // everything looks good!
        event.preventDefault();
        submitForm2();
    }
});
</script>

<!-- Hotjar Tracking Code for doshopify.com -->
<script>

</script>



<script>console.log(06)</script>

<script type="text/javascript">
  window.zESettings = {
    webWidget: {
      contactOptions: {
        enabled: true,
        contactButton: { '*': 'Get in touch' }
      }
    }
  };
</script>



<!-- Start of product-personalizer Zendesk Widget script -->
<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=3035b960-4ebb-4024-b301-2cc9966f088d"> </script>

<script type="text/javascript">
  zE('webWidget', 'prefill', {
    name: {
      value: 'Tien Vu'
    },
    email: {
      value: 'vuminhtien0909@gmail.com'
    }
  });
</script>
<!-- End of product-personalizer Zendesk Widget script -->

<!--

<div id="c-email" onclick="popupemail2()"></div>

-->


<style>
#c-email{
    width: 70px;
    height: 70px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background: url('email-button.png');
    background-size: contain;
    cursor: pointer;
    z-index: 999999;
}
#csuccess{
	width: 300px;
	height: 70px;
	position: fixed;
	bottom: 10px;
	right: 90px;
	background: #3A1264;
	border-radius: 5px;
	color: #ffffff;
	padding: 25px 15px;
	text-align: center;
	font-size: 15px;
	 z-index: 999999;
}
.scontent{margin-top: 0;}

#message.error {
    border: 1px solid #ee3131;
    background: #ffc5c5;
}
#message {
    text-align: center;
    display: none;
    max-width: 1000px;
    margin: 10px auto;
    padding: 10px;
    border-radius: 7px;
    border: 1px solid #4390e6;
    background: #bbdbff;
}
.modal-footer {
    border-top: 0px solid 
    #e5e5e5;
}
</style>

<!-- Modal -->


<!-- Modal -->
<div id="myModal4" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Additional Charge (Must Follow)</h4>
      </div>
      <div class="modal-body">
		<h4>Before Set Additional Charge Must read and Configure your theme: </h4> <ul class="list-group"><li class="list-group-item"> <a target="_blank" href="https://productpersonalizer.com/docs/how-options-with-costs-are-displayed-in-the-cart-checkout/">How Options with Costs are Displayed in the Cart / Checkout</a></li>
			<li class="list-group-item"><a target="_blank" href="https://productpersonalizer.com/docs/price-per-option-theme-installation/">Price Per Option: Generic Theme Installation</a></li>
		</ul>


      </div>
      <div class="modal-footer">
      </div>
    </div>

  </div>
</div>


<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Create Color Group</h4>
      </div>
      <div class="modal-body" style="float: left;">
       	<form action="ajaxcolor.php" method="post" role="form" class="" id="creategroup" style="margin-left: 15px; ">
	<div class="form-group" style="width: 100%;float: left;">
	<label>Title</label>
	<br/>
	<input required title="At lease one Alpha character, Only Alpha-numeric is allowed" name="cname" pattern="^[0-9A-Za-z]*[A-Za-z ]+[0-9A-Za-z]*$" placeholder="Title" class="form-control cname">		
	</div>	
	<div class="color" style="width: 100%;float: left;">
	<div class="form-group colorlist creategroup">
		<span class="ui-icon ui-icon-arrowthick-2-n-s">
        </span>
		<input type="text" required value="" placeholder="Color Name" class="form-control " name="lname[]" />
		<div class="input-group demo2" style="width:46%">
			   <input type="text" required  value="#000000" class="form-control " name="clist[]" />
			   <span class="input-group-addon"><i></i></span>
									<span class="input-group-btn">
					<button class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</button>
				</span>
			 </div>	
	</div>
	</div>
	
	<div class="form-group  input-text">
	<input type="hidden" name="store" value="1sttheworld.myshopify.com" />
	<input type="submit" name="colorlist" class="btn btn-success" value="Create" />
	</div>

	</form>
      </div>
      <div class="modal-footer">
  
      </div>
    </div>

  </div>
</div>



<!-- Modal -->
<div id="myModal2" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Create Font Group</h4>
      </div>
      <div class="modal-body">
	<form action="ajaxfontgroup.php" method="post" role="form" class="" id="creategroupf"  style="display:none;margin-left: 15px;">
				<div class="form-group" style="width: 100%;float: left;">
				<input  name="gname"  pattern="^[0-9A-Za-z]*[A-Za-z ]+[0-9A-Za-z]*$" value="" title="At lease one Alpha character, Only Alpha-numeric is allowed" required placeholder="Title" class="form-control">		
				</div>	
				
				<div class="pfont" style="width: 100%;float: left;">
				<div class="form-group fontlist creategroup" >
				<span class="ui-icon ui-icon-arrowthick-2-n-s">
				</span>
				<input type="text" required  value="" placeholder="Font Name" class="form-control " name="fname[]" style="float: left;width: 200px;" />
				<div class="input-group" style="width: 200px;">
				<div class="">
				<select name="flist[]"  class="form-control2 font2" style="width: 100%;float: left;" >
				<option value="Afterglow-regular.ttf" style="font-family: 'Afterglow-regular'">Afterglow-regular.ttf</option><option value="Agencyfb.ttf" style="font-family: 'Agencyfb'">Agencyfb.ttf</option><option value="Akadora.ttf" style="font-family: 'Akadora'">Akadora.ttf</option><option value="Ambar-pearl-personal-use.ttf" style="font-family: 'Ambar-pearl-personal-use'">Ambar-pearl-personal-use.ttf</option><option value="American-captain.ttf" style="font-family: 'American-captain'">American-captain.ttf</option><option value="Aoncc-.ttf" style="font-family: 'Aoncc-'">Aoncc-.ttf</option><option value="Arial-black.ttf" style="font-family: 'Arial-black'">Arial-black.ttf</option><option value="Bebasneue-regular.ttf" style="font-family: 'Bebasneue-regular'">Bebasneue-regular.ttf</option><option value="Big-caslon-medium.ttf" style="font-family: 'Big-caslon-medium'">Big-caslon-medium.ttf</option><option value="Blue-ocean.ttf" style="font-family: 'Blue-ocean'">Blue-ocean.ttf</option><option value="Carnevalee-freakshow.ttf" style="font-family: 'Carnevalee-freakshow'">Carnevalee-freakshow.ttf</option><option value="Caviardreams-bold.ttf" style="font-family: 'Caviardreams-bold'">Caviardreams-bold.ttf</option><option value="Caviardreams-bolditalic.ttf" style="font-family: 'Caviardreams-bolditalic'">Caviardreams-bolditalic.ttf</option><option value="Caviardreams-italic.ttf" style="font-family: 'Caviardreams-italic'">Caviardreams-italic.ttf</option><option value="Caviardreams.ttf" style="font-family: 'Caviardreams'">Caviardreams.ttf</option><option value="Celtg-.ttf" style="font-family: 'Celtg-'">Celtg-.ttf</option><option value="Celtic-gaelige.ttf" style="font-family: 'Celtic-gaelige'">Celtic-gaelige.ttf</option><option value="Celtichd.ttf" style="font-family: 'Celtichd'">Celtichd.ttf</option><option value="Copperplate.ttf" style="font-family: 'Copperplate'">Copperplate.ttf</option><option value="Hollywoodhills.ttf" style="font-family: 'Hollywoodhills'">Hollywoodhills.ttf</option><option value="Icielamerigraf.ttf" style="font-family: 'Icielamerigraf'">Icielamerigraf.ttf</option><option value="Ifc-insane-rodeo.ttf" style="font-family: 'Ifc-insane-rodeo'">Ifc-insane-rodeo.ttf</option><option value="Irishpenny.ttf" style="font-family: 'Irishpenny'">Irishpenny.ttf</option><option value="Irishuncialfabeta-bold.ttf" style="font-family: 'Irishuncialfabeta-bold'">Irishuncialfabeta-bold.ttf</option><option value="Keepcalm-medium.ttf" style="font-family: 'Keepcalm-medium'">Keepcalm-medium.ttf</option><option value="Mermaid-swash-caps.ttf" style="font-family: 'Mermaid-swash-caps'">Mermaid-swash-caps.ttf</option><option value="Mermaid1001.ttf" style="font-family: 'Mermaid1001'">Mermaid1001.ttf</option><option value="Myriadpro-regular.ttf" style="font-family: 'Myriadpro-regular'">Myriadpro-regular.ttf</option><option value="Oceanicdrift3d.ttf" style="font-family: 'Oceanicdrift3d'">Oceanicdrift3d.ttf</option><option value="Oldlondon.ttf" style="font-family: 'Oldlondon'">Oldlondon.ttf</option><option value="Oldlondonalternate.ttf" style="font-family: 'Oldlondonalternate'">Oldlondonalternate.ttf</option><option value="Pictorial-signature.ttf" style="font-family: 'Pictorial-signature'">Pictorial-signature.ttf</option><option value="Pirate-ship.ttf" style="font-family: 'Pirate-ship'">Pirate-ship.ttf</option><option value="Shadeerah-demo.ttf" style="font-family: 'Shadeerah-demo'">Shadeerah-demo.ttf</option><option value="Signatrue-2.ttf" style="font-family: 'Signatrue-2'">Signatrue-2.ttf</option><option value="Signatrue-8.ttf" style="font-family: 'Signatrue-8'">Signatrue-8.ttf</option><option value="Signatrue.ttf" style="font-family: 'Signatrue'">Signatrue.ttf</option><option value="Sports-world-regular.ttf" style="font-family: 'Sports-world-regular'">Sports-world-regular.ttf</option><option value="Svn-aptima-bold-1.ttf" style="font-family: 'Svn-aptima-bold-1'">Svn-aptima-bold-1.ttf</option><option value="Svn-bear.ttf" style="font-family: 'Svn-bear'">Svn-bear.ttf</option><option value="Svn-bira.ttf" style="font-family: 'Svn-bira'">Svn-bira.ttf</option><option value="Svn-franko.ttf" style="font-family: 'Svn-franko'">Svn-franko.ttf</option><option value="Svn-internation.ttf" style="font-family: 'Svn-internation'">Svn-internation.ttf</option><option value="Svn-trebuchets.ttf" style="font-family: 'Svn-trebuchets'">Svn-trebuchets.ttf</option><option value="Unifrakturmaguntia16.ttf" style="font-family: 'Unifrakturmaguntia16'">Unifrakturmaguntia16.ttf</option><option value="Viking-hell.ttf" style="font-family: 'Viking-hell'">Viking-hell.ttf</option><option value="Vogue.ttf" style="font-family: 'Vogue'">Vogue.ttf</option>				</select>
				<a class="thumbimgselect2" style="width:100%;" href="#" onclick="pplrpopupimage2(this,event);event.preventDefault();"></a>
				</div>



				</div>
				<span class="input-group-btn" style="width:50px;float:right;">
              <button class="btn btn-danger btn-remove" type="button">
                <span class="glyphicon glyphicon-minus">
                </span>
              </button>
				</span>
				</div>
				
				
				
				</div>
				<input type="hidden" name="store" value="1sttheworld.myshopify.com" />
				<button class="btn btn-success btn-add" type="button">
				<span class="glyphicon glyphicon-plus"></span> Add Font
				</button>
				<input  type="submit" name="namelist" class="btn btn-success" value="Create" />

				</form>
				
				<br/>
				<form style="margin-left: 15px;margin-top: 20px;" enctype="multipart/form-data" action="" method="post" role="form" id="crd2">
				<div class="form-group" style="width: 100%;">
				<label style="padding: 10px 0px">Upload font (extension: .ttf) <a style="color: yellowgreen;" target="_blank" href="http://productpersonalizer.com/internet-explorer-font-issue">
				Internet Explorer Font Issue</a></label>	<br/>
				<input style="padding: 10px 0px;" required name="cstmfy_upload[]"  type="file" multiple="">
				</div>
				<input type="hidden" name="store" value="1sttheworld.myshopify.com" />
				<br/>
				<input type="submit" name="upload" class="btn btn-success" value="Upload Font" />
				

				</form>
      </div>
      <div class="modal-footer">
  
      </div>
    </div>

  </div>
</div>




<!-- Modal -->
<div id="myModal6" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Upload Font</h4>
      </div>
      <div class="modal-body">

				<form enctype="multipart/form-data" action="" method="post" role="form" id="crd3">
				<div class="form-group" style="width: 100%;">
				<label style="padding: 10px 0px;">Upload font (extension: .ttf)  <a style="color: yellowgreen;" target="_blank" href="http://productpersonalizer.com/internet-explorer-font-issue">
				Internet Explorer Font Issue</a></label>	<br/>
				<input required name="cstmfy_upload[]" type="file" multiple="">
				</div>

				<input type="hidden" name="store" value="1sttheworld.myshopify.com" />
				<br/>
				<input type="submit" name="upload" class="btn btn-success" value="Upload Font" />

				</form>

      </div>
      <div class="modal-footer">
  
      </div>
    </div>

  </div>
</div>


<!-- Modal -->
<div id="myModal10" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Upload image (extension: .png/.jpg)</h4>
      </div>
      <div class="modal-body" style="float: left;width: 100%;">

		      <form enctype="multipart/form-data" action="" method="post" role="form" id="crd4" class="" style="float: left; width: 100%; padding-bottom: 30px;" >
        <div class="form-group" style="width: 100%;">

          <input required name="cstmfy_upload[]" accept="image/*" type="file" multiple="">
        </div>
        <input type="hidden" name="store" value="1sttheworld.myshopify.com" />
        <input type="submit" name="upload" class="btn btn-success" value="Upload Image" />
        <div class="wwarnin"></div>
      </form>
      <h3 class="bg-warning" style="padding: 10px;text-align: center;float: left;">For Better Customer Experience on mobile use less(Preferable less than 1000x1000) resolution image </h3>
      </div>
      <div class="modal-footer">
  
      </div>
    </div>

  </div>
</div>



<!-- Modal -->
<div id="myModal11" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Upload image (extension: .png/.jpg)</h4>
      </div>
      <div class="modal-body" style="float: left;width: 100%;">

		      <form enctype="multipart/form-data" action="" method="post" role="form" id="crd5" class="" style="float: left; width: 100%; padding-bottom: 30px;" >
        <div class="form-group" style="width: 100%;">

          <input required name="cstmfy_upload[]" accept="image/*" type="file" multiple="">
        </div>
        <input type="hidden" name="store" value="1sttheworld.myshopify.com" />
        <input type="submit" name="upload" class="btn btn-success" value="Upload Image" />
        <div class="wwarnin"></div>
      </form>
            <h3 class="bg-warning" style="padding: 10px;text-align: center;float: left;">For Better Customer Experience on mobile use less(Preferable less than 1000x1000) resolution image </h3>
      </div>
      <div class="modal-footer">
  
      </div>
    </div>

  </div>
</div>

<div id="myModal20" class="modal fade" role="dialog" >
  <div class="modal-dialog" style="width:  100%;z-index: 99999;max-width:700px;">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">×</button>
        <h4 class="modal-title">Create Group Image</h4>
      </div>
      <div class="modal-body" style="width: 100%;float: left;">

		    <form action="" method="post" role="form" class="blockc" style=" ;" id="creategroup5">

			<div class="blockc-content">
				  <div class="form-group">
					<input style="display: inherit;margin-top: 10px;" title="At lease one Alpha character, Only Alpha-numeric is allowed" pattern="^[0-9A-Za-z]*[A-Za-z ]+[0-9A-Za-z]*$" name="gname" required="" placeholder="Title" class="form-control crimgn">		
				  </div>	
				  <div id="creategroupfont" style="display: inline-block;width: 100%;">

					<div class="color ui-sortable" style="float: left;">
					  <div class="form-group colorlist creategroup ui-sortable-handle" style="">
						<span class="ui-icon ui-icon-arrowthick-2-n-s">
						</span>
						<div style="width:100px;float:left;" class="input-group">
						  <input type="text" required="" value="" placeholder="Image label" class="form-control crimgnl" name="fname[]" style="float: left;width:100px;">
						</div>
						<div class="input-group" style="float: left;"><span >Image 
						  </span></div>
						<div style="float:left;position:relative;" class="selectimage input-group">
						  <div>
						   <select name="cstmfy_image[]" class="form-control2 imageupload imagesub" style="width: 110px;">
							</select>
						  <a class="thumbimgselect" href="" style="left: 0px;border:none;width:100%;height:35px;" onclick="pplrpopupimage(this,event)"></a>
						</div>
						</div>

						<div style="float:left;display:none;" class="input-group">
						  <span>Thumbnail type   
						  </span> 
						  <select class="form-control2" name="ftype[]" style="width: 100px;float: left;" onchange="display_type(this)">
							<option value="1">Full Image
							</option>
							<option value="2">Cropped Image
							</option>
							<option value="3">Flat Color
							</option>

							<option value="4">Custom Image
							</option>
						  </select>
						  <div style="float:left;display: none;" class="input-group thumbcrop">
							<button class="btn btn-info" onclick="pplrpopupshow(this,event)">Crop
							</button>
							<input name="cstmfy_crop[]" type="hidden" value="" class="form-control">
						  </div>

					  <div style="width:100px;float:left;position:relative;display: none;" class="selectimage thumbimage">
							<select name="fthumb[]" class="form-control2 font2 flist2" style="max-width: 100%;">
							  </select>
							<a class="thumbimgselect" style="width:100%;border:none;height: 35px;" href="#" onclick="pplrpopupimage(this,event);event.preventDefault();">
							</a>

						  </div>
						  <div style="float:left;display: none;" class="input-group demo2 thumbcolor colorpicker-element">
							<input name="cstmfy_thcolor[]" style="max-width: 70px" type="text" value="" placeholder="#ffffff" class="form-control">
							<span class="input-group-addon">
							  <i>
							  </i>
							</span>
						  </div>	
						</div>
						<div style="float:left;display: none;" class="input-group demo2 colorpicker-element">
						  <input name="cstmfy_tcolor[]" type="text" value="" placeholder="#ffffff" class="form-control">
						  <span class="input-group-addon">
							<i>
							</i>
						  </span>
						</div>	

					  <div style="float:left;" class="input-group">
								<span>Tag 
						  </span> 
						  <input name="cstmfy_tag[]" style="max-width: 80px" type="text" value="" placeholder="tag" class="form-control">
						</div>


						<div style="float:left;" class="input-group">
						  <span >Price add  
						  </span>  <input name="cstmfy_pchange[]" step="0.1" style="max-width: 70px" type="number" value="0" class="form-control">
						</div>		
						<span class="input-group-btn" style="float: left;">
						  <button class="btn btn-remove btn-danger" type="button">
							<span class="glyphicon glyphicon-minus">
							</span>
						  </button>
						</span>
					  </div>
					</div>
				  </div>
				  <input type="hidden" name="store" value="1sttheworld.myshopify.com">
				  <div class="form-group">
					<button class="btn btn-success btn-add editclass" style="float:left;" type="button">
					  <span class="glyphicon glyphicon-plus">
					  </span> Add Image
					</button>
				  </div>
				  <div style="width:100%;padding-bottom:20px;">
					<input type="submit" name="namelist" class="btn btn-success" value="Create">
					<p style="color:red;text-align:left;padding-top: 20px">
					</p>
				  </div>
				  
				  <h4 class="bg-warning" style="padding: 10px;text-align: center;float: left;width: 100%;">*Use same image size( width and height in px) for same image group.<br>For Better Customer Experience on mobile use less(Preferable less than 1000x1000) resolution image </h4>
				</form>
			<form enctype="multipart/form-data" action="" method="post" role="form" id="crd5" class="" style="float: left; width: 100%; padding: 30px 0px;">
				<div class="form-group" style="width: 100%;">

				  <input required="" name="cstmfy_upload[]" accept="image/*" type="file" multiple="">
				</div>
				<input type="hidden" name="store" value="1sttheworld.myshopify.com">
				<input type="submit" name="upload" class="btn btn-success" value="Upload Image">
				<div class="wwarnin"></div>
			</form>	
				
      </div>

    </div>
      <div class="modal-footer" style="border: none;">
  
      </div>
  </div>
</div>
</div>


<!-- Modal -->
<div id="myModal3" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Create Options</h4>
      </div>
      <div class="modal-body" style="float: left;margin: 20px;">
       	<form action="ajaxdropdown.php" method="post" role="form" class="" id="creategroupd" >
	<div class="form-group" style="width: 100%;float: left;">
	<input required name="dname" pattern="^[0-9A-Za-z]*[A-Za-z ]+[0-9A-Za-z]*$" placeholder="Label" class="form-control dropname">		
	</div>	
	<div class="pdrop" style="width: 100%;float: left;">
	<div class="form-group droplist creategroup">
		<span class="ui-icon ui-icon-arrowthick-2-n-s"></span>
		<input type="text" required value="Option Name" placeholder="Option Name" class="form-control droplistval" name="dlist[]" />
		<div class="input-group " style="width:100px;text-align: right;">Price increase
		</div>
		<div class="input-group " style="width:150px;">
			   <input type="number" step="0.01"   value="0" class="form-control droplistprice" name="dplist[]" />
			   <input type="hidden"   value="1" class="form-control " name="itype[]" />
									<span class="input-group-btn">
					<button class="btn btn-success btn-add" type="button">
						<span class="glyphicon glyphicon-plus"></span>
					</button>
				</span>
			 </div>	
	</div>
	</div>
	
	<div class="form-group  input-text">
	<input type="hidden" name="store" value="1sttheworld.myshopify.com" />
	<input type="submit" name="colorlist" class="btn btn-success" value="Create" />
	</div>

	</form>
      </div>
      <div class="modal-footer">
  
      </div>
    </div>

  </div>
</div>
<script>
	$('#cfo').multipleSelect();
</script>
<script>
		
</script>
<style type="text/css">
	.ms-drop ul > li {
    text-align: left;
}

</style>
<script>
$("#creategroupf").show();
var p_products ={"id":3691134976080,"title":"New Zealand Wooden Wall Clock Custom Bn10","handle":"new-zealand-wooden-wall-clock-custom","variants":[{"id":28869154701392,"product_id":3691134976080,"title":"Wooden Wall Clock \/ One Size \/ White","price":"149.99","sku":"","position":1,"inventory_policy":"deny","compare_at_price":"214.00","fulfillment_service":"manual","inventory_management":null,"option1":"Wooden Wall Clock","option2":"One Size","option3":"White","created_at":"2019-07-31T11:09:29+07:00","updated_at":"2019-08-18T16:08:47+07:00","taxable":true,"barcode":null,"grams":0,"image_id":11559169785936,"weight":0,"weight_unit":"kg","inventory_item_id":29822392270928,"inventory_quantity":0,"old_inventory_quantity":0,"tax_code":"","requires_shipping":true,"admin_graphql_api_id":"gid:\/\/shopify\/ProductVariant\/28869154701392"}],"images":[{"id":11559169785936,"product_id":3691134976080,"position":1,"created_at":"2019-07-31T11:09:57+07:00","updated_at":"2019-12-10T22:54:16+07:00","alt":null,"width":2000,"height":2000,"src":"https:\/\/cdn.shopify.com\/s\/files\/1\/2074\/1905\/products\/nz_3_de91531b-e0b3-4b8c-81d7-c88901522f77.jpg?v=1575993256","variant_ids":[28869154701392],"admin_graphql_api_id":"gid:\/\/shopify\/ProductImage\/11559169785936"},{"id":11559170342992,"product_id":3691134976080,"position":2,"created_at":"2019-07-31T11:10:16+07:00","updated_at":"2019-12-10T22:54:16+07:00","alt":null,"width":2000,"height":2000,"src":"https:\/\/cdn.shopify.com\/s\/files\/1\/2074\/1905\/products\/1213_fcc39099-cc6f-4c06-bfe3-eccdc7c29291.jpg?v=1575993256","variant_ids":[],"admin_graphql_api_id":"gid:\/\/shopify\/ProductImage\/11559170342992"},{"id":11559169622096,"product_id":3691134976080,"position":3,"created_at":"2019-07-31T11:09:50+07:00","updated_at":"2019-12-10T22:54:16+07:00","alt":null,"width":2848,"height":2848,"src":"https:\/\/cdn.shopify.com\/s\/files\/1\/2074\/1905\/products\/Nz_1_6ac36429-55be-4021-9f84-5f98db397d25.jpg?v=1575993256","variant_ids":[],"admin_graphql_api_id":"gid:\/\/shopify\/ProductImage\/11559169622096"},{"id":11559169720400,"product_id":3691134976080,"position":4,"created_at":"2019-07-31T11:09:55+07:00","updated_at":"2019-12-10T22:54:16+07:00","alt":null,"width":2848,"height":2848,"src":"https:\/\/cdn.shopify.com\/s\/files\/1\/2074\/1905\/products\/nz_2_f7d6eba3-005f-4373-8330-dfc96fc853ed.jpg?v=1575993256","variant_ids":[],"admin_graphql_api_id":"gid:\/\/shopify\/ProductImage\/11559169720400"},{"id":11559169982544,"product_id":3691134976080,"position":5,"created_at":"2019-07-31T11:10:05+07:00","updated_at":"2019-12-10T22:54:16+07:00","alt":null,"width":4000,"height":4000,"src":"https:\/\/cdn.shopify.com\/s\/files\/1\/2074\/1905\/products\/nz_4_f3b22cbc-632c-4e39-ac2c-653aa2545379.jpg?v=1575993256","variant_ids":[],"admin_graphql_api_id":"gid:\/\/shopify\/ProductImage\/11559169982544"},{"id":11559170211920,"product_id":3691134976080,"position":6,"created_at":"2019-07-31T11:10:12+07:00","updated_at":"2019-12-10T22:54:16+07:00","alt":null,"width":4000,"height":4000,"src":"https:\/\/cdn.shopify.com\/s\/files\/1\/2074\/1905\/products\/nz_5.jpg?v=1575993256","variant_ids":[],"admin_graphql_api_id":"gid:\/\/shopify\/ProductImage\/11559170211920"},{"id":11559170670672,"product_id":3691134976080,"position":7,"created_at":"2019-07-31T11:10:20+07:00","updated_at":"2019-12-10T22:54:16+07:00","alt":null,"width":2000,"height":2000,"src":"https:\/\/cdn.shopify.com\/s\/files\/1\/2074\/1905\/products\/fghg_7e21665e-16f1-4a80-8917-b1aa1131d11a.jpg?v=1575993256","variant_ids":[],"admin_graphql_api_id":"gid:\/\/shopify\/ProductImage\/11559170670672"}]};
var fontfamilies =["OpenSans-Bold","OpenSans-Bold","OpenSans-Bold"];
var Shopify_shop ='1sttheworld.myshopify.com';

</script>

<script>
	var link = "<link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/cropper/2.3.4/cropper.min.css'>";
jQuery("head").append(link);

var wf = document.createElement("script");
wf.src = ("https:" == document.location.protocol ? "https" : "http") +
  "://cdnjs.cloudflare.com/ajax/libs/cropper/2.3.4/cropper.min.js";
wf.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(wf);

var PIXEL_RATIO = (function() {
	var el = document.createElement('canvas');
	var ctx = el.getContext('2d');
	var dpr = window.devicePixelRatio || 1,
		bsr = ctx.webkitBackingStorePixelRatio ||
		ctx.mozBackingStorePixelRatio ||
		ctx.msBackingStorePixelRatio ||
		ctx.oBackingStorePixelRatio ||
		ctx.backingStorePixelRatio || 1;
	return dpr / bsr;
})();

	
var blendc=['source-over','lighter','multiply','screen','overlay','darken','lighten'];
function dragStart(e,tis) {
	$(tis).addClass('dragged');
}
function dragEnd(e,tis) {
	$(tis).removeClass('dragged');
}


function isRTL(s){           
    var ltrChars    = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF'+'\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
        rtlChars    = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
        rtlDirCheck = new RegExp('^[^'+ltrChars+']*['+rtlChars+']');

    return rtlDirCheck.test(s);
};

function selectimg(tis) {
    if ($(tis).is(':checked')) {
	    $('.selectimage').hide();
		  $('canvas').show();
		  $('.clone').css("background","#eee");
		  $('.loadfirst').hide();
		  $('.loadfirst input').prop( "checked", true );
    } else {

        $('.selectimage').show();
		$('.loadfirst').show();
    }
}



function pac(tis,t) {
    if ($(tis).val() == 1) {
        $(tis).parent().siblings('.arc').hide();
		$(tis).parent().siblings('.angle').children('input').val('0');
		if(!t){
		$(tis).parent().siblings('.angle').children('input').trigger('change');
		}
		angle2(tis);
        $(tis).parent().siblings('.angle').hide();
    }
    if ($(tis).val() == 2) {
        $(tis).parent().siblings('.arc').hide();
        $(tis).parent().siblings('.angle').show();
    }
    if ($(tis).val() == 3) {
        $(tis).parent().siblings('.arc').show();
        $(tis).parent().siblings('.angle').show();
        $(tis).parent().siblings('.angle').children('input');
		if(!t){
		$(tis).parent().siblings('.angle').children('input').trigger('change');
		}
		angle2(tis);
    }
}

function capitalizeFirstLetter(string) {

	var lines = string.split('. ');

	for (var ii = 0; ii < lines.length; ii++) {
		lines[ii]= lines[ii].charAt(0).toUpperCase() + lines[ii].slice(1);

	}
    return lines.join('. ');
}


$("select[name='cstmfy_type[]']").each(function() {
	if ($(this).val() == 1) {
		$(this).parent().siblings('.arc').hide();
		$(this).parent().siblings('.angle').hide();
		$(this).parent().siblings('.angle').children('input').val('0');
	}
	if ($(this).val() == 2) {
		$(this).parent().siblings('.arc').hide();
		$(this).parent().siblings('.angle').show();
	}
	if ($(this).val() == 3) {
		$(this).parent().siblings('.arc').show();
		$(this).parent().siblings('.angle').show();
		$(this).parent().siblings('.angle').children('input');
	}
});	



function selecttype(tis,k) {
$(tis).parents('.tab-pane').find('.prev-item,.selectimage').show();
if (parseInt($(tis).val()) < 7) {
	$(tis).parents('.tab-pane').find('.prev-item').show();

	$('.area:eq(' + $(tis).parents('.tab-pane').index() + ')').show().siblings('.area').hide();

}
else{
	$('.area').hide();
	$(tis).parents('.tab-pane').find('.prev-item').hide();
}

console.log($(tis).val());
	pac(tis,true);

	$(tis).parents('.tab-pane').find('.price_add').show();
	$(tis).parents('.tab-pane').find('.no_text').hide();
	$(tis).parents('.tab-pane').find('.cseffect,.cseffectw').hide();

    if ($(tis).val() == 1) {
		$(tis).parents('.tab-pane').find('.input-monogram').hide();
		$(tis).parents('.tab-pane').find('.input-text').show();
		$(tis).parents('.tab-pane').find('.group-image').hide();
		$(tis).parents('.tab-pane').find('.input-textarea').hide();
		$(tis).parents('.tab-pane').find('.input-drop').hide();
		$(tis).parents('.tab-pane').find('.field-check').hide();
		$(tis).parents('.tab-pane').find('.field-color').hide();
		$(tis).parents('.tab-pane').find('.dcolor').show();
		$(tis).parents('.tab-pane').find('.no_text,.cstmfy_style').show();

		$(tis).parents('.tab-pane').find('.cseffect,.cseffectw').hide();
		var v = $(tis).parents('.tab-pane').find('.cstmfy_style select');

		if($(v).val()>1){
			$(tis).parents('.tab-pane').find('.cstmfy_cfont').val(1);
			$(tis).parents('.tab-pane').find('.cstmfy_cfonts').hide().siblings('.fontname').hide();
			$(tis).parents('.tab-pane').find('.halign').hide();

		}
		var s = $(tis).parents('.tab-pane').find('.seffect');
		if (s.val() == 3) {
			$(tis).parents('.tab-pane').find('.cseffect,.cseffectw').show();
		}
		if ($(tis).val() == 4) {
		   s.parents('.tab-pane').find('.cseffectw').show();
		}
		
    }
    if ($(tis).val() == 2) {
		$(tis).parents('.tab-pane').find('.input-monogram').hide();
		$(tis).parents('.tab-pane').find('.input-text').show();
		$(tis).parents('.tab-pane').find('.group-image').hide();
		$(tis).parents('.tab-pane').find('.input-textarea').show();
		$(tis).parents('.tab-pane').find('.input-drop').hide();
		$(tis).parents('.tab-pane').find('.field-check').hide();
		$(tis).parents('.tab-pane').find('.field-color').hide();
		$(tis).parents('.tab-pane').find('.dcolor').show();
		$(tis).parents('.tab-pane').find('.no_text').show();
		$(tis).parents('.tab-pane').find('.cseffect,.cseffectw,.cstmfy_style').hide();
			var s = $(tis).parents('.tab-pane').find('.seffect');
			if (s.val() == 3) {
				$(tis).parents('.tab-pane').find('.cseffect,.cseffectw').show();
			}
			if ($(tis).val() == 4) {
			   s.parents('.tab-pane').find('.cseffectw').show();
			}
		}
    if ($(tis).val() == 3) {
		$(tis).parents('.tab-pane').find('.input-monogram').hide();
        $(tis).parents('.tab-pane').find('.input-text').hide();
		$(tis).parents('.tab-pane').find('.input-textarea').hide();
		$(tis).parents('.tab-pane').find('.group-image').show();
		$(tis).parents('.tab-pane').find('.arc').hide();
		$(tis).parents('.tab-pane').find('.fontname').hide();
		$(tis).parents('.tab-pane').find('.colorname').hide();
		$(tis).parents('.tab-pane').find('.angle').show();
		$(tis).parents('.tab-pane').find('.input-drop').hide();
		$(tis).parents('.tab-pane').find('.field-check').hide();
		$(tis).parents('.tab-pane').find('.field-color').hide();
		$(tis).parents('.tab-pane').find('.dcolor').hide();
		$(tis).parents('.tab-pane').find('.input-pac').show();
		$(tis).parents('.tab-pane').find('.halign select[name="cstmfy_align[]"]').val('center');

		if($(tis).find("option:selected").text()=='Image Upload')
		{
			$(tis).parents('.tab-pane').find('.min_upload').show();
			$(tis).parents('.tab-pane').find('.cstmfy_aspect').show();
			$(tis).parents('.tab-pane').find('.image-select').hide();
			$(tis).parents('.tab-pane').find('.image-select select').find("option[value='1']").prop("disabled", false);
			$(tis).parents('.tab-pane').find('.image-select select').val('1');
		}
		else{
			$(tis).parents('.tab-pane').find('.min_upload').hide();
			$(tis).parents('.tab-pane').find('.cstmfy_aspect').hide();
			$(tis).parents('.tab-pane').find('.image-select').show();
			$(tis).parents('.tab-pane').find('.image-select select').find("option[value='1']").prop("disabled", true);
		}



    }

    if ($(tis).val() == 4) {
       	$(tis).parents('.tab-pane').find('.input-monogram').hide();
        $(tis).parents('.tab-pane').find('.input-text').hide();
		$(tis).parents('.tab-pane').find('.input-textarea').hide();
		$(tis).parents('.tab-pane').find('.group-image').show();
		$(tis).parents('.tab-pane').find('.arc').hide();
		$(tis).parents('.tab-pane').find('.fontname').hide();
		$(tis).parents('.tab-pane').find('.colorname').show();
		$(tis).parents('.tab-pane').find('.angle').hide();
		$(tis).parents('.tab-pane').find('.input-drop').hide();
		$(tis).parents('.tab-pane').find('.field-color').show();
		$(tis).parents('.tab-pane').find('.no-color').hide();
		$(tis).parents('.tab-pane').find('.field-check').hide();
		$(tis).parents('.tab-pane').find('.dcolor').show();
		$(tis).parents('.tab-pane').find('.halign').hide();
		$(tis).parents('.tab-pane').find('.halign select[name="cstmfy_align[]"]').val('center');
		$(tis).parents('.tab-pane').find('.maxfsu').hide();
		$(tis).parents('.tab-pane').find('.cstmfy_aspect').hide();
		$(tis).parents('.tab-pane').find('prev-item.halign select').val('left');
		$(tis).parents('.tab-pane').find('.image-select select').find("option[value='1']").prop("disabled", false);
    }

    if ($(tis).val() == 7 ) {
		$(tis).parents('.tab-pane').find('.input-monogram').hide();
        $(tis).parents('.tab-pane').find('.input-text').hide();
		$(tis).parents('.tab-pane').find('.input-textarea').hide();
		$(tis).parents('.tab-pane').find('.group-image').hide();
		$(tis).parents('.tab-pane').find('.arc').hide();
		$(tis).parents('.tab-pane').find('.fontname').hide();
		$(tis).parents('.tab-pane').find('.colorname').hide();
		$(tis).parents('.tab-pane').find('.angle').hide();
		$(tis).parents('.tab-pane').find('.input-drop').show();
		$(tis).parents('.tab-pane').find('.input-pac').hide();
		$(tis).parents('.tab-pane').find('.field-color').hide();
		$(tis).parents('.tab-pane').find('.price_add').hide();
		$(tis).parents('.tab-pane').find('.pplrprice').hide();
		$(tis).parents('.tab-pane').find('.field-check').hide();
		$(tis).parents('.tab-pane').find('.dcolor').hide();
		$(tis).parents('.tab-pane').find('.creq').hide();
		
		if($(tis).parents('.tab-pane').find('.cstmfy_otype').val() == 1)
		{
			$(tis).parents('.tab-pane').find('.d_d').show();
		}
		else{
			$(tis).parents('.tab-pane').find('.d_d').hide();
		}
		
    }

    if ($(tis).val() == 8) {
		$(tis).parents('.tab-pane').find('.input-monogram').hide();
        $(tis).parents('.tab-pane').find('.input-text').hide();
		$(tis).parents('.tab-pane').find('.input-textarea').hide();
		$(tis).parents('.tab-pane').find('.group-image').hide();
		$(tis).parents('.tab-pane').find('.arc').hide();
		$(tis).parents('.tab-pane').find('.fontname').hide();
		$(tis).parents('.tab-pane').find('.colorname').hide();
		$(tis).parents('.tab-pane').find('.angle').hide();
		$(tis).parents('.tab-pane').find('.input-drop').hide();
		$(tis).parents('.tab-pane').find('.input-pac').hide();
		$(tis).parents('.tab-pane').find('.field-color').hide();
		$(tis).parents('.tab-pane').find('.field-check').show();
		$(tis).parents('.tab-pane').find('.dcolor').hide();
		$(tis).parents('.tab-pane').find('.creq').hide();


    }
if(!k){
updatecondition();
}

	
}

function input_type(){

   		selecttype($("select[name='cstmfy_input_type[]']:eq(0)")[0],true);
	
}

input_type();

if ($("select[name='cstmfy_input_type[]']:eq(0)").val() < 7) {
	$('.area:first').show().siblings('.area').hide();

}
else{
	$('.area').hide();
}

function rev(tis) {
    var arc = -$(tis).siblings('input').val();
    $(tis).siblings('input').val(arc).trigger('change'); 

}

function updatecanvas(){

	var frame= $('.clone.active').index();
	if(frame>-1 ){
			if($(this).hasClass('pos')){

				ChangeCanvas(frame);
				console.log('canvas changed');
				 $(".crop-modal2").remove();

			}
			else{
				clearTimeout(checktimout);
				checktimout = setTimeout(function() {
				ChangeCanvas(frame);
				console.log('canvas changed');
				 $(".crop-modal2").remove();

			    }, 300);

			}


		}
}

function selectfont(tis) {
   if ($(tis).val() == 1) {
		$(tis).parents('.tab-pane').find('.fontname').hide();
	//	$(tis).parents('.tab-pane').find('.nogroup').show();
   } else {
		$(tis).parents('.tab-pane').find('.fontname').show();
		//$(tis).parents('.tab-pane').find('select.font option').hide();
		//$(tis).parents('.tab-pane').find('.'+$(tis).val()).show();
		//var pppval= $('.'+$(tis).val()).first().attr('value');
		//$(tis).parents('.tab-pane').find('select.font').val(pppval).trigger('change');
   }
}

function selectcolor(tis) {
    if ($(tis).val() == 1) {
		$(tis).parents('.tab-pane').find('.colorname').hide();
    } else {

	$(tis).parents('.tab-pane').find('.colorname').show();
    }
}
var newcreate = false;


function rotate(degree) {
    // For webkit browsers: e.g. Chrome
    $elie.css({
        WebkitTransform: 'rotate(' + degree + 'deg)'
    });
    // For Mozilla browser: e.g. Firefox
    $elie.css({
        '-moz-transform': 'rotate(' + degree + 'deg)'
    });
}
var recheck;
var checktimout ;
function dragresige(t) {
	console.time("concatenation1");
    $('.area:eq(' + $('.tab-pane.active').index() + ')').each(function() {

    	var eqn = $('.tab-pane.active').index();
    	if(!$(this).hasClass('ui-draggable')){
			console.log('dragger activated');
        var cstmfy_posy = $("input[name='cstmfy_posy[]']:eq(" + eqn + ")");
        var cstmfy_posx = $("input[name='cstmfy_posx[]']:eq(" + eqn + ")");
        var cstmfy_width = $("input[name='cstmfy_width[]']:eq(" + eqn + ")");
		var cstmfy_height = $("input[name='cstmfy_height[]']:eq(" + eqn + ")");
		var cstmfy_angle = $("input[name='cstmfy_angle[]']:eq(" + eqn + ")");
		var cstmfy_input_type = $("select[name='cstmfy_input_type[]']:eq(" + eqn + ")").val();
		var cstmfy_line_height = $("input[name='cstmfy_line_height[]']:eq(" + eqn + ")");

        var cstmfy_radius = $("input[name='cstmfy_radius[]']:eq(" + eqn + ")").val();
        var cstmfy_default = $("textarea[name='cstmfy_default[]']:eq(" + eqn + ")").val();

        var top = (cstmfy_posy.val() / 100) * $('#ming').height();
        $(this).css("top", top);

        var left = (cstmfy_posx.val() / 100 - cstmfy_width.val() / 200) * $('#ming').width();
        $(this).css("left", left);

        var width = cstmfy_width .val();
        $(this).css("width", width + '%');
		
		var height = cstmfy_height.val();
		$(this).css("height", height + '%');
		
		
		simulateTouchEvents(".pplr-area", true);
		
		var ct = "parent";
		var typec = $("select[name='cstmfy_type[]']:eq(" + eqn + ")").val();
		if(typec>1){
			ct = false;
		}
		
		
        var widthpx = $(this).width();

        //$(this).append(getCircularText(cstmfy_default, cstmfy_radius, 0,widthpx, "center", false,true, "sans-serif", "18pt", 1));

		var recoupLeft, recoupTop;

        $(this).draggable({
			start: function (event, ui) {
				var left = parseInt($(this).css('left'),10);
				left = isNaN(left) ? 0 : left;
				var top = parseInt($(this).css('top'),10);
				top = isNaN(top) ? 0 : top;
				recoupLeft = left - ui.position.left;
				recoupTop = top - ui.position.top;
			},
			drag: function (event, ui) {
				ui.position.left += recoupLeft;
				ui.position.top += recoupTop;
				var pos_x = (((ui.position.left + $(this).width() / 2) / $('#ming').width()) * 100).toFixed(2);
				var pos_y = ((ui.position.top / $('#ming').height()) * 100).toFixed(2);
				var width = ((($(this).width()) / $('#ming').width()) * 100).toFixed(2);
				var height = (($(this).height() / $('#ming').height()) * 100).toFixed(2);
				cstmfy_posx.val(pos_x);
				cstmfy_posy.val(pos_y);
				cstmfy_width.val(width);
				if(cstmfy_input_type == 3 || cstmfy_input_type == 4){
				clearTimeout(checktimout);
				checktimout = setTimeout(function() {
					cstmfy_height.val(height);
					cstmfy_height.trigger('change');
				 },100);
				}
				else{
					cstmfy_height.val(height);
					cstmfy_height.trigger('change');
				}
				
				
			},
            containment: ct

        });

        $(this).on("dragstop", function(event, ui) {
            var pos_x = (((ui.position.left + $(this).width() / 2) / $('#ming').width()) * 100).toFixed(2);
            var pos_y = (((ui.position.top) / $('#ming').height()) * 100).toFixed(2);
            var width = ((($(this).width()) / $('#ming').width()) * 100).toFixed(2);
			var height = ((($(this).height()) / $('#ming').height()) * 100).toFixed(2);
            cstmfy_posx.val(pos_x);
            cstmfy_posy.val(pos_y);
            cstmfy_width.val(width);
			if(cstmfy_input_type == 3 || cstmfy_input_type == 4){
				clearTimeout(checktimout);
				checktimout = setTimeout(function() {
					cstmfy_height.val(height);
					cstmfy_height.trigger('change');
				 },100);
				}
				else{
					cstmfy_height.val(height);
					cstmfy_height.trigger('change');
				}
        });
		
		var handle= 'e, w ,n,s';

        $(this).resizable({
            resize: function(event, ui) {
                var pos_x = (((ui.position.left + $(this).width() / 2) / $('#ming').width()) * 100).toFixed(2);
                var pos_y = (((ui.position.top )/ $('#ming').height()) * 100).toFixed(2);
                var width = ((($(this).width()) / $('#ming').width()) * 100).toFixed(2);
				var height = ((($(this).height()) / $('#ming').height()) * 100).toFixed(2);
                cstmfy_posx.val(pos_x);
                cstmfy_posy.val(pos_y);
                cstmfy_width.val(width);
				if(cstmfy_input_type == 3 || cstmfy_input_type == 4){
				clearTimeout(checktimout);
				checktimout = setTimeout(function() {
					cstmfy_height.val(height);
					cstmfy_height.trigger('change');
				 },100);
				}
				else{
					cstmfy_height.val(height);
					cstmfy_height.trigger('change');
				}

            },
            handles: handle,
            containment: ct
        });
		
		
        $(this).rotatable({
			wheelRotate: false,
		    angle:-cstmfy_angle.val()*Math.PI/180,
            start: function(event, ui) {
	            if($("select[name='cstmfy_type[]']:eq(" + ($(this).index()-1) + ")").val()<2){
	            	$("select[name='cstmfy_type[]']:eq(" + ($(this).index()-1) + ")").val((2));
					cstmfy_height.trigger('change');
					$(this).resizable({
					  containment: false
					});
					$(this).draggable({
					  containment: false
					});
	            }
            },
            // Callback fired during rotation.
            rotate: function(event, ui) {
				var pos_x = (((parseInt($(this).css("left")) + $(this).width() / 2) / $('#ming').width()) * 100).toFixed(2);
                var pos_y = ((parseInt($(this).css("top")) / $('#ming').height()) * 100).toFixed(2);
                var width = ((($(this).width()) / $('#ming').width()) * 100).toFixed(2);
				var height = (($(this).height() / $('#ming').height()) * 100).toFixed(2);
				var degrees = ui.angle.current * 180/Math.PI;
				var newdegrees = degrees;
				if ( degrees < 0 ) {
					newdegrees = -degrees;
				}
				if ( degrees > 0 ) {
					newdegrees= 360-degrees;
				}
				if($("select[name='cstmfy_type[]']:eq(" + ($(this).index()-1) + ")").val()<2){
					$("select[name='cstmfy_type[]']:eq(" + eqn + ")").val(2).trigger('change');
				}
                cstmfy_posx.val(pos_x);
                cstmfy_posy.val(pos_y);
                cstmfy_width.val(width);
				cstmfy_height.val(height);
				cstmfy_angle.val(newdegrees.toFixed(2));
				cstmfy_height.trigger('change');
				
			
            },
            // Callback fired on rotation end.
            stop: function(event, ui) {	
            },
            // Set the rotation center at (25%, 75%).
            rotationCenterX: 0, 
            rotationCenterY: 103
		});	
    }
		
        eqn = eqn + 1;

    });
	
	var n = $('.tab-pane.active').index();
angle(n+1);
	console.timeEnd("concatenation1");
}

function showfieldpreview(tis){
		var options = $('#cfo').val();
		for (var i=0, iLen=options.length; i<iLen; i++) {
			$("#tab"+options[i]+" .eyeview").removeClass('fa-eye-slash').addClass('fa-eye');
		}
	updatecanvas()
}

function hidefieldpreview(tis){
		var options = $('#cfo').val();
		for (var i=0, iLen=options.length; i<iLen; i++) {
			
			$("#tab"+options[i]+" .eyeview").removeClass('fa-eye').addClass('fa-eye-slash');

		}
	updatecanvas()
}


function updatearea(tis,e) {
	e.preventDefault();

	$('.fieldtab.active').removeClass("active");
	$(tis).addClass('active');
	$('.tab-pane.active').removeClass("active")
	$('.clone:eq(' + $(tis).index() + ')').removeClass('fade').addClass('active');

		var varifycanvas = $("select[name='cstmfy_each_url[]']:eq(" +  $(tis).index() + ")").val();
		selecttype($("select[name='cstmfy_input_type[]']:eq(" +  $(tis).index() + ")"),true);
		
		if($("#ming").attr("src")!==varifycanvas)
		{

			pplronload();
			$("#ming").attr("src", varifycanvas);

			var imgObj2 = new Image();
			imgObj2.onload = function() {
					var frame = $(tis).index();
					if($(".pplr_index" + $(tis).index()).length<1){
						ChangeCanvas(frame,newcreate);
						console.log('canvas changed');

					}else{
						whenfinish(varifycanvas,true);
					}

					dragresige(1);	
					
					$('.loader').remove();
					$("#ming").parents().removeClass('blurr');

					var cstmfy_input_type = $("select[name='cstmfy_input_type[]']:eq(" + $(tis).index() + ")").val();
					if(cstmfy_input_type<7){

						$(".area:eq(" + $(tis).index() + ")").show().siblings('.area').hide();
					}
					else{
						$('.area').hide();
					}
					
					if($('.eyeview:eq(' + $(tis).index() + ')').hasClass('fa-eye-slash')){
						jQuery('.pplr .pplr_index' + frame).hide();
					}

					
			}
			imgObj2.src = varifycanvas;
		}
		else{
			
					var frame = $(tis).index();
					if($(".pplr_index" + $(tis).index()).length<1){
						newcreate = true;
						ChangeCanvas(frame,newcreate);
						console.log('canvas changed');
					}
					dragresige(1);	

					var cstmfy_input_type = $("select[name='cstmfy_input_type[]']:eq(" + $(tis).index() + ")").val();
					if(cstmfy_input_type<7){
						$('.area:visible').hide();
						$(".area:eq(" + $(tis).index() + ")").show();
						$(".pplr_index" + $(tis).index()).show();
					}
					else{
						$('.area').hide();
					}
					if($('.eyeview:eq(' + $(tis).index() + ')').hasClass('fa-eye-slash')){
						jQuery('.pplr .pplr_index' + frame).hide();
					}
			
			
		}
		

newcreate = false;
};




jQuery(document).on('mouseover', '.dkksss', function(e) { 

var a = $(this).parent().offset().top;
var b = $(this).parent().offset().left;
var c = $(this).parent().width();
var d = $(window).scrollTop();
var k=0,l=0;
jQuery(this).find('img').attr('src',jQuery(this).find('img').attr('data-src'));
$(this).find('.thumbimg').css({"left":b+c-l,"top":a-d-k});
$(this).find('.thumbimg').clone().appendTo('body').addClass('thumbimgappend');

});

jQuery(document).on('mouseout', '.dkksss', function(e) {
	jQuery('.thumbimgappend').remove(); 

	})


$(window).load(function() {
    dragresige();
	if($("select[name='cstmfy_input_type[]']:first").val()<7){
	}
});


function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return ({
        h: h,
        s: s,
        l: l,
    });
}


function hslToRgb(h, s, l) {
    var r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return ({
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
    });
}




$('.overlay').click(function(e) {
    if ($(e.target).is('.product')) {
        e.preventDefault();
        return;
    }
    $('#AddModal2').fadeOut();
});



var delay = (function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

function angle2(tis){
	var eqn = $('.tab-pane.active').index();
	angle(eqn+1);
}



function angle(eqn) {
	if(eqn){
		eqn = eqn-1;
		 var degrees = -$("input[name='cstmfy_angle[]']:eq(" + eqn + ")").val();
		 if(degrees >0 || degrees < 0){
			 var tt = $("select[name='cstmfy_type[]']:eq(" + eqn + ")");
			 if(tt.val()<2){
				tt.val(2);
			 }
		 }
        $(".area:eq(" + eqn + ")").css({
            '-webkit-transform': 'rotate(' + degrees + 'deg)',
            '-moz-transform': 'rotate(' + degrees + 'deg)',
            '-ms-transform': 'rotate(' + degrees + 'deg)',
            '-o-transform': 'rotate(' + degrees + 'deg)',
            'transform': 'rotate(' + degrees + 'deg)',
            '-webkit-transform-origin': 'bottom left',
            '-moz-transform-origin': 'bottom left',
            '-ms-transform-origin': 'bottom left',
            '-o-transform-origin': 'bottom left',
            'transform-origin': 'bottom left',
        });
	}
	else{
    var eqn = 0;
    $("input[name='cstmfy_angle[]']").each(function() {
        var degrees = -$(this).val();
        $(".area:eq(" + eqn + ")").css({
            '-webkit-transform': 'rotate(' + degrees + 'deg)',
            '-moz-transform': 'rotate(' + degrees + 'deg)',
            '-ms-transform': 'rotate(' + degrees + 'deg)',
            '-o-transform': 'rotate(' + degrees + 'deg)',
            'transform': 'rotate(' + degrees + 'deg)',
            '-webkit-transform-origin': 'bottom left',
            '-moz-transform-origin': 'bottom left',
            '-ms-transform-origin': 'bottom left',
            '-o-transform-origin': 'bottom left',
            'transform-origin': 'bottom left',
        });
        eqn = eqn + 1;
    });
	}
}


//$(".clone:first-child").addClass('active');
//$(".clone:first-child .accordion").show();
//$(".clone:first-child").siblings().children(".ac-container").hide();

//$(".accordion").click(function(e){
//	$(this).siblings().slideDown();
//	$(this).parent().siblings().children(".ac-container").slideUp();
//	$(this).parent().addClass('active').siblings().removeClass('active');
//});


$('.demo2').colorpicker();


	
function removefield(e,tis){
    e.preventDefault();

	var thisindex = $(tis).parents('.tab-pane').index();
	
    $('.area:eq(' + thisindex + ')').remove();	

    $('.pplr_index' + thisindex).remove();
	$('.pplr .pplr_index' + thisindex).remove();

	$('ul#myTab > li#li'+ (thisindex+1)).remove();
	 $(tis).parents('.tab-pane').remove();

	if($('.when option[value="' + (thisindex+1) + '"]')[0]){
		$('.when option[value="' + (thisindex+1) + '"]').each(function(){
				$(this).parent().remove();
				wt = true;
		})	
	}
$('.target option[value="' + (thisindex+1) + '"]').remove();

		
	$('ul#myTab > li').not('#last').not('#lix').each(function(i){
		var getAttr = $(this).attr('id').split('li'); 
		if(parseInt(getAttr[1]) !== (i + 1)){
			$('ul#myTab li#li' + getAttr[1]).attr('id', 'li' + (i + 1)); 
			$(this).find('a').attr('href','#tab'+ (i + 1));
			var field = parseInt(getAttr[1]);
			var abc = $('.when option[value="' + field + '"]');
			abc.attr('value',field-1);
			var arr = abc.text().split('.');
			abc.attr('data-val',arr.join(".")) ;
			arr[0]=field-1 ;
			abc.text(arr.join(".")) ;
			var abc = $('.target option[value="' + field + '"]');
			var arr = abc.first().text().split('.');
			arr[0]=field-1 ;
			abc.text(arr.join(".")) ;
			abc.attr('data-val',arr.join(".")) ;
			abc.attr('value',field-1);


		}


	});
	
	$('ul#myTab > li#li'+ thisindex).addClass("active").siblings().removeClass("active");

	if(thisindex==0){
		$('.clone:eq(' + (thisindex) + ')').removeClass('fade').addClass('active').siblings().removeClass("active");
		$('ul#myTab > li#li'+ (1+thisindex)).addClass("active").siblings().removeClass("active");
	}
	else{
	$('ul#myTab > li#li'+ thisindex).addClass("active").siblings().removeClass("active");
	$('.clone:eq(' + (thisindex-1) + ')').removeClass('fade').addClass('active').siblings().removeClass("active");
}
	
	
	$('.clone').not('#tabx').each(function(i){
		$(this).attr('id', 'tab' + (i + 1));
	});

	var wt = false;




	if(wt){
		updateis();
    	updatetarget();
	}


	var varifycanvas = $("select[name='cstmfy_each_url[]']:eq(" +  (thisindex-1) + ")").val();
	$("#ming").attr("src", varifycanvas);
	var imgObj2 = new Image();
	imgObj2.onload = function() {

        $(".loader").remove();
        	var cstmfy_input_type = $("select[name='cstmfy_input_type[]']:eq(" + (thisindex-1) + ")").val();
			if(cstmfy_input_type<7){

					$(".area:eq(" + (thisindex-1) + ")").show().siblings('.area').hide();
			}
        	dragresige(1);
    }
    imgObj2.src = varifycanvas;
	$('ul#myTab li#li' + (thisindex)).trigger('click');

	$('#cfo').html('');

	$('ul#myTab > li').not('#last').not('#lix').each(function(i){
		var text = $(this).find('.djkks').text();
		$("#cfo").append("<option selected value='"+(i + 1)+"'>"+text+"</option>");
	});
	$('#cfo').multipleSelect('destroy');
	$('#cfo').multipleSelect();
	
}





function areaindexshow(tis) {
$('ul#myTab > li#li'+ $(tis).index()).addClass('active').siblings().removeClass("active");
	$('.clone:eq(' + ($(tis).index()-1) + ')').removeClass('fade').addClass('active').siblings().removeClass("active");
};



function simulateTouchEvents(oo,bIgnoreChilds)
{
	 if( !$(oo)[0] )
	  { return false; }

	 if( !window.__touchTypes )
	 {
	   window.__touchTypes  = {touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"};
	   window.__touchInputs = {INPUT:1,TEXTAREA:1,SELECT:1,OPTION:1,"input":1,"textarea":1,"select":1,"option":1};
	 }

	$(oo).bind("touchstart touchmove touchend", function(ev)
	{
		var bSame = (ev.target == this);
		if( bIgnoreChilds && !bSame )
		 { return; }

		var b = (!bSame && ev.target.__ajqmeclk), // Get if object is already tested or input type
			e = ev.originalEvent;
		if( b === true || !e.touches || e.touches.length > 1 || !window.__touchTypes[e.type]  )
		 { return; } //allow multi-touch gestures to work

		var oEv = ( !bSame && typeof b != "boolean")?$(ev.target).data("events"):false,
			b = (!bSame)?(ev.target.__ajqmeclk = oEv?(oEv["click"] || oEv["mousedown"] || oEv["mouseup"] || oEv["mousemove"]):false ):false;

		if( b || window.__touchInputs[ev.target.tagName] )
		 { return; } //allow default clicks to work (and on inputs)

		// https://developer.mozilla.org/en/DOM/event.initMouseEvent for API
		var touch = e.changedTouches[0], newEvent = document.createEvent("MouseEvent");
		newEvent.initMouseEvent(window.__touchTypes[e.type], true, true, window, 1,
				touch.screenX, touch.screenY,
				touch.clientX, touch.clientY, false,
				false, false, false, 0, null);

		touch.target.dispatchEvent(newEvent);
		e.preventDefault();
		ev.stopImmediatePropagation();
		ev.stopPropagation();
		ev.preventDefault();
	});
	 return true;
}; 


function updatename(tis){
	var index = $(tis).parents('.tab-pane').index()+1;
	$('#li'+index).find('.djkks').text(escapedoublequote($(tis).val()));
	$('#cfo option[value="'+index+'"]').text(escapedoublequote($(tis).val()));
	$('#cfo').multipleSelect('destroy');
	$('#cfo').multipleSelect();
	$(tis).val(escapedoublequote($(tis).val()));
	$('select.when option[value="' + index + '"]').text(index +'.'+escapedoublequote($(tis).val())).attr('data-val',index +'.'+escapedoublequote($(tis).val().trim()));
	$('select.target option[value="' + index + '"]').text(index +'.'+escapedoublequote($(tis).val())).attr('data-val',index +'.'+escapedoublequote($(tis).val().trim()));

}

function addfield(tis,n,k){
	newcreate = true;
	var nbrLiElem = ($('ul#myTab li').length);
	var _nn =  nbrLiElem -1 ;
	var dv = n;
	if(n<1){
		_nn =$(tis).parents('.clone').index();
		n=$(tis).parents('.clone').find("select[name='cstmfy_input_type[]']").val();
	}
	var lastname = $("[name='cstmfy_name[]']").eq(_nn).val();
	var lastcolor = $(".dcolor").eq(_nn).find('input').val();
	var lastcolor2 = $(".cseffectcolor").eq(_nn).find('input').val();
	lastname = lastname.replace(/[0-9]/g, '');

	$('#myTab').append('<li onclick="updatearea(this,event)" class="fieldtab" id="li' + (nbrLiElem + 1) + '"><a href="#tab' + (nbrLiElem + 1) + '" ><span class="ui-icon ui-icon-arrowthick-2-n-s" style="margin: 2px"></span><span class="djkks">'+lastname +(nbrLiElem + 1)+'</span></a>');
	
	var selects = $(".clone").eq(_nn).find("select");
		
	$(".clone").eq(_nn).clone(true, true).prop('id', 'tab'+(nbrLiElem + 1) ).removeClass("active").insertAfter(".clone:last");
	
	$(selects).each(function(i) {
		var select = this;
		$(".clone").last().find("select").eq(i).val($(select).val());
	});

	var lastfname = $("input[name='cstmfy_fontname[]']").last().val();
	lastfname = lastfname.replace(/[0-9]/g, '');
	var lastcname = $("input[name='cstmfy_colorname[]']").last().val();
	lastcname = lastcname.replace(/[0-9]/g, '');
	
	var lastindex = parseInt($("[name='cstmfy_name[]']").index())+1;
	$(".pplr .area").last().after('<div class="area" onmouseover="areaindexshow(this)" ondragstart="dragStart(event,this)" ondragend="dragEnd(event,this)"></div>');
	if(dv>0){
		var top = parseFloat($(".area").last().css("top")) + 10;
		$(".area").last().css("top", top + 'px');
		$("input[name='cstmfy_posy[]']").last().val(30);
		$("input[name='cstmfy_posx[]']").last().val(50);
	}
	$("[name='cstmfy_name[]']").last().val(lastname+(nbrLiElem + 1));
	$("input[name='cstmfy_fontname[]']").last().val(lastfname+(nbrLiElem + 1));
	$("input[name='cstmfy_colorname[]']").last().val(lastcname+(nbrLiElem + 1));
	$("textarea[name='cstmfy_ins[]']").last().val('');
	$("textarea[name='cstmfy_oindex[]']").last().val('');
	$("input[name='cstmfy_tab[]'][type=checkbox]").last().prop("checked", false);
	$("input[name='cstmfy_tab[]'][type=checkbox]").last().prop("checked", false);
	$(".nc[name='cstmfy_tab[]']").last().prop("disabled", false);
	$("#cfo").append("<option selected value='"+(nbrLiElem + 1)+"'>"+lastname +(nbrLiElem + 1)+"</option>");
	$('#cfo').multipleSelect('destroy');
	$('#cfo').multipleSelect();
if(k){
	$("select[name='cstmfy_input_type[]']").last().prop("selectedIndex", 3);
}
	else{
	$("select[name='cstmfy_input_type[]']").last().val(n);
}
	$("select[name='cstmfy_type_ds[]']").last().val(1);

	
		$(".tview .eyeview:visible").removeClass('fa-eye-slash').addClass('fa-eye');

	$(".clone").last().find('.dcolor').html('<label>Default Color</label><div class="input-group demo2"><input type="text" style="width: 70px;" value="'+lastcolor+'" class="form-control " name="cstmfy_color[]" /><span class="input-group-addon"><i></i></span></div>');
	
	$(".clone").last().find('.cseffectcolor').html('<label>Stroke Color</label><div class="input-group demo2 "><input type="text" style="width: 70px;" value="'+lastcolor2+'" class="form-control " name="cstmfy_stroke[]"><span class="input-group-addon"><i></i></span></div>');

	$(".clone").last().find('.demo2').addClass('color_oic'+nbrLiElem);
	console.time("concatenation");

		$('.color_oic'+nbrLiElem).colorpicker();
	$( "#li" + (nbrLiElem + 1) ).trigger("click");
	console.timeEnd("concatenation");
	//	$('.bhoechie-tab-content').mCustomScrollbar("destroy");
    //  jQuery(".bhoechie-tab-content").mCustomScrollbar({
    //    theme: "dark-thin"
	// });
    $(tis).parents('.pplr-options').slideToggle(100);
    $('#myTab').scrollTop($('#myTab')[0].scrollHeight);


}


function price(tis) {
    if ($(tis).val() == 1) {
        $(tis).parent().siblings('.pplrprice').hide();
    }
    if ($(tis).val() == 2) {
        $(tis).parent().siblings('.pplrprice').show();
		$(tis).parent().siblings('.pplrrequre').find("select[name='cstmfy_required[]']").val(2).trigger('change');
    }
}
	

function pplronload(){
	$("#ming").parent().append("<div style=\'width: 100% !important;height:100% !important;left:0px!important;right:0px!important;top:0px!important;bottom:0px!important;margin:auto!important;z-index:999!important;position:absolute!important;\' class=\'loader\'>Loading...</div>");
	$("#ming").parent().addClass("blurr");
}


(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();


	  
 function changeimage(tis){
	pplronload();
	var varifycanvas = $(tis).val();
	$("#ming").attr("src", varifycanvas);
	var imgObj2 = new Image();
	imgObj2.onload = function() {

		$('.loader').remove();
		$("#ming").parents().removeClass('blurr');
		$('.area.ui-draggable').each(function() {
			$(this).resizable("destroy");
			$(this).draggable("destroy");
		});
		var frame= $(tis).parents('.clone').index();
		
		ChangeCanvas(frame) ;
		console.log('canvas changed');
		dragresige(1);
		
	}
	imgObj2.src = varifycanvas;

  }
  
function pplrpopupshow(){
	var image = $(".clone.active select[name='cstmfy_image[]']").val();
	$(".crop-modal").remove();
	$(".bhoechie-tab-content.active").append('<div  class="crop-modal"><div class="pplr-popup modal-box"><header><p class="pplrhleft">CROP IMAGE (<span class="crdata"></span>)</p><a  onclick="pplr_hide()" class="js-modal-close close">OK</a></header><div class="modal-body"><img class="pplr-modal-img" src="'+image+'" /></div></div></div>');
 var imgObj2 = new Image();
 		$(".crop-modal").show();
 	//	$('.area:visible').addClass('no-visible');
	imgObj2.onload = function() {
		$(".modal-body").css("width", '100%');
		$(".modal-body").css("height", 'calc(100% - 50px)');
		var ratio= ($(".clone.active input[name='cstmfy_width[]']").val()*$('#ming').width())/ ($(".clone.active input[name='cstmfy_height[]']").val()*$('#ming').height());
		jQuery(".pplr-modal-img").cropper({
			zoomOnWheel:false,
			rotatable:true,
			scalable:true,
			minContainerWidth:100,
			checkOrientation:true,
			strict: false,
			autoCrop: true,
			autoCropArea:1,
			viewMode:1,
			crop: function(e) {
			recalluipplr(e);
			}
		});	
			
	 }
    imgObj2.src = image;

}

function recalluipplr(ui){										
	var uileft = Math.abs(parseInt(ui.x));
	var uitop = Math.abs(parseInt(ui.y));
	var perwidth = Math.abs(parseInt(ui.width));
	var perheight = Math.abs(parseInt(ui.height));
	var rotate = parseInt(ui.rotate);
	if(rotate==-90){
	var uileft = nwidth-Math.abs(parseInt(ui.y))-perheight;
	perheight = Math.abs(parseInt(ui.width));
	var uitop = Math.abs(parseInt(ui.x));
	perwidth = Math.abs(parseInt(ui.height));
	}
	if(rotate==90){
	var uileft = Math.abs(parseInt(ui.y));
	perheight = Math.abs(parseInt(ui.width));
	var uitop = nheight-Math.abs(parseInt(ui.x))-perwidth;
	perwidth = Math.abs(parseInt(ui.height));
	}
	if(rotate==-180){
	var uitop = nheight-Math.abs(parseInt(ui.y))-Math.abs(parseInt(ui.height));
	var uileft = nwidth-Math.abs(parseInt(ui.x))-perwidth;
	}
	var awr = 1;
	$(".clone.active input[name='cstmfy_crop[]']").val((uileft*awr)+"_"+(uitop*awr)+"_"+(perwidth*awr)+"_"+(perheight*awr)+"_"+(rotate*awr)).trigger("change");
	$(".crdata").text((uileft*awr)+"_"+(uitop*awr)+"_"+(perwidth*awr)+"_"+(perheight*awr));
	
}



function pplr_select(tis,e){
	e.preventDefault();
	$(tis).parent().siblings('select').val($(tis).attr('data-src')).trigger('change');
	$(tis).parents('.bcimage').find('.thumbimgselecta img').attr('src',$(tis).attr('data-src'));

	//jQuery(".bhoechie-tab-content").mCustomScrollbar({
    //    theme: "dark-thin"
   // });
   jQuery('.thumbimgout').remove();
   
   if($(tis).attr('data-src').indexOf('cdn.shopify.com') > -1){
		$('.pplr-warning').fadeIn();
	}
	else{
		$('.pplr-warning').fadeOut();
	}

	
	if($(tis).parents('.creategroup')[0]){
			var vvv = $(tis).attr('data-src').split('/')[2].replace(".png","").replace(".jpg","").replace(".jpeg","").replace(/-/g," ").replace(/_/g," ");
		$(tis).parents('.creategroup').find('input[name="fname[]"]').val(vvv);
	}
	
	$(".crop-modal2").remove();
	jQuery('.thumbimgappend').remove(); 
   

}


$(document).mouseup(function(e) 
{
    var container = $(".crop-modal2");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $(".crop-modal2").remove();
       // jQuery(".bhoechie-tab-content").mCustomScrollbar({
       // 	theme: "dark-thin"
    	//});
    }
	var container2 = $("#last");

    if (!container2.is(e.target) && container2.has(e.target).length === 0) 
    {
        $(".pplr-options").hide();
    }


});


function pplrpopupimage(tis,e){
	e.preventDefault();
	if($(".crop-modal2:visible")[0]){
	$(".crop-modal2").remove();
	//jQuery(".bhoechie-tab-content").mCustomScrollbar({
   //     theme: "dark-thin"
   // });
	return;
	}

if(!$(tis).siblings('select').find('.uploadedimg')[0]){

	$(tis).siblings('select').append(imagelist_t);
}

var fix = $(tis).siblings('select').val();


	$(tis).after('<div  class="crop-modal2"></div>');
	$('.crop-modal2').append('<a class="dkksss2"> <input type="text" placeholder="Search" oninput="search(this)" /></a>');

	$(tis).siblings('select').find('option:not([disabled])').each(function() {
		var op = $(this); 
		var active = '';
		if(fix == op.val()){
			active = 'active';
		}
		var title = op.val().split("/").pop().replace('product-personalizer.myshopify.com/', '').split("?v")[0];
		if(!op.prop('disabled')){
			if(op.val()=='images/blank.png'){
				$('.crop-modal2').append('<a class="dkksss '+active+'" onclick="pplr_select(this,event)" data-src="'+op.val()+'">blank<span class="thumbimg"  ><img  data-src="'+op.attr('data-value')+'"  /></span></a>');
			}else{

				$('.crop-modal2').append('<a class="dkksss '+active+'" onclick="pplr_select(this,event)" data-src="'+op.val()+'">'+title+'<span class="thumbimg"  ><img  data-src="'+op.attr('data-value')+'"  /></span></a>');
			}
		}

	})

	$(".crop-modal2").css("width", 220);
	$(".crop-modal2").css("height", 210);
	$(".crop-modal2").css("overflow-y", 'scroll');
	$(".crop-modal2").show();
	$('[data-toggle="tooltip"]').tooltip();
	//$(".bhoechie-tab-content").mCustomScrollbar("destroy"); 

}
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  }
 );

function pplr_show(){
	$(".crop-modal").show();
}
function pplr_hide(){
	$(".crop-modal").remove();
	//$('.area').removeClass('no-visible');
	$("body").removeClass("modal-open");
}

function loadimage(tis) {
	var imgObj4 = new Image();
	imgObj4.onload=function(){
		if($(tis).val() != 'images/blank.png'){
	    $(".clone.active input[name='cstmfy_crop[]']").val("0_0_"+this.width+"_"+this.height+"_0");
		//pplrpopupshow();
		}
		var frame= $(tis).parents('.clone').index();
		
		ChangeCanvas(frame);
		console.log('canvas changed');
	}
	imgObj4.src = 'https://doshopify.com/product-personalizer/'+$(tis).val(); 
}
  
var checktimout;

jQuery(document).on("change keyup", "#mainform .form-control", function(event) { 
	var frame= $('.clone.active').index();
	if(frame>-1 && !$(this).hasClass('nc')){
newcreate = true;
				ChangeCanvas(frame);
				newcreate = false;
				console.log('canvas changed');
				 $(".crop-modal2").remove();

		}

});

jQuery(document).on("change", ".form-control", function(event) { 

		if($(this).val()==='' && $(this).prop('required')){
			$(this).val(0);
		}
});

var imgObj = new Image();
imgObj.crossOrigin = 'Anonymous';

function ChangeCanvas(frame,tt) {
    var canheight= $('#ming').height();
	var canwidth = $('#ming').width();
    var varifycanvas = $(".clone.active select[name='cstmfy_each_url[]']").val();
    var eqn = 0;
    var pplrcrop = 0;
    var frame = parseInt(frame);
	
    if (jQuery('.pplr_index' + frame).length > 0 || tt) {
		 if (!newcreate){
			whenfinish(varifycanvas,true);
		 }
		if ($("select[name='cstmfy_input_type[]']:eq(" +frame+ ")").val() == 3 || $("select[name='cstmfy_input_type[]']:eq(" +frame+ ")").val() == 4) {
		var imgObj5 = new Image();
		imgObj5.src = $("select[name='cstmfy_image[]']:eq(" + frame + ")").val();
		if(imgObj.src !== imgObj5.src || imgObj.width<1 || imgObj.height<1 || tt){
		jQuery(".clone").append('<div class="pplrloadingimage"></div>');
			imgObj.onload = function() {
			jQuery(".pplrloadingimage").remove();
				jQuery('.pplr_index' + frame).remove();	
				var canvas = getText(canwidth, canheight, frame,false,imgObj);
				jQuery(canvas).addClass('pplr_index' + frame);
				jQuery('.pplr').append(canvas);
				
				if ($("select[name='cstmfy_index[]']:eq("+frame+")").val() == 2) {
					jQuery('.pplr_index' + frame).css('z-index', -1).attr('data-varifier',varifycanvas).attr('data-f',eqn);
				}
				else{
					jQuery('.pplr_index' + frame).css('z-index', 98 + frame).attr('data-varifier',varifycanvas).attr('data-f',eqn);
				}

				if (jQuery(".eyeview:eq("+frame+")").hasClass('fa-eye-slash')) {
					jQuery('.pplr_index' + frame).hide();
				}
				console.log(frame);

				}
			imgObj.src = $("select[name='cstmfy_image[]']:eq(" + frame + ")").val();
			imgObj.onerror = function() {
			 alert("Image not found " + imgObj.src);
			};
			}
			else{
				console.log(frame);
				var canvas = getText(canwidth, canheight, frame,true,imgObj);
				jQuery(canvas).addClass('pplr_index' + frame);
				if ($("select[name='cstmfy_index[]']:eq("+frame+")").val() == 2) {
					jQuery('.pplr_index' + frame).css('z-index', -1).attr('data-varifier',varifycanvas).attr('data-f',eqn);
				}
				else{
					jQuery('.pplr_index' + frame).css('z-index', 98 + frame).attr('data-varifier',varifycanvas).attr('data-f',eqn);
				}
				if (jQuery(".eyeview:eq("+frame+")").hasClass('fa-eye-slash')) {
					jQuery('.pplr_index' + frame).hide();
				}
			}	
			
		} else {
			jQuery('.pplr_index' + frame).remove();	
			var canvas = getText(canwidth, canheight, frame,false);
			jQuery(canvas).addClass('pplr_index' + frame);
			jQuery('.pplr').append(canvas);
			jQuery('.pplr_index' + frame).css('z-index', 98 + frame).attr('data-varifier',varifycanvas).attr('data-f',eqn);
			if (jQuery(".eyeview:eq("+frame+")").hasClass('fa-eye-slash')) {
				jQuery('.pplr_index' + frame).hide();
			}


		}

    } else {
		jQuery(".clone").append('<div class="pplrloadingimage"></div>');
		myLoop(eqn,canheight,canwidth,varifycanvas,pplrcrop);

    };


}


function myLoop (eqn,canheight,canwidth,varifycanvas,pplrcrop) {   

if(jQuery("select[name='cstmfy_each_url[]']:eq("+eqn+")").val() == varifycanvas){

	if ($("select[name='cstmfy_input_type[]']:eq(" +eqn+ ")").val()  == 3 || $("select[name='cstmfy_input_type[]']:eq(" +eqn+ ")").val()  == 4) {

		var image = $("select[name='cstmfy_image[]']:eq(" + eqn + ")").val();
		var imgObj = new Image();
		imgObj.onload = function() {
			jQuery('.pplr_index' + eqn).remove();	
			var canvas = getText(canwidth, canheight, eqn,false,imgObj);
			jQuery(canvas).addClass('pplr_index' + eqn);
			jQuery('.pplr').append(canvas);
			jQuery('.pplr_index' + eqn).css('z-index', 98 + eqn).attr('data-varifier',varifycanvas).attr('data-f',eqn);
			if ($("select[name='cstmfy_index[]']:eq("+eqn+")").val() == 2) {
				jQuery('.pplr_index' + eqn).css('z-index', -1).attr('data-varifier',varifycanvas).attr('data-f',eqn);
			}
			pplrcrop = pplrcrop + 1;
			if (jQuery(".eyeview:eq("+eqn+")").hasClass('fa-eye-slash')  ) {
				jQuery('.pplr_index' + eqn).hide();
			}
		   eqn = eqn + 1;               
			  if (eqn < jQuery('.clone').length) {           
				 myLoop(eqn,canheight,canwidth,varifycanvas,pplrcrop);          
			  }else{
				whenfinish(varifycanvas,true);
			  }  

		}

		imgObj.src = image;
		imgObj.onerror = function() {
		 alert("Image not found " + imgObj.src);
		};

	} else {
		jQuery('.pplr_index' + eqn).remove();	
		var canvas = getText(canwidth, canheight, eqn);
		jQuery(canvas).addClass('pplr_index' + eqn);
		jQuery('.pplr').append(canvas);
		
		jQuery('.pplr_index' + eqn).css('z-index', 98 + eqn).attr('data-varifier',varifycanvas).attr('data-f',eqn);
		
		if (jQuery(".eyeview:eq("+eqn+")").hasClass('fa-eye-slash') ) {
			jQuery('.pplr_index' + eqn).hide();
		}
		eqn = eqn + 1;               
		  if (eqn < jQuery('.clone').length) {           
			 myLoop(eqn,canheight,canwidth,varifycanvas,pplrcrop);     
		  }else{
			whenfinish(varifycanvas,true);
		  } 
	}
}else{
		eqn = eqn + 1;               
		  if (eqn < jQuery('.clone').length) {           
			 myLoop(eqn,canheight,canwidth,varifycanvas,pplrcrop);     
		  }else{
			whenfinish(varifycanvas,true);
		  } 
	
}


}


function whenfinish(varifycanvas,t){
if(t){
jQuery('.pplr canvas').hide();
jQuery('.pplr canvas[data-varifier="'+varifycanvas+'"]').each(function() {

	var index= jQuery(this).attr('data-f');
	if (jQuery(".eyeview:eq("+index+")").hasClass('fa-eye')) {
		jQuery(this).show();
	}

})
}
	
	$('.loader').remove();
	$("#ming").parents().removeClass('blurr');
	jQuery(".pplrloadingimage").remove();
}


function convertHex(hex,opacity){
	hex = hex.replace('#','');
	r = parseInt(hex.substring(0,2), 16);
	g = parseInt(hex.substring(2,4), 16);
	b = parseInt(hex.substring(4,6), 16);

	result = 'rgba('+r+','+g+','+b+','+opacity+')';
	return result;
} 

function capitalize(text) {
	return text.replace(/\b\w/g , function(m){ return m.toUpperCase(); } );
}
	
function wrapText(context, text, x, y, maxWidth, font, areafSize, align, valign, maxlinenumber, line_height, h,eqn,type,startAngle2,angle,inwardFacing,diameter,textHeight2,textMaxHeight,clockwise,effect) {
    var linebreaks = text.split('\n');
   var d_f_s = areafSize;

    for (var ii = 0; ii < linebreaks.length; ii++) {
        var words = linebreaks[ii];
        var i, textWidth, fSize, textHeight;
        for (i = areafSize; i > 1; i--) {
            textWidth = get_tex_width(words, i + 'pt ' + font);
            textHeight = (getTextHeight(font, i).height) * linebreaks.length* line_height;
            if (textWidth < maxWidth && textHeight < h) {
                areafSize = i;
                fSize = i;
                break;
            }
            if(textWidth/maxWidth>1.2){ i= parseInt(i*(maxWidth/textWidth)*1.2); }
        }
    }


	if(d_f_s>parseInt(fSize)+1){
		$("input[name='cstmfy_size[]']:eq(" + eqn + ")").siblings('.fsize').text(' Auto resize is activated as default text is too large for the width of custom area . Cropped font size is '+ parseInt((parseInt(fSize) * 500)/(0.75*$('#ming').height()))+'. Make wider custom area for large font size than this');
	}
	else{
		$("input[name='cstmfy_size[]']:eq(" + eqn + ")").siblings('.fsize').text('');
	}

    var lineHeightprime = (getTextHeight(font, fSize).height);
    var lineHeight = (getTextHeight(font, fSize).height) * line_height;
    if (valign == '2') {
        y += (h - lineHeight * linebreaks.length) / 2-lineHeight/2+areafSize/2 ;
    }
    if (valign == '3') {
        y += (h - lineHeight * linebreaks.length);
    }
    var linenumber = 1;


		if(type>2){
		var dy = y;
		var v = dy* Math.sin(angle * Math.PI / 180);
		var x = -dy* Math.cos(angle * Math.PI / 180);
		context.translate(v, -x);
		textHeight=textHeight2;
		}
var swidth = $("input[name='cstmfy_swidth[]']:eq(" + eqn + ")").val();

    for (var ii = 0; ii < linebreaks.length; ii++) {

	        var words = linebreaks[ii];
	        context.font = (fSize + 'pt') + ' ' + font;
	        var testWidth = context.measureText(words).width;
	        if (align == 'left') {
	            var fixalign = maxWidth / 2;
	        }
	        if (align == 'right') {
	            var fixalign = -maxWidth / 2 + testWidth;
	        }
	        if (align == 'center') {
	            var fixalign = testWidth / 2;
	        }
	        y += lineHeight;
	        if(type<3){
	        	
	        	if(swidth<0 && effect==3){
				  context.strokeText(words, x - fixalign, y);
				 }

				context.fillText(words, x - fixalign, y);
				if(swidth>0 && effect==3){
				  context.strokeText(words, x - fixalign, y);
				 }
				 
				 if(effect==4){
					 context.shadowOffsetX = swidth;
					context.shadowOffsetY = swidth;
					context.shadowColor = "rgba(255,255,255,1)";	
					context.fillText(words, x - fixalign, y);
				  }
			}
			else{

		  		if(isRTL(words[0])){words = words.split('').reverse().join('')}
			
			    if (((['left', 'center'].indexOf(align) > -1) && inwardFacing) || (align == 'right' && !inwardFacing)) words = words.split('').reverse().join('');

				var startAngle = startAngle2;
			    startAngle += ((Math.PI) * !inwardFacing);
			    context.textBaseline = 'middle';
			    context.textAlign = 'center';
			    if (align == 'center') {
			        for (var j = 0; j < words.length; j++) {
			            var charWid = context.measureText(words[j]).width;
			      if (inwardFacing) {
			      var kerning = 0;
			      } else {
			      var kerning = 2*Math.tan((charWid / 2) / (diameter / 2 - textHeight ))* getTextHeight(font, parseInt(fSize), words[j]).height;
			      }
			            startAngle += ((charWid + (j == words.length - 1 ? 0 : kerning )) / (diameter / 2 - textHeight / 2 + d_f_s / 2)) / 2 * -clockwise;
			        }
			    }
			    context.rotate(startAngle-(angle * Math.PI / 180));
			    var ddd = 0 ;
			    for (var j = 0; j < words.length; j++) {
			        var charWid = context.measureText(words[j]).width;
					if (inwardFacing) {
					var kerning = 0;
					} else {
					var kerning = 2*Math.tan((charWid / 2) / (diameter / 2 - textHeight))* getTextHeight(font, parseInt(fSize), words[j]).height;
					}
					ddd+= (charWid / 2) / (diameter / 2 - textHeight / 2 + d_f_s / 2) * clockwise;

			        context.rotate((charWid / 2) / (diameter / 2 - textHeight / 2 + d_f_s / 2) * clockwise);
					
			        if (inwardFacing) {
						var yy = (0 - diameter / 2+textMaxHeight/2 - textHeight/2);
			        } else {
						var yy = -1 * (0 - diameter / 2 + textHeight) + d_f_s / 2;
			        }
					context.fillText(words[j], 0, yy);
					if(effect==3){
					  context.strokeText(words, x - fixalign, y);
					 }

			        context.rotate((charWid / 2 + kerning) / (diameter / 2 - textHeight / 2 + d_f_s / 2) * clockwise); // rotate half letter
			       ddd+= (charWid / 2 + kerning) / (diameter / 2 - textHeight / 2 + d_f_s / 2) * clockwise;
			    }
				context.rotate(-startAngle+(angle * Math.PI / 180)-ddd);

				var dy = lineHeight;
				var v = dy* Math.sin(angle * Math.PI / 180);
				var x = -dy* Math.cos(angle * Math.PI / 180);
				context.translate(v, -x);

			}


        linenumber = linenumber + 1;


    }
}
	
function get_tex_width(txt, font) {
        this.element = document.createElement('canvas');
        this.context = this.element.getContext("2d");
        this.context.font = font;
        return this.context.measureText(txt).width;
    }	
	
function getTextHeight(font, areaFsize, dtxt) {
  if (dtxt) {
    var Hg = dtxt;
  } else {
    var Hg = 'Hgf';
  }
  var text = jQuery('<span style="line-height:1 !important;vertical-align: middle;padding:0px !important;margin:0px !important;position:absolute;top:0px;z-index:999">' + Hg + '</span>').css({
    fontFamily: font,
    'font-size': areaFsize + 'pt'
  });


  var block = jQuery('<span style="display: inline-block; width: 1px; height: 0px;"></span>');

  var div = jQuery('<span></span>');
  div.append(text, block);

  var body = jQuery('body');
  body.append(div);
  try {

    var result = {};

    block.css({
      verticalAlign: 'baseline'
    });
    result.ascent = block.offset().top - text.offset().top;

    block.css({
      verticalAlign: 'bottom'
    });
   //result.height = block.offset().top - text.offset().top;
    result.height = text[0].offsetHeight;
    result.width = text.width();

    result.descent = result.height - result.ascent;

  } finally {
      div.remove();
  }
  return result;
};
	
	var mg = mg || {};
mg.monogram_1 = ['monogram1',1.4,1.15,1,1,1];
mg.monogram_2 = ['monogram2',1.4,1.15,1,1,1];


function hexToRgb(color) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    color = color.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {
        r: 0,
        g: 0,
        b: 0
    };
}

function colorImage(imgId,hexaColor) {
    var imgElement = imgId;
    var canvas = document.createElement("canvas");
    canvas.width = imgElement.width;
    canvas.height = imgElement.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgElement,0,0);   
    var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    var data = imageData.data;
    var rgbColor = hexToRgb(hexaColor);
    
    for(var p = 0, len = data.length; p < len; p+=4) {
        data[p + 0] = rgbColor.r;
        data[p + 1] = rgbColor.g;
        data[p + 2] = rgbColor.b;
    }
    ctx.putImageData(imageData, 0, 0);

    imgElement.src = canvas.toDataURL();

    return  imgElement;
}



function getText(canwidth,canheight,eqn,llc,imgObj) {

	var text = $("textarea[name='cstmfy_default[]']:eq(" + eqn + ")").val();
	
	var type = $("select[name='cstmfy_type[]']:eq(" + eqn + ")").val();
	
	var inputtype = $("select[name='cstmfy_input_type[]']:eq(" + eqn + ")").val();

	var image = $("select[name='cstmfy_image[]']:eq(" + eqn + ")").val();
	var imginfo=$("input[name='cstmfy_crop[]']:eq(" + eqn + ")").val().split("-").join("_").split('_');
	
	var angle = $("input[name='cstmfy_angle[]']:eq(" + eqn + ")").val();
	var fcase = $("select[name='cstmfy_case[]']:eq(" + eqn + ")").val();
	var fcase2 = $("select[name='cstmfy_case2[]']:eq(" + eqn + ")").val();
	var fcase3 = $("select[name='cstmfy_case3[]']:eq(" + eqn + ")").val();

	var monogram = $("select[name='cstmfy_monogram[]']:eq(" + eqn + ")").val();
	
		if(fcase==2){
		 text= text.toUpperCase(); 
		}
		if(fcase==3){
		 text= text.toLowerCase();
		}	
		if(fcase==4){
		 text= capitalize(text);
		}

		if(fcase==5){
		text= capitalizeFirstLetter(text);
	}
	
	var diameter = parseInt($("input[name='cstmfy_radius[]']:eq(" + eqn + ")").val()*$('#ming').height()/500);

	var xpos = $("input[name='cstmfy_posx[]']:eq(" + eqn + ")").val()*$('#ming').width()/100;
	var ypos = $("input[name='cstmfy_posy[]']:eq(" + eqn + ")").val()*$('#ming').height()/100;

	var xpos2 = $("input[name='cstmfy_posx2[]']:eq(" + eqn + ")").val()*$('#ming').width()/100;
	var ypos2 = $("input[name='cstmfy_posy2[]']:eq(" + eqn + ")").val()*$('#ming').height()/100;

	var xpos3 = $("input[name='cstmfy_posx3[]']:eq(" + eqn + ")").val()*$('#ming').width()/100;
	var ypos3 = $("input[name='cstmfy_posy3[]']:eq(" + eqn + ")").val()*$('#ming').height()/100;


	var width = $("input[name='cstmfy_width[]']:eq(" + eqn + ")").val()*$('#ming').width()/100;
	var height = $("input[name='cstmfy_height[]']:eq(" + eqn + ")").val()*$('#ming').height()/100;
	var align = $("select[name='cstmfy_align[]']:eq(" + eqn + ")").val();
	var valign = $("select[name='cstmfy_valign[]']:eq(" + eqn + ")").val();
	var color = $("input[name='cstmfy_color[]']:eq(" + eqn + ")").val();
	var style = $("select[name='cstmfy_style[]']:eq(" + eqn + ")").val();

	var blend = $("select[name='cstmfy_blend[]']:eq(" + eqn + ")").val();
	var gray = $("select[name='cstmfy_gray[]']:eq(" + eqn + ")").val();

	var line_height = $("input[name='cstmfy_line_height[]']:eq(" + eqn + ")").val();

	var Name = $("select[name='cstmfy_font[]']:eq(" + eqn + ")").val();
	var fName = Name.split("/").pop(-1).replace(".ttf", "");

	var Name2 = $("select[name='cstmfy_font2[]']:eq(" + eqn + ")").val();
	var fName2 = Name2.split("/").pop(-1).replace(".ttf", "");

	var Name3 = $("select[name='cstmfy_font3[]']:eq(" + eqn + ")").val();
	var fName3 = Name3.split("/").pop(-1).replace(".ttf", "");
	
	var opacity = 1-$("input[name='cstmfy_trans[]']:eq(" + eqn + ")").val()/127;

	var fSize = $("input[name='cstmfy_size[]']:eq(" + eqn + ")").val()*.75*($('#ming').height()/500);	

	var fSize2 = $("input[name='cstmfy_size2[]']:eq(" + eqn + ")").val()*.75*($('#ming').height()/500);	
	var fSize3 = $("input[name='cstmfy_size3[]']:eq(" + eqn + ")").val()*.75*($('#ming').height()/500);	
	var effect = $("select[name='cstmfy_effect[]']:eq(" + eqn + ")").val();	
	var stroke = $("input[name='cstmfy_stroke[]']:eq(" + eqn + ")").val();
	var swidth = $("input[name='cstmfy_swidth[]']:eq(" + eqn + ")").val();


	var areafSize = fSize;	
	var adjust = diameter;
	if(diameter<0){
	var inwardFacing = true;
	var textInside = true;
	var startAngle = 0;
	diameter = - diameter;
	}
	else{
	var inwardFacing = false;
	var startAngle = 180;
	var textInside = false;
	}

	align = align.toLowerCase();
	if (llc) {
        var mainCanvas = jQuery('.pplr_index' + eqn).get(0);
    } else {
        var mainCanvas = document.createElement('canvas');
    }
	var ctxRef = mainCanvas.getContext('2d');
	if (llc) {
	ctxRef.clearRect(0, 0, canwidth, canheight);
	}
	var clockwise = align == "right" ? 1 : -1; // draw clockwise for aligned right. Else Anticlockwise
	startAngle = startAngle * (Math.PI / 180); // convert to radians

	// calculate height of the font. Many ways to do this
	// you can replace with your own!
	var div = document.createElement("span");
	div.innerHTML = text;
	div.style.position = 'absolute';
	div.style.top = '-10000px';
	div.style.left = '-10000px';
	div.style.fontFamily = fName;
	div.style.fontSize = fSize+ 'pt';
	  div.style.lineHeight = "1.42857143";
	document.body.appendChild(div);
	var textMaxWidth = div.offsetWidth;
	var textMaxHeight = div.offsetHeight;
	var textWidth = div.offsetWidth;
	var textHeight = div.offsetHeight;

	var fonts = parseInt(fSize);
	var fonts2 = parseInt(fSize2);
	var fonts3 = parseInt(fSize3);

	if(inputtype<2){
	var i;
	for (i = fonts; i >1; i--) {
	div.style.fontSize = i+'pt';
	div.innerHTML = text;
	var textWidth = div.offsetWidth;
	var textHeight = div.offsetHeight;
	if(textWidth < width)
	{
		fSize = i;
		div.style.fontSize = fSize+'pt';
		textWidth = div.offsetWidth;
		textHeight = div.offsetHeight;
		
		break;
		}
	}

	if(textWidth>width*1.3){
      i= parseInt(i*(width/textWidth)*1.2);
    }
	var kerning = fSize*.07;
	fSize = fSize+'pt';

	if(areafSize>parseInt(fSize)+1){
		$("input[name='cstmfy_size[]']:eq(" + eqn + ")").siblings('.fsize').text('Auto resize is activated as default text is too large for the width of custom area . Cropped font size is  '+ parseInt((parseInt(fSize) * 500)/(0.75*$('#ming').height()))+'. Make wider custom area for large font size than this');
	}
	else{
		$("input[name='cstmfy_size[]']:eq(" + eqn + ")").siblings('.fsize').text('');
	}
	
	}
	document.body.removeChild(div);



	// in cases where we are drawing outside diameter,
	// expand diameter to handle it
	if (!textInside) diameter += textHeight * 2;
	mainCanvas.width = canwidth;
	mainCanvas.height = canheight;
	// omit next line for transparent background
	mainCanvas.style.backgroundColor = 'none'; 

	ctxRef.fillStyle = convertHex(color,opacity);


	if(inputtype>6 || $("select[name='cstmfy_type_ds[]']:eq(" + eqn + ")").val()==3){
		return (mainCanvas);
	}

	

	if(inputtype==4){
		ctxRef.save();
		var ay =height;
		var extraY=ay-ay*Math.cos(angle*Math.PI/180);
		var extraX=height*Math.sin(angle*Math.PI/180);
		ctxRef.translate(xpos-width/2-extraX, ypos+extraY);
		ctxRef.rotate(-angle*Math.PI/180);
		var rto = imginfo[2]/imginfo[3];
		var rto2 = width/height;

		if(imgObj){
			if(imginfo[2]>imgObj.width){imginfo[2]=imgObj.width;}
			if(imginfo[3]>imgObj.height){imginfo[3]=imgObj.height;}
		    var canvas = document.createElement("canvas");
			    canvas.width = imgObj.width;
			    canvas.height = imgObj.height;
			    var ctx = canvas.getContext("2d");
			    ctx.globalCompositeOperation = 'multiply';
			    ctx.drawImage(imgObj,0,0);   
			   	ctx.globalCompositeOperation = 'source-atop';
				ctx.fillStyle = color;
				ctx.fillRect(0,0,canvas.width, canvas.height);

				if(rto2>rto){


				ctxRef.drawImage(imgObj, imginfo[0], imginfo[1],imginfo[2],imginfo[3],0,0,height*rto,height);
				ctxRef.globalCompositeOperation=blendc[blend];
				ctxRef.drawImage(canvas, imginfo[0], imginfo[1],imginfo[2],imginfo[3],0,0,height*rto,height);
				ctxRef.globalCompositeOperation='source-over';


				}
				else{
				ctxRef.drawImage(imgObj, imginfo[0], imginfo[1],imginfo[2],imginfo[3],0,0,width,width/rto);
				ctxRef.globalCompositeOperation=blendc[blend];
				ctxRef.drawImage(canvas, imginfo[0], imginfo[1],imginfo[2],imginfo[3],0,0,width,width/rto);
				ctxRef.globalCompositeOperation='source-over';
				}
				ctxRef.restore();
		}
		else{

			var imgObj = new Image();
			imgObj.onload = function() {
				if(imginfo[2]>imgObj.width){imginfo[2]=imgObj.width;}
				if(imginfo[3]>imgObj.height){imginfo[3]=imgObj.height;}
			    var canvas = document.createElement("canvas");
			    canvas.width = imgObj.width;
			    canvas.height = imgObj.height;
			    var ctx = canvas.getContext("2d");
			    ctx.drawImage(imgObj,0,0);   

				ctx.globalCompositeOperation = 'source-atop';
				ctx.fillStyle = color;
				ctx.fillRect(0,0,canvas.width, canvas.height);
			   
				if(rto2>rto){
				ctxRef.drawImage(imgObj, imginfo[0], imginfo[1],imginfo[2],imginfo[3],0,0,height*rto,height);
				ctxRef.globalCompositeOperation=blendc[blend];
				ctxRef.drawImage(canvas, imginfo[0], imginfo[1],imginfo[2],imginfo[3],0,0,height*rto,height);
				ctxRef.globalCompositeOperation='source-over';
				}
				else{
				ctxRef.drawImage(imgObj, imginfo[0], imginfo[1],imginfo[2],imginfo[3],0,0,width,width/rto);
				ctxRef.globalCompositeOperation=blendc[blend];
				ctxRef.drawImage(canvas, imginfo[0], imginfo[1],imginfo[2],imginfo[3],0,0,width,width/rto);
				ctxRef.globalCompositeOperation='source-over';
				}
				ctxRef.restore();
			}
			imgObj.src = image;
		}
		
		if (!llc) {
		return (mainCanvas);
		} else {
		return;
		}
	}	





			
	if(inputtype==3){
		var rto = imginfo[2]/imginfo[3];
		var rto2 = width/height;
		
		if(rto2>rto || rto2 == rto){
			var vv = height;
			var xx = height*rto;
			var e = parseInt((width - xx) / 2);
			var q = e,r=0;
		}
		else{
			var vv = width/rto;
			var xx = width;
			var e = parseInt((height - vv) / 2);
			var q = 0,r=e;
		}
	
		if(type==3){
		ctxRef.save();
		var ay =height;
		var extraY=ay-ay*Math.cos(angle*Math.PI/180);
		var extraX=height*Math.sin(angle*Math.PI/180);
		ctxRef.translate(xpos-xx/2-extraX, ypos+extraY);
		ctxRef.rotate(-angle*Math.PI/180);

		var radius =  diameter/2;
		var arc= xx/radius;
		if(!inwardFacing){
		var angle=arc/2+Math.PI/2;
		}
		else{
		var angle=3*Math.PI/2-arc/2;
		}
		var x=parseInt(imginfo[0]);
			for (var sx = 0; sx < xx; sx++){
			  var x= x+parseInt(imginfo[2])/xx;
			  if(!inwardFacing){
			  var y= radius-radius*Math.sin(angle);
			  }
			  else{
			  y= 0-radius-radius*Math.sin(angle);
			  }

			  
			  if(imgObj){
				  ctxRef.drawImage(imgObj,x,imginfo[1],1,imginfo[3],sx,y,5,vv);
				}
				else{
					var imgObj = new Image();
					imgObj.onload = function() {
						ctxRef.drawImage(imgObj,x,imginfo[1],1,imginfo[3],sx,y,5,vv);
					}
					imgObj.src = image;
				}
			   if(!inwardFacing){
			  angle= angle- arc/xx;
			  }
			  else{
			  angle= angle+ arc/xx;
			  }
			}
			ctxRef.restore();
	   if (!llc) {
			return (mainCanvas);
		} else {
			return;
		}
		}
	
		ctxRef.save();
		var ay =height;
		var extraY=ay-ay*Math.cos(angle*Math.PI/180);
		var extraX=height*Math.sin(angle*Math.PI/180);

		ctxRef.translate(xpos-width/2-extraX, ypos+extraY);
		ctxRef.rotate(-angle*Math.PI/180);
		var rto = imginfo[2]/imginfo[3];
		var rto2 = width/height;


		
		if(imgObj){

			if(rto2>rto){
			ctxRef.drawImage(imgObj, imginfo[0], imginfo[1],imginfo[2],imginfo[3],q,r,height*rto,height);
			}
			else{
			ctxRef.drawImage(imgObj, imginfo[0], imginfo[1],imginfo[2],imginfo[3],q,r,width,width/rto);
			}
			ctxRef.restore();
		}
		else{

			var imgObj = new Image();
			imgObj.onload = function() {
			if(rto2>rto){
			ctxRef.drawImage(imgObj, imginfo[0], imginfo[1],imginfo[2],imginfo[3],q,r,height*rto,height);
			}
			else{
			ctxRef.drawImage(imgObj, imginfo[0], imginfo[1],imginfo[2],imginfo[3],q,r,width,width/rto);
			}
			ctxRef.restore();
			}
			imgObj.src = image;
		}




		    if(gray=='2'){
		      var imageData = ctxRef.getImageData(xpos-width / 2, ypos, width, height);
		      var data = imageData.data;
		      for(var i = 0; i < data.length; i += 4) {
		        var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
		        data[i] = brightness;
		        data[i + 1] = brightness;
		        data[i + 2] = brightness;
		      }
		      ctxRef.putImageData(imageData, xpos-width / 2, ypos);

		    }
		
		if (!llc) {
		return (mainCanvas);
		} else {
		return;
		}
	}	
	swidth = swidth*canwidth/445;

		if(effect==2){
			var blur = 15;
		    ctxRef.shadowColor = color;
		    ctxRef.shadowOffsetX = 0;
		    ctxRef.shadowOffsetY = 0;
		    ctxRef.shadowBlur = blur;
		}


		if(effect==3){
		    ctxRef.strokeStyle = stroke;
		    if(swidth<0){
				ctxRef.lineWidth = -2*swidth;
		    }
		    else{
		    ctxRef.lineWidth = swidth;
			}
		}
		
		if(effect==4){
		    ctxRef.shadowOffsetX = -swidth;
			ctxRef.shadowOffsetY = -swidth;
			ctxRef.shadowColor = "rgba(0,0,0,1)";
		}


	
	if(inputtype==2){
			ctxRef.font =  (parseInt(areafSize)+'pt') + ' ' + fName;	
	if(type==1){
		var maxlinenumber= $("input[name='cstmfy_wrap[]']:eq(" + eqn + ")").val();
		wrapText(ctxRef, text, xpos, ypos, width, fName,parseInt(areafSize),align,valign,maxlinenumber,line_height,height,eqn,type,startAngle,angle,inwardFacing,diameter,textHeight,textMaxHeight,clockwise,effect);		
		return (mainCanvas);
		}
		
		ctxRef.save();
		 var ay =width/2;					 	 
		 var extra=ay*Math.sin(angle*Math.PI/180);
		 var extra2=ay-ay*Math.cos(angle*Math.PI/180);
		 var ad =height;
		 var extraY=ad-ad*Math.cos(angle*Math.PI/180);
		 var extraX=ad*Math.sin(angle*Math.PI/180);

		 if(type>2){
	        var dy = (adjust / 2-  textHeight / 2 + fonts / 2)
	        var v = dy* Math.sin(angle * Math.PI / 180);
	        var x = -dy* Math.cos(angle * Math.PI / 180);
	        ctxRef.translate(xpos - extra2 - extraX-v, ypos - extra + extraY+x);
	    }else{
			 ctxRef.translate(xpos-extra2-extraX, ypos-extra+extraY);
			 ctxRef.rotate(-angle*Math.PI/180);	
		}

		 var maxlinenumber= $("input[name='cstmfy_wrap[]']:eq(" + eqn + ")").val();
		wrapText(ctxRef, text, 0, 0, width, fName,parseInt(areafSize),align,valign,maxlinenumber,line_height,height,eqn,type,startAngle,angle,inwardFacing,diameter,textHeight,textMaxHeight,clockwise);	
		ctxRef.restore();
		 return (mainCanvas);
		
	}


       if(style==2 && text.length>1){

       	if(type==2){
			ctxRef.save();
			var ay =width/2;					 	 
			var extra = ay * Math.sin(angle * Math.PI / 180);
			var extra2 = ay - ay * Math.cos(angle * Math.PI / 180);
			var ad = height;
			var extraY = ad - ad * Math.cos(angle * Math.PI / 180);
			var extraX = ad * Math.sin(angle * Math.PI / 180);
			ctxRef.translate(xpos - extra2 - extraX, ypos - extra + extraY);
			ctxRef.rotate(-angle*Math.PI/180);
			xpos = 0;
			ypos=0;
			}
			



		if(fcase2==1){
		 text[1]= text[1].toUpperCase(); 
		}
		if(fcase2==2){
		 text[1]= text[1].toLowerCase();
		}	


		var fixalign = width/2-get_tex_width('W', areafSize + 'pt ' + fName)/2;

			if(text[0]){
				ctxRef.font = areafSize + 'pt ' + fName;	
		       	ctxRef.fillText(text[0],xpos-fixalign-get_tex_width(text[0], areafSize + 'pt ' + fName)/2,ypos+fonts/2+parseInt(areafSize)/2);
		       }

	       if(text[1]){

		       	ctxRef.font = fSize2 + 'pt ' + fName2;	

				ctxRef.fillText(text[1],xpos+xpos2-fixalign-get_tex_width(text[1], fSize2 + 'pt ' + fName2)/2,ypos+ypos2+fonts2/2+parseInt(areafSize)/2);
			}

			  return (mainCanvas);

       }


        if(style==3 && text.length>2){
			if(type==2){
			ctxRef.save();
			var ay =width/2;					 	 
			var extra = ay * Math.sin(angle * Math.PI / 180);
			var extra2 = ay - ay * Math.cos(angle * Math.PI / 180);
			var ad = height;
			var extraY = ad - ad * Math.cos(angle * Math.PI / 180);
			var extraX = ad * Math.sin(angle * Math.PI / 180);
			ctxRef.translate(xpos - extra2 - extraX, ypos - extra + extraY);
			ctxRef.rotate(-angle*Math.PI/180);
			xpos = 0;
			ypos=0;
			}
			
        	var a = text[0];
        	var b = text[1];
        	var c = text[2];

	        if(fcase2==1){
			 b=b.toUpperCase(); 
			}
			if(fcase2==2){
			 b= b.toLowerCase();
			}	

			if(fcase3==1){
			 c= c.toUpperCase(); 
			}
			if(fcase3==2){
			 c= c.toLowerCase();
			}	

        	var fixalign = width/2-get_tex_width('W', areafSize + 'pt ' + fName)/2;

			if(text[0]){
				ctxRef.font = areafSize + 'pt ' + fName;	
		       	ctxRef.fillText(text[0],xpos-fixalign-get_tex_width(a, areafSize + 'pt ' + fName)/2,ypos+fonts/2+parseInt(areafSize)/2);
		       }

	       if(text[1]){

		       	ctxRef.font = fSize2 + 'pt ' + fName2;	

				ctxRef.fillText(b,xpos+xpos2-fixalign-get_tex_width(b, fSize2 + 'pt ' + fName2)/2,ypos+ypos2+fonts2/2+parseInt(areafSize)/2);
			}

			if(text[2]){
				ctxRef.font = fSize3 + 'pt ' + fName3;	

				ctxRef.fillText(c,xpos+xpos2+xpos3-fixalign-get_tex_width(c, fSize3 + 'pt ' + fName3)/2,ypos+ypos3+fonts3/2+parseInt(areafSize)/2);
			}
			if(type==2){
				ctxRef.restore();
			}

		  	return (mainCanvas);

	    }

	    ctxRef.font = fSize + ' ' + fName;	
	    var fixalign = textWidth/2;

		if(align=='left'){
			var fixalign = width/2;
		}
		if(align=='right'){
			var fixalign = -width/2+textWidth;
		}
		if(align=='center'){
			var fixalign = textWidth/2;
		}
	
		if(type==1){



		  if(swidth<0 && effect==3){
		  	ctxRef.strokeText(text,xpos-fixalign,ypos+fonts/2+parseInt(fSize)/2);
		  }

		  ctxRef.fillText(text,xpos-fixalign,ypos+fonts/2+parseInt(fSize)/2);

		  if(swidth>0 && effect==3){
		  	ctxRef.strokeText(text,xpos-fixalign,ypos+fonts/2+parseInt(fSize)/2);
		  }
		  
		  if(effect==4){
			  ctxRef.shadowOffsetX = swidth;
				ctxRef.shadowOffsetY = swidth;
				ctxRef.shadowColor = "rgba(255,255,255,1)";	
				ctxRef.fillText(text,xpos-fixalign,ypos+fonts/2+parseInt(fSize)/2);
		  }

		  return (mainCanvas);
	  }
	  
	if(type==2){
		 ctxRef.save();
		 var ay =width/2;					 	 
		var extra = ay * Math.sin(angle * Math.PI / 180);
        var extra2 = ay - ay * Math.cos(angle * Math.PI / 180);
        var ad = height - fonts / 2 - parseInt(fSize) / 2;
        var extraY = ad - ad * Math.cos(angle * Math.PI / 180);
        var extraX = ad * Math.sin(angle * Math.PI / 180);
        ctxRef.translate(xpos - extra2 - extraX, ypos + fonts / 2 + parseInt(fSize) / 2 - extra + extraY);
		 ctxRef.rotate(-angle*Math.PI/180);
		 ctxRef.textAlign = align;	
		var fix = 	0;	 
		if(align=='left'){
			fix = -width/2;
		}
		if(align=='right'){
			fix = width/2;
		}
		
		if(swidth<0 && effect==3){
		  	ctxRef.strokeText(text,fix,0);
		 }
		ctxRef.fillText(text,fix,0);
		if(swidth>0 && effect==3){
		  	ctxRef.strokeText(text,fix,0);
		 }
		
		if(effect==4){
			  ctxRef.shadowOffsetX = swidth;
				ctxRef.shadowOffsetY = swidth;
				ctxRef.shadowColor = "rgba(255,255,255,1)";	
				ctxRef.fillText(text,fix,0);
		  }
		 ctxRef.restore();
		 return (mainCanvas);
	  }
	  

  	if(isRTL(text[0])){text = text.split('').reverse().join('')}
	
  if (((['left', 'center'].indexOf(align) > -1) && inwardFacing) || (align == 'right' && !inwardFacing)) text = text.split('').reverse().join('');
    ctxRef.save();
         var ay =width/2;            
    var extra = ay * Math.sin(angle * Math.PI / 180);
        var extra2 = ay - ay * Math.cos(angle * Math.PI / 180);
        var ad = height;
        var extraY = ad - ad * Math.cos(angle * Math.PI / 180);
        var extraX = ad * Math.sin(angle * Math.PI / 180);
        var dy = (adjust / 2-  textHeight / 2 + fonts / 2)
        var v = dy* Math.sin(angle * Math.PI / 180);
        var x = -dy* Math.cos(angle * Math.PI / 180);
        ctxRef.translate(xpos - extra2 - extraX-v, ypos - extra + extraY+x);

	    startAngle += ((Math.PI) * !inwardFacing);
	    ctxRef.textBaseline = 'middle';
	    ctxRef.textAlign = 'center';
	    if (align == 'center') {
	        for (var j = 0; j < text.length; j++) {
	            var charWid = ctxRef.measureText(text[j]).width;
	      if (inwardFacing) {
	      var kerning = 0;
	      } else {
	      var kerning = 2*Math.tan((charWid / 2) / (diameter / 2 - textHeight ))* getTextHeight(fName, parseInt(fSize), text[j]).height;
	      }
            startAngle += ((charWid + (j == text.length - 1 ? 0 : kerning )) / (diameter / 2 - textHeight / 2 + fonts / 2)) / 2 * -clockwise;
        }
    }
    ctxRef.rotate(startAngle-(angle * Math.PI / 180));
    for (var j = 0; j < text.length; j++) {
        var charWid = ctxRef.measureText(text[j]).width;
		if (inwardFacing) {
		var kerning = 0;
		} else {
		var kerning = 2*Math.tan((charWid / 2) / (diameter / 2 - textHeight))* getTextHeight(fName, parseInt(fSize), text[j]).height;
		}
        ctxRef.rotate((charWid / 2) / (diameter / 2 - textHeight / 2 + fonts / 2) * clockwise);
        if (inwardFacing) {
        	var yy = (0 - diameter / 2+textMaxHeight/2 - textHeight/2);
        } else {
        	var yy = -1 * (0 - diameter / 2 + textHeight) + fonts / 2;
        }

		if(swidth<0 && effect==3){
		  ctxRef.strokeText(text[j],0, yy);
		 }

		ctxRef.fillText(text[j],0, yy);
		if(swidth>0 && effect==3){
		  ctxRef.strokeText(text[j],0, yy);
		 }
		 if(effect==4){
			 ctxRef.shadowOffsetX = swidth;
			ctxRef.shadowOffsetY = swidth;
			ctxRef.shadowColor = "rgba(255,255,255,1)";	
			ctxRef.fillText(text[j],0, yy);
		  }

        ctxRef.rotate((charWid / 2 + kerning) / (diameter / 2 - textHeight / 2 + fonts / 2) * clockwise); // rotate half letter
    }
     ctxRef.restore();
	return (mainCanvas);

	
};


function p_button(tis){
		if($(tis).val()==1){$('.personalizebutton').hide();}else{$('.personalizebutton').show();}

		if($(tis).val()>2){
			$('.loadfirst,.cstmfy_preview_button,.previewbutton').hide();
			$('.cstmfy_load').val(1);
		}else{
			$('.loadfirst,.cstmfy_preview_button').show();
			$('.c_p_b').trigger('change');
		}
	}

	function checkboxhidden(tis){

		if(jQuery(tis).is(':checked')){
			jQuery(tis).siblings('input').prop('disabled',true);
		}
		else{
			jQuery(tis).siblings('input').prop('disabled',false);
		}
	}
	
 $(window).ready(function() {		
	  WebFontConfig = {
		custom: { families: fontfamilies },
		active: function() { 
			var imgObj3 = new Image();
				imgObj3.onload=function(){
				$('.pplr canvas').remove();
					ChangeCanvas(0);
				}
			imgObj3.src = $("#ming").attr('src');
		},
		inactive: function() {
			console.log('font error');
			var imgObj3 = new Image();
				imgObj3.onload=function(){
				$('.pplr canvas').remove();
					ChangeCanvas(0);
				}
			imgObj3.src = $("#ming").attr('src');
		},
		
		timeout: 3000
	  }; 
	  
	setTimeout(function() {
		if(!$('.pplr canvas')[0]){
			var imgObj3 = new Image();
				imgObj3.onload=function(){
					ChangeCanvas(0);
				}
			imgObj3.src = $("#ming").attr('src');	
		}
	},3100);
	
	  
  });
  
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(this).parents('.tab-pane').find("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $(this).parents('.tab-pane').find("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
});

function selectmonogram(tis){

		var index = $(tis).parents('.tab-pane').index();

		if($(tis).val()==2){
			$(tis).parents('.tab-pane').find('.monogrm2').show();
			$(tis).parents('.tab-pane').find('.monogrm3').hide();
			$(tis).parents('.tab-pane').find('.halign').hide();
			$(tis).parents('.tab-pane').find('.cstmfy_cfont').val(1);
			$(tis).parents('.tab-pane').find('.cstmfy_cfonts').hide().siblings('.fontname').hide();

		}
		if($(tis).val()==3){
			$(tis).parents('.tab-pane').find('.monogrm3').show();
			$(tis).parents('.tab-pane').find('.monogrm2').show();
			$(tis).parents('.tab-pane').find('.halign').hide();
			$(tis).parents('.tab-pane').find('.cstmfy_cfont').val(1);
			$(tis).parents('.tab-pane').find('.cstmfy_cfonts').hide().siblings('.fontname').hide();

		}

		if($(tis).val()==1){
			$(tis).parents('.tab-pane').find('.monogrm2').hide();
			$(tis).parents('.tab-pane').find('.monogrm3').hide();
			$(tis).parents('.tab-pane').find('.halign').show();
			$(tis).parents('.tab-pane').find('.cstmfy_cfonts').show();

		}

	}

	function previewbutton(tis){
		if($(tis).val()>1){
			$('.previewbutton').show();
		}
		else{
			$('.previewbutton').hide();
		}
	}

	function check_charge(event){
			$("select[name='cstmfy_addition[]']").each(function() {
			if ($(this).val() >1) {
			$(this).parents('.clone').find('.pplrprice').show();
				if(pricechange !==''){
				}
				else{
					$('#myModal4').modal('show');
				}
			}
			else{$(this).parents('.clone').find('.pplrprice').hide();}
			});

		};

$("form#creategroup").submit(function(event){

var request;

if($('#creategroup .creategroup').length < 2){
event.preventDefault();
alert('Create at least two items');
return;
}

var grpval =$("#myModal").find('[name="cname"]').val();
		var element = [];
		$("#myModal").find('[name="lname[]"]').each(function(){
			element[$(this).val()]=[0,1];
		});
		grpcolor[grpval]= element;

// Prevent default posting of form - put here to work in case of errors
    event.preventDefault();

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "ajaxcolor.php",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        console.log(response);
		var response1 = JSON.parse(response);
        $("#myModal").find('[name="cname"]').val('');
		$("#myModal").find('.colorlist:not(:last-child)').remove();

		$("#myModal").modal('hide');
		$('.cstmfy_color').append($('<option>', {
		value: response1[0],
		text: response1[0]
		}));
		$('.cstmfy_color:visible').last().val(response1[0]).trigger('change');
		ShopifyApp.flashNotice(response1[0] + response1[1]);
	
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });


});


$(function()
{

$('.demo2').colorpicker();

    $(document).on('click', '#creategroup .btn-add', function(e)
    {
        e.preventDefault();
		
		    $('.demo2').colorpicker('destroy')

        var controlForm = $('.color:first'),
            currentEntry = $(this).parents('.colorlist:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

        controlForm.find('.colorlist:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
			
	$('.demo2').colorpicker()
			
    }).on('click', '#creategroup .btn-remove', function(e)
    {
		$(this).parents('.colorlist:first').remove();

		e.preventDefault();
		return false;
	});
	
	
    $(document).on('click', '#creategroup .editclass', function(e)
    {
        e.preventDefault();
		
		    $('.demo2').colorpicker('destroy')

        var controlForm = $('.color:first'),
            currentEntry = $('.color .colorlist:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

		$('.demo2').colorpicker();
			
    })	
	
	
	
});




function ajaxupload(event,form,href,eclass,e,f,g,l,m,imagegroup){

var request;

// Prevent default posting of form - put here to work in case of errors
    event.preventDefault();

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(form);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = new FormData(form);

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
    	      xhr: function()
        {
          var xhr = new window.XMLHttpRequest();
          //Upload progress
          xhr.upload.addEventListener("progress", function(evt){
           if (evt.lengthComputable) {
                    var percentComplete = (evt.loaded / evt.total) * 100;
                    jQuery(".progress").width(percentComplete + "%");
                }
          }, false);
          return xhr;
        },
        url: href,
        type: "post",
        data: serializedData
		,
        cache: false,
        contentType: false,
        processData: false
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
		        console.log(response);
				
		var response1 = JSON.parse(response);
				        console.log(response1[0]);
		if(eclass){
			$(eclass).append($('<option>', {
			value: response1[0],
			text: response1[0]
			}));

			$("#myModal2").find('[name="gname"]').val('');
			$("#myModal2").find('.fontlist:not(:last-child)').remove();

			$("#myModal2").modal('hide');
			$(eclass+':visible').val(response1[0]);
			
		}

		if(e){
			var fontfmly = [];
			var restext = '';
			for (var y = 0; y < Object.keys(response1).length; ++y) {
				if(response1[y][2]>0){

					if(e=='select.font'){

						$(e).append($('<option>', {
						value: 'font/'+Shopify_shop+'/'+response1[y][0],
						text: response1[y][0]
						}));

						$('#creategroupf select.font2').append($('<option>', {
						value: response1[y][0],
						text: response1[y][0]
						}));
						
						$(e+':visible').last().val('font/'+Shopify_shop+'/'+response1[y][0]).trigger('change');
					}
					else{

						$(e).append($('<option>', {
						value: response1[y][0],
						text: response1[y][0]
						}));

						$('select.font').append($('<option>', {
							value: 'font/'+Shopify_shop+'/'+response1[y][0],
							text: response1[y][0]
						}));
						
					}

				restext += '<div style="display: block;width:100%;text-align: center;padding: 10px;color: green;" class="presult">'+response1[y][0]+response1[y][1]+'</div>';
				}
				else{
					restext += '<div style="display: block;width:100%;text-align: center;padding: 10px;color: red;" class="presult">'+response1[y][0]+response1[y][1]+'</div>';
				}

			}

			$(form).append(restext);

			$(form).find('.canvas').remove();

			var fontface = '';
			var fNamearray = [];
			for (var y = 0; y < Object.keys(response1).length; ++y) {
				if(response1[y][2]>0){

				fontfmly.push(response1[y][0].replace(".ttf", ""));

       			 fontface += "@font-face {font-family: '" + response1[y][0].replace(".ttf", "") + "';src: url('" + 'font/'+Shopify_shop+'/'+response1[y][0]+"') format('truetype');} ";

       			 fNamearray.push(response1[y][0].replace(".ttf", ""));
       			 $('body').append("<div style='font-family:"+response1[y][0].replace(".ttf", "")+";width:0px;height:0px;position:absolute;left:100%;'>div</div>");
       			}
			}
			$('body').append("<style>" + fontface + "</style>");

 			$inputs.prop("disabled", false);

 			$('#creategroupf').show();
 			if(!g){
 				$("#myModal2").modal('hide');
 			}


			if(fontfmly.length>0){
			  WebFontConfig = {
				custom: { families: fontfmly },
				active: function() { 
					$(e+':visible').trigger('change');
				},
				inactive: function() {
					$(e+':visible').trigger('change');
				},
				
				timeout: 4000
			  };
			}

		}

		if(f){

			$("#myModal3").find('[name="dname"]').val('');
			$("#myModal3").find('.droplist:not(:last-child)').remove();

			$("#myModal3").modal('hide');
			$(f).append($('<option>', {
			value: response1[0],
			text: response1[0]
			}));
			$(f+':visible').val(response1[0]).change();
		}
		if(l){

			var restext = '';

		      for (var y = 0; y < Object.keys(response1).length; ++y) {
		        if(response1[y][2]==1){
		        $(l).prepend('<option data-value="images/'+Shopify_shop+'/'+response1[y][0]+'"  value="images/'+Shopify_shop+'/'+response1[y][0]+'">'+response1[y][0]+'</option>');

						if(m){
							$('.imagesub:visible').val('images/'+Shopify_shop+'/'+response1[y][0]).trigger('change');
						}
						else{
							$('.imagemain:visible').val('images/'+Shopify_shop+'/'+response1[y][0]).trigger('change');
							$('.imagemain:visible').siblings('.thumbimgselect').find('img').attr('src','images/'+Shopify_shop+'/'+response1[y][0]);
						}
					restext += '<div style="display: block;width:100%;text-align: center;padding: 10px;color: green;" class="presult">'+response1[y][0]+response1[y][1]+'</div>';
				}
				else{
					restext += '<div style="display: block;width:100%;text-align: center;padding: 10px;color: red;" class="presult">'+response1[y][0]+response1[y][1]+'</div>';
				}

		      }
		      $(form).append(restext);
			$(form).find('.canvas').remove();

		}
		
		if(imagegroup){
			$('.cstmfy_cimage').prepend($('<option>', {
			value: response1[0],
			text: response1[0]
			}));
			$("#myModal20").find('[name="gname"]').val('');
			$("#myModal20").find('.colorlist:not(:last-child)').remove();
			$('.cstmfy_cimage:visible').val(response1[0]);
			
			$('.cstmfy_cimage:visible').parents('.tab-pane').find('.min_upload').hide();
			$('.cstmfy_cimage:visible').parents('.tab-pane').find('.halign').hide();
			
			$(form).find('.canvas').remove();
			$("#myModal20").modal('hide');
			$("#myModal20").find("input, select, button, textarea").prop("disabled", false);
		}
		
		
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });




}



$("form#creategroupf").submit(function(event){

ajaxupload(event,this,"ajaxfontgroup.php","select.cstmfy_cfont",false);

});



$("form#creategroupd").submit(function(event){

	event.preventDefault();

if($('#creategroupd .creategroup').length < 2){
alert('Create at least two items');
return;
}
var dropval =$('.dropname').val();
var element = [];
$('.droplistval').each(function(){
    element[$(this).val()]=[0,1];

});

drop[dropval]= element;

ajaxupload(event,this,"ajaxdropdown.php",false,false,"select.cstmfy_drop");

});


$(function()
{

    $(document).on('click', '#creategroupf .btn-add', function(e)
    {
        e.preventDefault();
		

        var controlForm = $('.pfont:last'),
            currentEntry = $(this).parents('#creategroupf').find('.fontlist:last'),
            newEntry = $(currentEntry.clone(true)).appendTo(controlForm);
			
			
    }).on('click', '#creategroupf .btn-remove', function(e)
    {
		if($(this).parents('#creategroupf').find('.fontlist').length>1){
		$(this).parents('.fontlist:first').remove();
		}

		e.preventDefault();
		return false;
	});
});


$(function()
{

    $(document).on('click', '#creategroupd .btn-add', function(e)
    {
        e.preventDefault();
		

        var controlForm = $('.pdrop:last'),
            currentEntry = $(this).parents('.droplist:last'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

        controlForm.find('.droplist:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
			
			
    }).on('click', '#creategroupd .btn-remove', function(e)
    {
		$(this).parents('.droplist:first').remove();

		e.preventDefault();
		return false;
	});
});





$("form#crd2").submit(function(event){
	$('.canvas,.presult').remove();
	$("form#crd2").append('<span class="canvas"><div class="progress"></div></div>');
ajaxupload(event,this,"ajaxfont.php",false,"#creategroupf select.font2",false,true );
});


$("form#crd3").submit(function(event){
	$('.canvas,.presult').remove();

	$("form#crd3").append('<span class="canvas"><div class="progress"></div></div>');
ajaxupload(event,this,"ajaxfont.php",false,"select.font");
});


  $("form#crd4").submit(function(event){
  	$('.canvas,.presult').remove();
      $("form#crd4").append('<span class="canvas"><div class="progress"></div></div>');

      ajaxupload(event,this,"ajaximage.php",false,false,false,false,"select.imageupload");
  }
 );

  $("form#crd5").submit(function(event){
  	$('.canvas,.presult').remove();
      $("form#crd5").append('<span class="canvas"><div class="progress"></div></div>');

      ajaxupload(event,this,"ajaximage.php",false,false,false,false,"select.imageupload",true);
  }
 );
 
   $("form#creategroup5").submit(function(event){
  	$('.canvas,.presult').remove();
      $("form#creategroup5").append('<span class="canvas"><div class="progress"></div></div>');
	  
	  var grpval =$('.crimgn').val();
		var element = [];
		$('.crimgnl').each(function(){
			element[$(this).val()]=[0,1];
		});
		grpimg[grpval]= element;

      ajaxupload(event,this,"ajaximagegroup.php",false,false,false,false,false,true,true);
  }
 );


var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-alpha1/html2canvas.js";
document.getElementsByTagName("head")[0].appendChild(script);

function dataurlToBlobUrl(url) {
    var parts = url.split(',', 2);
    var mime = parts[0].substr(5).split(';')[0];
    var blob = b64toBlob(parts[1], mime);
    return URL.createObjectURL(blob);
}

function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {
        type: contentType
    });
    return blob;
}


function createImgToPrint(id,tis,event) {
if($(tis).hasClass('download')){
event.preventDefault();
$(tis).text('Prepairing');
html2canvas([document.getElementById(id)], {
	logging: true,
	useCORS: true,
	proxy: "https://doshopify.com/product-personalizer/server/php/proxy.php",
	onrendered: function(canvas) {
    $('.download').attr("href", dataurlToBlobUrl(canvas.toDataURL("image/png", 1.0)));
	$('.download').text('Download');
	$('.download').addClass('btn-success');
	$('.download').removeClass('download');
	}
});
}
else{
$(tis).addClass('download');
$('.download').removeClass('btn-success');
$(tis).text('Save Image');
}
}

  function pplrpopupimage2(tis,e){
    e.preventDefault();
    if($(".crop-modal2:visible")[0]){
      $(".crop-modal2").remove();
      return;
    }
    $(tis).after('<div  class="crop-modal2"></div>');
    for (var i = 0; i < $(tis).siblings('select').find('option').length; i++) {
      $('.crop-modal2').append('<a class="thumbimg2" href="" onclick="pplr_select2(this,event)"><span  data-src="'+$(tis).siblings('select').find('option').eq(i).val()+'" style="font-family:\''+$(tis).siblings('select').find('option').eq(i).val().split("/").pop().replace('product-personalizer.myshopify.com/', '').replace('.ttf', '').replace(/_/g, '')+'\';" >'+'ABC'+' </span> '+$(tis).siblings('select').find('option').eq(i).val().split("/").pop().replace('product-personalizer.myshopify.com/', '').replace('.ttf', '')+'</a>');
    }
    $(".crop-modal2").css("width", 250);
    $(".crop-modal2").css("max-height", 260);
    $(".crop-modal2").css("overflow-y", 'scroll');
    $(".crop-modal2").show();
    //$(".bhoechie-tab-content").mCustomScrollbar("destroy"); 
  }
  function pplr_select2(tis,e){
    e.preventDefault();
    $(tis).parent().siblings('select').val($(tis).find('span').attr('data-src')).trigger('change');
    $(tis).parents('.input-group').siblings('input').val($(tis).find('span').attr('data-src').replace('.ttf', '').replace(/_/g, ' ').replace(/-/g, ' '));
    $(".crop-modal2").remove();
  }
  
  function search(tis){
	 if ($.trim(jQuery(tis).val()) !== '') {
		$(tis).parent().siblings().addClass('hiden');
	}
	else{
		$(tis).parent().siblings().removeClass('hiden');
	}
	var meta = $(tis).parent().siblings('[data-src]').filter(function() {
   				 return $(this).attr('data-src').toLowerCase().indexOf(jQuery(tis).val().toLowerCase()) > -1;
		});

	meta.removeClass('hiden');
}

 $( function() {
    $( ".color" ).sortable();
    $( ".coler" ).disableSelection();

	$( "#conditions" ).sortable({
		update: function( event, ui ) {
		updateis();
		updatetarget();
	}});

   $( ".pfont" ).sortable();
   $( ".pfont" ).disableSelection();
   $( ".pdrop" ).sortable();
   $( ".pdrop" ).disableSelection();
   $( ".nav-tabs" ).sortable({
	update: function( event, ui ) {
		$('.area').remove();

		var whn = false;
		if($('#conditions .when').length>0){
			whn = true;
		}
		$('ul#myTab > li').not('#last').not('#lix').each(function(i){
			var v = $(this).attr('id').split('li')[1]; 
			if(parseInt(v) !== (i + 1)){
					var fieldtext =$(this).find('.djkks').text();
					var b = v+'.'+fieldtext.trim();
					if(whn){
						var abc = $('.when option[data-val="'+v+'.'+fieldtext.trim().replace(/"/g, '')+'"]'); 
								abc.attr('value',(i + 1));
								abc.text((i + 1)+'.'+fieldtext.trim());
								abc.attr('data-val',(i + 1)+'.'+fieldtext.trim());
						var abc = $('.target option[data-val="'+v+'.'+fieldtext.trim().replace(/"/g, '')+'"]'); 
							abc.attr('value',(i + 1));
							abc.text((i + 1)+'.'+fieldtext.trim());
							abc.attr('data-val',(i + 1)+'.'+fieldtext.trim());
					}
				}
		});

		$('ul#myTab > li').not('#last').not('#lix').each(function(i){
			var getAttr = $(this).attr('id').split('li');
			$("#tab"+getAttr[1]).attr('data-sort',  (i + 1));	
			$(this).attr('id', 'li' + (i + 1)); 
			$(this).find('a').attr('href','#tab'+ (i + 1));
			$("#ming").after('<div class="area" onmouseover="areaindexshow(this)" ondragstart="dragStart(event,this)" ondragend="dragEnd(event,this)"></div>');	
		});

		$('.clone').sort(function (a, b) {
		  var contentA =parseInt( $(a).attr('data-sort'));
		  var contentB =parseInt( $(b).attr('data-sort'));
		  return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
		}).prependTo($(".tab-content"));

		$('.clone').not('#tabx').each(function(i){
			$(this).attr('id', 'tab' + (i + 1));
		});

		$('#cfo').html('');

		$('ul#myTab > li').not('#last').not('#lix').each(function(i){
			var text = $(this).find('.djkks').text();
			$("#cfo").append("<option selected value='"+(i + 1)+"'>"+text+"</option>");
		});
		$('#cfo').multipleSelect('destroy');
		$('#cfo').multipleSelect();

		$('.pplr canvas').remove();
		ChangeCanvas(0);
		dragresige();
		$(".area:eq(" + $('#myTab .active').index() + ")").show();
		   $('.target').multipleSelect('destroy');
	}
  });

  $( ".nav-tabs" ).disableSelection();
  }
);


$(document).ready(function() {
    // jQuery(".bhoechie-tab-content").mCustomScrollbar({
    //   theme: "dark-thin"
    // });

});

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function escapedoublequote(text) {
    return text.toString().replace(/"/g, "");
}

        var whenlist = [];
        var tgt = '';

function trigger_when(kk){
	    var eqn = 0;
	var abc = $(".when");
	if(kk){
		abc = kk;
	}
    $("select[name='cstmfy_input_type[]']").each(function() {

        var dropnametarget = $("[name='cstmfy_name[]']:eq(" + eqn + ")").val();
         tgt +='<option data-val="' + (eqn + 1)+'.'+escapedoublequote(dropnametarget) +'" value="' + (eqn + 1) + '" >' + (eqn + 1) + '.' + dropnametarget + '</option>';


        var cstmfy_name = $("[name='cstmfy_name[]']:eq(" + eqn + ")").val();
        if (cstmfy_name == '' && $("textarea[name='cstmfy_oindex[]']:eq(" + eqn + ")").val() !== '') {
            cstmfy_name = $("textarea[name='cstmfy_oindex[]']:eq(" + eqn + ")").val();
        }

        if (cstmfy_name == '') {
            cstmfy_name = eqn;
        }
        var input_type = $(this).val();


		if (input_type == 7 || input_type == 8 || input_type == 3 || input_type == 4 || input_type == 9 || input_type == 10) {

	            var groupname = $("select[name='cstmfy_cimage[]']:eq(" + eqn + ")").val();

	            if (input_type == 3) {
	                if (groupname !== '1') {
	                  

	                            abc.append('<option data-val="'+(eqn + 1)+'.'+ escapedoublequote(cstmfy_name) + '"  value="' + (eqn + 1) + '" >' +(eqn + 1)+'.'+ cstmfy_name + '</option>');


	                }

	            }
			else if (input_type == 4) {
				var colorname = $("select[name='cstmfy_fcolorc[]']:eq(" + eqn + ")").val();	
				     if (colorname !== '1') {

	                            abc.append('<option data-val="'+(eqn + 1)+'.'+ escapedoublequote(cstmfy_name) + '" value="' + (eqn + 1) + '" >' +(eqn + 1)+'.'+ cstmfy_name + '</option>');

	                }
			
			}else {


	                        abc.append('<option data-val="'+(eqn + 1)+'.'+ escapedoublequote(cstmfy_name) + '" value="' + (eqn + 1) + '" >'+(eqn + 1)+'.' + cstmfy_name + '</option>');

	            }

	        } else {

	                abc.find("option[value='" + (eqn + 1) + "']").remove();
	        }

	                eqn = eqn + 1;

    });
	}



function updatecondition(t) {
    if (t) {
        $('.area').hide();
    }


trigger_when();


    $(".when").each(function() {
		var that = $(this);
		var map = {};
			that.find('option').each(function () {
			    if (map[this.value]) {
			        $(this).remove()
			    }
			    map[this.value] = true;
			})

        if ($(this).find("option").length == 0) {
            $(this).parent().remove();
        } else {
            if ($(this).val()) {
                //selectIs(this,tgt,true);
            }
        }
    })

    if (p_products['variants'].length > 1) {
        $(".when").each(function() {
            if ($(this).find('option[value="id"]').length == 0) {
                $(this).append('<option value="id" >Variant (beta)</option>');
            }
        })

    }
  for (var j = 0; j < $(".target").length; j++) {
		var map = {};
		$('.target:eq('+j+') option').each(function () {
		    if (map[this.value]) {
		        $(this).remove()
		    }
		    map[this.value] = true;
		})
	}

}

function selectIs(tis,tgt,tt) {
	    
	if(!tgt){

	     
	    for (var j = 0; j < $("select[name='cstmfy_input_type[]']").length; j++) {
	    var dropnametarget = $("[name='cstmfy_name[]']:eq(" + j + ")").val();
	     tgt +='<option data-val="' +(parseInt(j) + 1)+'.'+ dropnametarget +'" value="' + (parseInt(j) + 1) + '" >' + (parseInt(j) + 1) + '.' + dropnametarget + '</option>';

	    }
	}

    $(tis).parents('.conds').find('.is').multipleSelect('destroy');

    var Isval = $("select[name='cstmfy_input_type[]']:eq(" + ($(tis).val() - 1) + ")").val();


    if (Isval == 7 || Isval == 9 || Isval == 10) {

        var dropname = $("select[name='cstmfy_drop[]']:eq(" + ($(tis).val() - 1) + ")").val();
        if (dropname !== '1') {

            var droplist = drop[dropname];
	if(!tt){
            $(tis).parents('.conds').find('.is').find('option').each(function() {
                if (!Array.isArray(droplist)) {
                    if (!droplist[escapeHtml($(this).val())]) {

                        $(this).remove();


                    }
                }

            })


            for (var y = 0; y < Object.keys(droplist).length; ++y) {
                if ($(tis).parents('.conds').find('.is').find('option[value="' + (decodeHtml(Object.keys(droplist)[y]).replace(/"/g,'\\"').replace(/'/g,'\\"')) + '"]').length == 0) {

                    $(tis).parents('.conds').find('.is').append('<option value="' + (Object.keys(droplist)[y]).replace(/"/g,'\\"').replace(/'/g,'\\"') + '" >' + Object.keys(droplist)[y] + '</option>');
                }

            }
        }

            update_target(tis,tgt);


        }

    }
	
	
    if (Isval == 3) {

        var groupname = $("select[name='cstmfy_cimage[]']:eq(" + ($(tis).val() - 1) + ")").val();
        if (groupname !== '1') {

            var grplist = grpimg[groupname];
	if(!tt){
            $(tis).parents('.conds').find('.is').find('option').each(function() {

                if (!grplist[escapeHtml($(this).val())]) {

                    $(this).remove();


                }

            })


            for (var y = 0; y < Object.keys(grplist).length; ++y) {
                if ($(tis).parents('.conds').find('.is').find("option[value='" + (Object.keys(grplist)[y]).replace(/"/g,'\\"').replace(/'/g,'\\"') + "']").length == 0) {

                    $(tis).parents('.conds').find('.is').append('<option value="' + (Object.keys(grplist)[y]).replace(/"/g,'\\"').replace(/'/g,'\\"') + '" >' + Object.keys(grplist)[y] + '</option>');
                }

            }
        }

            update_target(tis,tgt);


        }

    }


    if (Isval == 4) {

        var colorname = $("select[name='cstmfy_fcolorc[]']:eq(" + ($(tis).val() - 1) + ")").val();
        if (colorname !== '1') {

            var grplist = grpcolor[colorname];
	if(!tt){
            $(tis).parents('.conds').find('.is').find('option').each(function() {

                if (!grplist[escapeHtml($(this).val())]) {

                    $(this).remove();


                }

            })


            for (var y = 0; y < Object.keys(grplist).length; ++y) {
                if ($(tis).parents('.conds').find('.is').find("option[value='" + (Object.keys(grplist)[y]).replace(/"/g,'\\"').replace(/'/g,'\\"') + "']").length == 0) {

                    $(tis).parents('.conds').find('.is').append('<option value="' + (Object.keys(grplist)[y]).replace(/"/g,'\\"').replace(/'/g,'\\"') + '" >' + Object.keys(grplist)[y] + '</option>');
                }

            }
        }

            update_target(tis,tgt);


        }

    }






    if (Isval == 8) {

        $(tis).parents('.conds').find('.is option').each(function() {
            if ($(this).val() !== 'checked' && $(this).val() !== 'unchecked') {

                $(this).remove();
            }
        })


        if ($(tis).parents('.conds').find('.is').find("option[value='checked']").length == 0) {
            $(tis).parents('.conds').find('.is').append('<option value="checked" >checked</option>');

        }
        if ($(tis).parents('.conds').find('.is').find("option[value='unchecked']").length == 0) {
            $(tis).parents('.conds').find('.is').append('<option value="unchecked" >unchecked</option>');

        }
        update_target(tis,tgt);
    }

    if ($(tis).val() == 'id') {
        var p_variants = [];

        for (var j = 0; j < p_products['variants'].length; j++) {
            p_variants[p_products['variants'][j]['id']] = p_products['variants'][j]['title'];
        }
	if(!tt){
        $(tis).parents('.conds').find('.is option').each(function() {
            if (!p_variants[$(this).val()]) {
                $(this).remove();
            } else {
                $(this).text(p_variants[$(this).val()]);
            }
        })


        for (var j = 0; j < p_products['variants'].length; j++) {
            if ($(tis).parents('.conds').find('.is').find("option[value='" + p_products['variants'][j]['id'] + "']").length == 0) {
                $(tis).parents('.conds').find('.is').append('<option value="' + p_products['variants'][j]['id'] + '" >' + p_products['variants'][j]['title'] + '</option>');
            }
        }
            }

        update_target(tis,tgt, true);
    }
	if ($(tis).parents('.conds').find('.is').find("option[value='']").length == 0) {
		$(tis).parents('.conds').find('.is').append('<option value="" >None</option>');
	}
	
	if ($(tis).parents('.conds').find('.is').find("option:disabled").length == 0) {
		$(tis).parents('.conds').find('.is').find("option:disabled").remove();
	}
	
	if ($(tis).parents('.conds').find('.is').find("option:selected").length == 0) {
		$(tis).parents('.conds').find('.is').find("option[value='']").attr('selected','selected');
	}
	if(!tt){
	    $(tis).parents('.conds').find('.is').multipleSelect();
	}
}


function update_target(tis,tgt, k) {
    $(tis).parents('.conds').find('.target').multipleSelect('destroy');
    var Isval = $(tis).val();
    $(tis).parents('.conds').find('.target').find("option:disabled").remove();
    if (k) {

        $(tis).parents('.conds').find('.target').append(tgt);
		/*
			$(tis).siblings('.target').find('option').each(function () {
				var k = $(tis).parents('.conds').index();
				var l = $(tis).val();
				var m = this.value;
				if($('select.target option[value="'+m+'"][selected]:not([disabled])').length>1){
					$('select.target option[value="'+m+'"][selected]:not([disabled])').each(function () {

						if($(this).parents('.conds').index() !==k &&  $(this).parents('.target').siblings('.when').val() == l){

							
						}
					})
				}
			})
			
		*/

        if (!$(tis).parents('.conds').find('.target').find("option:selected")[0]) {
            $(tis).parents('.conds').find('.target').find("option").first().attr('selected', true);
        }

        $(tis).parents('.conds').find('.target').multipleSelect();
        return;

    }
	$(tis).parents('.conds').find('.target').append(tgt);
	
	var map = {};
	$(tis).parents('.conds').find('.target').find('option').each(function () {
	    if (map[this.value]) {
	        $(this).remove()
	    }
	    map[this.value] = true;
	})
	
    $(tis).parents('.conds').find('.target').find("option[value='" + Isval + "']").remove();
        if (!$(tis).parents('.conds').find('.target').find("option:selected")[0]) {
        $(tis).parents('.conds').find('.target').find("option:not([disabled])").first().attr('selected', true);
    }

    $(tis).parents('.conds').find('.target').multipleSelect();

}


function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}




function remove_condition(tis) {
    $(tis).parent().remove();
    updateis();
    updatetarget();
}
function copycondition(tis) {
		$('#conditions div.conds:last .target').multipleSelect('destroy');
		$('#conditions div.conds:last .is').multipleSelect('destroy');
	var last = $(tis).parent();
	$(last.clone(true,true)).appendTo($('#conditions'));
	var val = last.find('.when').val();
	var val2 = last.find('.is').val();
	$('#conditions div.conds:last .when').val(val);
	$('#conditions div.conds:last .is').val(val2);
    updateis();
    updatetarget()
}



function addcondition() {

	var connnn = '<div class="conds"><span class="fa fa-copy" onclick="copycondition(this);">	</span>	<span class="fa fa-remove" onclick="remove_condition(this);"> </span><span class="divwhen">When <select class="when form-control" name="when[]" onchange="selectIs(this)"><option disabled="" selected="">-- Select an option --</option></select></span> <span class="divis"><span class="hideis" ></span>is <select class="is" name="is0[]" multiple><option disabled="" selected="">-- Select an option --</option> </select> <span class="value"> </span> </span><span class="divthen">	Then <select class="showHide form-control" name="showhide[]"><option value="show">Show</option><option value="hide">Hide</option> </select></span><span class="divtarget"><span class="hidetarget" ></span> <select class="target" style="max-height:35px;margin-bottom:-10px;" multiple name="target0[]"><option disabled="" selected="">-- Select an option --</option></select></span></div>';

    $('#conditions').append(connnn);

	if ($('#conditions div').length >1 ) {
	   	 $('#conditions div:last .when').html($('#conditions div:first .when').html());
		$('#conditions div:last .when').trigger('change');

    } 
    else{
    	console.time("concatenation1");
	   	updatecondition(true);
	   $('#conditions div:last .when').trigger('change');
	   console.timeEnd("concatenation1");


    }
    console.time("concatenation2");
    updateis();
    updatetarget()
    console.timeEnd("concatenation2");

}


function updateis() {
    var x = 0;
    $('select.is').each(function() {

        $(this).attr('name', 'is' + x + '[]');
        x = x + 1;
    })
}


function updatetarget() {
    var x = 0;
    $('select.target').each(function() {

        $(this).attr('name', 'target' + x + '[]');
        x = x + 1;
    })
}

function showcondition(e, tis) {
    e.preventDefault();
    $('#tabx').addClass('active').siblings().removeClass('active');
    $('.fieldtab').removeClass('active');

}

function imgsizeh(tis) {
    if (jQuery(tis).val() > 1) {
        //jQuery('.imgsize').show();
    } else {
        //jQuery('.imgsize').hide();
    }
}



function cseffect(tis){
	$(tis).parents('.tab-pane').find('.cseffect,.cseffectw').hide();
    if ($(tis).val() == 3) {
        $(tis).parents('.tab-pane').find('.cseffect,.cseffectw').show();
	}
    if ($(tis).val() == 4) {
       $(tis).parents('.tab-pane').find('.cseffectw').show();
    }

}

function min_upload(tis) {

    var index = $(tis).parents('.tab-pane').index();
    var type = $("select[name='cstmfy_input_type[]']:eq(" + index + ")").val();
    var tgroup = $(tis).val();

    if ($(tis).val() == 1 && type < 4) {
        $(tis).parents('.tab-pane').find('.min_upload').show();
        $(tis).parents('.tab-pane').find('.halign').show();
    } else {

        $(tis).parents('.tab-pane').find('.min_upload').hide();
        $(tis).parents('.tab-pane').find('.halign').hide();
    }
    if (type == 4 && $(tis).val() != 1) {
        $(tis).parents('.tab-pane').find('.colorname').show();

    }

    if (tgroup != 1) {

    	var abc = $("select[name='cstmfy_image[]']:eq(" + index + ")");
    	if(!abc.find('.uploadedimg')[0]){
			abc.append(imagelist_t);
		}
        $(tis).parents('.tab-pane').find('.cstmfy_aspect,.maxfsu').hide();
		$(tis).parents('.tab-pane').find('.cstmfy_aspect select').val(1);
        var timage = grpimg[tgroup][Object.keys(grpimg[tgroup])[0]][0];
        $("select[name='cstmfy_image[]']:eq(" + index + ")").val('images/'+Shopify_shop+'/' + timage).trigger('change');
    } else {
        $(tis).parents('.tab-pane').find('.cstmfy_aspect,.maxfsu').show();

    }

    if (type == 4 && $(tis).val() == 1) {
        $(tis).parents('.tab-pane').find('.cstmfy_aspect').hide();

    }

}

function nonvariant(tis) {
    if (jQuery(tis).is(':checked')) {
        jQuery('.nonvariant').prop("disabled", true);
        $("select[name='cstmfy_each_url[]']").each(function() {
        	var a = jQuery(this).find('option:not([disabled]):first').attr('value');
            jQuery(this).val(a).trigger('change');
            jQuery(this).siblings('.thumbimgselect').find('img').attr('src',a);
        })
    } else {
        jQuery('select[name="cstmfy_each_url[]"] .nonvariant:disabled').prop("disabled", false);
    }
}

if (jQuery('.cstmfy_all').is(':checked')) {
    jQuery('.nonvariant').prop("disabled", true);
    $("select[name='cstmfy_each_url[]']").each(function() {
		if(jQuery(this).val() !== jQuery(this).find('option:not([disabled]):first').attr('value')){
			jQuery(this).val(jQuery(this).find('option:not([disabled]):first').attr('value')).trigger('change');
		}
    })
} else {
    jQuery('select[name="cstmfy_each_url[]"] .nonvariant:disabled').prop("disabled", false);
}


 
function ReLoadImages(){
    $('img[data-lazyload]').each( function(){
        //* set the img src from data-src
        $( this ).attr( 'src', $( this ).attr( 'data-lazyload' ) );
        }
    );
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "interactive") {  //or at "complete" if you want it to execute in the most last state of window.
        ReLoadImages();
    }
});

$(".eyeview").click(function() {

$(this).toggleClass("fa-eye fa-eye-slash");
		var frame= $('.clone.active').index();
if($(this).hasClass('fa-eye')){
		jQuery('.pplr .pplr_index' + frame).show();
	}
	else{
		jQuery('.pplr .pplr_index' + frame).hide();
	}

})

function xpos(tis){
	var eqn = $(tis).parents('.tab-pane').index();
	var cstmfy_width = $("input[name='cstmfy_width[]']:eq(" + eqn + ")");
    var left = ($(tis).val() / 100 - cstmfy_width.val() / 200) * $('#ming').width();
        $('.area:eq(' + eqn + ')').css("left", left);
}

function ypos(tis){
	var eqn = $(tis).parents('.tab-pane').index();
    var top = ($(tis).val() / 100) * $('#ming').height();
    $('.area:eq(' + eqn + ')').css("top", top);
}

function pwidth(tis){
	var eqn = $(tis).parents('.tab-pane').index();
    $('.area:eq(' + eqn + ')').css("width", $(tis).val() + '%');

}

function pheight(tis){
	var eqn = $(tis).parents('.tab-pane').index();
	$('.area:eq(' + eqn + ')').css("height", $(tis).val() + '%');

}

function cover(){
	$('.area:visible').css({'left':'0px','top': '0px','width': '100%','height': '100%'});
	$('.tab-pane:visible').find("input[name='cstmfy_width[]']").val(100);
	$('.tab-pane:visible').find("input[name='cstmfy_height[]']").val(100);
	$('.tab-pane:visible').find("input[name='cstmfy_posx[]']").val(50);
	$('.tab-pane:visible').find("input[name='cstmfy_angle[]']").val(0);
	$('.tab-pane:visible').find("input[name='cstmfy_posy[]']").val(0);
	$('.tab-pane:visible').find("select[name='cstmfy_type[]']").val(1).trigger('change');
}

function openshopify(e,tis){
		if($('.clone').length<2){
		return;
	}
	
	if (window.top !== window.self){
	ShopifyApp.Modal.confirm({
	  title: "Delete This Field?",
	  message: "Do you want to delete this field? This can't be undone.",
	  okButton: "Yes",
	  cancelButton: "No",
	  style: "danger"
	}, function(result){
		if(result){
			removefield(e,tis);
		}
	});
	}
	else{
		removefield(e,tis);
	}
	
	
}

$(function()
  {
  $(document).on('click', '.editclass', function(e){
    e.preventDefault();
    if($(".crop-modal2:visible")[0]){
      $(".crop-modal2").remove();
    }
    var controlForm = $('#creategroupfont .color:first'),
        currentEntry = $('#creategroupfont .color .colorlist:last'),
        selects = $('#creategroupfont .color .colorlist:last').find("select"),
        newEntry = $(currentEntry.clone(true,true)).appendTo(controlForm);
    $(selects).each(function(i) {
      var select = this;
      $('#creategroupfont .color .colorlist:last').find("select").eq(i).val($(select).val());
    });
  }
   ).on('click', '.btn-remove', function(e){

	if($('#creategroupfont .colorlist').length>1){
		$(this).parents('.colorlist').remove();
	  }

    if($(".crop-modal2:visible")[0]){
      $(".crop-modal2").remove();
    }
    e.preventDefault();
    return false;
  }
 );
}
);


var _p_R = "input[value=''][required]:not([disabled]),textarea[value=''][required]:not([disabled])";


jQuery(document).on("click", '.mainform', function(e) {
	
	var dkk= jQuery('.imagemain').first().val();
	jQuery('.imagemain').each(function() {
		if(jQuery(this).val() !== dkk){
			$(".cstmfy_all").attr("checked", false);
		}
		dkk= jQuery(this).val();
	})
	var check  = false;
	
	$('#mainform').find(_p_R).each(function() {
        if (jQuery(this).val() === "") {
            var tab = jQuery(this).parents('.tab-pane').index();
            $('#li' + (tab + 1)).trigger('click');
			console.log(jQuery(this));
		//	check  = true;
		//	return;
        }
    });
	if(check){
		//return;
	}
	event.preventDefault();
	var serializedData = new FormData($('#mainform')[0]);
	if($(this).hasClass('ptem')){
		serializedData.append("template", "Save As Template");
	}
	
	$('body').append('<div id="load"></div>');
	$('#load').height($(document).height());

	$.ajax({
	   type: "post",
       data: serializedData,
       processData: false,
		contentType: false,
	   success: function(data)
		   {
			console.log(data);
				if(data == 'success' || data == 'success2'){
					$('#load').remove();
					if(window.top !== window.self){
						if(data == 'success'){
							ShopifyApp.flashNotice('Saved. It may take a few seconds to display');
						}
						else{
							ShopifyApp.flashNotice('Template Updated');
						}
					}
				}
				else{
					alert('Something Wrong with Savings');
				}
			 },
	   error: function(jqXHR, textStatus, errorThrown) {
		  console.log(textStatus, errorThrown);
		}
   
   });

});

  jQuery(document).on("keypress", "input", function(event) { 
    if(event.keyCode == 13){
      jQuery(this).blur();
      return false;
    }
  });
  
  function cstmfy_drop(tis){
	  if(jQuery(tis).val() !==1 ){
		    var droplist = drop[jQuery(tis).val()];
			$(tis).parents('.tab-pane').find('.c_b_d').find('option').not(':first').remove();

            for (var y = 0; y < Object.keys(droplist).length; ++y) {

                    $(tis).parents('.tab-pane').find('.c_b_d').append('<option value="_' + (Object.keys(droplist)[y]).replace(/"/,'\\"') + '" >' + Object.keys(droplist)[y] + '</option>');

            }
		  
		  
	  }
	  
  }
  
  function cstmfy_otype(tis){
	  	  if(jQuery(tis).val() == 2 ){
			$(tis).parents('.tab-pane').find('.d_d').hide();
		}
		else{
			$(tis).parents('.tab-pane').find('.d_d').show();
		}		
  }


  jQuery(document).on("click", '.hideis', function(e) {
    var abc = jQuery(this).parents('.conds').find('.when');
   	selectIs(abc,tgt);
  	jQuery(this).siblings('.ms-parent').find('.ms-choice').trigger('click');
  })

    jQuery(document).on("click", '.hidetarget', function(e) {
    var abc = jQuery(this).parents('.conds').find('.when');
   	update_target(abc,tgt);

  	jQuery(this).siblings('.ms-parent').find('.ms-choice').trigger('click');
  	
  })	
</script>

</body>

</html>
`;

const transform = (obj) => {
  const numberLabel = [
    "angle",
    "width",
    "height",
    "opacity",
    "font_size",
    "price_add",
    "arc_radius",
    "x_position",
    "y_position",
    "line_height",
    "effect_width",
    "options_list",
    "max_character",
    "number_of_line",
    "min_upload_width_px",
    "field_heading_as_tab",
    "min_upload_height_px",
    "font_size_initial_2nd",
    "font_size_initial_3rd",
    "x_position_initial_2nd",
    "x_position_initial_3rd",
    "y_position_initial_2nd",
    "y_position_initial_3rd",
    "customer_can_change_font_size",
    "customer_can_change_horizontal_alignment",
  ];
  let newObj = {};
  for (let key in obj) {
    let newKey = key
      .replace(/\n\s+/g, " ")
      .replace(/\t+|\n+|\r\n+/g, "")
      .trim();
    newKey = _.snakeCase(newKey);
    if (numberLabel.includes(newKey)) {
      newObj[newKey] = parseFloat(obj[key]);
    } else {
      newObj[newKey] = obj[key];
    }
  }
  return newObj;
};

const getFormData = ($, forms) => {
  let tabData = {};
  forms.each((i, form) => {
    const label = $(form).find("label").text();
    const visibleForm = $(form).css("display");
    // console.log(label, ">>>>>>>>>", visibleForm, visibleForm == "none");
    if (!label || visibleForm == "none") return;
    let propData = undefined;
    const option = $(form).find(`option[selected]`).text();
    if (option) {
      if (option.match(/.png|.jpg|.jpeg/g)) {
        propData = `https://doshopify.com/product-personalizer/${$(form)
          .find(`option`)
          .val()}`;
      } else {
        propData = option == `--Select--` ? null : option;
      }
    } else {
      const op = $(form).find(`option`).val();
      if (op) {
        propData = op;
      }
    }
    const textarea = $(form).find("textarea").val();
    if (textarea) {
      propData = textarea;
    }
    const input = $(form).find("input").val();
    if (input) {
      propData = input;
    }
    tabData[label] = propData;
  });
  return transform(tabData);
};

const a = () => {
  const $ = cheerio.load(html);
  let personalize = {};
  const enableCustomization = $(`div.checkbox label input[name="cstmfy_req"]`);
  if (enableCustomization) {
    personalize.enable_customization =
      enableCustomization.val() == 1 ? true : false;
  }
  const allVariantImage = $(`div.checkbox label input[name="cstmfy_all"]`);
  if (allVariantImage) {
    personalize.all_variant_image = allVariantImage.val() == 1 ? true : false;
  }
  const tabs = $("div.tab-pane.in.clone");
  let blocks = [];
  tabs.each((i, tab) => {
    const akbForms = $(tab).find("div.akb div.form-group");
    const akbData = getFormData($, akbForms);
    const tabForms = $(tab).find("div.bhoechie-tab-content div");
    const tabData = getFormData($, tabForms);
    blocks.push({ ...akbData, ...tabData });
  });
  personalize.blocks = blocks;
  const svpForms = $(`div.svp div.form-group`);
  svpForms.each((i, svp) => {
    const label = $(svp).find("label").text();
    personalize[label] =
      $(svp).find("option[selected]").text() || $(svp).find("input").val();
  });
  personalize = transform(personalize);
  const conditionTab = $("div#tabx")[0];
  const conds = $(conditionTab).find("div.conds");
  let conditions = [];
  conds.each((i, cond) => {
    const when = $(cond)
      .find("span.divwhen option[selected]")
      .text()
      .trim()
      .match(/[^\d\.]+/g)[0];
    const is = $(cond)
      .find("span.divis option[selected]")
      .text()
      .trim()
      .match(/[^\d\.]+/g)[0]
      .replace(/\s+/g, "")
      .split(",");
    const then = $(cond)
      .find("span.divthen option[selected]")
      .text()
      .trim()
      .match(/[^\d\.]+/g)[0];
    const targets = $(cond)
      .find("span.divtarget option[selected]")
      .text()
      .trim()
      .match(/[^\d\.]+/g)[0]
      .replace(/\s+/g, "")
      .split(",");
    conditions.push({
      when: {
        field: when,
        values: is,
      },
      then: {
        action: then,
        fields: targets,
      },
    });
    console.log(JSON.stringify(conditions));
  });
};

a();
