
// problem 1

const formatValue = (a: number | string | boolean) => {

    if (typeof a === 'string') {
        return a.toUpperCase();
    }
    else if (typeof a === 'number') {
        return a * 10;
    }
    else {
        return !a;
    }

}

// problem 2


const getLength = (value: string | any[]):number =>{

    if(typeof value === 'string'){
        return value.length;
    }
    else{
        return value.length;
    }
}

// problem 3


class Person {

    name: string;

    age: number;

    constructor(name: string, age: number) {
        this.name = name,

            this.age = age
    }


    getDetails() {
       return(`Name: ${this.name}, Age: ${this.age}`);
    }

}


// problem 4



const filterByRating = (items:{title: string , rating: number}[]): {title: string, rating: number}[] => {

    return(
        items.filter(item=> item.rating >= 4)
    )
}


// problem 5

const filterActiveUsers = (users: { id: number, name: string, email: string, isActive: boolean }[]): { id: number, name: string, email: string, isActive: boolean }[] => {

    return(
        users.filter(user=> user.isActive === true)
    )

}


// problem 6

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}


const printBookDetails = (book: Book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`
  );
};


// problem 7


const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {

  const result: (string | number)[] = [];

 
  const addUnique = (value: string | number) => {
  
    let exists = false;

    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[result.length] = value;
    }
  };


  for (let i = 0; i < arr1.length; i++) {
    addUnique(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    addUnique(arr2[i]);
  }

  return result;
};

// problem 8

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0;

  return products
    .map((product) => {
      const total = product.price * product.quantity;

      
      if (product.discount !== undefined) {
        const discountAmount = total * (product.discount / 100);
        return total - discountAmount;
      }

    
      return total;
    })
    .reduce((sum, current) => sum + current, 0);
};

