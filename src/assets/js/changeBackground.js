const changeBackground =  (imageName = 'wallpaper.jpg') => {
  const el = document.getElementById('home')

  el.style.background = `url(${imageName})`
  el.style.backgroundPosition = 'center'
  el.style.backgroundRepeat = 'no-repeat';
  el.style.backgroundSize = 'cover'
}

export default changeBackground
