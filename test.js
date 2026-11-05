const add = require('./index');

if (add(2, 3) === 5) {
  console.log('Тест пройден!');
  process.exit(0);
} else {
  console.log('Тест провален!');
  process.exit(1);
}
