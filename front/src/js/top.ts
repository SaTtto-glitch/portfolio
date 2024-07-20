import { gsap, Power1 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { isSp } from '../util/util'


export const topInit = () => {
  sectionVisibilityObserver()
}

const sectionVisibilityObserver = () => {
  // const spFlag = isSp()

  // IntroSection Parallax
  // const sectionIntro = document.querySelector('.topIntroSection__bg img')
  // const sectionProduct = document.querySelector('.topContents__product')
  // if (!sectionIntro || !sectionProduct) return
  // gsap
  //   .timeline({
  //     scrollTrigger: {
  //       start: 0,
  //       end: 'max',
  //       scrub: true
  //     }
  //   })
  //   .addLabel('start', 0)
  //   .to(
  //     sectionIntro,
  //     {
  //       ease: 'none',
  //       startAt: { yPercent: 0 },
  //       yPercent: -60
  //     },
  //     'start'
  //   )
  //   .to(
  //     sectionIntro,
  //     {
  //       scrollTrigger: {
  //         trigger: sectionProduct,
  //         start: 0,
  //         end: 'top top',
  //         scrub: true
  //       },
  //       ease: Power4.easeInOut,
  //       yoyo: true,
  //       repeat: 1
  //     },
  //     'start'
  //   )

  // FlavorSection animation

  gsap.registerPlugin(ScrollTrigger);
  const flavorSection = document.querySelector('.sticky-container')
  const flavors = gsap.utils.toArray('.sticky-container__box')
  const fixedBg = document.querySelector('.fixedBg')

  gsap.set(flavors, { autoAlpha: 0 });

  flavors.forEach((flavor: any, i) => {
    console.log(i)
    ScrollTrigger.create({
      trigger: flavorSection,
      markers: true,
      // start: () => (window.innerHeight * i) + 200,
      start: () => 'top -' + window.innerHeight * i,
      end: () => '+=' + window.innerHeight,
      invalidateOnRefresh: true,
      onEnter: () => {
        if (i === 1) {
          gsap.to(fixedBg, {
            ease: Power1.easeOut,
            duration: 0.5
          })
          gsap.fromTo(
            flavor,
            { autoAlpha: 0 },
            { autoAlpha: 1, ease: Power1.easeOut, duration: 0.5 }
          )
        } else {
          gsap.fromTo(
            flavor,
            { autoAlpha: 0, y: 100 },
            { autoAlpha: 1, y: 0, ease: Power1.easeOut, duration: 0.5 }
          )
        }
      },
      onEnterBack: () => {
        if (i === 0) {
          gsap.to(fixedBg, {
            ease: Power1.easeOut,
            duration: 0.5
          })
        }
        gsap.fromTo(
          flavor,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: Power1.easeOut, duration: 0.5 }
        )
      },
      onLeave: () => {
        gsap.fromTo(
          flavor,
          { autoAlpha: 1 },
          { autoAlpha: 0, ease: Power1.easeOut, duration: 0.5 }
        )
      },
      onLeaveBack: () => {
        gsap.fromTo(
          flavor,
          { autoAlpha: 1 },
          { autoAlpha: 0, ease: Power1.easeOut, duration: 0.5 }
        )
      }
    })
    gsap.set(flavor, { autoAlpha: 0 })
  })

  // Section Pin留め
  // ScrollTrigger.create({
  //   trigger: flavorSection,
  //   scrub: true,
  //   pin: true,
  //   // markers: true,
  //   start: 'top top',
  //   end: () => '+=' + flavors.length * window.innerHeight,
  //   invalidateOnRefresh: true
  // });

  // if (spFlag) {
  //   // SP背景切り替え
  //   flavors.forEach((flavor: any, i) => {
  //     gsap.set(flavor, { opacity: 1 })
  //     ScrollTrigger.create({
  //       trigger: flavorSection,
  //       start: () => 'top -' + window.innerHeight * 0.5 * i,
  //       end: () =>
  //         '+=' + (i === 1 ? window.innerHeight : window.innerHeight * 0.5),
  //       invalidateOnRefresh: true,
  //       onEnter: () => {
  //         if (i === 1) {
  //           gsap.to(fixedBg, {
  //             background:
  //               "url('/app/themes/breather/assets/img/sp-top-gaba-back.png') #E1CEBF",
  //             ease: Power1.easeOut,
  //             duration: 0.5
  //           })
  //         }
  //       },
  //       onEnterBack: () => {
  //         if (i === 0) {
  //           gsap.to(fixedBg, {
  //             background:
  //               "url('/app/themes/breather/assets/img/sp-top-caffeine-back.png') #b5d3d1",
  //             ease: Power1.easeOut,
  //             duration: 0.5
  //           })
  //         }
  //       }
  //     })
  //   })
  // } else {
  //   // FlavorType animation
  //   flavors.forEach((flavor: any, i) => {
  //     ScrollTrigger.create({
  //       trigger: flavorSection,
  //       start: () => 'top -' + window.innerHeight * i,
  //       end: () => '+=' + window.innerHeight,
  //       invalidateOnRefresh: true,
  //       onEnter: () => {
  //         if (i === 1) {
  //           gsap.to(fixedBg, {
  //             background:
  //               "#E1CEBF",
  //             ease: Power1.easeOut,
  //             duration: 0.5
  //           })
  //           gsap.fromTo(
  //             flavor,
  //             { autoAlpha: 0 },
  //             { autoAlpha: 1, ease: Power1.easeOut, duration: 0.5 }
  //           )
  //         } else {
  //           gsap.fromTo(
  //             flavor,
  //             { autoAlpha: 0, y: 100 },
  //             { autoAlpha: 1, y: 0, ease: Power1.easeOut, duration: 0.5 }
  //           )
  //         }
  //       },
  //       onEnterBack: () => {
  //         if (i === 0) {
  //           gsap.to(fixedBg, {
  //             background:
  //               "url('/app/themes/breather/assets/img/top-caffeine-back.png') #b5d3d1",
  //             ease: Power1.easeOut,
  //             duration: 0.5
  //           })
  //         }
  //         gsap.fromTo(
  //           flavor,
  //           { autoAlpha: 0 },
  //           { autoAlpha: 1, ease: Power1.easeOut, duration: 0.5 }
  //         )
  //       },
  //       onLeave: () => {
  //         gsap.fromTo(
  //           flavor,
  //           { autoAlpha: 1 },
  //           { autoAlpha: 0, ease: Power1.easeOut, duration: 0.5 }
  //         )
  //       },
  //       onLeaveBack: () => {
  //         gsap.fromTo(
  //           flavor,
  //           { autoAlpha: 1 },
  //           { autoAlpha: 0, ease: Power1.easeOut, duration: 0.5 }
  //         )
  //       }
  //     })
  //     gsap.set(flavor, { autoAlpha: 0 })
  //   })

  // Section Pin留め
  ScrollTrigger.create({
    trigger: flavorSection,
    scrub: true,
    pin: true,
    start: () => 'top top',
    end: () => '+=' + flavors.length * window.innerHeight,
    invalidateOnRefresh: true
  })
  // }

  // FixedBg animation
  ScrollTrigger.create({
    trigger: flavorSection,
    scrub: true,
    start: () => window.innerHeight,
    end: () =>
      '+=' + (flavors.length + 1) * window.innerHeight,
    invalidateOnRefresh: true,
    onEnter: () => {
      fixedBg?.classList.add('is-active')
    },
    onLeave: () => {
      fixedBg?.classList.remove('is-active')
    },
    onEnterBack: () => {
      fixedBg?.classList.add('is-active')
    },
    onLeaveBack: () => {
      fixedBg?.classList.remove('is-active')
    }
  })

};

