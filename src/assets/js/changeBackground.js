const changeBackground =  (imageName = 'https://mehmetsagir.com/wallpaper/macos-big-sur-5120x2880-night-apple-october-2020-event-5k-23099.jpg') => {

  if(localStorage.getItem('windows-settings')) {
    const settings = JSON.parse(localStorage.getItem('windows-settings'))
    settings.background = imageName
    localStorage.setItem('windows-settings', JSON.stringify(settings))
  } else {
    localStorage.setItem('windows-settings', JSON.stringify({
      background: imageName
    }))
  }

  const el = document.getElementById('home')
  el.style.background = `url(${imageName})`
  el.style.backgroundPosition = 'center'
  el.style.backgroundRepeat = 'no-repeat';
  el.style.backgroundSize = 'cover'
}

export default changeBackground
