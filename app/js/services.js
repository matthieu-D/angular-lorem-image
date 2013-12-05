'use strict';

/* Services */

angular.module('myApp.services', []).service('imageBuilder',function() {
  this.build = function(text,count,width,height){
  var images = []
  if (count == undefined) {
      console.log('setting width to default value')
      count = 1;
  }
  if (width == undefined) {
      console.log('setting width to default value')
      var width = '300';
  }
  if (height == undefined) {
      var height = '200';
      console.log('setting height to default value')
  }
  for (var i=0;i<count;i++) {
    images.push({html:'<img src="http://lorempixel.com/'+width+'/'+height+'">'})
  }
  return images;
  }
})
;
