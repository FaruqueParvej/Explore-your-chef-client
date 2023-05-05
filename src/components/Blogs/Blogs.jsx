import React from "react";
import { Button } from "react-bootstrap";
import Pdf from "react-to-pdf";

const Blogs = () => {
  const ref = React.createRef();
  return (
    <>
      <Pdf targetRef={ref} filename="blog.pdf">
        {({ toPdf }) => (
          <div className="text-center">
          
            <span className="px-2 text-success">To make pdf of this page</span>
            <Button variant="danger" onClick={toPdf}>
              Click here
            </Button>
          </div>
        )}
      </Pdf>
      <div ref={ref}>
        <div>
          <div>
            <h1>
              Tell us the differences between uncontrolled and controlled
              components.
            </h1>
          </div>
          <div>
            <p>
              In React, controlled and uncontrolled components refer to the
              different ways to manage form data and user input. Uncontrolled
              components are traditional HTML form elements, such as input,
              select, and textarea, that maintain their own internal state. They
              are uncontrolled because their value is handled by the DOM itself,
              rather than by React. When a user enters data into an uncontrolled
              component, the DOM manages the changes directly. Controlled
              components, on the other hand, are React components that manage
              form data by keeping the value of the form elements in the
              component's state. In this way, the component is able to handle
              user input and respond to changes. When a user enters data into a
              controlled component, the component updates its state and
              re-renders with the new data. The key difference between the two
              is that with controlled components, React is in control of the
              form data and can manage the updates, while with uncontrolled
              components, the DOM is in control and React has to retrieve the
              value of the form elements using refs. Controlled components can
              be more powerful than uncontrolled components because they allow
              for more precise control over user input, as well as enabling
              validation and other complex interactions. However, uncontrolled
              components can be easier to use and require less code, making them
              a good choice for simple forms. Regenerate response
            </p>
          </div>
        </div>
        <div>
          <h1>How to validate React props using PropTypes?</h1>
        </div>
        <div>
          <p>
            In React, PropTypes is a type checking library that allows you to
            specify the data types for the props passed to a component. This
            helps catch errors and improve the reliability of your code. To use
            PropTypes, you need to import it from the 'prop-types' package and
            specify the expected data types for each prop in your component.
          </p>
        </div>
        <div>
          <div>
            <h1>Tell us the difference between nodejs and express js.</h1>
          </div>
          <div>
            <p>
              Node.js and Express.js are both popular frameworks in the
              JavaScript ecosystem, but they serve different purposes. Node.js
              is a runtime environment for executing JavaScript code outside of
              a web browser. It provides an event-driven, non-blocking I/O model
              that makes it well-suited for building scalable, high-performance
              network applications. With Node.js, developers can use JavaScript
              to build server-side applications that can handle large volumes of
              connections and data. Express.js, on the other hand, is a web
              framework built on top of Node.js. It provides a set of features
              and tools for building web applications and APIs, such as routing,
              middleware, and templating engines. Express.js simplifies the
              process of building web applications by providing a high-level
              abstraction on top of the lower-level Node.js APIs. In summary,
              Node.js is a runtime environment for executing JavaScript code,
              while Express.js is a web framework built on top of Node.js that
              provides a set of features and tools for building web applications
              and APIs. You can use both together to build scalable,
              high-performance web applications.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1>
              What is a custom hook, and why will you create a custom hook?
            </h1>
          </div>
          <div>
            <p>
              In React, a custom hook is a JavaScript function that begins with
              the prefix "use" and allows you to reuse stateful logic between
              different components. It's a way to share common functionality
              such as fetching data, handling forms, or animating elements,
              among others, without duplicating code. You create a custom hook
              when you need to use the same logic or functionality in multiple
              components, or when you want to extract the logic from a component
              to make it reusable and more manageable. By creating a custom
              hook, you can encapsulate complex behavior and abstract it away
              from your components, making your code more modular, reusable, and
              easier to test. Custom hooks follow the same rules as React
              built-in hooks. They can call other hooks and can also return data
              or functions. To create a custom hook, you need to define a
              function that returns an array or an object with the state and
              functions you want to share, and then you can import and use it in
              your components. For example, you could create a custom hook that
              fetches data from an API endpoint and returns the data and a
              loading state. You could then reuse this hook in different
              components that need to fetch data from the same endpoint. By
              doing so, you would avoid duplicating code and simplify the logic
              in your components.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
