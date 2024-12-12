"use client";

import React, { useEffect, useRef } from "react";
import H from "@here/maps-api-for-javascript";

function SchedulingMap({ apiKey }) {
    const mapRef = useRef(null);
    const map = useRef(null);
    const platform = useRef(null);

    useEffect(() => {
        // Ensure this runs only in the browser
        if (typeof window !== "undefined" && !map.current) {
            platform.current = new H.service.Platform({ apiKey });
            const defaultLayers = platform.current.createDefaultLayers({
                pois: true,
            });

            const newMap = new H.Map(
                mapRef.current,
                defaultLayers.vector.normal.map,
                {
                    zoom: 14,
                    center: { lat: 64.144, lng: -21.94 },
                }
            );

            const behavior = new H.mapevents.Behavior(
                new H.mapevents.MapEvents(newMap)
            );
            console.log("Map initialization triggered")
            map.current = newMap;
        }

        // Cleanup function to dispose of the map
        return () => {
            if (map.current) {
                map.current.dispose();
                map.current = null;
            }
        };
    }, [apiKey]);

    return (
        <div
            style={{ width: "100vw", height: "500px" }}
            ref={mapRef}
        />
    );
}

export default SchedulingMap;