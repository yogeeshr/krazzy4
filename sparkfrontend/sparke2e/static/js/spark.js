var i=1;
var finalhtml = [];
var html1, html2, html3;
var templatebottom = '<!DOCTYPE html> <html> <head> <title>bottom text</title> <style> #bottomdiv {margin: auto;position: relative; width: 480px; height: 320; } #bottomimg{width: 480px; height: 320px; border-radius: 3%; position: relative; top: 0px; } img.logo{bottom: 37px; height: 32px; left: 450px; position: relative; width: 32px; } #bottomtext{width: 480px; text-align: center; color: white; font-size: 25px; position: absolute; bottom: 21px; text-shadow: 2px 2px 4px #000000; } </style>  <body> <div id="bottomdiv"> <img class="ad" id="bottomimg" src="$image"> <img class="logo" src="$iconurl"> <p id="bottomtext">$text</p> </div> </body> </html>';
var templatetop = '<!DOCTYPE html> <html> <head> <title>top text</title> <style> #topdiv{margin: auto;position: relative; width: 480px; height: 320; } #topimg{width: 480px; height: 320px; border-radius: 3%; position: relative; top: 0px; } img.logo{bottom: 37px; height: 32px; left: 450px; position: relative; width: 32px; } #toptext{width: 480px; text-align: center; color: white; font-size: 25px; position: absolute; top: 0px; text-shadow: 2px 2px 4px #000000; } </style>  <body> <div id="topdiv"> <img class="ad" id="topimg" src="$image"> <img class="logo" src="$iconurl"> <p id="toptext">$text</p> </div> </body> </html>';
var templatecenter = '<!DOCTYPE html> <html> <head> <title>center text</title> <style> #centerdiv {margin: auto;position: relative; width: 480px; height: 320; } #centerimg{width: 480px; height: 320px; border-radius: 3%; position: relative; top: 0px; opacity: 0.7; } img.logo{bottom: 37px; height: 32px; left: 450px; position: relative; width: 32px; } #centertext{width: 480px; text-align: center; color: white; font-size: 25px; position: absolute; bottom: 160px; text-shadow: 2px 2px 4px #000000; } </style>  <body> <div id="centerdiv"> <img class="ad" id="centerimg" src="$image"> <img class="logo" src="$iconurl"> <p id="centertext">$text</p> </div> </body> </html>';
var templatecenterhack = '<!DOCTYPE html> <html> <head> <title>center text</title> <style> #centerdiv {margin: auto;position: relative; width: 480px; height: 320; } #centerhackimg{width: 480px; height: 320px; border-radius: 3%; position: relative; top: 0px; opacity: 0.7; } img.logo{bottom: 37px; height: 32px; left: 450px; position: relative; width: 32px; } #centertext{width: 480px; text-align: center; color: white; font-size: 25px; position: absolute;margin-bottom: 0px; bottom: 160px; text-shadow: 2px 2px 4px #000000; } </style> <body> <div id="centerdiv"> <img class="ad" id="centerhackimg" src="$image"> <img class="logo" src="$iconurl"> <p id="centertext" style="height: 15px;">$text</p> </div> </body> </html>';

