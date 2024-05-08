// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

import * as functions from '../code-to-unit-test/unit-test-me';

// test phone number
test('Valid phone numbers pass this test', () => {
  expect(isPhoneNumber("858-234-9840")).toBe(true);
});

test('Valid phone numbers pass this test', () => {
  expect(isPhoneNumber("909-345-6666")).toBe(true);
});

test('invalid phone numbers with 4 first digits should return false', () => {
  expect(isPhoneNumber("123456890")).toBe(false);
});

test('invalid phone numbers with 2 middle numbers should be false', ()=>{
  expect(isPhoneNumber("123-45-7890")).toBe(false);
});


// tests email function
test('valid emails pass through', () => {
  expect(isEmail("gauthamp123@gmail.com")).toBe(true);
  expect(isEmail("gprabhak@ucsd.edu")).toBe(true);
});

test('invalid emails will not pass', () => {
  expect(isEmail("gauthamp123gmail.com")).toBe(false);
  expect(isEmail("gprabhak@.edu")).toBe(false);
});

// tests password function
test('strong passwords', () => {
  expect(isStrongPassword("aBcde_1234")).toBe(true);
  expect(isStrongPassword("qQeD_90210")).toBe(true);
});


test('weak passwords', () => {
  expect(isStrongPassword("Gautham123!")).toBe(false);
  expect(isStrongPassword("dumb!")).toBe(false);
});

// tests date function
test('valid dates', () => {
  expect(isDate("02/18/2003")).toBe(true);
  expect(isDate("4/20/2024")).toBe(true);
});

test('invalid dates', () => {
  expect(isDate("02/18/03")).toBe(true);
  expect(isDate("02182003")).toBe(false);
});


// tests hex-color function
test('valid hex colors', () => {
  expect(functions.isHexColor('#000')).toBe(true);
  expect(functions.isHexColor('#ccc')).toBe(true);
});

test('invalid hex colors', () => {
  expect(functions.isHexColor('#123341414214')).toBe(false);
  expect(functions.isHexColor('##FFFFF')).toBe(false);
});