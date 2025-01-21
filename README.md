# React Native: Uninitialized State/Prop Access in Render Method

This repository demonstrates a common error in React Native applications: attempting to access state or prop values before they've been initialized. This often happens within the render method of a component before asynchronous operations (like fetching data) have completed.

## The Problem

The provided `bug.js` file illustrates the issue. The component tries to access the `data.name` property before `data` has been properly populated from an asynchronous operation. This results in a runtime error because `data` is initially `null`.

## The Solution

The `bugSolution.js` file demonstrates how to solve this problem.  Conditional rendering is used to prevent accessing `data` until it's available.  The solution checks if `data` is null before attempting to render its content.