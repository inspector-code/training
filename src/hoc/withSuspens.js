import React, {Suspense} from "react";
import Preloader from "../Components/Common/Preloader/Preloader";

export const withSuspens = (Component) => {

    return (props) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props} />
        </Suspense>
    };
};