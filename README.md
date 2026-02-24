
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1 no:  getElementById = HTML থেকে আইডি‌গুলোকে JS DOM এ নিয়ে আসে এর মাধ্যমে শুধু আইডি‌গুলোই সিলেক্ট করা যায়

2 no:  getElementsByClassName = HTML থেকে ক্লাসগুলোকে JavaScript DOM এ নিয়ে আসে; এর মাধ্যমে শুধু ক্লাসগুলোই সিলেক্ট করা যায়।

3 no:  querySelector = querySelector ব্যবহার করলে HTML থেকে আইডি বা ক্লাস যেকোনো একটি JavaScript-এ DOM হিসেবে নিয়ে আসা যায়

4 no:  querySelectorAll = querySelectorAll ব্যবহার করলে HTML এ থাকা  একাধিক আইডি বা ক্লাসও সিলেক্ট করা যায়



 ### 2. How do you create and insert a new element into the DOM?

const newDiv = document.createElement('div')
newDiv.innerText = 'new div';
document.section.appendChild('newDiv')

এভাবে একটি DOM-এর ভিতরে নতুন div এলিমেন্ট তৈরি করা যায় এবং সেটাকে একটি section-এর ভিতরে যোগ করা যায়।
