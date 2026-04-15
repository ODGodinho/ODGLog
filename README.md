> ⚠️ **Archived Project**
>
> This repository has been **archived** and is no longer actively maintained.  
> The project has been migrated to a **monorepo**.
>
> 👉 **New repository:** https://github.com/ODGodinho/ODGMono
>
> Please update your references and use the monorepo for the latest code and updates.

<h1 align="center">
    <a href="https://github.com/ODGodinho">
        <img
            src="https://raw.githubusercontent.com/ODGodinho/Stanley-TheTemplate/main/public/images/Stanley.jpg"
            alt="Stanley Imagem" width="500"
        />
    </a>
    <br />
    ODG Log Interface By Dragons Gamers
    <br />
</h1>

<h4 align="center">Log Package interface 🔊</h4>
<h5 align="center">Using Stanley</h5>

<p align="center">

[![codecov](https://codecov.io/gh/ODGodinho/ODGLog/branch/main/graph/badge.svg?token=JCLIEK2OFN)](https://codecov.io/gh/ODGodinho/ODGLog)
[![Stargazers](https://img.shields.io/github/stars/ODGodinho/ODGLog?color=F430A4)](https://github.com/ODGodinho/ODGLog/stargazers)
[![Made by ODGodinho](https://img.shields.io/badge/made%20by-ODGodinho-%2304A361)](https://www.linkedin.com/in/victor-alves-odgodinho/)
[![Forks](https://img.shields.io/github/forks/ODGodinho/ODGLog?color=CD4D34)](https://github.com/ODGodinho/ODGLog/network/members)
![Repository size](https://img.shields.io/github/repo-size/ODGodinho/ODGLog)
[![GitHub last commit](https://img.shields.io/github/last-commit/ODGodinho/ODGLog)](https://github.com/ODGodinho/ODGLog/commits/master)
[![License](https://img.shields.io/badge/license-MIT-brightgreen)](https://opensource.org/licenses/MIT)
[![StyleCI](https://github.styleci.io/repos/567544983/shield?branch=main)](https://github.styleci.io/repos/567544983?branch=main)

</p>

# Table of Contents

- [🎇 Benefits](#-benefits)
- [📗 Libraries](#-libraries)
- [📁 Dependencies](#-dependencies)
- [⏩ Get Started](#-get-started)
  - [🔘 Use Log Interface](#-use-log-interface)
- [📰 Usage](#-usage)
  - [🙈 Exception](#-exception)
  - [🔐 Implementation](#-implementation)
- [🍰 Free Sample](#-free-sample)
  - [🔉 Class Aware Log](#-class-aware-log)
  - [👀 Create Logger Class](#-create-logger-class)
- [💻 Prepare to develop](#-prepare-to-develop)
  - [📍 Start Project](#-start-project)
  - [📨 Build and Run](#-build-and-run)
  - [🧪 Teste Code](#-teste-code)

---

## 🎇 Benefits

- 🚀 Logs Pattern interface
- 🚨 Similar PHP psr-3

## 📗 Libraries

- [Node.js 16](https://nodejs.org/?n=dragonsgamers)
- [Typescript](https://www.typescriptlang.org/?n=dragonsgamers)
- [Eslint](https://eslint.org/?n=dragonsgamers)
- [ODG-Linter-JS](https://github.com/ODGodinho/ODG-Linter-Js?n=dragonsgamers)
- [EditorConfig](https://editorconfig.org/?n=dragonsgamers)
- [ReviewDog](https://github.com/reviewdog/action-eslint)

## 📁 Dependencies

- [Node.js](https://nodejs.org) 16 or later
- [Yarn](https://yarnpkg.com/) Optional/Recommended
- [ODG TsConfig](https://github.com/ODGodinho/tsconfig) Last Version
- [ODG Exception](https://github.com/ODGodinho/ODGException)

## ⏩ Get Started

---

### 🔘 Use Log Interface

Install in your project using this command

```powershell
yarn add @odg/log
```

### 📰 Usage

#### 📰 Exception

InvalidArgumentException dispatch if send invalid arguments

#### 🌎 Implementation

- LoggerAwareInterface Implements this if your class dependencies Logger
- LogLevel it is an enum with the types of logs
- LogLevelType is a list of log types
- LoggerInterface for create a logger class
- AbstractLogger Abstract class to logger implements only log function
- NullLogger Generic logger without action

### 🍰 Free Sample

#### 🔉 Class Aware Log

If you class dependencies LoggerInstance use interface `LoggerAwareInterface`

> if you prefer you can depend on the log class in your constructor

```typescript
import { LoggerAwareInterface, LoggerInterface } from "@odg/log";

export class LoggerAwareExample implements LoggerAwareInterface {

    private logger?: LoggerInterface;

    public setLogger(logger: LoggerInterface): void {
        this.logger = logger;
    }

    public runExampleClass(): void {
        try {
            // Anything code
        } catch (error) {
            this.logger?.debug(error);
        }
    }

}
```

#### 👀 Create Logger Class

```typescript
/**
 * This Example Logger using console.log
 *
 * @author Dragons Gamers <https://github.com/ODGodinho>
 */
export class ConsoleLogger extends AbstractLogger {

    /**
     * Logs with an arbitrary level.
     *
     * @param {LogLevel} level Log level
     * @param {unknown} message Message Log
     * @param {TContext} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    public async log(level: LogLevel, message: unknown, context?: TContext): Promise<void> {
        const log = await this.parser(level, message, context); // Use this for plugins load

        return console.log(`Level: ${log.level} >> ${String(log.message)}`, log.context);
    }

}
```

## 💻 Prepare To Develop

Copy `.env.example` to `.env` and add the values according to your needs.

### 📍 Start Project

First install dependencies with the following command

```bash
yarn install
# or
npm install
```

## 📨 Build and Run

To build the project, you can use the following command

> if you change files, you need to run `yarn build` and `yarn start` again

```bash
yarn build && yarn start
# or
yarn dev
```

## 🧪 Teste Code

To Test execute this command

```bash
yarn test
# or
yarn test:watch
```
