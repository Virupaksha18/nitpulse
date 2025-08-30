import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
if ("serviceWorker" in navigator){
  window.addEventListener("load",() => {
    navigator.serviceWorker.register("/service-worker.js").then((registration) =>{
      console.log("Service Worker registerd:", registration);
    })
    .catch((error) => {
      console.log("Service Worker registration failed:",error);
    });
  });
  let deferredPrompt;
  window.addEventListener("beforeinstallprompt", (e) =>{
    e.preventDefault();
    deferredPrompt = e;
    console.log("beforeinstallprompt event fired");
    const installBtn = document.getElementById("installBtn");
    if (installBtn) {
      installBtn.style.display ="block";
      installBtn.addEventListener("click", async ()=> { 
        installBtn.style.display = "none";
        deferredPrompt.prompt();
        const {outcome } = await deferredPrompt.userChoice;
        console.log(`User response: $ {outcome}`);
        deferredPrompt = null;

      });
    }
  });
}
reportWebVitals();