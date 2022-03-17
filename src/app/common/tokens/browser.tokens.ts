import { inject, InjectionToken } from "@angular/core";
import { DOCUMENT } from "@angular/common";

export const WINDOW = new InjectionToken<Window>(
    "An abstraction over window object",
    {
        factory: () => {
            const { defaultView } = inject(DOCUMENT);

            if (!defaultView) {
                throw new Error("Window is not available");
            }

            return defaultView;
        },
    },
);

export const LOCAL_STORAGE = new InjectionToken<Storage>(
    "An abstraction over window.localStorage object",
    {
        factory: () => inject(WINDOW).localStorage
    }
);

export const SESSION_STORAGE = new InjectionToken<Storage>(
    "An abstraction over window.sessionStorage object",
    {
        factory: () => inject(WINDOW).sessionStorage
    }
);

export const LOCATION = new InjectionToken<Location>(
    "An abstraction over window.location object",
    {
        factory: () => inject(WINDOW).location,
    },
);
