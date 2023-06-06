// Задача 1
function parseCount(num) {
  if (isNaN(parseFloat(num))) {
    throw new Error('Невалидное значение');
  }
  return parseFloat(num);
}

function validateCount(num) {
  try {
    return parseCount(num);
  } catch (error) {
    return error;
  }
}

// Задача 2
class Triangle {
  constructor(a, b, c) {
    if (a + b < c || b + c < a || c + a < b) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const p = this.perimeter / 2;
    return +Math.sqrt(p * (p - this.a) 
      * (p - this.b) * (p - this.c)).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get perimeter() { 
        return 'Ошибка! Треугольник не существует';
      },
      get area() {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}