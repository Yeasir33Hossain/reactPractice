import React, { useState, useEffect } from 'react';

function JsonDataPage() {
  const [page, setPage] = useState(1);
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`)
      .then(response => response.json())
      .then(data => {
        console.log('Data fetched successfully:', data);
        setJsonData(data.products); // Accessing the nested "products" array
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(Math.max(page - 1, 1));
  };

  return (
    <div className="App">
      <h2>JSON Data Page</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {Array.isArray(jsonData) && jsonData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Discount Percentage</th>
                  <th>Rating</th>
                  <th>Stock</th>
                  <th>Brand</th>
                  <th>Category</th>
                  <th>Thumbnail</th>
                </tr>
              </thead>
              <tbody>
                {jsonData.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>{item.discountPercentage}</td>
                    <td>{item.rating}</td>
                    <td>{item.stock}</td>
                    <td>{item.brand}</td>
                    <td>{item.category}</td>
                    <td><img src={item.thumbnail} alt="Thumbnail" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data available</p>
          )}
          <div>
            <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default JsonDataPage;
