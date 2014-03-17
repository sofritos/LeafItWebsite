function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

var hydropic = "imgs2/Hydroelectric-Power-256.png";
var solarpic = "imgs2/Solar-256.png";
var powerpic = "imgs2/Power-256.png";
var windpic = "imgs2/Windmill-04-256.png";


preload([
    hydropic,
    solarpic,
    powerpic,
    windpic
]);