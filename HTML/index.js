
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

const hero = document.querySelector('.img');
const logo = document.querySelector('#logo');
const content = document.querySelector('.content');
const navlist = document.querySelector('.navlist');
const cool = document.querySelector('.cool');
const ham = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');

const link = document.querySelectorAll('.navlist li');
const classes = navlist.classList;

ham.addEventListener('click', () => {
    classes.toggle('open');
    link.forEach(link=>{
        link.classList.toggle('fade');
    });
});


const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: '0%' }, { height: '90vh', ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: '0%' }, { width: '100%', ease: Power2.easeInOut })
    .fromTo(logo, 1, { opacity: 0, x: '-100%' }, { opacity: 1, x: '0%', ease: Power2.easeInOut }, "-=1")
    .fromTo(ham, 1, { opacity: 0, x: '-100%' }, { opacity: 1, x: '0%', ease: Power2.easeInOut }, "-=1")
    .fromTo(navlist, 1, { opacity: 0, x: '-300%' }, { opacity: 1, x: '0%', ease: Power2.easeInOut }, "-=1")
    .fromTo(content, 1, { opacity: 0}, { opacity: 1, ease: Power2.easeInOut }, "-=1")
    .fromTo(overlay, 1, { opacity: 0, x: '-300%' }, { opacity: 1, x: '0%', ease: Power2.easeInOut }, "-=1.2");









