const {
  fibonacci,
  strReverse,
  binarySum,
  caesarCipher,
  isPrime
} = require('./challenge')

test('fibonacci calculates correctly', () => {
  expect(fibonacci(4)).toBe(5)
  expect(fibonacci(16)).toBe(1597)
  expect(fibonacci(28)).toBe(514229)
})

test('strReverse reverses a string', () => {
  expect(strReverse('otto')).toBe('otto')
  expect(strReverse('test')).toBe('tset')
  expect(strReverse('this is a random sentence')).toBe(
    'ecnetnes modnar a si siht'
  )
})

test('binarySum calculates sum of binary strings', () => {
  expect(binarySum('10010101', '1000101')).toBe('11011010')
  expect(binarySum('1', '1')).toBe('10')
  expect(binarySum('100001', '111111')).toBe('1100000')
})

test('caesarCipher ciphers a string', () => {
  expect(caesarCipher('abcdef', 5)).toBe('fghijk')
  expect(caesarCipher('this text has to be encrypted', 11)).toBe(
    'estd epie sld ez mp pyncjaepo'
  )
  expect(caesarCipher('this string is not quite secret', 0)).toBe(
    'this string is not quite secret'
  )
})

test('isPrime detects prime numbers', () => {
  expect(isPrime(11)).toBe(true)
  expect(isPrime(1)).toBe(false)
  expect(isPrime(97)).toBe(true)
  expect(isPrime(61)).toBe(true)
  expect(isPrime(33)).toBe(false)
})
