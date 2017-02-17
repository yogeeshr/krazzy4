var i=1;
var portraitHtml = [];
var landscapeHtml = [];
var html320x480, html480x320, html3;

var landscapetop = '<!DOCTYPE html> <html> <head> <title>top text</title> <style> #topdiv{margin: auto;position: relative; width: 480px; height: 320; } #topimg{width: 480px; height: 320px; border-radius: 3%; position: relative; top: 0px; } #landscapetoplogo{bottom: 37px; height: 32px; left: 450px; position: relative; width: 30px; border-radius: 5px; padding: inherit;} #toptext{width: 480px; text-align: center; color: white; font-size: 25px; position: absolute; top: 0px; text-shadow: 2px 2px 4px #000000; } </style>  <body> <div id="topdiv"> <img class="ad" id="topimg" src="$image"> <img id="landscapetoplogo" class="logo" src="$iconurl"> <p id="toptext">$text</p> </div> </body> </html>';
var landscapebottom = '<!DOCTYPE html> <html> <head> <title>bottom text</title> <style> #bottomdiv {margin: auto;position: relative; width: 480px; height: 320; } #bottomimg{width: 480px; height: 320px; border-radius: 3%; position: relative; top: 0px; } img.logo{bottom: 37px; height: 32px; left: 450px; position: relative; width: 30px; border-radius: 5px; padding: inherit;} #bottomtext{width: 480px; text-align: center; color: white; font-size: 25px; position: absolute; bottom: 21px; text-shadow: 2px 2px 4px #000000; } </style>  <body> <div id="bottomdiv"> <img class="ad" id="bottomimg" src="$image"> <img class="logo" src="$iconurl"> <p id="bottomtext">$text</p> </div> </body> </html>';
var landscapecenter = '<!DOCTYPE html> <html> <head> <title>center text</title> <style> #centerdiv {margin: auto;position: relative; width: 480px; height: 320; } #centerimg{width: 480px; height: 320px; border-radius: 3%; position: relative; top: 0px; opacity: 0.7; } img.logo{bottom: 37px; height: 32px; left: 450px; position: relative; width: 30px; border-radius: 5px; padding: inherit;} #centertext{width: 480px; text-align: center; color: white; font-size: 25px; position: absolute; bottom: 160px; text-shadow: 2px 2px 4px #000000; } </style>  <body> <div id="centerdiv"> <img class="ad" id="centerimg" src="$image"> <img class="logo" src="$iconurl"> <p id="centertext">$text</p> </div> </body> </html>';
//var landscapecenterhack = '<!DOCTYPE html> <html> <head> <title>center text</title> <style> #centerdiv {margin: auto;position: relative; width: 480px; height: 320; } #centerhackimg{width: 480px; height: 320px; border-radius: 3%; position: relative; top: 0px; opacity: 0.7; } img.logo{bottom: 37px; height: 32px; left: 450px; position: relative; width: 30px; border-radius: 5px; padding: inherit;} #centertext{width: 480px; text-align: center; color: white; font-size: 25px; position: absolute;margin-bottom: 0px; bottom: 160px; text-shadow: 2px 2px 4px #000000; } </style> <body> <div id="centerdiv"> <img class="ad" id="centerhackimg" src="$image"> <img class="logo" src="$iconurl"> <p id="centertext" style="height: 15px;">$text</p> </div> </body> </html>';

