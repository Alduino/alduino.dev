import { ReactNode } from "react";
import "./Wrapper.css";

export interface WrapperProps {
    children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
    return children;
}
