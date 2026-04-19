/* Layout JS - inserts app bar, drawer, bottom nav dynamically
   Data attributes on <body>:
     data-base : relative path prefix to root (e.g. "" or "../")
*/
(function(){
  'use strict';
  const base = document.body.getAttribute('data-base') || '';

  const appbarHTML = `
<header class="appbar">
  <div class="appbar-inner">
    <a href="${base}index.html" class="appbar-brand" style="color:inherit;text-decoration:none;">
      <span class="b-ja">ロームら三社統合</span>
      <span class="b-en">ROHM × TOSHIBA × MITSUBISHI ELECTRIC</span>
    </a>
    <span class="appbar-date">2026.04.19</span>
    <button class="menu-btn" aria-label="メニュー"><i class="fa-solid fa-bars"></i></button>
  </div>
</header>
<div class="drawer-backdrop"></div>
<aside class="drawer" aria-label="目次">
  <div class="drawer-head">
    <span class="drawer-head-title">目次 / CONTENTS</span>
    <button class="drawer-close" aria-label="閉じる"><i class="fa-solid fa-xmark"></i></button>
  </div>

  <div class="drawer-section">導入</div>
  <ul class="drawer-nav">
    <li><a href="${base}index.html"><span class="num">TOP</span>表紙 & 目次</a></li>
    <li><a href="${base}corrections.html"><span class="num">FIX</span>訂正サマリー</a></li>
    <li><a href="${base}cast.html"><span class="num">👥</span>登場人物一覧</a></li>
    <li><a href="${base}timeline.html"><span class="num">⏱</span>全体年表</a></li>
  </ul>

  <div class="drawer-section">本編：12章＋序結</div>
  <ul class="drawer-nav">
    <li><a href="${base}chapters/prologue.html"><span class="num">序</span>プロローグ</a></li>
    <li><a href="${base}chapters/ch01.html"><span class="num">1</span>春の嵐21日間</a></li>
    <li><a href="${base}chapters/ch02.html"><span class="num">2</span>MOUの骨格</a></li>
    <li><a href="${base}chapters/ch03.html"><span class="num">3</span>三人の主役</a></li>
    <li><a href="${base}chapters/ch04.html"><span class="num">4</span>世界2位の計算式</a></li>
    <li><a href="${base}chapters/ch05.html"><span class="num">5</span>技術的補完</a></li>
    <li><a href="${base}chapters/ch06.html"><span class="num">6</span>デンソーの執念</a></li>
    <li><a href="${base}chapters/ch07.html"><span class="num">7</span>「黒船」は誰か</a></li>
    <li><a href="${base}chapters/ch08.html"><span class="num">8</span>歴史の亡霊</a></li>
    <li><a href="${base}chapters/ch09.html"><span class="num">9</span>統合を阻む壁</a></li>
    <li><a href="${base}chapters/ch10.html"><span class="num">10</span>半導体再興物語</a></li>
    <li><a href="${base}chapters/ch11.html"><span class="num">11</span>主要人物の肉声</a></li>
    <li><a href="${base}chapters/ch12.html"><span class="num">12</span>最新状況</a></li>
    <li><a href="${base}chapters/epilogue.html"><span class="num">結</span>エピローグ</a></li>
  </ul>

  <div class="drawer-section">追補編：15節</div>
  <ul class="drawer-nav">
    <li><a href="${base}supplement/s01.html"><span class="num">1</span>ローム5,100億円の蹉跌</a></li>
    <li><a href="${base}supplement/s02.html"><span class="num">2</span>東芝300mm化の意味</a></li>
    <li><a href="${base}supplement/s03.html"><span class="num">3</span>菊池SiCは既に稼働</a></li>
    <li><a href="${base}supplement/s04.html"><span class="num">4</span>富士電機の不在</a></li>
    <li><a href="${base}supplement/s05.html"><span class="num">5</span>ルネサスSiC撤退</a></li>
    <li><a href="${base}supplement/s06.html"><span class="num">6</span>JSファンダリ突然死</a></li>
    <li><a href="${base}supplement/s07.html"><span class="num">7</span>ウルフスピード91日再建</a></li>
    <li><a href="${base}supplement/s08.html"><span class="num">8</span>ST・オンセミ攻勢</a></li>
    <li><a href="${base}supplement/s09.html"><span class="num">9</span>中国勢価格破壊</a></li>
    <li><a href="${base}supplement/s10.html"><span class="num">10</span>GaN市場</a></li>
    <li><a href="${base}supplement/s11.html"><span class="num">11</span>NVIDIA 800V HVDC</a></li>
    <li><a href="${base}supplement/s12.html"><span class="num">12</span>ネクスペリア全貌</a></li>
    <li><a href="${base}supplement/s13.html"><span class="num">13</span>10兆円補助金</a></li>
    <li><a href="${base}supplement/s14.html"><span class="num">14</span>大山聡氏の視座</a></li>
    <li><a href="${base}supplement/s15.html"><span class="num">15</span>過去と異なる5条件</a></li>
  </ul>

  <div class="drawer-section">付録</div>
  <ul class="drawer-nav">
    <li><a href="${base}glossary.html"><span class="num">📖</span>用語集</a></li>
    <li><a href="${base}factories.html"><span class="num">🏭</span>工場マップ</a></li>
    <li><a href="${base}sources.html"><span class="num">📚</span>引用元</a></li>
  </ul>

  <div class="drawer-foot">本サイトは訂正レポートを最優先で反映。<br>As of 2026-04-19</div>
</aside>`;

  const bottomNavHTML = `
<nav class="bottom-nav" aria-label="クイックナビ">
  <a href="${base}index.html" title="TOP"><i class="fa-solid fa-house"></i></a>
  <a href="${base}corrections.html" title="訂正"><i class="fa-solid fa-circle-exclamation"></i></a>
  <a href="${base}timeline.html" title="年表"><i class="fa-solid fa-timeline"></i></a>
  <a href="${base}cast.html" title="登場人物"><i class="fa-solid fa-users"></i></a>
  <a href="${base}glossary.html" title="用語集"><i class="fa-solid fa-book"></i></a>
</nav>`;

  const footerHTML = `
<footer class="site-foot">
  <div class="f-brand">ロームら三社統合 2026.04.19</div>
  日の丸パワー半導体、三度目の正直なるか。<br>
  本サイトはファクトチェック済レポートに基づいて再構成された解説サイトです。<br>
  © 2026 Integration Report Mobile Edition.
</footer>`;

  // Insert into placeholders if present
  const topSlot = document.getElementById('layout-top');
  if (topSlot) topSlot.innerHTML = appbarHTML;

  const navSlot = document.getElementById('layout-bottom-nav');
  if (navSlot) navSlot.innerHTML = bottomNavHTML;

  const footSlot = document.getElementById('layout-footer');
  if (footSlot) footSlot.innerHTML = footerHTML;

  // Drawer interactions (duplicated from main.js for reliability when layout is injected)
  const menuBtn = document.querySelector('.menu-btn');
  const drawer = document.querySelector('.drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const drawerClose = document.querySelector('.drawer-close');
  function open(){ drawer.classList.add('open'); backdrop.classList.add('open'); document.body.style.overflow='hidden'; }
  function close(){ drawer.classList.remove('open'); backdrop.classList.remove('open'); document.body.style.overflow=''; }
  if(menuBtn) menuBtn.addEventListener('click', open);
  if(drawerClose) drawerClose.addEventListener('click', close);
  if(backdrop) backdrop.addEventListener('click', close);
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') close(); });

  // Mark current
  const path = location.pathname.split('/').slice(-2).join('/');
  const fname = location.pathname.split('/').pop();
  document.querySelectorAll('.drawer-nav a').forEach(a=>{
    const href = a.getAttribute('href').split('/').slice(-2).join('/');
    const hf = a.getAttribute('href').split('/').pop();
    if (href.endsWith(path) || hf === fname){
      a.classList.add('current');
    }
  });
  document.querySelectorAll('.bottom-nav a').forEach(a=>{
    if (a.getAttribute('href').endsWith(fname)) a.classList.add('active');
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && reveals.length){
    const io = new IntersectionObserver(es=>{
      es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} });
    },{threshold:0.08, rootMargin:'0px 0px -40px 0px'});
    reveals.forEach(el=>io.observe(el));
  } else {
    reveals.forEach(el=>el.classList.add('visible'));
  }

  // Smooth anchor
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const id = this.getAttribute('href').slice(1);
      if(!id) return;
      const t = document.getElementById(id);
      if(t){
        e.preventDefault();
        const top = t.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({top, behavior:'smooth'});
      }
    });
  });
})();
