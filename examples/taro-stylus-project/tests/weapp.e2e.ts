import { expect } from "chai";
import * as automator from "miniprogram-automator";
import type MiniProgram from "miniprogram-automator/out/MiniProgram";
import * as path from "path";

// 项目文件地址
const projectPath = path.resolve(__dirname,'..', "dist");

describe("weapp spec", function(){
  this.timeout(50000);
  let miniProgram: MiniProgram;
  before(async ()=>{
    miniProgram = await automator.launch({
      // cliPath: 'path/to/cli', // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
      projectPath,
    });
  });

  after(async ()=>{
    await miniProgram.close();
  });

  it("hould the color of a text is right", async ()=>{
    const page = await miniProgram.reLaunch("/pages/index/index");
    await page?.waitFor(500);
    const element = await page?.$(".text__primary");
    const color = await element?.style("color");
    expect(color).to.equal("rgb(255, 0, 255)");
  });
});
