const hButton = document.querySelector('#hamburguer-menu');
const nav = document.querySelector('.navi');

hButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hButton.classList.toggle('open');
});

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.navi a');

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Belem Brazil",
      location: "Belem, Brazil",
      dedicated: "2022, November, 20",
      area: 28675,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior2.jpg"
    },
    {
      templeName: "Barranquilla Colombia",
      location: "Barranquilla, Colombia",
      dedicated: "2018, December, 9",
      area: 25349,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/2-Barranquilla-Columblia-Temple-2135201.jpg"
    },
    {
      templeName: "Freiberg Germany",
      location: "Freiberg, Germany",
      dedicated: "1985, June, 29",
      area: 21500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/freiberg-germany/400x250/freiberg-germany-temple-lds-664670-wallpaper.jpg"
    },
  ];

  function createTempleCard(temple) {
    const card = document.createElement('div');
    card.className = 'temple-card';
    
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';

    const name = document.createElement('h2');
    name.textContent = temple.templeName;

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;

    const dedicationDate = document.createElement('p');
    dedicationDate.textContent = `Dedicated: ${temple.dedicated}`;

    const totalArea = document.createElement('p');
    totalArea.textContent = `Area: ${temple.area}`;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicationDate);
    card.appendChild(totalArea);

    return card;
}

function filterTemples(filter) {
  let filteredTemples = [];
  const currentYear = new Date().getFullYear();
  
  switch(filter) {
      case 'old':
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
          break;
      case 'new':
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
          break;
      case 'large':
          filteredTemples = temples.filter(temple => temple.area > 90000);
          break;
      case 'small':
          filteredTemples = temples.filter(temple => temple.area < 10000);
          break;
      default:
          filteredTemples = temples;
          break;
  }
  displayTemples(filteredTemples);
}

function displayTemples(temples) {
  mainContent.innerHTML = '';
  temples.forEach(temple => {
      const card = createTempleCard(temple);
      mainContent.appendChild(card);
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      const filter = this.getAttribute('data-filter');
      filterTemples(filter);
  });
});

displayTemples(temples);
});