var portraitfromlandscapetop = '<!DOCTYPE html> <html> <head> <title>top text</title> <style> #portraitfromlandscapetopdiv {position: relative; width: 480px; height: 320; } #portraitfromlandscapetopbgimg {border-radius: 3%; height: 480px; opacity: 0.4; position: relative; top: 0; width: 320px; } #portraitfromlandscapetopimg {border-radius: 3%; height: 213px; position: relative; top: -354px; width: 320px; } #portraitfromlandscapetoplogo {bottom: 219px; position: relative; right: 37px; width: 32px; height: 32px; border-radius: 10px; } #portraitfromlandscapetoptext {top: 32px; color: white; font-size: 25px; position: absolute; text-align: center; text-shadow: 2px 2px 4px #000000; width: 320px; } </style> </head> <body> <div id="portraitfromlandscapetopdiv"> <img id="portraitfromlandscapetopbgimg" class="adbackground" src="$image"> <p id="portraitfromlandscapetoptext">$text</p> <img  id="portraitfromlandscapetopimg" class="ad" src="$image"> <img id="portraitfromlandscapetoplogo" class="logo" src="$iconurl"> </div> </body> </html>';
var portraitfromlandscapecenter = '<!DOCTYPE html> <html> <head> <title>center text</title> <style> #portraitfromlandscapecenterdiv {position: relative; width: 480px; height: 320; } #portraitfromlandscapecenterimgbg {border-radius: 3%; height: 480px; opacity: 0.4; position: relative; top: 0; width: 320px; } #portraitfromlandscapecenterimg {border-radius: 3%; height: 213px; position: relative; top: -354px; width: 320px; } img.logo {bottom: 219px; position: relative; right: 37px; width: 32px; height: 32px; border-radius: 10px; } #portraitfromlandscapecentertext {bottom: 424px; color: white; font-size: 25px; position: absolute; text-align: center; text-shadow: 2px 2px 4px #000000; width: 320px; } </style> </head> <body> <div id="portraitfromlandscapecenterdiv"> <img id="portraitfromlandscapecenterimgbg" class="adbackground" src="$image"> <img id="portraitfromlandscapecenterimg" class="ad" src="$image"> <p id="portraitfromlandscapecentertext">$text</p> <img class="logo" src="$iconurl"> </div> </body> </html>';
var portraitfromlandscapebottom = '<!DOCTYPE html> <html> <head> <title>bottom text</title> <style> #portraitfromlandscapebottomdiv {position: relative; width: 480px; height: 320; } #portraitfromlandscapebottombgimg {border-radius: 3%; height: 480px; opacity: 0.4;a position: relative; top: 0; width: 320px; } #portraitfromlandscapebottomimg {border-radius: 3%; height: 213px; position: relative; top: -354px; width: 320px; } img.logo {bottom: 219px; position: relative; right: 37px; width: 32px; height: 32px; border-radius: 10px; } #portraitfromlandscapebottomtext {bottom: 228px; color: white; font-size: 25px; position: absolute; text-align: center; text-shadow: 2px 2px 4px #000000; width: 320px; } </style> </head> <body> <div id="portraitfromlandscapebottomdiv"> <img id="portraitfromlandscapebottombgimg" class="adbackground" src="$image"> <p id="portraitfromlandscapebottomtext">$text</p> <img id="portraitfromlandscapebottomimg" class="ad" src="$image"> <img class="logo" src="$iconurl"> </div> </body> </html>';

var landscapefromportraittop = '<!DOCTYPE html> <html> <head> <title>480x320 top blurr text</title> <style>' +
    ' #landscapefromportraittopdiv {position: relative; width: 480px; height: 320; } #landscapefromportraittopbgimg {border-radius: 3%; height: 320px; opacity: 0.4; position: relative; top: 0; width: 480px; } #landscapefromportraittopimg{border-radius: 3%; height: 320px; left: 132px; position: relative; top: -320px; width: 213px; } #landscapefromportraittoplogo {border-radius: 10px; bottom: 325px; height: 32px; left: 231px; position: relative; width: 32px; } #landscapefromportraittoptext {color: white; font-size: 25px; left: 79px; position: absolute; text-align: center; text-shadow: 2px 2px 4px #000000; top: 0; width: 320px; } </style> </head> <body> <div id="landscapefromportraittopdiv"> <img id="landscapefromportraittopbgimg" class="adbackground" src="$image"> <p id="landscapefromportraittoptext">$text</p> <img id="landscapefromportraittopimg" class="ad" src="$image"> <img id="landscapefromportraittoplogo" class="logo" src="$iconurl"> </div> </body>';
