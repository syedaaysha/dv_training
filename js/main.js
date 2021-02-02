 
/*====== nav start ===== */




/*====== nav End ===== */
$(document).ready(function(){
var navigation = responsiveNav("#nav", {
        insert: "before"
      });
 });

$(document).ready(function(){
$(".a").click(function(){
    $(".all").show(1000);
    $(".graphics").hide(1000);
    $(".d_marketing").hide(1000);
    $(".photography").hide(1000);
    $(".v_fx").hide(1000);
    $(".it").hide(1000);
});
$(".b").click(function(){
    $(".all").hide(1000);
    $(".graphics").show(1000);
    $(".d_marketing").hide(1000);
    $(".photography").hide(1000);
    $(".v_fx").hide(1000);
    $(".it").hide(1000);
});
$(".c").click(function(){
    $(".all").hide(1000);
    $(".graphics").hide(1000);
    $(".d_marketing").show(1000);
    $(".photography").hide(1000);
    $(".v_fx").hide(1000);
    $(".it").hide(1000);
});
$(".d").click(function(){
    $(".all").hide(1000);
    $(".graphics").hide(1000);
    $(".d_marketing").hide(1000);
    $(".photography").show(1000);
    $(".v_fx").hide(1000);
    $(".it").hide(1000);
});
$(".e").click(function(){
    $(".all").hide(1000);
    $(".graphics").hide(1000);
    $(".d_marketing").hide(1000);
    $(".photography").hide(1000);
    $(".v_fx").show(1000);
    $(".it").hide(1000);
});
$(".f").click(function(){
    $(".all").hide(1000);
    $(".graphics").hide(1000);
    $(".d_marketing").hide(1000);
    $(".photography").hide(1000);
    $(".v_fx").hide(1000);
    $(".it").show(1000);
});

/*====== country_checkbox start===== */


  $(document).ready(function() {
  enable_cb();
  $(".country_check").click(enable_cb);
});
 
function enable_cb() {
  if (this.checked) {
    $("input.other_country_check").attr("disabled", true);
  
  } else {
      $("input.other_country_check").removeAttr("disabled");
  }
}
});

/*====== country_checkbox end===== */

/*====== time_duration_checkbox start===== */

   function enable_cb(check,test2) {

  if (check.checked==true){
    document.getElementById(test2).disabled=true;
  
  } else {
      document.getElementById(test2).disabled=false;
  
  }
};


/*====== time_duration_checkbox end===== */

/*====== grad_form start===== */

/*====== grad_form end===== */

 /*====== trainer_form_education start===== */
