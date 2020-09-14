import { classNames } from './classNames';

// можно передавать любое количество аргументов
it('should check args quantity', () => {
  const result = classNames('btn');
  expect(result).toBe('btn');

  const result2 = classNames('btn', 'btn-primary');
  expect(result2).toBe('btn btn-primary');
});

// eсли аргументы не переданы - возвращается пустая строка
it('should return empty string if there are no args', () => {
  const result = classNames();

  expect(result).toBe('');
});

// если аргумент не строка и не объект - он игнорируется
it("should ignore arg if it's not object or string", () => {
  const functionForChecking = () => {
    return 'ok';
  };

  const result = classNames(
    12,
    'btn',
    true,
    { primary: 'class' },
    functionForChecking
  );

  expect(result).toBe('btn primary');
});

// если аргумент это строка - она попадает в строку-результат
it('should check if string argument is string result', () => {
  const result = classNames('btn');
  expect(result).toBe('btn');
});

// если аргумент это объект - его ключ попадает в строку-результат, если его значени truthy
it('should check if argument is object and key value is truthy, key is string result', () => {
  const result = classNames({
    btn: 'key',
    'btn-primary': null,
    'btn-secondary': undefined,
    'btn-third': 0,
    'btn-fourth': NaN,
    'btn-fifth': '',
  });
  expect(result).toBe('btn');
});
