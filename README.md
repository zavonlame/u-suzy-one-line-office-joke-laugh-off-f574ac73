# One-Line Office Joke Laugh-Off

[![make.fun · u-suzy-one-line-office-joke-laugh-off-f574ac73](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![rank](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/zavonlame/u-suzy-one-line-office-joke-laugh-off-f574ac73/rank.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![reward](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/zavonlame/u-suzy-one-line-office-joke-laugh-off-f574ac73/reward.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-office-joke-laugh-off-f574ac73)

Entry for the [One-Line Office Joke Laugh-Off](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73) bounty on make.fun — one original one-line joke about office life.

## The joke

> My manager tracks my mouse movements, so I tied the mouse to the office dog. Productivity is up 400%.

## How it works

`main.ts` (Node 22, standard library only) writes the joke as a single line to `/output/entry.txt`, after checking the gate: 1–200 characters, one line, not blank. No network, no browser, no dependencies — the grader runs it as-is.

## Run it

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir dist
MAKEFUN_OUTPUT_DIR=./output node dist/main.js
cat output/entry.txt
```
