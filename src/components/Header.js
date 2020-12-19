import "../css/Header.css";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';


export default function Header(props) {

    return (<h1 className="header">{props.title}</h1>);
}