const cars = [
  {
    badge: "● SUPER SPORTS",
    title: "PORSCHE<br><span>911 GT3</span>",
    desc: "The car that was built for the race track, but made for the road. Feel the power in every second.",
    s1: "2.9s", s2: "640 HP", s3: "325",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
  },
  {
    badge: "● CLASSIC MUSCLE",
    title: "FORD<br><span>MUSTANG GT</span>",
    desc: "American muscle with a roar that you can feel in your heart. Classic look, modern power.",
    s1: "4.5s", s2: "450 HP", s3: "250",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80"
  },
  {
    badge: "● HYPER CAR",
    title: "BMW<br><span>M4 COMPETITION</span>",
    desc: "German engineering at its best. Luxury inside, beast outside. Perfect for city and highway.",
    s1: "2.4s", s2: "510 HP", s3: "290",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=80"
  }
];

let current = 0;
let timer;
const heroImg = document.getElementById('heroImg');
const heroBadge = document.getElementById('heroBadge');
const heroTitle = document.getElementById('heroTitle');
const heroDesc = document.getElementById('heroDesc');
const spec1 = document.getElementById('spec1');
const spec2 = document.getElementById('spec2');
const spec3 = document.getElementById('spec3');
const slideNum = document.getElementById('slideNum');
const dots = document.querySelectorAll('.dot');
const cards = document.querySelectorAll('.car-card');

function showCar(index) {
  current = index;
  let c = cars[current];
  heroImg.classList.add('fade');
  setTimeout(() => {
    heroImg.src = c.img;
    heroBadge.textContent = c.badge;
    heroTitle.innerHTML = c.title;
    heroDesc.textContent = c.desc;
    spec1.textContent = c.s1;
    spec2.textContent = c.s2;
    spec3.textContent = c.s3;
    slideNum.textContent = "0" + (current + 1) + " / 03";
    dots.forEach(d => d.classList.remove('active'));
    dots[current].classList.add('active');
    cards.forEach(card => card.classList.remove('active'));
    cards[current].classList.add('active');
    heroImg.classList.remove('fade');
  }, 400);
}

function nextCar(){ showCar((current + 1) % cars.length); }
function prevCar(){ showCar((current - 1 + cars.length) % cars.length); }

document.getElementById('nextBtn').addEventListener('click', () => { nextCar(); restart(); });
document.getElementById('prevBtn').addEventListener('click', () => { prevCar(); restart(); });
dots.forEach(d => d.addEventListener('click', () => { showCar(Number(d.dataset.index)); restart(); }));
cards.forEach(card => {
  card.addEventListener('click', () => {
    showCar(Number(card.dataset.index));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    restart();
  });
});

function startAuto(){ timer = setInterval(nextCar, 5000); }
function restart(){ clearInterval(timer); startAuto(); }
startAuto();

// Menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('show'));
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('show'));
});

// Form
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('successMsg').style.display = "block";
  e.target.reset();
});