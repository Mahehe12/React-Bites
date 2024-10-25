// Assignment 3
// Task: Create a custom React-like implementation using plain JavaScript to render an anchor tag.

import { useEffect } from "react";

function App() {

  // Step 1: Create an object that represents the anchor tag.
  const reactObject = {
    type: 'a',
    props: {
      href: "https://github.com/Mahehe12",
      target: "_blank",
      children: ['Click here to connect with me on GitHub']
    }
  };

  // Step 2: Generate HTML function
  // This function takes a reactObject and converts it to an HTML string.

  function generateHTML(reactObject) {
    const type = reactObject.type;
    const link = reactObject.props.href;
    const text = reactObject.props.children.join('');
    const target = reactObject.props.target;

    // Create the HTML string for the anchor tag
    const str = `<${type} href="${link}" target="${target}">${text}</${type}>`;
    return str;
  }

  // Step 3: Custom render function
  // This function inserts the generated HTML into the specified container in the DOM.

  function customRender(reactObject, containerId) {
    const element = document.getElementById(containerId);
    if (element) {
      element.innerHTML = generateHTML(reactObject);
    }
  }

  useEffect(() => {
    customRender(reactObject, 'root');
  }, []);


  return (
    <>
      {/* Step 4: Create a div with an ID of 'root' to render the anchor tag */}
      <div id='root'></div>
    </>
  );
}

export default App;
