import { FiBox, FiStar, FiZap } from "react-icons/fi";
import type { AppData } from "../types/app";
import {
	RiTwitterXFill,
} from "react-icons/ri";
import { MdStickyNote2 } from "react-icons/md";

export const appData: AppData = {
	title: "Compose Timer",
	description:
		"行動の習慣化のサポート、プレゼンの時間配分の管理、自由度の高いポモドーロタイマー、複数のパートを組み立ててタイムラインを構成できるので様々な用途に利用可能です。",
	logo: {
		type: "image",
		src: "/assets/favicon.png",
	},
	screenshots: {
		iphone: [
			"/assets/screenshots/iphone/1.png",
			"/assets/screenshots/iphone/2.png",
			"/assets/screenshots/iphone/3.png",
			// ...more Iphone screenshots
		],
		ipad: [
			"/assets/screenshots/ipad/1.png",
			"/assets/screenshots/ipad/2.png",
			"/assets/screenshots/ipad/3.png",
			// ...more iPad screenshots
		],
	},
	features: [
		{
			title: "パートにわけてタイマーを組み立てる",
			description: "必要な数だけパートを並べてタスクに合わせたタイマーを作ろう!",
			icon: FiStar,
		},
		{
			title: "パートごとにタイトルと説明をつけられる",
			description: "読み上げ機能つきで画面を見られなくても大丈夫",
			icon: FiZap,
		},
		{
			title: "バックグラウンドでもタイマーは止まらない",
			description: "他のアプリを開いていても大丈夫、パートの終了を通知でお知らせします",
			icon: FiBox,
		},
	],
	faqs: [
	],
	storeLinks: {
		apple: "https://apps.apple.com/jp/app/composetimer/id6740627031",
	},
	socialLinks: [
		{
			url: "https://note.com/compose_timer15",
			icon: MdStickyNote2,
			label: "Twitter",
		},
		{
			url: "https://twitter.com/c_timer15?s=21&t=d1wpNyUrpBTG4CTWLODOKA",
			icon: RiTwitterXFill,
			label: "Twitter",
		},
	],
};
