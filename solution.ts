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

// Converter functions
function convertShopingItemType(internal: ShopingItemType): ExtShopingItemType {
  return {
    Title: internal.title,
    Price: internal.price,
    Currency: internal.currency,
    Date: {
      seconds: new Date(internal.date).getTime() / 1000,
      nanos: 0,
    },
  };
}

