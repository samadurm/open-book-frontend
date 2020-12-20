/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const logInStyle = css`
    width: 100%;
    margin-top: 75px;
    text-align: center;
    font-size: 150px;
    font-weight: 100;
`;

export default function ProfileComponent() {
    const { user } = useAuth0();

    if (!user) {
        return (
            <div css={logInStyle}>
                <h3>Please log in or create an account...</h3>
            </div>
        );

    }
    else {
        return (
            <Container className="align-items-center">
                <Row className="align-items-center profile-header mb-5 text-center text-md-left">
                    <Col md={2}>
                        <img
                            src={user.picture}
                            alt="Profile"
                            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                        />
                    </Col>
                    <Col md>
                        <h2>{user.name}</h2>
                        <p className="lead text-muted">{user.email}</p>
                    </Col>
                </Row>
                <Row>
                    <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
                </Row>
            </Container>
        );
    }
};

// export default withAuthenticationRequired(ProfileComponent, {
//   onRedirecting: () => <Loading />,
// });
