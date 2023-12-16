import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import "./style.css";
import logo from "../../../../public/logo-footer.png";
import linkedinIcon from "../../../../public/linkedin.svg";
import xTwitterIcon from "../../../../public/x-twitter.svg";
import instagramIcon from "../../../../public/instagram.svg";
import discordIcon from "../../../../public/discord.svg";
import Input from "../Input/Input";

interface FooterLink {
  label?: string | any;
  url: string | any;
  iconUri?: string | any;
}

interface FooterColumn {
  id: string;
  content: FooterLink[];
}

interface FooterRow {
  title: string;
  content: FooterLink[];
}

interface FooterContentItem {
  id: string;
  content?: FooterLink[];
  row1?: FooterRow;
  row2?: FooterRow;
}

const footerContent: FooterContentItem[] = [
  {
    id: "col1",
    content: [
      {
        label: "Home",
        url: "/",
      },
      {
        label: "Browse",
        url: "/",
      },
      {
        label: "Stream",
        url: "/",
      },
      {
        label: "Profile",
        url: "/",
      },
      {
        label: "Advertise",
        url: "/",
      },
    ],
  },
  {
    id: "col2",
    content: [
      {
        label: "Jobs",
        url: "/",
      },
      {
        label: "Press-release",
        url: "/",
      },
      {
        label: "Legal",
        url: "/",
      },
      {
        label: "Help Center",
        url: "/",
      },
      {
        label: "Contract",
        url: "/",
      },
    ],
  },
  {
    id: "col3",
    row1: {
      title: "Find us on social media",
      content: [
        {
          label: "linkedin",
          iconUri: linkedinIcon,
          url: "/",
        },
        {
          label: "x",
          iconUri: xTwitterIcon,
          url: "/",
        },
        {
          label: "instagram",
          iconUri: instagramIcon,
          url: "/",
        },
      ],
    },
    row2: {
      title: "Join our Discord community",
      content: [
        {
          iconUri: discordIcon,
          url: "/",
        },
      ],
    },
  },
];

const footerContentBottom = {
  companyLLCName: "© 2023 DICEUP LLC?",
  content: [
    {
      label: "Privacy Policy",
      url: "/",
    },
    {
      label: "Terms of Service",
      url: "/",
    },
    {
      label: "Cookie Policy",
      url: "/",
    },
    {
      label: "Affiliates",
      url: "/",
    },
    {
      label: "Partners",
      url: "/",
    },
  ],
};

export const Footer = ({ inputType = "email" }) => {
  return (
    <footer>
      {/* Top */}
      <div className="footer-top">
        {/* col1 */}
        <Image
          src={logo}
          className="footerLogo"
          width={200.6}
          height={64}
          alt={`Dice Up logo`}
        />
        {/* col2 */}
        <div className="gap15">
          {footerContent[0].content?.map((item) => (
            <a key={item.label} className="buttonText" href={item.url}>
              {item.label}
            </a>
          ))}
        </div>
        {/* col3 */}
        <div className="gap15">
          {footerContent[1].content?.map((item) => (
            <a key={item.label} className="buttonText" href={item.url}>
              {item.label}
            </a>
          ))}
        </div>
        {/* col4 */}
        <div className="gap50">
          <div className="gap15">
            <p className="buttonText">{footerContent[2].row1?.title}</p>
            <div className="flexRow gap15">
              {footerContent[2].row1?.content.map((item) => (
                <a key={item.label} href={item.url}>
                  <Image
                    src={item.iconUri}
                    width={24}
                    height={24}
                    alt={item.label}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="gap15">
            <p className="buttonText">{footerContent[2].row2?.title}</p>
            {footerContent[2].row2?.content.map((item) => (
              <a key={item.label} href={item.url}>
                <Image
                  src={item.iconUri}
                  width={24}
                  height={24}
                  alt={item.label}
                />
              </a>
            ))}
          </div>
        </div>
        {/* col5 */}
        <div className="gap20">
          <p className="buttonText">Join our newsletter</p>
          <Input
            placeholder="Your email.."
            classname=""
            type="email"
            value=""
          />
        </div>
      </div>
      {/* Bottom */}
      <div className="footer-bottom">
        <div className="flex gap30">
          {footerContentBottom.content.map((item) => (
            <a key={item.label} className="buttonText" href={item.url}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="buttonText">{footerContentBottom.companyLLCName}</div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  inputType: PropTypes.string,
};