$(document).ready(function(){
$('.more_degree_btn').on('click',function(){
  addform();
});
function addform()
{
  var educationform='   <form action="" data-toggle="validator" role="form" id="registration_form"><div id="trainer_form_education">'+
              '<br><hr><a class="rmv_btn more_degree_btn pull-right btn-sm btn-danger" href="#"><i class="fa fa-times" aria-hidden="true"></i></a><br>'+
                '<div class="row margin_top">'+
                  '<div class="col-md-2">'+
                    '<div class="form-group">'+
                       '<label class="control-label">Degree</label>'+
                  '<div class="form-group">'+
                    '<select class="form-control" data-error="Please select degree" required>'+
                      '<option value=""></option>'+
                      '<option value="A-level">SSC/A-level</option>'+
                      '<option value="O-level">HSC/O-level</option>'+
                      '<option value="Diploma">Diploma</option>'+
                      '<option value="Bachelor">Bachelor</option>'+
                      '<option value="Master">Master</option>'+
                      '<option value="Phd">Phd</option>'+
                      '<option value="Mphil">Mphil</option>'+
                    '</select><div class="help-block with-errors"></div>'+
                  '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-md-5">'+
                     '<div class="form-group">'+
                  '<label class="control-label">Institute</label>'+
                    '<div class="input-group">'+
                    '<span class="input-group-addon"><i class="fa fa-university" aria-hidden="true"></i></span>'+
                    '<input id="institute" type="text" class="form-control" name="institute" placeholder="Please Write Your Institute Name">'+
                    '</div>'+
                '</div>'+
                  '</div>'+
                  '<div class="col-md-5">'+
                    '<div class="form-group">'+
                       '<label class="control-label">Department/Group</label>'+
                  '<div class="form-group">'+
                    '<select class="form-control" >'+
                      '<option value="Please Select Department">Please Select Department</option>'+
                      '<option value="Department Name">Department Name</option>'+
                      '<option value="Department name">Department name</option>'+
                      '<option value="Please Select Department">Please Select Department</option>'+
                      '<option value="Department Name">Department Name</option>'+
                      '<option value="Department name">Department name</option>'+
                      '<option value="Please Select Department">Please Select Department</option>'+
                      '<option value="Department Name">Department Name</option>'+
                      '<option value="Department name">Department name</option>'+
                      '<option value="Please Select Department">Please Select Department</option>'+
                      '<option value="Department Name">Department Name</option>'+
                      '<option value="Department name">Department name</option>'+
                    '</select>'+
                  '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="col-md-4">'+
                    '<div class="form-group">'+
                  '<label class="control-label">Result <small style="color: #CCC">(Optional)</small></label>'+
                '<input id="result" type="text" placeholder="" class=" form-control" name="result">'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-md-4">'+
                    '<div class="form-group">'+
                       '<label class="control-label">Year</label>'+
                  '<div class="form-group">'+
                    '<select class="form-control">'+
                      '<option value="2017">2017</option>'+
                      '<option value="2016">2016</option>'+
                      '<option value="2015">2015</option>'+
                      '<option value="2014">2014</option>'+
                      '<option value="2013">2013</option>'+
                      '<option value="2012">2012</option>'+
                      '<option value="2017">2017</option>'+
                      '<option value="2016">2016</option>'+
                      '<option value="2015">2015</option>'+
                      '<option value="2014">2014</option>'+
                      '<option value="2013">2013</option>'+
                      '<option value="2012">2012</option>'+
                    '</select>'+
                  '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-md-4">'+
                    '<div class="form-group">'+
                        '<label class="control-label">Board</label>'+
                  '<div class="form-group">'+
                    '<select class="form-control">'+
                      '<option value="">Select</option>'+
                      '<option value="Barisal">Barisal</option>'+
                      '<option value="Chittagong">Chittagong</option>'+
                      '<option value="Comilla">Comilla</option>'+
                      '<option value="Dhaka">Dhaka</option>'+
                      '<option value="Jessore">Jessore</option>'+
                      '<option value="Rajshahi">Rajshahi</option>'+
                      '<option value="Sylhet">Sylhet</option>'+
                      '<option value="Dinajpur">Dinajpur</option>'+
                    '</select>'+
                  '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '</div></form>';


      $('#trainer_form_education').append(educationform);
};
$('body').delegate('.rmv_edubtn','click', function(){
  $(this).parent().remove();
});
});
/*====== trainer_form_education end===== */


/*====== more_experience_btn start===== */

