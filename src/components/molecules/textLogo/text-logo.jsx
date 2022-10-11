import Logo from "../../../utils/assets/images/Proxima_Logo.png";
import Image from "../../atoms/img/img";
import Title from "../../atoms/title/title";
import "./text-logo.styles.css";

export const TextLogo = () => {
    return (
        <div className="text-logo">
            <Image src={Logo} width="100%" height="50px" />
            <Title level={"h1"}>PROXIMA</Title>
        </div>
    )
}

export default TextLogo;