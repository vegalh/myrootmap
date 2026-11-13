# The invite request form

The homepage's "Request an invite" section shows a hosted form: Google Forms on the English page, Jinshuju (金数据)
on the Chinese page. Build both with the questions below, in this order, so the answers line up in one spreadsheet.
Then paste each form's embed address into `INVITE_FORM_URLS` in `src/config/site.ts`.

Set each form to show its thank-you message on the same page (no redirect), and put the privacy link in the form's
description: `https://myrootmap.com/privacy` / `https://myrootmap.com/zh/privacy`.

## English (Google Forms)

**Title:** Request an invite to RootMap
**Description:** We're inviting families and teachers in small groups. It takes about a minute. How we use your answers: https://myrootmap.com/privacy

| # | Question | Type | Options |
|---|---|---|---|
| 1 | Your email (we'll send your invite here) | Short answer, email validation, required | |
| 2 | I am a… | Multiple choice, required | Parent · Grandparent or other caregiver · Teacher · Other |
| 3 | How old is your child, or the children you teach? | Checkboxes | Under 2 · 2–3 · 3–4 · 4–6 · Over 6 |
| 4 | On a workday, about how much time do you have for free play and activities with your child? | Multiple choice | Almost none · Under 30 minutes · 30–60 minutes · 1–2 hours · More than 2 hours |
| 5 | And on a weekend day? | Multiple choice | Almost none · Under 30 minutes · 30–60 minutes · 1–2 hours · More than 2 hours |
| 6 | What would you most want RootMap to help you with? | Paragraph | |
| 7 | Is there anything you wish tools like this did better? | Paragraph | |

**Thank-you message:** Thank you. You're on the list, and we'll email you when your group is invited.

## 中文（金数据）

**标题：** 申请 RootMap 内测邀请
**说明：** 我们正在分小批邀请家庭和老师，填写大约需要一分钟。我们如何使用你填写的信息：https://myrootmap.com/zh/privacy

| # | 问题 | 题型 | 选项 |
|---|---|---|---|
| 1 | 你的微信号（轮到你时，我们会通过微信联系你） | 单行文本，必填 | |
| 2 | 我是…… | 单选，必填 | 父母 · 祖辈或其他照护者 · 老师 · 其他 |
| 3 | 你的孩子（或你带的班）多大？ | 多选 | 2 岁以下 · 2–3 岁 · 3–4 岁 · 4–6 岁 · 6 岁以上 |
| 4 | 工作日，你大约有多少时间陪孩子自由玩耍、做活动？ | 单选 | 几乎没有 · 不到 30 分钟 · 30–60 分钟 · 1–2 小时 · 2 小时以上 |
| 5 | 周末的一天呢？ | 单选 | 几乎没有 · 不到 30 分钟 · 30–60 分钟 · 1–2 小时 · 2 小时以上 |
| 6 | 你最希望 RootMap 帮你做什么？ | 多行文本 | |
| 7 | 这类工具，你觉得哪里还可以做得更好？ | 多行文本 | |

**提交后的提示：** 谢谢你！你已经在名单里了。轮到你这一批时，我们会通过微信联系你。

## The list

Google Forms writes to a Google Sheet. Export Jinshuju to Excel and paste it into a second tab of the same sheet; the
columns match. Add three columns of your own: Status (waiting / invited / active), Invite code, Date invited.
Invite codes are kept in the app: `src/config/inviteCodes.ts` in RootMapMVP.
