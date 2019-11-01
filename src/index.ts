document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

console.log("1111");

function all(arrPromise: Array<Promise<any>>): Promise<Array<any>> {
  let resolve: Promise<any> = Promise.resolve(-1);
  let li: Array<any> = [];
  let breakDowned: Array<any> = [];

  let custom = arrPromise.reduce((acc: Promise<any>, current: Promise<any>) => {
    console.log(current, acc);
    return acc
      .then(res => {
        console.log(res, 21111);
        li.push(res);
        return current;
      })
      .catch(err => {
        breakDowned.push(err);
      });
  }, resolve);
  return custom
    .then(res => {
      li.push(res);
      if (breakDowned.length) {
        return Promise.reject([]);
      } else {
        return Promise.resolve(li);
      }
    })
    .catch(err => {
      return Promise.reject([]);
    });
}

console.log(
  all(
    [1, 2, 3, 4].map(item => {
      return new Promise(res => {
        setTimeout(() => {
          res(item);
        }, 1000);
        //res(item);
      });
    })
  ).then(ans => {
    console.log(ans, 49);
  }),
  "ANS"
);