var landscapefromportraitbottom = '<!DOCTYPE html> <html> <head> <title>480x320 bottom blurr text</title> <style> #landscapefromportraitbottomdiv {position: relative; width: 480px; height: 320; } #landscapefromportraitbottombgimg {border-radius: 3%; height: 320px; opacity: 0.4; position: relative; top: 0; width: 480px; } #landscapefromportraitbottomimg {border-radius: 3%; height: 320px; left: 132px; position: relative; top: -320px; width: 213px; } #landscapefromportraitbottomlogo {border-radius: 10px; bottom: 325px; height: 32px; left: 231px; position: relative; width: 32px; } #landscapefromportraitbottomtext {bottom: 309px; color: white; font-size: 25px; left: 79px; position: absolute; text-align: center; text-shadow: 2px 2px 4px #000000 ; width: 320px; } </style> </head> <body> <div id="landscapefromportraitbottomdiv"> <img id="landscapefromportraitbottombgimg" class="adbackground" src="$image"> <p id="landscapefromportraitbottomtext">$text</p> <img id="landscapefromportraitbottomimg" class="ad" src="$image"> <img class="logo" id="landscapefromportraitbottomlogo" src="$iconurl"> </div> </body> </html>';
var landscapefromportraitcenter = '<!DOCTYPE html> <html> <head> <title>480x320 top blurr text</title> <style> #landscapefromportraitcenterdiv {position: relative; width: 480px; height: 320; } #landscapefromportraitcenterbgimage {border-radius: 3%; height: 320px; opacity: 0.4; position: relative; top: 0; width: 480px; } #landscapefromportraitcenterimg {border-radius: 3%; height: 320px; left: 132px; position: relative; top: -320px; width: 213px; } #landscapefromportraitcenterlogo {border-radius: 10px; bottom: 325px; height: 32px; left: 231px; position: relative; width: 32px; } #landscapefromportraitcentertext {color: white; font-size: 25px; left: 79px; position: absolute; text-align: center; text-shadow: 2px 2px 4px #000000 ; top: 123px; width: 320px; } </style> </head> <body> <div id="landscapefromportraitcenterdiv"> <img id="landscapefromportraitcenterbgimage" class="adbackground" src="$image"> <p id="landscapefromportraitcentertext">$text</p> <img id="landscapefromportraitcenterimg" class="ad" src="$image"> <img class="logo" id="landscapefromportraitcenterlogo" src="$iconurl"> </div> </body> </html>';
//var landscapecenterfromportraithack = 'TBD';


var portraitbottom = '<!DOCTYPE html> <html> <head> <title>bottom text</title> <style> #portraitbottomdiv {position: relative; width: 320px; height: 480; } #portraitbottomimg{width: 320px; height: 480px; border-radius: 3%; position: relative; top: 0px; } #portraitbottomlogo{border-radius: 7px; bottom: 37px; height: 32px; left: 288px; position: relative; width: 32px; } #portraitbottomtext{bottom: 46px; color: white; font-size: 25px; position: absolute; text-align: center; text-shadow: 2px 2px 4px #000000; width: 320px; } </style> </head> <body> <div id="portraitbottomdiv"> <img id="portraitbottomimg" class="ad" src="$image"> <img id="portraitbottomlogo" class="logo" src="$iconurl"> <p id="portraitbottomtext">$text</p> </div> </body> </html>';
var portraittop = '<!DOCTYPE html> <html> <head> <title>bottom text</title> <style> #portraittopdiv {position: relative; width: 320px; height: 480; } #portraittopimg{width: 320px; height: 480px; border-radius: 3%; position: relative; top: 0px; } img.logo{border-radius: 7px; bottom: 37px; height: 32px; left: 288px; position: relative; width: 32px; } #portraittoptext{top: 4px; color: white; font-size: 25px; position: absolute; text-align: center; text-shadow: 2px 2px 4px #000000; width: 320px; } </style> </head> <body> <div id="portraittopdiv"> <img id="portraittopimg" class="ad" src="$image"> <img class="logo" src="$iconurl"> <p id="portraittoptext">$text</p> </div> </body> </html>';
var portraitcenter = '<!DOCTYPE html> <html> <head> <title>potrate center text</title> <style> #portraitcenterdiv {position: relative; width: 320px; height: 480; } #portraitcenterimg{width: 320px; height: 480px; border-radius: 3%; position: relative; top: 0px; opacity: 0.4; } img.logo{border-radius: 7px; bottom: 37px; height: 32px; left: 288px; position: relative; width: 32px; } #portraitcentertext{bottom: 226px; color: white; font-size: 25px; position: absolute; text-align: center; text-shadow: 2px 2px 4px #000000; width: 320px; } </style> </head> <body> <div id="portraitcenterdiv"> <img id="portraitcenterimg" class="ad" src="$image"> <img class="logo" src="$iconurl"> <p id="portraitcentertext">$text</p> </div> </body> </html>';

