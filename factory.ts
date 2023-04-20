interface Product {
  getDescription(): string;
}
class IOS implements Product {
  getDescription(): string {
    return "Hi IOS";
  }
}

class Android implements Product {
  getDescription(): string {
    return "Hi Android";
  }
}

class SimpleProductFactory {
  public static createProduct(type: string): IOS | Android {
    if (type === "ios") {
      return new IOS();
    } else if (type === "android") {
      return new Android();
    }
  }
}

const ios = SimpleProductFactory.createProduct("ios");
const android = SimpleProductFactory.createProduct("android");

console.log(ios.getDescription());
console.log(android.getDescription()); // Hi Android
