function createEl(htmlString, attrs, ...children) {
  if (typeof htmlString !== "string") {
    throw Error("Argument 'htmlString' is required and must be a string");
  }

  const el = document.createElement(htmlString);

  if (typeof attrs === "object") {
    for (let key in attrs) {
      if (key.substring(0, 2) === "on") {
        el.addEventListener(key.substring(2).toLowerCase(), attrs[key]);
      } else {
        el.setAttribute(key, attrs[key]);
      }
    }
  }

  children.forEach(function(child) {
    let node;

    if (child.constructor.name.includes("Element")) {
      node = child;
    } else {
      node = document.createTextNode(child);
    }

    el.appendChild(node);
  });

  return el;
}



function dateConverter(UNIX_timestamp){
  const a = new Date(UNIX_timestamp);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const result =  month + ' ' + date + ', ' + year 
  return result;
}

if (window.location.href.indexOf("index") > -1) {

  carouselSlides.forEach((slide, i) => {
    $('.carousel-inner').append(`
  <div class="carousel-item fullscreen-carousel" style="background-image: url('${slide.img}')">
    <div class="d-flex h-100 align-items-center justify-content-center carousel-caption">
        <div class="container">
          <div class="row align-items-center justify-content-center">
              <h2 class="display-4 mb-2">${slide.title}</h2>
          </div>
          <div class="row align-items-center justify-content-center"> 
            <h3>${slide.subtitle}</h3>
          </div>
          <div class=" mt-4 row align-items-center justify-content-center"> 
            <a class="btn btn-primary" href="${slide.btnUrl}">
                ${slide.btnText}
            </a>
          </div>
        </div>
    </div>
  </div>`)
  })
}

module.exports = {
  dateConverter,
  createLoremIpsum
}