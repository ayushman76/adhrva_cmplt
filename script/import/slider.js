import Slider from "../export/slider.js";

var head = new Slider("<span class='color-blue'>Health Care With Dedication</span> <span class='color-green'>And Precision</span>");
var para = new Slider("Atharva hospitals 15 Beded Near Nutan Chowk, Sarkanda, Bilaspur is run by Dr. Monika Mahilong (Optho.) and Dr. Deepak Kumar (Ped.) provides modern Medical & Surgical Facilities for children and cataract surgery (Phaco process) of eyes., ");
var btn = new Slider("View treatments");

//var slider_arr = [head,para,btn];

document.querySelector('section').innerHTML+=`
     <div class="container">
	      <div class="row">
		        <div class="col-md-6">
				      <div class="my_content_text">
					        <h1><strong>${head.content}</strong></h1>
							
							<p>${para.content}</p>
							
							<a href="#treatment" class=" mybtn">${btn.content}</a>
					  </div>
				</div>
				<div class="col-md-6">
				      <div class="my_content">
					         <img src="${head.Banner('images/banner.png')}" class="img-responsive pad-10">
					  </div>
				</div>
		  </div>
	 </div>
`;

