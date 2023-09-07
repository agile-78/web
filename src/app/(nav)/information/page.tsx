import { RecyclingSection } from "@/components/recyclingSection";
import Head from "next/head";
import React from "react";

export default function Information() {
  const recyclableItems = {
    plasitic: [
      {
        imageUrl: "/info-images/beverage.png",
        title: "Beverage bottles",
      },
      {
        imageUrl: "/info-images/detergent.png",
        title: "Detergent bottles",
      },
      {
        imageUrl: "/info-images/bag.png",
        title: "Plastic bags",
      },
      {
        imageUrl: "/info-images/shampoo.png",
        title: "Shampoo bottles",
      },
    ],
    aluminium: [
      {
        imageUrl: "/info-images/cans.png",
        title: "Aluminum cans",
      },
      {
        imageUrl: "/info-images/foil.png",
        title: "Aluminum foil",
      },
      {
        imageUrl: "/info-images/tray.png",
        title: "Aluminum trays",
      },
      {
        imageUrl: "/info-images/aluBot.jpeg",
        title: "Aluminum bottles",
      },
    ],
    paper: [
      {
        imageUrl: "/info-images/news.png",
        title: "Newspapers",
      },
      {
        imageUrl: "/info-images/box.png",
        title: "Cardboard boxes",
      },
      {
        imageUrl: "/info-images/maga.png",
        title: "Magazines",
      },
      {
        imageUrl: "/info-images/office.png",
        title: "Office paper",
      },
    ],
  };

  const nonRecyclableItems = {
    plasitic: [
      {
        imageUrl: "/info-images/packWfoil.png",
        title: "Packaging with foil",
      },
      {
        imageUrl: "/info-images/mel.jpeg",
        title: "Melamine products",
      },
      {
        imageUrl: "/info-images/card.png",
        title: "Expired credit card",
      },
      {
        imageUrl: "/info-images/toys.png",
        title: "Toys",
      },
    ],
    aluminium: [
      {
        imageUrl: "/info-images/aluCon.png",
        title: "Aluminum containers",
      },
      {
        imageUrl: "/info-images/lids.png",
        title: "Aluminum lids",
      },
      {
        imageUrl: "/info-images/tubes.png",
        title: "Aluminum tubes",
      },
      {
        imageUrl: "/info-images/package.png",
        title: "Aluminum packaging",
      },
    ],
    paper: [
      {
        imageUrl: "/info-images/junk.png",
        title: "Junk mail",
      },
      {
        imageUrl: "/info-images/Pbag.png",
        title: "Paper bags",
      },
      {
        imageUrl: "/info-images/cereal.png",
        title: "Cereal boxes",
      },
      {
        imageUrl: "/info-images/phone.png",
        title: "Phone books",
      },
    ],
  };

  return (
    <div>
      <Head>
        <title>Information</title>
      </Head>
      <RecyclingSection
        title="PLASTIC"
        recyclableItems={recyclableItems.plasitic}
        nonRecyclableItems={nonRecyclableItems.plasitic}
        extraCan={
          "Ziplock bags, bubble wraps, egg trays, fruit box and film packagings"
        }
        extraNot={"Plastic packaging contaminated with food"}
      />

      <RecyclingSection
        title="ALUMINIUM"
        recyclableItems={recyclableItems.aluminium}
        nonRecyclableItems={nonRecyclableItems.aluminium}
        extraCan={"Aluminum cans, foil, pie tins"}
        extraNot={"Foil with food residue, aluminum cans with hazardous waste"}
      />

      <RecyclingSection
        title="PAPER"
        recyclableItems={recyclableItems.paper}
        nonRecyclableItems={nonRecyclableItems.paper}
        extraCan={"Clean paper, cardboard, newspapers"}
        extraNot={"Greasy or food-soiled paper, laminated paper, tissues"}
      />

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
