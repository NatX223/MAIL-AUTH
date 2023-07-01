import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutus" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>ABOUT US</HText>
            <p className="py-5 ">
              We are a team of Nigerians ― blockchain's most adopted country in
              Africa- We are a team of Nigerians ― blockchain's most adopted country in
              Africa ― We leveraged NEAR blockchain's execution client and innovative technology to develop a Mail-Auth System, utilizing the Mail-Auth API, aims to develop an innovative application that facilitates a seamless sign-in process for users through Google Authentication. Additionally, it integrates with the NEAR blockchain to create user accounts, enable interactions with smart contracts, and cover transaction fees. By leveraging the NEAR blockchain's capabilities, the system ensures secure and efficient user experiences while also reducing the financial burden associated with transaction fees, making it more cost-effective for users to participate in tokenized asset transactions.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
