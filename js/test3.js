// /**
//  * Anime credits to:
//  * http://www.codrops.com
//  *
//  * Licensed under the MIT license.
//  * http://www.opensource.org/licenses/mit-license.php
//  * 
//  * Copyright 2018, Codrops
//  * http://www.codrops.com
//  */
{
    const chars = ['$','%','#','@','&','(',')','=','*','/'];
    const charsTotal = chars.length;
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    class Entry {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.image = this.DOM.el.querySelector('.content__img');
            this.DOM.title = {word: this.DOM.el.querySelector('.content__text')};
            charming(this.DOM.title.word);
            this.DOM.title.letters = Array.from(this.DOM.title.word.querySelectorAll('span'));
            this.DOM.title.letters.forEach(letter => letter.dataset.initial = letter.innerHTML);
            this.lettersTotal = this.DOM.title.letters.length;
            observer.observe(this.DOM.el);
        }  
        enter(direction = 'down') {
            this.DOM.title.word.style.opacity = 1;
            
            this.timeouts = [];
            this.complete = false;
            let cnt = 0;
            
            this.DOM.title.letters.forEach((letter, pos) => {
                const timeout = setTimeout(() => {
                    letter.innerHTML = chars[getRandomInt(0,charsTotal-1)];
                    setTimeout(() => {
                        letter.innerHTML = letter.dataset.initial;
                        ++cnt;
                        if ( cnt === this.lettersTotal ) {
                            this.complete = true;
                        }
                    }, 100);
                }, pos*80);
                this.timeouts.push(timeout);
            });
        }
        exit(direction = 'down') {
            this.DOM.title.word.style.opacity = 0;
            if ( this.complete ) return;
            for ( let i = 0, len = this.timeouts.length; i <= len - 1; ++i ) {
                clearTimeout(this.timeouts[i]);
            }
        }  
    }

    let observer;
    let current = -1;
    let allentries = [];
    const sections = Array.from(document.querySelectorAll('.content__section'));
    // Preload all the images in the page..
	imagesLoaded(document.querySelectorAll('.content__img'), () => {
        document.body.classList.remove('loading');
        if ('IntersectionObserver' in window) {
            document.body.classList.add('ioapi');

            observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if ( entry.intersectionRatio > 0.5 ) {
                        const newcurrent = sections.indexOf(entry.target);
                        if ( newcurrent === current ) return;
                        const direction = newcurrent > current;
                        if (current >= 0 ) {
                            allentries[current].exit(direction ? 'down' : 'up');
                        }
                        allentries[newcurrent].enter(direction ? 'down' : 'up');
                        current = newcurrent;
                    }
                });
            }, { threshold: 0.5 });
            
            sections.forEach(section => allentries.push(new Entry(section)));
        }
    });
}


// {
//     class Entry {
//         constructor(el) {
//             this.DOM = {el: el};
//             this.DOM.image = this.DOM.el.querySelector('.content__img');
//             this.DOM.title = {word: this.DOM.el.querySelector('.content__text')};
//             charming(this.DOM.title.word);
//             this.DOM.title.letters = Array.from(this.DOM.title.word.querySelectorAll('span'));
//             this.DOM.title.letters.forEach(letter => letter.dataset.initial = letter.innerHTML);
//             this.lettersTotal = this.DOM.title.letters.length;
//             observer.observe(this.DOM.el);
//         }
//         enter(direction = 'down') {
//             this.entertime = setTimeout(()=> {
//                 this.DOM.title.word.style.opacity = 1;
//                 anime.remove(this.DOM.title.letters);
//                 anime({
//                     targets: this.DOM.title.letters,
//                     duration: 800,
//                     delay: (target,index) => index*20,
//                     // easing: 'easeOutElastic',
//                     // translateY: [direction === 'down' ? '100%' : '-100%', '0%'],
//                     opacity: {
//                         value: [0,1],
//                         duration: 300,
//                         easing: 'linear'
//                     }
//                 });

//                 bodyEl.style.backgroundColor = this.DOM.el.dataset.bgcolor;
//             }, 150);
//         }
//         exit(direction = 'down') {
//             anime.remove(this.DOM.title.letters);
//             if ( this.entertime ) {
//                 clearTimeout(this.entertime);
//             }

