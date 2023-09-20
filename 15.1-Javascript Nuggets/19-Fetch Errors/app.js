//fetch api - browser api for HTTP (ajax) requests
// default - GET requests, supports other methods as well
// return promises

const url = "https://www.course-api.com/react-tour-project";
console.log(fetch(url));



const getTours = async () => {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      const msg = `There was en error "${resp.status} ${resp.statusText}"`;
      throw new Error(msg);
    }
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

console.log(getTours());
