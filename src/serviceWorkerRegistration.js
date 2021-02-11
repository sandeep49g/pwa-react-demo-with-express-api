const subscribeForPushNotification = (swResponse) => {
    swResponse.pushManager.getSubscription()
        .then(function() {
                swResponse.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: determineAppServerKey()
                })
                .then(function(subscription) {
                    console.log('Push notifications subscription succeeded');
                    // console.log('ApplicationServerKey : ', subscription.options.applicationServerKey);
                })
                .catch(function(err) {
                    if (window.Notification.permission === 'denied') {
                        console.log('Permission for push notifications was denied');
                    } else { 
                        console.error('Push notifications subscription failed :: ', err);
                    }
                });
        }
    );
};

const urlBase64ToUint8Array = (base64String) => {
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
};

const determineAppServerKey = () => {
    const vapidPublicKey = "BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo";
    return urlBase64ToUint8Array(vapidPublicKey);
};

const registerServiceWorker = () => {
    if ('serviceWorker' in window.navigator) {
        let serviceWorkerUrl =  `${process.env.PUBLIC_URL}/serviceworker.js`;
        window.navigator.serviceWorker.register(serviceWorkerUrl, { scope: '/' })
            .then((swResponse) => {
                console.log('Service worker registration succeeded :: ', swResponse.scope);

                // Subscription logic for push notifications
                // Call subscribeForPushNotification only when service worker is activated
                let serviceWorker;
                if (swResponse.installing) {
                    serviceWorker = swResponse.installing;
                    // console.log('Service worker is installing');
                } else if (swResponse.waiting) {
                    serviceWorker = swResponse.waiting;
                    // console.log('Service worker is installed & waiting');
                } else if (swResponse.active) {
                    serviceWorker = swResponse.active;
                    // console.log('Service worker is active');
                }

                if (serviceWorker) {
                    if (serviceWorker.state == "activated") {
                        //console.log("Service worker is now activated");
                        subscribeForPushNotification(swResponse);
                    }
                    serviceWorker.addEventListener("statechange", function(event) {
                        //console.log("Service worker on statechange : ", event.target.state);
                        if (event.target.state == "activated") {
                            // console.log("Service worker is just now activated again")
                            subscribeForPushNotification(swResponse);
                        }
                    });
                }
            })
            .catch(err => {
                console.log('Service worker registration failed :: ', err);
            }
        ); 
    } else {
        console.log('Service workers are not supported');
    }
};

export { registerServiceWorker };
