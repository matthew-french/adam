const proxyquire = require("proxyquire");
const { stub } = require("sinon");
const { expect, assert, AssertionError } = require("chai");

const { upload } = require("./upload");
describe("upload", async () => {
    const promise = await upload({
        id: 1,
        path: "image/test1.png",
    });

    console.log(promise);

    it("Should do something", () => {
        expect(promises).to.be.an("array");
    });

    const promise2 = await upload({
        id: 2,
        path: "image/test2.png",
    });

    it("Something else", () => {
        expect(promises2).to.be.an("array");
    });
});
