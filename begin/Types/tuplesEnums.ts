// const stuff2: (string | number)[] = ["asd", "asdds", "adsadd", 1, 34]; // not tuples

const color: [number, number, number] = [255, 0, 255];
// Array of fix length and types

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];

goodRes.push(123); // Limitations with Array.push() and Array.pop()

const responses: HTTPResponse[] = [
  [404, "Not Found"],
  [204, "No Content"],
];

const PENDING = 0;
const SHIPPED = 1;
const DELIVERED = 2;

enum OrderStatus {
  PENDING = 10,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  //   ERROR = 234,
}
