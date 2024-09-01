import React from "react";
import useFetch from "./CustomHooks/useFetch";

export function CustomHookFetch() {
  const { data, loading, error } = useFetch("http://localhost:4000/");

  if (error) {
    console.log(error);
  }
  return (
    <>
      {data && (
        <div>
          {loading && <div>Loading...</div>}
          {data.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
      )}
    </>
  );
}
