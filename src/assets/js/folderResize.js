const folderResize = (elClass) => {
  const resizers = [...document.querySelectorAll(`.${elClass} .resizer`)]
  const el = document.querySelector(`.${elClass}`)

  let currentResizer;

  resizers.forEach(resizer => {
    resizer.addEventListener('mousedown', mouseDown)
    function mouseDown (e) {
      currentResizer = e.target

      let prevX = e.clientX
      let prevY = e.clientY

      window.addEventListener('mousemove', mouseMove)
      window.addEventListener('mouseup', mouseUp)

      function mouseMove (e) {
        el.style.opacity = '0.7'
        el.querySelector('.content').style.display = 'none'

        const rect = el.getBoundingClientRect()

        if (currentResizer.classList.contains('se')) {
          el.style.width = rect.width - (prevX - e.clientX) + 'px';
          el.style.height =  rect.height - (prevY - e.clientY) + 'px';
        } else if (currentResizer.classList.contains('sw')) {
          el.style.width = rect.width + (prevX - e.clientX) + 'px';
          el.style.height =  rect.height - (prevY - e.clientY) + 'px';
          el.style.left = rect.left - (prevX - e.clientX) + 'px';
        } else if (currentResizer.classList.contains('ne')) {
          el.style.width = rect.width - (prevX - e.clientX) + 'px';
          el.style.height =  rect.height +  (prevY - e.clientY) + 'px';
          el.style.top = rect.top - (prevY - e.clientY) + 'px';
        } else {
          el.style.width = rect.width + (prevX - e.clientX) + 'px';
          el.style.height =  rect.height + (prevY - e.clientY) + 'px';
          el.style.top = rect.top - (prevY - e.clientY) + 'px';
          el.style.left = rect.left - (prevX - e.clientX) + 'px';
        }

        prevX = e.clientX
        prevY = e.clientY
      }

      function mouseUp () {
        el.style.opacity = '1'
        el.querySelector('.content').style.display = 'block'
        window.removeEventListener("mousemove", mouseMove)
        window.removeEventListener("mouseup", mouseUp)
      }
    }
  })
}

export default folderResize
