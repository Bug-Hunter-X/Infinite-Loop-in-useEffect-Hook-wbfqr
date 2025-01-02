## React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug occurs when the dependency array for `useEffect` is incorrectly specified, leading to an infinite loop.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version.

**Bug:** The original code attempts to increment a state variable (`count`) within the `useEffect` hook, and because `count` is included in the dependency array, the `useEffect` hook runs indefinitely leading to an infinite loop and crashes the app.

**Solution:** The solution involves removing `count` from the dependency array, making it only run once after the component mounts, or using a flag variable to avoid an infinite loop.