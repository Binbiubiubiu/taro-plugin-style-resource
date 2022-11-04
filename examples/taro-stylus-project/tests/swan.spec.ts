import { expect } from "chai";
import { exec, readDistFile } from "./util";

describe("swan spec", function () {
  this.timeout(50000);
  before(async () => {
    await exec(`npm run build:swan`);
  });

  it("hould the color of a text is right", async () => {
    const styles = await readDistFile("/pages/index/index.css");
    expect(styles).to.equal(".text__primary{color:#f0f}");
  });
});
