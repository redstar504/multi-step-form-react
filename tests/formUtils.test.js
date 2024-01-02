import {expect, test} from "vitest";
import * as util from "../src/formUtils.js";

test('should return false for empty name', () => {
    expect(util.isFullNameValid("")).toBe(false);
});

test('should return true for a valid name', () => {
    expect(util.isFullNameValid("foo")).toBe(true);
});

test('valid email should be accepted', () => {
    expect(util.isEmailValid("foo@bar.com")).toBe(true);
});

test('invalid email should be denied', () => {
    expect(util.isEmailValid("foobar.com")).toBe(false);
});

test('valid phone should be accepted', () => {
    expect(util.isPhoneValid("5554446655")).toBe(true);
});

test('phone with dashes should be accepted', () => {
    expect(util.isPhoneValid("555-444-6655")).toBe(true);
});

test('phone with parens should be accepted', () => {
    expect(util.isPhoneValid("(555) 444-6655")).toBe(true);
});

test('phone with spaces should be accepted', () => {
    expect(util.isPhoneValid("555 444 6655")).toBe(true);
});

test('invalid phone should be denied', () => {
    expect(util.isPhoneValid("a55im0v777")).toBe(false);
});