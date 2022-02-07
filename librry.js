const hero = document.querySelector('.img');
const logo = document.querySelector('#logo');
const navlist = document.querySelector('.navlist');
const cool = document.querySelector('.cool');
const ham = document.querySelector('.hamburger');

const link = document.querySelectorAll('.navlist li');
const classes = navlist.classList;

ham.addEventListener('click', () => {
    classes.toggle('open');
    link.forEach(link=>{
        link.classList.toggle('fade');
    });
});
var prevhtml = document.querySelectorAll('.lp')[0].innerHTML
var strr = ['no talent exists, it is mere obsession', 'push pass your limits , right here right now', 'If you really want to be strong… Stop caring about what your surrounding thinks of you!', 'Being weak is nothing to be ashamed of… Staying weak is !!', 'People’s lives don’t end when they die, it ends when they lose faith.', 'If you don’t take risks, you can’t create a future!', 'If you don’t like your destiny, don’t accept it.', 'When you give up, that’s when the game ends.', 'It’s just pathetic to give up on something before you even give it a shot.', 'People become stronger because they have memories they can’t forget.', 'I’ll leave tomorrow’s problems to tomorrow’s me.', 'There’s no shame in falling down! True shame is to not stand up again!', 'If you can’t do something, then don’t. Focus on what you can.', 'You can die anytime, but living takes true courage.', 'Every journey begins with a single step. We just have to have patience.', 'Reject common sense to make the impossible possible.', 'Hard work is worthless for those that don’t believe in themselves.', 'A place where someone still thinks about you is a place you can call home.', 'If you just submit yourself to fate, then that’s the end of it.', 'It is at the moment of death that humanity has value.', 'Whatever you do, enjoy it to the fullest. That is the secret of life.', 'I refuse to let my fear control me anymore.'];

var i = 0;
function looop() {
    if (i == 0) {
        document.querySelectorAll('.lp')[0].innerHTML = prevhtml;
    }
    else {
        document.querySelectorAll('.lp')[0].innerHTML = strr[i];
    }
}
function incre() {
    if (i == strr.length - 1) {
        i = 0;
    }
    else {
        i++;
    }
    looop();
}
setInterval(incre, 3000);


const tll = gsap.timeline({defaults:{ease:'power1.out'}});

tll.fromTo(".text",{opacity:0},{opacity:1,duration:1});
tll.to(".text",{y:"0%", duration: 1,stagger:0.25},"-=1");
tll.to(".slider",{y:"-150%",duration:1.5,delay:0.5});
tll.to(".intro",{y:"-150%",duration:1},"-=1.25");
tll.fromTo("#logo",{opacity:0},{opacity:1,duration:.75});
tll.fromTo(".hamburger",{opacity:0},{opacity:1,duration:.75},"-=1");
tll.fromTo(".navlist",{opacity:0},{opacity:1,duration:.75},"-=1");

var videoplayer = document.getElementById('videoplayer');
var myvid = document.getElementById('myvid');

function stopvid(){
videoplayer.style.display="none";
myvid.src='#';

}
function playvid(file){
    myvid.src=file;
    videoplayer.style.display='block';
}