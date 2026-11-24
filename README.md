# makefun-post-x-the-agent-builds-a-game-from-20261122-1709-v6

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/RieryBuild/makefun-post-x-the-agent-builds-a-game-from-20261122-1709-v6/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/RieryBuild/makefun-post-x-the-agent-builds-a-game-from-20261122-1709-v6/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

NEON KOI — a tiny catch-style browser game built from one prompt by an AI agent: a glowing neon koi with flowing luminous fins swims through a moonlit pond, catching glowing pearls (+1) and dodging dark fishing hooks (3 lives), the pond speeding up as you score. All game art is real AI-generated imagery (koi, pond, pearl, hook), embedded in the single-file game at `game/index.html` — open it in any browser and swim. The entry video (28 s, 1080×1920) shows the game mid-play under the one prompt, the real build log, and the finished game running, ending with make.fun's referral end card. Built in a fresh post-open session for make.fun's "The agent builds a game from one prompt" bounty ($20 pool, top 10 paid).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) validates `POST.json` — it must name exactly one public X post — and copies it to the output directory, where the gate reads it. `POST.json` holds the posted video's X address once the video is posted.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wa8s3t3t&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