//var portraithack = 'TBD';


var imageHeight;
var imageWidth;
$(document).ready(function(){
  $("#add").click(function () {
    i++;
    $(".inputassets").append('<div id="assetborder'+i+'" class="asset"><input type="text"  name="field'+i+'a" id="image'+i+'" placeholder="Image URL '+i+'" onfocusout="preview(this.id)"><input type="text" name="field'+i+'b" id="text'+i+'" placeholder="Text"><input type="text" name="field'+i+'c" id="weight'+i+'" placeholder="Weight (in %)"><select id="positionid'+i+'"> <option id="0">Text Position</option> <option id="1">Top</option> <option id="2">Center</option> <option id="3">Bottom</option> </select><button class="buttonx" onclick="previewTemplatesForOneAsset(this.id)" id="'+i+'" type="submit" ><span><y id="btnlbla">Preview</y></span></button></div>');
    return false;
   });

    $("#remove").click(function () {
        document.getElementById('image'+i).remove()
        document.getElementById('text'+i).remove();
        document.getElementById('weight'+i).remove();
        document.getElementById('positionid'+i).remove();
        document.getElementById('assetborder'+i).remove();
        document.getElementById(i).remove();
        i--;
        return false;
    });
});

function showLoading(){
    document.getElementById("loading").style.display = "inline";
    $("#allcontainer").css("opacity","0.3");
    $("#loading").fadeIn(300);
}

function hideLoading(){
    document.getElementById("loading").style.display = "none";
    $("#allcontainer").css("opacity","1");
    $("#loading").fadeOut(300);
}
//
//function getMeta(url){
//    alert("inside");
//    $("<img/>",{
//        load : function(){imageHeight = str(this.height);
//        imageWidth = str(this.width);
//        alert(imageWidth);
//        alert(imageHeight);
//        },
//        src  : url
//    });
//}

function getMeta(url){
//    var imgtag = '<img src="'+url+'" style="display:none" id="testid">';
//    $("#container1").append(imgtag);
    $("<img/>",{
        load : function(){ getdimensions(this.height,this.width); },
        src  : url
    });
}

