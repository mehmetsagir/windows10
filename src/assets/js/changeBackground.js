const changeBackground =  (imageName = 'https://lh3.google.com/u/0/d/1w7RAigPwIFIfbbJzcFEnB3f_XZ0-fbOA=w1920-h1009-iv1') => {

  if(localStorage.getItem('windows-settings')) {
    const settings = JSON.parse(localStorage.getItem('windows-settings'))
    settings.background = imageName
    localStorage.setItem('windows-settings', JSON.stringify(settings))
  } else {
    localStorage.setItem('windows-settings', JSON.stringify({
      settings: imageName
    }))
  }

  const el = document.getElementById('home')
  el.style.background = `url(${imageName})`
  el.style.backgroundPosition = 'center'
  el.style.backgroundRepeat = 'no-repeat';
  el.style.backgroundSize = 'cover'
}

export default changeBackground
