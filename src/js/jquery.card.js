(function($){
  
  var defaultOptions = {
    "speed" : 1000,
    "stand" : "",
    "step1" : "",
    "step2" : "",
    "target" : ""
  }

  var stepIndex = 0;

  var settings = defaultOptions;

  var styles = {
    card: "display: flex;flex-direction: column;margin: 10px;border: 1px solid black;padding: 10px;background-color: #DCDCDC",
    sub_card: "display: flex;flex: 3;flex-direction: row;",
    title: "display: flex;flex: 4;",
    image: "width: 75;height: 75;border-radius: 50px;border: 1px solid black;",
    img_wrapper: "display: flex;flex: 2;justify-content: flex-end",
    name: "display: flex; flex: 1;"
  }

  jQuery.fn.card = function(options) {
    var template = [
      "<div class='card' style='" + styles.card + "'>",
      "\t<div class='sub_card' style='" + styles.sub_card + "'>",
      "\t\t<div class='name' style='" + styles.title + "'>" + options.title +"</div>",
      "\t\t<div class='img_wrapper' style='" + styles.img_wrapper + "'><img src='" + options.picture + "' style='" + styles.image + "' /></div>",
      "\t</div>",
      "\t<div class='name' style='" + styles.name + "'>" + options.name + "</div>",
      "</div>"
    ];

    var card = $(template.join('\n'));

    jQuery(this).append(card);

    jQuery(card).click(function(event) {
      
      alert(options.abstract);
    });
  };

}(jQuery));