function getdimensions(h,w){
    imageHeight = h;
    imageWidth = w;
}
function previewTemplatesForOneAsset(id){
    var position = document.getElementById('positionid'+i).value;
    if(document.getElementById('id'+i) != null){
         document.getElementById('id'+i).remove();
    }
    var logourl = document.getElementById("iconurl").value;
    var imageurl = document.getElementById("image"+id).value;

    var text = document.getElementById("text"+id).value;
    var length = document.getElementById("image"+id).value.length;
    var format = document.getElementById("image"+id).value.substring(document.getElementById("image"+id).value.length-3,document.getElementById("image"+id).value.length);
    var formata = document.getElementById("image"+id).value.substring(document.getElementById("image"+id).value.length-4,document.getElementById("image"+id).value.length);

//    getMeta(imageurl);
//    var landscapebottom = '<!DOCTYPE html> <html> <head> <title>bottom text</title> <style> #bottomdiv {margin: auto;position: relative; width: 480px; height: 320; } #bottomimg{width: 480px; height: 320px; border-radius: 3%; position: relative; top: 0px; } img.logo{bottom: 37px; height: 32px; left: 450px; position: relative; width: 30px; border-radius: 5px; padding: inherit;} #bottomtext{width: 480px; text-align: center; color: white; font-size: 25px; position: absolute; bottom: 21px; text-shadow: 2px 2px 4px #000000; } </style>  <body> <div id="bottomdiv"> <img class="ad" id="bottomimg" src="$image"> <img class="logo" src="$iconurl"> <p id="bottomtext">$text</p> </div> </body> </html>';
//    var landscapetop = '<!DOCTYPE html> <html> <head> <title>top text</title> <style> #topdiv{margin: auto;position: relative; width: 480px; height: 320; } #topimg{width: 480px; height: 320px; border-radius: 3%; position: relative; top: 0px; } img.logo{bottom: 37px; height: 32px; left: 450px; position: relative; width: 30px; border-radius: 5px; padding: inherit;} #toptext{width: 480px; text-align: center; color: white; font-size: 25px; position: absolute; top: 0px; text-shadow: 2px 2px 4px #000000; } </style>  <body> <div id="topdiv"> <img class="ad" id="topimg" src="$image"> <img class="logo" src="$iconurl"> <p id="toptext">$text</p> </div> </body> </html>';
//    var landscapecenter = '<!DOCTYPE html> <html> <head> <title>center text</title> <style> #centerdiv {margin: auto;position: relative; width: 480px; height: 320; } #centerimg{width: 480px; height: 320px; border-radius: 3%; position: relative; top: 0px; opacity: 0.7; } img.logo{bottom: 37px; height: 32px; left: 450px; position: relative; width: 30px; border-radius: 5px; padding: inherit;} #centertext{width: 480px; text-align: center; color: white; font-size: 25px; position: absolute; bottom: 160px; text-shadow: 2px 2px 4px #000000; } </style>  <body> <div id="centerdiv"> <img class="ad" id="centerimg" src="$image"> <img class="logo" src="$iconurl"> <p id="centertext">$text</p> </div> </body> </html>';
//    var landscapecenterhack = '<!DOCTYPE html> <html> <head> <title>center text</title> <style> #centerdiv {margin: auto;position: relative; width: 480px; height: 320; } #centerhackimg{width: 480px; height: 320px; border-radius: 3%; position: relative; top: 0px; opacity: 0.7; } img.logo{bottom: 37px; height: 32px; left: 450px; position: relative; width: 30px; border-radius: 5px; padding: inherit;} #centertext{width: 480px; text-align: center; color: white; font-size: 25px; position: absolute;margin-bottom: 0px; bottom: 160px; text-shadow: 2px 2px 4px #000000; } </style> <body> <div id="centerdiv"> <img class="ad" id="centerhackimg" src="$image"> <img class="logo" src="$iconurl"> <p id="centertext" style="height: 15px;">$text</p> </div> </body> </html>';

    if(imageurl == "" || imageurl == null){
        alert("Please input Image Url.")
    }else if(text == "" || text == null){
        alert("Please input text.")
    }else if(position=="Text Position"){
             alert("Please input text position.")
     }else if(!(format == "png" || format == "jpg" || formata == "jpeg" || format == "gif" ||
         format == "svg" || formata == "apng" || format == "bmp")){
            alert("Please check Image URL. Supported formats - PNG, JPG, JPEG, GIF, SVG, APNG, BMP");
    }else{

        var templateIdChosen = selectTemplate(imageHeight,imageWidth, position, imageurl);
        switch (templateIdChosen) {
            case "21" :
                html320x480 = portraittop.replace("$text",text).replace("$image",imageurl).replace("$image",imageurl).replace("$iconurl",logourl);
                html480x320 = landscapefromportraittop.replace("$text",text).replace("$image",imageurl).replace("$image",imageurl).replace("$iconurl",logourl);
                break;
            case "22" :
                html320x480 = portraitcenter.replace("$text",text).replace("$image",imageurl).replace("$image",imageurl).replace("$iconurl",logourl);
                html480x320 = landscapefromportraitcenter.replace("$text",text).replace("$image",imageurl).replace("$image",imageurl).replace("$iconurl",logourl);
                break;
            case "23" :
                html320x480 = portraitbottom.replace("$text",text).replace("$image",imageurl).replace("$image",imageurl).replace("$iconurl",logourl);
                html480x320 = landscapefromportraitbottom.replace("$text",text).replace("$image",imageurl).replace("$image",imageurl).replace("$iconurl",logourl);
                break;
            case "11" :
                html320x480 = portraitfromlandscapetop.replace("$text",text).replace("$image",imageurl).replace("$image",imageurl).replace("$iconurl",logourl);
                html480x320 = landscapetop.replace("$text",text).replace("$image",imageurl).replace("$image",imageurl).replace("$iconurl",logourl);
                break;
            case "12" :
                html320x480 = portraitfromlandscapecenter.replace("$text",text).replace("$image",imageurl).replace("$image",imageurl).replace("$iconurl",logourl);
                html480x320 = landscapecenter.replace("$text",text).replace("$image",imageurl).replace("$image",imageurl).replace("$iconurl",logourl);
               
                break;
            case "13" :
                html320x480 = portraitfromlandscapebottom.replace("$text",text).replace("$image",imageurl).replace("$image",imageurl).replace("$iconurl",logourl);
                html480x320 = landscapebottom.replace("$text",text).replace("$image",imageurl).replace("$image",imageurl).replace("$iconurl",logourl);
                break;
        }

                portraitHtml[i] = html320x480;
                landscapeHtml[i] = html480x320;


//        html320x480 = landscapebottom.replace("$text",text).replace("$image",imageurl).replace("$image",imageurl).replace("$iconurl",logourl);
//        html480x320 = landscapetop.replace("$text",text).replace("$image",imageurl).replace("$image",imageurl).replace("$iconurl",logourl);
//        html3 = landscapecenter.replace("$text",text).replace("$image",imageurl).replace("$image",imageurl).replace("$iconurl",logourl);
//        html3hack = landscapecenterhack.replace("$text",text).replace("$image",imageurl).replace("$image",imageurl).replace("$iconurl",logourl);
//        var modal='<div id="id'+id+'" class="modal"><div class="modal-content1 animate"><div class="imgcontainer"><y id="feedthanksa"><h4>Click on the template to select </h4></y></div><div class="containery" style="padding:10px;"><button type="button" style="border-radius:20px" onclick="closeModal('+id+')" class="cancelbtn">Cancel</button> </div><x id="Bottom" style="margin: auto;width:100%;" onclick="pickTemplate(this.id,'+id+')">'+html320x480+'</x><br><br><x id="Top" style="margin: auto;" onclick="pickTemplate(this.id,'+id+')">'+html480x320+'</x><br><br> <x id="Center" style="margin: auto;" onclick="pickTemplate(this.id,'+id+')">'+html3hack+'</x><br><br>  </div>';
        var modal = '<div id="id'+id+'" class="modal"> <div class="modal-content1 animate"> <div class="containery" style="padding:10px;"><button type="button" style="border-radius:20px" onclick="closeModal('+id+')" class="cancelbtn">X</button> </div> <x id="Bottom" style="margin: auto;width:100%;">'+html320x480+'</x><br><br> <x id="Top" style="margin: auto;">'+html480x320+'</x></div>';

        $("body").append(modal);
        document.getElementById('id'+id).style.display='block';
    }
}

