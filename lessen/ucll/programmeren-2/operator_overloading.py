class Complex:
  def __init__(self, a, b):
    self.a = a
    self.b = b
  
  def __add__(self, other):
    return Complex(self.a + other.a, self.b + other.b)
  
  def __mul__(self, other):
    return Complex(self.a * other.a - self.b * other.b, self.a * other.b + self.b * other.a)
  
  def __eq__(self, __value: object) -> bool:
    return self.a == __value.a and self.b == __value.b
  
  def __str__(self):
    return f"{self.a} + {self.b}i"



x = Complex(1, 2)
y = Complex(3, 4)
assert x + y == Complex(4, 6)
assert x * y == Complex(-5, 10)