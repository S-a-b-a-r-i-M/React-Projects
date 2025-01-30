// import { useEvent } from "../../custom-hooks/event-hook";
// import EventListener from "./event-listener";
// import { Button } from '../../components/ui/button'


// export default function PubSubEvent(){
//     const { dispatch: publishNotification } = useEvent("Notification")

//     const triggerNotification = () => {
//         publishNotification("Hello Sabari")
//     }

//     return (
//         <div className="h-full w-full flex justify-center items-center">
//             <div className="space-y-4">
//                 <Button onClick={triggerNotification}>
//                     Send Notification
//                 </Button>
//                 <EventListener />
//             </div>
//         </div>
//     )
// }

import Header from "./header";
import Body from "./body";
import SideBar from "./sidebar";
import Footer from "./footer";

// https://stackblitz.com/edit/event-drive-arch?file=src%2FApp.tsx
export default function PubSubEvent(){
    return(
        <div className="space-y-5">
            <Header />
            <SideBar />
            <Body />
            <Footer />
        </div>
    )
}