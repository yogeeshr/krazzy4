var i=1;
$(document).ready(function(){
  $("#add").click(function () {
    i++;
    $(".inputassets").append('<input type="text" style="margin-top: 25px;" name="field'+i+'a" id="image'+i+'" placeholder="Image URL '+i+'"><input type="text" name="field'+i+'b" id="text'+i+'" placeholder="Text">');
    return false;
   });

   $("#remove").click(function () {
       document.getElementById('image'+i).remove()
       document.getElementById('text'+i).remove();
       i--;
       return false;
      });
});
function previewTemplates(){
    var x=1;
    var imageurl = [];
    var text = [];
    var length = [];
    var urlsubstr = [];
    var urlasubstr = [];
    while(x<=i){
        imageurl.push(document.getElementById("image"+x).value);
        text.push(document.getElementById("text"+x).value);
        length.push(document.getElementById("image"+x).value.length);
        urlsubstr.push(document.getElementById("image"+x).value.substring(document.getElementById("image"+x).value.length-3,document.getElementById("image"+x).value.length));
        urlasubstr.push(document.getElementById("image"+x).value.substring(document.getElementById("image"+x).value.length-4,document.getElementById("image"+x).value.length));
        x++;
    }
//    alert(imageurl[0]);
//    alert(text[0]);
//
//    alert(imageurl[1]);
//    alert(text[1]);
//    var imageurl1 = document.getElementById("image1").value;
//    var imageurl2 = document.getElementById("image2").value;
//    var imageurl3 = document.getElementById("image3").value;
//    var imageurl4 = document.getElementById("image4").value;
//    var text1 = document.getElementById("text1").value;
//    var text2 = document.getElementById("text2").value;
//    var text3 = document.getElementById("text3").value;
//    var text4 = document.getElementById("text4").value;
//
//    var length1 = imageurl1.length;
//    var length2 = imageurl2.length;
//    var length3 = imageurl3.length;
//    var length4 = imageurl4.length;
//
//    var url1substr = imageurl1.substring(length1-3,length1)
//    var url2substr = imageurl2.substring(length2-3,length2)
//    var url3substr = imageurl3.substring(length3-3,length3)
//    var url4substr = imageurl4.substring(length4-3,length4)
//
//    var url1asubstr = imageurl1.substring(length1-4,length1)
//    var url2asubstr = imageurl2.substring(length1-4,length2)
//    var url3asubstr = imageurl3.substring(length1-4,length3)
//    var url4asubstr = imageurl4.substring(length1-4,length4)

//    if(!(url1substr == "png" || url1substr == "jpg" || url1asubstr == "jpeg" || url1substr == "gif" ||
//        url1substr == "svg" || url1asubstr == "apng" || url1substr == "bmp")){
//        alert("Please check Image URL 1. Supported formats - PNG, JPG, JPEG, GIF, SVG, APNG, BMP");
//    }else if(!(url2substr == "png" || url2substr == "jpg" || url2asubstr == "jpeg" || url2substr == "gif" ||
//        url2substr == "svg" || url2asubstr == "apng" || url2substr == "bmp")){
//        alert("Please check Image URL 2. Supported formats - PNG, JPG, JPEG, GIF, SVG, APNG, BMP");
//    }else if(!(url3substr == "png" || url3substr == "jpg" || url3asubstr == "jpeg" || url3substr == "gif" ||
//        url3substr == "svg" || url3asubstr == "apng" || url3substr == "bmp")){
//        alert("Please check Image URL 2. Supported formats - PNG, JPG, JPEG, GIF, SVG, APNG, BMP");
//    }else if(!(url4substr == "png" || url4substr == "jpg" || url4asubstr == "jpeg" || url4substr == "gif" ||
//        url4substr == "svg" || url4asubstr == "apng" || url4substr == "bmp")){
//        alert("Please check Image URL 3. Supported formats - PNG, JPG, JPEG, GIF, SVG, APNG, BMP");
//    }else{
//        document.getElementById('id01').style.display='block';
//    }

    document.getElementById('id01').style.display='block';
}

function clicked(param){
    alert("hello");
    alert(param);
}