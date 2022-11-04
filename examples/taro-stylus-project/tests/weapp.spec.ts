import { expect } from "chai";
import { exec, readDistFile } from "./util";

describe("weapp spec", function () {
  this.timeout(50000);
  before(async () => {
    await exec(`npm run build:weapp`);
  });

  it("hould the color of a text is right", async () => {
    const styles = await readDistFile("/pages/index/index.wxss");
    expect(styles).to.equal(".text__primary{color:#f0f}");
  });
});
