//fetch api - browser api for HTTP (ajax) requests
// default - GET requests, supports other methods as well
// return promises

const url = "https://www.course-api.com/react-tour-project";
console.log(fetch(url));

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const getTours = async () => {
  try {
    const resp = await fetch(url);
    if(!resp.ok){
      const msg = `There was en error "${resp.status} ${resp.statusText}"`
      throw new Error(msg)
    }
    const data = await resp.json();
    return data
  } catch (error) {
    console.log(error);
  }
};


console.log(getTours());
