/* eslint-disable react/no-unescaped-entities */
"use-client";
import Image from "next/image";
import React from "react";
import _applicationData from "./_applicationData";
import Tag from "../../components/ui/tag/Tag";
import applicationElipses from "../../../public/applicationElipses.svg";
import "./styles.css";
import { ButtonLarge } from "@/components/ui/buttons/ButtonLarge";

export default function page() {
  const _ = _applicationData();
  return (
    <article className="applicationContainer">
      <div className="flex justifyCenter alignCenter flexColumn mb50">
        <Tag className="mb20" label={_.tag} />
        <div className="applicationHeader mb20">
          {_.header.split("~")[0]} <br /> {_.header.split("~")[1]}
          <Image
            className="heroSectionElipses"
            src={applicationElipses}
            width={268}
            height={83}
            alt="Elipse circling new era text"
          />
        </div>
        <p className="bigbody textcenter opacity75 mb50">
          Are you an aspiring streamer looking for your spotlight? Welcome to
          <br />
          DiceUp - a platform that's all about freedom, fun, and helping new
          talents shine!
        </p>
        <div className="flex justifyCenter alignCenter gap20">
          <ButtonLarge
            outline={false}
            text="Join NOW!"
            disable={false}
            linkURL="#"
          />
          <ButtonLarge
            outline={true}
            text="Learn More"
            disable={false}
            linkURL="#"
          />
        </div>
      </div>
      <div className="benefitsContainer">
        {_.benefits4.map((item) => (
          <div key={item.id}>
            <Image
              className="benefitsIcons"
              src={item.imgURI}
              width={100}
              height={100}
              alt={`Dice Up benefets ${item.title}`}
            />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <Image
        className="heroSectionMainImg"
        src={_.illustration.main}
        alt="illu"
      />
      <div className="applicationContent">
        <div className="mb60">
          <p className="applicationContent-header">{_.mainContent.title}</p>
          <h3 className="textcenter">{_.mainContent.subTitle}</h3>
        </div>
        <div>
          <div className="mb50">
            <h3 className="textLinearGreen mb15">
              {_.mainContent.content.overview.title}
            </h3>
            <p className="bigbody fontLight">
              {_.mainContent.content.overview.txt}
            </p>
          </div>
          <div className="mb50">
            <h3 className="textLinearGreen mb15">
              {_.mainContent.content.whyDiceUp.title}{" "}
            </h3>
            <ul>
              {_.mainContent.content.whyDiceUp.txt.map((item) => (
                <li key={item.subtitle}>
                  <p className="bigbody">
                    <b>{item.subtitle}</b>
                  </p>
                  <p className="bigbody fontLight">{item.txt}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb50">
            <h3 className="textLinearGreen mb15">
              {_.mainContent.content.readyToRollTheDice.title}{" "}
            </h3>
            <p className="bigbody fontLight">
              {_.mainContent.content.readyToRollTheDice.txt[0]}
            </p>
            <b className="bigbody">
              {_.mainContent.content.readyToRollTheDice.txt[1]}
            </b>
          </div>
        </div>
      </div>
    </article>
  );
}
