var config = {
    apiKey: "AIzaSyDKfbSL1CzA6Xsoz-r22Nz1iQ9LLjol0mI",
    authDomain: "snt-website.firebaseapp.com",
    databaseURL: "https://snt-website.firebaseio.com",
    projectId: "snt-website",
    storageBucket: "snt-website.appspot.com",
    messagingSenderId: "906105933125"
  };
var bl=0, gl=0;
var dn=[];
firebase.initializeApp(config);
var db = firebase.firestore();
function blogmaker(code){
    var dt=[];
    if(code!='gensec' && code!='indexblg')
    var hu = new Vue({
        el: '#blogrender',
        data () {
          return {
          bloglist: []
          }
        },
        mounted () {
        db.collection("thcclub").doc(code).get().then((doc) => {
            dt=[];
            dt.push(doc.data().src);
            dt.push(doc.data().src2);
            dt.push(doc.data().src3);
            dt.push(doc.data().src4);
            dt.push(doc.data().src5);
            execute(dt);
        });
        db.collection("thcclub").doc(code).collection("blogs").orderBy("timeStamp", "desc").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var dx=doc.data();
                dx.time=new Date(doc.data().timeStamp.seconds*1000);
                this.bloglist.push(dx);
            });
        });
    }
});
else
var hu = new Vue({
    el: '#blogrender',
    data () {
      return {
      bloglist: []
      }
    },
    mounted () {
    db.collection("gallery").orderBy("timeStamp", "desc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            dt.push(doc.data().src);
        });
        if(code!='indexblg')
        execute(dt);
    });
    db.collection("gensec-blogs").orderBy("timeStamp", "desc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var dx=doc.data();
            dx.time=new Date(doc.data().timeStamp.seconds*1000);
            bl++;
            if(code=='indexblg' && bl<=6){
                this.bloglist.push(dx);}
            if(code!='indexblg')
                this.bloglist.push(dx);
        });
    });
}
});
}

function execute(x1){
    jQuery(document).ready(function($){
    'use strict';
    jQuery('body').backstretch(x1, {duration: 5000, fade: 500});
    });
}

function gallerymaker(code){
    if(code=='indexgallery')
    var ru = new Vue({
        el: '#galleryrender',
        data () {
          return {
          imglist: []
          }
        },
        mounted () {
        db.collection("gallery").orderBy("timeStamp", "desc").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                gl++;
                if(gl<=9)
                    this.imglist.push(doc.data());
            });
        });
    }
    });
}