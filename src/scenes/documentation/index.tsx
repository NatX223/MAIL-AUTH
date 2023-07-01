import HText from "@/shared/HText";
import { DocumentationType, SelectedPage } from "@/shared/types";
import {
  UserGroupIcon,
  LockClosedIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Documentation from "./Documentation";

const documentations: Array<DocumentationType> = [
  {
    icon: <LightBulbIcon className="h-6 w-6" />,
    title: "Seamless Sign-In",
    description:
      "Mail-Auth API's integration with Google Authentication provides a seamless sign-in process for users on the NEAR blockchain. This feature enhances the user experience by leveraging familiar Google credentials, making it easier for users to access NEAR blockchain-based applications.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Gas Fee Coverage",
    description:
      " Mail-Auth API's ability to cover gas fees for users is particularly important on the NEAR blockchain. Gas fees are the transaction costs associated with executing operations on the blockchain. By helping to cover gas fees, the API reduces the financial burden on users, making it more cost-effective to participate in the NEAR ecosystem and promoting wider adoption and usage of NEAR-based applications.",
  },
  {
    icon: <LockClosedIcon className="h-6 w-6" />,
    title: "Secure Account Creation",
    description:
      "Mail-Auth API ensures secure account creation on the NEAR blockchain. By verifying authentication tokens and user email, it establishes reliable and trustworthy user accounts, promoting the overall security of transactions and interactions within the NEAR ecosystem.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const documentation = ({ setSelectedPage }: Props) => {
  return (
    <section id="documentation" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Documentation)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 2.0 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MAIL-AUTH </HText>
        </motion.div>
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, amount: 0.5 }}
        >
          {documentations.map((documentation: DocumentationType) => (
            <Documentation
              key={documentation.title}
              icon={documentation.icon}
              title={documentation.title}
              description={documentation.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <div>
            <div>
              <div className="before:content-abstractwaves before:absolute before:-top-20 before:z-[1] ">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 2.0 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Contribute to{" "}
                    <span className="text-primary-500">MAIL-AUTH</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 2.0 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              This website serves as an open-source platform for community contributors, allowing them to propose edits to existing content, suggest innovative features, and assist in bug fixes. It fosters collaboration and empowers individuals to actively participate in improving the site's content and functionality.
              </p>
              <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
                <a
                  href="https://github.com/NatX223/MAIL-AUTH"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              </button>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:content-sparkles before:absolute before:-bottom-20 before:right-40 before:z-[-1]"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default documentation;
