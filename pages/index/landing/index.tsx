import {
    contentContainerClass, downArrowClass,
    landingContainerClass, linkClass, linkItemClass,
    linksContainerClass,
    separatorClass,
    subtitleClass,
    titleClass,
} from "./styles.css";
import React from "react";

export function Landing() {
    return (
        <div className={landingContainerClass}>
            <div className={contentContainerClass}>
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
                <svg className={downArrowClass} viewBox="0 0 32 16">
                    <path d="M4,2 L16,14 L28,2" strokeLinecap="round" strokeWidth={2} fill="transparent" />
                </svg>
            </div>
        </div>
    )
}
