"use client";

import React, { useState, useEffect } from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { BiTimeFive } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import classes from "./home.module.css";
import Form from "./shared/form/form";
import Accordion from "./shared/Accordion/Accordion";
import WhatsAppLogo from "./shared/WhatsappLogo/whatsappLogo";
import Swiper from "./shared/Swiper/swiper";
import LazyLoadYoutube from "./shared/LazyLoadYoutube";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState(11 * 28 * 60); // Time in seconds (12 hours)
  const searchParams = useSearchParams();
  const [currentId, setCurrentId] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (timeLeft: any) => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const reviewImages = [
    {
      src: "/slide1.webp",
      alt: "Review",
    },
    {
      src: "/slide2.webp",
      alt: "Review",
    },
    {
      src: "/slide3.webp",
      alt: "Review",
    },
  ];

  const dataArray = [
    { id: "14", value: "Activists of Pradeep ji Mishra page" },
    { id: "15", value: "Pandit Pradeep Mishra page" },
    { id: "16", value: "Atharv Tv" },
    { id: "17", value: "Sukhdeshwar Mahadev" },
    { id: "18", value: "Praveen Khire" },
    { id: "19", value: "Mohit Parmar Sanatani" },
    { id: "20", value: "Ravi Prakash Gupta" },
    { id: "21", value: "Monika Gupta" },
  ];

  const generateWhatsAppURL = () => {
    let message = "Hi, I am looking for narmdeshwar shivling"; // Default message
    const matchedData = dataArray.find((data) => data.id === currentId); 

    if (matchedData) {
      message = `Hi, I am looking for narmdeshwar shivling and got to know about bhakti Bhandar from ${matchedData.value}`;
    }

    return `https://api.whatsapp.com/send?phone=919691794836&text=${encodeURIComponent(
      message
    )}`;
  };

  useEffect(() => {
    const value = searchParams.get("id");
    setCurrentId(value);
  }, [searchParams]);

  return (
    <div className={classes.homepage}>
      <WhatsAppLogo generateWhatsAppURL={generateWhatsAppURL}/>

      <div className={classes.listingProductsAndOrderNowBtn}>
        <div className={classes.salesLine}>
          <p>नर्मदेश्वर शिवलिंग</p>
        </div>
        <div className={classes.topDiscountLine}>
          प्रत्येक शिवलिंग पर 40% की छूट
        </div>
        <div className={classes.HeadingTimeLeft}>
          <button>
            <BiTimeFive
              style={{
                display: "inline",
                padding: "0 2px 1px 2px",
                width: "20px",
              }}
            />
            Sales Ending {formatTime(timeLeft)}
          </button>
        </div>
        <div className={classes.listingProducts}>
          <div className={classes.product}>
            <div className={classes.productImage}>
              <Image
                width={500}
                height={300}
                src="/shivling1.webp"
                alt="shivling"
              />
            </div>
            <div className={classes.productDesc}>
              <p> फ्लैट जलाधारी नर्मदेश्वर शिवलिंग </p>
              <p>
                <del>&#x20b9; 1581 </del>
                <strong style={{ color: "#ff5c00" }}> &#x20b9;949 </strong>
              </p>
              <button className={classes.ProductOrderNowBtn}>
                <Link href={generateWhatsAppURL()}>Order Now</Link>
              </button>
            </div>
          </div>
          <div className={classes.product}>
            <div className={classes.productImage}>
              <Image
                width={500}
                height={300}
                src="/shivling3.webp"
                alt="shivling"
              />
            </div>
            <div className={classes.productDesc}>
              <p>फ्लैट जलाधारी नर्मदेश्वर शिवलिंग + नंदी</p>
              <p>
                <del>&#x20b9;1665</del>
                <strong style={{ color: "#ff5c00" }}> &#x20b9;999</strong>
              </p>
              <button className={classes.ProductOrderNowBtn}>
                <Link href={generateWhatsAppURL()}>Order Now</Link>
              </button>
            </div>
          </div>
          <div className={classes.product}>
            <div className={classes.productImage}>
              <Image
                width={500}
                height={300}
                src="/shivling2.webp"
                alt="shivling"
              />
            </div>
            <div className={classes.productDesc}>
              <p>डमरू जलाधारी नर्मदेश्वर शिवलिंग + नंदी</p>
              <p>
                <del>&#x20b9;2330</del>
                <strong style={{ color: "#ff5c00" }}> &#x20b9;1399</strong>
              </p>
              <button className={classes.ProductOrderNowBtn}>
                <Link href={generateWhatsAppURL()}>Order Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.formBenfitBox}>
        <div className={classes.formBox}>
          <Form formattedTime={formatTime(timeLeft)} />
        </div>
        <div className={classes.clipAndBenfits}>
          <div className={classes.videoClip}>
            <LazyLoadYoutube videoId="k01Hk1ff0xQ" />
          </div>
          <div className={classes.benefits}>
            <p className={classes.benfitsHeading}>नर्मदेश्वर शिवलिंग के लाभ</p>

            <div className={classes.benfitsHeadingborder}></div>

            <div className={classes.productPoints}>
              <p>
                <VscDebugBreakpointLog className={classes.productPointer} />
                आपके बच्चे पढ़ाई में लगन से काम लेंगे और पूरा ध्यान देंगे।
              </p>
              <p>
                <VscDebugBreakpointLog className={classes.productPointer} />
                आपका व्यापार फलेगा-फूलेगा और मुनाफा बढ़ेगा।
              </p>
              <p>
                <VscDebugBreakpointLog className={classes.productPointer} />
                आपकी पुरानी बीमारियां जल्द ही ठीक हो जाएंगी।
              </p>
              <p>
                <VscDebugBreakpointLog className={classes.productPointer} />
                आपका वैवाहिक जीवन सुखमय और शांतिपूर्ण होगा।
              </p>
              <p>
                <VscDebugBreakpointLog className={classes.productPointer} />
                आपके घर का कोई भी वास्तु दोष दूर हो जाएगा।
              </p>
            </div>

            <p className={classes.benefitsLastPara}>
              ये सभी लाभ तभी संभव हैं जब आप पूरे मन से इस पवित्र शिवलिंग पर
              भरोसा रखेंगे। तो देर मत कीजिए और तुरंत नर्मदेश्वर शिवलिंग ऑर्डर
              कीजिए!
            </p>
          </div>
        </div>
      </div>

      <div className={classes.accordianBox}>
        <p>नर्मदेश्वर शिवलिंग, से जुड़े</p>
        <p>आपके कुछ सामान्य प्रश्न</p>

        <div className={classes.accordianHeaderBorder}></div>
        <Accordion
          title="शिवलिंग की पूजा करने से क्या लाभ होता है ?"
          content="आरोग्य की प्राप्ति होती है और धन लाभ के योग बनते हैं। ब्रह्मवैवर्त पुराण में बताया गया है कि पारद शिवलिंग की पूजा करने से मनुष्य को जीवन पर्यंत सभी सुख जैसे धन संपत्ति, समृद्धि, सफलता, सम्मान, सत्कार, संतान, सद्बुद्धि आदि प्राप्त होते हैं।"
          initialIsOpen={true}
        />
        <Accordion
          title="क्या तुलसी के पौधे के पास शिवलिंग रख सकते हैं ?"
          content="तुलसी के पौधे के पास कभी भी शिवलिंग नहीं रखना चाहिए। "
        />
        <Accordion
          title="घर में शिवलिंग किस दिशा में रखना चाहिए ?"
          content="शिवलिंग को पूर्व या उत्तर दिशा में रखना शुभ माना जाता है।"
        />
        <Accordion
          title="इसकी पूजा कैसे करें?"
          content="पानी, दूध, फूल और बेलपत्र से पूजा करें।"
        />
        <Accordion
          title="शिवलिंग का जल पीने से क्या होता है?"
          content="शिव पुराण के 22 अध्याय के 18 श्लोक के अनुसार शिवलिंग पर चढ़ा हुआ जल पीना शुभ होता है. शिवलिंग का जल पीने से आपको सभी रोगों से मुक्ति मिलती है. मानसिक रूप से सुकून भी मिलता है और तनाव भी दूर होता है. जीवन की नकारात्मक ऊर्जा भी खत्म होती है."
        />
      </div>

      <div className={classes.topBox}>
        <p className={classes.salesLine}>समीक्षा</p>
        <div className={classes.mostSaleprodcut}>
          <div className={classes.productsSwiperAndName}>
            <div className={classes.productsSwiper}>
              <Swiper images={reviewImages} />
            </div>
          </div>

          <div className={classes.prodPointOrderNowBtnBox}>
            <div className={classes.productPoints}>
              <p>
                <VscDebugBreakpointLog className={classes.productPointer} />
                नर्मदा नदी से निकलने वाले शिवलिंग को नर्मदेश्वर कहा गया है
              </p>
              <p>
                <VscDebugBreakpointLog className={classes.productPointer} />
                एक छोटे से मंदिर का निर्माण करें और उसमें शिवलिंग स्थापित करें।
              </p>
              <p>
                <VscDebugBreakpointLog className={classes.productPointer} />
                यह साक्षात शिव का स्वरूप है, सिद्ध और स्वयंभू शिवलिंग है
              </p>
              <p>
                <VscDebugBreakpointLog className={classes.productPointer} />
                इसकी पूजा शास्त्रों में अत्यधिक फलदायी बताई गई है
              </p>
              <p>
                <VscDebugBreakpointLog className={classes.productPointer} />
                यह घर में स्थापित किया जाने वाला पवित्र और चमत्कारी शिवलिंग है
              </p>
            </div>
            <p className={classes.dicountLine}>
              अभी आर्डर करें और पाएं 40% डिस्काउंट
            </p>
            <div className={classes.orderNowButtonBox}>
              <button className={classes.orderNowButton}>
                <Link href={generateWhatsAppURL()}>Order Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
