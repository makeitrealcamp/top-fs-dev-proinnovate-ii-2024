
# Modules

## Exercises

### Beginner

1. **Basic Import/Export**: Create two modules, one that exports a function to calculate the square of a number, and another that imports and uses this function.
2. **Default Export**: Create a module that exports a default function to log a message. Import and use this function in another file.
3. **Named Exports**: Create a module that exports multiple mathematical functions (e.g., add, subtract, multiply). Import and use these functions in another file.
4. **Import All Exports**: Create a module with several named exports. Import all of them into another file using the `* as` syntax.
5. **Re-exporting**: Create a module that imports functions from another module and then re-exports them.

### Medium

1. **Singleton Pattern**: Create a module that exports a configuration object and use it across multiple files in your application.
2. **Factory Pattern**: Implement a module that exports a factory function to create objects representing users. Use this factory function in another file to create several user objects.
3. **Utility Module**: Create a utility module with functions for string manipulation (e.g., capitalize, lowercase, reverse). Use these utilities in another file.
4. **Avoiding Circular Dependencies**: Refactor two modules that depend on each other to avoid circular dependencies. Use dependency injection or event emitters as an alternative approach.
5. **Dynamic Import**: Use dynamic `import()` to lazily load a module only when it is needed.

### Advanced

1. **Building a Module System**: Create a simple module system that allows you to define and require modules using closures and the revealing module pattern.
2. **Tree Shaking**: Set up a build process using a bundler like Webpack that supports tree shaking. Create a module with multiple exports and demonstrate how tree shaking removes unused exports.
3. **Module Composition**: Create several small modules that each handle a specific task. Compose them together in a larger module to build a complex feature (e.g., a form validation library).
4. **Testing Modules**: Write unit tests for a module using a testing framework like Jest. Ensure that each function is tested in isolation.
5. **Creating a Plugin System**: Create a plugin system where the core module provides a way to register and use plugins. Write a few plugins that extend the core module's functionality.
