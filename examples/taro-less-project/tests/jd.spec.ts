import { expect } from "chai";
import { exec, readDistFile } from "./util";

describe("jd spec", function () {
  this.timeout(50000);
  before(async () => {
    await exec(`npm run build:jd`);
  });

  it("hould the color of a text is right", async () => {
    const styles = await readDistFile("/pages/index/index.jxss");
    expect(styles).to.equal(".text__primary{color:#f0f}");
  });
});