$(document).ready(function(){
  $("#add").click(function () {
    i++;
    $(".inputassets").append('<div id="assetborder'+i+'" class="asset"><input type="text"  name="field'+i+'a" id="image'+i+'" placeholder="Image URL '+i+'"><input type="text" name="field'+i+'b" id="text'+i+'" placeholder="Text"><input type="text" name="field'+i+'c" id="weight'+i+'" placeholder="Weight (in %)"><div id="template'+i+'"></div><button class="buttonx" onclick="previewTemplatesForOneAsset(this.id)" id="'+i+'" type="submit" ><span><y id="btnlbla">Pick Template</y></span></button></div>');
    return false;
   });

    $("#remove").click(function () {
        document.getElementById('image'+i).remove()
        document.getElementById('text'+i).remove();
        i--;
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

    if(imageurl == "" || imageurl == null){
        alert("Please input Image Url.")
    }else if(text == "" || text == null){
        alert("Please input text.")
    }else if(!(format == "png" || format == "jpg" || formata == "jpeg" || format == "gif" ||
         format == "svg" || formata == "apng" || format == "bmp")){
            alert("Please check Image URL. Supported formats - PNG, JPG, JPEG, GIF, SVG, APNG, BMP");
    }else{
        html1 = templatebottom.replace("$text",text).replace("$image",imageurl).replace("$iconurl",logourl);
        html2 = templatetop.replace("$text",text).replace("$image",imageurl).replace("$iconurl",logourl);
        html3 = templatecenter.replace("$text",text).replace("$image",imageurl).replace("$iconurl",logourl);
        html3hack = templatecenterhack.replace("$text",text).replace("$image",imageurl).replace("$iconurl",logourl);
        var modal='<div id="id'+id+'" class="modal"><div class="modal-content1 animate"><div class="imgcontainer"><y id="feedthanksa"><h4>Click on the template to select </h4></y></div><div class="containery" style="padding:10px;"><button type="button" style="border-radius:20px" onclick="closeModal('+id+')" class="cancelbtn">Cancel</button> </div><x id="Bottom" style="margin: auto;width:100%;" onclick="pickTemplate(this.id,'+id+')">'+html1+'</x><br><br><x id="Top" style="margin: auto;" onclick="pickTemplate(this.id,'+id+')">'+html2+'</x><br><br> <x id="Center" style="margin: auto;" onclick="pickTemplate(this.id,'+id+')">'+html3hack+'</x><br><br>  </div>';
        $("body").append(modal);
        document.getElementById('id'+id).style.display='block';
    }
}

//function previewTemplates(){
//    var x=1;
//    var imageurl = [];
//    var text = [];
//    var length = [];
//    var urlsubstr = [];
//    var urlasubstr = [];
//    var weight = i/100
//    var logourl = document.getElementById("iconurl").value;
//    while(x<=i){
//        imageurl.push(document.getElementById("image"+x).value);
//        text.push(document.getElementById("text"+x).value);
//        length.push(document.getElementById("image"+x).value.length);
//        urlsubstr.push(document.getElementById("image"+x).value.substring(document.getElementById("image"+x).value.length-3,document.getElementById("image"+x).value.length));
//        urlasubstr.push(document.getElementById("image"+x).value.substring(document.getElementById("image"+x).value.length-4,document.getElementById("image"+x).value.length));
//        x++;
//    }
//
//    htmla1 = templatebottom.replace("$text",text[0]).replace("$image",imageurl[0]).replace("$iconurl",logourl);
//    htmla2 = templatetop.replace("$text",text[1]).replace("$image",imageurl[1]).replace("$iconurl",logourl);
//    htmla3 = templatecenter.replace("$text",text[2]).replace("$image",imageurl[2]).replace("$iconurl",logourl);
//
//    document.getElementById('id01').style.display='block';
//}

function pickTemplate(templateid,id){
    if(document.getElementById('templateinput'+id) != null){
        document.getElementById('templateinput'+id).remove();
    }
    var template='<input type="text" name="field'+id+'c" id="templateinput'+id+'" value="Template Picked : '+templateid+'">';
    $("#template"+id).append(template);
    switch(templateid) {
        case "Bottom":
                      finalhtml[id] = html1;
                      break;
        case "Top"   :
                      finalhtml[id] = html2;
                      break;
        case "Center":
                      finalhtml[id] = html3;
                      break;
    }
    document.getElementById('id'+id).style.display='none';
}

function closeModal(id){
    document.getElementById('id'+id).style.display='none';
}

function createVideo(){

    var campaigname = document.getElementById("campaignname").value;
    var audiourl = document.getElementById("audio").value;
    var iconurl = document.getElementById("iconurl").value;
    var weight = [];
    var numberOfImages = i;
    var flag = 0;
    var fixedWeight = (1/numberOfImages)*100;
    var total=0;
    for(k=1;k<=numberOfImages;k++){
        weight[k] = document.getElementById("weight"+k).value;;
        total += parseInt(weight[k]);
        if(finalhtml[k] == null){
            alert("Please select Template for Image "+k);
            flag += 1;
        }
        if(weight[k] == null){
            alert("Please enter weight (in %) for Image "+k);
            flag += 1;
        }
    }
    if(flag == 0){
        if(total != 100){
            alert("Total weight has to be 100%. Please update the weight inputs.")
        }else{
            data = [];
            data[0] = campaigname;
            data[1] = audiourl;
//            data[2] = iconurl;
            data[2] = numberOfImages;
            m=3;
            for(z=1;z<=numberOfImages;z++){
                data[m] = finalhtml[z];
                m++;
            }
        }

    }


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