const $projectsItem = document.querySelectorAll('.projects__item');
const $projectsItemWrap = document.querySelectorAll('.projects__item-wrap');

const imagesFull = [
     './images/my-projects/project-1.png',
     './images/my-projects/project-2.png',
     './images/my-projects/project-3.png',
];

const imagesMobile = [
     './images/my-projects/project-1-320.png',
     './images/my-projects/project-2-320.png',
     './images/my-projects/project-3-320.png',
];

$projectsItem.forEach((item, index) => {
     const picture = document.createElement('picture');
     picture.className = 'projects__picture';
     const img = document.createElement('img');
     img.className = 'projects__img';
     const source = document.createElement('source');

     item.append(picture);
     item.insertBefore(picture, item.firstChild);
     picture.append(source);
     picture.append(img);

     source.srcset = imagesMobile[index];
     source.media = '(max-width: 900px)';

     img.src = imagesFull[index];
     img.alt = `Image ${index + 1}`;

     if (index % 2 === 1) {
          picture.classList.add('order');
     } else if (window.innerWidth < 900) {
          picture.classList.remove('order');
     }
});
