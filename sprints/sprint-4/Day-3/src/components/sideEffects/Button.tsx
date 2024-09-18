// export const Button = () => {
//   setTimeout(() => {
//     console.log('side effect');
//   }, 0);

import React from 'react';

//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.error(error));

//   return (
//     <button
//       style={{
//         color: 'darkorchid',
//       }}
//     >
//       Button
//     </button>
//   );
// };

// stateless  -> render jsx
// class components

export class Button extends React.Component {
  // componentWillMount() {}
  // life cycle methods
  componentDidMount() {
    console.log('componentDidMount');
  }

  // old deprecated
  // shouldComponentUpdate() {}
  componentDidUpdate(): void {}

  componentWillUnmount(): void {
    console.log('bye bye');
  }
  render() {
    return (
      <button
        style={{
          color: 'darkorchid',
        }}
      >
        Button
      </button>
    );
  }
}
