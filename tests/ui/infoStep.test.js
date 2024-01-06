import {afterAll, beforeAll, describe, test} from "vitest";
import {build, preview} from "vite";
import InfoPage from "../pages/InfoPage.js";
import {chromium, expect} from "../runner.js";

const PORT = 3000;
const FULL_NAME = "Benji Simon";
const EMAIL_ADDRESS = "benji@example.com";
const PHONE_NUMBER = "5554443232";

describe("infoStep", async () => {
    let server;
    let browser;
    let page;

    beforeAll(async () => {
        await build();
        server = await preview({preview: {port: PORT}});
        browser = await chromium.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
        await new Promise((resolve, reject) => {
            server.httpServer.close(error => error ? reject(error) : resolve());
        });
    });

    test("next step should be enabled after filling info", async () => {
        const infoPage = new InfoPage(page);
        await infoPage.open();
        await expect(await infoPage.isNextStepEnabled()).toBeFalsy();
        await infoPage.fillFullName(FULL_NAME);
        await infoPage.fillEmailAddress(EMAIL_ADDRESS);
        await infoPage.fillPhoneNumber(PHONE_NUMBER);
        await expect(await infoPage.isNextStepEnabled()).toBeTruthy();
    }, 60_000);

    test("error should be functional on invalid first name", async () => {
        const infoPage = new InfoPage(page);
        await infoPage.open();
        await expect(await infoPage.hasFirstNameError()).toBe(false);
        await infoPage.fillFullName("pork", true);
        await expect(await infoPage.hasFirstNameError()).toBe(true);
        await infoPage.fillFullName("porky thepig", true);
        await expect(await infoPage.hasFirstNameError()).toBeFalsy();
    }, 60_000);

    test("error should be functional on invalid email address", async () => {
        const infoPage = new InfoPage(page);
        await infoPage.open();
        await expect(await infoPage.hasEmailAddressError()).toBe(false);
        await infoPage.fillEmailAddress("bob", true);
        await expect(await infoPage.hasEmailAddressError()).toBe(true);
        await infoPage.fillEmailAddress("bob.the.builder@example.com", true);
        await expect(await infoPage.hasEmailAddressError()).toBeFalsy();
    }, 60_000);

    test("error should be functional on invalid phone number", async () => {
        const infoPage = new InfoPage(page);
        await infoPage.open();
        await expect(await infoPage.hasPhoneNumberError()).toBe(false);
        await infoPage.fillPhoneNumber("555", true);
        await expect(await infoPage.hasPhoneNumberError()).toBe(true);
        await infoPage.fillPhoneNumber("5551234567", true);
        await expect(await infoPage.hasPhoneNumberError()).toBeFalsy();
    }, 60_000);
});
