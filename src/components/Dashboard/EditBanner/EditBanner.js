import React, { useEffect } from "react";
import { Button, Card, Col, Form, Input, message, Row, Spin } from "antd";
import { useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import { getToken } from "../../../helpers";
import { API } from "../../../constant";

const EditBanner = () => {
    const [loading, setLoading] = useState(false);
    const { user, isLoading, setUser } = useAuthContext();

    const [banner, setBanner] = useState(null);

    const callBanner = async () => {
        const response = await fetch(`${API}/banner-home`, {
            headers: {
                "Content-Type": "application/json",
                // set the auth token to the user's jwt
                Authorization: `Bearer ${getToken()}`,
            }
        });
        const responseData = await response.json();
        setBanner(responseData.data.attributes);
    }
    useEffect(() => {
        callBanner();
    }, [])
    console.log(banner);
    const handleBackgroundUpdate = async (data) => {
        setLoading(true);
        try {
            const response = await fetch(`${API}/banner-home`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    // set the auth token to the user's jwt
                    Authorization: `Bearer ${getToken()}`,
                },
                body: JSON.stringify({data}),
            });
            const responseData = await response.json();

            setBanner(responseData.data.attributes);
            message.success("Data saved successfully!");
        } catch (error) {
            console.error(Error);
            message.error("Error While Updating the Profile!");
        } finally {
            setLoading(false);
        }
    };

    if (isLoading) {
        return <Spin size="large" />;
    }

    return (
        <Card className="profile_page_card mb-20">
            <Form
                layout="vertical"
                initialValues={{
                    firstLine: banner?.firstLine,
                    secondLine: banner?.secondLine,
                    thirdLine: banner?.thirdLine,
                    bg_url: banner?.bg_url
                }}
                onFinish={handleBackgroundUpdate}
            >
                <Row gutter={[16, 16]}>
                    <Col md={8} lg={8} sm={24} xs={24}>
                        <Form.Item
                            label="First Line"
                            name="firstLine"
                            rules={[
                                {
                                    required: true,
                                    message: "First Line is required!",
                                    type: "string",
                                },
                            ]}
                        >
                            <Input placeholder="First Line" />
                        </Form.Item>
                    </Col>
                    <Col md={8} lg={8} sm={24} xs={24}>
                        <Form.Item
                            label="Second Line"
                            name="secondLine"
                            rules={[
                                {
                                    required: true,
                                    message: "Second Line is required!",
                                    type: "string",
                                },
                            ]}
                        >
                            <Input placeholder="Second Line" />
                        </Form.Item>
                    </Col>
                    <Col md={8} lg={8} sm={24} xs={24}>
                        <Form.Item
                            label="Third Line"
                            name="thirdLine"
                            rules={[
                                {
                                    required: true,
                                    message: "Third Line is required!",
                                    type: "string",
                                },
                            ]}
                        >
                            <Input placeholder="Third Line" />
                        </Form.Item>
                    </Col>
                    <Col md={8} lg={8} sm={24} xs={24}>
                        <Form.Item
                            label="Background Url"
                            name="bg_url"
                            rules={[
                                {
                                    required: true,
                                    message: "Background Url is required!",
                                    type: "url",
                                },
                            ]}
                        >
                            <Input placeholder="Background Url" />
                        </Form.Item>
                    </Col>
                </Row>
                <Button
                    className="profile_save_btn btn-outline"
                    htmlType="submit"
                    type="primary"
                    size="large"
                >
                    {loading ? (
                        <>
                            <Spin size="small" /> Updating
                        </>
                    ) : (
                        "Update"
                    )}
                </Button>
            </Form>
        </Card>
    );
};

export default EditBanner;