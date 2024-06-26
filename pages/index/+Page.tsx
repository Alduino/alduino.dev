import React from "react";
import {
    containerClass,
    contentContainer,
    linkClass,
    linkItemClass,
    linksContainerClass,
    separatorClass,
    subtitleClass,
    titleClass,
} from "./styles.css";

import "@fontsource/kanit/latin-900.css";
import "@fontsource/kulim-park/latin.css";

export default function Page() {
    return (
        <div className={containerClass}>
            <div className={contentContainer}>
                <h1 className={titleClass}>Zach Barham</h1>
                <p className={subtitleClass}>Frontend developer // and some hobbies</p>
                <hr className={separatorClass} />
                <ul className={linksContainerClass}>
                    <li className={linkItemClass}>
                        <a className={linkClass} href="https://github.com/alduino" target="_blank">Github</a>
                    </li>
                    <li className={linkItemClass}>
                        <a className={linkClass} href="https://www.linkedin.com/in/zach-barham/"
                           target="_blank">LinkedIn</a>
                    </li>
                    <li className={linkItemClass}>
                        <a className={linkClass} href="https://github.com/alduino/alduino.dev"
                           target="_blank">Source</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
