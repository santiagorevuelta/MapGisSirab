module.exports = `<!DOCTYPE html>
<html>
<head>
  <title></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
  <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
</head>
<body style="padding: 0; margin: 0;">
<div>
  <select class="js-example-basic-single js-example-placeholder-single" name="state" id="select" multiple="multiple">
</select>
</div>
<script>
$(document).ready(function() {
    $('.js-example-basic-single').select2();
    $(".js-example-placeholder-single").select2({
        placeholder: "Todos...",
        allowClear: true
    }); 
});

function llenarCombo(datos) {
  datos = JSON.parse(datos);
  let html = "";
  $.each(datos, function(i) {
      html += '<option value="' + datos[i].id+ '">' + dato[i].label + '</option>';
   });
  $("#select").html(html);  
}

</script>
<style>
.js-example-basic-single{
  width: 100%;
}
.select2-container .select2-selection--multiple {    
    border-radius: 25px !important;
    min-height: 35px !important;
}

.select2-container--default .select2-selection--multiple .select2-selection__rendered {
    height: 20px;
}
</style>
</body>
</html>`;
