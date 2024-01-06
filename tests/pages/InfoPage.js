export default class InfoPage {
    constructor(page) {
        this.page = page;
        this.port = 3000;
    }

    async open() {
        await this.page.goto(`http://localhost:${this.port}`);
    }

    async fillFullName(fullName, blur = false) {
        const locator = await this.page.locator("#fullName");
        await locator.fill(fullName);
        if (blur) await locator.blur();
    }

    async fillEmailAddress(emailAddress, blur = false) {
        const locator = await this.page.locator("#emailAddress");
        await locator.fill(emailAddress);
        if (blur) await locator.blur();
    }

    async fillPhoneNumber(phoneNumber, blur = false) {
        const locator = await this.page.locator("#phoneNumber");
        await locator.fill(phoneNumber);
        if (blur) await locator.blur();
    }

    async hasFirstNameError() {
        const label = await this.page.locator("label[for='fullName']");
        return label.evaluate(node => node.className === "error");
    }

    async hasEmailAddressError() {
        const label = await this.page.locator("label[for='emailAddress']");
        return label.evaluate(node => node.className === "error");
    }

    async hasPhoneNumberError() {
        const label = await this.page.locator("label[for='phoneNumber']");
        return label.evaluate(node => node.className === "error");
    }

    async isNextStepEnabled() {
        const elem = await this.page.locator("#nextStep");
        return elem.isEnabled();
    }
}