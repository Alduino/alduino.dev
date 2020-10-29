import React, { SyntheticEvent, useCallback } from "react";
import { Link as LinkWrapper, LinkProps } from "@chakra-ui/core";
import { navigate, prefetchPathname } from "gatsby";

const externalDetector = /^(?:https?:)?\/\//;

interface OurLinkProps {
    replace?: boolean;
    state?: {};

    onBeginNavigate?(): void;
    onFinishNavigate?(): void;

    onBeginPreload?(): void;
    onFinishPreload?(): void;
}

export default (props: LinkProps & OurLinkProps) => {
    const external = externalDetector.test(props.href || "");

    const handleNavigate = useCallback(async (e: SyntheticEvent) => {
        e.preventDefault();

        props.onBeginNavigate?.();

        await navigate(props.href || "", {
            replace: props.replace,
            state: props.state
        });

        props.onFinishNavigate?.();
    }, [props.href, props.replace, props.state, props.onBeginNavigate, props.onFinishNavigate]);

    const handlePreload = useCallback(async () => {
        props.onBeginPreload?.();

        await prefetchPathname(props.href || "");

        props.onFinishPreload?.();
    }, [props.href, props.onBeginPreload, props.onFinishPreload]);

    if (external) return (
        <LinkWrapper {...props}>{props.children}</LinkWrapper>
    ); else return (
        <LinkWrapper {...props} onClick={handleNavigate} onMouseEnter={handlePreload}>{props.children}</LinkWrapper>
    );
};
