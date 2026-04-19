# ロームら三社統合 2026年4月19日

日の丸パワー半導体「三度目の正直」を、訂正反映済の最新情報で徹底解説する、スマートフォン完全特化のモダンUIウェブサイトです。

## プロジェクト概要

- **タイトル**: ロームら三社統合 2026年4月19日
- **テーマ**: ローム・東芝デバイス＆ストレージ・三菱電機の三社パワー半導体事業統合
- **基準日**: 2026年4月19日
- **編集方針**: 提出されたファクトチェックレポートを **最優先の正典** として反映

## 主な実装機能

- **スマートフォン特化のモダンUI**
  - ダークテーマ、カードベース、ガラスモーフィズム要素
  - AppBar（スティッキー）／ドロワーメニュー／ボトムナビ
  - スクロール出現アニメーション（IntersectionObserver）
  - セマンティックHTML、ARIA属性配慮
- **訂正反映の徹底**
  - 人名・役職（牛島知巳／竹見政義 常務執行役／佐藤研一郎）
  - 工場・拠点（ローム・アポロ筑後／加賀東芝エレクトロニクス／ソーラーフロンティア旧国富工場）
  - 日付（CORE 2030発表は2026.03.31）
  - 事業形態（分担製造連携／相互生産委託ではない）
  - 数値（菊池投資約1,000億円／インフィニオン22.8%）
- **静的サイト**: HTML＋CSS＋バニラJSのみ。サーバー処理なし。

## 公開URI一覧（ページ構成）

### 導入
- `/index.html` – TOP・ヒーロー・目次・3行まとめ・数字・4人の主役
- `/corrections.html` – **訂正サマリー（最優先・全15項目）**
- `/cast.html` – 登場人物一覧（13名）
- `/timeline.html` – 全体年表（2022〜2026.04.19＋想定タイムライン）

### 本編（12章＋序章・結章）
- `/chapters/prologue.html` – プロローグ：三社結集の衝撃
- `/chapters/ch01.html` – 春の嵐21日間
- `/chapters/ch02.html` – MOUの骨格と「まだ何も決まっていない」
- `/chapters/ch03.html` – 三人の主役
- `/chapters/ch04.html` – 世界シェア2位の計算式と「28兆円市場」
- `/chapters/ch05.html` – 技術的補完の地図
- `/chapters/ch06.html` – デンソーの執念と「ローム争奪戦」
- `/chapters/ch07.html` – 「黒船」は誰か
- `/chapters/ch08.html` – 歴史の亡霊（エルピーダ・ルネサス）
- `/chapters/ch09.html` – 統合を阻む4つの壁
- `/chapters/ch10.html` – 日本の半導体再興物語・第4の柱
- `/chapters/ch11.html` – 主要人物の肉声
- `/chapters/ch12.html` – 2026年4月19日時点の最新状況
- `/chapters/epilogue.html` – エピローグ：黒船の時代に

### 追補編（15節）
- `/supplement/s01.html` – ローム5,100億円計画の蹉跌
- `/supplement/s02.html` – 東芝300mm化の決定的意味
- `/supplement/s03.html` – 菊池8インチSiC新棟は既に稼働
- `/supplement/s04.html` – 4番目の日本勢・富士電機の不在
- `/supplement/s05.html` – ルネサスの静かなSiC撤退
- `/supplement/s06.html` – JSファンダリの突然死
- `/supplement/s07.html` – ウルフスピード91日再建劇
- `/supplement/s08.html` – ST・オンセミの静かなる攻勢
- `/supplement/s09.html` – 中国勢の本格台頭（BYD・揚州揚傑・時代電気）
- `/supplement/s10.html` – GaN市場という「もう一つの戦場」
- `/supplement/s11.html` – NVIDIA 800V HVDCという救済
- `/supplement/s12.html` – ネクスペリア・ショックの全貌
- `/supplement/s13.html` – 日本政府補助金フレーム10兆円時代
- `/supplement/s14.html` – 大山聡氏の辛辣な視座
- `/supplement/s15.html` – 過去日の丸連合と決定的に異なる5条件

### 付録
- `/glossary.html` – 用語集（SiC/GaN/IGBT/MOU/JIP/HVDC ほか）
- `/factories.html` – 工場マップ（拠点ポートフォリオ）
- `/sources.html` – 引用元・参考資料

### アセット
- `/css/style.css` – モバイル特化モダンUIスタイルシート
- `/js/main.js` – メインJS（補助）
- `/js/layout.js` – 共通レイアウト（AppBar／ドロワー／ボトムナビ／フッター）動的挿入

### ソース（元レポート・参照用）
- `/source/main_report.txt`
- `/source/supplement.txt`
- `/source/corrections.txt`

## 訂正の要点（採用表記）

| 項目 | 採用表記 |
|---|---|
| 東芝D&S社長 | **牛島 知巳** |
| 三菱電機 事業本部長 | **竹見 政義（常務執行役）** |
| ローム創業者 | **佐藤 研一郎** |
| ロームSiC中核拠点 | **ローム・アポロ筑後工場** |
| 宮崎第二工場の由来 | 旧ソーラーフロンティア国富工場 |
| 東芝の加賀拠点 | **加賀東芝エレクトロニクス**（能美市） |
| 菊池PA棟投資額 | 約1,000億円 |
| インフィニオン世界シェア | 約22.8%（Omdia 2024） |
| デンソー中計発表日 | 2026年3月31日（CORE 2030） |
| ローム・東芝協業実体 | 分担製造連携・投資3,883億円／助成最大1,294億円 |

## 技術スタック

- HTML5 / CSS3（カスタムプロパティ、Grid、Flexbox）
- Vanilla JavaScript（IntersectionObserver、動的DOM挿入）
- フォント：Noto Sans JP、Noto Serif JP、JetBrains Mono（Google Fonts経由）
- アイコン：Font Awesome 6（jsDelivr / CDN）
- 画像は使用していません（依頼条件）

## 未実装・今後の拡張候補

- ページ内検索機能（クライアントサイド検索）
- ダークモード／ライトモード切替トグル
- ページ間遷移プリフェッチ
- 読み上げモード（高コントラスト表示）
- PWA対応（オフライン読書）

## データモデル

本サイトではRESTful Table APIは使用していません。すべて静的HTMLコンテンツです。

## デプロイ

公開したい場合は、開発環境の **Publish タブ** からワンクリックで本番化できます。

---

© 2026 Integration Report Mobile Edition.
