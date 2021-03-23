import Doctor from "../export/doctor.js";

var  d_01 = new Doctor("Dr. Monika Mahilang","MBBS,MS(Opthalmology)","Eye Specialist and Eye Surgeon","7770886363");
var  d_02 = new Doctor("Dr. Deepak Kumar","MBBS,MD (Paediatrics)","Pediatrician","8463823155");


document.querySelector('.doctor').innerHTML+=`
     <div class="container">
	     <div class="row">
		        <h2 class="text-center">Meet Our</h2> 
                <h3 class="text-center">Professional Doctors</h3>
		       <div class="col-md-3">
			         <div class="my_doctor">
					      <img src="images/monika-mahilang-eye-surgeon-in-bilaspur-adharav-hospital.png" class="img-thumbnail">
					 </div>
			   </div>
			   <div class="col-md-3">
			         <div class="my_details">
					 <div class="triangle-up"></div>
					      <ul class="nav">
								 <li><a><i class="fa fa-user-md" style="font-size:24px"></i> ${d_01.name}</a></li>
								<li><a>${d_01.qualification}</a></li>  
								<li><a><i class="fa fa-heart-o" style="font-size:24px"></i> ${d_01.specialist}</a></li>
								<li><a href="tel:${d_01.phone}"><i class="fa fa-phone" style="font-size:24px"></i> ${d_01.phone}</a></li>
						  </ul>
					 </div>
			   </div>
			   <div class="col-md-3">
			         <div class="my_doctor">
					 
					      <img src="images/dr-deepak-kumar-Pediatrician-in-bilaspur-adharav-hospital.png" class="img-thumbnail">
					 </div>
			   </div>
			   <div class="col-md-3">
			         <div class="my_details">
					 <div class="triangle-up"></div>
					       <ul class="nav">
						         <li><a><i class="fa fa-user-md" style="font-size:24px"></i> ${d_02.name}</a></li>
								<li><a>${d_02.qualification}</a></li>  
								<li><a><i class="fa fa-heart-o" style="font-size:24px"></i> ${d_02.specialist}</a></li>
								<li><a href="tel:${d_02.phone}"><i class="fa fa-phone" style="font-size:24px"></i> ${d_02.phone}</a></li>
						   </ul>
					 </div>
			   </div>
		 </div>
	</div>
`;

