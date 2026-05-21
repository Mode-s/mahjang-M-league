import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────
// ① 装飾画像のパララックス（既存）
// ─────────────────────────────────────
document.querySelectorAll('.deco').forEach((el) => {
  gsap.to(el, {
    y: -100,
    rotate: '+=30',
    ease: 'none',
    scrollTrigger: {
      trigger: el.closest('section'),
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
});

// ─────────────────────────────────────
// ② セクションタイトルのフェードイン
// ─────────────────────────────────────
gsap.utils.toArray<HTMLElement>('.title-wrapper').forEach((el) => {
  gsap.from(el, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
});

// ─────────────────────────────────────
// ③ カード（About / Plan / Contact）の順次フェードイン
// ─────────────────────────────────────
gsap.utils.toArray<HTMLElement>('.list').forEach((list) => {
  gsap.from(list.children, {
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: list,
      start: 'top 80%',
    },
  });
});

// ─────────────────────────────────────
// ④ 店舗情報テーブルの行の順次表示
// ─────────────────────────────────────
gsap.utils.toArray<HTMLElement>('.info .row').forEach((row, i) => {
  gsap.from(row, {
    x: -30,
    opacity: 0,
    duration: 0.6,
    delay: i * 0.08,
    scrollTrigger: {
      trigger: row,
      start: 'top 85%',
    },
  });
});

// ─────────────────────────────────────
// ⑤ Heroのロード時アニメーション
// ─────────────────────────────────────
const heroImg = document.querySelector('.hero-image img');
if (heroImg) {
  gsap.from(heroImg, {
    scale: 1.1,
    duration: 1.5,
    ease: 'power2.out',
  });
}