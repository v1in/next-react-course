import {useEffect, useState} from 'react';
import useSWR from 'swr';

export default function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);

  const {data, error} = useSWR(`${process.env.NEXT_PUBLIC_SALES_API_URL}`);

  useEffect(() => {
    if (data) {
      const transformedSales = [];
      // transform our 'object' from Firebase
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(transformedSales);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(`${process.env.NEXT_PUBLIC_SALES_API_URL}`).then((response) =>
  //     response.json().then((data) => {
  //       const transformedSales = [];

  //       // transform our 'object' from Firebase
  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }

  //       setSales(transformedSales);
  //       setIsLoading(false);
  //     })
  //   );
  // }, []);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SALES_API_URL}`);
  const data = await response.json();

  const transformedSales = [];
  // transform our 'object' from Firebase
  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username || null,
      volume: data[key].volume || null,
    });
  }

  return {
    props: {sales: transformedSales},
  };
}
