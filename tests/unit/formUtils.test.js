import {expect, test} from "vitest";
import * as util from "../../src/formUtils.js";

test('should return false for empty name', () => {
    expect(util.validFullName("")).toBe(false);
});

test('should return true for a valid name', () => {
    expect(util.validFullName("foobar")).toBe(true);
});

test('should return false for a short name', () => {
    expect(util.validFullName("foo")).toBe(false);
});

test('valid email should be accepted', () => {
    expect(util.validEmail("foo@bar.com")).toBe(true);
});

test('invalid email should be denied', () => {
    expect(util.validEmail("foobar.com")).toBe(false);
});

test('valid phone should be accepted', () => {
    expect(util.validPhone("5554446655")).toBe(true);
});

test('phone with dashes should be accepted', () => {
    expect(util.validPhone("555-444-6655")).toBe(true);
});

test('phone with parens should be accepted', () => {
    expect(util.validPhone("(555) 444-6655")).toBe(true);
});

test('phone with spaces should be accepted', () => {
    expect(util.validPhone("555 444 6655")).toBe(true);
});

test('invalid phone should be denied', () => {
    expect(util.validPhone("a55im0v777")).toBe(false);
});