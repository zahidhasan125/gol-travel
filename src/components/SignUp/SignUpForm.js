import { Alert, Button, Card, Col, Form, Input, message, Row, Spin, Typography } from 'antd';
import React, { Fragment, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../constant';
import { useAuthContext } from '../../contexts/AuthContext';
import { setToken } from '../../helpers';

const SignUpForm = () => {

    const { setUser } = useAuthContext();

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await fetch(`${API}/auth/local/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();
            if (data?.error) {
                throw data?.error;
            } else {
                // set the token
                setToken(data.jwt);

                // set the user
                setUser(data.user);

                message.success(`Welcome to Social Cards ${data.user.username}!`);

                navigate("/profile", { replace: true });
            }
        } catch (error) {
            console.error(error);
            setError(error?.message ?? "Something went wrong!");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <div style={{
                background: `url(https://i.ibb.co/WfBmC37/Screenshot-2023-02-23-at-3-48-05-AM.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} className="hero h-full mb-16">
                <div className="hero-content w-full flex-col lg:flex-row-reverse gap-4">
                    <Fragment>
                        <Row align="right">
                            <Col>
                                <Card title="SignUp">
                                    {error ? (
                                        <Alert
                                            className="alert_error"
                                            message={error}
                                            type="error"
                                            closable
                                            afterClose={() => setError("")}
                                        />
                                    ) : null}
                                    <Form
                                        name="basic"
                                        layout="vertical"
                                        onFinish={onFinish}
                                        autoComplete="off"
                                    >
                                        <Form.Item
                                            label="Username"
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    type: "string",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Username" />
                                        </Form.Item>
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    type: "email",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Email address" />
                                        </Form.Item>

                                        <Form.Item
                                            label="Password"
                                            name="password"
                                            rules={[{ required: true }]}
                                        >
                                            <Input.Password placeholder="Password" />
                                        </Form.Item>

                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                className="login_submit_btn btn-outline"
                                            >
                                                Submit {isLoading && <Spin size="small" />}
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                    <Typography.Paragraph className="form_help_text">
                                        Already have an account? <Link to="/login">Sign In</Link>
                                    </Typography.Paragraph>
                                </Card>
                            </Col>
                        </Row>
                    </Fragment>

                    <div className="text-center lg:text-left hidden md:flex">
                        <img src="https://i.ibb.co/28j0wYg/Screenshot-2023-02-23-at-3-30-38-AM-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;