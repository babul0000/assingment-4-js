
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1 no:  getElementById = HTML থেকে আইডি‌গুলোকে JS DOM এ নিয়ে আসে এর মাধ্যমে শুধু আইডি‌গুলোই সিলেক্ট করা যায়

2 no:  getElementsByClassName = HTML থেকে ক্লাসগুলোকে JavaScript DOM এ নিয়ে আসে এর মাধ্যমে শুধু ক্লাসগুলোই সিলেক্ট করা যায়।

3 no:  querySelector = querySelector ব্যবহার করলে HTML থেকে আইডি বা ক্লাস যেকোনো একটি JavaScript এ DOM হিসেবে নিয়ে আসা যায়

4 no:  querySelectorAll = querySelectorAll ব্যবহার করলে HTML এ থাকা  একাধিক আইডি বা ক্লাসও সিলেক্ট করা যায়



 ### 2. How do you create and insert a new element into the DOM?

const newDiv = document.createElement('div')
newDiv.innerText = 'new div';
document.section.appendChild('newDiv')

এভাবে একটি DOM এর ভিতরে নতুন div এলিমেন্ট তৈরি করা যায় এবং সেটাকে একটি section-এর ভিতরে যোগ করা যায়




### 3. What is Event Bubbling? And how does it work?

ইভেন্ট বাবলিং এটা জাভাস্ক্রিপ্ট এর এমন একটা মেগানিজম যেটা চাইল্ড এলিমেন্ট থেকে শুরু করে প্যারেন্ট এলিমেন্ট তারপর গ্র্যান্ডপ্যারেন্ট এলিমেন্ট পর্যন্ত নিয়ে যায়
যেমন যদি একটা বাটনে ক্লিক করি তাহলে সেটা প্রথমে ওই বাটনের ইভেন্ট হয় তারপর তার প্যারেন্ট এলিমেন্ট তারপর গ্র্যান্ডপ্যারেন্ট এলিমেন্ট তারপর HTML পর্যন্ত পর্যায়ক্রমে চলে যাবে




### 4. What is Event Delegation in JavaScript? Why is it useful?

javascript এ Event Delegation হল এমন একটি সিস্টেম  যেখানে অনেকগুলা perent element একটি মাত্র ইভেন্ট লিসেনের ব্যবহার করে event bubbling এর উপরে নির্ভর করে কাজ করে 

কম code লিখতে হয় যা ব্যাবহার করা সহজ