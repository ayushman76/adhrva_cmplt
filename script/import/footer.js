import Footer from '../export/footer.js';


var footer_nav = new Footer('Home','#home');
var footer_nav01 = new Footer ('About','#about');
var footer_nav02 = new Footer('Treatments','#treatment');
var footer_nav03 = new Footer ('Doctors','#doctor');
var footer_nav04 = new Footer('Gallery','#gallery');
var footer_nav05 = new Footer('Conatct','#contact');

var footer_arr = [footer_nav,footer_nav01,footer_nav02,footer_nav03,footer_nav04,footer_nav05]

document.querySelector('footer').innerHTML+=`
      <div class="container">
	        <div class="row">
			      <div class="col-md-4">
				       <div class="footer_item">
					          <h2></strong>Main Menu</strong></h2>
						      <ul class="nav"></ul>
						</div>
				  </div>
				  <!--//col-md-4-->
				   <div class="col-md-4">
				        <div class="footer_item01">
						      <h3><strong>Social Connect</strong></h3>
						      <ul class="nav">
									<li><a href="#">Facebook</a></li>
									<li><a href="#">WhatsApp</a></li>
									<li><a href="#">Facebook</a></li>
							  </ul>
						</div>
				  </div>
				  <!--//col-md-4-->
				  <div class="col-md-4">
				        <div class="footer_item01">
						     <h4><strong>Address</strong></h4>
						      <ul class="navbar-nav nav">
									<li><a href="mailto:arthavhospital@gmail.com"><i class="fa fa-envelope" style="font-size:24px"></i> arthavhospital@gmail.com</a></li>
									<li><a href="tel:+9177524 00825"><i class="fa fa-phone" style="font-size:24px"></i> +917752400825</a></li>
									<li><a href="tel:+918103571337"><i class="fa fa-phone" style="font-size:24px"></i> +918103571337</a></li>
									<li><a href="#"><i class="fa fa-phone" style="font-size:24px"></i>  front of family planning Office(CMHO),Nutan Chowk,Seepat Road,Sarkanda Bilaspur</a></li>
							 </ul>
						</div>
				  </div>
				  <!--//col-md-4-->
			</div>
	  </div>
`;

for(var i in footer_arr){
	document.querySelector('.footer_item>ul').innerHTML+=`
	     <li><a href="${footer_arr[i].tabLink}">${footer_arr[i].tabName}</a></li>
	`;
}