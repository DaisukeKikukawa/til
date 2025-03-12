#!/usr/bin/env node

import minimist from "minimist";

const argv = minimist(process.argv.slice(2));
const now = new Date();
const year = argv.y ? argv.y : now.getFullYear();
const month = argv.m ? argv.m : now.getMonth() + 1;
const startDayOfWeek = new Date(year, month - 1, 1).getDay();
const lastDateOfMonth = new Date(year, month, 0).getDate();
let isFirstLineOfMonth = true;
let dayOfWeekCounter = startDayOfWeek;
let indentByStartDay = "";

switch (startDayOfWeek) {
  case 0:
    indentByStartDay = "";
    break;
  case 1:
    indentByStartDay = "    ";
    break;
  case 2:
    indentByStartDay = "        ";
    break;
  case 3:
    indentByStartDay = "            ";
    break;
  case 4:
    indentByStartDay = "                ";
    break;
  case 5:
    indentByStartDay = "                    ";
    break;
  case 6:
    indentByStartDay = "                        ";
    break;
}

process.stdout.write("       ");
console.log(`${year}年${month}月`);
console.log("日  月  火  水  木  金  土");

for (let i = 1; i <= lastDateOfMonth; i++) {
  if (isFirstLineOfMonth) {
    process.stdout.write(indentByStartDay);
    isFirstLineOfMonth = false;
  }
  if (i < 10) {
    process.stdout.write(" " + String(i));
  } else {
    process.stdout.write(String(i));
  }
  process.stdout.write("  ");
  if (dayOfWeekCounter === 6) {
    console.log("");
    dayOfWeekCounter = -1;
  }
  dayOfWeekCounter++;
}
console.log("");