function selectTemplate(height,width, position, imageurl){
//    alert("inside 1");
//    getMeta(imageurl);

//    alert("inside 2")
    if(height == "320" && width == "480"){
        switch (position) {
            case "Top": return "11";
            case "Center": return "12";
            case "Bottom": return "13";
        }
    }else if(width == "320" && height == "480") {
        switch (position) {
            case "Top": return "21";
            case "Center": return "22";
            case "Bottom": return "23";
        }
    }else{
        alert("This Image size is currently not supported. Please provide Interstitial images (320x480 or 480x320).");
        return 0;
    }
}

//function pickTemplate(templateid,id){
//    if(document.getElementById('templateinput'+id) != null){
//        document.getElementById('templateinput'+id).remove();
//    }
//    var template='<input type="text" name="field'+id+'c" id="templateinput'+id+'" value="Template Picked : '+templateid+'">';
//    $("#template"+id).append(template);
//    switch(templateid) {
//        case "Bottom":
//                      finalhtml[id] = html320x480;
//                      break;
//        case "Top"   :
//                      finalhtml[id] = html480x320;
//                      break;
//        case "Center":
//                      finalhtml[id] = html3;
//                      break;
//    }
//    document.getElementById('id'+id).style.display='none';
//}

function closeModal(id){
    document.getElementById('id'+id).style.display='none';
}