$(document).ready(function(){

var test=0;
var test2;
$('.more_experience_btn').on('click',function(){
  test2=test+1
  $('.initial').val(test2);
      test=test2;
  addform();
});
function addform()
{
  var experienceform=' <div id="trainer_form_experience">'+
                '<br><hr><a class="rmv_btn more_degree_btn pull-right btn-sm btn-danger" href="#"><i class="fa fa-times" aria-hidden="true"></i></a><br>'+
                '<div class="row margin_top">'+
                  '<div class="col-md-4">'+
                    '<div class="form-group">'+
                      '<label class="control-label">Title</label>'+
               ' <input id="designation_title" type="text" placeholder="Enter Designation Here.." class=" form-control" name="designation_title" required="required">'+
                    '</div>'+
                 ' </div>'+
                  '<div class="col-md-4">'+
                    '<div class="form-group">'+
                      '<label class="control-label">Company</label>'+
                '<input id="com_name" type="text" placeholder="Enter Company Name Here.." class="form-control" name="com_name" required="required">'+
                    '</div>'+
                  '</div>'+
                   '<div class="col-md-4">'+
                    '<div class="form-group">'+
                      '<label class="control-label">Department</label>'+
                       '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="col-md-4">'+
                    '<div class="form-group">'+
                      '<label class="control-label">Location</label>'+
                '<input id="com_location" type="text" placeholder="Enter Company Location Here.." class="form-control" name="com_location">'+
                    '</div>'+
                  '</div>'+
                   '<div class="col-md-8">'+
                    '<div class="form-group">'+
                      '<label class="control-label">Time Duration</label>'+
                '<div class="row">'+
                  '<div class="col-md-4">'+
                    '<input id="timefrom" type="date" class="form-control " name="timefrom" placeholder="From" required="required">'+
                  '</div>'+
                  '<div class="col-md-4">'+
                    '<input id="timeto'+test2+'" type="date" class="form-control " name="timeto" placeholder="To" required="required">'+
                  '</div>'+
                  '<div class="col-md-4">'+
                    '<div class="checkbox">'+
                      '<label>'+
                        '<input type="checkbox"  onchange="enable_cb(this,this.value)" value="timeto'+test2+'" id="myCheck'+test+'"> Currently Working'+
                      '</label>'+
                    '</div>'+
                  '</div>'+
                  '</div>'+
                   ' </div>'+
                  '</div>'+
                '</div>'+
                 '</div>';
      $('#trainer_form_experience').append(experienceform);
};
$('body').delegate('.rmv_btn','click', function(){
  $(this).parent().remove();
});
});
/*====== more_experience_btn end===== */



$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
      
        fields: {
            
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            }
            
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") ;// Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});


$(document).ready(function() {
  $("#getting-started")
  .countdown("2018/02/02", function(event) {
    $(this).text(
      event.strftime('%D days %H:%M:%S')
    );
  });
   });

$(document).ready(function() {
  $("#getting-started2")
  .countdown("2018/02/02", function(event) {
    $(this).text(
      event.strftime('%D days %H:%M:%S')
    );
  });
   });



$(function(){
    var $gallery = $('.gallery a').simpleLightbox();

    $gallery.on('show.simplelightbox', function(){
      console.log('Requested for showing');
    })
    .on('shown.simplelightbox', function(){
      console.log('Shown');
    })
    .on('close.simplelightbox', function(){
      console.log('Requested for closing');
    })
    .on('closed.simplelightbox', function(){
      console.log('Closed');
    })
    .on('change.simplelightbox', function(){
      console.log('Requested for change');
    })
    .on('next.simplelightbox', function(){
      console.log('Requested for next');
    })
    .on('prev.simplelightbox', function(){
      console.log('Requested for prev');
    })
    .on('nextImageLoaded.simplelightbox', function(){
      console.log('Next image loaded');
    })
    .on('prevImageLoaded.simplelightbox', function(){
      console.log('Prev image loaded');
    })
    .on('changed.simplelightbox', function(){
      console.log('Image changed');
    })
    .on('nextDone.simplelightbox', function(){
      console.log('Image changed to next');
    })
    .on('prevDone.simplelightbox', function(){
      console.log('Image changed to prev');
    })
    .on('error.simplelightbox', function(e){
      console.log('No image found, go to the next/prev');
      console.log(e);
    });
  });

$(document).ready(function(){
  $(".all_gallery").click(function(){
    $(".Photo").show(1000);
    $(".Video").show(1000);
    $(".Media").show(1000);
});
$(".Pho").click(function(){
    $(".Photo").show(1000);
    $(".Video").hide(1000);
    $(".Media").hide(1000);
});
$(".Vid").click(function(){
    $(".Photo").hide(1000);
    $(".Video").show(1000);
    $(".Media").hide(1000);
});
$(".Med").click(function(){
    $(".Photo").hide(1000);
    $(".Video").hide(1000);
    $(".Media").show(1000);
});
});