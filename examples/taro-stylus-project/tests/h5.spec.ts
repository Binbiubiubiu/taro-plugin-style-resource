import { expect } from "chai";
import { exec, readDistFile } from "./util";

describe("h5 spec", function () {
  this.timeout(50000);
  before(async () => {
    await exec(`npm run build:h5`);
  });

  it("hould the color of a text is right", async () => {
    const styles = await readDistFile("/css/5991.css");
    expect(styles).to.equal(".text__primary{color:#f0f}");
  });
});
