export default function loadRemoteScript(url, scope) {
  return new Promise((resolve, reject) => {
    // Si ya está cargado, no lo agregamos otra vez
    if (window[scope]) return resolve();

    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      console.log(`[remote] ${scope} cargado desde ${url}`);
      resolve();
    };

    script.onerror = () => {
      reject(new Error(`Error al cargar remoteEntry.js de ${scope}`));
    };

    document.head.appendChild(script);
  });
}