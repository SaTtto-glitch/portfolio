import { useEffect, useCallback, useState } from "react";
import { Modal } from "./Modal";
import { topInit } from "../js/top";
import { IMG_PATH } from "../js/paths";

export const HandleScroll = () => {
  /* モーダルの開閉を管理するstate */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCardType, setModalCardType] = useState("");
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.addEventListener("click", closeModal);
  }, []);

  useEffect(() => {
    return () => {
      document.removeEventListener("click", closeModal);
    };
  }, [closeModal]);

  useEffect(() => {
    topInit();
  }, []);

  function openModal(cardType: string) {
    setIsModalOpen(true);
    setModalCardType(cardType);
    document.removeEventListener("click", closeModal);
  }

  return (
    <>
      <div className="sticky-container">
        <section className="sticky-container__box">
          <div className="section__inner">
            <div className="section__titleBlock">
              <h2 className="section__titleBlock--title">PROFILE</h2>
            </div>

            <div className="column">
              <div className="column__item u-center">
                <div>
                  <img src={`${IMG_PATH}top/profile.jpg`} alt="" />
                </div>
                <div className="u-column">
                  <p className="logo-title">sayatto</p>
                  <div className="sns-icon">
                    <a href="https://github.com/SaTtto-glitch" target="_blank">
                      <img
                        src={`${IMG_PATH}top/github-mark.svg`}
                        alt="GitHub Mark"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="column__item">
                <p className="text">
                  東京のWeb制作会社でマークアップエンジニアをしています。
                </p>
                <div>
                  <div>
                    <p className="column__item--title">▼ Skill</p>
                    <p>HTML/CSS/JavaScipt/WordPress/React/Docker/Git</p>
                  </div>

                  <div>
                    <p className="column__item--title">▼ Favorite</p>
                    <p>イラスト/漫画/英語/Youtube</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky-container__box">
          <div className="section__inner">
            <div className="section__titleBlock">
              <h2 className="section__titleBlock--title">WORKS</h2>
            </div>
            <div className="cardWrapper">
              <button className="card" onClick={() => openModal("dog")}>
                <div className="card__image">
                  <img src={`${IMG_PATH}top/Dog_app.gif`} alt="" />
                </div>
              </button>

              <button className="card" onClick={() => openModal("forum")}>
                <div className="card__image">
                  <img src={`${IMG_PATH}top/Forum_app.gif`} alt="" />
                </div>
              </button>

              <div className="card" onClick={() => openModal("review")}>
                <div className="card__image">
                  <img src={`${IMG_PATH}top/Review_app.gif`} alt="" />
                </div>
              </div>
            </div>
          </div>
          {isModalOpen ? (
            <Modal cardType={modalCardType} onClick={() => closeModal()} />
          ) : (
            ""
          )}
        </section>
      </div>
    </>
  );
};
