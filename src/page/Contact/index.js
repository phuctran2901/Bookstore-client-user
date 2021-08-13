import { Col, Container, Row, Toast } from "react-bootstrap"
import { Button } from "../../components/Button"
import { AiFillPhone, AiTwotoneMail, AiFillFacebook } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { CgWebsite } from 'react-icons/cg';
import { BiHelpCircle } from 'react-icons/bi';
import emailjs from 'emailjs-com';
import { Spinner } from '../../components/Spinner';
import { toast } from 'react-toastify';
import { toastConfig } from '../../constants/configToast';
import { useState } from "react";
import "./index.css";
export const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const onSubmitForm = (e) => {
        setIsLoading(true);
        e.preventDefault();
        emailjs.sendForm("service_ek2seqq", "template_3i8drd7", e.target, "user_Ye2TEIAtUzzAVwSHhnDUg")
            .then((result) => {
                toast("Đã gửi thành công!", toastConfig);
                e.target.reset();
                setIsLoading(false);
            }, (error) => {
                e.target.reset();
                toast(error.text, toastConfig);
                setIsLoading(false);
            });
    }
    return (
        <div className="contact-wrap">
            <Container>
                <div className="form-wrap">
                    <Row>
                        <Col xs={12}>
                            <form onSubmit={onSubmitForm}>
                                <div className="form-group_contact">
                                    <input type="text" placeholder="Tên của bạn.." name="name" />
                                </div>
                                <div className="form-group_contact">
                                    <input type="text" placeholder="Email của bạn.." name="email" />
                                </div>
                                <div className="form-group_contact">
                                    <textarea type="text" placeholder="Nội dung..." rows={30} col={45} name="content" />
                                </div>
                                <div>
                                    <Button
                                        width="30%"
                                        label={isLoading ? <Spinner /> : "Gửi"}
                                    />
                                </div>
                            </form>
                        </Col>
                        <Col xs={12}>
                            <div className="contact-main">
                                <div>
                                    <span><AiFillPhone /></span>
                                    <span>0896728429</span>
                                </div>
                                <div>
                                    <span><AiTwotoneMail /></span>
                                    <span>hp.sliver123@gmail.com</span>
                                </div>
                                <div>
                                    <span><AiFillFacebook /></span>
                                    <a href="#">Hoàng Phúc</a>
                                </div>
                                <div>
                                    <span><BiHelpCircle /></span>
                                    <span>Trợ giúp</span>
                                </div>
                                <div>
                                    <span><HiLocationMarker /></span>
                                    <span >Khóm 1, Phường 4, TP Sa đéc, Đồng Tháp</span>
                                </div>
                                <div>
                                    <span><CgWebsite /></span>
                                    <a href="">My resume</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div >
    )
}