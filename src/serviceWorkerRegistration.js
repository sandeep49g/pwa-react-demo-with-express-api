export default function swDev()
{
    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }

    function determineAppServerKey() {
        const vapidPublicKey = "BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo";
        return urlBase64ToUint8Array(vapidPublicKey);
    }
      
    if('serviceWorker' in window.navigator) {
        let serviceWorkerUrl =  `${process.env.PUBLIC_URL}/serviceworker.js`;
        window.navigator.serviceWorker.register(serviceWorkerUrl)
            .then((swResponse) => {
                console.log('Success: Service Worker Registered :: ', swResponse.scope);
                // Subscription for push notifications
                return swResponse.pushManager.getSubscription()
                    .then(function(subscription) {
                        swResponse.pushManager.subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: determineAppServerKey()
                        });        
                    });
            })
            .catch((err) => console.log('Failure: Service Worker Registeration Failed :: ', err)); 
    }
}