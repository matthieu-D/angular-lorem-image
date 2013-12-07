'use strict';

/* Services */

angular.module('myApp.services', []).service('urlBuilder', function() {
  this.build = function (width,height,category,text,count){
  var url='http://lorempixel.com/';
  if (width == undefined) {
    console.log('setting width to default value');
    var width = '300';
  }
  url += width +'/';
  if (height == undefined) {
    var height = '200';
    console.log('setting height to default value');
  }
  url += height;
  if (category != undefined) {
      url+= '/'+category;
  }
  if (text != undefined) {
      url += '/'+text;
  }
  return url;
}
}).service('imageBuilder', function(urlBuilder) {
  this.build = function(width,height,category,count,text){
    var images = [];
    var url = urlBuilder.build(width,height,category,text);
    if (count == undefined) {
      console.log('setting count to default value');
      count = 1;
    }
    for (var i=0;i<count;i++) {
      images.push({html:'<img src="'+url+'/?'+i+'">'});
    }
    return images;
  }
})
;
