```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic. This will cause an infinite loop.
    setCount(count + 1);
  }, [count]); // count is included in the dependency array, causing an infinite loop

  return <div>Count: {count}</div>;
}
```