function createVideo(){
    var campaignname = document.getElementById("campaignname").value;
    var audiourl = document.getElementById("audio").value;
    var iconurl = document.getElementById("iconurl").value;
    var weight = [];
    var numberOfImages = i;
    var flag = 0;
    var fixedWeight = (1/numberOfImages)*100;
    var total=0;
    var audiourllength = audiourl.length;
    var audioformat = audiourl.substring(audiourllength-3,audiourllength);

    if(campaignname == null || campaignname == ""   ){
        alert("Please provide the Campaign name for which the Video is to be created. It helps us in logging.")
        flag +=1 ;
    }else if(audiourl == null || audiourl == ""){
        alert("Please provide the Audio link. Its a mandatory field.")
        flag +=1 ;
    }else if(audioformat != "mp3"){
        alert("Please provide a .mp3 audio link as Audio input.");
        flag+=1;
    }
    for(k=1;k<=numberOfImages;k++){
        weight[k] = document.getElementById("weight"+k).value;;
        total += parseInt(weight[k]);
//        if(finalhtml[k] == null){
//            alert("Please select Template for Image "+k);
//            flag += 1;
//        }
        if(weight[k] == null){
            alert("Please enter weight (in %) for Image "+k);
            flag += 1;
        }
    }
    var resultJsonObject ={};
    var assetJsonObject = {};
    var assetsJsonArray = [];
    resultJsonObject.assetsJsonArray = assetsJsonArray;
    if(flag == 0){
        if(total != 100){
            alert("Total weight has to be 100%. Please update the weight inputs.")
        }else{
            for(z=1;z<=numberOfImages;z++){
//                assetJsonObject = {'html':finalhtml[z], 'weight':weight[z]};
                assetJsonObject = {'portraithtml':portraitHtml[z],'landscapehtml':landscapeHtml[z],'weight':weight[z]};

                resultJsonObject.assetsJsonArray.push(assetJsonObject);
            }
            resultJsonObject.campaignname = campaignname;
            resultJsonObject.audiourl = audiourl;
            resultJsonObject.numberofimages = numberOfImages;
            strigifiedInput = JSON.stringify(resultJsonObject);
            console.log(strigifiedInput);

            var data = {};
            data.info = strigifiedInput;
            generateVideo("/sparke2e/generatevideo/",data);
//            showLoading();
        }

    }
}

function preview(id){
    var url = document.getElementById(id).value;
    var imgtag = '<img src="'+url+'" style="display:none" id="testid">';
    $("#container1").append(imgtag);
    getMeta(url)
}
function generateVideo(url,data){
    $.ajax({
        type : "POST",
        url : url,
        data : data,
        async:false,
        crossDomain : true,
        dataType : "text",
        success : function(data) {
            alert(data)
            var status=data.response.status;
            if(data == "success"){
//                  hideLoading();
//                url = data.response.validator
                  alert("Thanks for your feedback1111.");
            }else if (status == 500){
//                hideLoading();
                alert("Some error occurred. Please try again later1112.");
            }
        },
        error: function(data) {
//            hideLoading();
            window.alert("Thanks for your feedback312123.");
        }
    });
}

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