// const scrollBlur = () => {
//   const FV = document.querySelector(".fv") as HTMLElement | null;

//   if (FV) {
//     window.addEventListener("scroll", function () {
//       // スクロール位置を取得
//       const scrollPosition = window.scrollY;

//       // 発火点の設定（例: 50ピクセル）
//       const triggerPoint = 50;

//       // スクロール位置が発火点よりも小さい場合はブラーを適用しない
//       if (scrollPosition < triggerPoint) {
//         FV.style.setProperty("--blur", "0px");
//       } else {
//         // スクロール位置に基づいてブラーの強度を計算
//         const blurAmount = Math.min((scrollPosition - triggerPoint) / 10, 10);
//         // カスタムプロパティを使用して擬似要素のフィルタープロパティを更新
//         FV.style.setProperty("--blur", `${blurAmount}px`);
//       }
//     });
//   }
// };

// const scrollFade = () => {
//   const targets = document.getElementsByClassName("fade");

//   for (let i = targets.length; i--;) {
//     let observer = new IntersectionObserver((entries, observer) => {
//       for (let j = entries.length; j--;) {
//         if (entries[j].isIntersecting) {
//           entries[j].target.classList.add("active");
//           observer.unobserve(entries[j].target);
//         }
//       }
//     });

//     observer.observe(targets[i] as Element);
//   }
// };




