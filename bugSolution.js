```javascript
// Correct - conditional rendering handles null values
function MyComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Asynchronous operation to fetch data
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(result => {
        setData(result);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {data && <Text>{data.name}</Text>}
      {/* Conditionally render only when data is available */}
    </View>
  );
}
```