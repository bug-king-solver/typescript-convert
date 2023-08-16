type ShopingItemType = {
  title: string;
  price: number;
  currency: string;
  date: string;
};

interface INodeElement {
  firsName: string;
  lastName: string;
  age: number;
  birthDate: string;
  shoppingItemsList?: ShopingItemType[];
}

type Chat = {
  title: string;
  nodesList: INodeElement[];
};

type Timestamp = {
  seconds: number;
  nanos: number;
};

type ExtShopingItemType = {
  Title: string;
  Price: number;
  Currency: string;
  Date: Timestamp;
};

interface IExtNodeElement {
  FirsName: string;
  LastName: string;
  Age: number;
  BirthDate: Timestamp;
  ShoppingItems: ExtShopingItemType[];
}

type ExtChat = {
  Title: string;
  ChatItems: IExtNodeElement[];
};

