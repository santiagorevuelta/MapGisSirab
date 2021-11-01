module.exports = `<!DOCTYPE html>
<html lang="">
<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
  <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
</head>
<body style="padding: 0; margin: 0;">
   <select class="js-example-basic-single js-example-placeholder-single" id="select" name="state">
    <option value="WY">s</option>
    <option value="WY">a</option>
    <option value="WY">n</option>
    <option value="WY">t</option>
    <option value="WY">i</option>
  </select>
<script>
$(document).ready(function() {
    $('.js-example-basic-single').select2();
    $(".js-example-placeholder-single").select2({
      placeholder: "Todos...",
      allowClear: true
    });
});

function llenarSelect(json) {
 $("select").empty();
}

</script>
<style>
.js-example-basic-single{
  width: 100%;
  height: 100%;
  z-index: 10;
  border-radius: 25%;
}

</style>
</body>
</html>`;
