import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="srimalherath991@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+94 70 393 0877" Image={FiPhone} />
      <SingleInfo text="Kandy, Sri Lanka" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
