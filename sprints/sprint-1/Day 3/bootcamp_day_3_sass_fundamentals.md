
# Bootcamp Day 3: Introduction to Sass

## Overview

Welcome to Day 3 of the bootcamp! Today, we’ll dive into **Sass** (Syntactically Awesome Style Sheets), a powerful CSS preprocessor that allows you to write cleaner, more maintainable stylesheets. By the end of the day, you’ll understand how to use Sass features like variables, nesting, mixins, and more to improve your CSS workflow.

## What is Sass?

Sass is a preprocessor scripting language that is compiled into CSS. It provides tools like variables, nested rules, and functions that make CSS more maintainable and easier to work with. Sass extends the capabilities of traditional CSS and allows you to write styles in a more programmatic way.

### Key Benefits of Using Sass

- **Variables**: Store values like colors, fonts, and spacing in variables for reuse throughout your stylesheet.
- **Nesting**: Write your CSS rules in a nested hierarchy to better reflect the structure of your HTML.
- **Partials and Imports**: Break your CSS into smaller, manageable files and import them as needed.
- **Mixins**: Reuse chunks of styles and avoid repetition by creating reusable code blocks.
- **Functions and Operations**: Perform calculations and apply logic directly in your stylesheets.
- **Inheritance**: Extend the styles of one class into another to reduce code duplication.

## Sass Fundamentals

### 1. Variables

Sass variables allow you to store values (e.g., colors, fonts, sizes) and reuse them throughout your stylesheet. This makes it easy to maintain consistency and update values globally.

**Example:**

```scss
// Defining Variables
$primary-color: #ff6a3e;
$secondary-color: #ffba43;
$font-stack: 'Roboto', sans-serif;

// Using Variables
body {
  font-family: $font-stack;
  background-color: $primary-color;
  color: #fff;
}

a {
  color: $secondary-color;
}
```

### 2. Nesting

Nesting in Sass allows you to write your CSS in a way that mirrors the structure of your HTML. It helps you avoid repetitive selectors and makes your code more organized.

**Example:**

```scss
nav {
  background-color: $primary-color;

  ul {
    list-style: none;

    li {
      display: inline-block;

      a {
        text-decoration: none;
        color: #fff;

        &:hover {
          color: $secondary-color;
        }
      }
    }
  }
}
```

### 3. Partials and Imports

Sass allows you to split your stylesheets into smaller, reusable files called partials. You can then import these partials into a main stylesheet.

**Example:**

- `_variables.scss`: Contains your variables.
- `_header.scss`: Contains your header styles.
- `_footer.scss`: Contains your footer styles.

**Importing Partial Files:**

```scss
@import 'variables';
@import 'header';
@import 'footer';
```

### 4. Mixins

Mixins allow you to create reusable chunks of code that you can include in multiple places in your stylesheet. You can even pass arguments to mixins to make them more flexible.

**Example:**

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
  height: 100vh;
}
```

### 5. Functions and Operations

Sass functions allow you to perform operations, manipulate values, and create reusable logic within your styles.

**Example:**

```scss
@function calculate-rem($px) {
  @return $px / 16px * 1rem;
}

body {
  font-size: calculate-rem(18px); // Output: 1.125rem
}
```

### 6. Inheritance (Extending)

The `@extend` directive allows you to share styles between selectors and avoid code repetition.

**Example:**

```scss
%button-base {
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
}

.button-primary {
  @extend %button-base;
  background-color: $primary-color;
  color: #fff;
}

.button-secondary {
  @extend %button-base;
  background-color: $secondary-color;
  color: #fff;
}
```

### 7. `@use` and `@forward`

The `@use` and `@forward` directives in Sass are part of the module system, which helps you organize your stylesheets into smaller, reusable chunks. These directives replace the older `@import` directive, offering better control and namespace management.

- **`@use`**: The `@use` directive loads a Sass file as a module, making its variables, mixins, and functions available with a namespace. This prevents naming conflicts and keeps your code organized.
  
- **`@forward`**: The `@forward` directive allows you to re-export a module’s variables, mixins, and functions, so they can be accessed by other modules.

#### `@use` Example

```scss
// _variables.scss
$primary-color: #ff6a3e;
$secondary-color: #ffba43;

// styles.scss
@use 'variables';

body {
  background-color: variables.$primary-color;
  color: variables.$secondary-color;
}
```

**Example:**

```scss
// _colors.scss
$primary-color: #ff6a3e;
$secondary-color: #ffba43;

// _typography.scss
$font-stack: 'Roboto', sans-serif;
$font-size: 16px;

// _index.scss
@forward 'colors';
@forward 'typography';

// main.scss
@use 'index';

body {
  font-family: index.$font-stack;
  font-size: index.$font-size;
  background-color: index.$primary-color;
}

```

## How @use and @forward Work Together

Modularity: With @use and @forward, you can break down your styles into modular files and control what gets exposed to other parts of your project.
Namespacing: The @use directive automatically creates a namespace (e.g., variables.$primary-color) to avoid naming conflicts.
Selective Exporting: With @forward, you can selectively export parts of a module. This is useful when you want to re-export some but not all variables or functions from a file.

``` scss
// _colors.scss
$primary-color: #ff6a3e;
$secondary-color: #ffba43;

// _mixins.scss
@mixin button($color) {
  background-color: $color;
  padding: 10px;
  border-radius: 4px;
}

// _index.scss
@forward 'colors';
@forward 'mixins';

// main.scss
@use 'index';

.button {
  @include index.button(index.$primary-color);
}

```

### Example Use Case

Consider a scenario where you have multiple Sass files that define variables, mixins, and functions. Instead of exposing all of these directly to your main stylesheet, you can create an index.scss file that uses @forward to selectively forward only the necessary items.

## Exercises

### Exercise 1: Create a Responsive Layout with Sass

1. Define variables for colors, font sizes, and breakpoints.
2. Create a responsive layout using nested media queries.
3. Use mixins for common styles like flexbox layout and center alignment.

**Example:**

```scss
$primary-color: #ff6a3e;
$secondary-color: #ffba43;
$breakpoint-md: 768px;

@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
  background-color: $primary-color;

  @media (min-width: $breakpoint-md) {
    background-color: $secondary-color;
  }
}
```

### Exercise 2: Create a Button Component with Mixins and Variables

1. Define variables for button colors and padding.
2. Create a mixin for the button styles.
3. Build different button variations using the mixin.

**Example:**

```scss
$button-padding: 10px 20px;
$button-primary-bg: #ff6a3e;
$button-secondary-bg: #ffba43;

@mixin button($bg-color) {
  padding: $button-padding;
  background-color: $bg-color;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}

.button-primary {
  @include button($button-primary-bg);
}

.button-secondary {
  @include button($button-secondary-bg);
}


### Exercise 3: Create a Responsive Navigation Menu with Partials and Nesting
1. Create partials for variables and navigation styles.
2. Use nesting to structure your CSS similar to your HTML.
3. Use media queries to adjust the navigation for different screen sizes.

## Resources
- **Sass Documentation**: [https://sass-lang.com/guide](https://sass-lang.com/guide)
- **Sass on MDN**: [https://developer.mozilla.org/en-US/docs/Web/Guide/Preprocessing/Sass](https://developer.mozilla.org/en-US/docs/Web/Guide/Preprocessing/Sass)
