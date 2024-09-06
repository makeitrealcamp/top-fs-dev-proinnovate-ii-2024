function appendToList(listId, items, formatter) {
  const listElement = document.getElementById(listId);
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = formatter(item);
    listElement.appendChild(li);
  });
}

// function asynchronousFunction(callback) {
//   setTimeout(() => {
//     callback('Hello, World!');
//   }, 5000);
// }

const button = document.getElementById('button');

const usersResponse = {
  status: 200,
  data: [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Doe',
    },
  ],
};

const postResponse = {
  status: 400,
  data: [
    {
      id: 1,
      userId: 1,
      title: 'Post 1 user 1',
    },
    {
      id: 2,
      userId: 1,
      title: 'Post 2 user 1',
    },
    {
      id: 3,
      userId: 1,
      title: 'Post 3 user 1',
    },
    {
      id: 4,
      userId: 1,
      title: 'Post 4 user 1',
    },
    {
      id: 5,
      userId: 2,
      title: 'Post 1 user 2',
    },
    {
      id: 6,
      userId: 2,
      title: 'Post 2 user 2',
    },
  ],
};

const commentsResponse = {
  status: 200,
  data: [
    {
      id: 1,
      postId: 1,
      name: 'Comment 1 post 1',
    },
    {
      id: 2,
      postId: 1,
      name: 'Comment 2 post 1',
    },
    {
      id: 3,
      postId: 2,
      name: 'Comment 1 post 2',
    },
    {
      id: 4,
      postId: 2,
      name: 'Comment 2 post 2',
    },
    {
      id: 5,
      postId: 3,
      name: 'Comment 1 post 3',
    },
    {
      id: 6,
      postId: 3,
      name: 'Comment 2 post 3',
    },
    {
      id: 7,
      postId: 4,
      name: 'Comment 1 post 4',
    },
    {
      id: 8,
      postId: 4,
      name: 'Comment 2 post 4',
    },
    {
      id: 9,
      postId: 5,
      name: 'Comment 1 post 5',
    },
    {
      id: 10,
      postId: 5,
      name: 'Comment 2 post 5',
    },
    {
      id: 11,
      postId: 6,
      name: 'Comment 1 post 6',
    },
    {
      id: 12,
      postId: 6,
      name: 'Comment 2 post 6',
    },
  ],
};

function makeRequest(url, callback) {
  setTimeout(() => {
    let response;
    if (url === 'users') {
      response = usersResponse;
    }
    if (url === 'posts') {
      response = postResponse;
    }
    if (url === 'comments') {
      response = commentsResponse;
    }

    if (response.status === 200) {
      callback(null, response.data);
    } else {
      callback(new Error('Request failed'));
    }
  }, 3000);
}

button.addEventListener('click', () => {
  makeRequest('users', (error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
      appendToList('users-list', data, (item) => item.name);
      makeRequest('posts', (error, data) => {
        if (error) {
          console.error(error);
        } else {
          console.log(data);
          appendToList('posts-list', data, (item) => item.title);
          makeRequest('comments', (error, data) => {
            if (error) {
              console.error(error);
              throw new Error('Request failed');
            } else {
              console.log(data);
              appendToList('comments-list', data, (item) => item.name);
            }
          });
        }
      });
    }
  });
});

// Promises
function makeRequestPromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let response;
      if (url === 'users') {
        response = usersResponse;
      }
      if (url === 'posts') {
        response = postResponse;
      }
      if (url === 'comments') {
        response = commentsResponse;
      }

      if (response.status === 200) {
        resolve(response.data);
      } else {
        reject(new Error('Request failed'));
      }
    }, 3000);
  });
}

const button2 = document.getElementById('button2');

button2.addEventListener('click', () => {
  // 1. pending
  // 2. fulfilled
  // 3. rejected
  //   promise
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  const data = makeRequestPromise('users');
  data
    .then((users) => {
      console.log(users);
      appendToList('users-list', users, (item) => item.name);
      return makeRequestPromise('posts');
    })
    .then((data) => {
      console.log(data);
      appendToList('posts-list', data, (item) => item.title);
      return makeRequestPromise('comments');
    })
    .then((data) => {
      console.log(data);
      appendToList('comments-list', data, (item) => item.name);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log('Done');
    });
});

const button3 = document.getElementById('button3');

button3.addEventListener('click', async () => {
  const data = Promise.all([
    makeRequestPromise('users'),
    makeRequestPromise('posts'),
    makeRequestPromise('comments'),
  ]);

  data.then((values) => {
    console.log(values);
    appendToList('users-list', values[0], (item) => item.name);
    appendToList('posts-list', values[1], (item) => item.title);
    appendToList('comments-list', values[2], (item) => item.name);
  });
});

const button4 = document.getElementById('button4');

button4.addEventListener('click', async () => {
  const data = Promise.allSettled([
    makeRequestPromise('users'),
    makeRequestPromise('posts'),
    makeRequestPromise('comments'),
  ]);

  data.then((values) => {
    console.log(values);
    values.forEach((value) => {
      if (value.status === 'fulfilled') {
        appendToList('users-list', value.value, (item) => item.name);
      } else {
        console.error(value.reason);
      }
    });
  });
});

const button5 = document.getElementById('button5');

button5.addEventListener('click', async () => {
  const data = Promise.race([
    makeRequestPromise('users'),
    makeRequestPromise('posts'),
    makeRequestPromise('comments'),
  ]);

  data.then((value) => {
    console.log(value);
    appendToList('users-list', value, (item) => item.name);
  });
});

const button6 = document.getElementById('button6');

button6.addEventListener('click', async () => {
  const data = Promise.any([
    makeRequestPromise('posts'),
    makeRequestPromise('users'),
    makeRequestPromise('comments'),
  ]);

  data.then((value) => {
    console.log(value);
    appendToList('users-list', value, (item) => item.name);
  });
});

// ASYNC/AWAIT

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Hello, World from promise!');
//     reject(new Error('Something went wrong'));
//   }, 2000);
// });

// const asyncFunction = async () => {
//   try {
//     const data = await promise;
//     console.log(data);
//     console.log('inside async function');
//     return data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

const button7 = document.getElementById('button7');

button7.addEventListener('click', async () => {
  console.log('button clicked');
  try {
    // const users = await makeRequestPromise('users');
    // const posts = await makeRequestPromise('posts');
    // const comments = await makeRequestPromise('comments');

    const [
      { value: users, reason: userError },
      { value: posts, reason: postsError },
      { value: comments, reason: commentsError },
    ] = await Promise.allSettled([
      makeRequestPromise('users'),
      makeRequestPromise('posts'),
      makeRequestPromise('comments'),
    ]);

    users && appendToList('users-list', users, (item) => item.name);
    posts && appendToList('posts-list', posts, (item) => item.title);
    comments && appendToList('comments-list', comments, (item) => item.name);

    if (userError || postsError || commentsError) {
      throw new Error('Request failed');
    }
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Done');
  }
});
