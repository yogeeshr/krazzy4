var i=1;
var templatebottom = '<!DOCTYPE html> <html> <head> <title>bottom text</title> <style> div {position: relative; width: 480px; height: 320; } img.ad{width: 480px; height: 320px; border-radius: 3%; position: relative; top: 0px; } img.logo{bottom: 37px; height: 32px; left: 450px; position: relative; width: 32px; } p{width: 480px; text-align: center; color: white; font-size: 25px; position: absolute; bottom: 21px; text-shadow: 2px 2px 4px #000000; } </style> </head> <body> <div> <img class="ad" src="$image"> <img class="logo" src="$iconurl"> <p>$text</p> </div> </body> </html>';
var templatetop = '<!DOCTYPE html> <html> <head> <title>top text</title> <style> div {position: relative; width: 480px; height: 320; } img.ad{width: 480px; height: 320px; border-radius: 3%; position: relative; top: 0px; } img.logo{bottom: 37px; height: 32px; left: 450px; position: relative; width: 32px; } p{width: 480px; text-align: center; color: white; font-size: 25px; position: absolute; top: 0px; text-shadow: 2px 2px 4px #000000; } </style> </head> <body> <div> <img class="ad" src="$image"> <img class="logo" src="$iconurl"> <p>$text</p> </div> </body> </html>';
var templatecenter = '<!DOCTYPE html> <html> <head> <title>center text</title> <style> div {position: relative; width: 480px; height: 320; } img.ad{width: 480px; height: 320px; border-radius: 3%; position: relative; top: 0px; opacity: 0.7; } img.logo{bottom: 37px; height: 32px; left: 450px; position: relative; width: 32px; } p{width: 480px; text-align: center; color: white; font-size: 25px; position: absolute; bottom: 160px; text-shadow: 2px 2px 4px #000000; } </style> </head> <body> <div> <img class="ad" src="$image"> <img class="logo" src="$iconurl"> <p>$text</p> </div> </body> </html>';

$(document).ready(function(){
  $("#add").click(function () {
    i++;
    $(".inputassets").append('<div id="assetborder'+i+'" class="asset"><input type="text"  name="field'+i+'a" id="image'+i+'" placeholder="Image URL '+i+'"><input type="text" name="field'+i+'b" id="text'+i+'" placeholder="Text"></div>');
    return false;
   });

   $("#remove").click(function () {
    if(!(i<2)){
        document.getElementById('image'+i).remove()
       document.getElementById('text'+i).remove();
       document.getElementById('assetborder'+i).remove();
       i--;
    }
    return false;
   });
});

function previewTemplatesForOneAsset(id){
    var logourl = document.getElementById("iconurl").value;
    var imageurl = document.getElementById("image"+id).value;
    var text = document.getElementById("text"+id).value;
    var length = document.getElementById("image"+id).value.length;
    var format = document.getElementById("image"+id).value.substring(document.getElementById("image"+id).value.length-3,document.getElementById("image"+id).value.length);
    var formata = document.getElementById("image"+id).value.substring(document.getElementById("image"+id).value.length-4,document.getElementById("image"+id).value.length);

    html1 = templatebottom.replace("$text",text).replace("$image",imageurl).replace("$iconurl",logourl);
    html2 = templatetop.replace("$text",text).replace("$image",imageurl).replace("$iconurl",logourl);
    html3 = templatecenter.replace("$text",text).replace("$image",imageurl).replace("$iconurl",logourl);

    var xyz='<div id="id01" class="modal"><div class="modal-content1 animate"><div class="imgcontainer"><y id="feedthanksa"><h4>Please select the image template</h4></y></div><x id="center" style="width:100%;" onclick="clicked(this.id)">'+html1+'</x><br><br><x id="top" onclick="clicked(this.id)">'+html2+'</x><br><br> <x id="bottom" onclick="clicked(this.id)">'+html3+'</x><br><br> <div class="containery" style="padding:10px;"> <button type="button" onclick="submitfeedback()" class="submitbtn"> <y id="submit1a">Submit</y> </button>  </div> </div>';
    console.log(xyz);
    $("body").append(xyz);
    document.getElementById('id01').style.display='block';

}
function previewTemplates(){
    var x=1;
    var imageurl = [];
    var text = [];
    var length = [];
    var urlsubstr = [];
    var urlasubstr = [];
    var weight = i/100
    var logourl = document.getElementById("iconurl").value;
    while(x<=i){
        imageurl.push(document.getElementById("image"+x).value);
        text.push(document.getElementById("text"+x).value);
        length.push(document.getElementById("image"+x).value.length);
        urlsubstr.push(document.getElementById("image"+x).value.substring(document.getElementById("image"+x).value.length-3,document.getElementById("image"+x).value.length));
        urlasubstr.push(document.getElementById("image"+x).value.substring(document.getElementById("image"+x).value.length-4,document.getElementById("image"+x).value.length));
        x++;
    }

    html1 = templatebottom.replace("$text",text[0]).replace("$image",imageurl[0]).replace("$iconurl",logourl);
    html2 = templatetop.replace("$text",text[1]).replace("$image",imageurl[1]).replace("$iconurl",logourl);
    html3 = templatecenter.replace("$text",text[2]).replace("$image",imageurl[2]).replace("$iconurl",logourl);

    alert(html1);
    alert(html2);
    alert(html3);
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