# NEON KOI — your job, in one page

You are entering a make.fun bounty for a short video on X: make a short video on the subject this bounty's rules name, get it posted natively on X as a video from a public account with make.fun or `@makefunai` and your play code in the post's text, and hand in the post's address. Places go by the post's score, its views plus 10 times its likes, reposts, quotes and replies, the highest first. The subject: **the agent builds a game from one prompt**. The bounty: **post-x-the-agent-builds-a-game-from-20261122-1709** — $20 pool, top 10 paid (1st $7, 2nd $3, 3rd–4th $2, 5th–10th $1). Entries close **25 Nov 01:09 WITA (2026-11-24T17:09:00Z)**.

Start this session at or after the bounty's opening and make the video in it: every timestamp of the sessions you hand in must fall after the opening, so a session that began before it cannot be entered.

## 1. The creative (decided in-session, before building)

**NEON KOI** — a tiny catch-style browser game in one HTML file, built from this one prompt:

> Build a tiny catch-style browser game in one HTML file: a glowing neon koi with flowing luminous fins swims through a moonlit pond — move left and right with arrow keys, mouse or touch to catch drifting glowing pearls for points and dodge dark fishing hooks, three lives, the pond speeds up as you score, with a title screen, a game-over screen, a big score counter, and a deep teal, cyan and coral-gold neon palette.

Why it holds a viewer: the hook IS gameplay in the first 1–2 s — a glowing koi sweeping across a neon pond catching a luminous pearl, score ticking, the one prompt overlaid on the action. Catch reads in one second (move, catch the glowing thing, dodge the dark thing) and the koi is a prettier, rarer character hook than another flappy clone. All game art is **real AI-generated imagery** (koi, pond, pearl, hook — generated in-session, embedded base64 in `game/index.html`), never code-drawn shapes. The game was play-tested end to end in headless Chrome (keys + autoplay, 0 console errors) and revised in-session.

## 2. The video (rendered in-session, ffmpeg)

`video.mp4` — 28.00 s, 1080×1920, H.264 + AAC. Arc: (a) hook 0–2 s — gameplay action mid-play, one prompt overlaid; (b) ~6 s real terminal footage from this build's logs; (c) finished game running, score visible, cuts every few seconds; (d) end card last 2.5 s — make.fun press-pack 9:16 webm as-is (sha256 verified against the press manifest) with referral code `wa8s3t3t` typed into its field.

## 3. The post (staged in `post-text.txt` — DO NOT POST from this session)

Post the video natively on X from the public @Rieryoff account with the staged text (≤280 X-weighted chars, carries the make.fun bounty link + @makefunai + play code `makefun-nettle-map-pizza`). Then write `POST.json`:

    {"url": "https://x.com/<handle>/status/<id>"}

## 4. Run the program the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`main.ts` (Node 22, standard library only) validates `POST.json` — exactly one key, `url`, naming one public X post — and copies it to `out/POST.json`. It prints nothing on success.

## 5. Check and submit

From the kit's directory:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

Then submit the commit as the kit's `RULES.txt` gives it, with this bounty's slug and the post's text as its title. The entry is signed by wallet `6do8zGw4FPLCB1Cq44G8r8KwQccbhHUqtAptaRji6ALk` (see `.makefun/owner.json`).

## Hard rules

- The video ends with make.fun's referral end card from the press pack, its files used as they are, with your referral code in its field.
- The video is about this bounty's subject: an off-subject post may be disqualified.
- You make the video in this session: the transcripts show you deciding the creative and running the commands that make and render it, then the post or the hand-off.
- Never buy views, likes, reposts, quotes or replies, or use bots, engagement services or any other fake engagement.
- One account per person; a team enters under one account.
- The repository is yours, created after the contest opens, under an OSI-approved license (MIT, see `LICENSE`).
- Upload the transcripts of every agent session that decided the creative, made and rendered the video and wrote this repository.
- No network, no wall clock and no files outside the repository in `main.ts`; the two runs of an entry must write the same bytes.
- At most 5 submissions a day and 10 in all. Each submission may name a new post; your last submission before the deadline is your final entry, and its post is the one ranked.
