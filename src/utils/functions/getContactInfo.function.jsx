import postContactInfo from '../../services/contact-info/contact-info.service';
import getIpAddress from '../../services/ip-address/ip-address.services';
import contactInfo from '../models/contact-info';
// Function to get contact info as Name, IPAdress, Timezone
const getContactInfo = async () => {
    // Get IP Address
    const ipAddress = await getIpAddress().then((response) => {
        return response.data.ip;
    });
    // Get Name
    const name = "Juan Moyano";
    // Get localTime
    const localTime = new Date().toLocaleString();
    // Create contactInfo object
    const contactInfo = {
        name,
        ipAddress,
        localTime,
    };
    return contactInfo;
};


getContactInfo.propTypes = {
    contactInfo: contactInfo,
};

export default getContactInfo;

