import React, {Suspense} from "react";
import Preloader from "../Components/Common/Preloader/Preloader";

export function withSuspens<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    return (props: WCP) => {
        return <Suspense fallback={<Preloader/>}>
            <WrappedComponent {...props} />
        </Suspense>
    };
};