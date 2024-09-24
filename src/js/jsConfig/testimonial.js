const $testimonialImg = document.querySelectorAll('.testimonial__img');
const $images = [
     './images/testimonial/testimonial-2.jpg',
     './images/testimonial/testimonial-2.jpg',
     './images/testimonial/testimonial-2.jpg',
];

$testimonialImg.forEach((img, index) => {
     img.style.backgroundImage = `url(${$images[index]})`;
});
