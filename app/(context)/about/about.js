//About.js
import Image from 'next/image';
import { useContext } from "react";
import { ComponentContext } from "../../context/ComponentContext";
import Layout from "../../components/main/Layout";
import useTranslation from "../../translations/useTranslation";

const About = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  const { t } = useTranslation();
  return (
    // <Layout title="Shops">
    <Layout title={t("pageAboutMe_title")} description={t("pageAboutMe_description")}>
      <div className="conteiner">
        {/* //<div>-потрібен для того що чітко окреслити розміри внутрішнього контейнера */}
        <div className="paper">
          <h1>{t("pageAboutMe_title")}</h1>
          <div className="card__list">
            <div className="card__item">
              <h3 id="m1">{t("pageAboutMe_firstShop")}</h3>
              {/* <Image src="/shops/Ctan2-500-375.jpg" alt="Ctan2" width={100} height={24} priority /> */}
              <Image src="/shops/Ctan2-500-375.jpg" alt="Ctan2" fill priority />
              <p>{t("pageShops_m1Descr")}</p>
            </div>
            <div className="card__item">
              <h3>{t("home_aboutPage")}</h3>
              {t("pageAboutMe_text1")}
              <h4>{t("pageAboutMe_text2")}</h4>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .conteiner {
          display: flex;
          flex-direction: column;
          justify-content: center;
          //padding-top: 20px;
          padding: 20px;

          flex-grow: 1; //Кофіцієнт збільшення
          width: 100%;
          background: ${theme.colors.background};
        }
        .paper {
          width: 100%;
          padding-bottom: 20px;
          padding: 0 20px; //Внутріщні відступи Paper
          margin-bottom: 10px;
          display: flex;
          flex-direction: column;
          border-radius: 15px;
          background: ${theme.colors.backgroundPaper};
          box-shadow: ${theme.colors.boxShadowPaper};
        }
        .paper h1 {
          padding: 5px;
          margin: 15px 10px;
          text-align: center;
          border-radius: 15px;
          color: ${theme.colors.text};
          font-family: ${theme.fontFamily.serif};
          //background: ${theme.colors.backgroundPaperHead};
          background: ${theme.colors.backgroundPaper};
          //box-shadow: ${theme.colors.boxShadowPaperHead};
          box-shadow: ${theme.colors.boxShadowPaper};
        }
        .card__list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between; /*Перший ел зпочатку останній вкінці */
          max-width: 1240px;
          margin: auto;
        }
        .card__item {
          padding: 10px;
          margin: 0 0 20px;
          width: calc((100% - 40px) / 2); //Щирина при 2-х колонках
          overflow: hidden; //щоб изображение не выходило за рамки блока при увеличении. Не працює!!!
          border-radius: 15px;
          color: ${theme.colors.text};
          font-family: ${theme.fontFamily.serif};
          //background: ${theme.colors.backgroundCard};
          background: ${theme.colors.backgroundPaper};
          //box-shadow: ${theme.colors.boxShadowCard};
          box-shadow: ${theme.colors.boxShadowPaper};
        }

        .card__item img:hover {
          transform: scale(1.1);
          transition: transform 0.4s ease-in;
          // transform: scale(0.5); // пропорциональное уменьшение элемента наполовину
          cursor: pointer; //рука
        }
        img {
          max-width: 100%;
        }
        h2,
        h3,
        p {
          margin: 0 0 5px 0;
        }
        p {
          font-size: 18px;
          color: #777;
        }

        @media (max-width: 600px) {
          .card__item {
            width: auto;
            padding: 10px 20px;
          }
        }
      `}</style>
    </Layout>
  )
};

export default About;
