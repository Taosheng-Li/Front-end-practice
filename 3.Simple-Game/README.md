# 代码总结

## 概述

这段 JavaScript 代码实现了一个简单的 **石头、剪刀、布（Rock, Paper, Scissors）** 游戏。玩家通过点击按钮选择“Rock”、“Paper”或“Scissors”，与计算机进行对战，先达到 3 分的一方获胜。代码包含游戏逻辑、界面更新和事件处理功能。

## 主要功能

### 1. 游戏核心逻辑

- **`getRandomComputerResult()`**
  - 作用：生成计算机的随机选择。
  - 实现：从数组 `["Rock", "Paper", "Scissors"]` 中随机挑选一个选项。
  - 返回值：`"Rock"`、`"Paper"` 或 `"Scissors"`。
- **`hasPlayerWonTheRound(player, computer)`**
  - 作用：判断玩家是否赢得当前回合。
  - 规则：
    - Rock 胜 Scissors
    - Scissors 胜 Paper
    - Paper 胜 Rock
  - 返回值：`true`（玩家赢）或 `false`（玩家未赢）。
- **`getRoundResults(userOption)`**
  - 作用：计算并返回每回合的结果。
  - 逻辑：
    - 玩家赢：`playerScore` 加 1，返回胜利信息。
    - 平局：返回平局信息。
    - 计算机赢：`computerScore` 加 1，返回失败信息。
  - 返回值：描述结果的字符串。

### 2. 界面更新

- **`showResults(userOption)`**
  - 作用：更新游戏界面。
  - 功能：
    - 调用 `getRoundResults` 显示回合结果。
    - 更新玩家和计算机的分数到页面。
    - 当一方达到 3 分时，显示获胜信息，隐藏选项区域，显示重置按钮。
- **`resetGame()`**
  - 作用：重置游戏状态。
  - 功能：
    - 将 `playerScore` 和 `computerScore` 重置为 0。
    - 更新分数显示。
    - 清空结果和获胜信息。
    - 隐藏重置按钮，显示选项区域。

### 3. 事件绑定

- 按钮事件监听：
  - `rockBtn`: 点击时调用 `showResults("Rock")`。
  - `paperBtn`: 点击时调用 `showResults("Paper")`。
  - `scissorsBtn`: 点击时调用 `showResults("Scissors")`。
  - `resetGameBtn`: 点击时调用 `resetGame()`。

## 关键变量与 DOM 元素

- 全局变量：
  - `playerScore`: 玩家分数，初始为 0。
  - `computerScore`: 计算机分数，初始为 0。
- DOM 元素：
  - `playerScoreSpanElement`: 显示玩家分数的 `<span>`。
  - `computerScoreSpanElement`: 显示计算机分数的 `<span>`。
  - `roundResultsMsg`: 显示每回合结果的 `<p>`。
  - `winnerMsgElement`: 显示最终获胜信息的 `<p>`。
  - `optionsContainer`: 包含选项按钮的容器。
  - `resetGameBtn`: 重置游戏的按钮。
  - `rockBtn`, `paperBtn`, `scissorsBtn`: 玩家的选择按钮。

## 运行流程

1.  页面加载时，初始化分数为 0，重置按钮默认隐藏。
2.  玩家点击“Rock”、“Paper”或“Scissors”按钮，触发 `showResults`。
3.  `showResults` 调用 `getRoundResults`，更新分数和结果显示。
4.  当一方达到 3 分，显示获胜信息，隐藏选项按钮，显示重置按钮。
5.  点击重置按钮，调用 `resetGame`，恢复初始状态。
