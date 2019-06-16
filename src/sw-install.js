const VERSION_URL = '/version.json';

export async function swInstall() {
  if (window.navigator.serviceWorker) {
    try {
      const reg = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
      if (reg.installing) {
        console.log('Service worker installing');
      } else if (reg.waiting) {
        console.log('Service worker installed');
      } else if (reg.active) {
        console.log('Service worker active');
      }
    } catch (error) {
      console.log(error);
    }
  }
  // check for updates
  setTimeout(() => fetch(VERSION_URL), 1000);
}
