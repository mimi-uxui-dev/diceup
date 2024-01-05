/* eslint-disable react/no-unescaped-entities */
"use-client";
import Image from "next/image";
import React from "react";
import _applicationData from "./_applicationData";
import Tag from "../../components/ui/tag/Tag";
import applicationElipses from "../../../public/applicationElipses.svg";
import { ButtonLarge } from "@/components/ui/buttons/ButtonLarge";
import "./styles.css";
import Button from "@/components/ui/buttons/Button";

export default function page() {
  const _ = _applicationData();
  return (
    <article className="max-w-1444 mx-auto flex flex-col items-center gap-y-32 pt-56 px-4">
      <div className="flex justify-center items-center flex-col">
        <Tag className="mb-5" label={_.tag} />
        <div className="text-center font-bebas-neue text-6xl sm:text-custom-size-5rem tracking relative top-0 left-0 mb-5">
          {_.header.split("~")[0]} <br /> {_.header.split("~")[1]}
          <Image
            className="absolute sm:w-64 w-48 top-0 right-10 heroSectionElipses "
            src={applicationElipses}
            // width={268}
            // height={83}
            alt="Elipse circling new era text"
          />
        </div>
        <p className="bigbody text-center opacity-75 mb-12">
          Are you an aspiring streamer looking for your spotlight? Welcome to
          <br />
          DiceUp - a platform that's all about freedom, fun, and helping new
          talents shine!
        </p>
        <div className="flex justify-center items-center gap-5">
          <Button colorVariant={"brand"} sizeVariant={"large"}>
            Join NOW!
          </Button>
          <Button colorVariant={"accent"} sizeVariant={"large"}>
            Learn More
          </Button>
        </div>
      </div>

      <div className="benefitsContainer flex flex-wrap items-center justify-center lg:justify-between flex-row max-w-7xl gap-5 w-full px-4">
        {_.benefits4.map((item) => (
          <div className="flex items-center gap-4 w-64" key={item.id}>
            <Image
              src={item.imgURI}
              width={88}
              height={88}
              alt={`Dice Up benefets ${item.title}`}
            />
            <span className="font-bebas-neue text-4xl">{item.title}</span>
          </div>
        ))}
      </div>

      <Image
        className="max-w-7xl w-full px-6"
        src={_.illustration.main}
        alt="illu"
        quality={100}
      />

      <div className="max-w-4xl">
        <div className="mb-14">
          <p className=" text-white text-center font-bebas-neue text-6xl sm:text-custom-size-5rem">
            {_.mainContent.title}
          </p>
          <h3 className="text-center text-purple-600">
            {_.mainContent.subTitle}
          </h3>
        </div>
        <div>
          <div className="mb-12">
            <h3 className="text-linear-text mb-4">
              {_.mainContent.content.overview.title}
            </h3>
            <p className="bigbody font-light">
              {_.mainContent.content.overview.txt}
            </p>
          </div>
          <div className="mb-12">
            <h3 className="text-linear-text mb-4">
              {_.mainContent.content.whyDiceUp.title}{" "}
            </h3>
            <ul>
              {_.mainContent.content.whyDiceUp.txt.map((item) => (
                <li className="mb-4" key={item.subtitle}>
                  <p className="bigbody ">
                    <b>{item.subtitle}</b>
                  </p>
                  <p className="bigbody font-light">{item.txt}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-12">
            <h3 className="text-linear-text mb-4">
              {_.mainContent.content.readyToRollTheDice.title}{" "}
            </h3>
            <p className="bigbody mb-2 font-light">
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
