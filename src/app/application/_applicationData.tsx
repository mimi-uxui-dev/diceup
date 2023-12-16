import i1 from "../../../public/i1.png";
import i2 from "../../../public/i2.png";
import i3 from "../../../public/i3.png";
import i4 from "../../../public/i4.png";
import main from "../../../public/main.png";

interface Benefit {
  id: string;
  imgURI: string | any;
  title: string;
}

interface OverviewItem {
  title: string;
  txt: string;
}

interface SubSectionItem {
  subtitle: string;
  txt: string;
}

interface WhyDiceUpSection {
  title: string;
  txt: SubSectionItem[];
}

interface ReadyToRollTheDiceSection {
  title: string;
  txt: string[];
}

interface MainContent {
  title: string;
  subTitle: string;
  content: {
    overview: OverviewItem;
    whyDiceUp: WhyDiceUpSection;
    readyToRollTheDice: ReadyToRollTheDiceSection;
  };
}

interface Illustration {
  main: string | any;
}

interface ApplicationData {
  tag: string;
  header: string;
  header_p: string;
  benefits4: Benefit[];
  illustration: Illustration;
  mainContent: MainContent;
}

const _applicationData = (): ApplicationData => {
  return {
    tag: "Application",
    header: "Roll into a New Era~of Streaming with DiceUp!",
    header_p:
      "Are you an aspiring streamer looking for your spotlight? Welcome to DiceUp - a platform that's all about freedom, fun, and helping new talents shine!",
    benefits4: [
      {
        id: "1",
        imgURI: i1,
        title: "Paid Streaming",
      },
      {
        id: "2",
        imgURI: i2,
        title: "Freedom to Be You",
      },
      {
        id: "3",
        imgURI: i3,
        title: "Gamified Interaction",
      },
      {
        id: "4",
        imgURI: i4,
        title: "Multistream Liberty",
      },
    ],
    illustration: {
      main: main,
    },
    mainContent: {
      title: "Get hired as a streamer",
      subTitle: "Partime or Fulltime",
      content: {
        overview: {
          title: "Overview",
          txt: "DiceUp is a unique game streaming platform where users have the opportunity to play against streamers in exciting dice games.",
        },
        whyDiceUp: {
          title: "Why Dice Up?",
          txt: [
            {
              subtitle: "Freedom to Be You",
              txt: "Whether you're into SFW or NSFW content, DiceUp is your space to express your true self in a safe environment. We celebrate diversity and creativity!",
            },
            {
              subtitle: "New Streamer Friendly",
              txt: "New Streamer FriendlyStruggling to get noticed? Our platform is designed to boost new streamers. With our unique visibility strategies, we make sure you're not just another face in the crowd.",
            },
            {
              subtitle: "Your Rules, Your Rewards",
              txt: "Enjoy an amazing 70% payout on all subs and dice usages, plus $20 per hour of livestreaming (up to 5 hours weekly,  with chances to increase).",
            },
            {
              subtitle: "Multistream Liberty",
              txt: "Stream on DiceUp and feel free to multistream to other platforms like Twitch or YouTube. Spread your reach without restrictions!",
            },
            {
              subtitle: "Promote Freely",
              txt: "Shout out your socials, promote your website - it's all fair game here. Plus, all tips and donations outside our platform are yours, no commission from us.",
            },
            {
              subtitle: "Gamified Interaction",
              txt: "Our unique 'dice against viewers' feature brings a thrilling twist, making your streams unforgettable.",
            },
            {
              subtitle: "Exclusive Perks",
              txt: "From custom dice to exclusive advertising deals, we've got a trove of goodies just for you.",
            },
          ],
        },
        readyToRollTheDice: {
          title: "Ready to Roll the Dice?",
          txt: [
            "If you're up for a fun, liberating streaming experience, DiceUp is your platform. Apply now through our VideoAsk link, and tell us why you're the next streaming sensation!",
            "DiceUp – Where New Stars Rise and Freedom Reigns.",
          ],
        },
      },
    },
  };
};

export default _applicationData;
