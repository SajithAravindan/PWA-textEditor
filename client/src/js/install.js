const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    event.preventDefault();
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Unhide the install button
    butInstall.classList.toggle('hidden', false);

});

// A click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    
    // Hide the app provided install promotion
    butInstall.classList.toggle('hidden', true);
    
    // Show the install prompt
    const promptEvent = window.deferredPrompt;

    // Return if there's no prompt event to show
    if (!promptEvent) return;
   
    // Show the install prompt.
    promptEvent.prompt();
   
    const result = await promptEvent.userChoice;
    console.log('userChoice', result); // Log the result

    // Reset the deferred prompt variable, since    
    window.deferredPrompt = null;// prompt() can only be called once.
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Log the event
    console.log('👍', 'appinstalled', event);
    window.deferredPrompt = null;// Reset the deferred prompt variable.
});
