```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) {
      setCount(count + 1);
    }
    setMounted(true);
  }, [count, mounted]);

  return <div>Count: {count}</div>;
}
```