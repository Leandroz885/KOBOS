
public class Circle {
  private Point center;
  private double radius;

  public Circle(Point center, double radius) {
    this.center = center;
    this.radius = radius;
  }

  public Circle(Point point1, Point point2) {
    double centerX = (point1.getX() + point2.getX()) / 2;
    double centerY = (point1.getY() + point2.getY()) / 2;
    double radius = Math.sqrt(
        Math.pow(
            point2.getX() - point1.getX(), 2) +
            Math.pow(point2.getY() - point1.getY(), 2))
        / 2;

    this.center = new Point(centerX, centerY);
    this.radius = radius;
  }

  class Point {
    private double x;
    private double y;

    public Point(double x, double y) {
      this.x = x;
      this.y = y;
    }

    public double getY() {
      return this.x;
    }

    public double getX() {
      return this.y;
    }
  }
}
