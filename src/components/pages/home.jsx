// Default theme
import Theme from "../../utils/theme/theme";
//Atoms
import Button from "../atoms/button/button";
import Link from "../atoms/link/link";
import Title from "../atoms/title/title";
import Image from "../atoms/img/img";
//Styles
import "./home.styles.css";
//Image Constant
import Banner from "../../utils/assets/images/image_top.png";
import AboutUsImage from "../../utils/assets/images/image_low.png";
import Loading from "../../utils/assets/images/loading.gif";
import Error from "../../utils/assets/images/error.gif";
import Check from "../../utils/assets/images/check.gif";
//Icon components
import { CgArrowRight, CgArrowUp, CgCheck } from "react-icons/cg";
//Molecules
import Navbar from "../molecules/navbar/navbar";
import TextCard from "../molecules/textCard/text-card";
import { ABOUT_US_CARDS } from "../../utils/contants/app.const";
import getContactInfo from "../../utils/functions/getContactInfo.function";
import postContactInfo from "../../services/contact-info/contact-info.service";
import { useState } from "react";
import Modal from "../molecules/modal/modal";

const Home = () => {

    const [isLoanding, setIsLoanding] = useState(false);
    const [isModalShowing, setIsModalShowing] = useState(false);
    const [contactInfoSuccess, setContactInfoSuccess] = useState(false);


    const handleSumitContactInfo = async () => {
        setIsLoanding(true);
        setIsModalShowing(true);
        try {
            const contactInfo = await getContactInfo();
            const response = await postContactInfo(contactInfo);
            if (response.status === 200) {
                setContactInfoSuccess(true);
                setIsModalShowing(true);
            }
        } catch (error) {
            setContactInfoSuccess(false);
            setIsModalShowing(true);
        }
        setIsLoanding(false);
        setTimeout(() => {
            setIsModalShowing(false);
        }, 3000);
    }
    return (
        // Adding default theme to the app
        <Theme>
            {/* Calling navbar component */}
            <Navbar handleSumitContactInfo={handleSumitContactInfo} />
            <div className="root">
                <section id="Home">
                    <div className="section">
                        <div className="section-content">
                            {/* <div className="section-content-left"> */}
                            <div className="banner-text">
                                <Title level={"h1"}>Unlock Nearshore resources & insutech capabilites</Title>
                                {/* H3 is for subtitles */}
                                <Title level={"h3"}>We deliver transformation.</Title>
                                <Button variant={"ligth-shadow"} >Discover How<CgArrowRight /></Button>
                            </div>
                            {/* </div> */}
                            <div className="image-content">
                                <Image src={Banner} alt="Banner" width={"100%"} />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="AboutUs">
                    <div className="section">
                        <div className="section-content">
                            <div className="image-content">
                                <Image src={AboutUsImage} alt="Banner" width={"100%"} />
                            </div>
                            <div className="section-text">
                                <div className="cards-container">
                                    {ABOUT_US_CARDS.map((card) => {
                                        return (
                                            <TextCard key={card.id}><CgCheck />{card.text}</TextCard>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Back To Top button */}
                <Link variant={"back-to-top"} href="#Home"><CgArrowUp /></Link>
            </div>
            <Modal isShowing={isModalShowing} setIsShowing={setIsModalShowing}>
                {isLoanding ?
                    <>
                        <Image src={Loading} alt="Loading" width={"10%"} /><Title level={"h3"}>Loading...</Title>
                    </>
                    :
                    contactInfoSuccess ?
                        <>
                            <Image src={Check} alt="Check" width={"50%"} /> <Title level={"h1"}>Contact info sent successfully</Title>
                        </>
                        :
                        <>
                            <Image src={Error} alt="Error" width={"50%"} /><Title level={"h1"}>Error Sending Contact Info</Title>
                        </>
                }
            </Modal>
        </Theme>
    );
}
export default Home;