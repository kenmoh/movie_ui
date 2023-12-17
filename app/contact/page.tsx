import { Input, Textarea } from "@nextui-org/react";
import Link from "next/link";
import { BsEnvelope } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-3">
        <BsEnvelope />
        <Link href='mailto:someone@example.com' className="text-sm ">Email Us</Link>
      </div>
      <div className="flex items-center justify-center gap-3">
        <FaWhatsapp />
        <Link href='https://wa.me/+2349074345335' className="text-sm ">Message on Whatsapp</Link>
      </div>
    </>
  );
};

export default ContactPage;
