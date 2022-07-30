const d = document,
  n = navigator,
  ua = navigator.userAgent;
  
export default function userAgent(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      any: function () {
        return this.android() || this.ios();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobilei/),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera()
        );
      },
    };

  $id.innerHTML = `
    <ul>
        <li>User Agent: <b>${ua}</b></li>
        <li>Plataforma: <b>${
          isMobile.any() ? isMobile.any() : isDesktop.any()
        }</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>`;

    if(isBrowser.chrome()){
      $id.innerHTML += `<p>Este contenido solo es visible en Chrome</p>`
    }
    if(isBrowser.firefox()){
      $id.innerHTML += `<p>Este contenido solo es visible en Firefox</p>`
    }
    
    if(isMobile.any()){
      $id.innerHTML += `<p>Este contenido solo es visible en un dispositivo Móvil</p>`
    }
    if(isDesktop.any()){
      $id.innerHTML += `<p>Este contenido solo es visible en un entorno de escritorio</p>`
    }
}
