import contactInfo from '../../utils/models/contact-info';
import axiosInstance from '../api.service';


const apiUuid = "8434817b-6f1d-4948-b284-c39f2a6e45f3"

const postContactInfo = async (contactInfo) => {
    try {
        const response = await axiosInstance.post(apiUuid, contactInfo);
        return response;
    } catch (error) {
        return error;
    }
}

postContactInfo.propTypes = {
    contactInfo: contactInfo,
};
export default postContactInfo;