//             anime({
//                 targets: this.DOM.title.letters,
//                 duration: 250,
//                 delay: (target,index) => index*20,
//                 // easing: 'easeOutExpo',
//                 // translateY: ['0%',direction === 'down' ? '-100%' : '100%'],
//                 opacity: {
//                     value: [1,0],
//                     duration: 150,
//                     easing: 'linear'
//                 },
//                 complete: () => this.DOM.title.word.style.opacity = 0
//             });
//         }
//     }

//     let observer;
//     let current = -1;
//     let allentries = [];
//     const bodyEl = document.body;
//     const sections = Array.from(document.querySelectorAll('.content__section'));
//     // Preload all the images in the page..
//     imagesLoaded(document.querySelectorAll('.content__img'), () => {
//         document.body.classList.remove('loading');
//         if ('IntersectionObserver' in window) {
//             document.body.classList.add('ioapi');

//             observer = new IntersectionObserver((entries) => {
//                 entries.forEach(entry => {
//                     if ( entry.intersectionRatio > 0.5 ) {
//                         const newcurrent = sections.indexOf(entry.target);
//                         if ( newcurrent === current ) return;
//                         const direction = newcurrent > current;
//                         if (current >= 0 ) {
//                             allentries[current].exit(direction ? 'down' : 'up');
//                         }
//                         allentries[newcurrent].enter(direction ? 'down' : 'up');
//                         current = newcurrent;
//                     }
//                 });
//             }, { threshold: 0.5 });
            
//             sections.forEach(section => allentries.push(new Entry(section)));
//         }
//     });
// }


//---------------------------------------------

// var t = { timelines: {}};

// // $('.ml12').each(function(){
// //   $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
// // });



// {
//     class Entry {
//         constructor(el) {
//             this.DOM = {el: el};
//             this.DOM.image = this.DOM.el.querySelector('.content__img');
//             this.DOM.title = {word: this.DOM.el.querySelector('.content__text')};
//             charming(this.DOM.title.word);
//             this.DOM.title.letters = Array.from(this.DOM.title.word.querySelectorAll('span'));
//             this.DOM.title.letters.forEach(letter => letter.dataset.initial = letter.innerHTML);
//             this.lettersTotal = this.DOM.title.letters.length;
//             observer.observe(this.DOM.el);
//         }
//         enter(direction = 'down') {
//             this.entertime = setTimeout(()=> {
//                 this.DOM.title.word.style.opacity = 1;
                
//                 anime.remove(this.DOM.title.letters);


//                 t.timelines["content__text"] = anime.timeline()
//                   .add({
//                     targets: this.DOM.title.letters,
//                     translateX: [20,0],
//                     translateZ: 0,
//                     opacity: [0,1],
//                     easing: "easeOutExpo",
//                     duration: 1200,
//                     delay: (target,index) => index*20,
//                 });

//                 bodyEl.style.backgroundColor = this.DOM.el.dataset.bgcolor;
//             }, 150);
//         }
//         exit(direction = 'down') {
//             anime.remove(this.DOM.title.letters);
//             if ( this.entertime ) {
//                 clearTimeout(this.entertime);
//             }

//             t.timelines["content__text"] = anime.timeline()
//                   .add({
//                     targets: this.DOM.title.letters,
//                     translateX: [40,0],
//                     translateZ: 0,
//                     opacity: [1,0],
//                     easing: "easeInExpo",
//                     duration: 200,
//                     delay: (target,index) => index*20,
//                 });

//         }
//     }

//     let observer;
//     let current = -1;
//     let allentries = [];
//     const bodyEl = document.body;
//     const sections = Array.from(document.querySelectorAll('.content__section'));
//     // Preload all the images in the page..
//     imagesLoaded(document.querySelectorAll('.content__img'), () => {
//         document.body.classList.remove('loading');
//         if ('IntersectionObserver' in window) {
//             document.body.classList.add('ioapi');

//             observer = new IntersectionObserver((entries) => {
//                 entries.forEach(entry => {
//                     if ( entry.intersectionRatio > 0.5 ) {
//                         const newcurrent = sections.indexOf(entry.target);
//                         if ( newcurrent === current ) return;
//                         const direction = newcurrent > current;
//                         if (current >= 0 ) {
//                             allentries[current].exit(direction ? 'down' : 'up');
//                         }
//                         allentries[newcurrent].enter(direction ? 'down' : 'up');
//                         current = newcurrent;
//                     }
//                 });
//             }, { threshold: 0.5 });
            
//             sections.forEach(section => allentries.push(new Entry(section)));
//         }
//     });
// }