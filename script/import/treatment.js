import Eye from '../export/treatment.js';

var treat01 = new  Eye ('images/eyetreatment.jpg','Computer eye testing','eyetreatment');

var treat02 = new  Eye ('images/eye-surgery-cataract-surgery.jpg','Cataract surgery','eye surgery cataract surgery');

var treat03= new  Eye('images/phaco_surgery_bilaspur_atharva+hospital.jpg','Phaco surgery','phaco surgery bilaspur atharva hospital');

var treat04= new  Eye('images/contact_Lens.jpg','Contact lenses','contact_Lens');


var treat05 = new   Eye('images/eetinopathy_of_Prematurity.jpg','Retinopathy of Prematurity','etinopathy of Prematurity');

var treat06 = new  Eye ('images/glaucoma_treatment.jpg','Glaucoma treatment','glaucoma treatment');

var treat07= new  Eye('images/uveitis-treatment.png','Uveitis treatment','uveitis treatment');



var treat09 = new   Eye('images/dry-eye-symptoms-treatment-causes.jpg','Dry eyes treatment','dry-eye-symptoms-treatment-causes');

var treat10 = new  Eye ('images/headache.jpg','Headache','headache');

var treat11= new  Eye('images/computer-vision-syndrome-cvs-Homeopathic-treatment-india-bilaspur.jpg','Computer vision syndrome','computer-vision-syndrome-cvs-Homeopathic-treatment-india-bilaspur');

var treat12= new  Eye('images/ocular_surface_disorders.jpg','Ocular surface disorders','ocular_surface_disorders');







var treatment_arr = [treat01,treat02,treat03,treat04,treat05,treat06,treat07,treat09,treat10,treat11,treat12];

document.querySelector('.eye').innerHTML+=`
      <div class="container">
	       <div class="row">
		         <h2 class="text-center">We Are</h2>
                    <h5 class="text-center">Offering Eye Treatments </h5>
		   </div>
	</div>
`;
for(var i in treatment_arr){
	document.querySelector('.eye>.container>.row').innerHTML+=`
	     <div class="col-md-3">
		      <div class="treatment_item pad-10">
	        <img src="${treatment_arr[i].img}" alt="${treatment_arr[i].alt}" class="img-thumbnail">
					<p>${treatment_arr[i].name}</p>
			  </div>
		 </div>
	`;
}