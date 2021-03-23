import Child from '../export/chlidtreatment.js';

var ser01 = new Child('images/emer24.png', '24 hours emergency care');
var ser02 = new Child('images/treatment_of_newborns.jpg', 'Treatment of newborns');
var ser03 = new Child('images/complete_immunization_every day.jpg', 'Complete immunization ');
var ser04 = new Child('images/asthma.jpg', 'Asthma');
var ser11 = new Child('images/lung_cleaning_with_nebulizer.jpg', 'Lung cleaning with nebulizer');
var ser07 = new Child('images/blood-disorders.jpg', 'Blood related disease');
var ser08 = new Child('images/thalassemia.jpg', 'Thalassemia');
var ser09 = new Child('images/sikal_sel_anemia.jpg', 'Sikal cell anemia');
var ser10 = new Child('images/children_dietary_information.jpg', 'Children dietary');
var ser05 = new Child('images/pilia-jaundice-causes-symptoms-and-treatment.jpg', 'Piliatreatment');

var arr01 = [ser01, ser02, ser03, ser04, ser05, ser07, ser08, ser09, ser10, ser11]

document.querySelector('.child').innerHTML+=`
      <div class="container">
	       <div class="row">
		         <h6 class="text-center">We Are</h6>
                  <h1 class="text-center">Offering Child Treatments </h1>
		   </div>
	 </div>
`;
for(var i in arr01){
	document.querySelector('.child>.container>.row').innerHTML+=`
	     <div class="col-md-3">
		      <div class="treatment_item pad-10">
			        <img src="${arr01[i].img}" alt="${arr01[i].alt}" class="img-thumbnail">
					<p>${arr01[i].name}</p>
			  </div>
		 </div>
	`;
}