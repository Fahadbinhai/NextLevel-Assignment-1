TypeScript-এর keyof কীওয়ার্ড কোনো object টাইপের সবগুলো key-এর নামকে একটি union টাইপ হিসেবে প্রদান করে, যা type-safe কোড লেখায় বিশেষভাবে সহায়ক। এটি ব্যবহার করলে object-এর কোন কোন key ব্যবহার করা যাবে তা নিশ্চিন্ত হওয়া যায়, ফলে ভুল key লিখলে TypeScript কম্পাইল টাইমেই error দেখায়।

example :

type Person = { name: string; age: number; email: string; };

তাহলে keyof Person আমাদের "name" | "age" | "email" — এই union টাইপ প্রদান করবে। এরপর আমরা যদি একটি ফাংশন তৈরি করি যা Person object-এর যেকোনো মান (value) key অনুযায়ী return করবে, সেখানে keyof ব্যবহার করলে key সবসময় valid হবে।

function getValue(obj: Person, key: keyof Person) { return obj[key]; }


3/ Explain the difference between any, unknown, and never types in TypeScript.

any type : এইটায় typescript টাইপ দেখে না। তাই ভুল হলে error দেয় না 
unknown type : এইটায় any টাইপ এর মত । any-এর মতোই flexible, কিন্তু safer।
never type : এখানে কোনো মানই আসবে না 
