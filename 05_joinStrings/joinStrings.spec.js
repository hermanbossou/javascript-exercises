const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Harch', () => {
    expect(values.firstName).toEqual('Harch');
  });
  test('lastName is Herman', () => {
    expect(values.lastName).toEqual('Herman');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1992', () => {
    expect(values.birthYear).toEqual(1992);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual("Hi! My name is Harch Herman and I'm 33 years old.");
  });
});

describe('step 3', () => {
  test('fullName is Harch Herman', () => {
    expect(values.fullName).toEqual('Harch Herman');
  });
  test('age is 33', () => {
    expect(values.age).toEqual(33);
  });
});
