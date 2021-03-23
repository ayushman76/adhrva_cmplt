import Gallery from '../export/galllery.js';

document.querySelector('.galllery').innerHTML+=`
      <h3 class="text-center">Our Gallery</h3>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
		<div class="col-md-4">
		     <img src="images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-gallery-2.jpg" alt="Los Angeles">
		</div>
		<div class="col-md-4">
		    <img src="images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-galleru-3.jpg" alt="Los Angeles">
		</div>
		<div class="col-md-4">
		    <img src="images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-w5dgwehwvf.jpg" alt="Los Angeles">
		</div>
      </div>

      <div class="item">
        <div class="col-md-4">
		     <img src="images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-gallery-7.jpg" alt="Los Angeles">
		</div>
		<div class="col-md-4">
		    <img src="images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-gallery-5.jpg" alt="Los Angeles">
		</div>
		<div class="col-md-4">
		    <img src="images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-gallery-12.jpg" alt="Los Angeles">
		</div>
      </div>
    
      
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
`;