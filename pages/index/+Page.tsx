import React, { useEffect, useRef } from "react";
import { backgroundClass } from "./styles.css";
import { assignInlineVars, setElementVars } from "@vanilla-extract/dynamic";
import { parallaxScrollNormalised, unitlessWindowHeight } from "./animation.css";
import { Navbar } from "./navbar";
import { Landing } from "./landing";
import { Projects } from "./projects";

import "@fontsource/kanit/latin-900.css";
import "@fontsource/kulim-park/latin.css";
import { End } from "./end";

export default function Page() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleUpdate() {
            if (!containerRef.current) return;

            const windowHeight = window.innerHeight;
            const scrollNormalised = window.scrollY / windowHeight;

            setElementVars(containerRef.current, {
                [parallaxScrollNormalised]: scrollNormalised.toFixed(3),
                [unitlessWindowHeight]: windowHeight.toFixed(0),
            });
        }

        handleUpdate();

        addEventListener("scroll", handleUpdate);
        addEventListener("resize", handleUpdate);

        return () => {
            removeEventListener("scroll", handleUpdate);
            removeEventListener("resize", handleUpdate);
        };
    }, []);

    return (
        <>
            <div ref={containerRef} className={backgroundClass}
                 style={assignInlineVars({ [parallaxScrollNormalised]: "0", [unitlessWindowHeight]: "1" })}>
                <Navbar />

                <Landing />
                <Projects />

                <End />
            </div>
        </>
    );
}
