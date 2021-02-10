export default function swDev()
{ 
    if('serviceWorker' in window.navigator) {
        let swUrl=  `${process.env.PUBLIC_URL}/serviceworker.js`;
        window.navigator.serviceWorker.register(swUrl)
            .then((reg) => console.log('Success: Service Worker Registered :: ', reg.scope))
            .catch((err) => console.log('Failure: Service Worker Registeration Failed :: ', err)); 
    }
}