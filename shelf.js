class Shelf {
  volume = 0;
  area = 0;
  price = 0;
  constructor(
      height, width, depth, numberOfShelves, price,
  ) {
    this.volume = height * width * depth / 1000000;
    this.area = width * depth * numberOfShelves / 10000;
    this.price = price;

    this.printMetrics();
  }

  get pricePerSquareMeter() {
    return (this.price / this.area).toFixed(2);
  }

  get pricePerCubicMeter() {
    return (this.price / this.volume).toFixed(2);
  }

  printMetrics() {
    console.log(`Price per square meter is ${this.pricePerSquareMeter}`);
    console.log(`Price per cubic meter is ${this.pricePerCubicMeter}`);
  }
}
