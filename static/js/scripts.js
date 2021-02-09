let container = document.querySelector('.gallery__flow')

function createElement(str) {
  const frag = document.createDocumentFragment()

  const elem = document.createElement('div')
  elem.innerHTML = str

  while (elem.childNodes[0]) {
    frag.appendChild(elem.childNodes[0])
  }
  return frag
}

data.map((post) => {
  if (post.preview && post.preview.src) {
    let PostElement = createElement(`
        <div class="gallery__isle">
        <div class="gallery__isle-inner">
          <div class="gallery__isle-content">
            <figure class="gallery__preview">
              <div class="gallery__preview-image">
                <img
                  src=${post.preview.src}
                  alt="street art"
                />
              </div>
    
              <figcaption class="gallery__preview-caption">
                <div class="gallery__preview-info">
                  <h2 class="gallery__preview-title">
                   ${post.title}
                  </h2>
                  <div class="gallery__preview-links">
                    <a
                      class="gallery__preview-link gallery__preview-link_role_original"
                      href=${post.url}
                      >View original</a
                    ><a
                      class="gallery__preview-link gallery__preview-link_role_author"
                      href="#"
                      >${post.author.username}</a
                    ><a
                      class="gallery__preview-link gallery__preview-link_role_photographer"
                      href="https://www.paypal.me/siddsarkar"
                      >paypal.me/siddsarkar</a
                    >
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
        `)

    container.appendChild(PostElement)
  }
})
