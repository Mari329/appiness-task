$(document).ready(function(){
  console.log("Working fine");

  var toggleArr = [
    "What are the conditions that requireBone Marrow Transplant?",
    "Which are the hematological diseases that may benefit from bone marrow transplants?",
    "Which are the Cancers that may benefit from bone marrow transplants?",
    "Do bone marrow failure syndromes require BMT?",
    "What are Primary Immune Deficiency diseases ?",
    "Which are the immune deficiencies that warrant BMT?",
    "What makes transplants at Aster CMI unique?"
  ];

  var warningCardArr = [
    {
      imgURL:"warning1",
      text: "Failure to thrive – not gaining weight and height as per the age norms"
    },
    {
      imgURL:"warning1",
      text: "Infections warranting multiple hospitalizations"
    },
    {
      imgURL:"warning1",
      text: "Requirement of intravenous antibiotics to clear infections"
    },
    {
      imgURL:"warning4",
      text: "2 or more episodes of pneumonia"
    },
    {
      imgURL:"warning5",
      text: "Family history of death of children at young age due to immune deficiency"
    },
    {
      imgURL:"warning6",
      text: "Repeated episodes of diarrhea"
    },
    {
      imgURL:"warning7",
      text: "2 or more episodes of sinus infections within a year"
    },
    {
      imgURL:"warning1",
      text: "2 or more episodes of ear discharge"
    },
    {
      imgURL:"warning9",
      text: "Repeated skin infections"
    },
    {
      imgURL:"warning1",
      text: "Repeated abscess formation (liver abscess, brain abscess)"
    },
  ];

  var transplantTypesArr = [
    "Autologous Bone Marrow Transplant - Marrow cells are collected from the patient’s own body and transfused back after high dose chemotherapy.",
    "Allogenic Bone Marrow Transplant (Matched Sibling Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched sibling donor.",
    "Allogenic Bone Marrow Transplant (Matched Unrelated Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched donor obtained from bone marrow registries in India and abroad.",
    "Haplo-Identical Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from the parent.",
    "Umbilical cord Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched umbilical cord donor obtained from umbilical cord registries in India and abroad.",
  ];

  var doctorCardsArr = [ "Pediatric BMT", "Adult BMT" ];



  for(let i = 0; i < doctorCardsArr.length; i++) {
    $(".doctor-container").append(`
      <div class="doctor-card">
        <div class="doctor-card-content">
          <h2 class="doctor-card-title">`+ doctorCardsArr[i] +`</h2>
          <img class="doctor-card-img" src="images/doctor-card-img.png" alt="doctor-card-img" />
          <h2 class="text-blue">Dr. Vijay Agarwal</h2>
          <p class="text-blue card-text">MD, MRCP, PhD,CCT</p>
          <p class="text-blue  card-text role">Lead & Sr. Consultant - Medical Oncology & Haematology</p>
          <div class="line-green">
          </div>
          <p  class="card-text">Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.</p>
          <div class="button-gradiant">Know More</div>
          
          <div class="line"></div>

          <img class="doctor-card-img" src="images/doctor-card-img.png" alt="doctor-card-img" />
          <h2 class="text-blue">Dr. Vijay Agarwal</h2>
          <p class="text-blue card-text">MD, MRCP, PhD,CCT</p>
          <p class="text-blue  card-text">Lead & Sr. Consultant - Medical Oncology & Haematology</p>
          <div class="line-green">
          </div>
          <p  class="card-text">Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.</p>
          <div class="button-gradiant">Know More</div>
        </div>
      </div>
    `);
  }


  for(let i = 0; i < transplantTypesArr.length; i++) {
    $(".types-container ul").append(`
      <li>`+ transplantTypesArr[i] +`</li>
    `);
  }


  for(let i = 0; i < warningCardArr.length; i++) {
    $(".warning-signs-content").append(`
      <div class="warning-card">
        <img class="warning-icons" src="images/`+ warningCardArr[i].imgURL +`.png" alt="warning1" />
        <p>`+ warningCardArr[i].text +`</p>
      </div>
    `);
  }

  

  for(let i = 0; i < toggleArr.length; i++) {
    $(".toggle-content-container").append(`
      <div class="toggle-content">
        <div class="toggle-content-header">
          <h2 class="text-blue">`+ toggleArr[i] +`</h2>
          <img class="toggle-arrow" src="images/arrow-down.png" alt="arrow-down" onclick="toggle('`+ i +`')" />
        </div>
        <div id="`+ i +`" class="toggle-content-text">
          <ul>
            <li>BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and      certain  genetic metabolic disorders.</li>
            <li>It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas</li>
          </ul>
        </div>
        <div class="toggle-line"></div>
      </div>
    `);  
  }

  for(let i = 0; i < 4; i++) {
    $(".testimonials-card-container").append(`
      <div class="testimonials-card">
        <div class="testimonials-card-header">
          <div class="testimonials-card-header-left">
            <img class="testimonial-img" src="images/testimonial-profile.png" alt="testimonial-profile" />
            <div class="testimonials-header-txt">
              <h2>John Doe</h2>
              <p>Softwere Engineer</p>
            </div>
          </div>
          <img class="quotation-img" src="images/quotation.png" alt="quotation" />
        </div>
        <div class="testimonials-card-content">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </div>
      </div>
    `);
  }

});


function toggle(id) {
  var x = $("#id:nth-child(2)");
  console.log(x)
  $("#"+id).slideToggle();
}

function backToTop() {
  $("html, body").animate({scrollTop: 0}, 1000);
}

function rightArrowClick(event) {
  event.preventDefault();
  $('.testimonials-card-container').animate({
    scrollLeft: "+=200px"
  }, "slow");
}

 function lefttArrowClick(event) {
  event.preventDefault();
  $('.testimonials-card-container').animate({
    scrollLeft: "-=200px"
  }, "slow");
}