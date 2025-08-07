// This script unregisters any existing service workers and clears all caches
if ('serviceWorker' in navigator) {
  // Unregister all service workers
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister();
      console.log('ServiceWorker unregistered');
    }
  });

  // Clear all caches
  caches.keys().then(function(names) {
    for (let name of names) {
      caches.delete(name);
      console.log('Cache deleted:', name);
    }
  });

  // Clear browser storage
  localStorage.clear();
  sessionStorage.clear();
  console.log('Browser storage cleared');

  // Force reload to ensure clean state
  window.location.reload(true);
}
