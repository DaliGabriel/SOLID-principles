# SOLID Principles

## S: Single Responsibility Principle (SRP)[One task]

**Definition:** A class or component should have only one reason to change, meaning it should have a single responsibility or goal.

**Core Idea: "Do one thing and do it well."**

* A class or component should focus on a single, well-defined task.
* Attempting to handle multiple responsibilities leads to complex and difficult-to-maintain code.

**Analogy:** The chef should only focus on cooking the food.

**Example:**

Consider a component that fetches and formats data.

* If the API changes or the display format needs modification, you must alter the same component.
* This increases the likelihood of introducing errors due to the component handling multiple concerns.

**Benefits:**

* **Improved Organization:** Code is more structured and easier to understand.
* **Enhanced Maintainability:** Changes are isolated, reducing the risk of unintended side effects.
* **Increased Robustness:** Focused components are less prone to errors.
* **Better Testability:** It is easier to write specific tests for each component.

## O: Open Closed Principle (OCP) [yes, extensions, not modifications]

**Definition:** add and improve functionality without breaking code

**Core Idea: "Open for extensions and closed for modifications."**
* Open for extensions: You could add new features or modify existing code without breaking anything else.
* Closed for modifications: when a class or component works well, you should avoid changes to it.

**Analogy:** You could change the flavors of the coffee machine without changing the entire cables.

**Example:**

Consider a component that displays a list of items.

* Instead of hard-coding styles, you'd pass the class parameters to change the component styles.
* This allows you to reuse the component without changing the core code.
  

**Benefits:**

* **Preventing errors:** When the core code is closed, and you can only can add features, the risk is less.
* **Increased Flexibility:** Reducing risks makes it easier to add new functionalities.
* **Better Testability:** It is easier to write specific tests for each component.

## L: Liskov Substitution Principle (LSP) [Code reusability focus on inheritance]

**Definition:** Parent and child classes should have a "Shape" class. 

**Core Idea: "Make sure the inheritance is done correctly without affecting the parent and child's values."**
* If the children's class modifies the parent behavior in the LSP is broken

**Analogy:** 
* If you create a human class, you should let the human have different colored eyes, hair, etc.
* Imagine you have a "Bird" class that can "fly." Now, you create a "Penguin" class that inherits from "Bird." A penguin can't fly. If you try to use a penguin where you expect a flying bird, things will go wrong. This violates LSP

**Example:**

You want to display different user profiles

* Create a "shape" component, in this case: userProfile.
* To render the normal, admin and guess profile, you should use the shape inside the different user roles.

**Benefits:**

* **Improving code reusability:** You can use the shape classes.
* **Bug reduction:** when you ensure the shape class works correctly, decrease your bug opportunities.
* **Better Testability:**
* **Better Maintainability:**
* **Promotes strong contracts**

## I: Interface Segregation Principle (ISP) [Specific instead of Generality]

**Definition:** code shouldn't depend on an interface it doesn't need. 

**Core Idea: "It's better to have too many interfaces instead of one big interface."**
* Keep your interface short and clean.
* Shouldn't reuse an interface only to being easier.
* Interfaces should only have the required properties.
* One interface for each component

**Analogy:** 
* You have a Swiss army; you'd need an "Interface" for each tool.

**Example:**

You want to display different user profiles.

* The admin code should have its own interface.
* It's better to have one interface for each component.

**Benefits:**

* **Cleaner code:** You don't write code that you don't need.
* **Maintainability :** Smaller and focused interfaces are easier to understand and modify.
* **Portability**
* **Organization**
* **Fewer bugs**
* **Follow at the same time the SRP**

## D: Dependency Inversion Principle (DIP) [Abstraction Modules]

**Definition:** Abstract the logic to a low-level module. 

**Core Idea: "Not put the logic on the Main code."**
* Reduce dependency between main code and functionality.
* Low-level code doesn't depend on the high-level code.
* The abstractions should be easier to implement on the high-level code

**Analogy:** 
* You have pencil ink, where you could use a lot of different ranges of cartridges.

**Example:**

You want to notify the user by different communication channels, and you have a user profile module.

* The user profile wouldn't have directly the code to send notifications.
* We'd have a Notification interface where we'd define the notification methods like SMS, email, phone call, etc.
* On the Notification interface, we'd call each notification module.

**Benefits:**

* **Reducing cascading errors:** The main code, it doesn't depend on code implementations.
* **Testability :** Mock abstractions and test their implementations.
* **Maintainability:** Add new features without breaking the existing code base.
* **Flexibility and Extensibility:** Easily add or change actual implementations.
* **Reusability :** Easily add or change actual implementations.# SOLID
# SOLID
# SOLID-principles
