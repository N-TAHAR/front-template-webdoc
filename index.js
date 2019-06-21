window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

var scene = document.getElementById('scene');
var scene2 = document.getElementById('scene2');
var scene3 = document.getElementById('scene3');
var scene4 = document.getElementById('scene4');
var parallaxInstance = new Parallax(scene);
var parallaxInstance = new Parallax(scene2);
var parallaxInstance = new Parallax(scene3);
var parallaxInstance = new Parallax(scene4);

var s = skrollr.init();

let intro = document.querySelectorAll('.intro-home div');
let memoPos1 = "50vh";
let memoPos2 = "200vh";
let memoPos3 = "300vh";
let memoPos4 = "400vh";


let resetIntro = function (intro){
  intro.forEach(element => {
    element.classList.remove('reveal');
    // element.style.position = "absolute";
    // if(element.classList.contains('title1')){
    //   element.style.top = memoPos1;
    // }
    // else if(element.classList.contains('title2')){
    //   element.style.top = memoPos2;
    // }
    // else if(element.classList.contains('title3')){
    //   element.style.top = memoPos3;
    // }
    // else if(element.classList.contains('title4')){
    //   element.style.top = memoPos4;
    // }

  });
}

intro.forEach(element => {
  var waypoint = new Waypoint({
    element: element,
    handler: function() {
      resetIntro(intro)
      this.element.classList.add('reveal')
      this.element.style.position = "fixed"
      this.element.style.top = "0"
    },
  })
  
});

let tableau = document.querySelectorAll('.container-problem > div');

tableau.forEach(element => {

  var waypoint = new Waypoint({
    element: element,
    handler: function() {
      this.element.classList.toggle('fixed')
    }
  })
  
});

let cases = document.querySelectorAll('.tableau div');

cases.forEach(element => {

  element.addEventListener('click', () =>{
    element.style.width = "100vw";
    element.style.height = "100vh";
    element.style.top = "0";
    element.style.left = "0";
    element.style.bottom = "0";
    element.style.right = "0";
    element.style.zIndex = "10";
    document.querySelector('.problem').style.opacity = "0"
    })
  
});

let introView = document.querySelector('.intro-view');

var waypoint = new Waypoint({
  element: introView,
  handler: function() {
    resetIntro(intro)
    this.element.classList.toggle('fixed')
  },
})

let problem = document.querySelector('.problem');

var waypoint = new Waypoint({
  element: problem,
  handler: function(direction) {
    if(direction === "down"){
      resetIntro(intro)
      introView.classList.remove('fixed')
      introView.style.bottom = "0"
      introView.style.top = "unset"
    } else {
      resetIntro(intro)
      introView.classList.add('fixed')
      introView.style.top = "0"
    }
  },
  offset:"100%"
})



